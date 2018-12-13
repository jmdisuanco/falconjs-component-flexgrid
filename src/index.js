import {h, Render, Observable} from '@falconjs.io/falcon'
import {Col} from './flexgrid'


let state = {
  gutterPx: 8,
  colCount: 1,
  Cols: []
}

const view = state =>{

let colCode = ''

let onGutterChange =(e) =>{
  state.gutterPx = e.target.value
  render(state)
}

let onColCountChange = (e) =>{
  state.colCount = e.target.value
  state.Cols = [] //reset
  render(state)
}

for (let i =0; i < state.colCount; i++ ){
  state.Cols.push(
    <Col key={i.toString()} md={{ span: `${12 / state.colCount}`, order: 12 - i }}>
          <div style={{ display: 'flex', 'justifyContent': 'center', 'alignItems': 'center', height: '150px', fontSize: '1.5em', background: `${i % 2 === 0 ? 'rgb(30, 197, 228)' : 'rgb(45, 222, 175)'}`, 'color': '#FFF' }}>{i+1} col-4</div>
    </Col>
  )
  state.Cols.push(
    <Col md={{ span: 0 }}>
        <div style={{ display: 'flex', 'justifyContent': 'center', 'alignItems': 'center', height: '150px', fontSize: '1.5em', 'color': '#FFF' }}>col-4</div>
    </Col>
  )
}


 return (
   <div>
    <div style={{ marginBottom: 16 }}>
    <span style={{ marginRight: 6 }}>Gutter (px): </span>
    <div style={{ width: '50%' }}>
      <input oninput={onGutterChange} />
    </div>
    <span style={{ marginRight: 6 }}>Column Count:</span>
    <div style={{ width: '50%' }}>
      <input oninput={onColCountChange} />
    </div>
    </div>
    {state.Cols}
    </div>
 ) //{state.Cols}
 }

const render = Render(view, document.getElementById('root') )

render(state)