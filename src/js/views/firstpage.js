import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import No_name from "../component/function";
import PropTypes, { number } from "prop-types";
import { Context } from "../store/appContext";
const Information = () => {
	const [income, setIncome] = useState(0);
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="expense1 ">
				<h1 id="h2home">
					<b>Welcome {store.userName}</b>
				</h1>
				<div className="fistIncome">
					<p id="ptag">
						<b>
							<i>Lets get started</i>
						</b>
					</p>
				</div>
				<label id="income">Monthly Income $</label>
				<input
					id="firstpage"
					type="number"
					placeholder="Enter your net pay"
					value={store.income}
					// onChange={e => setIncome(e.target.value)}
				/>
			</div>
			<div>
				<Link to="/expense" className="btn btn-dark">
					<button>
						{/* // onClick={() => {
						// 	actions.setIncome(parseInt(income));
						// }}> */}
						Enter
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Information;
