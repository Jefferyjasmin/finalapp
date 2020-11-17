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
		<div className="userLogin ">
			<div className="container d-flex">
				<div className="imgdiv">
					<img
						id="loginImg"
						src="https://www.practicalmoneyskills.com/assets/images/cards/creating_a_budget_sq_707_707.jpg"
					/>
				</div>
				<div className="loginRight">
					<h1>Create Your Account </h1>

					<form className="loginForm">
						<div className="userdiv form-group">
							<div className="user d-flex">
								<div className="User input-group-prepend ">
									<label id="userName">
										{" "}
										<b>User Name</b>
									</label>
									<span className="sUser input-group-text" id="basic-addon1">
										<i className="far fa-user" />
									</span>
								</div>
								<input
									id="userName1"
									type="text"
									className="form-control"
									placeholder="Username"
									value={userName}
									aria-describedby="basic-addon1"
									onChange={e => setUserName(e.target.value)}
								/>
							</div>
						</div>

						<div className="emaildiv form-group ">
							<div className="email">
								<div className="Email input-group-prepend">
									<label id="Email">
										{" "}
										<b>Email</b>
									</label>
									<span className="sEmail input-group-text" id="basic-addon1">
										<i className="far fa-envelope" />
									</span>
								</div>
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
								<div className="Income input-group-prepend">
									<label id="labelincome">
										{" "}
										<b>Income</b>
									</label>
									<span className="sIncome input-group-text" id="basic-addon1">
										<i className="fas fa-dollar-sign" />
									</span>
								</div>
								<input
									id="userincome"
									type="number"
									className="form-control"
									placeholder="Income"
									value={income}
									onChange={e => setIncome(e.target.value)}
								/>
							</div>
						</div>
					</form>
					{/* <Link to="/home"> */}
					<button
						className="submitButtion"
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
		</div>
	);
};

export default Login;
