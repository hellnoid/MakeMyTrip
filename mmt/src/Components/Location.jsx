import React from 'react';
import styled from "styled-components";


const Flex = styled.div`
    margin-top : 50px;
    display: flex;
    gap: 50px
`

const Main= styled.div`
    padding : 20px;  
    width:70%;
    justify-content: center;
    text-align: center;
    margin:auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`

const Img = styled.img`
    border-radius: 50%;
`    
const InsideFLex = styled.div`
    display: flex;
    gap :30px;
`
const Head = styled.h1`
font-size: 18px;
line-height: 18px;
`



export const Location= () => {
    return (
        <div>
            <Main>
                <Flex>
                    <InsideFLex>
                        <div>
                            <Img src="http://promos.makemytrip.com/images/50x50-Other-23052019.png" alt="" />
                        </div>
                        <div>
                            <h1>Chennai Flights</h1>
                            <p>Via - Delhi, Mumbai, Coimbatore, Madurai</p>
                        </div>
                    </InsideFLex>
                    <InsideFLex>
                        <div>
                            <Img src="https://promos.makemytrip.com/store/GoaDT.JPG" alt="" />
                        </div>
                        <div>
                            <h1>Goa Flights</h1>
                            <p>Via - Delhi , Mumbai, Bangalore, Ahmedabad</p>
                        </div>
                    </InsideFLex>
                    <InsideFLex>
                        <div>
                            <Img src="https://promos.makemytrip.com/store/MumbaiDT.JPG" alt="" />
                        </div>
                        <div>
                            <h1>Mumbai Flights</h1>
                            <p>Via - Delhi, Bangalore, Chennai, Ahmedabad</p>
                        </div>
                    </InsideFLex>
                </Flex>
                <Flex>
                    <InsideFLex>
                        <div>
                            <Img src="http://promos.makemytrip.com/images/50x50-Ooty-23052019.png" alt="" />
                        </div>
                       <div>
                            <h1>Hyderabad Flights</h1>
                            <p>Via - Chennai, Mumbai, Bangalore, Delhi</p>
                       </div>
                    </InsideFLex>
                    <InsideFLex>
                        <div>
                            <Img src="https://promos.makemytrip.com/store/DelhiDT.JPG" alt="" />
                        </div>
                        <div>
                            <h1>Delhi Flights</h1>
                            <p>Via - Mumbai, Pune, Bangalore, Chennai</p>
                        </div>
                    </InsideFLex>
                    <InsideFLex>
                        <div>
                            <Img src="https://promos.makemytrip.com/store/PuneDT.JPG" alt="" />
                        </div>
                        <div>
                            <h1>Pune Flights</h1>
                            <p>Via - Delhi, Bangalore, Chennai, Ahmedabad</p>
                        </div>
                    </InsideFLex>
                </Flex>
                <Flex>
                    <InsideFLex>
                        <div>
                            <Img src="https://promos.makemytrip.com/store/SingaporeDT.JPG" alt="" />
                        </div>
                        <div>
                            <h1>Kolkata Flights</h1>
                            <p>Via - Delhi, Mumbai, Bangalore, Pune</p>
                        </div>
                    </InsideFLex>
                    <InsideFLex>
                        <div>
                            <Img src="https://promos.makemytrip.com/store/BangaloreDT.JPG" alt="" />
                        </div>
                        <div>
                            <h1>Bangalore Flights</h1>
                            <p>Via - Delhi, Pune, Mumbai, Kolkata</p>
                        </div>
                    </InsideFLex>
                    <InsideFLex>
                        <div>
                            <Img src="https://promos.makemytrip.com/store/JaipurDT.JPG" alt="" />
                        </div>
                        <div>
                            <h1>Jaipur Flights</h1>
                            <p>Via - Mumbai, Delhi, Pune, Bangalore</p>
                        </div>
                    </InsideFLex>
                </Flex>
            </Main>
        </div>
    )
}