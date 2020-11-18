import { Context } from "../store/appContext";
import React, { Component, useState, useEffect, useContext } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

// const Monthly_Report = () => {
// 	const { store, actions } = useContext(Context);
// 	let current = store.income - actions.sum();
// 	return (
// 		<div>
// 			<div>
// 				<h1>Your Monthly report</h1>
// 			</div>
// 			<div>
// 				<p>you have {current}</p>

// 				<h1> {actions.monthlyStatement()}</h1>

// 				<b>chart showing how user is doing </b>

// 				<p>
// 					<b> second value </b>
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

const Monthly_Report = () => {
	const { store, actions } = useContext(Context);
	let current = store.income - actions.sum();
	let monthly = actions.monthlyStatement();
	const [chartData, setChartData] = useState({});
	const chart = () => {
		setChartData({
			labels: ["Week2", "Week4", "Week6", "Week8", "Week10", "Week12", "Week14"],
			datasets: [
				{
					label: "MY first Chart",
					data: [40, 62, 82, 92, 100, 120, 130],
					backgroundColor: [
						"rgb(0,255,255,1)",
						"rgba(255,255,0)",
						"rgba(75,192,192,0.6)",
						"rgb(0.255.0)",
						"rgb(255,215,0)"
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
				<h1>Your Monthly report</h1>
			</div>
			<h1> {monthly}</h1>

			<div style={{ height: "500px", width: "500px" }}>
				<Line
					data={chartData}
					options={{
						responsive: true
					}}
				/>
			</div>
		</div>
	);
};

export default Monthly_Report;
