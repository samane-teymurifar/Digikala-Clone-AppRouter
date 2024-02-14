import TopHeader from './topHeader';
import NavBar from './navBar';
import HeaderAdvertise from '@src/components/HeaderAdvertise';

function Header() {
  return (
    <header className="h-[180px] bg-common-white w-full flex flex-col shadow-md pb-50">
      <HeaderAdvertise/>
      <TopHeader />
      <NavBar />
    </header>
  );
}

export default Header;
