
// practice problem 1

const firstHeader = document.querySelector(".article__header");
console.log("firstHeader", firstHeader);

firstHeader.textContent = "Welcome to the {insert your name here} blog!"
console.log("firstHeader", firstHeader);

// practice problem 2

const allHeaders = document.querySelectorAll(".article__header");
for (i = 0; i < allHeaders.length; i++) {
    allHeaders[i].classList.remove("article__header");
    allHeaders[i].classList.add("article__header_important")
}

for (i=0; i<allHeaders.length; i++) {
    console.log(allHeaders[i]);
}

