import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor() {
        super();
        console.log("Parent Class Component Constructor");
    };

    componentDidMount() {
        console.log("Parent Class Component Did Mount");
    }

    render() {
        console.log("Parent Class Component Rendered");
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is the Namaste React Course</h2>

                {/* <User name={"Anshul Yerudkar (Functional Component)"} location={"Pune (Functional Component)"}  /> */}
                <UserClass name={"Anshul Yerudkar (Class Component)"} location={"Pune (Class Component)"} count={"First "} />
                {/* <UserClass name={"Aditya Yerudkar (Class Component)"} location={"Pune (Class Component)"} count={"Second "} /> */}
                {/* <UserClass name={"Amol Yerudkar (Class Component)"} location={"Pune (Class Component)"} count={"Third "} /> */}
            </div>
        )
    }
};

export default About;