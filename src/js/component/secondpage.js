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
		<div className="containerSp">
			<h1>Great Job </h1>
			<div className="bothSidesSp row">
				<div className="leftSp">
					<div>
						<h4> current report</h4>
					</div>

					<div className="reportInfoSp">
						{store.expenses.map((item, index) => {
							return (
								<>
									<button>
										{item.property}
										<input
											id="expenses"
											type="number"
											placeholder="let add up you expenses"
											value={item.value}
										/>
									</button>
								</>
							);
						})}
						{store.income - actions.sum()}
					</div>
				</div>
				<div className="rightSp">
					{store.userName} jeffery jasmin
					<br />
					This budgets goal {store.goal}
					<br />
					Desired goal date {store.date}
					<br />
					estimated goal date {store.date}
				</div>
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
