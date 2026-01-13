import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layout/MainLayout";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import { getExpenses } from "../services/authService";
import CircularProgress from '@mui/material/CircularProgress';
import Icon from "../components/Elements/Icon"; 

function ExpensesPage() {
  const [expenses, setExpenses] = useState([]); 
  const [loading, setLoading] = useState(true);

  const mockExpenses = [
    {
      id: 1,
      category: "Housing",
      amount: "250",
      percentage: "15",
      arrow: <Icon.ArrowUp size={16} className="text-special-red" />, 
      icon: <Icon.House />, 
      details: [
        { name: "House Rent", date: "17 May 2023", amount: "230" },
        { name: "Parking", date: "17 May 2023", amount: "20" }
      ]
    },
    {
      id: 2,
      category: "Food",
      amount: "350",
      percentage: "08",
      arrow: <Icon.ArrowDown size={16} className="text-special-green" />,
      icon: <Icon.Food />, 
      details: [
        { name: "Grocery", date: "17 May 2023", amount: "230" },
        { name: "Restaurant Bill", date: "17 May 2023", amount: "120" }
      ]
    },
    {
      id: 3,
      category: "Transportation",
      amount: "50",
      percentage: "12",
      arrow: <Icon.ArrowDown size={16} className="text-special-green" />,
      icon: <Icon.Transport />, 
      details: [
        { name: "Taxi Fare", date: "17 May 2023", amount: "30" },
        { name: "Metro Card Bill", date: "17 May 2023", amount: "20" }
      ]
    },
    {
      id: 4,
      category: "Entertainment",
      amount: "80",
      percentage: "15",
      arrow: <Icon.ArrowDown size={16} className="text-special-green" />,
      icon: <Icon.Gamepad />, 
      details: [
        { name: "Movie Ticket", date: "17 May 2023", amount: "15" },
        { name: "Video Game", date: "17 May 2023", amount: "65" }
      ]
    },
    {
      id: 5,
      category: "Shopping",
      amount: "420",
      percentage: "25",
      arrow: <Icon.ArrowUp size={16} className="text-special-red" />,
      icon: <Icon.Shopping />, 
      details: [
        { name: "Polo Shirt", date: "17 May 2023", amount: "20" },
        { name: "Keyboard", date: "17 May 2023", amount: "400" }
      ]
    },
    {
      id: 6,
      category: "Others",
      amount: "650",
      percentage: "23",
      arrow: <Icon.ArrowUp size={16} className="text-special-red" />,
      icon: <Icon.Other />, 
      details: [
        { name: "Project Fee", date: "17 May 2023", amount: "100" },
        { name: "Gift", date: "17 May 2023", amount: "550" }
      ]
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getExpenses();
        const dataResult = response.data && response.data.length > 0 ? response.data : mockExpenses;
        setExpenses(dataResult); 
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        setExpenses(mockExpenses); 
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  return (
    <MainLayout type="expenses">
      <div className="p-4 sm:p-6 w-full">
        <h1 className="text-xl font-bold mb-6 text-gray-02">Expenses Comparison</h1>
        
        {loading ? (
          <div className="flex flex-col justify-center items-center h-[60vh] text-primary">
            <CircularProgress color="inherit" size={60} />
            <p className="mt-4 font-medium text-primary">Loading Data</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expenses.map((item) => (
              <CardExpenseBreakdown key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default ExpensesPage;