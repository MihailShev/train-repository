const title = document.getElementById("wave-text");
title.innerHTML = title.textContent
  .split("")
  .map(
    (letter, index) =>
      `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`
  )
  .join("");
