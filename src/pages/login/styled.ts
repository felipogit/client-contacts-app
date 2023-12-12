import styled from "styled-components";

export const StyledTopContainer = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-gray-200);

    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 400px;
        width: 100%;
        max-width: 300px;
        background-color:var(--color-blue-600) ;
        padding: 10px;

        input{
            height: 35px;
        }

        button{
            margin-top: 20px;
            height: 35px;
        }
        
    
    }

`