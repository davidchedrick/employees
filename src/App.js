
import "./App.css";
import { useState } from "react";
import Employee from "./componets/Employee";
import { data } from "./data/data";
import { PRODUCTS } from "./features/food/fruitData";
import ProductsArea from "./features/food/ProductsArea";
import ProfileArea from "./features/profile/ProfileArea";

function App() {
    const [employees, setEmployees] = useState(data);
	return (
		<div className="App">
			<ProfileArea />
			<ProductsArea products={PRODUCTS} />
            

            <div className="d-flex justify-content-around">
            {employees.map((employee) => (
                <Employee key={employee.id} employee={employee} />
            ))}
        </div>
		</div>
	);
}

export default App;
