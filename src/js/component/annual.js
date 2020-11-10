import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Annual_Report = () => {
	const { store, actions } = useContext(Context);
	let current = actions.setIncome() - actions.sum();
	return (
		<div>
			<div>
				<h1>Your annual report</h1>
			</div>
			<div>
				<p>you have {current}</p>

				<h1> {actions.annualStatement()}</h1>

				<p>
					<b> second value </b>
				</p>
			</div>
		</div>
	);
};

export default Annual_Report;
