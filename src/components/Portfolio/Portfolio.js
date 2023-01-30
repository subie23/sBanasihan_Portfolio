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

import card1Img from '../../images/PasswordMagic.png'
import card2Img from '../../images/QuizME.png'
import card3Img from '../../images/OneDay.png'
import card4Img from '../../images/Weather.png'
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
                        JavaScript was used to create the functions of a random password generator.
                        It includes prompts to choose the password length between 8-128 characters, then prompts to choose what types of characters to include from lowercase letters, uppercase letters, numbers and special characters.
                        A random password is generated based on the information gathered from the prompts  
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
                        This is a timed JavaScript quiz. 
                        40 seconds to answer the questions. 
                        Correct answers will earn 5 points and wrong answers will deduct 2 points (-2) from your score and 3 seconds (-3) off of your time. 
                        The game is over when the time is up or all the questions have been answered.  
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
                        This is a simple workday scheduler that allows the user to input items into the schedule (9am-5pm) that can be saved and seen even when the page is refreshed.    
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
                        This app allows the user to search for a city to get that city's 5 day weather forecast with the temperature, wind speed, and the humidity. 
                        When the user searches for a different city, the previous city is added to the search history.  
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
                        TasteBuds lets you choose any ingredients you'd like to include, select the type of cuisine that you'd like to try, and filter dietary options in order to retrieve a cache of new recipes thst matches the ingredients, cuisine type, and dietary options chosen.    
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
                        This is an e-commerce application.
                        All of the featured products are made with Whole Ingredients, Organic and Non-GMO. 
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