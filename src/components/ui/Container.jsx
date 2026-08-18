function Container({ as: Component = 'div', children, className = '', ...props }) {
  const baseClasses = 'mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 2xl:px-0';

  return (
    <Component className={`${baseClasses} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export default Container;
