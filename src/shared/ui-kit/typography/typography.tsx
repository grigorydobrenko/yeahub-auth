import s from './typography.module.scss';
import clsx from 'clsx';
import {camelToKebab} from '../../utils/camel-to-kebab.ts';

export const TYPOGRAPHY_SIZES = [
  'head1',
  'head2',
  'head3',
  'head4',
  'head5',
  'body1',
  'body1Accent',
  'body2',
  'body2Accent',
  'body2Strong',
  'body3',
  'body3Accent',
  'body3Strong',
  'body4',
  'body5',
  'body5Capitalize',
  'body5Accent',
  'body5Strong',
  'body6',
] as const;

type TypographyVariant = (typeof TYPOGRAPHY_SIZES)[number];

interface TypographyProps {
  variant: TypographyVariant;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  children: string;
  color?: 'primary' | 'secondary';
  maxRows?: 1 | 2;
  className?: string;
}

export const Typography = ({
  variant,
  className,
  maxRows,
  color = 'primary',
  children,
  component = 'p',
}: TypographyProps) => {
  const typographyFont = camelToKebab(variant);
  const typographyColor = `color-${color}`;
  const typographyRows = `typography-rows-${maxRows}`;
  const classes = clsx(
    className,
    s[typographyFont],
    s[typographyColor],
    maxRows && s[typographyRows]
  );

  const Tag = component;

  return <Tag className={classes}>{children}</Tag>;
};
