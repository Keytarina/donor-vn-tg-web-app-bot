import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";

function App() {
	const { onToggleButton, tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<div className="App">
			<button onClick={onToggleButton}>toggle</button>
			<Header />
			<Routes>
				<Route index element={<ProductList />} />
				<Route path={"form"} element={<Form />} />
			</Routes>
		</div>
	);
}

export default App;
