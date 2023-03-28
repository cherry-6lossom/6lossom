import style from './A11yHidden.module.scss';

import { forwardRef } from 'react';

export const A11yHidden = forwardRef(function A11yHidden(
  { as: Component = 'span', focusable = false, className = '', ...restProps },
  ref
) {
  const combinedClassNames = `${style.A11yHidden} ${
    focusable ? style.focusable : ''
  } ${className}`.trim();

  return <Component ref={ref} className={combinedClassNames} {...restProps} />;
});
