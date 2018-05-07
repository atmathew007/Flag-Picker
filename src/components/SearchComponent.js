import React, { Component } from 'react';
import Aux from '../hoc/Auxiliary/Auxiliary';
import classes from './SearchComponent.css';
import FlagComponent from './FlagComponent';
import ReactCountryFlag from 'react-country-flag';

class SearchComponent extends Component {
        state = {
            continents: require('../assets/json/continents.json'),
            selectedContinent: [],
            selectedCountry: [],
            selectedFlag: '',
            flagList: [],
            expanded: false,
            display: null,
            displayCountry: 'none'
        };
    
    getData () {
        const data = require('../assets/json/continents.json');
        return data;
    }
    keyPressHandler = (event) => {
       if (event.charCode === 13) {
           

       }
       else if (event.charCode === 38) {
           console.log('Up arrow is pressed');
       }
    }
    updateValue = (event) => {
        let countries = [];
        var data = require('../assets/json/continents.json');   
        console.log('from data',data);
        for(let i=0;i<data.length;i++){
            if(data[i].continent ===  event.target.value) {
                for(let j=0; j<data[i].countries.length; j++) {
                    countries[j] = data[i].countries[j].name;
                }
                break;
            }
        }
        this.setState({selectedCountry: countries})
        return countries;
        this.setState({displayCountry: 'flex'});
    }
    countrySelectHandler = (event) => {
        let flag = '';
        let flagList = this.state.flagList.slice();
        let checked = event.target.value;
        let data = require('../assets/json/continents.json');
        console.log(data);
        for(let i = 0; i<data.length; i++) {
            for(let j = 0; j<data[i].countries.length;j++) {
                if( checked === data[i].countries[j].name) {
                    flag = data[i].countries[j].flag;
                    if(flagList.includes(flag)) {
                        let index = flagList.indexOf(flag)
                        flagList.splice(index,1);
                    } else {
                        flagList.push(flag);
                    }
                    
                    this.setState({flagList: flagList}, function () {
                        console.log(this.state.flagList);
                        console.log(flagList);
                    });
                    
                }
            }
        }
        this.setState({selectedFlag: flag},function () {
            console.log(this.state.selectedFlag);
        });
        
        return flag;
    }
    updateCountry = () => {
        console.log('Country Updated');
    }
    showCheckboxes = () => {
        if (this.state.expanded === false) {
            this.setState({display: 'block'});
            this.setState({expanded: true});
        } else {
            this.setState({display: 'none'});
            this.setState({expanded: false});
        }
    }
    clearFlags = () => {
        this.setState({flagList: []});
        this.setState({selectedCountry: []});
    }
    render () {
        console.log(this.state.display);
        console.log(this.state.selectedCountry);
        let conts = this.state.continents.map((continent, i) => {
            return <option key = {i} value = {continent.continent} />
        });
        let countries = this.state.selectedCountry.map((country, i) => {
            return (
            <label className = {classes.countryLabel} key = {i}>
            <input type="checkbox" key = {i} value={country}/>{country}</label>
            );
        })
        let flag = this.state.flagList.map((flag, i) => {
            return (
                <FlagComponent key = {i} flag = {flag} />
            )
        });
        console.log(flag);                          
                            
        return (
            <Aux>
            <div className = {classes.Search}>
                <div className = {classes.SearchContinent}>
                    <h1>Step 1</h1>
                    <p>Select a continent</p>
                    <input type="text" list = "continents" id = "continent" value = {this.state.continent} onChange = {this.updateValue}/>
                    <datalist id = "continents">
                        {conts}
                    </datalist>
                </div>

                <div className = {classes.SearchCountry}>
                    <h1>Step 2</h1>
                    <p>Select a country</p>
                    <div className={classes.multiselect}>
                    <div className={classes.selectBox} >
                    <input className={classes.Conts} type="text" id="country" onClick = {this.showCheckboxes}/></div>
                    <div style = {{display:this.state.display, border: '1px #dadada solid'}} onChange = {this.countrySelectHandler}>
                    {countries}
                   
                    </div>
                    </div>
                    
                </div>
                <div className = {classes.Flag}>
                <div className = {classes.FlagComponent}>
                <h1>Selected Flags</h1>
                {flag}
                <div className = {classes.Button}><button onClick = {this.clearFlags} >Clear flags</button></div>
    </div>
    </div>
                
                
            </div>
            </Aux>    
        )
    }
}

export default SearchComponent;