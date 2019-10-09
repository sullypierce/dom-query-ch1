
// practice problem 1

const firstHeader = document.querySelector(".article__header");
console.log("firstHeader", firstHeader);

firstHeader.textContent = "Welcome to the {insert your name here} blog!"
console.log("firstHeader", firstHeader);

// practice problem 2

const allHeaders = document.querySelectorAll(".article__header");
for (i = 0; i < allHeaders.length; i++) {
    
    allHeaders[i].classList.add("important")
}

for (i=0; i<allHeaders.length; i++) {
    console.log(allHeaders[i]);
}

// practice problem 3

const dashedClass = document.querySelector(".dashed");
dashedClass.classList.remove("dashed");
console.log("dashedClass", dashedClass)


//practice problem 4

const articleFooter = document.querySelector(".article__footer");
articleFooter.classList.add("goldenrod")

console.log("articleFooter", articleFooter);