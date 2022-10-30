const linkHome = document.querySelector('[data-js="link-home"]');
const linkBookmarked = document.querySelector('[data-js="link-bookmarked"]');
const linkCreate = document.querySelector('[data-js="link-create"]');
const linkProfile = document.querySelector('[data-js="link-profile"]');

const pageHome = document.querySelector('[data-js="page-home"]');
const pageBookmarked = document.querySelector('[data-js="page-bookmarked"]');
const pageCreate = document.querySelector('[data-js="page-create"]');
const pageProfile = document.querySelector('[data-js="page-profile"]');

linkHome.addEventListener("click", () => {
  pageHome.classList.add("current");
  pageBookmarked.classList.remove("current");
  pageCreate.classList.remove("current");
  pageProfile.classList.remove("current");
});

linkBookmarked.addEventListener("click", () => {
  pageHome.classList.remove("current");
  pageBookmarked.classList.add("current");
  pageCreate.classList.remove("current");
  pageProfile.classList.remove("current");
});

linkCreate.addEventListener("click", () => {
  pageHome.classList.remove("current");
  pageBookmarked.classList.remove("current");
  pageCreate.classList.add("current");
  pageProfile.classList.remove("current");
});

linkProfile.addEventListener("click", () => {
  pageHome.classList.remove("current");
  pageBookmarked.classList.remove("current");
  pageCreate.classList.remove("current");
  pageProfile.classList.add("current");
});
