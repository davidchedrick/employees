import { Button, Card } from "react-bootstrap";

const Employee = ({ employee }) => {
    const { name, role } = employee;

    return (
        <Card className="m-3">
            <Card.Body>
                <Card.Title>Employee {name}</Card.Title>
                <Card.Text>{role ? role : "No Role"}</Card.Text>
                <Button>Click</Button>
            </Card.Body>
        </Card>
    );
};

export default Employee;
