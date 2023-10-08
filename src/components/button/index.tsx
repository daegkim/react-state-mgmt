import type { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/dedupe';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'green' | 'red' | 'blue' | 'orange';
}

const buttonColor = {
  green: 'border-green-500 bg-green-200',
  red: 'border-red-500 bg-red-200',
  blue: 'border-blue-500 bg-blue-200',
  orange: 'border-orange-500 bg-orange-200',
};

const Button = ({ color, ...rest }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'flex items-center',
        'w-auto h-6 px-2',
        'border',
        buttonColor[color]
      )}
      {...rest}
    ></button>
  );
};

export default Button;
