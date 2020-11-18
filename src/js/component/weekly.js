import { Context } from "../store/appContext";
import React, { Component, useState, useEffect, useContext } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

// const Weekly_Report = () => {
// 	const { store, actions } = useContext(Context);
// 	let current = store.income - actions.sum();
// 	let weekly = actions.weeklyStatement();
// 	return (
// 		<div>
// 			<div>
// 				<h1>Your weekly report</h1>
// 			</div>
// 			<div>
// 				<p>you have {current}</p>
// 				<div>
// 					<h1> {weekly}</h1>

// 					<b>chart showing how user is doing </b>
// 				</div>
// 				<p>
// 					<b> second value </b>
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// import React, { Component, useState, useEffect } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";

const Weekly_Report = () => {
	const { store, actions } = useContext(Context);
	let current = store.income - actions.sum();
	let weekly = actions.weeklyStatement();
	const [chartData, setChartData] = useState({});
	const chart = () => {
		setChartData({
			labels: ["Week2", "Week4", "Week6", "Week8", "Week10", "Week12", "Week14"],
			datasets: [
				{
					label: "MY first Chart",
					data: [40, 62, 82, 92, 100, 120, 130],
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
