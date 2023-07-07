let num = 0;



function IntroGameController(){
//Create object to store userName data

let userName = [];

function playerOneData(){
  
    function Intro(){
  
      function clearScreen(){
      let div = document.querySelector('.container');
      let div2 = document.querySelector('.flex-header');
      let div3 = document.querySelector('.flex-container');
      // div.style.display = "none";
      // div2.style.display = "none";
      // div3.style.display = "none";
      div.remove();
      div2.remove();
      div3.remove();

      }
    
      function UserNameInterface(){
        const screen = DOMManip();
        let mainDiv = screen.createFlexContainer("div", "500", "500");
        mainDiv = screen.addBoarder(mainDiv, "4px solid");
        mainDiv = screen.styleBorder(mainDiv);
        mainDiv.style.width = "800px";
        mainDiv.style.height = "400px";
        mainDiv.style.borderRadius = "50%";
        mainDiv.setAttribute("id", "animateBorder");
        let text = screen.createForm();
        let rootElement = screen.appendElements(mainDiv, text);
        let main = document.body;
        main.style.display = "flex";
        main.style.justifyContent = "center";
        main.style.alignContent = "center";
        main.appendChild(rootElement);
    
        
      }
    
      function animateBorder(){
        let div = document.querySelector("#animateBorder");
        topBorder(div);
      }
    
      function topBorder(element) {
        element.style.border = "2px solid";
        element.style.borderTopColor = "rgba(15, 100, 202, 1)";
        setTimeout(function() {
          leftBorder(element);
        }, 100);
      } 
    
      function leftBorder(element) {
        element.style.borderLeftColor = "rgba(0, 212, 255, 1)";
        setTimeout(function() {
          bottomBorder(element);
        }, 100);
      }
      
    
      function bottomBorder(element) {
        element.style.borderBottomColor = "rgba(0, 212, 255, 1)";
        setTimeout(function() {
          rightBorder(element);
        }, 100);
      }
    
      function rightBorder(element) {
        element.style.borderRightColor = "rgba(0, 212, 255, 1)";
        
      }
    
      function getInputData(){
        let form = document.querySelector("form");
        form.addEventListener("submit", (e)=> {
          e.preventDefault();
          const data = new FormData(form);
          const obj = Object.fromEntries(data);
          
          //GameController(obj["userName"], obj["userName"]);
          console.log(obj["userName"]);
          storeDataObj(obj["userName"]);

          playerTwoData();
        })
      }
    
      return {clearScreen, UserNameInterface, animateBorder, getInputData};
    
    }


    function DOMManip(){

      function createFlexContainer(type, height, width){
        
        const container = document.createElement(type);
        container.style.height = `${height}px`;
        container.style.width = `${width}px`;
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.alignItems = "center";
      
        return container;
      }
    
      function appendElements(element, elementAppended){
        element.appendChild(elementAppended);
        return element;
      }
    
      function createForm(){
        let div = createFlexContainer("div", "400", "800");
        div.style.borderRadius = "50%";
        div.style.flexDirection = "column";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.gap = "10px";
        div.style.fontSize = "17px";
        let h1 = document.createElement('h1');
        h1.style.fontSize = "35px";
        h1.style.textShadow = "3.5px 1.75px 1.75px black"
        let form = document.createElement('form');
        form.method = "POST";
        let button = document.createElement('button');
        let text = document.createTextNode("Player One, Please Enter in Your Name: ");
        let input = document.createElement('input');
        input.style.width = "293.17px"
        input.name = "userName";
        button.type = "submit";
        button.style.width = "70px";
        button.innerText = "Submit";
        h1.appendChild(text);
        form.appendChild(input);
        form.appendChild(button);
        input.setAttribute("id", "player1");
        input.placeholder = "Player One, Name: "
        appendElements(div, h1);
        appendElements(div, form);
        return div;
      }
    
      function blinkingText(){
        num++;
         
            if(num % 2 === 0)
            {
              let input = document.getElementById("player1");
              input.placeholder = " ";
            }
            else{
              let input = document.getElementById("player1");
              input.placeholder = "Player One, Name: ";
            }
          
      }
    
      function addBoarder(element,/*identifier*/ value){
    
        element.style.border = value;
        //This code below would not work
        //element.style.identifier = value
        //This is because identifiers are not datatypes they cannot be manipulated by the program
        return element;
    
      }
    
      function styleBorder(element){
        element.style.borderTopColor = "rgba(15,100,202,1)";
        element.style.borderBottomColor = "rgba(0,212,255,1)";
        element.style.borderLeftColor = "rgba(15,100,202,1)";
        element.style.borderRightColor = "rgba(0,191,255,1)";
        return element;
      }
    
      
    
      return {createFlexContainer, appendElements, createForm, addBoarder, styleBorder, blinkingText};
    
    }

    
    let intro = Intro();
    intro.clearScreen();
    intro.UserNameInterface();
    let accessMethod = DOMManip();
    setInterval(accessMethod.blinkingText, 1000);
    setInterval(intro.animateBorder, 1000);
    intro.getInputData();
  }


   function playerTwoData(){
  
    function Intro(){
  
      function clearScreen(){
        let div = document.querySelector("#animateBorder");
        div.remove();
      // let div = document.querySelector('.container');
      // let div2 = document.querySelector('.flex-header');
      // let div3 = document.querySelector('.flex-container');
      // div.style.display = "none";
      // div2.style.display = "none";
      // div3.style.display = "none";
      }
    
      function UserNameInterface(){
        const screen = DOMManip();
        let mainDiv = screen.createFlexContainer("div", "500", "500");
        mainDiv = screen.addBoarder(mainDiv, "4px solid");
        mainDiv = screen.styleBorder(mainDiv);
        mainDiv.style.width = "800px";
        mainDiv.style.height = "400px";
        mainDiv.style.borderRadius = "50%";
        mainDiv.setAttribute("id", "movingBorder");
        let text = screen.createForm();
        let rootElement = screen.appendElements(mainDiv, text);
        let main = document.body;
        main.style.display = "flex";
        main.style.justifyContent = "center";
        main.style.alignContent = "center";
        main.appendChild(rootElement);
    
        
      }
    
      function animateBorder(){
        let div = document.querySelector("#movingBorder");
        topBorder(div);
      }
    
      function topBorder(element) {
        element.style.border = "2px solid";
        element.style.borderTopColor = "rgba(15, 100, 202, 1)";
        setTimeout(function() {
          leftBorder(element);
        }, 100);
      } 
    
      function leftBorder(element) {
        element.style.borderLeftColor = "rgba(0, 212, 255, 1)";
        setTimeout(function() {
          bottomBorder(element);
        }, 100);
      }
      
    
      function bottomBorder(element) {
        element.style.borderBottomColor = "rgba(0, 212, 255, 1)";
        setTimeout(function() {
          rightBorder(element);
        }, 100);
      }
    
      function rightBorder(element) {
        element.style.borderRightColor = "rgba(0, 212, 255, 1)";
        
      }
    
      function getInputData(){
        let form = document.querySelector("form");
        form.addEventListener("submit", (e)=> {
          e.preventDefault();
          const data = new FormData(form);
          const obj = Object.fromEntries(data);
          storeDataObj(obj["userName"]);
        
        })
      }
    
      return {clearScreen, UserNameInterface, animateBorder, getInputData};
    
    }


    function DOMManip(){

      function createFlexContainer(type, height, width){
        
        const container = document.createElement(type);
        container.style.height = `${height}px`;
        container.style.width = `${width}px`;
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.alignItems = "center";
      
        return container;
      }
    
      function appendElements(element, elementAppended){
        element.appendChild(elementAppended);
        return element;
      }
    
      function createForm(){
        let div = createFlexContainer("div", "400", "800");
        div.style.borderRadius = "50%";
        div.style.flexDirection = "column";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.gap = "10px";
        div.style.fontSize = "17px";
        let h1 = document.createElement('h1');
        h1.style.fontSize = "35px";
        h1.style.textShadow = "3.5px 1.75px 1.75px black"
        let form = document.createElement('form');
        form.method = "POST";
        let button = document.createElement('button');
        let text = document.createTextNode("Player Two, Please Enter in Your Name: ");
        let input = document.createElement('input');
        input.style.width = "293.17px"
        input.name = "userName";
        button.type = "submit";
        button.style.width = "70px";
        button.innerText = "Submit";
        h1.appendChild(text);
        form.appendChild(input);
        form.appendChild(button);
        input.setAttribute("id", "player2");
        input.placeholder = "Player Two, Name: "
        appendElements(div, h1);
        appendElements(div, form);
        return div;
      }
    
      function blinkingText(){
        num++;
          if(num % 2 === 0)
          {
            let input = document.getElementById("player1");
            input.placeholder = " ";
          }
          else{
            let input = document.getElementById("player1");
            input.placeholder = "Player One, Name: ";
          }
        
      }
    
      function addBoarder(element,/*identifier*/ value){
    
        element.style.border = value;
        //This code below would not work
        //element.style.identifier = value
        //This is because identifiers are not datatypes they cannot be manipulated by the program
        return element;
    
      }
    
      function styleBorder(element){
        element.style.borderTopColor = "rgba(15,100,202,1)";
        element.style.borderBottomColor = "rgba(0,212,255,1)";
        element.style.borderLeftColor = "rgba(15,100,202,1)";
        element.style.borderRightColor = "rgba(0,191,255,1)";
        return element;
      }
    
      
    
      return {createFlexContainer, appendElements, createForm, addBoarder, styleBorder, blinkingText};
    
    }

    
    let intro = Intro();
    intro.clearScreen();
    intro.UserNameInterface();
    let accessMethod = DOMManip();
    setInterval(accessMethod.blinkingText, 1000);
    setInterval(intro.animateBorder, 1000);
    intro.getInputData();
  
  }

  function storeDataObj(element){
    userName.push(element);
    console.log(userName[0]);
  }

  /*function clearmainDiv(){
    let div = querySelector("movingBorder")
    div.style.display = "none";
  }*/

return {playerOneData, playerTwoData, storeDataObj, /*clearmainDiv*/userName}
}




let user = IntroGameController();
user.playerOneData();





// function Gameboard() {
//   const rows = 6;
//   const columns = 7;
//   const board = [];

//   for (let i = 0; i < rows; i++) {
//       board[i] = [];
//     for (let j = 0; j < columns; j++) {
//      board[i].push(Cell());
      
//     }
//   }

//   const getBoard = () => board;


//   const dropToken = (column, player) => {
    
//     /*board.filter takes a call back function loops through every row of the array and sees if the row[column]'s value is set to zero, if it is then the .map method
//     is called for the empty cell and it also takes a call back function which gets every single cell that passed this test condition and returns the element to the
//     available cells array*/
//     const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);
    
  


//     if (!availableCells.length) return;
 

//     const lowestRow = availableCells.length - 1; 
//     board[lowestRow][column].addToken(player);
//   };

//   const printBoard = () => {
//     const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
//     console.log(boardWithCellValues);
//   };

//   return { getBoard, dropToken, printBoard };
// }

// function Cell() {
//   let value = 0;

//   const addToken = (player) => {
//     value = player;
//   };

//   const getValue = () => value;

//   return {
//     addToken,
//     getValue
//   };
// }


// function GameController(playerOneName, playerTwoName){

//   const board = Gameboard();


//   const players = [
//     {
//       name: playerOneName,
//       token: 1
//     },
//     {
//       name: playerTwoName,
//       token: 2
//     }
//   ];

//   let activePlayer = players[0];

//   const switchPlayerTurn = () => {
//     activePlayer = activePlayer === players[0] ? players[1] : players[0];
//   };
//   const getActivePlayer = () => activePlayer;

//   const printNewRound = () => {
//     board.printBoard();
//     console.log(`${getActivePlayer().name}'s Turn.`);
//   };

//   const playRound = (column) => {
//     console.log(
//       `Dropping ${getActivePlayer().name}'s token into column ${column}...`
//     );
//     board.dropToken(column, getActivePlayer().token);

//     /*  This is where we would check for a winner and handle that logic,
//         such as a win message. */

//     switchPlayerTurn();
//     printNewRound();
//   };

//   printNewRound();

//   return {
//     playRound,
//     getActivePlayer,
//     getBoard: board.getBoard
//   };
// }

// function ScreenController() {
//   const clearScreen = ()=> {
//        let div = document.querySelector('.container');
//        let div2 = document.querySelector('.flex-header');
//        let div3 = document.querySelector('.flex-container');
//        div.style.display =  "block";
//        div2.style.display = "block";
//        div3.style.display = "block";
//   }

//   clearScreen();

//   const game = GameController();
//   const playerTurnDiv = document.querySelector('.turn');
//   const boardDiv = document.querySelector('.board');

//   const updateScreen = () => {
//     // clear the board
//     boardDiv.textContent = "";

//     // get the newest version of the board and player turn
//     const board = game.getBoard();
//     const activePlayer = game.getActivePlayer();

//     // Display player's turn
//     playerTurnDiv.textContent = `${activePlayer.name}'s turn...`

//     // Render board squares
//     board.forEach(row => {
//       row.forEach((cell, index) => {
//         // Anything clickable should be a button!!
//         const cellButton = document.createElement("button");
//         cellButton.classList.add("cell");
//         // Create a data attribute to identify the column
//         // This makes it easier to pass into our `playRound` function 
//         cellButton.dataset.column = index
//         cellButton.textContent = cell.getValue();
//         boardDiv.appendChild(cellButton);
//       })
//     })
//   }

//   // Add event listener for the board
//   function clickHandlerBoard(e) {
//     const selectedColumn = e.target.dataset.column;
//     // Make sure I've clicked a column and not the gaps in between
//     if (!selectedColumn) return;
    
//     game.playRound(selectedColumn);
//     updateScreen();
//   }
//   boardDiv.addEventListener("click", clickHandlerBoard);

//   // Initial render
//   updateScreen();

//   // We don't need to return anything from this module because everything is encapsulated inside this screen controller.
// }

// ScreenController();