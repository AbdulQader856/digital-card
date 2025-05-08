import NavBar from '../ui/navigation/NavBar'

export default function Header() {

  return (
    <header className="fixed w-full flex justify-between items-center px-6 py-4 z-50 shadow-md bg-white dark:bg-gray-900">
        <NavBar />
    </header>
  );
}
