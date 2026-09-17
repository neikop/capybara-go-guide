import type { DailyProgress, GuideBlock, GuideSectionData, SkillFilters, SkillRow } from './types'

export const foldSearch = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')

export function filterSkills(rows: SkillRow[], filters: SkillFilters) {
  const query = foldSearch(filters.query.trim())
  return rows
    .filter(
      (row) =>
        (!filters.tier || row.tier === filters.tier) &&
        (!filters.scope || row.scope === filters.scope) &&
        (!query || foldSearch(`${row.name} ${row.description} ${row.note}`).includes(query)),
    )
    .sort((a, b) => 'SABCDX'.indexOf(a.tier) - 'SABCDX'.indexOf(b.tier) || a.name.localeCompare(b.name))
}

function blockText(block: GuideBlock): string {
  switch (block.type) {
    case 'callout':
      return `${block.title} ${block.text}`
    case 'cards':
      return block.items.map((item) => `${item.title} ${item.text}`).join(' ')
    case 'checklist':
    case 'list':
      return block.items.join(' ')
    case 'h':
    case 'p':
      return block.text
    case 'table':
      return [...block.headers, ...block.rows.flat()].join(' ')
    default:
      return ''
  }
}
export const sectionSearchText = (section: GuideSectionData) =>
  foldSearch([section.title, section.summary, ...section.blocks.map(blockText)].join(' '))

export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
export function readDailyProgress(raw: null | string, date: string): DailyProgress {
  const empty = { date, done: [] }
  if (!raw) return empty
  try {
    const parsed: unknown = JSON.parse(raw)
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      !('date' in parsed) ||
      parsed.date !== date ||
      !('done' in parsed) ||
      !Array.isArray(parsed.done)
    )
      return empty
    return { date, done: [...new Set(parsed.done.filter((item): item is string => typeof item === 'string'))] }
  } catch {
    return empty
  }
}

export function evaluateBudget(balanceInput: string, reserveInput: string, spendInput: string) {
  const inputs = [balanceInput, reserveInput, spendInput]
  if (inputs.some((input) => input.trim() === ''))
    return { status: 'info', message: 'Nhập số dư, quỹ dự trữ và khoản chi để tính.' } as const
  const [balance = 0, reserve = 0, spend = 0] = inputs.map(Number)
  if ([balance, reserve, spend].some((value) => !Number.isSafeInteger(value) || value < 0))
    return { status: 'warning', message: 'Nhập số gems nguyên, không âm và trong khoảng hợp lệ.' } as const
  const remaining = balance - spend
  const format = (value: number) => value.toLocaleString('vi-VN')
  if (remaining < 0)
    return {
      status: 'warning',
      message: `Thiếu ${format(-remaining)} gems để chi khoản này. Chưa tính lượt miễn phí hay thu nhập tương lai.`,
    } as const
  if (remaining < reserve)
    return {
      status: 'warning',
      message: `Còn ${format(remaining)} gems sau chi — thấp hơn quỹ muốn giữ ${format(reserve - remaining)} gems. Cân nhắc chờ hoặc giảm khoản chi.`,
    } as const
  return {
    status: 'success',
    message: `Còn ${format(remaining)} gems sau chi; trên quỹ dự trữ ${format(remaining - reserve)} gems. Vẫn cần kiểm phần thưởng và mốc bảo đảm trước khi dùng.`,
  } as const
}
