import React from 'react';
import imageFooter from '../../img/footerImg.jpg'
import './Footer.css'
const Footer = () => {
    return (
        <div id="footer">
            <div className="row">
                <div className="col-5">
                    <img src={imageFooter} alt="" />
                </div>
                <div className='col-3 ' id="footer-address">
                    <h4>Generate the Promo Code</h4>
                    <h4><address>
                        Address; Kingdom ,Road 2124, Bldg <br /> No. 1877,
                        Block 321, Bangladesh 1211. <br />
                        Email: nasirkhan3438@gmail.com <br />

                        Mob: +9524454222475



                    </address></h4>
                </div>
                <div className='col-4' id="footer-li" >

                    <li>Earth Charter Introductory Course</li>
                    <li>Online Certificate on Education for Sustainable Development (ESD)</li>
                    <li>Leadership, Sustainability  Ethics (LSE) Online Course September 2021</li>
                    <li>Introduction to Systems Thinking 2021</li>
                    <li>Business and Ethical Leadership for Sustainability Online Course</li>
                    <li>Spoken English with good Grammer</li>
                    <li>Web designing and structure</li>
                    <li>Full stack Web development</li>
                </div>
            </div>
        </div>
    );
};

export default Footer;