import React from 'react';
import classNames from 'classnames';

export type SpinnerProps = {
  className?: string,
  variant?: 'primary' | 'secondary'
  size?: 'xs' | 'md' | 'lg' | 'xl'
};

export default function Spinner({ className, variant = 'primary', size = 'lg' }: SpinnerProps) {
  return (
    <div className={className}>
      <div
        className={classNames('border rounded-full transform-gpu animate-spin', {
          'border-green-600 border-opacity-20': variant === 'primary',
          'border-gray-100 border-opacity-20': variant === 'secondary',
          'w-4 h-4': size === 'xs',
          'w-6 h-6': size === 'md',
          'w-8 h-8': size === 'lg',
          'w-10 h-10': size === 'xl',
        })}
        style={{
          borderLeftColor: variant === 'primary' ? 'rgb(5, 150, 105)' : (variant === 'secondary' ? 'rgb(255, 255, 255)' : undefined),
        }}
      />
    </div>
  );
}
