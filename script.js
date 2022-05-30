document.querySelector("#button").addEventListener("click", () => {
    var colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var color = "";
    var idx = 0;

    for (let i = 0; i < 6; i++) {
        idx = Math.floor(Math.random() * colors.length);
        color += colors[idx];
    }
    document.body.style.backgroundColor = `#${color}`;
    document.querySelector("#hexcode").textContent = color;
});
