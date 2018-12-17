import {h} from '@falconjs.io/falcon'
import s from './style/index.scss'

let Row = ({ justify='start', vertical='top', className, gutter = 0 , style, children,prefix = 'flcn-grid-row', ...others }) => {
let classes = 'flcn-row '
 classes += `${prefix} ` 
 classes += `${prefix}-${justify} ` || justify+' '
 classes += `${prefix}-${vertical} ` || vertical+' '
    const rowStyle = gutter > 0 ? Object.assign({}, {
      marginLeft: gutter / -2,
      marginRight: gutter / -2,
    }, style) : style;


    const cols = children.map( (col) => {
      if (!col) {
        return null;
      }
      if (col.props && gutter > 0) {
        
        let style ={
          paddingLeft: gutter / 2 +'px',
          paddingRight: gutter / 2 +'px'
        }
       
        col.props.style= style
        }
        return col
      
    });
    return <div {...others} style={rowStyle} class={classes}>{cols}</div>;
}
export default Row;