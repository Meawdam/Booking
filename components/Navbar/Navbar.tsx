import DropDownList from "./DropDownList"
import Logo from "./Logo"
import { ModeToggle } from "./ModeToggle"
import Search from "./Search"


const Navbar = () => {
  return (
    <nav className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4">
        <Logo />
        <Search />
        <div className="flex gap-4">
            <ModeToggle />
            <DropDownList />
        </div>
    </nav>
  )
}
export default Navbar