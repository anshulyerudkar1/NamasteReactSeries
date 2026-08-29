import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor() {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is the Namaste React Course</h2>

                {/* <User name={"Anshul Yerudkar (Functional Component)"} location={"Pune (Functional Component)"}  /> */}
                <UserClass name={"Anshul Yerudkar (Class Component)"} location={"Pune (Class Component)"}  />
            </div>
        )
    }
};

export default About;