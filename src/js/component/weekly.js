import { Context } from "../store/appContext";
import React, { Component, useState, useEffect, useContext } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const Weekly_Report = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState([...store.expenses.map(item => item.value)]);
	let current = store.income - actions.sum();
	let weekly = actions.weeklyStatement();
	const [chartData, setChartData] = useState({});
	const chart = () => {
		setChartData({
			labels: ["Week2", "Week4", "Week6", "Week8", "Week10", "Week12", "Week14"],
			datasets: [
				{
					label: "MY first Chart",
					data: [...data],
					backgroundColor: [
						"rgb(255,255,255,1)",
						"rgb(255,255,0,0.1)",
						"rgb(0,255,255,0.1)",
						"rgb(0,255,255,0.2)",
						"rgb(0,0,255,0.2) ",
						"rgb(0,0,255,0.3)",
						"rgb(0,0,255,0.5)"
					],
					borderWidth: 4
				}
			]
		});
	};
	useEffect(() => {
		chart();
	}, []);
	return (
		<div className="chartContainer">
			<div>
				<h1>Your Bi-weekly report</h1>
			</div>
			<h1> {weekly}</h1>

			<div style={{ height: "500px", width: "500px" }}>
				<Bar
					data={chartData}
					options={{
						responsive: true
					}}
				/>
			</div>
		</div>
	);
};

export default Weekly_Report;
