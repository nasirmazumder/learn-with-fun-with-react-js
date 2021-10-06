import React, { useEffect, useState } from 'react';

import './Review.css'
import ShowReview from './ShowReview';
import { Row } from 'react-bootstrap';
import headerImg from '../../img/Customer-Reviews.jpg'

const Review = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('./comments.json')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div className="container ">
            <h1 className="text-primary text-center">Leave a Comment and give us Your Opinion</h1>
            <div>
                <img src={headerImg} alt="" id="review-img" />
            </div>
            <div>
                <Row xs={2} md={3} lg={4} className="g-3 mt-5">
                    {
                        comments.map(comment => <ShowReview

                            key={comment.id}
                            comment={comment}
                        ></ShowReview>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Review;