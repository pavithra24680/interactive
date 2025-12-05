const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("click", () => {

    // Close other boxes
    boxes.forEach(item => {
      if (item !== box) {
        item.classList.remove("active");
      }
    });

    // Toggle current box
    box.classList.toggle("active");
  });
});
