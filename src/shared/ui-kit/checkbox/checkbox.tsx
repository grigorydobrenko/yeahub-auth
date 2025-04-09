import { ComponentProps } from 'react';
import clsx from 'clsx';
import s from './checkbox.module.scss';

export interface CheckboxProps extends ComponentProps<'input'> {
  label?: string;
  className?: string;
}

export const Checkbox = ({ label, className, ...restProps }: CheckboxProps) => {
  return (
    <label
      className={clsx(s['checkbox-wrapper'], className, {
        [s.disabled]: restProps.disabled,
      })}
    >
      <input type="checkbox" className={s.checkbox} {...restProps} />
      {label && <span className={s.label}>{label}</span>}
    </label>
  );
};
