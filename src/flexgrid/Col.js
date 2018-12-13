import {h} from '@falconjs.io/falcon'
import s from './style/index.scss';
import PropTypes from 'prop-types';

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const numberOrObject = PropTypes.oneOfType([PropTypes.number, PropTypes.object]);

let  Col = ({ span, offset, className, children, prefix = 'flcn-grid-col', order, ...others }) => {
  
  let classes=''

  ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
      if (others[size]) {
        let sizeParams = {};
        if (typeof others[size] === 'number') {
          sizeParams.span = others[size];
        } else if (typeof others[size] === 'object') {
          sizeParams = others[size] || {};
        }
        delete others[size]; // To prevent a "Warning: Unknown props.."
        typeof sizeParams.span !== 'undefined' ? classes += `${prefix}-${size}-${sizeParams.span} ` : null
        sizeParams.offset || sizeParams.offset === 0 ? classes += `${prefix}-${size}-offset-${sizeParams.offset} ` : null
        sizeParams.order || sizeParams.order === 0? classes += `${prefix}-${size}-order-${sizeParams.order}` : null
      }
  });

  return <div {...others} class={classes}>{children}</div>

}

Col.defaultProps = {
  offset: 0
}

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  span: stringOrNumber,
  xs: numberOrObject,
  sm: numberOrObject,
  md: numberOrObject,
  lg: numberOrObject,
  xl: numberOrObject,
  offset: stringOrNumber,
  prefix: PropTypes.string,
  order: stringOrNumber
}

export default Col;
