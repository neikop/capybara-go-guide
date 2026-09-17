import { useQuery } from '@tanstack/react-query'
import { env } from 'config/env'
import { getHealth } from 'services'

export function useHealthQuery() {
  return useQuery({
    enabled: Boolean(env.apiBaseUrl),
    queryFn: getHealth,
    queryKey: ['system', 'health'],
  })
}
