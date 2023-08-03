//Create array to store userName data
let userName = [];


function IntroController(){ //Control's intro gameflow 



//Start of new IntroGameController module and factory functions
const getPlayer = (id1, id2, id3, id4, id5, id6, id7, playerText, playerAttribute, inputPlaceholder)=> {

  const intro = ()=> {
    let div = document.querySelector(id1);  //flex-header
    let div2 = document.querySelector(id2); //turn
    let div3 = document.querySelector(id3); //flex-container
    let div4 = document.querySelector(id4); //container
    let div5 = document.querySelector(id5); //board
    // div.style.display = "none";
    // div2.style.display = "none";
    // div3.style.display = "none";
    div.remove();
    div2.remove();
    div3.remove();
    div4.remove();
    div5.remove();
  }

    const userInterface = ()=> {
      let mainDiv = createFlexContainer("div", "800", "400");
      mainDiv.style.borderRadius = "50%";
      mainDiv.setAttribute("id", id6); //animateBorder
      let text = createForm();
      let rootElement = appendElements(mainDiv, text);
      let main = document.body;
      main.style.display = "flex";
      main.style.justifyContent = "center";
      main.style.alignContent = "center";
      main.appendChild(rootElement);
    }
    
    //Find another way to animate border, which will stop the animations after the second submit button is clicked
    const spinningBorder = ()=> {
        let div = document.querySelector(id7);
        topBorder(div);
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
    }
    
    const getInputData = ()=> {
        let form = document.querySelector("form");
        form.addEventListener("submit", (e)=> {
          e.preventDefault();
          const data = new FormData(form);
          const obj = Object.fromEntries(data);
          storeDataObj(obj["userName"]);
          clearTimer();
          clearScreen2();
          player2();
        })
        return;
    }
    const getInputData2 = ()=> {
      let form = document.querySelector("form");
      form.addEventListener("submit", (e)=> {
        e.preventDefault();
        const data = new FormData(form);
        const obj = Object.fromEntries(data);
        storeDataObj(obj["userName"]);
        clearTimer();
        clearScreen2();

        if(userName.length === 2){
          restoreDom();
        }

      })
      return;
  }

  
   const createFlexContainer = (type, width, height)=> {
    const container = document.createElement(type);
      container.style.width = `${width}px`;
      container.style.height = `${height}px`;
      container.style.display = "flex";
      container.style.justifyContent = "center";
      container.alignItems = "center";
      
      return container;
    }
  

   const appendElements = (element, elementAppended)=> {
    element.appendChild(elementAppended);
      return element;
   } 
      
   const createForm = ()=> {
      let div = createFlexContainer("div", "800", "400");
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
        let text = document.createTextNode(playerText);
        let input = document.createElement('input');
        input.style.width = "293.17px"
        input.name = "userName";
        button.type = "submit";
        button.style.width = "70px";
        button.innerText = "Submit";
        h1.appendChild(text);
        form.appendChild(input);
        form.appendChild(button);
        input.setAttribute("id", playerAttribute);
        input.placeholder = inputPlaceholder;
        appendElements(div, h1);
        appendElements(div, form);
        return div;
    }
  
   const addBorder = (element, value)=> {
    element.style.border = value;
    //This code below would not work
    //element.style.identifier = value
    //This is because identifiers are not datatypes they cannot be manipulated by the program
    return element;
   }

   const removeAnimateDiv = ()=>{
     const div = document.getElementById('#animateBorder');
     div.remove();
   }

   const formStatus = ()=>{
      let form = document.querySelector("form");
      let submitted = form.addEventListener("click", (e)=>{
        console.log(e.currentTarget);
      })
      return submitted;
   }

   const storeDataObj = (obj)=> {
     userName.push(obj);
   }

   const clearScreen2 = ()=>{
     const div = document.getElementById("animateBorder");
     div.remove();
   }

   const clearScreenTransition = ()=>{
    const div = document.getElementById("animateBorder");
    div.remove();
   }

   const restoreDom = ()=>{
     const div = document.body;
     const div1 = document.createElement("div");
     const div2 = document.createElement('div');
     const div3 = document.createElement('div');
     
     div1.classList.add("container");
     div2.classList.add("turn");
     div3.classList.add("board");
    
     div.appendChild(div1);
     div1.appendChild(div2);
     div1.appendChild(div3);

     callScreenController();
   }
   
   return{intro, userInterface, getInputData, getInputData2, createFlexContainer, appendElements, createForm, addBorder, removeAnimateDiv, formStatus, storeDataObj, clearScreen2, spinningBorder, clearScreenTransition, restoreDom};

}

//Module to control game flow for the first player
const player1 = ()=>{
  const firstPlay = getPlayer(".flex-header", ".turn", ".flex-container", ".container", ".board", "animateBorder", "#animateBorder","Player One, Enter In Your Name: ", "player1", "Player 1 Name: " );
  firstPlay.intro();
  firstPlay.userInterface();
  let interval = setInterval(firstPlay.spinningBorder, 1000);
  firstPlay.getInputData();
  setTimeout(()=>{
    clearTimer(interval)
  }, 4000);
}

const player2 = ()=> {
  const secondPlay = getPlayer(".flex-header", ".turn", ".flex-container", ".container", ".board", "animateBorder", "#animateBorder","Player Two, Enter In Your Name: ", "player2", "Player 2 Name: " );
  secondPlay.userInterface();
  let interval2 = setInterval(secondPlay.spinningBorder, 1000);
  secondPlay.getInputData2();
  setTimeout(()=>{
    clearTimer(interval2)
  }, 4000);
}

player1();
}


function callScreenController(){
  ScreenController();
}

const clearTimer = (intervalVariable)=>{
  clearInterval(intervalVariable);
}



function Gameboard() {
  const rows = 6;
  const columns = 7;
  const board = [];

  for (let i = 0; i < rows; i++) {
      board[i] = [];
    for (let j = 0; j < columns; j++) {
     board[i].push(Cell());
      
    }
  }

  const getBoard = () => board;


  const dropToken = (column, player) => {
    
    /*board.filter takes a call back function loops through every row of the array and sees if the row[column]'s value is set to zero, if it is then the .map method
    is called for the empty cell and it also takes a call back function which gets every single cell that passed this test condition and returns the element to the
    available cells array*/
    const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);
    
  


    if (!availableCells.length) return;
 

    const lowestRow = availableCells.length - 1; 
    board[lowestRow][column].addToken(player);
  };

  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()));
    //console.log(boardWithCellValues);
  };

  return { getBoard, dropToken, printBoard };
}



function Cell() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue
  };
}


function GameController(playerOneName, playerTwoName){
  const board = Gameboard();


  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }
  ];


  let activePlayer = players[0];
  console.log(activePlayer.name);

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;
  

  const printNewRound = () => {
    board.printBoard();
    //console.log(`${getActivePlayer().name}'s Turn.`);
  };


  function checkSameValInColumn(arr, lowestRow ){
    let counter = 0;
    let currentRow = (lowestRow + 1);
    let rowsLeft = (arr.length - currentRow);
    //Iterate through each column
    for(let column = 0; column < arr[0].length; column++){ //There are 7 columns 
      //Iterate through each row
     
        for(let row = currentRow; row <= arr.length; row++){ //On row 2 rowsLeft = 6 -2 = 4; row++
                                                        
          console.log(`The current row we are on is => ${row}`);
          console.log(`The number of rows left is => ${arr.length - row}`);
          console.log(" ");
        
         
            console.log(arr[row][column].getValue());
          if(arr[row][column].getValue() === 2) //If the current row and column is not equal  arr[2][0] = 2 //So arr[2][0] is not equal to arr[0][0] return false
          {
            counter++;
            console.log(counter);
              if(counter === 4)
               {
              alert(`${getActivePlayer().name} is the Winner`);
               }
          }
          else if(arr[row][column] != 2){
            counter--;
            return;
          }
          
        }
      
     
    }

    
  }

  const playRound = (column) => {
  
    
    let keyVal = 4;
    let holdNum = 0;
    let value = 2;
    let counter = 0;
    let playerTwoCounter = 0;

    board.dropToken(column, getActivePlayer().token);

    /*  This is where we would check for a winner and handle that logic,
        such as a win message. */
    let winBoard = board.getBoard();
    // let playerTwoCounter = 0;
    // let value = 2;
    const availableCells = winBoard.filter((row) => row[column].getValue() === 0).map(row => row[column]);
    const lowestRow = availableCells.length - 1;


    //Loop through all the rows starting at the lowest row or highest row
    //Set a counter variable that increments everytime it comes across a value of 2
    //Decrement counter variable if it comes across a value other than 2
    //If the counter reaches the number four before the loop terminates, that means a player has won the game
    if(getActivePlayer().token === 2){
      winBoard.forEach(row=>{
        row.forEach((cell,index)=> {
          if(cell.getValue() === value){
            playerTwoCounter++;
            if(playerTwoCounter === 4){
              checkSameValInColumn(winBoard, lowestRow);
            }
          }
        })
      })
    }
    



    
    


         

      
    

    switchPlayerTurn();
    printNewRound();
  
    };
  printNewRound();
  

  return {
    playRound,
    getActivePlayer,
    getBoard: board.getBoard
  };
}


function ScreenController() { 
 
  let [firstName, secondName] = userName;
  const game = GameController(firstName, secondName);
  
  const playerTurnDiv = document.querySelector('.turn');
  playerTurnDiv.style.fontSize = "35px";
  playerTurnDiv.style.display = "flex";
  playerTurnDiv.style.justifyContent = "center";
  const boardDiv = document.querySelector('.board');

  const updateScreen = () => {
    // clear the board
    boardDiv.textContent = " ";
    

    // get the newest version of the board and player turn
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();
  
    // Display player's turn
    playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;


    // Render board squares
    board.forEach(row => {
      row.forEach((cell, index) => {
        // Anything clickable should be a button!!
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        // Create a data attribute to identify the column
        // This makes it easier to pass into our `playRound` function 
        cellButton.dataset.column = index
        cellButton.textContent = cell.getValue();
        boardDiv.appendChild(cellButton);
      })
    })
  }

  // Add event listener for the board
  function clickHandlerBoard(e){
    const selectedColumn = e.target.dataset.column;
    //console.log(selectedColumn);
    // Make sure I've clicked a column and not the gaps in between
    if (!selectedColumn) return;
    
    game.playRound(selectedColumn);
    updateScreen();
  }
  
  boardDiv.addEventListener("click", clickHandlerBoard);

  // Initial render
  updateScreen();

  // We don't need to return anything from this module because everything is encapsulated inside this screen controller.

}



IntroController();




