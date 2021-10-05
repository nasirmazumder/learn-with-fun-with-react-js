// import Button from '@restart/ui/esm/Button';

import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';


const HomeData = (props) => {
    // console.log(props.course.title)
    const { title, fees, imgUrl, rating, Description, subTitle } = props.course;
    return (
        <div>
            <div className="container">



                <Col>
                    <Card className="course-card">
                        <Card.Img variant="top" src={imgUrl} />
                        <Card.Body>
                            <h3 className="course-title">{title}</h3>
                            <h5>{subTitle}</h5>
                            <Card.Text>
                                {Description}
                            </Card.Text>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star empty-field"
                                fullSymbol="fas fa-star filled"
                                readonly /> <span>{rating}</span>
                            <h4 className="price">Price: ${fees}</h4>
                            <Button className="mb-5" variant="primary" size="md" active>
                                <i class="fas fa-cart-plus"></i> Add to Cart
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>



            </div>
        </div>
    );
};

export default HomeData;
