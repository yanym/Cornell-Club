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
                <Col xs={12} md={12} lg={8}>
                  <Card 
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo1.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px'}}
                    title="Cornell"
                    description="Creepy phd"
                  />
                  </Card>
                </Col>
                <Col xs={12} md={12} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo2.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px' }}
                    title="Upenn"
                    description="CIS"
                  />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo2.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px'}}
                    title="UMich"
                    description="Good"
                  />
                  </Card>
                </Col>
                <Col xs={12} md={12} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo3.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px'}}
                    title="MIT"
                    description="Best"
                  />
                  </Card>
                </Col>
                <Col xs={12} md={12} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo2.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px'}}
                    title="Caltech"
                    description="Second"
                  />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <hr/>
        </section>
      )
  }
}