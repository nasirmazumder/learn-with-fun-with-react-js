import React, { useState, useEffect } from 'react';
import './Courses.css'
import firstImg from '../../img/our-services (2).jpg'
const Courses = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="container w-100">
                <img src={firstImg} alt="" id='service-img' />
            </div>
            {
                services.map(service => console.log(service))
            }
        </div>
    );
};

export default Courses;