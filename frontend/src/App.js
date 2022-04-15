import './App.css';
import "bootstrap/dist/css/bootstrap.css"

import { Nav, Container, Row, Col } from 'react-bootstrap';
import NavBar from 'react-bootstrap/NavBar';
import { Routes, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create_student";
import EditStudent from "./components/edit_student";
import StudentList from "./components/student_list";

function App() {
	return (
		<div className="App">
			<NavBar bg="dark" variant="dark">
				<Container>
					<NavBar.Brand>
						<Link to={"/create-student"} className="nav-link"> React Mern Stack CRUD </Link>
					</NavBar.Brand>
					<Nav className="justify-content-end">
						<Nav>
							<Link to={"/create-student"} className="nav-link"> Create Student </Link>
							<Link to={"/student-list"} className="nav-link"> Student List </Link>
						</Nav>
					</Nav>
				</Container>
			</NavBar>

			<Container>
				<Row>
					<Col md="12">
						<div className="wrapper">
							<Routes>
								<Route exact path="/" element={<CreateStudent/>} />
								<Route path="/create-student" element={<CreateStudent/>} />
								<Route path="/edit-student/:id" element={<EditStudent/>} />
								<Route path="/student-list" element={<StudentList/>} />
							</Routes>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
