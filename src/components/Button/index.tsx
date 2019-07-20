import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { darken, lighten } from 'polished';
import { colors } from '../../variables';

type InnerColorsProps = {
  bg?: string,
  cl?: string,
};

type InnerProps = {
  round?: boolean,
  href?: string,
  colors?: InnerColorsProps,
  framed?: boolean,
};

type InnerPropsColors = {
  [key: string]: InnerColorsProps,
};

type ButtonProps = {
  children: ReactNode | string,
  className?: string,
  round?: boolean,
  link?: boolean,
  to?: string,
  type?: 'button' | 'reset' | 'submit',
  disabled?: boolean,
  onClick?: () => void,
  primary?: boolean,
  secondary?: boolean,
  success?: boolean,
  danger?: boolean,
  warning?: boolean,
  info?: boolean,
  framed?: boolean,
};

const bgColor: InnerPropsColors = {
  primary: {
    bg: colors.primary,
    cl: colors.secondary,
  },
  secondary: {
    bg: colors.secondary,
    cl: colors.opposite,
  },
  success: {
    bg: colors.success,
    cl: colors.secondary,
  },
  danger: {
    bg: colors.danger,
    cl: colors.secondary,
  },
  warning: {
    bg: colors.warning,
    cl: colors.opposite,
  },
  info: {
    bg: colors.info,
    cl: colors.secondary,
  },
};

const getBgColor = ({ bg }: InnerColorsProps) => bg || 'transparent';

const getColor = ({ cl }: InnerColorsProps) => cl || 'initial';

const Wrapper  = styled('a')({
  padding: '0.4em 0.55em',
  fontSize: '0.85em',
},
({ framed, round, colors }: InnerProps) => colors && ({
    backgroundColor: framed ? 'transparent' : getBgColor(colors),
    border: framed ? `1px solid ${getBgColor(colors)}` : '1px solid transparent',
    color: framed ? getBgColor(colors) : getColor(colors),
    borderRadius: round ? '0.25rem' : '2px',
    transition: 'background-color 300ms ease-in-out',
    '&:focused': {
      outline: getBgColor(colors),
    },
    '&:hover': {
      border: framed ? `1px solid ${darken(0.2, getBgColor(colors))}` : '1px solid transparent',
      backgroundColor: darken(0.2, getBgColor(colors)),
      color: getColor(colors),
    },
    '&:active': {
      backgroundColor: lighten(0.2, getBgColor(colors)),
    }
  })
);

const ButtonW = Wrapper.withComponent('button');
const Link = Wrapper.withComponent('a');

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    round,
    to,
    onClick,
    type,
    disabled,
    framed,
    ...colors
  } = props;
  const colorKey = bgColor[Object.keys(colors)[0]];
  return to
    ? <Link
      className={className}
      href={to}
      round={round}
      colors={colorKey}
      framed={framed}
    >{ children }</Link>
    : <ButtonW
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
      round={round}
      colors={colorKey}
      framed={framed}
    >{ children }</ButtonW>
  ;
};

export default Button;