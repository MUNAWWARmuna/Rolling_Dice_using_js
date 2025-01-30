function rollDice() {
    const diceElement = document.getElementById('dice');
    const resultElement = document.getElementById('result');
    resultElement.textContent = "Rolling..........";

    const randomNumber = Math.floor(Math.random() * 6) + 1;


    diceElement.style.animation = 'none';
    void diceElement.offsetWidth;
    diceElement.style.animation = 'roll 1s ease-out';

    setTimeout(() => {

        const diceFaces = {

            1: '⚀',

            2: '⚁',

            3: '⚂',

            4: '⚃',

            5: '⚄',

            6: '⚅'

        };


        diceElement.textContent = diceFaces[randomNumber];

        resultElement.textContent = `You rolled: ${randomNumber}`;

    }, 1000);
}