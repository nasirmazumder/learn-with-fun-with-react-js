import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ShowCourses = (props) => {
    console.log(props.service.title)
    const { title, imgUrl } = props.service;
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <div >
                        <Card.Img variant="top" src={imgUrl} className='service-img' />
                    </div>
                    <Card.Body>
                        <h3 >{title}</h3>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ShowCourses;
