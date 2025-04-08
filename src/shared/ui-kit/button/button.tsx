import {AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref,} from 'react';
import clsx from "clsx";
import s from './button.module.scss'

export const BUTTON_VARIANTS = ['primary', 'secondary', 'tertiary', 'link'] as const;
export const BUTTON_SIZES = ['S', 'M', 'L'] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];

interface BaseButtonProps {
  size?: ButtonSize;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  badge?: ReactNode;
}

type ButtonElementProps = {
    variant?: Exclude<ButtonVariant, 'link'>;
    ref?: Ref<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorElementProps = {
    variant?: 'link';
    ref?: Ref<HTMLAnchorElement>;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = BaseButtonProps & (ButtonElementProps | AnchorElementProps);

export const Button = ({
  variant = 'primary',
  size = 'M',
  fullWidth = false,
  suffix,
  prefix,
  badge,
  children,
    ref,
    className,
  ...restProps
}: ButtonProps) => {

  const tagName = variant === 'link' ? 'a' : 'button';
  const Component = tagName as React.ElementType;

    const buttonClassNames = clsx(
        s.button,
        s[`button-${variant}`],
        s[`button-${size}`],
        {
            [s['button-full']]: fullWidth,
        },
        className,
    );

  return (
    <Component ref={ref} className={buttonClassNames} {...restProps}>
      {prefix}
      {children}
      {suffix}
      {badge}
    </Component>
  );
};
