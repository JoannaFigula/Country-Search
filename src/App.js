import React, {Component} from 'react';
import './App.css';
import Search from './Search.js';
import Info from './Info.js';
import Flags from './Flags.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryInfo: {},
        }
        this.fetchInfo = this.fetchInfo.bind(this);
        this.setCountryInfo = this.setCountryInfo.bind(this);
        // this.fetchInfo("Poland");
        this.flagsComponentReference = React.createRef();
    }

//zmiana informacji po kliknięciu na flgę
    setCountryInfo(country) {
        this.setState({
            countryInfo: country,
        })
    }

    fetchInfo(countryName) {
        // console.log(this.flagsComponentReference);


        fetch('https://restcountries.eu/rest/v2/name/' + countryName)
            .then(function (response) {
                if (response.ok) {
                    return (response.json())
                } else
                    throw new Error("Complete country name in English");
            })
            .then((countryInfo) => {
                // console.log(countryInfo);
                this.setState({
                    countryInfo: countryInfo[0],
                })
                this.flagsComponentReference.current.addFlagToList(countryInfo[0])
            })
            .catch((err) => {
                alert("Complete country name in English");
            })
    }


    render() {

        return (
            <div className="App">

                <Search fetchInfo={this.fetchInfo}/>
                {this.state.countryInfo.name ?
                    <Flags setCountryInfo={this.setCountryInfo} ref={this.flagsComponentReference}/> : null}
                {this.state.countryInfo.name ? <Info countryInfo={this.state.countryInfo}/> : null}
                {/*<Info countryInfo={this.state.countryInfo}/>*/}
                {/*<Flags fetchFlags={this.fetchFlags} />*/}

            </div>
        );
    }
}

export default App;
