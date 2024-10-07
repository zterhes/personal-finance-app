import json


class TransactionService:
    def __init__(self):
        f = open("data.json")
        data = json.load(f)
        for i in data["transactions"]:
            print(i)

        f.close()
