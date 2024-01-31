
import TopHeader from "./topHeader";
import NavBar from "./navBar";


function Header() {
  return (
    <header className="h-[120px] bg-common-white w-full flex flex-col shadow-md pb-50">
      <TopHeader/>
      <NavBar/>
    </header>
  );
}

export default Header;