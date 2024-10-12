const sections = document.querySelectorAll(".section");
const totalCartValue = document.querySelector(".total-cart-value");
const tables = document.querySelectorAll(".table");
const badge = document.querySelector(".badge");

sections.forEach((section, index) => {
  section.addEventListener("click", () => {
    sections.forEach((s, i) => {
      s.classList.toggle("section-selected", i === index);
      tables[i].style.display = i === index ? "block" : "none";
      s.querySelector("input[type='radio']").checked = i === index;
      if (index == 1) {
        badge.style.top = "-10px";
        badge.style.right = "5.9px";
      } else {
        badge.style.right = "7px";
        badge.style.top = "-8.1px";
      }
    });
    totalCartValue.textContent = `$${section.dataset.price} USD`;
  });
});
