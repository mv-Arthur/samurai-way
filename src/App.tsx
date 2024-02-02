import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { SideBar } from "./components/sidebar/SideBar";
import { BrowserRouter, Route } from "react-router-dom";
import { Dialogs } from "./pages/dialogs/Dialogs";
import { Profile } from "./pages/profile/Profile";
import { News } from "./pages/news/News";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<SideBar />
				<div className="content">
					<Route path={"/dialogs"} component={Dialogs} />
					<Route path={"/profile"} component={Profile} />
					<Route path={"/news"} component={News} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
