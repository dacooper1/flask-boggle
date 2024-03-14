// const $guess = $(".guess")
// let guess = $guess.val()
// const guessFormData = new FormData()
// guessFormData.append("guess", guess)

async function captureGuess(e){
    e.preventDefault();
    guess = ($(".guess").val())
    const res = await axios.get('/check-word', {results: {guess: guess}});
    if (res.data.result == "not-word"){
        console.log(`${guess} is not a word.` )
    } else if (res.data.result == "not-on-board"){
        console.log(`${guess} is not ta valid word on this board.`)
    } else {
        console.log(`${guess} was added to the board`)
    }
}


$(".new-guess").on("sumbit", captureGuess)

// const guessObject = function(captureGuess){
//     const guessData = {}
//     guessData.append("guess", captureGuess)
//     return guessData
// }

// async function sendGuess(guessObject) {
//     const res = await axios.get('/check-word', guessObject)
//     console.log(res)
// }

