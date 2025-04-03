import { envIssue, errorWithCause, numberFormatIssue } from "shared";

function testIssues() {
  const envIssueResult = envIssue(import.meta.env.VITE_SOME_ENV_VAR);
  console.log(envIssueResult);

  try {
    const errorWithCauseResult = errorWithCause();
    console.log(errorWithCauseResult);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.cause);
    }
  }

  const formatted = numberFormatIssue(1234567890, {
    style: "currency",
    currency: "USD",
  });
  console.log(formatted);
}

testIssues();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Bun no issue at v1.2.6</h1>
  </div>
`;
