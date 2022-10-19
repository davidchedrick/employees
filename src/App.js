<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import Employee from "./componets/Employee";
import { data } from "./data/data";

function App() {
    const [employees, setEmployees] = useState(data);

    return (
        <div className="d-flex justify-content-around">
            {employees.map((employee) => (
                <Employee key={employee.id} employee={employee} />
            ))}
        </div>
    );
=======
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
>>>>>>> 8f4b9c091db2150173636d1eef5d8b094dc7d4ea
}

export default App;
