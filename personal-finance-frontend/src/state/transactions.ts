import data from "../data.json";

function fetchTransactions({ pageParam }: { pageParam: number }) {
  const itemsPerPage = 10;
  const transactions = data.transactions;

  const currentItems = transactions.slice(
    (pageParam - 1) * itemsPerPage,
    pageParam * itemsPerPage
  );

  currentItems.forEach(
    (transaction) => (transaction.avatar = "." + transaction.avatar)
  );

  return currentItems;
}

function fetchBudgetNames() {
  return data.budgets.map((budget) => budget.category);
}

export { fetchTransactions, fetchBudgetNames };
