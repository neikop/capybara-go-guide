import { Badge, Button, HStack, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { guideContent } from './data/content'

const GuideNavigation = ({ activeId, onNavigate }: { activeId: string; onNavigate?: () => void }) => (
  <Stack gap={6} h="full" minH={0}>
    <Stack gap={1}>
      <Text color="primary.fg" textStyle="titleLarge">
        CAPYBARA GO
      </Text>
      <Text color="fg.muted" textStyle="body">
        Sổ tay nạp nhẹ
      </Text>
    </Stack>
    <HStack justify="space-between">
      <Text color="fg.muted" textStyle="body">
        Nội dung guide
      </Text>
      <Badge>{guideContent.sections.length}</Badge>
    </HStack>
    <Stack aria-label="Các mục hướng dẫn" as="nav" flex={1} gap={1} minH={0} overflowY="auto">
      {guideContent.sections.map((section, index) => (
        <Button
          asChild
          colorPalette="primary"
          h="auto"
          justifyContent="start"
          key={section.id}
          minH="control.lg"
          onClick={() => onNavigate?.()}
          px={3}
          py={3}
          textAlign="start"
          variant={activeId === section.id ? 'subtle' : 'ghost'}
          whiteSpace="normal"
        >
          <Link aria-current={activeId === section.id ? 'page' : undefined} to={`/#${section.id}`}>
            <Text color="fg.muted" textStyle="body">
              {String(index + 1).padStart(2, '0')}
            </Text>
            <Text textStyle="body">{section.title}</Text>
          </Link>
        </Button>
      ))}
    </Stack>
    <Stack borderTopWidth="1px" gap={1} pt={4}>
      <Text textStyle="body">{guideContent.meta.focus}</Text>
      <Text color="fg.muted" textStyle="body">
        MeowDB · {guideContent.meta.updated}
      </Text>
    </Stack>
  </Stack>
)
export default GuideNavigation
