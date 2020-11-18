import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { Component, useState, useEffect, useContext } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

const Annual_Report = () => {
	const { store, actions } = useContext(Context);
	let current = store.income - actions.sum();
	let monthly = actions.monthlyStatement();
	const [chartData, setChartData] = useState({});
	const chart = () => {
		setChartData({
			labels: ["Rent", "Cellphone", "MealExpense", "CarPayment", "CarIns", "Entertainment", "Savings"],
			datasets: [
				{
					label: "MY first Chart",
					data: [40, 62, 82, 92, 100, 120, 130],
					backgroundColor: [
						"rgb(0,255,255,1)",
						"rgba(255,255,0)",
						"rgba(75,192,192,0.6)",
						"rgb(0.255.0)",
						"rgb(255,215,0)",
						"rgb(255,0,0,0.3)",
						" rgb(0,0,128,05)"
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
				<h1>Your annual report</h1>
			</div>
			<p>you have {current}</p>
			<h1> {monthly}</h1>

			<div style={{ height: "500px", width: "500px" }}>
				<Doughnut
					data={chartData}
					options={{
						responsive: true
					}}
				/>
			</div>
		</div>
	);
};

export default Annual_Report;
