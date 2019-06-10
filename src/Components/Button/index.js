import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  width: 128px;
  background-color: #fffefe;
  color: #70757a;
  border-radius: 4px;
  box-shadow: 1px 2px 4px 0px rgba(179, 187, 215, 0.5);
  border: 1px solid rgba(112, 117, 122, 0.05000000074505806);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 9px;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    transform: translateY(-5%);
  }
`;

export const SuccessButton = styled.button`
  height: 40px;
  width: 128px;
  background-color: #fffefe;
  border-radius: 4px;
  box-shadow: 1px 2px 4px rgba(153, 208, 110, 0.5);
  border: 1px solid rgba(153, 208, 110, 0.05);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 9px;
`;

export const WarningButton = styled.button`
  height: 40px;
  width: 128px;
  width: 64px;
  height: 20px;
  background: #fffefe;
  border: 1px solid rgba(236, 65, 96, 0.05);
  box-shadow: 1px 2px 4px rgba(236, 65, 96, 0.35);
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 9px;
`;
