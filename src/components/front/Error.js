import React from 'react';
import '../Movie.css';
import { Row } from 'react-bootstrap';

const Error = () => {
    return (
        <Row className='container-fluid'>
            <div className='error_section col-12'>
                <img className='centeredImage' src='http://pngimg.com/uploads/popcorn/popcorn_PNG69.png' alt='popcorn'/>
                <p className=' centeredError'>
                <strong>Sorry</strong><br/> The specified path does not exist. <br/><strong>For now.</strong>
                </p>
            </div>
        </Row>
    )
}

export default Error;