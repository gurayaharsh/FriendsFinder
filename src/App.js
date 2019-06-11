import React, {Component} from 'react';
import Cardlist from './CardList';
import Scroll from './Scroll'
import SearchBox from './SearchBox';
//import contacts from './Contacts';
import './App.css';




class App extends Component{
    
    constructor(){
        super()
        this.state = {
            users: [],
            searchfield: '' 
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({users: users}));
    }

    OnSearchChange = (input) => {
        
        let text = input.target.value;
        this.setState({searchfield : text});

    }

    render() {

        const filteredcontacts = this.state.users.filter(user =>{
            return user.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if(this.state.users.length === 0){
            return <h2 className = "tc">Loading ... Please Wait!</h2>;
        }
        else{
        return(
            <div>
                <h1 className ="tc">Friends Finder</h1>
                <SearchBox SearchChanger={this.OnSearchChange}/> 
                <Scroll>
                <Cardlist directory ={filteredcontacts}/>
                </Scroll>
            </div>
        )}
    }
} 
export default App; 