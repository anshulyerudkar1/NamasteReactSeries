import { useEffect, useState } from "react";

const User = (props) => {
    
    const {name, location} = props;

    // const [count] = useState(0);
    // const [count2] = useState(2);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer is running");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Timer is cleared");
        }
    }, []);

    return (
        <div className="user-card">
            {/* <h1>Count: {count} </h1>
            <h1>Count2: {count2} </h1> */}
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @ayerudkar78</h4>
        </div>
    )
}

export default User;