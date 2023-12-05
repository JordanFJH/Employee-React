import { Fragment, useEffect, useState } from 'react'

import Form from './assets/Components/Form2';

function App() {

  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  function addUser(user) {
    setUsers([...users, user])
  }

  useEffect(() => {
    async function getData() {
      try {
        let userList = await fetch("https://reqres.in/api/users?page=2")
        userList = await userList.json();
        setUsers(userList.data);
      }
      catch (error) {
        console.log(error);
      }
    }

    getData();
    // console.log(users);

  }, [])

  // console.log(users);

  function showUsers(user) {
    return (
      <div className='employee' key={user.id}>
        <div className='picture'>
          <img src={user.avatar} alt="face" />
        </div>
        <div className='bio-box'>
        <h3>{user.first_name} {user.last_name}</h3>
        <h4>{user.email}</h4>
        </div>


      </div>
    )
  }

  function handleForm() {
    setShowForm(!showForm);

  }


  function handleSearch(e) {
    let input2 = e.target.value;
    setInput(input2);
  }

  let filteredEmployees = users.filter((emp) => emp.first_name.toLowerCase().includes(input.toLowerCase()) || emp.last_name.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className='all-holder'>
      <div className='people'>
        <h1>Employee Directory</h1>
        <div className='serch-bar'>
          <input type="text" placeholder='Search Employee' onChange={handleSearch} value={input}/>
        </div>
        {filteredEmployees.map(showUsers)}
      </div>
      <br />
      <button onClick={handleForm}>{showForm ? "Hide" : "Add"} Employee</button>
      {showForm &&
      <div className="form">
        <Form addUser={addUser}/>
        {/* <Form addUser={addUser}/> */}
      </div>
    }
    </div>

  ) 
}

export default App