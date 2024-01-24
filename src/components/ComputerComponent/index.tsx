import { isArray } from "@src/utiles/helper/isArray";
import Image from "next/image";
import { Keywords } from "@src/constants/keyword";
import SearchIcon from "@src/assets/icons/SearchIcon";
function ComputerAccessories({SuitableData}: any) {


    return (
    <section className="grid grid-cols-4 mx-48 mt-4 border border-gray-10 rounded-2xl">
            {isArray(SuitableData).map((item, index) => (
       
                <div key={`ComputerAccessories-${index}`} className={`px-5 py-2 ${index !== 3 && 'border-l border-gray-10'}`}>      
                <div>{item.title}</div>
                <span className="text-xs text-gray-30">{Keywords.BaseOnYourVisit}</span>
               
                <div className="grid grid-cols-2 gap-[1px] mt-2 text-base">
                    {isArray(item.products).slice(0,4).map((subItem, index)=>{
                        return (
                            <Image src={subItem.images.main} alt={`subItem-${index}`} width={130} height={130} key={`ComputerAccessories-subItem-${index}`}/>
                        )
                       
                    })}
              
                </div>     
                 <div className="text-sm text-tertiary-main flex items-center justify-center mt-2">
                        {Keywords.Visit}
                        <SearchIcon/>
                    </div>
                </div>
             
        
            ))}
    </section>
  );
}

export default ComputerAccessories;