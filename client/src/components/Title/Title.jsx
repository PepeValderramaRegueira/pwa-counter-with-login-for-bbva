import { createElement } from 'react';
import './Title.scss';

const Title = ({
  tag = 'h1',
  text = '',
  extraClasses = ''
}) => {
  let propStyles = '';
  propStyles += `is-${tag} `
  
  const getTitleComponent = ({
    tag,
    text,
    extraClasses,
    propStyles
  }) => createElement(tag, {
    className: `title ${propStyles} ${extraClasses}`.trimRight(),
    children: text
  });
  
  return getTitleComponent({
    tag,
    text,
    extraClasses,
    propStyles
  });
}

export default Title;
