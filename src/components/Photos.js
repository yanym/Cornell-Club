import React, { Component } from "react";
// import PhotoGrid from "react-photo-feed";
import { Grid, Row, Col, Button, Thumbnail, Image } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

// import "react-photo-feed/library/style.css";

export default class photos extends Component {
    render() {
        const IMAGES =
        [{
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 500,
                caption: "After Rain (Jeshu John - designerspics.com)After Rain (Jeshu John - designerspics.com)After Rain (Jeshu John - designerspics.com)"
        },
        {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 500,
                // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
                caption: "Boats (Jeshu John - designerspicAfter Rain (Jeshu John - designerspics.com)After Rain (Jeshu John - designerspics.com)After Rain (Jeshu John - designerspics.com)s.com)"
        },
        
        {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 320,
                thumbnailHeight: 500,
                caption: "Boats (Jeshu John - designerspicAfter Rain (Jeshu John - designerspics.com)After Rain (Jeshu John - designerspics.com)After Rain (Jeshu John - designerspics.com)s.com)"
        }]

        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div>
                    <Row>
                        <Col xs={8} sm={4}>
                        <Image src="images/128.png"/>
                        </Col>
                        <Col xs={8} sm={4}>
                        <Image src="images/128.png" />
                        </Col>
                        <Col xs={8} sm={4}>
                        <Image src="images/128.png" />
                        </Col>
                    </Row>
                </div>
                <Gallery images={IMAGES}/>
            </div>





            // <Grid>
            // <Row>
            //     <Col xs={6} md={4}>
            //     <Thumbnail src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt="150x150" circle responsive>
            //         <h3>Thumbnail label</h3>
            //         <p>Description</p>
            //         {/* <p>
            //         <Button bsStyle="primary">Button</Button>
            //         &nbsp;
            //         <Button bsStyle="default">Button</Button>
            //         </p> */}
            //     </Thumbnail>
            //     </Col>
            //     <Col xs={6} md={4}>
            //     <Thumbnail src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt="150x150" circle responsive>
            //         <h3>Thumbnail label</h3>
            //         <p>Description</p>
            //         {/* <p>
            //         <Button bsStyle="primary">Button</Button>
            //         &nbsp;
            //         <Button bsStyle="default">Button</Button>
            //         </p> */}
            //     </Thumbnail>
            //     </Col>
            //     <Col xs={6} md={4}>
            //     <Thumbnail src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt="150x150" circle responsive>
            //         <h3>Thumbnail label</h3>
            //         <p>Description</p>
            //         {/* <p>
            //         <Button bsStyle="primary">Button</Button>
            //         &nbsp;
            //         <Button bsStyle="default">Button</Button>
            //         </p> */}
            //     </Thumbnail>
            //     </Col>
            // </Row>
            // </Grid>
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