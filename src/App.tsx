import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import TopBanner from './components/layout/TopBanner'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import IngredientsPage from './pages/IngredientsPage'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <TopBanner />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/ingredients" element={<IngredientsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
