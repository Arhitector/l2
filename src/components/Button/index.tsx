import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { darken, lighten } from 'polished';
import { colors } from 'src/variables';

type InnerProps = {
  round?: boolean,
  href?: string,
  primary?: boolean,
  secondary?: boolean,
  success?: boolean,
  danger?: boolean,
  warning?: boolean,
  info?: boolean,
  framed?: boolean,
};

type ButtonProps = {
  children: ReactNode,
  className?: string,
  round?: boolean,
  link?: boolean,
  to?: string,
  onClick?: () => void,
  
  primary?: boolean,
  secondary?: boolean,
  success?: boolean,
  danger?: boolean,
  warning?: boolean,
  info?: boolean,
  framed?: boolean,
};

const getBgColor = props => 
  props.primary && colors.primary ||
  props.secondary  && colors.secondary ||
  props.success && colors.success ||
  props.danger && colors.danger ||
  props.warning && colors.warning ||
  props.info && colors.info ||
  'transparent';

const getColor = props => 
  props.primary && colors.secondary ||
  props.secondary  && colors.opposite ||
  props.success && colors.secondary ||
  props.danger && colors.secondary ||
  props.warning && colors.opposite ||
  props.info && colors.secondary ||

  'initial';

const Wrapper  = styled('a')<InnerProps>({
  padding: '0.4em 0.55em',
  fontSize: '0.85em',
},
(props) => ({
    backgroundColor: props.framed ? 'transparent' : getBgColor(props),
    border: props.framed ? `1px solid ${getBgColor(props)}` : '1px solid transparent',
    color: props.framed ? getBgColor(props) : getColor(props),
    borderRadius: props.round ? '0.25rem' : '2px',
    transition: 'background-color 300ms ease-in-out',
    '&:focused': {
      outline: getBgColor(props),
    },
    '&:hover': {
      border: props.framed ? `1px solid ${darken(0.2, getBgColor(props))}` : '1px solid transparent',
      backgroundColor: darken(0.2, getBgColor(props)),
      color: getColor(props),
    },
    '&:active': {
      backgroundColor: lighten(0.2, getBgColor(props)),
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
    ...color
  } = props;

  return to
    ? <Link className={className} href={to} round={round} {...color} >{ children }</Link>
    : <ButtonW className={className} onClick={onClick}  round={round} {...color} >{ children }</ButtonW>
  ;
};

export default Button;