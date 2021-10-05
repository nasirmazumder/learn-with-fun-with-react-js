import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const User = (props) => {
    console.log(props.useer.name)
    const { name, qualifiction, imgUrl } = props.useer;
    return (
        <div>

            {/* <Col xs={6} md={4}> */}
            <div className="row">
                <div className="cols col-lg-4">
                    <Image src={imgUrl} className="img-ins" />
                </div>
                <div className="cols col-lg-8">

                    <h4>{name}</h4>
                    <h5>{qualifiction}</h5>
                </div>
            </div>
            {/* </Col> */}

        </div>
    );
};

export default User;