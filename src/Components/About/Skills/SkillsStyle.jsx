import styled from "styled-components";
export const AboutContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 370px;
  margin-top: 60px;
  width: 100%;
  background-color: rgba(44, 62, 80, 1);
  color: white;
  border-radius: 10px;
  padding: 40px 40px;
  -webkit-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 29px -15px rgba(0, 0, 0, 0.75);
  transition: all 0.5s ease-in-out;
  @media (max-width: 950px){
    height: 620px;
  }
  @media (max-width: 650px){
    height: 660px;
  }
  @media (max-width: 499px){
    padding: 40px 20px;
    height: 660px;
  }
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 950px){
    flex-direction: column;
  }
`;
export const Column = styled.div`
@media (max-width: 950px){
    margin-top:10px;
  }
  margin: 0px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  .division-title {
    font-size: 22px;
    text-transform: uppercase;
  }
  .card {
    margin-top: 10px;
    > h3 {
      text-transform: uppercase;
      display: inline;
      font-size: 18px;
      font-weight: 200;
      letter-spacing: 2px;
    }
    .progress {
      position: relative;
      top: 0;
      left: 0;
      margin-top: 5px;
      width: 100%;
      height: 5px;
      border-radius: 4px;
      background-color: #ffffc5;
      border: 0px;
      overflow: hidden;
    }

    .persentage {
      float: right;
      font-size: 16px;
    }
  }
`;
export const ProgressValue = styled.div`
  width: ${({ progressValue }) => progressValue};
  height: 100%;
  border-radius: 4px;
  border: 0px;
  background: ${({ color }) => color};
`;
