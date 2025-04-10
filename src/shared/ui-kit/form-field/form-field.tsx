import { Input } from '@/shared/ui-kit';
import clsx from 'clsx';
import s from './form-field.module.scss';
import { InputProps } from '@/shared/ui-kit/input/input.tsx';

interface FormFieldProps extends InputProps {
  label: string;
  errorMessage?: string;
  className?: string;
}

export const FormField = ({
  label,
  errorMessage,
  className,
  ...inputProps
}: FormFieldProps) => {
  return (
    <div className={clsx(s.formField, className)}>
      <label className={s.label}>
        <span>
          {label}
        </span>
        <Input error={!!errorMessage} {...inputProps} />
        {errorMessage && <span className={s.error}>{errorMessage}</span>}
      </label>
    </div>
  );
};
