import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import PageLoader from '../PageLoader/PageLoader.tsx'

function CustomeRoutes() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])
  return isLoading === false ? <Outlet /> : <PageLoader />
}

export default CustomeRoutes
