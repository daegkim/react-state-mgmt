import {
  useRef,
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes,
  forwardRef,
} from 'react';
import Input from '..';

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  numberType?: 'integer' | 'float';
  positiveOnly?: boolean;
  maxNumber?: number;
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    { numberType = 'integer', positiveOnly = false, maxNumber, ...rest },
    ref
  ) => {
    const oldValue = useRef('');

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      switch (numberType) {
        case 'integer':
          if (!positiveOnly && newValue.startsWith('-')) {
            newValue = newValue.slice(1);
          }

          if (
            isNaN(Number(newValue)) ||
            newValue.indexOf('.') >= 0 ||
            newValue.startsWith('0')
          ) {
            e.target.value = oldValue.current;
          }
          break;
        case 'float':
          if (!positiveOnly && newValue.startsWith('-')) {
            newValue = newValue.slice(1);
          }

          if (
            isNaN(Number(newValue)) ||
            (newValue.length > 1 &&
              newValue.startsWith('0') &&
              !newValue.includes('.'))
          ) {
            e.target.value = oldValue.current;
          }
          break;
      }

      newValue = e.target.value;

      if (maxNumber !== undefined && Number(newValue) > maxNumber) {
        e.target.value = oldValue.current;
      }

      oldValue.current = e.target.value;

      rest.onChange?.(e);
    };

    const handleBlurInput = (e: FocusEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (newValue.endsWith('-') || newValue.endsWith('.')) {
        e.target.value = newValue.slice(0, newValue.length - 1);
      }

      rest.onBlur?.(e);
    };

    return (
      <Input
        ref={ref}
        {...rest}
        onChange={handleChangeInput}
        onBlur={handleBlurInput}
      />
    );
  }
);

InputNumber.displayName = 'InputNumber';

export default InputNumber;
