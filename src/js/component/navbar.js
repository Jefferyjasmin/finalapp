import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-Dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/weekly">Weekly Report</Link>
			</div>
			<div className="ml-auto">
				<Link to="/monthly">Monthly Report</Link>
			</div>
			<div className="ml-auto">
				<Link to="/annual">Annually Report</Link>
			</div>
			<div className="ml-auto">
				<Link to="/travel">Travel</Link>
			</div>
		</nav>
	);
};
