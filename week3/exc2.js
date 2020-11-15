let A = [],
  B = [],
  C = [],
  days = [
    "Неделя",
    "Понеделник",
    "Вторник",
    "Сряда",
    "Четвъртък",
    "Петък",
    "Събота",
  ];

A.push(new Date());
A.push(new Date(2018, 11, 8));

A[1].setHours(21);

console.log(A);

B = A.map((element) => element.getDay());

console.log(B);

A.forEach((element, index) => {
  let date = element.getDate(),
    month = element.getMonth() + 1,
    year = element.getFullYear(),
    printDate = `${date}.${month}.${year}`,
    hours = element.getHours(),
    minutes = element.getMinutes(),
    seconds = element.getSeconds(),
    printTime = `${hours}:${minutes}:${seconds}`,
    dayOfWeek = days[B[index]],
    daysInmonth = new Date(year, month, 0).getDate();

  C.push(
    `Дата: ${printDate}, час: ${printTime}, ${dayOfWeek}. ${daysInmonth} дни`
  );
});

console.log(C);
