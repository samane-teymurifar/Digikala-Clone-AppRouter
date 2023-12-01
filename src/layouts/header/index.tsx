
import TopHeader from "./topHeader";
import NavBar from "./navBar";


function Header() {
  return (
    <header className="h-[108px] bg-common-white w-full flex flex-col shadow-md">
      <TopHeader/>
      <NavBar/>
    </header>
  );
}

export default Header;