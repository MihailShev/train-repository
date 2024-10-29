document
  .querySelector(".ripple-button")
  .addEventListener("click", function (event) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = event.offsetX - size / 2;
    const y = event.offsetY - size / 2;

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });
