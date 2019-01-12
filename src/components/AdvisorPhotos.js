import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class photos extends Component {
  render() {
      return (
        <section id="photos" style={{ background: 'white' }}>
          <div className="row" >
            <div className="twelve columns" >
            <h1>Advisor</h1>
              <Row>
                <Col sm={0} lg={4}></Col>
                <Col xs={12} md={12} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo2.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px' }}
                    title="Cornell"
                    description="Engineering"
                  />
                  </Card>
                </Col>
                <Col xs={12} md={12} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/photo1.jpg" />}
                  >
                  <Meta style={{ fontSize: '16px' }}
                    title="Cornell Tech"
                    description="Medical"
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