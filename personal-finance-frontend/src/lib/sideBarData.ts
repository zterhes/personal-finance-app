import overview from "../assets/icons/icon-nav-overview.svg";
import transactions from "../assets/icons/icon-nav-transactions.svg";
import budgets from "../assets/icons/icon-nav-budgets.svg";
import pots from "../assets/icons/icon-nav-pots.svg";
import recurringBills from "../assets/icons/icon-nav-recurring-bills.svg";

const sideBarData = [
  {
    name: "Overview",
    path: "/",
    icon: overview,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: transactions,
  },
  {
    name: "Budgets",
    path: "/budgets",
    icon: budgets,
  },
  {
    name: "Pots",
    path: "/pots",
    icon: pots,
  },
  {
    name: "Recurring Bills",
    path: "/recurring-bills",
    icon: recurringBills,
  },
];

export default sideBarData;
