import styled from "styled-components";
import { codeBackground, profile } from "../assets/images";
import { BsChevronCompactDown } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { ImGit } from "react-icons/im";
import { keyframes } from "styled-components";

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
            <img src={profile}></img>
            <span>I'm a Node.js fullstack developer</span>
          </div>
          <div className="skills">
            <div className="skill">
              <FaReact size={50} color="#61dafb" className="icon" />
              <div>
                <span>React Native</span>
                <progress value={4} max={5} />
              </div>
            </div>
            <div className="skill">
              <FaReact size={50} color="#05a5d1" className="icon" />
              <div>
                <span>React.js</span>
                <progress value={4} max={5} />
              </div>
            </div>
            <div className="skill">
              <FaHtml5 size={50} color="#f16529" className="icon" />
              <div>
                <span>React Native</span>
                <progress value={4} max={5} />
              </div>
            </div>
            <div className="skill">
              <FaCss3 size={50} color="#0285a1" className="icon" />
              <div>
                <span>Css</span>
                <progress value={3} max={5} />
              </div>
            </div>
            <div className="skill">
              <ImGit size={50} color="#f05033" className="icon" />
              <div>
                <span>Git / GitHub</span>
                <progress value={4} max={5} />
              </div>
            </div>
          </div>
        </div>
      </About>
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
  behavior: smooth;
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

        :hover {
          font-size: 6.2rem;
        }

        @media (max-width: 768px) {
          font-size: 4.5rem;
          :hover {
            font-size: 5rem;
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
    }
  }
`;

const About = styled.section`
  background-color: #222230;

  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .aboutme {
    background-color: #fff;

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

      img {
        width: 120px;
        height: 120px;
        border-radius: 120px;

        @media (max-width: 768px) {
          width: 80px;
          height: 80px;
        }
      }

      span {
        margin-left: 30px;
        font-size: 2.5rem;
        @media (max-width: 768px) {
          font-size: 1.8rem;
        }
      }
    }

    .skills {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 20px;
      font-size: 2rem;

      .skill {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;

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
      }
    }
  }
`;
