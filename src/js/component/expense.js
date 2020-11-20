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
					<div className="leftName">
						<b>
							{store.userName}
							User Names
						</b>
					</div>
					<div className="leftBalance">
						<b>current balance updating</b>
						<div className="expenseContainer1">
							<label>
								<b>Enter your expenses</b>
							</label>
							<input
								type="text"
								id="userExpense"
								value={expense}
								placeholder="let add up you expenses"
								onChange={e => setExpense(e.target.value)}
								// store.expenses.property: e.target.value
							/>
							<input
								className="userExpense"
								type="number"
								id="userExpense"
								value={value}
								placeholder="let add up you expenses"
								onChange={e => setValue(parseInt(e.target.value))}
								//  store.expenses.value: e.target.value
							/>
							<button
								className="enterExpense btn btn-warning"
								onClick={() => {
									const newExp = [...store.expenses];
									newExp.push({ property: expense, value: value });
									actions.addExpense(newExp);
									setExpense("");
									setValue(0);
								}}>
								Enter
							</button>

							{store.expenses.map((item, index) => {
								console.log(item);
								return (
									<>
										<button className="btn btn-warning" id="mapli" key={index}>
											<b>{item.property}</b> <b>{item.value}</b>
											<button
												className="btn"
												type="submit"
												onClick={() => actions.deleteItem(index)}>
												{"    "} <i className="fas fa-trash-alt" />
											</button>
										</button>
									</>
								);
							})}
							<Link to="/secondpage">
								<button
									className="expenseSave btn btn-light"
									onClick={() => actions.addExpense(newExpenses)}>
									save
								</button>
							</Link>
						</div>
					</div>
					{/* <div className="inputField col-9">
					<div className="expenseContainer1">
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
						<button
							className="enterExpense"
							onClick={() => {
								const newExp = [...store.expenses];
								newExp.push({ property: expense, value: value });
								actions.addExpense(newExp);
								setExpense("");
								setValue(0);
							}}>
							Enter
						</button>

						{store.expenses.map((item, index) => {
							console.log(item);
							return (
								<>
									<span id="mapli" key={index}>
										<b>{item.property}</b>
									</span>
									<span>
										<b>{item.value}</b>
										<button className="btn" type="submit" onClick={() => actions.deleteItem(index)}>
											{"    "} <i className="fas fa-trash-alt" />
										</button>
									</span>
								</>
							);
						})} */}
				</div>
			</div>
		</div>
	);
};

export default Expense;
