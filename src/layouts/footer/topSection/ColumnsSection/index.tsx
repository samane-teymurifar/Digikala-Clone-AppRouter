import {isArray} from '@src/utiles/helper/isArray';
import FormSection from './FormSection';
import {FooterInfo} from '../../data';

function ColumnsSection() {
  return (
    <div className="flex flex-wrap justify-between">
      {isArray(FooterInfo).map((item, key) => (
        <div key={`ColumnsSection-Item-${key}`}>
          <p className="text-sm">{item.CatTitle}</p>
          <div className="flex flex-col gap-6 mt-2">
            {item.text.map((subItem: any, index: any) => {
              return (
                <div
                  key={`subItem-${index}`}
                  className="text-base text-gray-30 ">
                  {subItem.title}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <FormSection />
    </div>
  );
}

export default ColumnsSection;
