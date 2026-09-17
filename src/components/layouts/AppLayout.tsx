import { Button, HStack, Stack } from '@chakra-ui/react'
import { ColorModeButton } from 'components/app'
import { Link, Outlet } from 'react-router-dom'

const AppLayout = () => (
  <Stack gap={6} p={{ base: 4, md: 8 }}>
    <HStack justify="space-between">
      <Button asChild variant="outline">
        <Link to="/">← Capybara Go Guide</Link>
      </Button>
      <ColorModeButton />
    </HStack>
    <Outlet />
  </Stack>
)
export default AppLayout
