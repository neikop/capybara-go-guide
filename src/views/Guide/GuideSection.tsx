import { Alert, Box, Heading, HStack, Link, List, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import type { GuideSectionData } from './types'

import DailyChecklist from './DailyChecklist/DailyChecklist'
import { guideContent } from './data/content'
import { referenceSources } from './data/sources'
import GemBudget from './GemBudget'
import GuideTable from './GuideTable'
import SkillBrowser from './SkillBrowser/SkillBrowser'
import SourceDownloads from './SourceDownloads'

const GuideSection = ({ section, isPrint = false }: { isPrint?: boolean; section: GuideSectionData }) => (
  <Stack aria-labelledby={`${section.id}-title`} as="section" gap={6}>
    <Stack
      bg={section.id === 'overview' ? 'primary.surface' : undefined}
      borderRadius="lg"
      gap={3}
      p={section.id === 'overview' ? { base: 6, md: 8 } : 0}
    >
      <Text color="primary.fg" fontWeight="mid" textStyle="body">
        {section.kicker}
      </Text>
      <Heading as="h1" id={`${section.id}-title`} textStyle={section.id === 'overview' ? 'display' : 'sectionTitle'}>
        {section.id === 'overview' ? 'Chơi có hướng. Tiến xa hơn.' : section.title}
      </Heading>
      <Text color="fg.muted" textStyle="bodyLarge">
        {section.summary}
      </Text>
    </Stack>
    {section.blocks.map((block, index) => {
      const key = `${section.id}-${block.type}-${index}`
      switch (block.type) {
        case 'budget':
          return isPrint ? null : <GemBudget key={key} />
        case 'callout':
          return (
            <Alert.Root alignItems="start" colorPalette="primary" key={key} status="info">
              <Alert.Indicator />
              <Alert.Content>
                <Alert.Title>{block.title}</Alert.Title>
                <Alert.Description>{block.text}</Alert.Description>
              </Alert.Content>
            </Alert.Root>
          )
        case 'cards':
          return (
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} key={key}>
              {block.items.map((item) => (
                <Stack bg="bg.canvas" borderRadius="md" borderWidth="1px" gap={3} key={item.title} p={5}>
                  <Heading as="h2" textStyle="title">
                    {item.title}
                  </Heading>
                  <Text color="fg.muted" flex={1} textStyle="bodyLarge">
                    {item.text}
                  </Text>
                  {item.target && (
                    <Link asChild>
                      <RouterLink to={`/#${item.target}`}>Xem hướng dẫn →</RouterLink>
                    </Link>
                  )}
                </Stack>
              ))}
            </SimpleGrid>
          )
        case 'checklist':
          return <DailyChecklist isPrint={isPrint} items={block.items} key={key} />
        case 'downloads':
          return isPrint ? null : <SourceDownloads key={key} />
        case 'h':
          return (
            <Heading as="h2" key={key} textStyle="titleLarge">
              {block.text}
            </Heading>
          )
        case 'list':
          return (
            <List.Root gap={3} key={key} paddingStart={5}>
              {block.items.map((item) => (
                <List.Item key={item} textStyle="bodyLarge">
                  {item}
                </List.Item>
              ))}
            </List.Root>
          )
        case 'p':
          return (
            <Text key={key} textStyle="bodyLarge">
              {block.text}
            </Text>
          )
        case 'skills':
          return <SkillBrowser isPrint={isPrint} key={key} />
        case 'sources':
          return (
            <Stack gap={4} key={key}>
              <Heading as="h2" textStyle="titleLarge">
                Chỉ mục {referenceSources.length} nguồn MeowDB
              </Heading>
              <SimpleGrid as="ol" columns={{ base: 1, md: 2 }} gap={3} paddingStart={5}>
                {referenceSources.map((source) => (
                  <Box as="li" key={source.url}>
                    <Link href={source.url} rel="noreferrer" target="_blank">
                      {source.title} ↗
                    </Link>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          )
        case 'table':
          return <GuideTable headers={block.headers} key={key} rows={block.rows} />
      }
    })}
    <Stack as="footer" borderTopWidth="1px" gap={2} pt={5}>
      <Text textStyle="title">Nguồn của mục này</Text>
      <HStack gap={3} wrap="wrap">
        {section.sources.map((id) => {
          const source = guideContent.sources[id]
          return source ? (
            <Link href={source.url} key={id} rel="noreferrer" target="_blank">
              {source.title} ↗
            </Link>
          ) : null
        })}
      </HStack>
      <Text color="fg.muted" textStyle="body">
        Khuyến nghị theo điều kiện build; mô tả và luật trong game có quyền ưu tiên.
      </Text>
    </Stack>
  </Stack>
)
export default GuideSection
