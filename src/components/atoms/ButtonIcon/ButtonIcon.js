import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  margin: 15px 0;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  background-color: transparent;

  &.active {
    background-color: white;
    width: 77px;
    height: 77px;
  }
`;

export default ButtonIcon;
