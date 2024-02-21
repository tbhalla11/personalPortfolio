import React from "react";
import styled from "styled-components";
import {Bio} from "../../data/constant";
import Typewriter from "typewriter-effect";
import headshot from "../../images/headshot.jpeg";
import PersonAnimation from "../PersonAnimation";


export const PersonContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 100%);
`;

export const PersonBackdrop = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const PersonInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const InnerLeft = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  cursor: default;
`;

export const InnerRight = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-family: "Arial";
  font-weight: 800;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};  
  line-height: 68px;
  
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
    
  }

  &:hover {
    transition: font-weight(800);
    transform: scale(1.05);
    color: #c730f5;
  }
  cursor: default;
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  cursor: pointer;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 99};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({theme}) => theme.black};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsl(286, 91%, 57%) 0%, hsl(235, 74%, 46%) 100%);
  background: -moz-linear-gradient(225deg, hsl(286, 91%, 57%) 0%, hsl(235, 74%, 46%) 100%);
  background: -webkit-linear-gradient(225deg, hsl(286, 91%, 57%) 0%, hsl(235, 74%, 46%) 100%);
  box-shadow: 20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #2250c9;
    filter: brightness(2);
    font-weight: 700;
  }


  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Person = () =>{
    return (<div id="about">
                <PersonContainer>
                    <PersonBackdrop>
                        <PersonAnimation></PersonAnimation>
                    </PersonBackdrop>
                    <PersonInnerContainer>
                        <InnerLeft>
                            <Title>
                                Hey! I am <br/> {Bio.name}
                            </Title>
                            <TextLoop>
                                I am a ...
                                <Span>
                                    <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    />
                                </Span>
                            </TextLoop>
                            <Subtitle>{Bio.description}</Subtitle>
                            <ResumeButton href={Bio.resume} target="display">Resume</ResumeButton>
                        </InnerLeft>
                        <InnerRight>
                            <Img src={headshot} alt="image of me" />
                        </InnerRight>
                    </PersonInnerContainer>
                    
                </PersonContainer>
            </div>


    )
}

export default Person;