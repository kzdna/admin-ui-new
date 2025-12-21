import MainLayout from "../components/Layout/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpComingBill from "../components/Fragments/CardUpComingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatic from "../components/Fragments/CardStatic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown"
import { transactions, bills, expensesBreakdowns } from "../data";

function dashboard() {
  console.log(transactions);
    return (
        <>
        <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance />
          </div>
          <div className="sm:col-span-4">
            <CardGoal/>
          </div>
          <div className="sm:col-span-4">
            <CardUpComingBill data={bills}/>
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions}/>
          </div>
          <div className="sm:col-span-8">
            <CardStatic/>
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns}/>
          </div>
        </div>
      </MainLayout>
        </>
    );
}

export default dashboard;