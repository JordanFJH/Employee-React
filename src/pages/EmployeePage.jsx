import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EmployeePage() {

    const data = useLocation();
    // console.log(data.state.user);
    let employee = data.state.user;
    let navigate = useNavigate();
    // console.log(props.location)
    return (
        <div className="employee-page">
            <button onClick={() => navigate("/")} className="return-button"> Return </button>
            <h1>{employee.first_name} {employee.last_name}</h1>
            <h2>{employee.email}</h2>
            <img src={employee.avatar}/>
            <br /> <br />
            
            <h2>-- Employee Summary --</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio illum distinctio aspernatur facilis facere deleniti necessitatibus consectetur et dolores nulla mollitia expedita officia corrupti a ab, reiciendis sit? Rem, pariatur?</p>
        </div>
    );
}

export default EmployeePage;