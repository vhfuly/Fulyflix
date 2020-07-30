import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s, transform 0.3s, margin-left 0.3s, margin-right 0.3s;
  &:hover,
  &:focus {
    margin-left:80px;
    margin-right:80px;
    opacity: .5;
    transform : scale(1.5)
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
