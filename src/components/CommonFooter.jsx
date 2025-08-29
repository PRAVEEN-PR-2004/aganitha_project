import { BookOpen } from 'lucide-react'

function CommonFooter() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="bg-yellow-500 p-2 rounded-lg">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">BookFinder</span>
        </div>
        <p className="text-gray-300 mb-4">
          Discover your next great read with our comprehensive book search platform.
        </p>
        <p className="text-gray-400 text-sm">
          Powered by Open Library • Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default CommonFooter
