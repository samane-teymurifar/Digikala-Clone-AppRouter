import { isArray } from "@src/utiles/helper/isArray";
import BazarcheData from "./Data/index"
import BazarcheCard from "./BazarcheCard";
import { BazarcheCardType} from "./Type/index";

function BazarcheCards() {
    return (
        <div className="grid grid-cols-4 gap-3  mx-48 mt-4">
        {isArray(BazarcheData).map((item:BazarcheCardType) => {
        return (
          <BazarcheCard bazarcheCard={item}/>
        );
        })}       
      </div>
  );
}

export default BazarcheCards;