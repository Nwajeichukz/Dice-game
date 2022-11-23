let scores , roundScore, activePlayer, playing;
    init()
    
document.getElementById('roll_dice').addEventListener('click', () => {
    if(playing){
        // random number
        dice = Math.floor(Math.random() * 6) + 1;

        //  update Ui
        DomDice = document.querySelector('.img');
        DomDice.style.display = 'block';
        DomDice.src = 'dice-'+ dice +'.jpeg';
        
        if(dice !== 1 ){
            // adding roundscore too the random number
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }else {
            nextPlayer();
        }
    
    }    
})


document.getElementById('hold').addEventListener('click', () => {
    if(playing){
        // adding roundScore too the final score
        scores[activePlayer] += roundScore;

        // updating the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        let winningScore = 0;
        const input = document.querySelector('.input_field').value;

        if(input){
            winningScore = input;

        }else {
            winningScore = 100
        }

        // check if the answer is correct
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#player-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice').style.display = 'none';
            playing = false;
    
        }else {
            nextPlayer();
        }
    
    }
})


const nextPlayer = () => {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-' + activePlayer).textContent = '0';
    document.getElementById('dice').style.display = 'none';

    document.querySelector('.player_panel-0').classList.toggle('active')
    document.querySelector('.player_panel-1').classList.toggle('active')

}

document.getElementById('new_btn').addEventListener('click', init)


const init = () => {

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    playing = true;

document.getElementById('dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

   
document.getElementById('player-0').textContent = 'player 1'; // chnaging back the player names from WINNER! too player 1 and player 2
document.getElementById('player-1').textContent = 'player 2';


document.querySelector('.player_panel-0').classList.remove('active'); // too remove the active player class on each player wen the game is reset
document.querySelector('.player_panel-1').classList.remove('active'); // too remove the active player class on each player wen the game is reset

document.querySelector('.player_panel-0').classList.add('active'); // too add the active player to player 1 wen the game is reset, so in the case were the player 2 wins the game and the game is reset we wouldnt be having two active player 


}