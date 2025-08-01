export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
          <span className="text-white font-bold text-xl">Y</span>
        </div>
        <div className="text-xl font-semibold text-gray-900 mb-2">Yunta</div>
        <div className="text-gray-600">Cargando...</div>
      </div>
    </div>
  )
}
