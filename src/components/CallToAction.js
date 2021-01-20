import { Link } from "react-router-dom";
import styled from "styled-components";

const CallToAction = styled(Link)`
  color: white;
  background: #ff1b68;
  padding: 8px 16px;
  border-radius: 8px;

  &:hover,
  &:active {
    color: #ff1b68;
    background: white;
    border: none;
  }
`;

export default CallToAction;
