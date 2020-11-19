import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import No_name from "../component/function";
import PropTypes, { number } from "prop-types";
import { Context } from "../store/appContext";
const Firstpage = () => {
	const [income, setIncome] = useState(0);
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState({ growSavings: false, payOffDebt: false });

	return (
		<div className="firstPageBody row">
			<div className="firstPageLeft col-9 d-flex">
				<h3 style={{ color: "white" }}>Lets get started on your first steps to financial freedom</h3>
				<div className="firstPageInputFields">
					<span id="checkbox" style={{ color: "white" }}>
						Growing your savings
						<input
							className="growSavings"
							name="select"
							id="growSavings"
							type="radio"
							aria-label="Checkbox for following text input"
							style={{ backgroundColor: "white" }}
							onChange={e => {
								setShow({ growSavings: show.growSavings ? false : true });
								console.log(show.growSavings);
							}}
						/>
					</span>
					<span id="checkbox" style={{ color: "black" }}>
						Pay of debt
						<input
							className="payOffDebt"
							name="select"
							id="payOffDebt"
							type="radio"
							aria-label="Checkbox for following text input"
							style={{ backgroundColor: "white" }}
							onChange={e => {
								setShow({ payOffDebt: show.payOffDebt ? false : true });
								console.log(show.payOffDebt);
							}}
						/>
					</span>
				</div>
				<div>
					{show.growSavings ? (
						<span>
							How much do you want to add
							<input
								className="idk"
								id="growSavings"
								type="number"
								aria-label="Checkbox for following text input"
								style={{ backgroundColor: "white" }}
							/>
						</span>
					) : (
						" "
					)}
					{show.payOffDebt ? (
						<span>
							How much we need to pay off
							<input
								className="idk"
								id="growSavings"
								type="number"
								aria-label="Checkbox for following text input"
								style={{ backgroundColor: "white" }}
							/>
						</span>
					) : (
						""
					)}
					<form action="/action_page.php">
						<label htmlFor="birthday">BY what date would you want your goal meet</label>
						<input type="date" id="birthday" name="birthday" />
						<input type="submit" onClick={() => console.log("show the debt portion")} />
					</form>
				</div>
			</div>
			<div className="firstPageRight col-3" style={{ backgroundColor: "wheat" }}>
				<div className="expense1 ">
					<h1 id="h2home">
						<b style={{ color: "black" }}>Welcome</b> <br />
						<b>{store.userName}</b>
					</h1>
					<div className="fistIncome">
						<p id="ptag">
							<b>
								<i style={{ color: "black" }}>Lets get started</i>
							</b>
						</p>
					</div>
					<label id="income" style={{ color: "black" }}>
						Monthly Income $ {store.income}
					</label>
				</div>
				<div>
					<Link to="/expense" className="btn btn-dark">
						<button className="btn btn-dark">Enter</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Firstpage;
