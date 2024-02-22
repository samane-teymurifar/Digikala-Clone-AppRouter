import TopHeader from './top-header';
import NavBar from './navBar';
import HeaderAdvertise from '@src/components/header-advertise';
import getData from './data';

async function Header() {
  const data = await getData();
  const clasificationList = data?.result?.widgets;

  console.log("clasificationList Header:", clasificationList);
  
  return (
    <header className="h-[180px] bg-common-white w-full flex flex-col shadow-md pb-50">
      <HeaderAdvertise/>
      <TopHeader />
      <NavBar clasificationList={ clasificationList} />
    </header>
  );
}

export default Header;
