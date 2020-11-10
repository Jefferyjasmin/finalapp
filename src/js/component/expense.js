import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Expense = () => {
	const [expense, setExpense] = useState("");
	const [value, setValue] = useState(0);
	const { store, actions } = useContext(Context);
	const [newExpenses, setNewExpenses] = useState([]);
	const billing = () => {
		let count = 0;
		for (let x of newExpenses) {
			count += x.value;
		}

		return count;
	};

	return (
		<div className="expense ">
			{/* <div className="dropdown ">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Dropdown button
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Travel
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div> */}

			<div className="inputField">
				<label> Enter your expenses</label>
				<div>
					<input
						type="text"
						id="userExpense"
						value={expense}
						placeholder="let add up you expenses"
						onChange={e => setExpense(e.target.value)}
						// store.expenses.property: e.target.value
					/>
				</div>
				<div>
					<input
						type="number"
						id="userExpense"
						value={value}
						placeholder="let add up you expenses"
						onChange={e => setValue(parseInt(e.target.value))}
						//  store.expenses.value: e.target.value
					/>
				</div>
				<button
					className="enterExpense"
					onClick={() => {
						setNewExpenses(newExpenses.concat({ property: expense, value: value }));
						setExpense("");
						setValue(0);
					}}>
					Enter
				</button>

				{newExpenses.map((item, index) => (
					<li id="mapli" key={index}>
						<b>{item.property}</b> {"   "} <b>{item.value}</b>
						{"    "}
						{"    "}
						<button className="btn-delete" onClick={() => actions.deleteItem(index)}>
							{"    "} Delete
						</button>
					</li>
				))}
				<Link to="/secondpage">
					<button onClick={() => actions.addExpense(newExpenses)}>save</button>
				</Link>
				{billing()}
			</div>
		</div>
	);
};

export default Expense;
