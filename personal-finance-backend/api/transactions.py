from flask import Flask, request, jsonify
from flask_restx import Resource
from server.instance import server
from service.transaction_service import TransactionService
from lib.auth.AuthProvider import authProvider


transaction_service = TransactionService()

app = server.app
api = server.api


@app.before_request
def before_request():
    request.clerk = authProvider.authenticate_session()


@api.route("/transactions")
class Transactions(Resource):
    def get(self):
        session = request.clerk
        return transaction_service.get_transactions()
