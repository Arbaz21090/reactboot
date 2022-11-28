import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import { Breadcrumb, Layout, Menu } from 'antd';
// import React from 'react';
import './components/style.css';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { Skeleton } from 'antd';
import av from './images/1.jpg';
const { Header, Content, Footer } = Layout;

function Antdesign() {
    return (
        <div>
        
            <Container>
                <Row>
                    <Col>
                    <Layout className="layout">
    <Header>
      <div className="logo" />
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(10).fill(null).map((_, index) => {
          const key = index+1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">The quick brown fox jumps right over the lazy dog. </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
        color:'red',
        marginBottom:'5'
      }}
    >
      Ant Design ©2018 Created by Ant UED
      <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
    <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
    

    </Footer>
  </Layout>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Antdesign;
