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
}

export default App;
