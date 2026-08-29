import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     count: 0,
        //     // count2: 2,
        // }
        console.log(this.props.count + "Child Class Component Constructor");
    }

    async componentDidMount() {
        // console.log(this.props.count + "Child Class Component Did Mount");

        const data = await fetch("https://api.github.com/users/anshulyerudkar1");
        const json = await data.json();

        console.log(this.props.count + ": " + json);
    }
    
    render() {
        console.log(this.props.count + "Child Class Component Rendered");
        const {name, location} = this.props;
        // const {count, count2} = this.state;
        // const {count} = this.state;
        
        return (
            <div className="user-card">
                {/* <h1>Count: {count} </h1> */}
                {/* <h1>Count2: {count2} </h1> */}
                {/* <button onClick={() => {this.setState({count: this.state.count + 1})}}>Increase Count</button> */}
                <h2>Name: {name} </h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @ayerudkar78</h4>
            </div>
        );
    }
}

export default UserClass;