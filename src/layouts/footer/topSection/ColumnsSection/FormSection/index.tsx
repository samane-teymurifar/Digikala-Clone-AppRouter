import {Keywords} from '@src/constants/keyword';
import {isArray} from '@src/utiles/helper/isArray';
import {SocialMedia} from '../../../data';

function FormSection() {
  return (
    <div className="flex flex-col gap-3">
      <div>{Keywords.beWithUs}</div>
      <div className="flex justify-start gap-8">
        {isArray(SocialMedia).map(socialMedia => socialMedia.icon)}
      </div>
      <div className="text-gray-70 text-base">{Keywords.emailRegister}</div>
      <form className="flex gap-2">
        <input
          type="email"
          className="bg-gray-10 h-8 w-80 px-2 py-6 rounded-lg text-gray-80 border-none outline-none "
          placeholder={Keywords.YourEmail}
        />
        <button className="bg-gray-10 text-gray-50 w-14 h-13 rounded-lg ">
          {Keywords.RegisterEmail}
        </button>
      </form>
    </div>
  );
}

export default FormSection;
