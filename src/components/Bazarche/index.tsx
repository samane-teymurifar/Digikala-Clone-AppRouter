import {isArray} from '@src/utiles/helper/isArray';
import BazarcheData from './data';
import BazarcheCard from './BazarcheCard';

function BazarcheCards() {
  return (
    <div className="grid grid-cols-4 gap-3  mx-48 mt-4">
      {isArray(BazarcheData).map(item => {
        return <BazarcheCard bazarcheCard={item} />;
      })}
    </div>
  );
}

export default BazarcheCards;
