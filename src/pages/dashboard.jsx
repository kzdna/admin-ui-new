import MainLayout from "../components/Layout/MainLayout";
import Card from "../components/elements/Card";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpComingBill from "../components/Fragments/CardUpComingBill";
import CardRecentTransaction from "../components/Fragments/CardUpComingBill";
import CardStatic from "../components/Fragments/CardStatic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown"

function dashboard() {
    return (
        <>
        <MainLayout>
        <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">
          <div className="sm:col-span-4">
            <CardBalance />
          </div>
          <div className="sm:col-span-4">
            <CardGoal/>
          </div>
          <div className="sm:col-span-4">
            <CardUpComingBill/>
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction/>
          </div>
          <div className="sm:col-span-8">
            <CardStatic/>
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown/>
          </div>
        </div>
      </MainLayout>
        </>
    );
}

export default dashboard;