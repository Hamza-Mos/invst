from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# Members API Route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug = True)
