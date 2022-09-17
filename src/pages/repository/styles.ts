import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 48px;
    color: #2b75bb;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
    padding-left: 200px;
    a {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #2b75bb;
    }
`;

export const Card = styled.div`
    background-color: #ffc312;
    width: 500px;
    margin-top: 30px;
    margin-left: 300px;
    margin-right: 300px;
    padding: 30px;
    padding-right: 30px;
    padding-left: 30px;
    border-color: #2b75bb;
    border-width: 10px;
    border-style: solid;
    border-radius: 15px;
    color: #2b75bb;
    font-size: 20pt;

    h1 {
        margin: 5px;
        color: #000000;
        align-items: center;
    }
    strong {
        margin: 15px;
        color: #000000;
        align-items: center;
    }
    p {
        margin: 12px;
        color: #000000;
        align-items: center;
    }
    img {
        margin: 10px;
    }
`;

export const Link = styled.a`
    color: #2b75bb;
    font-size: 16px;
    margin-top: 25px;
    padding-left: 30px;
`;
