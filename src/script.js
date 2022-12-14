let main_board = document.getElementById('board');
var board = document.querySelectorAll('canvas');
let turn = document.getElementById('playerTurn');
let show_rounds = document.getElementById('rounds');
let show_winner = document.getElementById('winner');
let cases = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let player = {"1" : 'X', "2" : 'O'};
let rounds = 0;
let win = false;
let pve = false;
let turnP = false;
 
// # check board
(function state(){

    for (let i = 0; i < board.length; i++){
        board[i].addEventListener('click', function(){

            if (pve){
                if (!win){
                    if (cases[i] != 0){
                        console.log('Case déjà jouée ! Joueur');
                        turn.innerHTML = '<span style="color:red"; "font-weight:bold">Case déjà jouée !</span>';
                        turnP = false;
                    }
                    else{
                        turnP = true;
                        console.log('Le joueur a joué')
                        draw(board[i]);
                        cases[i] = 'X';
                        if (is_player_win() == player[1]){
                            turn.innerHTML = "Le joueur 1 gagne !";
                            turn.classList.add('winner');
                            win = true;
                        }                   
                    }
                    if (!win && turnP){
                        turn.innerHTML = "C'est au tour du "+'<span style="color:blue">Joueur 1</span>'
                        let j = findBestMove();
                        if (cases[j] != 0){
                            console.log('Case déjà jouée !');
                        }
                        else{
                            draw(board[j]);
                            console.log(rounds)
                            cases[j] = 'O';
                            if (is_player_win() == player[2]){
                                turn.innerHTML = "L'IA gagne !"
                                turn.classList.add('winner')
                                win = true
                            }
                        }
                        console.log(cases)
                    }
                    show_rounds.innerHTML = "Tour : "+rounds
                }
            }
            else {
                if (!win){
                    if (rounds%2 == 0){
                        if (cases[i] != 0){
                            console.log('Case déjà jouée !');
                            turn.innerHTML = '<span style="color:red"; "font-weight:bold">Case déjà jouée !</span>';
                        }
                        else{
                            draw(board[i]);
                            cases[i] = 'X';
                            turn.innerHTML = "C'est au tour du "+'<span style="color:red">Joueur 2</span>';
                            if (is_player_win() == player[1]){
                                turn.innerHTML = "Le joueur 1 gagne !";
                                turn.classList.add('winner');
                                win = true;
                            }                   
                        }
                    }
                    else{
                        if (cases[i] != 0){
                            console.log('Case déjà jouée !');
                            turn.innerHTML = '<span style="color:red"; "font-weight:bold">Case déjà jouée !</span>';
                        }
                        else{
                            draw(board[i]);
                            cases[i] = 'O';
                            turn.innerHTML = "C'est au tour du "+'<span style="color:blue">Joueur 1</span>'
                            if (is_player_win() == player[2]){
                                turn.innerHTML = "Le joueur 2 gagne !"
                                turn.classList.add('winner')
                                win = true
                            }
                        }
                    }
                    console.log(cases)
                } 
                show_rounds.innerHTML = "Tour : "+rounds
            } 
        })
    }
})()

// # method play

// function play(){

//     for (let i = 0; i < board.length; i++){
//         board[i].addEventListener('click', function(){

//         })
//     }
// }

// # check if winner

function is_player_win(){

    let row1 = document.querySelectorAll('#case1, #case2, #case3');
    let row2 = document.querySelectorAll('#case4, #case5, #case6');
    let row3 = document.querySelectorAll('#case7, #case8, #case9');
    let col1 = document.querySelectorAll('#case1, #case4, #case7');
    let col2 = document.querySelectorAll('#case2, #case5, #case8');
    let col3 = document.querySelectorAll('#case3, #case6, #case9');
    let diag1 = document.querySelectorAll('#case1, #case5, #case9');
    let diag2 = document.querySelectorAll('#case3, #case5, #case7');

    if (cases[0] == player[1] && cases[1] == player[1] && cases[2] == player[1]){
        console.log("Le joueur 1 gagne !");
        for (let casesToFilled of row1){
            casesToFilled.classList.add('winningCases')
        }
        return player[1]
    }
    else if (cases[0] == player[2] && cases[1] == player[2] && cases[2] == player[2]){
        console.log("Le joueur 2 gagne !")
        for (let casesToFilled of row1){
            casesToFilled.classList.add('winningCases')
        }
        return player[2]
    }
    if (cases[3] == player[1] && cases[4] == player[1] && cases[5] == player[1]){
        console.log("Le joueur 1 gagne !")
        for (let casesToFilled of row2){
            casesToFilled.classList.add('winningCases')
        }
        return player[1]
    }
    else if (cases[3] == player[2] && cases[4] == player[2] && cases[5] == player[2]){
        console.log("Le joueur 2 gagne !")
        for (let casesToFilled of row2){
            casesToFilled.classList.add('winningCases')
        }
        return player[2]
    }
    if (cases[6] == player[1] && cases[7] == player[1] && cases[8] == player[1]){
        console.log("Le joueur 1 gagne !")
        for (let casesToFilled of row3){
            casesToFilled.classList.add('winningCases')
        }
        return player[1]
    }
    else if (cases[6] == player[2] && cases[7] == player[2] && cases[8] == player[2]){
        console.log("Le joueur 2 gagne !")
        for (let casesToFilled of row3){
            casesToFilled.classList.add('winningCases')
        }
        return player[2]
    }
    if (cases[0] == player[1] && cases[3] == player[1] && cases[6] == player[1]){
        console.log("Le joueur 1 gagne !")
        for (let casesToFilled of col1){
            casesToFilled.classList.add('winningCases')
        }
        return player[1]
    }
    else if (cases[0] == player[2] && cases[3] == player[2] && cases[6] == player[2]){
        console.log("Le joueur 2 gagne !")
         for (let casesToFilled of col1){
            casesToFilled.classList.add('winningCases')
        }
        return player[2]
    }
    if (cases[1] == player[1] && cases[4] == player[1] && cases[7] == player[1]){
        console.log("Le joueur 1 gagne !")
        for (let casesToFilled of col2){
            casesToFilled.classList.add('winningCases')
        }
        return player[1]
    }
    else if (cases[1] == player[2] && cases[4] == player[2] && cases[7] == player[2]){
        console.log("Le joueur 2 gagne !")
        for (let casesToFilled of col2){
            casesToFilled.classList.add('winningCases')
        }
        return player[2]
    }
    if (cases[2] == player[1] && cases[5] == player[1] && cases[8] == player[1]){
        console.log("Le joueur 1 gagne !")
        for (let casesToFilled of col3){
            casesToFilled.classList.add('winningCases')
        }
        return player[1]
    }
    else if (cases[2] == player[2] && cases[5] == player[2] && cases[8] == player[2]){
        console.log("Le joueur 2 gagne !")
        for (let casesToFilled of col3){
            casesToFilled.classList.add('winningCases')
        }
        return player[2]
    }
    if (cases[0] == player[1] && cases[4] == player[1] && cases[8] == player[1]){
        console.log("Le joueur 1 gagne !")
        for (let casesToFilled of diag1){
            casesToFilled.classList.add('winningCases')
        }
        return player[1]
    }
    else if (cases[0] == player[2] && cases[4] == player[2] && cases[8] == player[2]){
        console.log("Le joueur 2 gagne !")
        for (let casesToFilled of diag1){
            casesToFilled.classList.add('winningCases')
        }
        return player[2]
    }
    if (cases[2] == player[1] && cases[4] == player[1] && cases[6] == player[1]){
        console.log("Le joueur 1 gagne !")
        for (let casesToFilled of diag2){
            casesToFilled.classList.add('winningCases')
        }
        return player[1]
    }
    else if (cases[2] == player[2] && cases[4] == player[2] && cases[6] == player[2]){
        console.log("Le joueur 2 gagne !")
        for (let casesToFilled of diag2){
            casesToFilled.classList.add('winningCases')
        }
        return player[2]
    }

    if (rounds >= 9){
        console.log("Match nul !")
        turn.innerHTML = "Match nul !"
        win = true
    }
}

// # change mode
function change_mode(){
    let mode = document.getElementById('mode');
    
    if (mode.innerHTML == 'PvP'){
        mode.innerHTML = 'PvE';
        pve = true
        
    }
    else{
        mode.innerHTML = 'PvP';
        pve = false
    }
    restart();
}

// # method restart
function restart(){

    for (let i = 0; i < board.length; i++){
        if (board[i].getContext){
            var ctx = board[i].getContext('2d');
            ctx.clearRect(0,0,100,100);
            rounds = 0;
            win = false
            cases = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            let filledCases = document.querySelectorAll('canvas[id^="case"]');
            for (let casesToEmpty of filledCases){
                casesToEmpty.classList.remove('winningCases');
            }
            show_rounds.innerHTML = "Tour : " + rounds;
            turn.innerHTML = ""
            turn.classList.remove('winner')
        }
    }
}

// # method draw
function draw(c){

    if (rounds%2 == 0){
        if (c.getContext){
            var ctx = c.getContext('2d');
            ctx.lineWidth = 5
            ctx.beginPath();
            ctx.strokeStyle = 'rgb(0, 0, 255)';
            ctx.moveTo(10,10);
            ctx.lineTo(90,90);
            ctx.moveTo(10,90);
            ctx.lineTo(90,10);
            ctx.stroke();
            rounds+=1;
            console.log("Tour : "+rounds);
        }
    }
    else{
        if (c.getContext){
        var ctx = c.getContext('2d');
        ctx.lineWidth = 5
        ctx.beginPath();
        ctx.strokeStyle ='rgb(255, 0, 0)';
        ctx.arc(50,50,40,0,2 * Math.PI);
        ctx.stroke();
        rounds+=1;
        console.log("Tour : "+rounds)
        }
    }
}

 //Partie IA
 let p = 'O';  //valeur donné a l'ordinateur dans le tableau de jeu
 let opponent = 'X'; //valeur donné au joueur dans le tableau de jeu
 let b = [[0,0,0],[0,0,0],[0,0,0]];
 for (let i = 0; i<3;i++){
     for(let j = 0; j<3;j++){
         b[i][j] = cases[i*3+j]
     }
 }    
 
 //la fonction qui va vous donner le coup que va jouer l'ordinateur
 function findBestMove(){
     for (let i = 0; i<3;i++){
        for(let j = 0; j<3;j++){
            b[i][j] = cases[i*3+j]
        }
    }    
     bestVal = -1000;
     bestMove = -1;
     
     for(let i =0 ; i<3 ;i++)
     {
         for(let j =0 ; j<3;j++){
             if(b[i][j] === 0)
             {
                 b[i][j]=p;
                 moveVal = minmax(b,0,false)
                 b[i][j]=0
                 if(moveVal > bestVal)
                 {
                     bestMove = i*3+j
                     bestVal = moveVal
                 }
             }
         }
     }
     console.log(bestVal)
     return bestMove;
 }

function minmax(b,depth,isMax)
{
//  console.log('minmax')

 score = evaluate(b);
 if(score === 10)
 {
     return score;
 }
 if(score === -10)
 {
     return score;
 }
 if(!b.flat().includes(0))
 {
    // console.log('eval 0')
     return 0;
 }
 
// console.log(isMax);
 if(isMax)
 {
     //console.log('ismax')
     best =-1000;
     for(let i=0;i<3;i++)
     {
         for(let j=0;j<3;j++)
         {
             if(b[i][j]===0){
                 b[i][j]=p;
                // console.log('ismax')
                 best = Math.max(best,minmax(b,depth +1 , !isMax));
                 //debugger;
                 b[i][j]=0;
             }
         }
     }
 }
 else
 {
      best =1000;
     for(let i=0;i<3;i++)
     {
         for(let j=0;j<3;j++)
         {
             if(b[i][j]===0){
                 b[i][j]=opponent;
                 //console.log(b,depth)
                //console.log('ismin')
                 //console.log(minmax(b,depth +1 , !isMax))
                 best = Math.min(best,minmax(b,depth +1 , !isMax));
                 //debugger;
                 b[i][j]=0;
             }
         }
     }
 }
 
 return best;

}

function evaluate(b)
{
 //console.log('ev',b)
 for(let row=0;row<3;row++)
 {
     if (b[row][0]===b[row][1] &&  b[row][1]===b[row][2]){
     if (b[row][0]===p){
        //console.log('fintrouvé',b);
             return +10;
         }
     else if (b[row][0]===opponent){
        //console.log('fintrouvé',b);
             return -10 }}
 }
 
 for(let col=0;col<3;col++)
 {
     if (b[0][col]===b[1][col] &&  b[1][col]===b[2][col]){
     if (b[0][col]===p){ 
            //console.log('fintrouvé',b);
             return +10
             }
     else if (b[0][col]===opponent) {
       // console.log('fintrouvé',b);
             return -10 ;}}
 }
 
   if (b[0][0]==b[1][1] && b[1][1]==b[2][2]){
       
     if (b[0][0]===p){
       // console.log('fintrouvé',b);
         return +10 ;}
     else if (b[0][0]===opponent){
       // console.log('fintrouvé',b);
         return -10 ;}}
 

 if (b[0][2]==b[1][1] && b[1][1]==b[2][0]){
 
     if (b[0][2]==p){ 
       // console.log('fintrouvé',b);
         return +10 }
     else if (b[0][2]==opponent){
       // console.log('fintrouvé',b);
         return -10 
     }}
 
 return 0  ;
}



