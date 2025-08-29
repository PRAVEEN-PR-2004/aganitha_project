import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSearch } from '../context/SearchContext'
import SearchBar from '../components/SearchBar'
import BookList from '../components/BookList'
import BookDetails from '../components/BookDetails'

function SearchPage() {
  const { getAllBooks, books, loading } = useSearch()

  // Load all books by default when the page loads
  useEffect(() => {
    if (books.length === 0 && !loading) {
      getAllBooks()
    }
  }, [books.length, loading, getAllBooks])

  return (
    <div className="min-h-screen">
      <main className="container px-4 py-8 mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-medium transition-colors text-primary hover:text-yellow-500"
          >
            ← Back to Home
          </Link>
        </div>
        <SearchBar />
        <BookList />
        <BookDetails />
      </main>
    </div>
  )
}

export default SearchPage
