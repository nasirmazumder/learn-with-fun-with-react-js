import React from 'react';
import frontImg from '../../img/About-us-min.jpg'
import img1 from '../../img/unnamed (1).jpg'
import img2 from '../../img/image2.jpg'
import img3 from '../../img/image3.jpg'
import './About .css'

const About = () => {
    return (
        <div className="container">
            <div>
                <img src={frontImg} alt="" id="about-img" />
            </div>
            <div className="row mt-5 p-3">
                <div className="col">
                    <img src={img1} alt="" id="img-1" />
                </div>
                <div className="col mt-3">
                    <h3>Certificate In Information Technology Application</h3>
                    <p>• Fundamental, Introduction to OS (Windows 98/XP/ Vista/7, DOS)
                        • Microsoft Office: 2003-2010 (Word, Excel, Power Point, Access)
                        • Internet (Web Browsing, Email)
                        • Bengali English Typing</p>
                    <p>• Computer Fundamentals
                        • MS-DOS
                        • Windows
                        • MS-Office 2003-2010 (Word, Excel, PowerPoint)
                        • Internet (Web Browsing, Email)</p>
                </div>

            </div>

            <div className="row mt-5 p-3">
                <div className="col mt-5">
                    <h3>Certificate In Information Technology Application</h3>
                    <p>• Fundamental, Introduction to OS (Windows 98/XP/ Vista/7, DOS)
                        • Microsoft Office: 2003-2010 (Word, Excel, Power Point, Access)
                        • Internet (Web Browsing, Email)
                        • Bengali English Typing</p>
                    <p>• Computer Fundamentals
                        • MS-DOS
                        • Windows
                        • MS-Office 2003-2010 (Word, Excel, PowerPoint)
                        • Internet (Web Browsing, Email)</p>
                </div>
                <div className="col mt-3">
                    <img src={img2} alt="" id="about-us-img" />

                </div>

            </div>
            <div className="row mt-5 p-3">
                <div className="col">
                    <img src={img3} alt="" id="img-1" />
                </div>
                <div className="col mt-3">
                    <h3>The Best Courses for Learning How To Build Websites</h3>
                    <p>Depending on your needs, building a website can be incredibly simple or tremendously challenging. We've curated a list of online video-based courses from Udemy and LinkedIn Learning that can give you the tools and knowledge to master the craft.</p>
                    <p>So, you want to build a website. Congratulations! You've joined millions of people who have also decided to create a business, or just a casual online destination, on the world wide web.</p>
                </div>

            </div>
        </div>
    );
};

export default About;