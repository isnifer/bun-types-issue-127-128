import { envIssue, errorWithCause, numberFormatIssue } from "shared";

function testIssues() {
  // Can't reproduce yet in 1.2.7-1.2.8 in this repo
  // const envIssueResult = envIssue(import.meta.env.VITE_SOME_ENV_VAR);
  // console.log(envIssueResult);

  try {
    const errorWithCauseResult = errorWithCause();
    console.log(errorWithCauseResult);
  } catch (error) {
    if (error instanceof Error) {
      // Property 'cause' does not exist on type 'Error'.
      // Do you need to change your target library?
      // Try changing the 'lib' compiler option to 'es2022' or later.
      console.log(error.cause);
    }
  }

  // Property 'trailingZeroDisplay' does not exist on type 'NumberFormatOptions'.
  const numberFormatIssueResult = numberFormatIssue(1234567890, {
    style: "currency",
    currency: "USD",
  });
  console.log(numberFormatIssueResult);
}

testIssues();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Bun issue at v1.2.7</h1>
  </div>
`;
