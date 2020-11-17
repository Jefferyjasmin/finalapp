import React, { Component, useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const NewChart = () => {
	const [chartData, setChartData] = useState({});
	const chart = () => {
		setChartData({
			labels: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
			datasets: [
				{
					label: "MY first Chart",
					data: [20, 40, 60, 80, 100, 120, 140],
					backgroundColor: ["rgba(75,192,192,0.6)"],
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

export default NewChart;
