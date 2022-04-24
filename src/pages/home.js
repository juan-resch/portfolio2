import styled from "styled-components";
import { codeBackground, logoRaion } from "../assets/images";
import { BsChevronCompactDown } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
  SiSequelize,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";
import { keyframes } from "styled-components";
import Bottom from "../components/bottom";

export const Home = (props) => {
  return (
    <Container>
      <ImageBackground>
        <div className="hello">
          <div className="title">
            <span className="zoom" style={{ cursor: "default" }}>
              Hello, I'm Juan and I'm a <br />
              Javascript software developer
            </span>
          </div>
          <a className="seemore" href="#about">
            <span>about me</span>
            <BsChevronCompactDown color="#fff" size={50} />
          </a>
        </div>
      </ImageBackground>
      <About id="about">
        <div className="aboutme">
          <div className="pic">
            <span>Some of my skills 👨‍💻</span>
          </div>
          <div className="skillsWrapper">
            <div className="skills">
              <span className="type">Front-End</span>
              <div className="skill">
                <SiNextdotjs size={50} color="#222" className="icon" />
                <div>
                  <span>Next.js</span>
                  <progress value={3.7} max={5} />
                </div>
              </div>
              <div className="skill">
                <FaReact size={50} color="#05a5d1" className="icon" />
                <div>
                  <span>React.js / React Native</span>
                  <progress value={4} max={5} />
                </div>
              </div>
              <div className="skill">
                <SiTailwindcss size={50} color="#07adca" className="icon" />
                <div>
                  <span>TailWind</span>
                  <progress value={4} max={5} />
                </div>
              </div>
              <div className="skill">
                <FaCss3 size={50} color="#2449d8" className="icon" />
                <div>
                  <span>Css</span>
                  <progress value={3.5} max={5} />
                </div>
              </div>
              <div className="skill">
                <FaHtml5 size={50} color="#f16529" className="icon" />
                <div>
                  <span>Html</span>
                  <progress value={3.8} max={5} />
                </div>
              </div>
            </div>
            <div className="skills">
              <span className="type">Back-End</span>
              <div className="skill">
                <SiExpress size={50} color="#222" className="icon" />
                <div>
                  <span>Express.js</span>
                  <progress value={4.2} max={5} />
                </div>
              </div>
              <div className="skill">
                <SiPrisma size={50} color="#222" className="icon" />
                <div>
                  <span>Prisma ORM</span>
                  <progress value={4.2} max={5} />
                </div>
              </div>
              <div className="skill">
                <SiSequelize size={50} color="#2c3e62" className="icon" />
                <div>
                  <span>Sequelize ORM</span>
                  <progress value={3.8} max={5} />
                </div>
              </div>
              <div className="skill">
                <SiPostgresql size={50} color="#336791" className="icon" />
                <div>
                  <span>PostgreSQL</span>
                  <progress value={3.3} max={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </About>
      <Raion>
        <div className="wrapper">
          <h1>Currently working at Raion software house</h1>
          <div className="social">
            <img src={logoRaion} />
            <div className="socialMediaWrapper">
              <a>
                <SiInstagram color="#222" size={50} />
                Raion IG
              </a>
              <a>
                <SiLinkedin color="#222" size={50} />
                Linkedin
              </a>
              <a style={{ textAlign: "center" }}>
                <CgWebsite color="#222" size={50} />
                Raion Site
                <br />
                (in dev)
              </a>
            </div>
          </div>
        </div>
      </Raion>
      <Bottom />
    </Container>
  );
};

const ease = keyframes`
  0%, 100% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(6px);
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ImageBackground = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${codeBackground});
  background-repeat: no-repeat;
  background-size: cover;

  .hello {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: #5a3dba70;

    .title {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .zoom {
        color: #fff;
        font-weight: 700;
        font-size: 6rem;
        text-align: center;
        transition: all 300ms;

        padding: 0 10px;

        @media (max-width: 768px) {
          font-size: 4.5rem;
        }
        @media (min-width: 768px) {
          :hover {
            font-size: 6.2rem;
          }
        }
      }
    }

    .seemore {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      cursor: pointer;
      transition: 300ms;

      :hover {
        transform: translateY(-10px);
      }

      span {
        background-color: #00000070;
        padding: 10px 30px;
        border-radius: 6px;
        color: #fff;
        font-weight: 400;
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
      }

      svg {
        animation: ${ease} 2s ease-in-out infinite;
      }
      @media (max-width: 768px) {
        margin-bottom: 60px;
      }
    }
  }
`;

const About = styled.section`
  background-color: #111;

  width: 100vw;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  .skillsWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .aboutme {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      175deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(180, 180, 180, 1) 100%
    );
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 80%;
    padding: 30px 20px;

    .pic {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      span {
        margin: 10px 0;
        font-size: 3rem;
        @media (max-width: 768px) {
          font-size: 2.5rem;
        }
      }
    }

    .skills {
      flex-direction: column;
      margin: 30px;
      font-size: 2rem;
      max-width: 50%;

      .type {
        margin-left: 10px;
        font-size: 1.8rem;
        font-weight: 700;
      }

      .skill {
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 10px;

        div {
          display: flex;
          flex-direction: column;
          margin-left: 30px;

          progress {
            margin-top: 5px;
          }
        }
      }
      @media (max-width: 768px) {
        font-size: 1.5rem;
        margin: 0px;
        margin-top: 20px;
        max-width: 100%;
      }
    }
  }
`;

const Raion = styled.section`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(242, 242, 242, 1) 28%,
    rgba(180, 180, 180, 1) 100%
  );

  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .wrapper {
    background-color: #fff;
    box-shadow: #22222270 1px 1px 20px;
    border-radius: 6px;
    padding: 40px;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 5rem;
      text-align: center;
      max-width: 70%;
    }

    .social {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 40px 0;
      flex-wrap: wrap;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
        cursor: pointer;
        transition: 400ms;

        :hover {
          transform: translateY(-8px);
        }

        svg {
          margin-bottom: 6px;
        }
      }

      img {
        max-width: 300px;
        height: auto;
        padding: 20px;
        background-color: #222;
        border-radius: 6px;
        margin: 0 20px 20px 0;
      }

      .socialMediaWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 340px;
        align-items: center;
      }
    }
  }
  @media (max-width: 768px) {
    .wrapper {
      max-width: 80%;
      align-items: center;
      padding: 20px;

      h1 {
        font-size: 3.5rem;
        max-width: 90%;
      }

      .social {
        a {
          font-size: 1.5rem;
        }
        img {
          max-width: 200px;
        }
        .socialMediaWrapper {
          max-width: 240px;
        }
      }
    }
  }
`;
