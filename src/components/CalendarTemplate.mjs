import React, { useState } from "react";
import styled from "styled-components";
import CalendarBody from "./CalendarBody.js";
import CalendarHeader from "./CalendarHeader.js";

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
`;

const CalendarBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.1);
`;

function CalendarTemplate() {
  const today = new Date();
  // 선택한날짜 => 초기값은 오늘에 해당하는 달.
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const decreaseMonth = () => setCurrentMonth(currentMonth - 1);
  const increaseMonth = () => setCurrentMonth(currentMonth + 1);
  return (
    <Positioner>
      <CalendarBlock>
        <CalendarHeader
          currentMonth={currentMonth}
          decreaseMonth={decreaseMonth}
          increaseMonth={increaseMonth}
        />
        <CalendarBody currentMonth={currentMonth} />
      </CalendarBlock>
    </Positioner>
  );
}

export default CalendarTemplate;
