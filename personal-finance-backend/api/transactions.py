from flask import Flask
from flask_restx import Resource
from server.instance import server
from service.transaction_service import TransactionService

transaction_service = TransactionService()

app = server.app
api = server.api


@api.route("/transactions")
class Transactions(Resource):
    def get(self):
        return transaction_service.get_transactions()
