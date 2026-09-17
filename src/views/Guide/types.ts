export type Source = { title: string; url: string }
export type GuideBlock =
  | { headers: string[]; rows: string[][]; type: 'table' }
  | { items: string[]; type: 'checklist' | 'list' }
  | { items: { target?: string; text: string; title: string }[]; type: 'cards' }
  | { text: string; title: string; type: 'callout' }
  | { text: string; type: 'h' | 'p' }
  | { type: 'budget' | 'downloads' | 'skills' | 'sources' }
export type GuideSectionData = {
  blocks: GuideBlock[]
  id: string
  kicker: string
  sources: string[]
  summary: string
  title: string
}
export type GuideContent = {
  meta: { focus: string; title: string; updated: string; version: string }
  sections: GuideSectionData[]
  sources: Record<string, Source>
}
export type SkillTier = 'A' | 'B' | 'C' | 'D' | 'S' | 'X'
export type SkillScope = 'Hệ mở sau / nguồn khác' | 'Story / nâng cấp' | 'Synergy Lv1'
export type SkillRow = {
  description: string
  key: string
  name: string
  note: string
  scope: SkillScope
  tier: SkillTier
  variant: string
}
export type SkillData = {
  meta: {
    build_source: string
    checked: string
    context: string
    reviewed: number
    source: string
    tier_source: string
    title: string
  }
  rows: SkillRow[]
  tier_labels: Record<SkillTier, string>
}
export type SkillFilters = { query: string; scope: string; tier: string }
export type DailyProgress = { date: string; done: string[] }
