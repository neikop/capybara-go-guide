import { useEffect, useState } from 'react'

import type { DailyProgress } from '../types'

import { localDate, readDailyProgress } from '../logic'

const STORAGE_KEY = 'capy-guide-daily-v1'
function loadProgress(): { hasStorageError: boolean; progress: DailyProgress } {
  const date = localDate()
  try {
    return { progress: readDailyProgress(localStorage.getItem(STORAGE_KEY), date), hasStorageError: false }
  } catch {
    return { progress: { date, done: [] }, hasStorageError: true }
  }
}
export function useDailyChecklist() {
  const [state, setState] = useState(loadProgress)
  useEffect(() => {
    const refresh = () =>
      setState((previous) => {
        if (previous.progress.date === localDate()) return previous
        return loadProgress()
      })
    const sync = () => setState(loadProgress())
    const timer = window.setInterval(refresh, 60000)
    window.addEventListener('focus', refresh)
    document.addEventListener('visibilitychange', refresh)
    window.addEventListener('storage', sync)
    return () => {
      window.clearInterval(timer)
      window.removeEventListener('focus', refresh)
      document.removeEventListener('visibilitychange', refresh)
      window.removeEventListener('storage', sync)
    }
  }, [])
  const save = (progress: DailyProgress) => {
    let hasStorageError = false
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      hasStorageError = true
    }
    setState({ progress, hasStorageError })
  }
  const toggle = (id: string, isChecked: boolean) => {
    const date = localDate()
    const done = state.progress.date === date ? state.progress.done : []
    save({ date, done: isChecked ? [...new Set([...done, id])] : done.filter((item) => item !== id) })
  }
  return { ...state, toggle, reset: () => save({ date: localDate(), done: [] }) }
}
