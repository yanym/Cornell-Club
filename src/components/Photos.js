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
              <Col span={8} >
                <Card
                  hoverable
                  style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}
                  cover={<img alt="example" src="images/1128.png" />}
                >
                <Meta
                  title="cao"
                  description="111"
                />
                </Card>
              </Col>
              <Col span={8} offset={8}>
                <Card
                  hoverable
                  style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                  cover={<img alt="example" src="images/128.png" />}
                >
                <Meta
                  title="nb"
                  description="222"
                />
                </Card>
              </Col>
            </Row>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <div><br></br></div>
            <Row>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: '50%', marginLeft: 0, marginRight: 'auto', textAlign: 'center'}}
                  cover={<img alt="example" src="images/1128.png" />}
                >
                <Meta
                  title="niubi"
                  description="333"
                />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                  cover={<img alt="example" src="images/128.png" />}
                >
                <Meta
                  title="xiaoniunai"
                  description="444"
                />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: '50%', marginLeft: 'auto', marginRight: 0, textAlign: 'center'}}
                  cover={<img alt="example" src="images/1128.png" />}
                >
                <Meta
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