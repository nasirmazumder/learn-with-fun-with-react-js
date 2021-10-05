import React from 'react';
import './Courses.css'
import firstImg from '../../img/our-services (2).jpg'
const Courses = () => {
    return (
        <div>
            <div className="container w-100">
                <img src={firstImg} alt="" id='service-img'/>
            </div>
        </div>
    );
};

export default Courses;