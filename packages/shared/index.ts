export function envIssue(required: string) {
  return required;
}

export function errorWithCause() {
  throw new Error("This is a test error", {
    cause: "This is the cause of the error",
  });
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions#trailingzerodisplay
export function numberFormatIssue(
  value: number,
  formatOptions: Intl.NumberFormatOptions
) {
  if (formatOptions.trailingZeroDisplay === undefined) {
    formatOptions.trailingZeroDisplay = "stripIfInteger";
  }

  const formatter = new Intl.NumberFormat("en-US", formatOptions);

  return formatter.format(value);
}
