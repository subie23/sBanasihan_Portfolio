import React from 'react';
import { 
    MDBContainer, 
    MDBRow, 
    MDBCard, 
    MDBCol, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText,
    MDBCardLink, 
    MDBCardImage,
    MDBCardFooter
    } from 'mdb-react-ui-kit';

import card1Img from '../../images/'
import card2Img from '../../images/'
import card3Img from '../../images/'
import card4Img from '../../images/'
import card5Img from '../../images/TasteBuds.png'
import card6Img from '../../images/RobinGoodFoods.png'
import './Portfolio.css'

const Portfolio = () => {
    
    return (
        <MDBContainer fluid className="h-100 pb-4 bkgrd">
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card1Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Password-Magic</MDBCardTitle>
                        <MDBCardText>
                            
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/subie23/Password-Magic'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://subie23.github.io/Password-Magic/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card2Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Quiz_Me</MDBCardTitle>
                        <MDBCardText>
                            
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/subie23/Quiz_ME'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://subie23.github.io/Quiz_ME/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card3Img} />
                        <MDBCardBody>
                        <MDBCardTitle>One_Day_at_a_Time</MDBCardTitle>
                        <MDBCardText>
                            
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href=''>Repository link</MDBCardLink>
                        <MDBCardLink href=''>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card4Img} />
                        <MDBCardBody>
                        <MDBCardTitle>Weather-or-not-to-Bring-an-Umbrella</MDBCardTitle>
                        <MDBCardText>
                           
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/subie23/Weather-or-not-to-Bring-an-Umbrella'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://subie23.github.io/Weather-or-not-to-Bring-an-Umbrella/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card5Img} />
                        <MDBCardBody>
                        <MDBCardTitle>TasteBuds (Group Project)</MDBCardTitle>
                        <MDBCardText>
                           
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/subie23/TasteBuds'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://nicolas-kelly.github.io/TasteBuds/'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position="top" src={card6Img} />
                        <MDBCardBody>
                        <MDBCardTitle>RobinGoodFoods (Group Project)</MDBCardTitle>
                        <MDBCardText>
                          
                        </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                        <MDBCardLink href='https://github.com/subie23/RobinGoodFoods'>Repository link</MDBCardLink>
                        <MDBCardLink href='https://immense-woodland-28981.herokuapp.com/"'>Deployed app</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        )
};

export default Portfolio;