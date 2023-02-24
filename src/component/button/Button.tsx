import React from 'react';
import { darken, lighten } from "polished";
import styled, { css } from 'styled-components';
// import SpinnerSmall from 'components/spinner/SpinnerSmall';

interface ButtonProps {
    disabled?: boolean;
    type?: any,
    name?: any, 
    action?: any, 
    loading?: any, 
    size?: string, 
    value?: any
}

interface Sizes {
    [key: string]: {
      fontSize: string;
    };
  }

const sizes: Sizes = {
  large: {
    fontSize: '16px'
  },
  medium: {
    fontSize: '15px'
  },
  small: {
    fontSize: '14px'
  },
  supersmall: {
    fontSize: '13px'
  },
  supersupersmall: {
    fontSize: '12px'
  }
};

const sizeStyles = css`
  ${({ size }: ButtonProps) => css`
    font-size: ${size && sizes[size] ? sizes[size].fontSize : 'inherit'};
    padding: ${size && sizes[size] ? sizes[size].fontSize : 'inherit'};
  `}
`;

const Button = styled.button<ButtonProps>`

  ${sizeStyles}

  ${({ type = 'primary', disabled = false }: ButtonProps) =>
    type === 'primary' &&
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
        `
    }

  ${props => props.type === 'secondary' &&
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
      `
    }

    ${({ type = 'primary', disabled = false }: ButtonProps) =>
      type === 'outline' &&
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
      `
    }

  ${props => props.type === 'small' &&
    css`
      outline: none;
      border: 1px solid #333336;
      color: #333336;
      border-radius: 2px;
      cursor: pointer;
      box-shadow: none;
      background: none;
      padding: 5px 9px 5px 9px;
      font-family: Spoqa Han Sans Regular;
      &:hover {
        border: 1px solid #03428e;
        color: #03428e;
      }
    `
  }

  ${props => props.loading === 'true' && props.type === 'primary' &&
    css`
      background: #1045b0;
      &:hover {
        cursor: default;
      }
    `  
  }

  ${props => props.loading === 'true' && props.type === 'secondary' &&
    css`
      &:hover {
        cursor: default;
        background-color: #ffffff;
        border-color: #e0e0e0;
      }
    `  
  }
`;


export default function ButtonMiddle({type, name, action, loading, size, disabled, value}: ButtonProps) {
  return (
    <React.Fragment>
      { (name !== 'creating' && name !== 'deleting' && name !== 'updating' && name !== 'copying' && name !== 'changing' 
        && name !== 'saving' && name !== 'stopping' && name !== 'starting' && name !== 'restarting' && name !== 'recovering') && 
        <Button size={size} type={type} onClick={action} loading={loading} disabled={disabled} value={value}>
          {name}
        </Button>
      }
      { (name === 'creating' || name === 'deleting' || name === 'updating' || name === 'copying' || name === 'changing' 
        || name === 'saving' || name === 'stopping' || name === 'starting' || name === 'restarting' || name === 'recovering') &&
        <Button disabled={true} style={{width:"85px", height: "43.5px"}} size={size} type={type} onClick={action} loading={loading}>
          {/* <Loading><RiLoader4Line /></Loading>  */}
          {/* <SpinnerSmall color='white'/> */}
          {/* <Text>{name}</Text> */}
        </Button>
      }
    </React.Fragment>
  )
}

