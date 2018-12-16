import {h} from '@falconjs.io/falcon'
import s from './style/index.scss';

let  Col = ({ span, offset, children, prefix = 'flcn-grid-col', order, ...others }) => {  
  let classes='flcn-col '
  others['class'] ? classes = others['class']+' ' : null
  let sizes = ['xs', 'sm', 'md', 'lg', 'xl']
  sizes.map( (size)=>{
     if (others[size]) {
        let sizeParams = {};
        if (typeof others[size] === 'number') {
          sizeParams.span = others[size];
        } else if (typeof others[size] === 'object') {
          sizeParams = others[size] || {};
        }
        delete others[size];
        typeof sizeParams.span !== 'undefined' ? classes += `${prefix}-${size}-${sizeParams.span} ` : null
        sizeParams.offset || sizeParams.offset === 0 ? classes += `${prefix}-${size}-offset-${sizeParams.offset} ` : null
        sizeParams.order || sizeParams.order === 0? classes += `${prefix}-${size}-order-${sizeParams.order}` : null
      }

  })
      span ?  classes += `${prefix}-${span} ` : null
      offset ?  classes += `${prefix}-offset-${offset} ` : null
      order ?  classes += `${prefix}-order-${order} ` : null
  return <div {...others} class={classes}  >{children}</div>
}

Col.defaultProps = {
  offset: 0
}

export default Col;
