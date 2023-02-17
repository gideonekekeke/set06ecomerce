import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import AllRoutes from "./Components/AllRoutes/AllRoutes";

function App() {
	return (
		<div>
			<Header />
			<AllRoutes />
		</div>
	);
}

export default App;
