import styled from "styled-components";

export const StyledContainer = styled.div`
height: 100vh;
width: 100%;
background-color: var(--color-gray-200);

header{
    width: 100%;
    height: 100px;
    background-color: var(--color-blue-600);
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media (max-width: 720px) {
        flex-direction: column;
    }

    
    button{
        height: 30px;
        width: 150px;
    }

}


ul{
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    
    


    

}

`