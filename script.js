const textBox = document.getElementById("input");
const count = document.getElementById("count");

textBox.addEventListener("input", () => {
    let text = textBox.value;
    text = text.replace(/\s| /g, "");
    text = text.replace('\n', "");
    count.innerText = text.length;
});