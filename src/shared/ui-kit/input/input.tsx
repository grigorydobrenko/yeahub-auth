import { ComponentProps, ReactNode, useRef } from 'react';
import clsx from 'clsx';
import s from './input.module.scss';

export const INPUT_SIZES = ['S', 'M', 'L'] as const;

export type InputSize = (typeof INPUT_SIZES)[number];

export interface InputProps extends Omit<ComponentProps<'input'>, 'size' | 'prefix'> {
  size?: InputSize;
  prefix?: ReactNode;
  suffix?: ReactNode;
  error?: boolean;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const Input = ({
  size = 'L',
  prefix,
  suffix,
  error = false,
  className,
  disabled,
  placeholder,
  ref,
  ...restProps
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const wrapperClasses = clsx(
    s.wrapper,
    {
      [s['wrapper-disabled']]: disabled,
      [s['wrapper-error']]: error,
      [s[`wrapper-${size}`]]: size,
    },
    className
  );

  const handleClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  };

  const setRef = (element: HTMLInputElement) => {
    inputRef.current = element;
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLInputElement | null>).current = element;
    }
  };

  return (
    <div
      className={wrapperClasses}
      onClick={handleClick}
      onFocus={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
    >
      {prefix}
      <input
        className={s.input}
        ref={setRef}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error}
        {...restProps}
      />
      {suffix}
    </div>
  );
};
