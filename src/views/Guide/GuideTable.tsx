import { Box, Stack, Table, Text } from '@chakra-ui/react'

const GuideTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <>
    <Box
      aria-label={headers.join(' · ')}
      borderRadius="md"
      borderWidth="1px"
      className="guide-desktop-table"
      display={{ base: 'none', md: 'block' }}
      overflowX="auto"
      role="region"
      tabIndex={0}
    >
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {headers.map((header) => (
              <Table.ColumnHeader key={header}>{header}</Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row.join('|')}>
              {row.map((cell, index) => (
                <Table.Cell
                  key={headers[index]}
                  lang={headers[index] === 'English description' ? 'en' : undefined}
                  minW="160px"
                  verticalAlign="top"
                  whiteSpace="normal"
                >
                  {cell}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
    <Stack className="guide-mobile-table" display={{ base: 'flex', md: 'none' }} gap={4}>
      {rows.map((row) => (
        <Stack as="dl" bg="bg.canvas" borderRadius="md" borderWidth="1px" gap={4} key={row.join('|')} p={4}>
          {row.map((cell, index) => (
            <Stack gap={1} key={headers[index]}>
              <Text as="dt" color="fg.muted" textStyle="body">
                {headers[index]}
              </Text>
              <Text
                as="dd"
                lang={headers[index] === 'English description' ? 'en' : undefined}
                textStyle={index === 0 ? 'title' : 'bodyLarge'}
              >
                {cell}
              </Text>
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  </>
)
export default GuideTable
