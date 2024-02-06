import React, {useEffect, useRef} from 'react';
type Properties = {
  initialWidth: string;
};
const StoryProgressBar = ({initialWidth}: Properties) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    let width = 0;
    const interval = setInterval(frame, 100);

    function frame() {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width++;
        // progressBarRef && progressBarRef?.current?.style?.width = `${width}%`
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-1 bg-gray-20 rounded-full overflow-hidden z-50">
      <div
        ref={progressBarRef}
        className="h-full bg-primaryTint-80"
        style={{
          width: `${initialWidth}`,
          transition: 'width 0.5s ease-in-out',
        }}></div>
    </div>
  );
};

export default StoryProgressBar;
