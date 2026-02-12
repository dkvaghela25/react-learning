// Filename - src/index.js:
import React from "react";
import GithubLink from "./ui/GithubLink";
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }
    componentDidMount() {
        console.log("componentDidMount()");
    }
    changeState() {
        console.log("changeState()");
        this.setState({ hello: `${this.state.hello === "World!" ? "Geek" : "World!"}` });
    }
    render() {
        return (
            <div className="center">
                <h1>Example of class component</h1>
                <h1> GeeksForGeeks.org, Hello {this.state.hello} {this.props.message} </h1>
                <h2> <button onClick={this.changeState.bind(this)}> Press Here! </button> </h2>
                <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/ClassComponent.jsx" />
            </div>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}

export default ClassComponent