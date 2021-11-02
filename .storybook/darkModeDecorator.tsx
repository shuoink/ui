import {useLayoutEffect} from 'react';

const darkModeDecorator = (Story, context) => {
  useLayoutEffect(() => {
    const theme = context.globals.theme;
    const lightClasses = ['bg-gray-100', 'text-gray-900'];
    const darkClasses = ['dark', 'bg-gray-900', 'text-gray-100'];
    if (theme === 'dark') {
      document.body.classList.remove(...lightClasses);
      document.body.classList.add(...darkClasses);
    } else {
      document.body.classList.remove(...darkClasses);
      document.body.classList.add(...lightClasses);
    }
    return () =>
      document.body.classList.remove(...lightClasses, ...darkClasses);
  }, [context.globals.theme]);
  return (
    <div className="text-gray-900 dark:text-gray-100">
      <Story />
    </div>
  );
};

export default darkModeDecorator;
