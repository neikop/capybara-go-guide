import { Badge, Box, Card, Heading, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { ChakraSelect, type ChakraSelectOption } from 'components/select'
import { env } from 'config/env'
import { useHealthQuery } from 'hooks/useHealthQuery'
import { DateTime } from 'luxon'
import { type Density, useAppStore } from 'store/appStore'

const stack = ['Chakra UI', 'TanStack Query', 'Axios', 'Luxon', 'React Hook Form', 'React Select', 'Zustand']

const densityOptions: ChakraSelectOption[] = [
  { label: 'Comfortable', value: 'comfortable' },
  { label: 'Compact', value: 'compact' },
]

const Home = () => {
  const density = useAppStore((state) => state.density)
  const setDensity = useAppStore((state) => state.setDensity)
  const healthQuery = useHealthQuery()
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)

  return (
    <Stack gap={8}>
      <Stack gap={3} maxW="760px">
        <Text color="primary.main" textStyle="meta">
          Production-oriented starter
        </Text>
        <Heading as="h1" textStyle="display">
          A clean baseline for the next React app.
        </Heading>
        <Text color="fg.muted" textStyle="body">
          A modern React foundation with reusable components, semantic theme tokens, data fetching, forms, routing, and
          client-side state.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
        <Card.Root background="bg.canvas" borderRadius="lg" variant="outline">
          <Card.Body gap={2}>
            <Text color="fg.subtle" textStyle="meta">
              Local time · Luxon
            </Text>
            <Text textStyle="title">{now}</Text>
          </Card.Body>
        </Card.Root>

        <Card.Root background="bg.canvas" borderRadius="lg" variant="outline">
          <Card.Body gap={2}>
            <Text color="fg.subtle" textStyle="meta">
              API health · Query + Axios
            </Text>
            <HStack>
              <Badge colorPalette={healthQuery.data ? 'success' : 'warning'} variant="subtle">
                {env.apiBaseUrl ? (healthQuery.data?.status ?? healthQuery.status) : 'Not configured'}
              </Badge>
            </HStack>
          </Card.Body>
        </Card.Root>

        <Card.Root background="bg.canvas" borderRadius="lg" variant="outline">
          <Card.Body gap={2}>
            <Text color="fg.subtle" textStyle="meta">
              Preference · Zustand
            </Text>
            <ChakraSelect
              onChange={(value) => setDensity(value as Density)}
              options={densityOptions}
              placeholder="Choose density"
              value={density}
            />
          </Card.Body>
        </Card.Root>
      </SimpleGrid>

      <Box background="bg.canvas" borderRadius="lg" borderWidth={1} p={{ base: 5, md: 6 }}>
        <Stack gap={4}>
          <Text textStyle="title">Included stack</Text>
          <HStack flexWrap="wrap" gap={2}>
            {stack.map((item) => (
              <Badge colorPalette="primary" key={item} variant="surface">
                {item}
              </Badge>
            ))}
          </HStack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Home
