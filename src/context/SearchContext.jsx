import { createContext, useContext, useReducer, useEffect } from 'react'

const SearchContext = createContext()

const initialState = {
  books: [],
  loading: false,
  error: null,
  selectedBook: null,
  searchHistory: [],
  filters: {
    sortBy: 'relevance',
    language: 'all',
    year: 'all'
  }
}

function searchReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_BOOKS':
      return { ...state, books: action.payload, loading: false, error: null }
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false }
    case 'SELECT_BOOK':
      return { ...state, selectedBook: action.payload }
    case 'CLEAR_SELECTION':
      return { ...state, selectedBook: null }
    case 'ADD_TO_HISTORY':
      const newHistory = [action.payload, ...state.searchHistory.filter(item => item !== action.payload)].slice(0, 10)
      return { ...state, searchHistory: newHistory }
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } }
    default:
      return state
  }
}

export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, initialState)

  // Load search history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('bookSearchHistory')
    if (savedHistory) {
      const history = JSON.parse(savedHistory)
      history.forEach(term => {
        dispatch({ type: 'ADD_TO_HISTORY', payload: term })
      })
    }
  }, [])

  // Save search history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookSearchHistory', JSON.stringify(state.searchHistory))
  }, [state.searchHistory])

  const searchBooks = async (query) => {
    if (!query.trim()) {
      // If no query, get all books
      getAllBooks()
      return
    }

    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'ADD_TO_HISTORY', payload: query })

    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`)
      if (!response.ok) {
        throw new Error('Failed to fetch books')
      }
      const data = await response.json()
      dispatch({ type: 'SET_BOOKS', payload: data.docs || [] })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message })
    }
  }

  const getAllBooks = async () => {
    dispatch({ type: 'SET_LOADING', payload: true })

    try {
      // Search for popular books to get a good variety
      const response = await fetch('https://openlibrary.org/search.json?q=popular&limit=50')
      if (!response.ok) {
        throw new Error('Failed to fetch books')
      }
      const data = await response.json()
      dispatch({ type: 'SET_BOOKS', payload: data.docs || [] })
      // Add empty string to history to indicate showing all books
      dispatch({ type: 'ADD_TO_HISTORY', payload: '' })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message })
    }
  }

  const selectBook = (book) => {
    dispatch({ type: 'SELECT_BOOK', payload: book })
  }

  const clearSelection = () => {
    dispatch({ type: 'CLEAR_SELECTION' })
  }

  const setFilters = (filters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters })
  }

  const value = {
    ...state,
    searchBooks,
    getAllBooks,
    selectBook,
    clearSelection,
    setFilters
  }

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
