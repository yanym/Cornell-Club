import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {
  render() {
      return (
        <section id="photos" style={{ background: 'white' }}>
          <div className="row" >
            <div className="twelve columns" >
            <h1>Team</h1>
              <Row>
                <Col sm={0} lg={4}></Col>
                <Col xs={24} md={12} lg={8}>
                  <Card 
                    hoverable={false}
                    style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo1.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px'}}
                    title="Cornell"
                    description="Creepy phd"
                  />
                  </Card>
                </Col>
                <Col xs={24} md={12} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo2.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px' }}
                    title="danainiu"
                    description="222"
                  />
                  </Card>
                </Col>
              </Row>
              <div><br></br></div>
              <div><br></br></div>
              <div><br></br></div>
              <Row>
                <Col xs={24} md={12} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo2.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px'}}
                    title="laomuzhu"
                    description="333"
                  />
                  </Card>
                </Col>
                <Col xs={24} md={12} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo1.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px'}}
                    title="xiaoniunai"
                    description="444"
                  />
                  </Card>
                </Col>
                <Col xs={24} md={12} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo2.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px'}}
                    title="daniunai"
                    description="555"
                  />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      )
  }
}