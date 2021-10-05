import React, { useState, useEffect } from 'react';

const ShowUser = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default ShowUser;