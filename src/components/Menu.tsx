import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-slate-600 p-4 w-full shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo o Título */}
        <h1 className="text-white text-2xl font-semibold">
          Mi Portafolio
        </h1>
        
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-white hover:text-blue-300 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-white hover:text-blue-300 transition"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
