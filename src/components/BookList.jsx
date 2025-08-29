import { useMemo } from 'react'
import { useSearch } from '../context/SearchContext'
import BookCard from './BookCard'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import { Filter, BookOpen, Library } from 'lucide-react'

function BookList() {
  const { books, loading, error, filters, searchHistory } = useSearch()

  const filteredAndSortedBooks = useMemo(() => {
    let filtered = [...books]

    // Apply language filter
    if (filters.language !== 'all') {
      filtered = filtered.filter(book => 
        book.language && book.language.includes(filters.language)
      )
    }

    // Apply year filter
    if (filters.year !== 'all') {
      const yearFilter = parseInt(filters.year)
      filtered = filtered.filter(book => {
        const publishYear = book.first_publish_year || book.publish_year?.[0]
        return publishYear && publishYear >= yearFilter
      })
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'title':
        filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''))
        break
      case 'author':
        filtered.sort((a, b) => {
          const authorA = a.author_name?.[0] || ''
          const authorB = b.author_name?.[0] || ''
          return authorA.localeCompare(authorB)
        })
        break
      case 'year':
        filtered.sort((a, b) => {
          const yearA = a.first_publish_year || a.publish_year?.[0] || 0
          const yearB = b.first_publish_year || b.publish_year?.[0] || 0
          return yearB - yearA // Newest first
        })
        break
      default:
        // Relevance - keep original order
        break
    }

    return filtered
  }, [books, filters])

  const isShowingAllBooks = searchHistory.length === 0 || (searchHistory.length > 0 && searchHistory[0] === '')

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (books.length === 0 && !loading) {
    return (
      <div className="text-center py-12">
        <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No books found</h3>
        <p className="text-gray-600">
          Try searching for a different book title or author
        </p>
      </div>
    )
  }

  return (
    <div className="mb-8">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {isShowingAllBooks ? (
            <Library className="h-5 w-5 text-gray-600" />
          ) : (
            <Filter className="h-5 w-5 text-gray-600" />
          )}
          <h2 className="text-xl font-semibold text-gray-900">
            {isShowingAllBooks ? 'Discover Books' : 'Search Results'}
          </h2>
          <span className="text-sm text-gray-600">
            ({filteredAndSortedBooks.length} books)
          </span>
        </div>
        {filteredAndSortedBooks.length > 0 && (
          <div className="text-sm text-gray-600">
            {isShowingAllBooks 
              ? `Showing ${filteredAndSortedBooks.length} popular books`
              : `Showing ${filteredAndSortedBooks.length} of ${books.length} results`
            }
          </div>
        )}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedBooks.map((book, index) => (
          <BookCard key={`${book.key || index}`} book={book} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredAndSortedBooks.length === 0 && books.length > 0 && (
        <div className="text-center py-8">
          <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No books match your filters
          </h3>
          <p className="text-gray-600">
            Try adjusting your search filters to see more results
          </p>
        </div>
      )}
    </div>
  )
}

export default BookList
