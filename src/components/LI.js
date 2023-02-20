import styled from 'styled-components';


const LI = styled.li`
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  padding: 5px;
  border-bottom: 1px solid #000;
  &:hover {
    background-color: hsla(240, 52%, 67%, 0.94);
    border-bottom: 1px solid #FF9700;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    color: #040415f0;
  }
`;

export default LI