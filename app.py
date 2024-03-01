from boggle import Boggle
from flask import Flask, render_template, redirect, session

app = Flask(__name__)
app.config['SECRET_KEY'] = "soccer"

boggle_game = Boggle()

@app.route('/')
def home():
    boggle_class = Boggle()
    board = boggle_class.make_board()
    session['board']=board
    return render_template('home.html', board=board)

#handle answers, called on form submit