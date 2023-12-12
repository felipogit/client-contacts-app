import styled from "styled-components";

export const StyledContainer = styled.div`
display: flex;
padding: 10px;
flex-direction: column;
width: 100%;
height: auto;
background-color: var(--color-blue-600);
gap: 10px;


div{
    display: flex;
    width: 100%;
    
    flex-direction: row-reverse;
    gap: 10px;

    button{
        height: 30px;
        width: 110px;
    }
}

`