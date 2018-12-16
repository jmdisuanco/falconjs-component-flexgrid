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
        <Row gutter={state.gutterPx}>{state.Cols}</Row>
      </div>
      <div>
      <Row gutter={8}>
        <Col span={1.5} order={1} ><div style={style}>Column 1</div></Col>
        <Col span={1.5} order={2}><div style={style}>Column 2</div></Col>
        <Col span={1.5} order={3}><div style={style}>Column 3</div></Col>
        <Col span={1.5} order={4}><div style={style}>Column 4</div></Col>
        <Col span={1.5} order={5}><div style={style}>Column 5</div></Col>
        <Col span={1.5} order={6}><div style={style}>Column 6</div></Col>
        <Col span={1.5} order={5}><div style={style}>Column 5</div></Col>
        <Col span={1.5} order={6}><div style={style}>Column 6</div></Col>
      </Row>
      <Row gutter={80}>
        <Col md={{span:3, order:4}}><div style={style}>Column 1</div></Col>
        <Col md={{span:3, order:3}}><div style={style}>Column 2</div></Col>
        <Col md={{span:3, order:3}}><div style={style}>Column 3</div></Col>
        <Col md={{span:3, order:1}}><div style={style}>Column 4</div></Col>
      </Row>
      <Row gutter={80}>
        <Col span={3} order={4}>4 col-4</Col>
        <Col span={3} order={3}>3 col-4</Col>
        <Col span={3} order={2}>2 col-4</Col>
        <Col span={3} order={1}>1 col-4</Col>
      </Row>
      <pre>{`
        <Row gutter={40}>
        <Col span={3} offset={3}><div style={style}>Col-3</div></Col>
        <Col span={3}><div style={style}>Col-3</div></Col>
      </Row>
      `}</pre>
      <Row gutter={40}>
        <Col span={3} offset={3}><div style={style}>Col-3</div></Col>
        <Col span={3}><div style={style}>Col-3</div></Col>
      </Row>

      <pre>{`
        <Row gutter={40} justify="start" align="top">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
       </Row>
      `}</pre>
          <Row gutter={40} justify="start" align="top">
            <Col span={4}><div style={style}>Col-4</div></Col>
            <Col span={4}><div style={{background:'#d3d3d3', height:'30px'}}>Col-4</div></Col>
            <Col span={4}><div style={style}>Col-4</div></Col>
          </Row>

           <pre>{`
        <Row gutter={40} justify="start" align="bottom">
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
       </Row>
      `}</pre>
          <Row gutter={40} justify="start" align="bottom">
            <Col span={4}><div style={style}>Col-4</div></Col>
            <Col span={4}><div style={{background:'#d3d3d3', height:'30px'}}>Col-4</div></Col>
            <Col span={4}><div style={style}>Col-4</div></Col>
          </Row>

          <pre>{`
            <Row gutter={40}>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}>xl-10</Col>
              <Col xs={10} sm={8} md={6} lg={4} xl={2}>xl-2</Col>
            </Row>
          `}</pre>
          <Row gutter={40}>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}><div style={style}>xl-10</div></Col>
            <Col xs={10} sm={8} md={6} lg={4} xl={2}><div style={style}>xl-2</div></Col>
          </Row>

          <pre>{`
            <Row gutter={40}>
              <Col xs={{ span: 6, offset: 2 }}>xs-6</Col>
              <Col span={4}>col-4</Col>
            </Row>
          `}</pre>
          <Row gutter={40}>
            <Col xs={{ span: 6, offset: 2 }}><div style={style}>xs-6</div></Col>
            <Col span={4}><div style={style}>col-4</div></Col>
          </Row>
      </div>
      <div>
      
      </div>    
    </div>
  )

} //End of View Component

const render = Render(view, document.getElementById('root') )


render(state)



