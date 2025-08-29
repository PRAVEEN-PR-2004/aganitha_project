import { useState, useRef, useEffect } from 'react'
import { Search, Filter, Clock, X, RefreshCw } from 'lucide-react'
import { useSearch } from '../context/SearchContext'

function SearchBar() {
  const { searchBooks, getAllBooks, searchHistory, filters, setFilters } = useSearch()
  const [query, setQuery] = useState('')
  const [showHistory, setShowHistory] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowHistory(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      searchBooks(query)
    } else {
      // If no query, show all books
      getAllBooks()
    }
    setShowHistory(false)
  }

  const handleHistoryClick = (term) => {
    setQuery(term)
    if (term.trim()) {
      searchBooks(term)
    } else {
      getAllBooks()
    }
    setShowHistory(false)
  }

  const handleFilterChange = (key, value) => {
    setFilters({ [key]: value })
  }

  const handleClearSearch = () => {
    setQuery('')
    getAllBooks()
  }

  const handleClearFilters = () => {
    setFilters({
      sortBy: 'relevance',
      language: 'all',
      year: 'all'
    })
  }

  const hasActiveFilters = filters.sortBy !== 'relevance' || filters.language !== 'all' || filters.year !== 'all'

  return (
    <div className="mb-8" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowHistory(true)}
              placeholder="Search for books by title, author, or keywords... (leave empty to see all books)"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
            />
            {query && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-3 border border-gray-300 rounded-lg flex items-center gap-2 transition-all ${
              showFilters ? 'bg-yellow-50 border-yellow-500 text-yellow-600' : 'hover:bg-gray-50'
            }`}
          >
            <Filter className="h-5 w-5" />
            <span className="hidden sm:inline">Filters</span>
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium"
          >
            {query.trim() ? 'Search' : 'Show All'}
          </button>
        </div>

        {/* Search History Dropdown */}
        {showHistory && searchHistory.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <div className="p-2">
              <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Recent Searches
              </h3>
              {searchHistory.map((term, index) => (
                <button
                  key={index}
                  onClick={() => handleHistoryClick(term)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {term || 'Show All Books'}
                </button>
              ))}
            </div>
          </div>
        )}
      </form>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Search Filters</h3>
            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="flex items-center gap-2 px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Clear Filters
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="relevance">Relevance</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="year">Publication Year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={filters.language}
                onChange={(e) => handleFilterChange('language', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="all">All Languages</option>
                <option value="eng">English</option>
                <option value="spa">Spanish</option>
                <option value="fre">French</option>
                <option value="ger">German</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Publication Year
              </label>
              <select
                value={filters.year}
                onChange={(e) => handleFilterChange('year', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                <option value="all">All Years</option>
                <option value="2020">2020+</option>
                <option value="2010">2010+</option>
                <option value="2000">2000+</option>
                <option value="1990">1990+</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
