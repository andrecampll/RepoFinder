import styled from 'styled-components';

const Container = styled.div`
    max-width: 700px;
    background-color: #FFF;
    padding: 30px;
    border-radius: 4px;
    box-shadow: rgba(0,0,0,0.1);
    margin: 80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export default Container;