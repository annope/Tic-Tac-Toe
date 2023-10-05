const App = {
    //All of ours selected HTML elements
    $: {
        menu: document.querySelector('[data-id="menu"]'),
        menuItems: document.querySelector('[data-id="menu-items"]'),
        resetBtn: document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
        squares: document.querySelectorAll('[data-id="square"]'),

    },

    state: {
        currentPlayer: 1,
        moves: [],
    },

    init() {
        App.registerEventListeners()
    },

    registerEventListeners(){
        //Done
        App.$.menu.addEventListener("click", (event) =>{
            App.$.menuItems.classList.toggle("hidden");
       });

       //Todo
        App.$.resetBtn.addEventListener('click', event => {
            console.log('Reset the game')
        });
        
        //Todo
        App.$.newRoundBtn.addEventListener('click', event => {
            console.log('Add a new round')
        });

        //Todo
        App.$.squares.forEach((square) =>{
            square.addEventListener("click", (event) => {
                console.log('Square with id ${event.target.id} was clicked');
                console.log('Current player is ${App.state.currentPlayer}');

                //Check if there is already a play, if so, return early
                if (square.hasChildNodes()){
                    return;
                }

                //Determine which player icon to add to the square
                const currentPlayer = App.state.currentPlayer

                const icon = document.createElement("i");

                if(currentPlayer === 1){
                    icon.classList.add("fa-solid", "fa-x", "yellow");
                } else {
                    icon.classList.add("fa-solid", "fa-o", "turquoise");
                }

                App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;

                
                

                square.replaceChildren(icon);
                //Check if there is a winner or tie game
                const winningPatterns = [
                    [1, 2, 3],
                    [1, 5, 9],
                    [1, 4, 7],
                    [2, 5, 8],
                    [3, 5, 7],
                    [3, 6, 9],
                    [4, 5, 6],
                    [7, 8, 9],
                ];
            });
        });

    },
};

window.addEventListener('load', App.init);




