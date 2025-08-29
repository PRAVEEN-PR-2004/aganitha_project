import { useSearch } from '../context/SearchContext'
import { X, Calendar, User, Globe, Star, BookOpen, ExternalLink } from 'lucide-react'

function BookDetails() {
  const { selectedBook, clearSelection } = useSearch()

  if (!selectedBook) return null

  const coverId = selectedBook.cover_i
  const coverUrl = coverId 
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : null

  const formatAuthors = (authors) => {
    if (!authors || authors.length === 0) return 'Unknown Author'
    return authors.join(', ')
  }

  const formatYear = (year) => {
    if (!year) return 'Unknown Year'
    return year.toString()
  }

  const formatLanguages = (languages) => {
    if (!languages || languages.length === 0) return 'Unknown'
    return languages.join(', ')
  }

  const formatSubjects = (subjects) => {
    if (!subjects || subjects.length === 0) return []
    return subjects.slice(0, 10) // Limit to 10 subjects
  }

  const getOpenLibraryUrl = () => {
    if (selectedBook.key) {
      return `https://openlibrary.org${selectedBook.key}`
    }
    return null
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      clearSelection()
    }
  }



  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Book Details</h2>
          <button
            onClick={clearSelection}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cover Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-0">
                {coverUrl ? (
                  <img
                    src={coverUrl}
                    alt={selectedBook.title}
                    className="w-full rounded-lg shadow-md"
                  />
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-32 bg-blue-200 rounded mx-auto mb-4 flex items-center justify-center">
                        <span className="text-blue-600 text-4xl">📚</span>
                      </div>
                      <p className="text-gray-500">No cover available</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Book Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title and Basic Info */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedBook.title}
                </h1>
                
                <div className="space-y-3">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-lg text-gray-700">
                      {formatAuthors(selectedBook.author_name)}
                    </span>
                  </div>

                  {/* Publication Year */}
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-lg text-gray-700">
                      Published: {formatYear(selectedBook.first_publish_year || selectedBook.publish_year?.[0])}
                    </span>
                  </div>

                  {/* Language */}
                  {selectedBook.language && (
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-gray-400" />
                      <span className="text-lg text-gray-700">
                        Language: {formatLanguages(selectedBook.language)}
                      </span>
                    </div>
                  )}

                  {/* Rating */}
                  {selectedBook.ratings_average && (
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-lg text-gray-700">
                        Rating: {selectedBook.ratings_average.toFixed(1)} ({selectedBook.ratings_count || 0} ratings)
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              {selectedBook.description && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {typeof selectedBook.description === 'string' 
                      ? selectedBook.description 
                      : selectedBook.description.value || 'No description available'
                    }
                  </p>
                </div>
              )}

              {/* Subjects/Tags */}
              {selectedBook.subject && selectedBook.subject.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Subjects</h3>
                  <div className="flex flex-wrap gap-2">
                    {formatSubjects(selectedBook.subject).map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedBook.publisher && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Publisher</h4>
                    <p className="text-gray-700">{selectedBook.publisher.join(', ')}</p>
                  </div>
                )}
                
                {selectedBook.isbn && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">ISBN</h4>
                    <p className="text-gray-700">{selectedBook.isbn.join(', ')}</p>
                  </div>
                )}

                {selectedBook.number_of_pages_median && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Pages</h4>
                    <p className="text-gray-700">{selectedBook.number_of_pages_median} pages</p>
                  </div>
                )}

                {selectedBook.ebook_access && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Ebook Access</h4>
                    <p className="text-gray-700 capitalize">{selectedBook.ebook_access}</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                {getOpenLibraryUrl() && (
                  <a
                    href={getOpenLibraryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on Open Library
                  </a>
                )}
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
