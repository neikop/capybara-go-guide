import { Button, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { guideContent } from './data/content'
import GuideSection from './GuideSection'
import './guide.scss'

const PrintGuide = () => (
  <Stack className="print-guide" gap={8} p={{ base: 4, md: 8 }}>
    <Stack className="print-controls" gap={3}>
      <Heading as="h1">Bản in toàn bộ guide</Heading>
      <Text>
        Gồm {guideContent.sections.length} mục và toàn bộ skill, không phụ thuộc bộ lọc ở trang tra cứu. Có thể chọn
        Save as PDF trong hộp thoại in.
      </Text>
      <HStack>
        <Button onClick={() => window.print()}>In / Lưu PDF</Button>
        <Button asChild variant="outline">
          <Link to="/">Về guide</Link>
        </Button>
      </HStack>
    </Stack>
    {guideContent.sections.map((section) => (
      <GuideSection isPrint key={section.id} section={section} />
    ))}
  </Stack>
)
export default PrintGuide
