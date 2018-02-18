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
            let params = new URLSearchParams(this.props.history.location.search);            
            this.handleSearchTextChanged(params.get('searchText') || '');
        })()
    }
    handleSearchInputChanged = (event) => {
        let text = event.target.value 
        this.handleSearchTextChanged(text)
    }
    handleSearchTextChanged = (text) => {         
        let names = this.state.names
        names = _.filter(this.allNames, n => n.list_name.search(new RegExp(text, "i")) >= 0)                
        this.props.history.replace(`${this.props.history.location.pathname}?searchText=${text}`)        
        this.setState({searchText: text, names})
    }
    
    render() {
        return (
        <div>
            <input type="text" value={this.state.searchText} onChange={this.handleSearchInputChanged}/>
            {
                this.state.names.map(n => <NameItem {...n} match={this.props.match} key={n.list_name_encoded}/>)
            }
        </div>
        );
    }
}

export default NamePage;
