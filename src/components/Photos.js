import React, { Component } from "react";
import PhotoGrid from "react-photo-feed";
import { Grid, Row, Col, Button, Thumbnail} from 'react-bootstrap';

// import "react-photo-feed/library/style.css";

export default class photos extends Component {
    render() {
        return (
            <Grid>
            <Row>
                <Col xs={6} md={4}>
                <Thumbnail src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>
                    &nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>
                    &nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>
                    &nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
                </Col>
            </Row>
            </Grid>
        );
    }
    // render() {
    //     const P = [
    //         {
    //             id : 1, src : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_n.jpg",
    //             bigSrc : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_b.jpg"
    //         },
    //         {
    //             id : 2, src : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_n.jpg",
    //             bigSrc : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_b.jpg"
    //         },
    //         {
    //             id : 3, src : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_n.jpg",
    //             bigSrc : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_b.jpg"
    //         },
    //         {
    //             id : 4, src : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_n.jpg",
    //             bigSrc : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_b.jpg"
    //         },
    //         {
    //             id : 5, src : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_n.jpg",
    //             bigSrc : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_b.jpg"
    //         },
    //         {
    //             id : 6, src : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_n.jpg",
    //             bigSrc : "https://farm5.staticflickr.com/4240/35527849422_25a0a67df6_b.jpg"
    //         },
    //         {
    //             id : 7, src : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_n.jpg",
    //             bigSrc : "https://farm5.staticflickr.com/4077/34824083444_f5f050e31c_b.jpg"
    //         }
    //     ];
    //     return (
    //         <div>
    //             <PhotoGrid columns={3} photos={P} />
    //         </div>
    //     );
    // }
}