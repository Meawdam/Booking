import Logo from "./Logo"
import Search from "./Search"


const Navbar = () => {
  return (
    <nav className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4">
        <Logo />
        <Search />
        <div className="flex gap-4">
            <h1>Darkmode</h1>
            <h1>Logo</h1>
        </div>
    </nav>
  )
}
export default Navbar