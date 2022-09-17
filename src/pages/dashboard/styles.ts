import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormPokes {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #2b75bb;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
    padding-left: 200px;
    img {
        background-size: 100px 40px;
    }
`;

export const Form = styled.form<FormPokes>`
    padding-left: 200px;
    margin-top: 200px;
    padding-right: 200px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0px;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;

        ${pokRep =>
            pokRep.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #2b75bb;
        border-radius: 0 5px 5px 0;
        border: 0px;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#2b75bb')};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;
    margin-right: 270px;
    margin-left: 270px;
    opacity: 0.9;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }
        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #000000;
            }

            p {
                font-size: 18px;
                color: #3d3d4d;
                margin-top: 4px;
            }
        }
    }
`;

export const Error = styled.span`
    margin: 50px;
    display: block;
    color: #c53030;
    margin-top: 8px;
    padding-left: 200px;
`;
