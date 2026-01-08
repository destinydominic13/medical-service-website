export function Nav() {
  return (
    <nav className="p-4 bg-gray-100">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/contact" className="text-blue-500 hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}