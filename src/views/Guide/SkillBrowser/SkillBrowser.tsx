import { Badge, Button, HStack, Input, NativeSelect, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { FormField } from 'components/ui'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import { skillData } from '../data/skills'
import GuideTable from '../GuideTable'
import { filterSkills } from '../logic'

const SkillBrowser = ({ isPrint = false }: { isPrint?: boolean }) => {
  const [params] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const setParams = (update: (previous: URLSearchParams) => URLSearchParams) =>
    navigate(
      {
        pathname: location.pathname,
        // History updates before React finishes rendering a navigation. Preserve rapid successive edits.
        search: '?' + update(new URLSearchParams(window.location.search)).toString(),
        hash: location.hash,
      },
      { replace: true, preventScrollReset: true },
    )
  const query = params.get('q') ?? ''
  const tier = params.get('tier') ?? ''
  const scope = params.get('scope') ?? 'Story / nâng cấp'
  const rows = isPrint ? skillData.rows : filterSkills(skillData.rows, { query, tier, scope })
  const handleFilter = (key: string, value: string) =>
    setParams((previous) => {
      const next = new URLSearchParams(previous)
      next.set(key, value)
      return next
    })
  const handlePreset = (value: string) =>
    setParams((previous) => {
      const next = new URLSearchParams(previous)
      next.set('q', value)
      next.delete('tier')
      next.delete('scope')
      return next
    })
  return (
    <Stack gap={4}>
      {!isPrint && (
        <>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
            <FormField htmlFor="skill-search" label="Tìm skill">
              <Input
                id="skill-search"
                onChange={(event) => handleFilter('q', event.target.value)}
                placeholder="Basic Attack, dagger, hồi máu…"
                type="search"
                value={query}
              />
            </FormField>
            <FormField htmlFor="skill-tier" label="Tier">
              <NativeSelect.Root>
                <NativeSelect.Field
                  id="skill-tier"
                  onChange={(event) => handleFilter('tier', event.target.value)}
                  value={tier}
                >
                  <option value="">Tất cả tier</option>
                  {Object.entries(skillData.tier_labels).map(([key, label]) => (
                    <option key={key} value={key}>
                      {key} — {label}
                    </option>
                  ))}
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </FormField>
            <FormField htmlFor="skill-scope" label="Nhóm">
              <NativeSelect.Root>
                <NativeSelect.Field
                  id="skill-scope"
                  onChange={(event) => handleFilter('scope', event.target.value)}
                  value={scope}
                >
                  {['Story / nâng cấp', 'Synergy Lv1', 'Hệ mở sau / nguồn khác', ''].map((value) => (
                    <option key={value} value={value}>
                      {value || 'Toàn bộ bản tra cứu'}
                    </option>
                  ))}
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </FormField>
          </SimpleGrid>
          <HStack gap={2} wrap="wrap">
            {[
              ['Basic Attack', 'Basic Attack'],
              ['Dagger', 'Dagger'],
              ['Hồi phục', 'hồi'],
              ['Bỏ bộ lọc', ''],
            ].map(([label, value]) => (
              <Button key={label} onClick={() => handlePreset(value ?? '')} size="sm" variant="outline">
                {label}
              </Button>
            ))}
          </HStack>
        </>
      )}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
        {Object.entries(skillData.tier_labels).map(([key, label]) => (
          <HStack align="start" key={key}>
            <Badge colorPalette={key === 'D' ? 'error' : key === 'S' ? 'success' : 'primary'}>{key}</Badge>
            <Text color="fg.muted" textStyle="body">
              {label}
            </Text>
          </HStack>
        ))}
      </SimpleGrid>
      <Text color="fg.muted" role="status" textStyle="body">
        {rows.length} descriptions · {new Set(rows.map((row) => row.name)).size} tên skill · Tổng{' '}
        {skillData.rows.length} descriptions
      </Text>
      {rows.length ? (
        <GuideTable
          headers={['Tier', 'Skill', 'English description', 'Khi nên chọn']}
          rows={rows.map((row) => [
            row.tier,
            `${row.name}${row.variant ? ' — ' + row.variant : ''} · ${row.scope}`,
            row.description,
            row.note,
          ])}
        />
      ) : (
        <Text role="status">Không có kết quả. Thử bỏ tier hoặc chọn “Toàn bộ bản tra cứu”.</Text>
      )}
    </Stack>
  )
}
export default SkillBrowser
