import { Button, Checkbox, HStack, Stack, Text } from '@chakra-ui/react'

import { useDailyChecklist } from './useDailyChecklist'

const DailyChecklist = ({ items, isPrint = false }: { isPrint?: boolean; items: string[] }) => {
  const { progress, hasStorageError, toggle, reset } = useDailyChecklist()
  return (
    <Stack bg="bg.canvas" borderRadius="md" borderWidth="1px" gap={4} p={4}>
      <HStack justify="space-between" wrap="wrap">
        <Text role="status">
          {items.filter((_, index) => progress.done.includes(String(index))).length}/{items.length} hoàn thành ·{' '}
          {progress.date.split('-').reverse().join('/')}
        </Text>
        {!isPrint && (
          <Button onClick={reset} size="sm" variant="outline">
            Bỏ chọn hôm nay
          </Button>
        )}
      </HStack>
      {hasStorageError && <Text color="warning.fg">Trình duyệt không cho lưu. Dấu tick chỉ giữ trong phiên này.</Text>}
      {items.map((item, index) => (
        <Checkbox.Root
          alignItems="start"
          checked={progress.done.includes(String(index))}
          disabled={isPrint}
          gap={3}
          key={item}
          onCheckedChange={(details) => toggle(String(index), details.checked === true)}
          p={2}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label textStyle="bodyLarge">{item}</Checkbox.Label>
        </Checkbox.Root>
      ))}
    </Stack>
  )
}
export default DailyChecklist
