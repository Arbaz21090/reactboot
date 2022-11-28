import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import {RadialBarChart, LineChart,Line, RadialBar, PieChart, Pie,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
    BarChart, Bar } from 'recharts';
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "mv": 2000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "mv": 2000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 8000,
          "mv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "mv": 2000,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "mv": 2000,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "mv": 2000,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "mv": 2000,
          "pv": 4300
        }
      ];
      const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
      const data03 = [
        {
          "name": "18-24",
          "uv": 31.47,
          "pv": 2400,
          "fill": "#8884d8"
        },
        {
          "name": "25-29",
          "uv": 26.69,
          "pv": 4567,
          "fill": "#83a6ed"
        },
        {
          "name": "30-34",
          "uv": -15.69,
          "pv": 1398,
          "fill": "#8dd1e1"
        },
        {
          "name": "35-39",
          "uv": 8.22,
          "pv": 9800,
          "fill": "#82ca9d"
        },
        {
          "name": "40-49",
          "uv": -8.63,
          "pv": 3908,
          "fill": "#a4de6c"
        },
        {
          "name": "50+",
          "uv": -2.63,
          "pv": 4800,
          "fill": "#d0ed57"
        },
        {
          "name": "unknow",
          "uv": 6.67,
          "pv": 4800,
          "fill": "#ffc658"
        },
      ];
      const data04 = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
      
         
      
function Recharts() {
    return (
        <div class="my-5">
        <Container>
        <Row>
        <Col>
        <h1 class="fs-2 underline decoration-wavy decoration-sky-400 underline-offset-4 text-primary">Data Interpreter:-</h1>
      <p class="text-justify text-slate-800 font-mono">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Col>
        <Col SM={6}>
        <BarChart width={550} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="mv" fill="#480fc9" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
      <p class="text-danger pt-3 text-center">BarChart is showing the records</p>
      </Col>
      
      </Row>
      </Container>
      <Container>
      <Row class="my-4">
      <Col class="shadow-2xl">
      <PieChart width={530} height={250} class="shadow-lg">
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  </PieChart>
  <p class="text-danger pt-3 text-center">PieChart is showing the records</p>
      </Col>
      <Col>
        <h1 class="fs-2 underline decoration-wavy decoration-sky-400 underline-offset-4 text-primary">Data Interpreter:-</h1>
      <p class="text-justify text-slate-800 font-mono">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Col>
      </Row>
      </Container>
      <Container class="my-4">
      <Row>
      <Col>
      <RadialBarChart 
  width={530} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data03} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
      </Col>
      <Col>
      <LineChart width={530} height={250} data={data04}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
      </Col>
      </Row>
      </Container>
        </div>
    );
}

export default Recharts;