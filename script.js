const game = () => {
    let playerScore = 0;
    let computeScore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const options = document.querySelector('.options');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
        });
    };

    //Is call the inner function
}