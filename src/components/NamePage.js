import React, { Component } from 'react';
import BookAPI from '../api';
import { Link } from "react-router-dom";

const NameItem = ({list_name, list_name_encoded, match}) => (
    <div><Link to={`${match.url}/${list_name_encoded}`}>{list_name}</Link></div>
)

class NamePage extends Component {
    constructor(props){
        super(props)
        this.state = {names: []}
    }
    componentDidMount(){
        let names = BookAPI.getNames()
        this.setState({names})
    }
    render() {
        return (
        <div>
            {
                this.state.names.map(n => <NameItem {...n} match={this.props.match}/>)
            }
        </div>
        );
    }
}

export default NamePage;
