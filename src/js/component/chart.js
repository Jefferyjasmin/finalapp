import Chart from "chart.js";
import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const Chart = () => {
	const [state, setState] = useState({});
	setState = {
		// const [chartData, setChartData] = useState({});
		// setChartData({
		labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		data: [
			{
				label: "level of thickness",
				data: [10, 20, 30, 40, 50, 60, 70],
				backgroundColor: ["rgba(75,192,0.6)"],
				borderWidth: 4
			}
		]
	};
	return (
		<div className="chartContainer">
			<div>
				<Bar
					data={state}
					options={{
						title: {
							display: true,
							text: "Weekly Income",
							fontSize: 20
						},
						legend: {
							display: true,
							position: "right"
						}
					}}
				/>
			</div>
		</div>
	);
};

export default Chart;
