import { Context } from "../store/appContext";
import React, { useState, useContext } from "react";
import { Doughnut } from "react-chartjs-2";

const Monthly_Report = () => {
	const { store, actions } = useContext(Context);
	let current = store.income - actions.sum();
	return (
		<div>
			<div>
				<h1>Your Monthly report</h1>
			</div>
			<div>
				<p>you have {current}</p>

				<h1> {actions.monthlyStatement()}</h1>

				<b>chart showing how user is doing </b>

				<p>
					<b> second value </b>
				</p>
			</div>
		</div>
	);
};

export default Monthly_Report;
