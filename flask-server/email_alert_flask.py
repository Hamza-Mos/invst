from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

# Members API Route
@app.route("/members", methods=["GET"])
def members():
    return {}

if __name__ == "__main__":
    app.run(debug=True)
