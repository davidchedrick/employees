import { PRODUCTS } from "./features/food/fruitData";
import ProductsArea from "./features/food/ProductsArea";
import "./App.css";

function App() {
	return (
		<div className="App">
			<ProductsArea products={PRODUCTS} />
		</div>
	);
}

export default App;
