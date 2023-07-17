import styled from "styled-components"

export const CardList = styled.ul`
display: flex;
align-items: center;
margin-bottom: -15px;
margin-right: -30px;
flex-wrap: wrap;
width: 100vw;
`

export const CardItem = styled.li`
background-color: #f7f7f7;
border: 1px solid #bababa;
border-radius: 20px;
padding: 10px;
width: calc(100% / 3 - 30px);
margin-right: 30px;
margin-bottom: 15px;
`

export const CardName = styled.p`
font-size: 26px;
font-weight: 600;
font-style: normal;
text-align: center;
margin-bottom: 15px;
`

export const CardCode = styled(CardName)`
font-size: 20px;
font-weight: 500;
`

export const CardButton = styled.button`
display: block;
font-size: 20px;
font-weight: 700;
color: white;
font-style: normal;
border: 1px solid #217eff;
background: rgb(0,212,255);
background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(75,109,236,1) 100%);
border-radius: 5px;
transition: background 2s linear;
padding: 7px;
width: calc(100% / 4);
margin-left: auto;

&:hover {
  background: linear-gradient(to right, rgba(0,212,255,1) 0%, rgba(0,212,255,1) 100%);
}
`



