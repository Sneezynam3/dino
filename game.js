document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const startBtn = document.querySelector('.start');

    const width = 20;
    let currentIndex = 0;
    let appleIndex = 0;
    let currentSnake = [2, 1, 0];
    let direction = 1
    let speed = 0.9
    let intervalTime = 0

    //to start/restart the game
    function startGame () {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        //random apple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2, 1, 0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    //function to deal with all the posible move outcomes of the snake
    function moveOutcomes() {
        //deals with the snake hitting the boarder and itself
        if(
            (currentSnake[0] + width >= (width * width) && direction === width ) || //if snake hits bottom
            (currentSnake[0] % width === width -1 && direction === 1) || //if snake hits right wall
            (currentSnake[0] % width === 0 && direction -1) || //if snake hits left wall
            (currentSnake[0] - width < 0 && direction === - width) //if snake hits the top 
            squares[currentSnake[0] + direction].classList.contains('snake') //if snake goes into itself
        ) {
            return clearInterval(interval)
        }

    }
    

    //deals with the snake getting the apple

    //assign function to keycodes
    function control(e) {
        squares[currentIndex].classList.remove('snake')

        if (e.keyCode === 39) {
            direction = 1
        } else if (e.keyCode === 38) {
            direction = -width
        } else if (e.keyCode === 37) {
            direction = -1  
        } else if (e.keyCode === 40) {
            direction = +width
        }
    }

    document.addEventListener('keyup', control)


})