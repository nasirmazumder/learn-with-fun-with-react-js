import React, { useState, useEffect } from 'react';
import './Courses.css'
import firstImg from '../../img/our-services (2).jpg'
import ShowCourses from './ShowCourses';
import { Row } from 'react-bootstrap';
const Courses = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container">
            <div className=" w-100">
                <img src={firstImg} alt="" id='service-img' />
            </div>
            <Row xs={1} md={2} lg={3} className="g-2 card-container mt-5">
                {
                    services.map(service => <ShowCourses
                        key={service.title}
                        service={service}
                    ></ShowCourses>)
                }
            </Row>
        </div>
    );
};

export default Courses;
