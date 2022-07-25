const gameboardModule = (function () {
    const gameboardArr = [];
    const allBoxs = document.querySelectorAll(".box");

    function render(targetBox, elementToAppnd) {
        targetBox.textContent = elementToAppnd;
    }

    function makeMove() {
        allBoxs.forEach(box => {
            box.addEventListener('click', (e) => {
                let lastElement = gameboardArr[gameboardArr.length - 1];
                if (e.target.textContent === "" && gameboardArr.length <= 9) {
                    if (lastElement === undefined) gameboardArr.push("X");
                    else if (lastElement === "X") gameboardArr.push("O");
                    else if (lastElement === "O") gameboardArr.push("X");
                    render(e.target, gameboardArr[gameboardArr.length - 1]);
                }
            })
        })
    }

    return { makeMove };
})()

gameboardModule.makeMove();
