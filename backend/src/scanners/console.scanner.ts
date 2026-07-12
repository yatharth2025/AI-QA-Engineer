import type { Page, ConsoleMessage } from "playwright";

export const getConsoleErrors = async (page: Page) => {
  const consoleMessages: {
    type: string;
    text: string;
  }[] = [];

  page.on("console", (message: ConsoleMessage) => {
    consoleMessages.push({
      type: message.type(),
      text: message.text(),
    });
  });

  return {
    consoleMessages,
  };
};