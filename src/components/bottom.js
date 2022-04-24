import { useState } from "react";
import styled from "styled-components";
import {
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
  SiDiscord,
  SiGithub,
} from "react-icons/si";

export default function Bottom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = () => {};

  return (
    <Container>
      <div className="content">
        <span className="title">Contact me</span>
        <form onSubmit={null}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <button onClick={handleForm}>Send message</button>
        </form>
      </div>
      <div className="content">
        <span className="title">Social medias</span>
        <span className="social">
          <a
            className="socialMediaWrapper"
            href="https://www.instagram.com/juan.resch_/"
          >
            <SiInstagram size={50} color="#fff" />
          </a>
          <a
            className="socialMediaWrapper"
            href="https://www.linkedin.com/in/juan-resch-a6050221a/"
          >
            <SiLinkedin size={50} color="#fff" />
          </a>
          <a
            className="socialMediaWrapper"
            href="https://wa.me/qr/2VSQ2I7HDI67H1"
          >
            <SiWhatsapp size={50} color="#fff" />
          </a>
          <a
            className="socialMediaWrapper"
            href="https://discord.gg/nyfshpBAbF"
          >
            <SiDiscord size={50} color="#fff" />
          </a>
          <a
            className="socialMediaWrapper"
            href="https://github.com/juan-resch"
          >
            <SiGithub size={50} color="#fff" />
          </a>
        </span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 0 70px 0;
  background: rgb(17, 17, 17);
  background: linear-gradient(
    200deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(44, 44, 44, 1) 50%,
    rgba(17, 17, 17, 1) 100%
  );

  color: #fff;

  .content {
    margin: 0 40px;
    width: 80%;

    .social {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .socialMediaWrapper {
      margin: 0px 20px 0 0;
      cursor: pointer;
      transition: 300ms;
      margin-top: 10px;

      :hover {
        transform: translateY(6px);
      }
    }

    form {
      display: flex;
      flex-direction: column;

      input,
      textarea {
        padding: 10px 20px;
        border: #fff 2px solid;
        border-radius: 10px;
        background: none;
        margin: 10px 0;
        font-size: 1.6rem;
        color: #fff;
        font-weight: 700;
      }
      button {
        width: 100%;
        padding: 15px;
        background-color: #fff;
        color: #222;
        border: none;
        border-radius: 12px;
        font-size: 2rem;
        font-weight: 900;
      }
    }
  }

  .title {
    font-size: 3rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    max-height: 100vh;
    .content {
      margin: 40px;

      .social {
        display: flex;
        flex-direction: row;
      }
    }
  }
`;
