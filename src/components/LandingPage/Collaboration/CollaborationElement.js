import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const InfoSec = styled.div`
  padding: 50px 0;
  background: #fdf1cb;
  height: 100%;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  /* flex-wrap: wrap; */
  align-items: center;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    /* display: flex; */
    justify-content: center;
    flex-direction: column;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  a {
    color: #4859ef;
    font-weight: 700px;
    font-size: 16px;
    line-height: 24px;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: "flex-start";
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 15px;
  font-size: 48px;
  line-height: 57.6px;
  font-weight: 800;
  color: #363636;
`;

export const Subtitle = styled.p`
  /* max-width: 440px; */
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #363636;
`;
