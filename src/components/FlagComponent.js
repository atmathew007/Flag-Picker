import React, { Component } from 'react';
import classes from './FlagComponent.css';
import SearchComponent from './SearchComponent';
import ReactCountryFlag from 'react-country-flag';

class FlagComponent extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
    <div className = {classes.Flags}><ReactCountryFlag code = {this.props.flag} /></div>
        )
    }
}
       
export default FlagComponent;
