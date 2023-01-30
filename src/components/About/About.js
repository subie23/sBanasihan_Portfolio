import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import './About.css'
import sue from '../../images/sue.jpg';

const About = () => {
    return (
        <MDBContainer fluid className="vh-100 bkgrd">
            <div className="d-flex justify-content-center flex-column flex-sm-row">

                <MDBCard className="order-sm-2 card-picture my-4 mx-auto mx-sm-0">
                    <MDBCardImage variant="top" className="img-fluid rounded" src={sue} />
                </MDBCard>
                
                <MDBCard border="dark" className="order-sm-1 my-4 card-text mx-auto mx-sm-0">
                    <MDBCardBody>
                    <MDBCardTitle>About Sue</MDBCardTitle>
                    <MDBCardText>
                    A contemporary Full Stack Developer with over 23 years of Management experience which was used to improve business profitability while enhancing the customer's experience and lowering employee turnover rate by building relationships to enhance job satisfaction.
                    Proficient in both front and back end programming languages.
                    A leader and consultant with a proven track record who is able to guide projects from start to finish with significant results.
                    </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </MDBContainer>
    )
};

export default About;