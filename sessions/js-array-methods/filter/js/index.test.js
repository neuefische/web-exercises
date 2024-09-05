import {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
} from "./index.js";

describe("Filtering Challenge", () => {
  test("onlyCardWithIdTwo", () => {
    expect(onlyCardWithIdTwo).toEqual([
      {
        id: "2",
        isBookmarked: false,
        question: "How often can I use <aside>?",
        answer: "As often as you like.",
        tags: ["html", "elements", "basic"],
      },
    ]);
  });
  test("allCardsWith3Tags", () => {
    expect(allCardsWith3Tags).toEqual([
      {
        id: "1",
        isBookmarked: false,
        question: "How often can I use <header>?",
        answer: "As often as you like.",
        tags: ["html", "elements", "basic"],
      },
      {
        id: "2",
        isBookmarked: false,
        question: "How often can I use <aside>?",
        answer: "As often as you like.",
        tags: ["html", "elements", "basic"],
      },
    ]);
  });
  test("allCardsThatAreNotBookmarked", () => {
    expect(allCardsThatAreNotBookmarked).toEqual([
      {
        id: "1",
        isBookmarked: false,
        question: "How often can I use <header>?",
        answer: "As often as you like.",
        tags: ["html", "elements", "basic"],
      },
      {
        id: "2",
        isBookmarked: false,
        question: "How often can I use <aside>?",
        answer: "As often as you like.",
        tags: ["html", "elements", "basic"],
      },
    ]);
  });
  test("allCardsWithTagsHTMLOrJSThatAreBookmarked", () => {
    expect(allCardsWithTagsHTMLOrJSThatAreBookmarked).toEqual([
      {
        id: "3",
        isBookmarked: true,
        question: "On which types can I use destructuring assignment?",
        answer: "On Objects and Arrays",
        tags: ["js", "next"],
      },
    ]);
  });
});
