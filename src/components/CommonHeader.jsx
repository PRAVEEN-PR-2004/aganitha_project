import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Search, Home } from 'lucide-react'

function CommonHeader() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isSearchPage = location.pathname === '/search'

  return (
    <header className="bg-yellow-100 shadow-lg border-b border-yellow-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="bg-primary p-2 rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-900">
  BookFinder
</h1>
<p className="hidden md:block text-sm text-yellow-800">
  Discover your next great read
</p>

              </div>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isHomePage 
                  ? 'bg-yellow-300 text-yellow-900' 
                  : 'text-yellow-800 hover:bg-yellow-300'
              }`}
            >
              <Home className="h-5 w-5" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            
            <Link
              to="/search"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isSearchPage 
                  ? 'bg-yellow-300 text-yellow-900' 
                  : 'text-yellow-800 hover:bg-yellow-300'
              }`}
            >
              <Search className="h-5 w-5" />
              <span className="hidden sm:inline">Search</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-2 text-yellow-700 border-l border-yellow-400 pl-4">
              
              <span className="text-sm">Powered by Open Library</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default CommonHeader
