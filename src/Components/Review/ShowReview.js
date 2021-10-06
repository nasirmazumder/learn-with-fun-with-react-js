
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';

const ShowReview = (props) => {
    const { id, name, email, body, rating } = props.comment;
    return (
        <div className='container overflow'>

            <Col>
                <Card className="course-card">

                    <Card.Body>
                        <h3 className="course-title">{name},</h3>
                        <h5>Id:{id}</h5>
                        <h5>{email}</h5>
                        <Card.Text>
                            {body}
                        </Card.Text>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star empty-field"
                            fullSymbol="fas fa-star filled"
                            readonly /> <span>{rating}</span>
                        <Button className="mb-5" variant="primary" size="md" active>
                            View Details
                        </Button>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default ShowReview;