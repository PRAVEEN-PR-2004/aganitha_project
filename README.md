# BookFinder 📚

A modern, responsive book search application built with React and Tailwind CSS. Perfect for college students like Alex who want to discover their next great read!

## Features ✨

### 🔍 **Advanced Search**
- Search books by title, author, or keywords
- Real-time search suggestions
- Search history with quick access to previous searches
- Smart filtering and sorting options

### 📖 **Rich Book Information**
- High-quality book covers from Open Library
- Comprehensive book details including:
  - Author information
  - Publication year and publisher
  - Language and page count
  - Ratings and reviews
  - Subject tags and categories
  - ISBN numbers
  - Ebook availability

### 🎨 **Beautiful UI/UX**
- Modern, clean design with smooth animations
- Responsive layout for desktop and mobile
- Interactive book cards with hover effects
- Modal book details with full information
- Loading states and error handling

### 🔧 **Smart Features**
- Advanced filtering by language and publication year
- Multiple sorting options (relevance, title, author, year)
- Local storage for search history
- Error handling with retry functionality
- Optimized performance with React Context

## Tech Stack 🛠️

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Open Library Search API
- **Build Tool**: Vite
- **State Management**: React Context + useReducer

## Getting Started 🚀

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration 🌐

This application uses the **Open Library Search API** which provides:
- Free access to millions of book records
- High-quality book covers
- Comprehensive metadata
- No authentication required

**API Endpoint**: `https://openlibrary.org/search.json?title={bookTitle}`

## User Persona 👤

**Alex** - A college student who:
- Needs to find books for research and leisure reading
- Wants quick access to book information
- Appreciates a clean, intuitive interface
- Uses both desktop and mobile devices
- Values comprehensive book details and ratings

## Features for Alex 🎯

### Search Capabilities
- **Title Search**: Find books by exact or partial titles
- **Author Search**: Discover books by favorite authors
- **Keyword Search**: Find books by topics or themes
- **Smart Suggestions**: Get relevant search suggestions

### Book Discovery
- **Visual Browsing**: Browse books with beautiful cover images
- **Detailed Information**: Get comprehensive book details
- **Ratings & Reviews**: See community ratings and reviews
- **Subject Tags**: Explore books by topics and categories

### User Experience
- **Search History**: Quick access to previous searches
- **Advanced Filters**: Filter by language, year, and more
- **Responsive Design**: Works perfectly on all devices
- **Fast Performance**: Quick search results and smooth interactions

## Project Structure 📁

```
src/
├── components/          # React components
│   ├── Header.jsx      # Application header
│   ├── SearchBar.jsx   # Search functionality
│   ├── BookList.jsx    # Book results display
│   ├── BookCard.jsx    # Individual book card
│   ├── BookDetails.jsx # Book details modal
│   ├── LoadingSpinner.jsx # Loading indicator
│   └── ErrorMessage.jsx   # Error display
├── context/            # React Context
│   └── SearchContext.jsx # Global state management
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments 🙏

- [Open Library](https://openlibrary.org/) for providing the free book data API
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful styling framework
- [Lucide React](https://lucide.dev/) for the amazing icons
- [React](https://reactjs.org/) for the powerful UI library

---

**Happy Reading! 📖✨**
