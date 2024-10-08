from repository.dao.TransactionDAO import TransactionDAO


class TransactionService:
    def __init__(self):
        self.dao = TransactionDAO()

    def get_transactions(self):
        transactions = self.dao.get_transactions()
        transactions = [i.to_dict() for i in transactions]
        return transactions
