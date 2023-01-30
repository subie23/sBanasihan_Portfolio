import React from 'react';
import { MDBFooter,  MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <span>
                <a rel="noreferrer" href='http://www.linkedin.com/in/sue-banasihan-004b43241/' target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="linkedin" size='2x'/>
                </a>
                <a rel="noreferrer" href='https://github.com/subie23' target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="github" size='2x'/>
                </a>
                <a rel="noreferrer" href='https://instagram.com/subie2328' target="_blank" className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" size='2x'/>
                </a>
                </span>
                <span className="px-4">© 2023 Copyright</span>
            </div>
        </MDBFooter>
    );
};

export default Footer;

