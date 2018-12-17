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

/*
 style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '150px', 
                fontSize: '1.5em', 
                background: `${i % 2 === 0 ? '#068587' : '#4FB99F'}`, 'color': '#FFF' }}
*/
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
              <div>
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
      <div id="samples">
        <h2>The Basics</h2>
        <p>In Rows use the gutter property for spacing.</p>
        <p>In Columns use the span property to define the span of the column on the 12 grid</p>
        <pre>
        {`
        <Row gutter={40} >
          <Col span={4}><div>1</div></Col>
          <Col span={4}><div>2</div></Col>
          <Col span={4}><div>3</div></Col>
        </Row>
        `}
        </pre>
          <Row gutter={40} >
            <Col span={4}><div>1</div></Col>
            <Col span={4}><div>2</div></Col>
            <Col span={4}><div>3</div></Col>
          </Row>

        <h2>Offset</h2>
        <p>Offset the position of the column to the right.</p>
        <pre>
        {`
        <Row gutter={20}>
          <Col span={4} offset={4}> <div>Span 4 | Offset 4</div></Col>
          <Col span={4}><div>Span 4</div></Col>
        </Row>
        `}
        </pre>
        <Row gutter={20}>
          <Col span={4} offset={4}> <div>Span 4 | Offset 4</div></Col>
          <Col span={4}><div>Span 4</div></Col>
        </Row>

        <h2>Order</h2>
        <p>Sort the columns within <code>{`<Row>`}</code></p>
        <pre>
        {`
        <Row gutter={20}>
          <Col span={4} order={3}><div>C</div></Col>
          <Col span={4} order={2}><div>B</div></Col>
          <Col span={4} order={1}><div>A</div></Col>
        </Row>
        `}
        </pre>
        <Row gutter={20}>
          <Col span={4} order={3}><div>C</div></Col>
          <Col span={4} order={2}><div>B</div></Col>
          <Col span={4} order={1}><div>A</div></Col>
        </Row>

        <h2>Align and Distribute</h2>
        <p><code>justify</code> to distribute the columns inside the row
        options: start, center, end, space-between, and space-around
        code snippet <code>{'<Row justify="center">'}</code></p>
        <p>vertical to vertical align the columnds inside the row
        options: top, middle, bottom
        code snippet <code>{`<Row vertical="top">`}</code></p>
        <p>Flexbox parameters can be passed to Row to align and distribute the columns inside it.</p>

        <h3>Vertical Alignment</h3>
        <p><code>vertical="bottom"</code></p>
        <pre>
        {`
        <Row gutter={20} justify="center" vertical="bottom">
          <Col span={4} > <div class="tall">Tall</div></Col>
          <Col span={4} > <div class="medium">Medium</div> </Col>
          <Col span={4} > <div class="short">Short</div></Col>
        </Row>
        `}
        </pre>
        <Row gutter={20} justify="center" vertical="bottom">
          <Col span={4} > <div class="tall">Tall</div></Col>
          <Col span={4} > <div class="medium">Medium</div> </Col>
          <Col span={4} > <div class="short">Short</div></Col>
        </Row>
        <p><code>vertical="middle"</code></p>
        <pre>
        {`
        <Row gutter={20} justify="center" vertical="middle">
          <Col span={4} > <div class="tall">Tall</div></Col>
          <Col span={4} > <div class="medium">Medium</div> </Col>
          <Col span={4} > <div class="short">Short</div></Col>
        </Row> 
        `}
        </pre>
        <Row gutter={20} justify="center" vertical="middle">
          <Col span={4} > <div class="tall">Tall</div></Col>
          <Col span={4} > <div class="medium">Medium</div> </Col>
          <Col span={4} > <div class="short">Short</div></Col>
        </Row>

        <p><code>vertical="top"</code></p>
        <pre>
        {`
        <Row gutter={20} justify="center" vertical="top">
          <Col span={4} > <div class="tall">Tall</div></Col>
          <Col span={4} > <div class="medium">Medium</div> </Col>
          <Col span={4} > <div class="short">Short</div></Col>
        </Row>   
        `}
        </pre>
        <Row gutter={20} justify="center" vertical="top">
          <Col span={4} > <div class="tall">Tall</div></Col>
          <Col span={4} > <div class="medium">Medium</div> </Col>
          <Col span={4} > <div class="short">Short</div></Col>
        </Row>    
        <h3>Distribute (Justify)</h3>

        <p><code>justify="start"</code></p>
        <pre>
        {`
        <Row gutter={20} justify="start">
          <Col span={3} > <div class="tall">Tall</div></Col>
          <Col span={3} > <div class="medium">Medium</div> </Col>
          <Col span={3} > <div class="short">Short</div></Col>
        </Row>
        `}
        </pre>
        <Row gutter={20} justify="start">
          <Col span={3} > <div class="tall">Tall</div></Col>
          <Col span={3} > <div class="medium">Medium</div> </Col>
          <Col span={3} > <div class="short">Short</div></Col>
        </Row>

        <p><code>justify="center"</code></p>
        <pre>
        {`
        <Row gutter={20} justify="center">
          <Col span={3} > <div class="tall">Tall</div></Col>
          <Col span={3} > <div class="medium">Medium</div> </Col>
          <Col span={3} > <div class="short">Short</div></Col>
        </Row>
        `}
        </pre>
        <Row gutter={20} justify="center">
          <Col span={3} > <div class="tall">Tall</div></Col>
          <Col span={3} > <div class="medium">Medium</div> </Col>
          <Col span={3} > <div class="short">Short</div></Col>
        </Row>

        <p><code>justify="end"</code></p>
        <pre>
        {`
        <Row gutter={20} justify="end">
          <Col span={3} > <div class="tall">Tall</div></Col>
          <Col span={3} > <div class="medium">Medium</div> </Col>
          <Col span={3} > <div class="short">Short</div></Col>
        </Row>
        `}
        </pre>
        <Row gutter={20} justify="end">
          <Col span={3} > <div class="tall">Tall</div></Col>
          <Col span={3} > <div class="medium">Medium</div> </Col>
          <Col span={3} > <div class="short">Short</div></Col>
        </Row>

        <p><code>justify="space-between"</code></p>
        <pre>
        {`
        <Row gutter={20} justify="space-between">
          <Col span={3} > <div class="tall">Tall</div></Col>
          <Col span={3} > <div class="medium">Medium</div> </Col>
          <Col span={3} > <div class="short">Short</div></Col>
        </Row>
        `}
        </pre>
        <Row gutter={20} justify="space-between">
          <Col span={3} > <div class="tall">Tall</div></Col>
          <Col span={3} > <div class="medium">Medium</div> </Col>
          <Col span={3} > <div class="short">Short</div></Col>
        </Row>

        <p><code>justify="space-around"</code></p>
        <pre>
        {`
        <Row gutter={20} justify="space-around">
          <Col span={3} > <div class="tall">Tall</div></Col>
          <Col span={3} > <div class="medium">Medium</div> </Col>
          <Col span={3} > <div class="short">Short</div></Col>
        </Row>
        `}
        </pre>
        <Row gutter={20} justify="space-around">
          <Col span={3} > <div class="tall">Tall</div></Col>
          <Col span={3} > <div class="medium">Medium</div> </Col>
          <Col span={3} > <div class="short">Short</div></Col>
        </Row>

        <h2>Responsive</h2>
        <p><code>xs</code><code>sm</code><code>md</code><code>lg</code><code>xl</code></p>
        ** adjust your window size and columns will change accounding to size
        <pre>
        {`
        <Row gutter={20} justify="center" vertical="top">
          <Col xs={12} sm={12}  md={4} lg={6} xl={6}><div> xs-12 sm-12 md-4 lg-6 xl-6</div></Col>
          <Col xs={12} sm={12} md ={8} lg={6} xl={6}><div> sm-12 sm-12 md-8 lg-6 xl-6</div></Col>
        </Row>
        `}
        </pre>
        <Row gutter={20} justify="center" vertical="top">
          <Col xs={12} sm={12}  md={4} lg={6} xl={6}><div> xs-12 sm-12 md-4 lg-6 xl-6</div></Col>
          <Col xs={12} sm={12} md ={8} lg={6} xl={6}><div> sm-12 sm-12 md-8 lg-6 xl-6</div></Col>
        </Row>


        </div>
      </div>

       
    </div>
  )

} //End of View Component

const render = Render(view, document.getElementById('root') )


render(state)



