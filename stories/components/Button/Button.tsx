import React from 'react';
import './button.css';
import { Button as AntButton, ButtonProps } from 'antd';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  ...props
}: ButtonProps) => {
  return (
    <AntButton
      // type="button"
      {...props}
      style={{
        backgroundColor: props.color
      }}
    >
      {props.children}
    </AntButton>
  );
};
