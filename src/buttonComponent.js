
import styled from 'styled-components';



const ButtonContainer = styled.button `
text-transform: capitalized;
background-color: red;
border: 1px solid red;
color: ${props => props.cart ? "black" : "white"};
padding: 2px 5px 2px 5px;
`

export default ButtonContainer;