import Image from 'next/image';
import BottomFooter from './bottomSection';
import TopSection from './topSection';

function Footer() {
  return (
    <footer>
      <TopSection />
      <BottomFooter />
    </footer>
  );
}

export default Footer;
