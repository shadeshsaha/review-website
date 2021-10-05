import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-text">
                            <li>Home</li>
                            <li>About</li>
                            <li>Courses</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="text-white">Address: 8th floor, Plot-02, Amtoli, Bir Uttam Ak Khandaker Rd, Dhaka 1212</p>
                        <p>Mail: support@online.course.academy</p>
                        <p>Phone: +8802546011 | Mobile: +8801500000008</p>
                    </div>
                    <div className="col">
                        <h3>Download Our App</h3>
                    </div>
                </div>
                <p className="mt-4">&copy;{new Date().getFullYear()} All Right Reserved By Online Course Academy</p>
            </div>
        </div>
    );
};

export default Footer;