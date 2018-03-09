import React from "react";
import ReactDOM from "react-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const Main = () => {
  return (
    <div>
      <Login />

      <Dashboard />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
