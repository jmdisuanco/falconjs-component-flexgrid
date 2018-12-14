import {h, Render} from '@falconjs.io/falcon'
import {Col, Row} from './flexgrid'

let state = {
  gutterPx: 8,
  colCount: 12,
  Cols: []
}

let style={
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center',
  height: '150px', 
  fontSize: '1.5em', 
  background: 'rgb(30, 197, 228)',
  color: '#FFF' 
}

const view = state =>{
  let colCode = ''

  let onGutterChange =(e) =>{
    state.gutterPx = e.target.value
    state.Cols = [] //reset
    render(state)
  }

  let onColCountChange = (e) =>{
    state.colCount = e.target.value
    state.Cols = [] //reset
    render(state)
  }

  for (let i =0; i < state.colCount; i++ ){
    state.Cols.push(
      <Col key={i.toString()} md={{ span: `${12 / state.colCount}`, order: 1+ i }}>
            <div style={{ display: 'flex', 'justifyContent': 'center', 'alignItems': 'center', height: '150px', fontSize: '1.5em', background: `${i % 2 === 0 ? 'rgb(30, 197, 228)' : 'rgb(45, 222, 175)'}`, 'color': '#FFF' }}>{i+1} col-4</div>
      </Col>
    )

  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
      <span style={{ marginRight: 6 }}>Gutter (px): </span>
      <div style={{ width: '50%' }}>
      <input type="range" id="gutter" oninput={onGutterChange} name="gutter" min="0" max="50"/>
        <input value={state.gutterPx} oninput={onGutterChange} />
      </div>
      <span style={{ marginRight: 6 }}>Column Count:</span>
      <div style={{ width: '50%' }}>
      <input type="range" id="col" oninput={onColCountChange} name="col" min="3" max="12" step ="3"/>
        <input value={state.colCount} oninput={onColCountChange} />
      </div>
      </div>
      <div>
      <Row gutter={80}>
        <Col md={{span:3, order:1}} class="aden98"><div style={style}>Column 1</div></Col>
        <Col md={{span:3, order:2}}><div style={style}>Column 2</div></Col>
        <Col md={{span:3, order:3}}><div style={style}>Column 3</div></Col>
        <Col md={{span:3, order:4}}><div style={style}>Column 4</div></Col>
       
      </Row>
      <Row gutter={80}>
        <Col md={{span:3, order:1}}>Column 1</Col>
        <Col md={{span:3, order:2}}>Column 2</Col>
        <Col md={{span:3, order:3}}>Column 3</Col>
        <Col md={{span:3, order:4}}>Column 4</Col>
      </Row>
      <Row gutter={80}>
        <Col span={3} order={4}>4 col-4</Col>
        <Col span={3} order={3}>3 col-4</Col>
        <Col span={3} order={2}>2 col-4</Col>
        <Col span={3} order={1}>1 col-4</Col>
      </Row>
      </div>
      <div>
      <Row gutter={state.gutterPx}>{state.Cols}</Row>
      </div>    
    </div>
  )

} //End of View Component

const render = Render(view, document.getElementById('root') )


render(state)



