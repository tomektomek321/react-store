
import styled from 'styled-components';



const ButtonContainer = styled.button `
background-color:${props => props.back ? "#494282;" : "greenyellow"} ;
border: 1px solid ${props => props.back ? "#494282;" : "greenyellow"};
border-radius: 10px;
padding-top: 2px;
color: ${props => props.cart ? "black" : "white"};
padding: 7px 20px 7px 20px;
`

export default ButtonContainer;