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
  * {
    user-select: none;
  }
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

const today = new Date();
const initialDate = {
  year: today.getFullYear(),
  month: today.getMonth(),
  date: today.getDate(),
};

function CalendarTemplate() {
  // 선택한날짜 => 초기값은 오늘에 해당하는 달.
  const [currentTargets, setCurrentTargets] = useState(initialDate);

  const { year, month, date } = currentTargets;
  const [selectedTargets, setSeletecTargets] = useState(initialDate);
  const decreaseMonth = () => {
    if (month > 0)
      setCurrentTargets({
        ...currentTargets,
        month: month - 1,
      });
    else {
      setCurrentTargets({
        ...currentTargets,
        year: year - 1,
        month: 11,
      });
    }
  };
  const increaseMonth = () => {
    if (month < 11) {
      setCurrentTargets({
        ...currentTargets,
        month: month + 1,
      });
    } else {
      setCurrentTargets({
        ...currentTargets,
        year: year + 1,
        month: 0,
      });
    }
  };

  const renderSelectedDate = () => {
    setCurrentTargets(initialDate);
    setSeletecTargets(initialDate);
  };

  const onClickDate = (targets) => {
    setSeletecTargets(targets);
  };

  return (
    <Positioner>
      <CalendarBlock>
        <CalendarHeader
          year={year}
          month={month}
          decreaseMonth={decreaseMonth}
          increaseMonth={increaseMonth}
        />
        <CalendarBody
          month={month}
          date={date}
          onClickDate={onClickDate}
          currentTargets={currentTargets}
          selectedTargets={selectedTargets}
          renderSelectedDate={renderSelectedDate}
        />
      </CalendarBlock>
    </Positioner>
  );
}

export default CalendarTemplate;
