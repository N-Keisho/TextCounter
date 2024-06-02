const textBox = document.getElementById("input");
const count = document.getElementById("count");

textBox.addEventListener("input", () => {
    count.innerText = textBox.value.length;
});