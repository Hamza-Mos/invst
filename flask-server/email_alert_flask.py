from flask import Flask, request, jsonify
from email.message import EmailMessage
import ssl
import smtplib
import yfinance as yf
import time
import matplotlib.pyplot as plt
import pandas as pd
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

# Members API Route


@app.route("/members", methods=["POST"])
def members():


    
    return {}


#if __name__ == "__main__":#
    #app.run(debug=True)#


# Automating Emails

# Flask Imports

# Init Flask
app = Flask(__name__)
CORS(app)

# ticker = input('Ticker Symbol: ')
# target_sell_price = int(input('Target Sell Price: '))


def get_current_price(symbol):
    ticker = yf.Ticker(symbol)
    todays_data = ticker.history(period='1min')
    return todays_data['Close'][0]


def emailing(ticker, target_sell_price):
    if get_current_price(ticker) > target_sell_price:

        email_sender = 'sourish10das@gmail.com'
        password = 'bvzpghjfblusqodp'
        # We have to receive this from firebase
        email_receiver = input('Recipient Email: ')

        # Set the subject and body of the email
        subject = input('ALERT')
        body = input("""Body: """)

        em = EmailMessage()
        em['From'] = email_sender
        em['To'] = email_receiver
        em['Subject'] = subject
        em.set_content(body)

        # Add SSL (layer of security)
        context = ssl.create_default_context()

        # Log in and send the email
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_sender, password)
            smtp.sendmail(email_sender, email_receiver, em.as_string())


@app.route("/members", methods=["POST"])
def members():
    ticker = request.json['ticker']
    target_sell_price = request.json['target_sell_price']
    email = request.json['email']

    return ticker  # Change this to the fucntions we are trying to return


if __name__ == "__main__":
    app.run(debug=True)
