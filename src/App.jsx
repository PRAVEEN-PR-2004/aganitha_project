import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchProvider } from './context/SearchContext'
import CommonHeader from './components/CommonHeader'
import CommonFooter from './components/CommonFooter'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import NotFound from './components/NotFound'
import HowItwork from './pages/HowItWork'
function App() {
  return (
    <SearchProvider>
      <Router>
        <div className="min-h-screen bg-yellow-50">
          <CommonHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/about" element={<HowItwork/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CommonFooter />
        </div>
      </Router>
    </SearchProvider>
  )
}

export default App
