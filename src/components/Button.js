import styled from 'styled-components';

export const ButtonPrimary = styled.button`
    border: 1px solid #fff;
    background: #fff;
    color: #000; 
    padding: 12px 26px;
    font-size: 20px;
    border-radius: 2px;
    font-weight: bold;
    margin: 6px;
`

export const ButtonLight = styled.button`
    border: 1px solid #fff;
    background: transparent;
    color: #fff; 
    padding: 12px 26px;
    font-size: 20px;
    border-radius: 2px;
    font-weight: bold;
    margin: 6px;
    transition: all 0.3s ease;
    &:hover{
        background: #fff;
        color: #000;
    }
`

export const MediumButtonLight = styled.button`
    border: 1px solid #fff;
    background: transparent;
    color: #fff; 
    padding: 8px 20px;
    font-size: 20px;
    border-radius: 2px;
    font-weight: bold;
    margin: 6px;
    transition: all 0.3s ease;
    &:hover{
        background: #fff;
        color: #000;
    }
`
