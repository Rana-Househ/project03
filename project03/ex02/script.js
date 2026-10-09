let title = document.getElementById("title");
let description = document.querySelector(".description");
let button = document.getElementById("changeButton");

button.addEventListener("click", function() {
title.textContent = "The DOM Has Changed!";
description.textContent = "JavaScript changed this text.";
title.style.fontSize = "36px";
title.classList.add("active");
});
