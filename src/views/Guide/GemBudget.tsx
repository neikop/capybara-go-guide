import { Alert, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { FormField, InputNumber } from 'components/ui'
import { Controller, useForm, useWatch } from 'react-hook-form'

import { evaluateBudget } from './logic'

type BudgetValues = { balance: string; reserve: string; spend: string }
const GemBudget = () => {
  const { control } = useForm<BudgetValues>({ defaultValues: { balance: '', reserve: '32000', spend: '' } })
  const values = useWatch({ control })
  const result = evaluateBudget(values.balance ?? '', values.reserve ?? '', values.spend ?? '')
  return (
    <Stack bg="primary.surface" borderRadius="lg" borderWidth="1px" gap={4} p={{ base: 4, md: 6 }}>
      <Heading as="h2" textStyle="titleLarge">
        Sau khoản chi này, còn bao nhiêu gems?
      </Heading>
      <Text color="fg.muted">Phép trừ ngân sách; không dự đoán tỷ lệ quay hoặc phần thưởng.</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
        {(
          [
            { name: 'balance', label: 'Gems đang có' },
            { name: 'reserve', label: 'Quỹ muốn giữ' },
            { name: 'spend', label: 'Khoản chi dự kiến' },
          ] as const
        ).map(({ name, label }) => (
          <FormField htmlFor={'gem-' + name} key={name} label={label}>
            <Controller
              control={control}
              name={name}
              render={({ field }) => (
                <InputNumber
                  decimalScale={0}
                  id={'gem-' + name}
                  inputMode="numeric"
                  name={field.name}
                  onBlur={field.onBlur}
                  onValueChange={(value) => field.onChange(value.value)}
                  ref={field.ref}
                  value={field.value}
                />
              )}
            />
          </FormField>
        ))}
      </SimpleGrid>
      <Alert.Root status={result.status}>
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Description aria-live="polite" as="output">
            {result.message}
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    </Stack>
  )
}
export default GemBudget
