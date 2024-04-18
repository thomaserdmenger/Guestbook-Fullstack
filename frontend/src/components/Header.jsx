import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="h-80 w-full px-8 pt-4 mb-8">
      <nav className="text-white flex gap-4 justify-end items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/guestbook">Guestbook</NavLink>
      </nav>
    </header>
  )
}

export default Header
