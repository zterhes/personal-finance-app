import data from "../data.json";

function fetchTransactions({
  queryKey,
}: {
  queryKey: [string, { userId: string }];
}) {
  const [_key, { userId }] = queryKey;
  console.log("userId", userId);
  let id = 1;
  let temp;
  return data.transactions.map((transaction) => {
    transaction.avatar = "." + transaction.avatar;
    temp = { id, ...transaction };
    id++;
    return temp;
  });
}

export { fetchTransactions };
