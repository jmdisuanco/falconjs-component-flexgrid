import {h, Render} from '@falconjs.io/falcon'
import {Col, Row} from '../src/flexgrid'
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
  background: '#b19cd9',
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
    let validColCount = ['1','2','3','4','6','12']
    if(validColCount.includes(state.colCount)){
      state.Cols = [] //reset
      render(state) 
    }
    
  }
    for (let i =0; i < state.colCount; i++ ){
      state.Cols.push(
        <Col key={i.toString()}  span= {12 / state.colCount} order= {1+ i }>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '150px', 
                fontSize: '1.5em', 
                background: `${i % 2 === 0 ? '#068587' : '#4FB99F'}`, 'color': '#FFF' }}>
                {i+1} col-4
              </div>
        </Col>
      )
    }
  

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
      <span style={{ marginRight: 6 }}>Gutter: {state.gutterPx}px </span>
      <div style={{ width: '50%' }}>
      <input type="range" id="gutter" oninput={onGutterChange} name="gutter" min="0" max="50"/>
        <input value={state.gutterPx} oninput={onGutterChange} />
      </div>
      <span style={{ marginRight: 6 }}>Column Count: {state.colCount}px</span>
      <div style={{ width: '50%' }}>
      <input type="range" id="col" oninput={onColCountChange} name="col" min="1" max="12" list="cols" />
        <datalist id="cols">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
          <option value="6"></option>
          <option value="12"></option>
        </datalist>
      </div>
      </div>
      <div>
        <Row gutter={state.gutterPx}>{state.Cols}</Row>
      </div>
      <div>
      <hr/>
      <Row gutter={80}>
        <Col span={4} style={style}> Column Span 4</Col>
        <Col span={4} style={style}> Column Span 4</Col>
        <Col span={4} style={style}> Column Span 4</Col>
      </Row>
      </div>
      <Row gutter={80}>
      <Col md={{span:3, order:4}}><div style={style}>Column 1</div></Col>
      <Col md={{span:3, order:3}}><div style={style}>Column 2</div></Col>
      <Col md={{span:3, order:3}}><div style={style}>Column 3</div></Col>
      <Col md={{span:3, order:1}}><div style={style}>Column 4</div></Col>
    </Row>
       
    </div>
  )

} //End of View Component

const render = Render(view, document.getElementById('root') )


render(state)



