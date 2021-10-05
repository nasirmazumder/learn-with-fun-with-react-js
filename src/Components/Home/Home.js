// import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap';
import HomeData from './HomeData';
import "./Home.css"
import User from '../Users/User';
const Home = () => {
    const [courses, setCourses] = useState([])

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])

    useEffect(() => {
        fetch('./user.json')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])
    return (
        <div>
            <section id='background' className='container'>

                <Row>
                    <Col sm={8} xs={6}>
                        <h1 className="fw-bolder mt-5 text-primary">Teach the World Online</h1>
                        <h3>Find the right instructor for you. Choose from many topics, skill levels, and languages. Shop thousands of high-quality on-demand online courses.</h3>
                        <br />
                        <br />
                        <Button className="mb-5" variant="primary" size="lg" active>
                            Getting Started
                        </Button>
                    </Col>
                    <Col sm={4} xs={6}>

                    </Col>
                </Row>

            </section>
            <div className="course-heading">
                <h1>Find your Best Online Course</h1>
                <h3>Students Satisfaction is our primary Goal</h3>
            </div>
            <section className="container course">
                <Row xs={1} md={4} lg={4} className="g-2 border">
                    {
                        courses.map(course => <HomeData
                            key={course.courseNo}
                            course={course}
                        ></HomeData>)
                    }
                </Row>
            </section>
            <section className='container'>
                <div >
                    <h1 className="instructors-heading">Our Honorable Instructor</h1>
                    <h5>Whether you’re looking to start a new career or change your current one, Professional Certificates on Coursera help you become job ready. Learn at your own pace from top companies and universities, apply your new skills to hands-on projects that showcase your expertise to potential employers, and earn a career credential to kickstart your new career.</h5>
                </div>
                <Row xs={1} md={2} lg={3} className="g-2 card-container mt-5">
                    {
                        users.map(useer => <User
                            key={useer.name}
                            useer={useer}
                        ></User>)
                    }
                </Row>
            </section>


        </div >
    );
};

export default Home;