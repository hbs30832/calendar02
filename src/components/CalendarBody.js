import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";

const BodyBlock = styled.div`
  display: grid;
  flex: 1;
  grid-template-rows: 30px repeat(5, 1fr);
  grid-template-columns: repeat(7, 1fr);
`;

const DayLabel = styled.div`
  justify-self: center;
  align-self: center;
  font-weight: 700;
`;

const dayList = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

function CalendarBody({ currentMonth }) {
  // 오늘 날짜 인스턴스 생성
  const today = new Date();
  // 이번달의 첫째날(1일)에 대한 인스턴스 생성. => 단순히 일뿐만 아니라 다른 데이터도 필요.
  const startDate = new Date(today.getFullYear(), currentMonth, 1);

  // 오늘 날짜 생성 => setDate()로 첫째주 일요일 날짜 설정(달력의 첫번째 날).

  const date = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    1 - startDate.getDay()
    // setDate(0) => 말일 => 음수를 넣으면 말일부터 뺀다.
  );

  const renderDate = () => {
    let result = [];

    // 하루씩 더 하면서 jsx형태로 가공해서 배열에 저장
    for (let i = 0; i < 35; i++) {
      result.push(
        <CalendarDay
          date={date.getDate()}
          // 날짜를 전달 => 객체를 전달하면 참조기 때문에 다 끝나고 마지막 날짜가 전달된다.
          isCurrentMonth={currentMonth === date.getMonth()} // 전달한 날짜가 이번달인지 아닌지 boolean으로 전달.
        />
      );
      // 하루 더 하기
      date.setDate(date.getDate() + 1);
    }
    return result;
  };

  return (
    <BodyBlock>
      {dayList.map((day, idx) => (
        <DayLabel style={{ color: idx === 0 && "red" }}>{day}</DayLabel>
      ))}
      {renderDate()}
    </BodyBlock>
  );
}

export default CalendarBody;
