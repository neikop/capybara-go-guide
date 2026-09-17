import { apiClient } from './client'

type HealthResponse = {
  status: string
  timestamp?: string
}

export async function getHealth() {
  const response = await apiClient.get<HealthResponse>('/health')

  return response.data
}
