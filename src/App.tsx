import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LandingPage from './Pages/LandingPage.tsx'
import PageLoader from './components/PageLoader/PageLoader.tsx'
import CustomeRoutes from './components/CustomRoutes/CustomeRoutes.tsx'
import CategoryPage from './Pages/CategoryPage.tsx'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
  }, [])
  return isLoading === false ? (
    <PageLoader />
  ) : (
    <Routes>
      <Route path="/" index element={<LandingPage id={475} />} />
      <Route path="/Category" element={<CategoryPage />} />
      <Route path="/:landing_id" element={<LandingPage />}></Route>
    </Routes>
  )
}

export default App
