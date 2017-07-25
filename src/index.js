import React from 'react';
import ReactDOM from 'react-dom';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';



const data = [
    {name:'Groceries', Budgeted:400,Val:300},
    {name:'Gas', Budgeted:200,Val:220},

];

const MonthlyChart = (props) =>{
    return(
       <BarChart width={600} height={300} data= {props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Bar dataKey="Budgeted" fill="#8884d8" />
            <Bar dataKey="Val" fill="#82ca9d" />
            </BarChart>
    )
}
class MonthlyPanel extends React.Component{
    state = {
        isActive:'',
    }
    render(){
        return(
            <div>
            <h1>Nov</h1>
            <MonthlyChart data = {data} />
            </div>
        )
    }
}



ReactDOM.render(
    <MonthlyPanel  />, document.getElementById('root'));