import React, { Component } from "react";
// import PhotoGrid from "react-photo-feed";
import { Grid, Row, Col } from 'react-bootstrap';

// import "react-photo-feed/library/style.css";

export default class photos extends Component {
    render() {
        return (
            <div style={{background: '#ebeeee', display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                           12323123
                        </Col>
                        <Col xs={6} md={4}>
                            3123123123
                        </Col>
                        <Col xs={6} md={4}>
                            312312312
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}