class Transaction:
    def __init__(self, avatar, name, category, date, amount, recurring):
        self.avatar = avatar
        self.name = name
        self.category = category
        self.date = date
        self.amount = amount
        self.recurring = recurring

    def to_dict(self):
        return {
            "avatar": self.avatar,
            "name": self.name,
            "category": self.category,
            "date": self.date,
            "amount": self.amount,
            "recurring": self.recurring,
        }
