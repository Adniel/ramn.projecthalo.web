import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import { LanguageProvider } from '@/i18n/LanguageContext'
import { Layout } from '@/components/layout/Layout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const PlatformPage = lazy(() => import('@/pages/PlatformPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
const AssetManagementPage = lazy(() => import('@/pages/modules/AssetManagementPage'))
const IFRSCompliancePage = lazy(() => import('@/pages/modules/IFRSCompliancePage'))
const DaaSPage = lazy(() => import('@/pages/modules/DaaSPage'))
const ITADPage = lazy(() => import('@/pages/modules/ITADPage'))
const CSRDPage = lazy(() => import('@/pages/modules/CSRDPage'))
const OrganizationalStructurePage = lazy(() => import('@/pages/modules/OrganizationalStructurePage'))

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-navy-800 border-t-transparent" />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="losningen" element={<PlatformPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="funktioner/tillgangsfinansiering" element={<AssetManagementPage />} />
          <Route path="funktioner/ifrs-rapportering" element={<IFRSCompliancePage />} />
          <Route path="funktioner/enhetsfinansiering" element={<DaaSPage />} />
          <Route path="funktioner/vardeatervinning" element={<ITADPage />} />
          <Route path="funktioner/hallbarhetsrapportering" element={<CSRDPage />} />
          <Route path="funktioner/koncernoverblick" element={<OrganizationalStructurePage />} />

          {/* Redirects from old routes */}
          <Route path="plattform" element={<Navigate to="/losningen" replace />} />
          <Route path="teknologi" element={<Navigate to="/" replace />} />
          <Route path="moduler/tillgangshantering" element={<Navigate to="/funktioner/tillgangsfinansiering" replace />} />
          <Route path="moduler/ifrs-compliance" element={<Navigate to="/funktioner/ifrs-rapportering" replace />} />
          <Route path="moduler/daas" element={<Navigate to="/funktioner/enhetsfinansiering" replace />} />
          <Route path="moduler/itad" element={<Navigate to="/funktioner/vardeatervinning" replace />} />
          <Route path="moduler/csrd-hallbarhet" element={<Navigate to="/funktioner/hallbarhetsrapportering" replace />} />
          <Route path="moduler/organisationsstruktur" element={<Navigate to="/funktioner/koncernoverblick" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  )
}
