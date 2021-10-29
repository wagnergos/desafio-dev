export function normalizeCnabTime(time) {
  const hour = time.substr(0, 2);
  const minutes = time.substr(2, 2);
  const seconds = time.substr(4, 2);
  return `${hour}:${minutes}:${seconds}`;
}

export function normalizeCnabDate(date) {
  const year = date.substr(0, 4);
  const month = date.substr(4, 2);
  const day = date.substr(6, 2);

  return `${year}-${month}-${day}`;
}
