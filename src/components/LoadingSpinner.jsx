function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
        <p className="text-gray-600 text-lg">Searching for books...</p>
        <p className="text-gray-500 text-sm mt-2">This may take a few seconds</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
