import styled from "styled-components";

const Button = styled.button`
  background: #0e4f1f;
  color: white;
  font: inherit;
  border: 1.5px solid #0e4f1f;
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:active {
    background: white;
    color: #0e4f1f;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
