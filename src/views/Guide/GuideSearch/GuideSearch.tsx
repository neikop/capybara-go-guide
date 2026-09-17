import { Button, Dialog, Input, Stack, Text } from '@chakra-ui/react'
import { DialogContent } from 'components/ui'
import { useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { guideContent } from '../data/content'
import { skillData } from '../data/skills'
import { foldSearch, sectionSearchText } from '../logic'

const GuideSearch = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const folded = foldSearch(query.trim())
  const sectionResults = folded
    ? guideContent.sections.filter((section) => sectionSearchText(section).includes(folded))
    : []
  const skillMatches = folded
    ? skillData.rows.filter((row) => foldSearch(`${row.name} ${row.description} ${row.note}`).includes(folded))
    : []
  const skillResults = [...new Map(skillMatches.map((row) => [row.name, row])).values()]
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const target = event.target
      if (
        event.key === '/' &&
        !event.ctrlKey &&
        !event.metaKey &&
        !(target instanceof HTMLElement && target.closest('input,textarea,select,[contenteditable="true"]'))
      ) {
        event.preventDefault()
        setIsOpen(true)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])
  return (
    <Dialog.Root
      initialFocusEl={() => inputRef.current}
      onOpenChange={(details) => setIsOpen(details.open)}
      open={isOpen}
      size="lg"
    >
      <Dialog.Trigger asChild>
        <Button aria-label="Tìm toàn bộ guide và skill" variant="outline">
          <FiSearch />
          <Text hideBelow="md">Tìm guide hoặc skill…</Text>
        </Button>
      </Dialog.Trigger>
      <DialogContent closeLabel="Đóng tìm kiếm">
        <Dialog.Header>
          <Dialog.Title>Tìm guide và skill</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <Stack gap={4}>
            <Input
              aria-label="Tìm toàn bộ guide và skill"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Panda, Basic Attack, gems…"
              ref={inputRef}
              type="search"
              value={query}
            />
            <Text color="fg.muted" role="status">
              {folded
                ? `${sectionResults.length} mục hướng dẫn · ${skillResults.length} tên skill. Hiển thị tối đa 6 kết quả mỗi nhóm.`
                : 'Nhập tên skill tiếng Anh hoặc nội dung cần tìm. Phím / để mở tìm kiếm.'}
            </Text>
            <Stack gap={2} maxH="60vh" overflowY="auto">
              {sectionResults.slice(0, 6).map((section) => (
                <Dialog.ActionTrigger asChild key={section.id}>
                  <Button asChild h="auto" justifyContent="start" p={3} variant="ghost" whiteSpace="normal">
                    <Link to={`/#${section.id}`}>
                      <Stack align="start" gap={1}>
                        <Text color="fg.muted" textStyle="body">
                          Hướng dẫn
                        </Text>
                        <Text textStyle="title">{section.title}</Text>
                      </Stack>
                    </Link>
                  </Button>
                </Dialog.ActionTrigger>
              ))}
              {skillResults.slice(0, 6).map((row) => (
                <Dialog.ActionTrigger asChild key={row.name}>
                  <Button asChild h="auto" justifyContent="start" p={3} variant="ghost" whiteSpace="normal">
                    <Link to={`/?${new URLSearchParams({ q: row.name, scope: '' })}#skills`}>
                      <Stack align="start" gap={1}>
                        <Text color="primary.fg" textStyle="body">
                          Skill · {row.tier}
                        </Text>
                        <Text lang="en" textStyle="title">
                          {row.name}
                        </Text>
                        <Text color="fg.muted" lang="en" textStyle="body">
                          {row.description}
                        </Text>
                      </Stack>
                    </Link>
                  </Button>
                </Dialog.ActionTrigger>
              ))}
              {folded && !sectionResults.length && !skillResults.length && (
                <Text>Không có kết quả. Thử từ ngắn hơn hoặc tên tiếng Anh.</Text>
              )}
            </Stack>
          </Stack>
        </Dialog.Body>
      </DialogContent>
    </Dialog.Root>
  )
}
export default GuideSearch
