import type {FC} from 'react';
import {useEffect, useState} from 'react';
import _clsx from 'clsx';
import {defaultImport} from 'default-import';

const clsx = defaultImport(_clsx);

const ProgressSpinner: FC<{progress: number; grow?: boolean}> = ({
  progress,
  grow,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const size = 100;
  const strokeWidth = size / 10;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const circumProgress = circumference * progress;

  useEffect(() => {
    const id = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className={clsx('w-20', {
          'flex-1 max-w-64': grow,
          'h-16 w-16': !grow,
          'opacity-0': !isVisible,
          'opacity-25': isVisible,
        })}
        style={{transform: 'rotate(-90deg)'}}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="currentColor"
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumProgress} ${
            circumference - circumProgress
          }`}
        />
      </svg>
    </div>
  );
};

export default ProgressSpinner;
