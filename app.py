from boggle import Boggle
from flask import Flask, render_template, redirect, session, request, jsonify

app = Flask(__name__)
app.config['SECRET_KEY'] = "soccer"

boggle_game = Boggle()

@app.route('/')
def home():

    board = boggle_game.make_board()
    session['board'] = board
    return render_template('home.html', board=board)

@app.route("/check-word")
def check_word():
    """Check if word is in dictionary."""

    guess = request.args["guess"]
    board = session["board"]
    response = boggle_game.check_valid_word(board, guess)

    return jsonify({'result': response})

#handle answers, called on form submit