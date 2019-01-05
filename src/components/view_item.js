import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getSingleItem } from '../actions';
import NavButton from './nav_button';


class ViewItem extends Component {
    
    componentDidMount(){
        
        this.props.getSingleItem(this.props.match.params.item_id);
    }
    
    render(){
        
        const { details, title} = this.props.item

        if(!title){
            return <h1>...loading</h1>;
        }
            
        

        return(
            <div>
                <h1 className="center">viev Item</h1>
                <NavButton color="blue" to="/" text="Back to List"></NavButton>
                <p><b>Title:</b> { title }</p>
                <p><b>details:</b> { details }</p>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        item: state.list.single
    }
}

export default connect(mapStateToProps, {
    getSingleItem: getSingleItem
}) (ViewItem);