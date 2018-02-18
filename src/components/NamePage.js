import React, { Component } from 'react';
import BookAPI from '../api';
import { Link } from "react-router-dom";
import _ from 'lodash';

const NameItem = ({list_name, list_name_encoded, match}) => (
    <div><Link to={`${match.url}/${list_name_encoded}`}>{list_name}</Link></div>
)

class NamePage extends Component {
    constructor(props){
        super(props)
        this.state = {names: [], searchText: ''}
    }
    componentDidMount(){
        (async ()=>{
            let names = await BookAPI.getNames()
            this.allNames = names
            this.setState({names})
        })()
    }
    handleSearchTextChanged = (event) => {
        let text = event.target.value  
        let names = this.state.names
        if(text){
            names = _.filter(this.allNames, n => n.list_name.search(new RegExp(text, "i")) >= 0)            
        }      
        this.setState({searchText: text, names})
    }
    render() {
        return (
        <div>
            <input type="text" value={this.state.searchText} onChange={this.handleSearchTextChanged}/>
            {
                this.state.names.map(n => <NameItem {...n} match={this.props.match} key={n.list_name_encoded}/>)
            }
        </div>
        );
    }
}

export default NamePage;
