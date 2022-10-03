import { PRODUCTS } from "./features/fruitData";
import "./App.css";
import ProductsArea from "./features/ProductsArea";

function App() {
    return (
        <div className="App">
            <ProductsArea products={PRODUCTS} />
        </div>
    );
}

export default App;
