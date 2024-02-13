import { news } from "./news.js";

export function checkFilteredNews(filteredNews) {
  const testFilteredNewsLength = news.filter((newsItem) =>
    newsItem.categories.includes("politics")
  ).length;

  if (testFilteredNewsLength === filteredNews.length) {
    console.log("Congratulations, the news are filtered correctly!");
  } else {
    console.log(
      `Sorry, the filtered news array should have a length of ${testFilteredNewsLength}, but its body is ${filteredNews.length} long.`
    );
  }
}

export function checkSortedNews(sortedNews) {
  const shortestBodyLengthOfSortedNews = news
    .filter((newsItem) => newsItem.categories.includes("politics"))
    .slice()
    .sort((a, b) => a.body.length - b.body.length)[0].body.length;

  if (sortedNews[0].body.length === shortestBodyLengthOfSortedNews) {
    console.log(
      "Congratulations, the news are sorted according to their length!"
    );
  } else {
    console.log(
      `Sorry, the first item should have a body length of 106, but its body is ${sortedNews[0].body.length} characters long`
    );
  }
}
