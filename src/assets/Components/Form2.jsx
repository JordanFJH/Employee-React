import { useRef } from "react";


export default function Form({addUser}) {
    const nameRef = useRef("test");
    const titleRef = useRef(null)
    const phoneRef = useRef(null)
    const emailRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(inputRef);
        // console.log(inputRef.current);
        // console.log(inputRef.current.value);

        let employee = {
            first_name: nameRef.current.value,
            title: titleRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            avatar: "https://reqres.in/img/faces/7-image.jpg",
            id: crypto.randomUUID()

        }
    }

    return (
        <form className="form-holder">
            <label htmlFor="first_name">Name: </label>
            <input id="first_name" ref={nameRef}/>

            <label htmlFor="title">Title: </label>
            <input id="title" ref={titleRef}/>

            <label htmlFor="phone">Phone: </label>
            <input id="phone" ref={phoneRef}/>

            <label htmlFor="email">Email: </label>
            <input id="email" ref={emailRef}/>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </form>

    )
}