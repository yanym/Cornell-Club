import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;
export default class photos extends Component {
    render() {
        return (
          <div className="row" style={{ color: '#ebeeee' }}>
            <div className="twelve columns">
              <Row>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: '95%' }}
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
                    style={{ width: '95%' }}
                    cover={<img alt="example" src="images/128.png" />}
                  >
                    <Meta
                      title="nb"
                      description="222"
                    />
                  </Card>
                </Col>
              </Row>
              <div></div>
              <Row>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: '95%' }}
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
                    style={{ width: '95%' }}
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
                    style={{ width: '95%' }}
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
        )
    }
}