const guess = $('#guess').val()

const guessFormData = FormData()

$('body').on('click', function(){
    console.log('yes')
})

// guessFormData.append('word', guess)

// function sendGuess() {
//     const res = axios.post('http://127.0.0.1:5000/', guessFormData)
//     console.log(res);
//     console.log(guessFormData);
// }

// sendGuess();