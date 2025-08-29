function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center align-middle py-28">
      <div className="text-center">
        <div className="inline-block w-12 h-12 mb-4 border-b-2 rounded-full animate-spin border-primary"></div>
        <p className="text-lg text-gray-600">Searching for books...</p>
        <p className="mt-2 text-sm text-gray-500">This may take a few seconds</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
