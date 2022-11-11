import {
  lowerCaseAnswers,
  questionsAndAnswersTogether,
  questionAndAnswer,
} from "./index.js";

describe("Mapping Challenge", () => {
  test("lowerCaseAnswers", () => {
    expect(lowerCaseAnswers).toEqual([
      "as often as you like.",
      "as often as you like.",
      "on objects and arrays",
    ]);
  });
  test("questionsAndAnswersTogether", () => {
    expect(questionsAndAnswersTogether).toEqual([
      "How often can I use <header>? - As often as you like.",
      "How often can I use <aside>? - As often as you like.",
      "On which types can I use destructuring assignment? - On Objects and Arrays",
    ]);
  });
  test("questionAndAnswer", () => {
    expect(questionAndAnswer).toEqual([
      {
        question: "How often can I use <header>?",
        answer: "As often as you like.",
      },
      {
        question: "How often can I use <aside>?",
        answer: "As often as you like.",
      },
      {
        question: "On which types can I use destructuring assignment?",
        answer: "On Objects and Arrays",
      },
    ]);
  });
});
