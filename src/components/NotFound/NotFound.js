import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundIMG from '../../images/notFoundIMG.svg'
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="justify-content-center">
                <img src={NotFoundIMG} alt="" className="img-fluid"/>
                <h2>The Page Your are Finding is No longer available on the server</h2>
                <Link to="/">
                <button className="btn-brand">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;