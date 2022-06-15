import React from "react";
import styled from "styled-components";

const DateBlock = styled.div``;

function CalendarDay({ date, isCurrentMonth }) {
  return (
    <DateBlock style={{ color: !isCurrentMonth && "#c2c2c2" }}>
      {date}
    </DateBlock>
  );
}

export default CalendarDay;
