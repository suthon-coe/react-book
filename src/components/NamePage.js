import React, { Component } from 'react';
import BookAPI from '../api';
const NameItem = ({list_name}) => (
    <div>{list_name}</div>
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
                this.state.names.map(n => <NameItem {...n}/>)
            }
        </div>
        );
    }
}

export default NamePage;
