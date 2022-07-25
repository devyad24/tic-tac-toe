const gameBoard = (() => {
    const tictacArr = [];
    const boxes = document.querySelectorAll(".box");
    return {tictacArr,boxes};
})();

const player = (playerName) => {
    const getPlayerName = playerName;
    return {getPlayerName};
}
// gameBoard.renderGameArray();
const gameControl = (() => {
    const gbarray = gameBoard.tictacArr;
    function _boxOccupied(box){
        if(gbarray.length >9 || box.textContent!=="") return true;
    }
    function playerTurn(){
        const playerA = player("X");
        const playerB = player("O");
        gameBoard.boxes.forEach(box => box.addEventListener('click',e => {
        if(!_boxOccupied(e.target)){
            if(gbarray[gbarray.length-1]===playerB.getPlayerName || gbarray.length===0){
                e.target.textContent = playerA.getPlayerName;
                gbarray.push(playerA.getPlayerName);
                displayTurn(playerB.getPlayerName);
            }else{
                e.target.textContent = playerB.getPlayerName;
                gbarray.push(playerB.getPlayerName);
                displayTurn(playerA.getPlayerName);
            }
        }
        }))
    }
    function displayTurn(player){
        const currentTurn = document.querySelector(".gameStatus");
        currentTurn.textContent = `Player ${player}'s turn.`;
    }
    playerTurn();
    return {gbarray}
})();
