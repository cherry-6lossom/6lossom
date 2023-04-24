import style from './A11yHidden.module.scss';

import React, { forwardRef, HTMLAttributes } from 'react';


interface A11yHiddenProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  focusable?: boolean;
  className?: string;
  [propName:string]:any;
}

export const A11yHidden = forwardRef<HTMLElement, A11yHiddenProps>(function A11yHidden(
  { as: Component = 'span', focusable = false, className = '', ...restProps },
  ref
) {
  const combinedClassNames = `${style.A11yHidden} ${
    focusable ? style.focusable : ''
  } ${className}`.trim();

  return React.createElement(Component, {
    ...restProps,
    className: combinedClassNames,
    ref:ref
  });
});


