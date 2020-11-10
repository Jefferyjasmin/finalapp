import { Context } from "../store/appContext";
import React, { useState, useContext } from "react";

const Monthly_Report = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div>
				<h1>Your Monthly report</h1>
			</div>
			<div>
				<p>you have</p>

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
