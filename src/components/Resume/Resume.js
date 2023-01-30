import React from 'react';
import { 
    MDBContainer, 
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle, 
    MDBCardText,
    MDBCardFooter,
    MDBBtn
 } from 'mdb-react-ui-kit';
 import resumePic from '../../images/sBanasihan-resume.png';

const Resume = () => {
    const pdfUrl = 'https://docs.google.com/document/d/1fuPq0ztuUAqYHgF6UF-6z2tf_W7vH4ZJ/edit?usp=sharing&ouid=113464026129545247487&rtpof=true&sd=true'
    return (
        <MDBContainer fluid className="vh-100">
            <div className="d-flex justify-content-center">
            <MDBCard className="w-25">
                <MDBCardImage className="img-thumbnail" position="top" src={resumePic} />
                <MDBCardBody>
                <MDBCardTitle>Download Resume:</MDBCardTitle>
                <MDBCardText>Press the button below to download a copy of my resume.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="text-center">
                <MDBBtn href={pdfUrl}>DOWNLOAD</MDBBtn>
                </MDBCardFooter>
            </MDBCard>
            </div>
        </MDBContainer>
    )
};

export default Resume;