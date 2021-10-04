// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

import './Home.css'
const Home = () => {


    return (
        <div>

            <section className="container">
                <div>
                    <Row>
                        <Col sm={8} xs={6}>
                            <h1 className="fw-bolder mt-5 text-primary">Teach the World Online</h1>
                            <h3>Find the right instructor for you. Choose from many topics, skill levels, and languages. Shop thousands of high-quality on-demand online courses. Start learning today. Expert Instructors. Courses in 60+ Languages. 30-Day Money Guarantee. Over 183,000 Courses.</h3>
                            <br />
                            <br />
                            <Button className="mb-5" variant="primary" size="lg" active>
                                Getting Started
                            </Button>
                        </Col>
                        <Col sm={4} xs={6}>

                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>
            </section>



        </div >
    );
};

export default Home;