import json
from repository.dao.TransactionDAO import TransactionDAO
from flask import jsonify


class TransactionService:
    def __init__(self):
        self.dao = TransactionDAO()

    def get_transactions(self):
        transactions = self.dao.get_transactions()
        transactions = [i.to_dict() for i in transactions]
        return transactions
