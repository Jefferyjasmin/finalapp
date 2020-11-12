import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [income, setIncome] = useState(0);

	return (
		<div>
			<form>
				<div className="form-group row">
					<div className="col-sm-10">
						<label id="staticEmail">User Name</label>
						<input
							type="text"
							id="staticEmail"
							placeholder="Username"
							value={userName}
							onChange={e => setUserName(e.target.value)}
						/>
					</div>
				</div>

				<div className="form-group row">
					<div className="col-sm-10">
						<label id="staticEmail">Email</label>
						<input
							type="text"
							id="staticEmail"
							placeholder="email@example.com"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="form-group row">
					<div className="col-sm-10">
						<label id="inputPassword">Income</label>
						<input
							type="number"
							className="form-control"
							id="inputPassword"
							placeholder="Income"
							value={income}
							onChange={e => setIncome(e.target.value)}
						/>
					</div>
				</div>
			</form>
			<Link to="/home">
				<button
					onClick={() => {
						actions.update(userName, email, parseInt(income));
					}}>
					{" "}
					Submit
				</button>
			</Link>
		</div>
	);
};

export default Login;
