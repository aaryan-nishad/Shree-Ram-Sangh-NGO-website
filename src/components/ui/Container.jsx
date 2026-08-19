import { forwardRef } from 'react';

const Container = forwardRef(function Container(
  { as: Component = 'div', children, className = '', ...props },
  ref,
) {
  const baseClasses = 'mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 2xl:px-0';

  return (
    <Component ref={ref} className={`${baseClasses} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
});

export default Container;
