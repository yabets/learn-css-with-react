import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  left: 0;
  top: 0;
  display: ${(props) => props.display || "none"};
`;

export default Backdrop;
