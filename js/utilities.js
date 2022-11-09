function generateCells(html) {

    const container = document.querySelector(".container");

    for (let i = 1; i <= 100; i++) {
        const cellEl = document.createElement("div");
        cellEl.classList.add("cell");
        cellEl.innerHTML = `${i}`;
        container.append(cellEl);

        cellEl.addEventListener("click", function () {

            this.classList.toggle("bg-dark");
            this.classList.toggle("text-danger");

            console.log(`Hai cliccato sulla cella ${i}`);

        })

    }
}