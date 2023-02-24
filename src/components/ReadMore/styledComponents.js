import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 32px;
  margin-bottom: 32px;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 95%;
    margin-top: 64px;
    margin-bottom: 64px;
  }
`

export const Title = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
`

export const Subtitle = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 12px;
  margin-top: 12px;
`

export const Image = styled.img`
  width: 90%;
  margin-top: 20px;
`

export const Description = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 12px;
`

export const Button = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 6px;
  height: 30px;
  width: 100px;
  background-color: #1f81ff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 12px;
`
