from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!hahaha"

@app.route("/users")
def users():
    users = [
        {
            "name":"zy"
        },
        {
            "name": "zy2"
        }
    ]
    return jsonify(users)
