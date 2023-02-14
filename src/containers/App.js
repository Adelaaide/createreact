import React from "react";
import CardList from "../components/CardList";
import { robots } from "./robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import  "./App.css"

 
class App extends React.Component {
    constructor () {
        super () 
            this.state = {
                robots: robots,
                searchfield: " "
            }
        }

componentDidMount() {
    // if i had used the placeholder from the internet:
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response => response.json())
    // .then(users => 
    this.setState({robots: robots });
}

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render() {
        const { robots, searchfield } = this.state;  
        const filterRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
         <hi>LOADING</hi> :
         (
            <div className="tc">
                <h1 className="f1">RoboCops</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                  <CardList robots={filterRobots} />
                </Scroll>
            </div>  
          );
    }
} 

export default App;

