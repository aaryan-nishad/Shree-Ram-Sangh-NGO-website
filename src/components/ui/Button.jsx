const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary',
  secondary:
    'border border-border bg-white text-text hover:bg-background-muted focus-visible:ring-primary',
  text: 'bg-transparent text-text hover:bg-primary-soft hover:text-primary focus-visible:ring-primary',
};

const sizeClasses = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm sm:h-13 sm:px-7',
};

function Button({
  children,
  className = '',
  disabled = false,
  size = 'md',
  variant = 'primary',
  type = 'button',
  ...props
}) {
  const resolvedVariant = variantClasses[variant] ?? variantClasses.primary;
  const resolvedSize = sizeClasses[size] ?? sizeClasses.md;

  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:cursor-not-allowed disabled:opacity-60',
        resolvedVariant,
        resolvedSize,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
