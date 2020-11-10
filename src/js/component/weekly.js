import { Context } from "../store/appContext";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

const Weekly_Report = () => {
	const { store, actions } = useContext(Context);
	let current = store.income - actions.sum();
	let weekly = actions.weeklyStatement();
	return (
		<div>
			<div>
				<h1>Your weekly report</h1>
			</div>
			<div>
				<p>you have {current}</p>
				<div>
					<h1> {weekly}</h1>

					<b>chart showing how user is doing </b>
				</div>
				<p>
					<b> second value </b>
				</p>
			</div>
		</div>
	);
};
export default Weekly_Report;
