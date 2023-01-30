import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import beach from '../../images/naturalbridges.jpg'

const Home = () => {
    return (
        <MDBContainer fluid className="text-center vh-100 bkgrd">
            <div className="pt-2 vh-100">
                <img src={ beach } className='img-fluid rounded-pill shadow-4-strong' alt='beach with rock formation' />
                <p className=" my-0 py-0 text-dark fs-1">Sue Banasihan</p>
            </div>
            
        </MDBContainer>
    )
};

export default Home;