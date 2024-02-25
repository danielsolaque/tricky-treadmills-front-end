const DATE_FORMATTER = new Intl.DateTimeFormat("en-US");

export function formatDate(date) {
  return DATE_FORMATTER.format(date);
}
