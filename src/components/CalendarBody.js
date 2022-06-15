import React from "react";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";

const BodyBlock = styled.div`
  display: grid;
  flex: 1;
  grid-template-rows: 30px repeat(5, 1fr);
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 5px;
  & div:nth-child(7n + 1) {
    color: red;
  }
`;

const DayLabel = styled.div`
  justify-self: center;
  align-self: center;
  font-weight: 700;
  background-color: #fff;
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

function CalendarBody({
  onClickDate,
  currentTargets,
  selectedTargets,
  renderSelectedDate,
}) {
  const { year, month, date } = currentTargets;
  // 오늘 날짜 인스턴스 생성

  console.log(selectedTargets);

  // 이번달의 첫째날(1일)에 대한 인스턴스 생성. => 단순히 일뿐만 아니라 다른 데이터도 필요.
  const startDate = new Date(year, month, 1);

  // 오늘 날짜 생성 => setDate()로 첫째주 일요일 날짜 설정(달력의 첫번째 날).

  const renderDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    1 - startDate.getDay()
    // setDate(0) => 말일 => 음수를 넣으면 말일부터 뺀다.
  );

  const render = () => {
    let result = [];
    // 하루씩 더 하면서 jsx형태로 가공해서 배열에 저장
    for (let i = 0; i < 35; i++) {
      result.push(
        <CalendarDay
          key={i}
          renderDate={renderDate.getDate()}
          renderMonth={renderDate.getMonth()}
          renderYear={renderDate.getFullYear()}
          date={date}
          currentTargets={currentTargets}
          selectedTargets={selectedTargets}
          // 날짜를 전달 => 객체를 전달하면 참조기 때문에 다 끝나고 마지막 날짜가 전달된다.
          isCurrentMonth={month === renderDate.getMonth()} // 전달한 날짜가 이번달인지 아닌지 boolean으로 전달.
          onClickDate={onClickDate}
        />
      );
      // 하루 더 하기
      renderDate.setDate(renderDate.getDate() + 1);
    }
    return result;
  };

  return (
    <>
      <BodyBlock>
        {dayList.map((day, idx) => (
          <DayLabel key={idx}>{day}</DayLabel>
        ))}
        {render()}
      </BodyBlock>
      <button onClick={renderSelectedDate}>오늘</button>
    </>
  );
}

export default CalendarBody;
