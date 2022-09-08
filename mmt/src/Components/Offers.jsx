import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  padding: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  gap: 30px;
  :hover {
    cursor: pointer;
  }
`;

const Of = styled.p`
  font-size: 42px;
  display: flex;
  justify-content: flex-start;
  margin-left:50px;
`;

const Mid = styled.div`
  width:70%;
  justify-content: center;
  text-align: center;
  margin:auto;
  // border: 1px solid red;
`
const Main = styled.div`
  // width: 70%;
  // justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`

const Imgr = styled.img`
  border-radius: 7px
  width: 100%;
`
const Button = styled.button`
  color: var(--color-primary,#008cff);
  font-size: 14px;
  line-height: 14px;
`
const Par = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  color: #a2a2a2;
`
const MainTag = styled.h1`
  color: #000000;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 22px !important;
`



export const Offers = () => {
  return (
    <Mid>
      <Of>Offers</Of>
      <Main>
      <Flex>
        <Flex>
          <div>
            <Imgr
              src="https://promos.makemytrip.com/notification/xhdpi//american-airline-116x116-18072022.jpg"
              height="134px"
              alt=""
              width="134px"
              loading="lazy"
            />
          </div>
          <div>
            <Par>INTL FLIGHTS</Par>
            <MainTag>INTRODUCED: New Direct Flights</MainTag>
            <Par>to New York by American Airlines!</Par>
            <Button>BOOK NOW</Button>
          </div>
        </Flex>
        <Flex>
          <div>
            <Imgr
              src="https://promos.makemytrip.com/notification/xhdpi//DurgaPuja_DT_Banner_2Sep_new.jpg"
              height="134px"
              alt=""
              width="134px"
              loading="lazy"
            />
          </div>
          <div>
            <Par>HOLIDAYS</Par>
            <MainTag>For Your Trips During Durga Puja Break:</MainTag>
            <Par>FLAT 25% OFF on holiday packages.</Par>
            <Button>BOOK NOW</Button>
          </div>
        </Flex>
      </Flex>
      <Flex>
        <Flex>
          <div>
            <Imgr
              src="https://promos.makemytrip.com/notification/xhdpi//116X116-Taj-Generic-14022022.jpg"
              height="134px"
              alt=""
              width="134px"
              loading="lazy"
            />
          </div>
          <div>
            <Par>DOM HOTELS</Par>
            <MainTag>Save Up to 25%* on Your Booking @Taj Hotels</MainTag>
            <Par>& enjoy memorable stays.</Par>
            <Button>BOOK NOW</Button>
          </div>
        </Flex>
        <Flex>
          <div>
            <Imgr
              src="https://promos.makemytrip.com/notification/xhdpi//spicejet-116x116-05092022.jpg"
              height="134px"
              alt=""
              width="134px"
              loading="lazy"
            />
          </div>
          <div>
            <Par>DOM FLIGHTS</Par>
            <MainTag>FASTEN YOUR SEAT BELTS: New Flights by SpiceJet</MainTag>
            <Par>NOW flying between Jodhpur, Bengaluru and Kolkata!</Par>
            <Button>BOOK NOW</Button>
          </div>
        </Flex>
      </Flex>
      </Main>
    </Mid>
  );
};
