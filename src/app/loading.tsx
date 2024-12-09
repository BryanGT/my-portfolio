export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 mb-4 animate-spin"></div>
          <p className="text-gray-700 font-medium">Cargando...</p>
        </div>
      </div>
    );
  }
  