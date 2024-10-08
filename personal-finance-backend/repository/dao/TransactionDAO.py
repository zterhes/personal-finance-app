import json
from repository.entity.Transaction import Transaction


class TransactionDAO:
    def __init__(self):
        self.transactions = []
        f = open("data.json")
        data = json.load(f)
        for i in data["transactions"]:
            self.transactions.append(
                Transaction(
                    i["avatar"],
                    i["name"],
                    i["category"],
                    i["date"],
                    i["amount"],
                    i["recurring"],
                )
            )
        f.close()

    def get_transactions(self):
        return self.transactions
