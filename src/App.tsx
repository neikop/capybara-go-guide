import { Center, Spinner } from '@chakra-ui/react'
import { AppLayout } from 'components/layouts'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Guide from 'views/Guide/Guide'

const ComponentGuide = lazy(() => import('views/Component/Guide'))
const PrintGuide = lazy(() => import('views/Guide/PrintGuide'))
function App() {
  const location = useLocation()
  return (
    <Suspense
      fallback={
        <Center minH="40vh">
          <Spinner color="primary.main" size="lg" />
        </Center>
      }
    >
      <Routes>
        <Route element={<Guide />} path="/" />
        <Route element={<PrintGuide />} path="/print" />
        <Route element={<AppLayout />}>
          <Route element={<ComponentGuide />} path="/components" />
        </Route>
        {['CAPYBARA_GO_GUIDE.html', 'WHISPERER_SKILL_TIER_LIST.html', 'WHISPERER_SKILL_REFERENCE.html'].map((path) => (
          <Route
            element={
              <Navigate
                replace
                to={`/${location.search}${location.hash || (path.startsWith('WHISPERER_') ? '#skills' : '')}`}
              />
            }
            key={path}
            path={'/' + path}
          />
        ))}
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </Suspense>
  )
}
export default App
