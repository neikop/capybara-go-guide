import { Button, SimpleGrid, Stack, Text } from '@chakra-ui/react'

import { skillData } from './data/skills'

const SourceDownloads = () => {
  const handleDownload = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(skillData, null, 2)], { type: 'application/json' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'CAPYBARA_SKILLS.json'
    link.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return (
    <Stack gap={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
        {[
          ['CAPYBARA_GO_MEMORY.md', 'Tổng hợp toàn game (.md)'],
          ['WHISPERER_14_NGAY_DAU.md', 'Kế hoạch 14 ngày (.md)'],
          ['WHISPERER_SKILL_TIER_LIST.md', 'Snapshot skill ngày 16/09 (.md)'],
          ['GUIDE_MAINTENANCE.md', 'Cách cập nhật website'],
        ].map(([file, label]) => (
          <Button asChild h="auto" key={file} p={3} variant="outline" whiteSpace="normal">
            <a href={`${import.meta.env.BASE_URL}docs/${file}`} rel="noreferrer" target="_blank">
              {label}
            </a>
          </Button>
        ))}
        <Button onClick={handleDownload} variant="outline">
          Tải dữ liệu skill hiện tại (.json)
        </Button>
      </SimpleGrid>
      <Text color="fg.muted">
        Markdown là tài liệu nền có ngày riêng. Website hiện tại lấy nội dung từ dữ liệu React/TypeScript; dùng mục In /
        PDF để lưu bản đọc đầy đủ.
      </Text>
    </Stack>
  )
}
export default SourceDownloads
