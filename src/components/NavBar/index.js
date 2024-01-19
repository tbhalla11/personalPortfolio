import React from "react";
import styled from "styled-components";
import {Link as LinkR} from "react-router-dom"
import { DiCssdeck } from "react-icons/di"
import { GrCloudComputer } from "react-icons/gr";
import {FaBars} from "react-icons/fa";
import {darkTheme as theme} from "../../utilities/theme";
import {Bio} from "../../data/constant";

const Nav = styled.div`
  background-color: ${({theme}) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px){
    transition: 0.8s all ease-in-out ;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 22px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px){
    padding: 0px 0px;
  }
`

const PhoneIcon = styled.div`
  display: none;
  @media screen and (max-width: 640px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({theme}) => theme.text_primary};
  }
`


export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
  :hover {
    color: mediumpurple;
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px){
    display: none;
  }
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  position: absolute;
  padding: 12px 40px 24px 40px;
  top: 80;
  right: 0;
  width: 100%;
  background: ${({theme})=> theme.card_light+99};
  transition: all 0.3s ease-in-out;
  tranform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  z-index: ${({open}) => open ? "1" : "0"};
  opacity: ${({open}) => open ? "1" : "-1"};
`
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`
export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

const GitHubButton = styled.a`
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500; 
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Span = styled.div`
  padding: 0 6px;
  font-weight: bold;
  font-size: 18px;
`


const NavBar = () =>{
    const [open, setOpen] = React.useState(false);
    return (
    <Nav>
        <Container>
            <NavLogo to="/">
                <a style ={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    marginBottom: "20;",
                    cursor: "pointer",
                }}>
                    <GrCloudComputer size="3rem" /> <Span>Portfolio</Span>
                </a>
            </NavLogo>
            <PhoneIcon>
                <FaBars onClick={() =>{
                setOpen(!open)
            }}/>
            </PhoneIcon>
            <NavItems>
                <NavLinks href="#about">Home</NavLinks>
                <NavLinks href="#skills">Skills</NavLinks>
                <NavLinks href="#experience">Experience</NavLinks>
                <NavLinks href="#education">Education</NavLinks>
            </NavItems>
            <ButtonContainer>
                <GitHubButton>Github Profile</GitHubButton>
            </ButtonContainer>
        </Container>
        {
            open &&
            <MobileMenu open={open}>
                <MobileLink href="#about" onClick={() => {
                    setOpen(!open)
                }}>About</MobileLink>
                <MobileLink href='#skills' onClick={() => {
                    setOpen(!open)
                }}>Skills</MobileLink>
                <MobileLink href='#experience' onClick={() => {
                    setOpen(!open)
                }}>Experience</MobileLink>
                <MobileLink href='#education' onClick={() => {
                    setOpen(!open)
                }}>Education</MobileLink>
                <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
            </MobileMenu>
        }
    </Nav>
    )}

export default NavBar;