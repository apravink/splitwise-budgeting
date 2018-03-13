import React from "react";
import ReactDOM from "react-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
