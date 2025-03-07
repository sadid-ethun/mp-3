import { useState } from "react";
import { StyledH2 } from "../StyledComponents";
import styled from "styled-components";

const StyledDiv = styled.div`
    font-size: calc(4px + 1vw);
    display: flex;
    flex-direction: column;
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    width: 50%;
    margin-bottom: 3%;
    background-color: #404040;
    border: #101010 1px solid;
    border-radius: 100vw;
    color: #f0f0f0;
    padding: 0.5vw 1.5vw;
    font-family: Poppins, "Helvetica Neue", Arial, sans-serif;
    font-size: calc(4px + 1.5vw);
`;

const ButtonDiv = styled.div`
    display: flex;
    gap: 1%;
    margin-bottom: 4%;
`;

const StyledButton = styled.button`
    padding: 0.5vw 1vw;
    margin-top: 2%;
    font-size: calc(4px + 1.5vw);
    font-family: Poppins, "Helvetica Neue", Arial, sans-serif;
    background-color: #2b3c5d;
    color: #f0f0f0;
    border: #101010 1px solid;
    border-radius: 100vw;
`;

const StyledH3 = styled.h3`
    margin-top: 1%;
    font-size: calc(4px + 1.5vw);
    font-weight: 500;
    background-color: #404040;
    width: 50%;
    padding: 0.5vw 1.5vw;
    border-radius: 100vw;
    height: calc(4px + 2vw);
    display: flex;
    align-items: center;
`;

export default function Calculator() {

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [output, setOutput] = useState(0);

    function myAdd() {
        setOutput(firstNumber + secondNumber);
    }

    function mySubtract() {
        setOutput(firstNumber - secondNumber);
    }

    function myMultiply() {
        setOutput(firstNumber * secondNumber);
    }

    function myDivide() {
        setOutput(firstNumber / secondNumber);
    }

    function myPower() {
        let result = firstNumber;
        for (let i = 1; i < secondNumber; i++) {
            result *= firstNumber;
        }
        setOutput(result);
    }

    function myClear() {
        setFirstNumber(0);
        setSecondNumber(0);
        setOutput(0);
    }

    return (
        <>
            <StyledH2>Calculator</StyledH2>
            <StyledDiv>
                <InputDiv>
                    <label htmlFor="first-number">First Number</label>
                    <StyledInput
                        type="number"
                        id="first-number"
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(Number(e.target.value))}
                    />
                    <label htmlFor="second-number">Second Number</label>
                    <StyledInput
                        type="number"
                        id="second-number"
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(Number(e.target.value))}
                    />
                </InputDiv>
                <ButtonDiv>
                    <StyledButton onClick={myAdd}>+</StyledButton>
                    <StyledButton onClick={mySubtract}>-</StyledButton>
                    <StyledButton onClick={myMultiply}>*</StyledButton>
                    <StyledButton onClick={myDivide}>/</StyledButton>
                    <StyledButton onClick={myPower}>**</StyledButton>
                    <StyledButton onClick={myClear}>Clear</StyledButton>
                </ButtonDiv>
                <div>
                    <p>Output</p>
                    <StyledH3 style={{ color: output < 0 ? "red" : "white" }}>{output}</StyledH3>
                </div>
            </StyledDiv>
        </>
    )

}