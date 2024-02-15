import missions from '@images/missions.webp';
import awards from '@images/awards.webp';
import wheelSpinner from '@images/wheel-spinner.webp';
import TargetIcon from '@icons/TargetIcon';
import WheelSpinnerIcon from '@icons/WheelSpinnerIcon';
import AwardsIcon from '@src/assets/icons/AwardsIcon';
import {DigiClubDataType} from './types';

export const DigiClubData: DigiClubDataType[] = [
  {
    id: 3,
    src: wheelSpinner,
    title: 'چرخ‌ و‌ بخت',
    icon: <WheelSpinnerIcon className='fill-tertiary-main'/>,
  },
  {
    id: 1,
    src: missions,
    title: 'ماموریت‌ ها',
    icon: <TargetIcon className='fill-tertiary-main'/>,
  },
  {
    id: 2,
    src: awards,
    title: 'جایزه ها',
    icon: <AwardsIcon className='fill-tertiary-main'/>,
  },
];
