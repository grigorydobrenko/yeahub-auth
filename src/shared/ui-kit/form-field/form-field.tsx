import { Input } from '@/shared/ui-kit';
import clsx from 'clsx';
import s from './form-field.module.scss';
import { InputProps } from '@/shared/ui-kit/input/input.tsx';
import { MouseEvent, useState } from 'react';
import Eye from '@/shared/assets/eye.svg?react';
import EyeClosed from '@/shared/assets/eye-closed.svg?react';

interface FormFieldProps extends InputProps {
  label: string;
  errorMessage?: string;
  className?: string;
  type?: string;
}

export const FormField = ({
  label,
  errorMessage,
  className,
  type,
  ...inputProps
}: FormFieldProps) => {
  const [inputType, setInputType] = useState(() => (type === 'password' ? 'password' : type));

  const isPassword = type === 'password';

  const button = (
    <button
      className={s.togglePasswordVisible}
      type={'button'}
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setInputType((prevState) => (prevState === 'password' ? 'text' : 'password'));
      }}
    >
      {inputType === 'password' ? <EyeClosed /> : <Eye />}
    </button>
  );

  return (
    <div className={clsx(s.formField, className)}>
      <label className={s.label}>
        <span>{label}</span>
        <Input
          type={inputType}
          error={!!errorMessage}
          {...inputProps}
          suffix={isPassword && button}
        />
        {errorMessage && <span className={s.error}>{errorMessage}</span>}
      </label>
    </div>
  );
};
