export default function NavPagination() {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.textContent = "1 / 1";
  return pagination;
}
