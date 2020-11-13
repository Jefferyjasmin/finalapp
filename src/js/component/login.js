import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [income, setIncome] = useState(0);
	const history = useHistory();
	return (
		<div>
			<h1>Create Your Account </h1>
			<p>
				<i className="fas fa-user-alt" />
			</p>
			<form>
				<div className="userdiv form-group row">
					<div className="user col-sm-10">
						<label id="userName">User Name</label>
						<i className="far fa-user" />
						<input
							type="text"
							id="userName"
							placeholder="Username"
							value={userName}
							onChange={e => setUserName(e.target.value)}
						/>
					</div>
				</div>

				<div className="emaildiv form-group row">
					<div className="email col-sm-10">
						<label id="staticEmail">Email</label>
						<i className="far fa-envelope" />
						<input
							type="text"
							id="staticEmail"
							placeholder="email@example.com"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="incomediv form-group row">
					<div className="incomeField col-sm-10">
						<label id="labelincome">Income</label>

						<input
							id="userincome"
							type="number"
							className="form-control"
							placeholder="Income"
							value={income}
							onChange={e => setIncome(e.target.value)}
						/>
						<i className="fas fa-dollar-sign" />
					</div>
				</div>
			</form>
			{/* <Link to="/home"> */}
			<button
				type="button"
				onClick={async () => {
					let success = await actions.update(userName, email, parseInt(income));
					if (success) {
						history.push("/home");
					} else {
						alert("error");
					}
				}}>
				{" "}
				Submit
			</button>
			{/* </Link> */}
		</div>
	);
};

export default Login;
