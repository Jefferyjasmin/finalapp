import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// all the content of the page will not diplay at the same time after
// need to change state when use chooses and plan

const MyPlan = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	const handleClick = e => {
		console.log("hello");
	};

	return (
		<div className="container">
			<div>
				<h1>Great Job </h1>
				<h4>Here is what we need to know to get you started</h4>
			</div>

			<div className="inputFields">
				{store.expenses.map((item, index) => {
					return (
						<>
							<label>{item.property}</label>
							<input
								id="expenses"
								type="number"
								placeholder="let add up you expenses"
								value={item.value}
							/>
						</>
					);
				})}
				-------------------------------------------YOur total expenses are {store.income - actions.sum()} a
				month great
				{/*need to store the values of each input */}
			</div>
			<div>
				<Link to="/travel">
					<button className="btn btn-primary">Enter</button>
				</Link>
			</div>
		</div>
	);
};

export default MyPlan;
