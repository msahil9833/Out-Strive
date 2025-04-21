import React from "react";
import { BsArrowRight } from "react-icons/bs";

const dummyData = [
  { name: "Revenue", number: "₹9,34,945", link: "#" },
  { name: "Expenses", number: "₹4,21,300", link: "#" },
  { name: "Profit", number: "₹5,13,645", link: "#" },
  { name: "Users", number: "12,340", link: "#" },
  { name: "Orders", number: "1,230", link: "#" },
  { name: "Refunds", number: "₹23,000", link: "#" },
  { name: "Growth", number: "12.5%", link: "#" },
  { name: "Visits", number: "89,500", link: "#" },
];

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {dummyData.map((item, i) => (
        <Card key={i} name={item.name} number={item.number} link={item.link} />
      ))}
    </div>
  );
};

export default Dashboard;

const Card = ({ name, number, link }) => {
  return (
    <div className="flex flex-col justify-between p-4 border rounded-2xl shadow-md w-64 h-36 bg-white border-gray-200 hover:border-blue-600">
      <div>
        <p className="text-gray-500 text-sm">{name}</p>
        <p className="text-2xl font-bold">{number}</p>
      </div>
      <div className="flex items-center justify-between">
        <a
          href={link}
          className="text-blue-600 font-semibold cursor-pointer flex items-center"
        >
          View all
        </a>
        <div className="bg-blue-600 text-white p-3 rounded-lg cursor-pointer">
          <BsArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};
