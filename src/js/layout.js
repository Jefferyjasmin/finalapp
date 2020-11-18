import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Secondpage from "./component/secondpage";
import Monthly from "./component/monthly";
import Weekly from "./component/weekly";
import Annual from "./component/annual";
import Expense from "./component/expense";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Travel from "./views/travel";
import NewChart from "./component/chart";
import Login from "./component/login";
import Firstpage from "./views/firstpage";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />

					<Switch>
						<Route exact path="/">
							<Login />
						</Route>

						<Route exact path="/home">
							<div className="intro" />

							<Home />
						</Route>
						<Route exact path="/secondpage">
							<Secondpage />
						</Route>
						<Route exact path="/expense">
							<Expense />
						</Route>
						<Route exact path="/chart">
							<NewChart />
						</Route>

						<Route exact path="/travel">
							<Travel />
						</Route>

						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/weekly">
							<Weekly />
						</Route>
						<Route exact path="/monthly">
							<Monthly />
						</Route>
						<Route exact path="/annual">
							<Annual />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
