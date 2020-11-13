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
		<div className="userLogin d-flex">
			<div>
				<img src="https://www.nevistas.com/ul/4/2019/08/29/13.jpg" />
			</div>
			<div className="loginRight">
				<h1>Create Your Account </h1>

				<form>
					<div className="userdiv form-group">
						<div className="user">
							<label id="userName">
								{" "}
								<b>User Name</b>e
							</label>
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

					<div className="emaildiv form-group">
						<div className="email">
							<label id="staticEmail">
								{" "}
								<b>Email</b>
							</label>
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
					<div className="incomediv form-group">
						<div className="incomeField d-flex">
							<label id="labelincome">
								<b>Income</b>
							</label>

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
		</div>
	);
};

export default Login;