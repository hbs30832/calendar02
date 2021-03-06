import React from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const HeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #e8e8e8;
  p {
    font-size: 32px;
    font-weight: 700;
    margin: 0 20px;
    user-select: none;
    width: 200px;
    text-align: center;
  }
`;

const BtnBlock = styled.div`
  padding: 5px;
  border-radius: 4px;
  background-color: #e0e0e0;
  cursor: pointer;
`;

function CalendarHeader({ year, month, decreaseMonth, increaseMonth }) {
  return (
    <HeaderBlock>
      <BtnBlock onClick={decreaseMonth}>
        <FaAngleLeft color="#fff" />
      </BtnBlock>
      <p>
        {year}년 {month + 1}월
      </p>
      <BtnBlock onClick={increaseMonth}>
        <FaAngleRight color="#fff" />
      </BtnBlock>
    </HeaderBlock>
  );
}

export default CalendarHeader;
