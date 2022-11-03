const allPages = document.querySelectorAll('[data-js*="page"]');
const allLinks = document.querySelectorAll('[data-js*="link"]');

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    allPages.forEach((page) => {
      page.classList.remove("current");
    });
    const hrefAttribute = event.target.getAttribute("href");
    const currentPage = document.querySelector(hrefAttribute);
    currentPage.classList.add("current");
  });
});
