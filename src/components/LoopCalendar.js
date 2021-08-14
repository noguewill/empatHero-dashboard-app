import { useState } from "react";

const daysShortArr = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

const monthNamesArr = [
  "Gennaio ",
  "Febbraio ",
  "Marzo ",
  "Aprile ",
  "Maggio ",
  "Giugno ",
  "Luglio ",
  "Agosto ",
  "Settembre ",
  "Ottobre ",
  "Novembre ",
  "Dicembre ",
];
const LoopCalendar = (daysShort = daysShortArr, monthNames = monthNamesArr) => {
  /* Gets the current date of today */
  const today = new Date();
  /* Displays today information formatted to DD - MM - YYYY */
  const todayFormatted = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;
  /* Set the days on the week from 0 - 6 0 being Monday */
  const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
  /* Sets today on the current state */
  const [selectedDate, setSelectedDate] = useState(today);
  /* Gets the last day of the current month */
  const selectedMonthLastDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  );
  /* Gets the last day of the last month */
  const prevMonthLastDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    0
  );
  /* Gets the amount of days there is in the current month */
  const daysInMonth = selectedMonthLastDate.getDate();
  /* Gets the first day of the month */
  const firstDayInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  ).getDay();
  /* It goes from the first index of the daysInWeek array based on the firstDayInMonth value */
  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
  /* Same as above but it sets the data for last month */
  let prevMonthStartingPoint =
    prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;
  /* Variables set to be pushed valued through when the loop goes over the rows and cols */
  let currentMonthCounter = 1;
  let nextMonthCounter = 1;
  const rows = 6;
  const cols = 7;
  const calendarRows = {};

  /* If rows i is less than rows it keeps iterating on the row, same with j and cols, and if the calendarRows returns an empty value, 
  it sets the current array to empty */
  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (!calendarRows[i]) {
        calendarRows[i] = [];
      }
      /* If i just started and j is less than the startingPoint value, it destructures it's value into a new array without mutating the original one */
      if (i === 1) {
        if (j < startingPoint) {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              /* Sets the classes to each single calendar cell */
              classes: "text-empatGray",
              /* Sets the date formatted DD-MM-YYYY */
              date: `${prevMonthStartingPoint}-${
                selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()
              }-${
                selectedDate.getMonth() === 0
                  ? selectedDate.getFullYear() - 1
                  : selectedDate.getFullYear()
              }`,
              value: prevMonthStartingPoint,
            },
          ];
          prevMonthStartingPoint++;
        } else {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: "",
              date: `${currentMonthCounter}-${
                selectedDate.getMonth() + 1
              }-${selectedDate.getFullYear()}`,
              value: currentMonthCounter,
            },
          ];
          currentMonthCounter++;
        }
      } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: "",
            date: `${currentMonthCounter}-${
              selectedDate.getMonth() + 1
            }-${selectedDate.getFullYear()}`,
            value: currentMonthCounter,
          },
        ];
        currentMonthCounter++;
      } else {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: "text-empatGray",
            /* Gets the date formatted DD-MM-YYYY */
            date: `${nextMonthCounter}-${
              selectedDate.getMonth() + 2 === 13
                ? 1
                : selectedDate.getMonth() + 2
            }-${
              selectedDate.getMonth() + 2 === 4
                ? selectedDate.getFullYear() + 1
                : selectedDate.getFullYear()
            }`,
            value: nextMonthCounter,
          },
        ];
        nextMonthCounter++;
      }
    }
  }
  /* sets the previous month as the selecteDate state current value */
  const getPrevMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1)
    );
  };
  /* sets the posterior month as the selectedDate state current value */
  const getNextMonth = () => {
    setSelectedDate(
      (prevValue) =>
        new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1)
    );
  };
  /* Returns those variables and functions so it can be accessed through another component */
  return {
    daysShort,
    monthNames,
    todayFormatted,
    calendarRows,
    selectedDate,
    getPrevMonth,
    getNextMonth,
  };
};

export default LoopCalendar;
