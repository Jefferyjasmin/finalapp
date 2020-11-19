import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
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

	useEffect(() => {
		actions.testApi();
	}, []);

	return (
		<div className="expense ">
			<div className="expenseContainer d-flex row">
				<div className="left col-3">
					<div className="leftName">{store.userName}</div>
					<div className="leftBalance">current balance updating</div>
				</div>
				<div className="inputField col-9">
					<div className="expenseContainer">
						<label> Enter your expenses</label>
						<input
							type="text"
							id="userExpense"
							value={expense}
							placeholder="let add up you expenses"
							onChange={e => setExpense(e.target.value)}
							// store.expenses.property: e.target.value
						/>
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
							const newExp = [...store.expenses];
							newExp.push({ property: expense, value: value });
							console.log({ property: expense, value: value });
							actions.addExpense(newExp);
							// setNewExpenses(newExpenses.concat({ property: expense, value: value }));
							// setExpense("");
							// setValue(0);
						}}>
						Enter
					</button>

					{store.expenses.map((item, index) => {
						console.log(item);
						return (
							<li id="mapli" key={index}>
								<b>{item.property}</b> {"   "} <b>{item.value}</b>
								{"    "}
								{"    "}
								<button className="btn" type="submit" onClick={() => actions.deleteItem(index)}>
									{"    "} <i className="fas fa-trash-alt" />
								</button>
							</li>
						);
					})}

					{/* <Link to="/secondpage">
						<button onClick={() => actions.addExpense(newExpenses)}>save</button>
					</Link>
					{billing()} */}
				</div>
			</div>
		</div>
	);
};

export default Expense;
