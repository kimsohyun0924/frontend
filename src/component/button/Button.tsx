import React from 'react';
import { darken, lighten } from "polished";
import styled, { css } from 'styled-components';
// import SpinnerSmall from 'components/spinner/SpinnerSmall';

interface ButtonProps {
    disabled?: boolean;
    color?: string,
    name?: string, 
    onClick?: any, 
    loading?: string, 
    size?: number, 
    value?: any
}

const Button = styled.button<ButtonProps>`
  
  margin-right: 10px;

	${({ size }: ButtonProps) => 
    size &&  
    css`
      font-size: ${size}px;
  `}
 
  ${({ color, disabled }: ButtonProps) =>
    color === 'primary' &&
      css`
      outline: none;
      border: none;
      color: white;
      cursor: pointer;
      box-shadow: none;
      background: #141e49;
      border-radius: 3px;
      padding: 9px 21px 9px 21px;
      border: none;
      font-family: Spoqa Han Sans Regular;
      vertical-align: middle;
      text-align: center;
      height: auto; 

      ${!disabled &&
        css`
          &:hover {
            background: ${lighten(0.1, '#141e49')};
          }
          &:active {
            background: ${darken(0.1, '#141e49')};
          }  
      `}          
      ${disabled &&
        css`
          cursor: default;
          background: ${lighten(0.7, '#141e49')};   
      `}          
  `}

  ${({ color }: ButtonProps) => 
    color === 'secondary' &&
    css`
      outline: none;
      border: none;
      cursor: pointer;
      box-shadow: none;
      color: black;
      background: none;
      border: none;
      padding: 12px 21px 12px 21px;
      font-family: Spoqa Han Sans Regular;
    
      &:hover {
        color: black;
        background: #f4f4f4;
        border: none;
      }
  `}

  ${({ color, disabled }: ButtonProps) =>
    color === 'outline' &&
    css`
      outline: none;
      border: none;
      color: #333336;
      cursor: pointer;
      box-shadow: none;
      background: none;
      border-radius: 2px;
      border: 1px solid #333336;
      padding: 8px 10px 8px 10px;
      font-family: Spoqa Han Sans Regular;
        
      &:hover {
        color: #03428e;
        background: white;
        border: 1px solid #03428e;
      }   

      ${disabled &&
        css`
          color: #b6b6c3;
          background: none;
          border-radius: 2px;
          padding: 8px 10px 8px 10px;
          border: 1px solid #b6b6c3;
          font-family: Spoqa Han Sans Regular;
          cursor: default;
          
          &:hover {
            background: white;
            border: 1px solid #b6b6c3;
            color: #b6b6c3;
          } 
      `}     
  `}

  ${({ color, loading }: ButtonProps) => 
    color === 'primary' && loading === 'true' &&
    css`
      background: #1045b0;
      &:hover {
        cursor: default;
      }
  `}

  ${({ color, loading }: ButtonProps) => 
    color === 'secondary' && loading === 'true' &&
    css`
      &:hover {
        cursor: default;
        background-color: #ffffff;
        border-color: #e0e0e0;
      }
  `}
`;


export default function ButtonMiddle({color, name, onClick, loading, size, disabled, value}: ButtonProps) {
  return (
    <React.Fragment>
      { (name !== 'creating' && name !== 'deleting' && name !== 'updating' && name !== 'copying' && name !== 'changing' 
        && name !== 'saving' && name !== 'stopping' && name !== 'starting' && name !== 'restarting' && name !== 'recovering') && 
        <Button size={size} color={color} onClick={onClick} loading={loading} disabled={disabled} value={value}>
          {name}
        </Button>
      }
      { (name === 'creating' || name === 'deleting' || name === 'updating' || name === 'copying' || name === 'changing' 
        || name === 'saving' || name === 'stopping' || name === 'starting' || name === 'restarting' || name === 'recovering') &&
        <Button disabled={true} style={{width:"85px", height: "43.5px"}} size={size} color={color} onClick={onClick} loading={loading}>
          {/* <Loading><RiLoader4Line /></Loading>  */}
          {/* <SpinnerSmall color='white'/> */}
          {/* <Text>{name}</Text> */}
        </Button>
      }
    </React.Fragment>
  )
}