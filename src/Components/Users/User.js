import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';


const User = (props) => {
    console.log(props.useer.name)
    const { name, qualifiction, imgUrl, students, rating } = props.useer;
    return (
        <div>
            <Col>
                <Card className="teacher-card">
                    <div >
                        <Card.Img variant="top" src={imgUrl} className='teacher-img' />
                    </div>
                    <Card.Body>
                        <h3 >{name}</h3>
                        <h5>{qualifiction}</h5>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star empty-field"
                            fullSymbol="fas fa-star filled"
                            readonly /> <span>{rating}</span>
                        <h4 >Students:{students}</h4>

                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default User;