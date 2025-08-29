import { useState } from 'react'
import { useSearch } from '../context/SearchContext'
import { Eye, Calendar, User, Globe, Star } from 'lucide-react'

function BookCard({ book }) {
  const { selectBook } = useSearch()
  const [imageError, setImageError] = useState(false)

  const coverId = book.cover_i
  const coverUrl = coverId 
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : null

  const handleImageError = () => {
    setImageError(true)
  }

  const handleCardClick = () => {
    selectBook(book)
  }

  const formatAuthors = (authors) => {
    if (!authors || authors.length === 0) return 'Unknown Author'
    if (authors.length === 1) return authors[0]
    if (authors.length === 2) return `${authors[0]} & ${authors[1]}`
    return `${authors[0]} et al.`
  }

  const formatYear = (year) => {
    if (!year) return 'Unknown Year'
    return year.toString()
  }

  const formatLanguages = (languages) => {
    if (!languages || languages.length === 0) return 'Unknown'
    return languages.join(', ')
  }

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-200 overflow-hidden group"
    >
      {/* Book Cover */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        {coverUrl && !imageError ? (
          <img
            src={coverUrl}
            alt={book.title}
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="text-center">
              <div className="w-16 h-20 bg-blue-200 rounded mx-auto mb-2 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">📚</span>
              </div>
              <p className="text-sm text-gray-500">No cover available</p>
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      {/* Book Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {book.title}
        </h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          {/* Author */}
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-gray-400" />
            <span className="line-clamp-1">
              {formatAuthors(book.author_name)}
            </span>
          </div>

          {/* Publication Year */}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span>
              {formatYear(book.first_publish_year || book.publish_year?.[0])}
            </span>
          </div>

          {/* Language */}
          {book.language && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gray-400" />
              <span className="line-clamp-1">
                {formatLanguages(book.language)}
              </span>
            </div>
          )}

          {/* Rating */}
          {book.ratings_average && (
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>
                {book.ratings_average.toFixed(1)} ({book.ratings_count || 0} ratings)
              </span>
            </div>
          )}
        </div>

        {/* Subjects/Tags */}
        {book.subject && book.subject.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex flex-wrap gap-1">
              {book.subject.slice(0, 3).map((subject, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {subject}
                </span>
              ))}
              {book.subject.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{book.subject.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookCard
