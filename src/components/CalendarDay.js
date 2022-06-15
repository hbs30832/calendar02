import React from "react";
import styled, { css } from "styled-components";

const DateNum = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: inherit;
`;

const DateBlock = styled.div`
  background-color: #fff;
  border: 1px solid #e8e8e8;
  padding: 5px;
  cursor: pointer;
  ${DateNum} {
    margin: 0;
  }
  ${({ active }) =>
    active &&
    css`
      ${DateNum} {
        background-color: #48f7df;
        color: #fff;
        font-weight: 700;
      }
    `}
`;

function CalendarDay({
  renderDate,
  renderYear,
  renderMonth,
  isCurrentMonth,
  onClickDate,
  selectedTargets,
  currentTargets,
}) {
  const isCurrent =
    // selectedTargets : 달력에서 클릭한 날짜.
    // currentTargets  : 화살표에 의해서 현재 화면에 렌더링 되고 있는 날짜.
    selectedTargets.year === renderYear &&
    selectedTargets.month === renderMonth;

  console.log(
    selectedTargets.date,
    renderDate,
    selectedTargets.date === renderDate
  );
  return (
    <DateBlock
      style={{ color: !isCurrentMonth && "#c2c2c2" }}
      active={selectedTargets.date === renderDate && isCurrent}
      onClick={() => {
        if (!isCurrentMonth) return;
        console.log(currentTargets.year, currentTargets.month);
        onClickDate({
          year: renderYear,
          month: renderMonth,
          date: renderDate,
        });
      }}
    >
      <DateNum>{renderDate}</DateNum>
    </DateBlock>
  );
}

export default CalendarDay;
