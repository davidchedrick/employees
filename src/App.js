import "./App.css";
import { PRODUCTS } from "./features/food/fruitData";
import ProductsArea from "./features/food/ProductsArea";
import ProfileArea from "./features/profile/ProfileArea";

function App() {
	return (
		<div className="App">
			<ProfileArea />
			<ProductsArea products={PRODUCTS} />
		</div>
	);
}

export default App;
