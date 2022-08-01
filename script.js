const gameBoard = (() => {
    const tictacArr = [];
    const boxes = document.querySelectorAll(".box");
    return {tictacArr,boxes};
})();

const player = (playerName) => {
    const getPlayerName = playerName;
    return {getPlayerName};
}
const gameControl = (() => {
    let gbarray = gameBoard.tictacArr;
    const boxesArr = Array.from(gameBoard.boxes);
    const currentTurn = document.querySelector(".gameStatus");
    let isGameOver = false;
    function _boxOccupied(box){
        if(gbarray.length >9 || box.textContent!=="") return true;
    }
    function _playerTurn(){
        const playerA = player("X");
        const playerB = player("O");
        gameBoard.boxes.forEach(box => box.addEventListener('click',e => {
        if(!_boxOccupied(e.target) && !isGameOver){
            if(gbarray[gbarray.length-1]===playerB.getPlayerName || gbarray.length===0){
                e.target.textContent = playerA.getPlayerName;
                gbarray.push(playerA.getPlayerName);
                _displayTurn(playerB.getPlayerName);
            }else{
                e.target.textContent = playerB.getPlayerName;
                gbarray.push(playerB.getPlayerName);
                _displayTurn(playerA.getPlayerName);
            }
        }
        if(gbarray.length===1) resetBtn.style.display = "block";
        _winCondition(playerA.getPlayerName,playerB.getPlayerName);
        }))
    }
    function _displayTurn(player){
        currentTurn.textContent = `Player ${player}'s turn.`;
    }
    function _winCondition(playerX,playerO){
        if((boxesArr[0].textContent===playerX && boxesArr[1].textContent===playerX && boxesArr[2].textContent===playerX) || (boxesArr[0].textContent===playerX && boxesArr[3].textContent===playerX && boxesArr[6].textContent===playerX) || 
        (boxesArr[6].textContent===playerX && boxesArr[7].textContent===playerX && boxesArr[8].textContent===playerX) || (boxesArr[2].textContent===playerX && boxesArr[5].textContent===playerX && boxesArr[8].textContent===playerX) ||
        (boxesArr[0].textContent===playerX && boxesArr[4].textContent===playerX && boxesArr[8].textContent===playerX) || (boxesArr[2].textContent===playerX && boxesArr[4].textContent===playerX && boxesArr[6].textContent===playerX) ||
        (boxesArr[3].textContent===playerX && boxesArr[4].textContent===playerX && boxesArr[5].textContent===playerX) || (boxesArr[1].textContent===playerX && boxesArr[4].textContent===playerX && boxesArr[7].textContent===playerX))
        {
            currentTurn.textContent = `${playerX} Won!`;
            isGameOver = true;
            gbarray = [];
            resetBtn.textContent = `Play Again`;
        }
        else if((boxesArr[0].textContent===playerO && boxesArr[1].textContent===playerO && boxesArr[2].textContent===playerO) || (boxesArr[0].textContent===playerO && boxesArr[3].textContent===playerO && boxesArr[6].textContent===playerO) || 
        (boxesArr[6].textContent===playerO && boxesArr[7].textContent===playerO && boxesArr[8].textContent===playerO) || (boxesArr[2].textContent===playerO && boxesArr[5].textContent===playerO && boxesArr[8].textContent===playerO) ||
        (boxesArr[0].textContent===playerO && boxesArr[4].textContent===playerO && boxesArr[8].textContent===playerO) || (boxesArr[2].textContent===playerO && boxesArr[4].textContent===playerO && boxesArr[6].textContent===playerO) ||
        (boxesArr[3].textContent===playerO && boxesArr[4].textContent===playerO && boxesArr[5].textContent===playerO) || (boxesArr[1].textContent===playerO && boxesArr[4].textContent===playerO && boxesArr[7].textContent===playerO))
        {
            currentTurn.textContent = `${playerO} Won!`;
            isGameOver = true;
            gbarray = [];
            resetBtn.textContent = `Play Again`;
        }
        else if(gbarray.length===9){
            currentTurn.textContent = `Game Tied`;
            isGameOver = true; 
            gbarray = [];
            resetBtn.textContent = `Play Again`;
        }
    }
    function resetGame(e){
        gbarray = [];
        gameBoard.boxes.forEach(box => box.textContent = "");
        currentTurn.textContent = `Player X's turn`;
        isGameOver = false;
        e.target.textContent = `Restart`;
        _playerTurn();
    }

    const resetBtn = document.querySelector("#reset_btn");
    resetBtn.addEventListener('click', resetGame);

    _playerTurn();
    return {gbarray};
})();
