import styled from "styled-components";

export const Header = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: yellow;
  margin-bottom: 25px;
`;

export const NavigationList = styled.ul`
  display: flex;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
`;

export const NavigationItem = styled.li`
  &:first-child {
    position: relative;
  }
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    height: 30px;
    border: 1px solid black;
    margin-left: 30px;
    margin-right: 30px;
  }
  &:not(:first-child) {
    margin-left: 60px;
  }
  & > a {
    padding: 10px;
    color: black;
  }

  & > a:hover {
    color: gray;
  }
`;
