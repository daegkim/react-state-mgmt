import classNames from 'classnames';
import { forwardRef, type InputHTMLAttributes } from 'react';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className={classNames(
        'px-2 h-6',
        'border border-black',
        'outline-none focus:border-indigo-500',
        className
      )}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
