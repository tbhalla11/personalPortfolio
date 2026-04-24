import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constant";
import PersonAnimation from "../PersonAnimation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
  @media (max-width: 960px) {
    padding: 0px;
  }
  background: ${({ theme }) => theme.card_light};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
  margin-top: 30px;
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #306ee8;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: rgba(23, 92, 230, 0.35) 0px 8px 32px;
  }
`;

const ProjectTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #4bdc6b;
`;

const Tagline = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
`;

const Description = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-top: 8px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 12px;
  background: rgba(133, 76, 230, 0.15);
  color: ${({ theme }) => theme.text_primary};
`;

const Links = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const LinkButton = styled.a`
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const Backdrop = styled.div`
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

const Projects = () => {
    return (
        <Container id="projects">
            <Backdrop>
                <PersonAnimation />
            </Backdrop>
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    Side projects and applied work — the shape of the systems I like to build.
                </Desc>
                <Grid>
                    {projects.map((project) => (
                        <Card key={project.id}>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <Tagline>{project.tagline}</Tagline>
                            <Date>{project.date}</Date>
                            <Description>{project.description}</Description>
                            <Tags>
                                {project.tags.map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </Tags>
                            <Links>
                                {project.github && (
                                    <LinkButton href={project.github} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </LinkButton>
                                )}
                                {project.demo && (
                                    <LinkButton href={project.demo} target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                    </LinkButton>
                                )}
                            </Links>
                        </Card>
                    ))}
                </Grid>
            </Wrapper>
        </Container>
    );
};

export default Projects;