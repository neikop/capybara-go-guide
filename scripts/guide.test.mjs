import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import ts from 'typescript'

// Exercise the same pure TypeScript modules consumed by React without a browser or additional test framework.
async function loadModule(relativePath) {
  const source = await readFile(new URL(relativePath, import.meta.url), 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2023, module: ts.ModuleKind.ESNext },
  })
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
}
const { filterSkills, evaluateBudget, readDailyProgress, localDate, sectionSearchText } =
  await loadModule('../src/views/Guide/logic.ts')
const { skillData } = await loadModule('../src/views/Guide/data/skills.ts')
const { guideContent } = await loadModule('../src/views/Guide/data/content.ts')
const { referenceSources } = await loadModule('../src/views/Guide/data/sources.ts')

test('migration preserves every original English name/description and variant', async () => {
  const snapshot = JSON.parse(
    await readFile(new URL('../docs/sources/skills-source-2026-09-16.json', import.meta.url), 'utf8'),
  )
  const expected = [...snapshot.descriptions, ...snapshot.synergy_lv1].map((row) => row.slice(0, 2))
  assert.deepEqual(
    skillData.rows.map((row) => [row.name, row.description]),
    expected,
  )
  assert.equal(skillData.rows.length, 376)
  assert.equal(new Set(skillData.rows.map((row) => row.name)).size, 314)
})
test('all guide links resolve to sections or source records', () => {
  const ids = new Set(guideContent.sections.map((section) => section.id))
  assert.equal(ids.size, 14)
  assert.equal(referenceSources.length, 51)
  for (const section of guideContent.sections) {
    for (const source of section.sources) assert.ok(guideContent.sources[source], source)
    for (const block of section.blocks) {
      if (block.type === 'cards') for (const item of block.items) if (item.target) assert.ok(ids.has(item.target))
      if (block.type === 'table') for (const row of block.rows) assert.equal(row.length, block.headers.length)
    }
  }
})
test('search/filter preserves scopes, accent folding, variants, and original order', () => {
  const before = JSON.stringify(skillData.rows)
  assert.equal(filterSkills(skillData.rows, { query: '', tier: '', scope: 'Story / nâng cấp' }).length, 282)
  assert.equal(filterSkills(skillData.rows, { query: '', tier: '', scope: 'Synergy Lv1' }).length, 10)
  assert.equal(filterSkills(skillData.rows, { query: '', tier: '', scope: 'Hệ mở sau / nguồn khác' }).length, 84)
  const hits = filterSkills(skillData.rows, { query: 'hoi', tier: 'A', scope: '' })
  assert.ok(hits.length > 0)
  assert.ok(hits.every((row) => row.tier === 'A'))
  assert.equal(filterSkills(skillData.rows, { query: 'not_a_real_skill_123', tier: '', scope: '' }).length, 0)
  assert.equal(JSON.stringify(skillData.rows), before)
  assert.ok(guideContent.sections.some((section) => sectionSearchText(section).includes('panda')))
})
test('gem budget handles empty, exact reserve, shortage and invalid input', () => {
  assert.equal(evaluateBudget('', '32000', '0').status, 'info')
  assert.equal(evaluateBudget('42000', '32000', '10000').status, 'success')
  assert.match(evaluateBudget('42000', '32000', '10000').message, /0 gems/)
  assert.equal(evaluateBudget('50000', '32000', '25000').status, 'warning')
  assert.match(evaluateBudget('100', '0', '200').message, /Thiếu 100/)
  for (const invalid of ['-1', '1.5', 'abc', 'Infinity', '9007199254740992'])
    assert.equal(evaluateBudget(invalid, '0', '0').status, 'warning')
})
test('daily progress survives same day, resets on rollover, and rejects invalid storage', () => {
  const date = localDate(new Date(2026, 8, 17, 23, 59))
  assert.equal(date, '2026-09-17')
  assert.deepEqual(readDailyProgress(JSON.stringify({ date, done: ['0', '0', '2', null] }), date), {
    date,
    done: ['0', '2'],
  })
  assert.deepEqual(readDailyProgress(JSON.stringify({ date: '2026-09-16', done: ['0'] }), date), { date, done: [] })
  for (const value of ['bad-json', 'null', '[]', '{"date":"2026-09-17","done":true}', null])
    assert.deepEqual(readDailyProgress(value, date), { date, done: [] })
})
