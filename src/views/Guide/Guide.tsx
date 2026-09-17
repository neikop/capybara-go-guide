import { Badge, Box, Button, Drawer, Flex, Grid, HStack, IconButton, Link, Stack, Text } from '@chakra-ui/react'
import { ColorModeButton } from 'components/app'
import { DrawerContent } from 'components/ui'
import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiPrinter } from 'react-icons/fi'
import { Link as RouterLink, useLocation } from 'react-router-dom'

import { guideContent } from './data/content'
import GuideNavigation from './GuideNavigation'
import GuideSearch from './GuideSearch/GuideSearch'
import GuideSection from './GuideSection'
import './guide.scss'

const Guide = () => {
  const location = useLocation()
  const mainRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const section = guideContent.sections.find((item) => item.id === location.hash.slice(1)) ?? guideContent.sections[0]
  useEffect(() => {
    document.title = `${section?.title ?? 'Sổ tay'} · Capybara Go`
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [section?.id, section?.title])
  if (!section) return null
  const index = guideContent.sections.indexOf(section)
  const previous = guideContent.sections[index - 1]
  const next = guideContent.sections[index + 1]
  return (
    <>
      <Link
        _focus={{ transform: 'none' }}
        bg="bg.canvas"
        href="#main-content"
        left={2}
        onClick={(event) => {
          event.preventDefault()
          mainRef.current?.focus()
        }}
        p={3}
        position="fixed"
        top={2}
        transform="translateY(-200%)"
        zIndex="skipNav"
      >
        Đến nội dung chính
      </Link>
      <Grid minH="100dvh" templateColumns={{ base: 'minmax(0, 1fr)', lg: '272px minmax(0, 1fr)' }}>
        <Box as="aside" bg="bg.canvas" borderRightWidth="1px" h="100dvh" hideBelow="lg" p={5} position="sticky" top={0}>
          <GuideNavigation activeId={section.id} />
        </Box>
        <Box minW={0}>
          <HStack
            as="header"
            bg="bg.canvas"
            borderBottomWidth="1px"
            gap={3}
            p={4}
            position="sticky"
            top={0}
            zIndex="sticky"
          >
            <Drawer.Root
              onOpenChange={(details) => setIsMenuOpen(details.open)}
              open={isMenuOpen}
              placement="start"
              size="xs"
            >
              <Drawer.Trigger asChild>
                <IconButton aria-label="Mở mục lục" hideFrom="lg" variant="ghost">
                  <FiMenu />
                </IconButton>
              </Drawer.Trigger>
              <DrawerContent closeLabel="Đóng mục lục">
                <Drawer.Header>
                  <Drawer.Title>Mục lục</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <GuideNavigation activeId={section.id} onNavigate={() => setIsMenuOpen(false)} />
                </Drawer.Body>
              </DrawerContent>
            </Drawer.Root>
            <Text color="fg.muted" flex={1} hideBelow="xl" textStyle="body">
              {section.title}
            </Text>
            <Flex align="center" flex={1} gap={2} justify="flex-end">
              <GuideSearch />
              <ColorModeButton />
              <Button asChild variant="outline">
                <RouterLink aria-label="In / PDF" to="/print">
                  <FiPrinter />
                  <Text hideBelow="sm">In / PDF</Text>
                </RouterLink>
              </Button>
            </Flex>
          </HStack>
          <Stack
            as="main"
            gap={6}
            id="main-content"
            maxW="1280px"
            minW={0}
            p={{ base: 4, md: 8 }}
            ref={mainRef}
            tabIndex={-1}
          >
            <HStack gap={3} wrap="wrap">
              <Badge colorPalette="primary">Guide {guideContent.meta.version}</Badge>
              <Text color="fg.muted" textStyle="body">
                Build có điều kiện · Nguồn có thể tra lại
              </Text>
            </HStack>
            <GuideSection section={section} />
            <HStack
              aria-label="Mục trước và tiếp theo"
              as="nav"
              borderTopWidth="1px"
              gap={4}
              justify="space-between"
              pt={5}
              wrap="wrap"
            >
              {previous && (
                <Link asChild>
                  <RouterLink to={`/#${previous.id}`}>← {previous.title}</RouterLink>
                </Link>
              )}
              <Text color="fg.muted" textStyle="body">
                {index + 1} / {guideContent.sections.length}
              </Text>
              {next && (
                <Link asChild>
                  <RouterLink to={`/#${next.id}`}>{next.title} →</RouterLink>
                </Link>
              )}
            </HStack>
            <Text as="footer" color="fg.muted" textStyle="body">
              Hướng dẫn cộng đồng · Không phải website chính thức của game
            </Text>
          </Stack>
        </Box>
      </Grid>
    </>
  )
}
export default Guide
