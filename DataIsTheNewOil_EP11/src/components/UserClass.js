import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     count: 0,
        //     // count2: 2,
        // }
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy",
                avatar_url: "https://avatars.githubusercontent.com/u/142788671?v=4"
            },
        }
        console.log(this.props.count + "Child Class Component Constructor");
    }

    async componentDidMount() {
        console.log(this.props.count + "Child Class Component Did Mount");

        // const data = await fetch("https://api.github.com/users/anshulyerudkar1");
        // const json = await data.json();

        // this.setState({
        //     userInfo: json
        // });

        this.timer = setInterval(() => {
            console.log("Timer is running");
        }, 1000);

        // console.log(" API Response: " + JSON.stringify(json));
    }

    componentDidUpdate() {
        console.log(this.props.count + "Child Class Component Did Update");
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log(this.props.count + "Child Class Component Will Unmount");
    }

    render() {
        console.log(this.props.count + "Child Class Component Rendered");
        // const {name, location} = this.props;
        // const {count, count2} = this.state;
        // const {count} = this.state;

        const {name, location, avatar_url} = this.state.userInfo;
        
        return (
            <div className="user-card">
                {/* <h1>Count: {count} </h1> */}
                {/* <h1>Count2: {count2} </h1> */}
                {/* <button onClick={() => {this.setState({count: this.state.count + 1})}}>Increase Count</button> */}
                <img src={avatar_url} alt="GitHub Profile" style={{width: "50px", height: "50px"}}/>
                <h2>Name: {name} </h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @ayerudkar78</h4>
            </div>
        );
    }
}

export default UserClass;


/*

Mounting Phase: 
    -> Constructor (First Render)
    -> Render (First Render)
    -> Component Did Mount (First Render)
Updating Phase: 
    -> Constructor (Not Again)
    -> Render (Again)
    -> Component Did Mount (Not Again)
Unmounting Phase: 
    -> Component Will Unmount

*/