import {
  useRef,
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes,
  forwardRef,
} from 'react';
import Input from '..';

interface InputNumberProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  numberType?: 'integer' | 'float';
  positiveOnly?: boolean;
  maxNumber?: number;
  value: number | null;
  onChange: (e: ChangeEvent<HTMLInputElement>, value: number | null) => void;
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    { numberType = 'integer', positiveOnly = false, maxNumber, value, ...rest },
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

      rest.onChange?.(e, e.target.value ? Number(e.target.value) : null);
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
        value={value?.toString() || ''}
        onChange={handleChangeInput}
        onBlur={handleBlurInput}
      />
    );
  }
);

InputNumber.displayName = 'InputNumber';

export default InputNumber;
