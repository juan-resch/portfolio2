import styled from "styled-components";
import { codeBackground } from "../assets/images";
import { BsChevronCompactDown } from "react-icons/bs";
import { keyframes } from "styled-components";

export const Home = (props) => {
  return (
    <Container>
      <ImageBackground>
        <div className="hello">
          <div className="title">
            <span>
              Hello, I'm Juan and I'm a <br />
              Javascript software developer
            </span>
          </div>
          <div className="seemore">
            <span>see more here</span>
            <BsChevronCompactDown color="#fff" size={50} />
          </div>
        </div>
      </ImageBackground>
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

const pulse = keyframes`
  from {
    font-size: 6rem;
  }
  to {
    font-size: 6.2rem;
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

      span {
        color: #fff;
        font-weight: 700;
        font-size: 6rem;
        text-align: center;
        transition: all 500ms;
        :hover {
          font-size: 6.2rem;
        }
      }
    }

    .seemore {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;

      span {
        background-color: #00000070;
        padding: 10px 30px;
        border-radius: 6px;
        color: #fff;
        font-weight: 400;
        font-size: 2rem;
        text-align: center;
      }

      svg {
        animation: ${ease} 2s ease-in-out infinite;
      }
    }
  }
`;
