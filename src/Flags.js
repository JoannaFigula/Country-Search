import React, {Component} from 'react';
import './Flags.css';

class Flags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flags: [],
        }
        this.addFlagToList = this.addFlagToList.bind(this);
        this.onClickFlag = this.onClickFlag.bind(this);
    }


//przekazanie informacji po kliknięciu na flagę
    onClickFlag(country) {
        // console.log(country);
        this.props.setCountryInfo(country)
    }

//dodawanie flag do listy
    addFlagToList(countryInfo) {
        // console.log(countryInfo.alpha2Code);

        var isOldFlag = this.state.flags.findIndex((country) => countryInfo.alpha2Code === country.alpha2Code);
        // console.log(isOldFlag);
        if (isOldFlag === -1 && this.state.flags.length < 5) {
            this.setState({
                flags: [countryInfo, ...this.state.flags]
            })
        } else if (isOldFlag === -1 && this.state.flags.length === 5) {
            let oldFlags = this.state.flags;
            oldFlags.pop();
            this.setState({
                flags: [countryInfo, ...oldFlags]
            })
        }
    }


    render() {
        return (
            <section className="flags-bg container">

                {this.state.flags.map((country, index) => {
                    return (
                        <div key={index} onClick={() => this.onClickFlag(country)} className="flags">
                            <img alt=""  src={country.flag}/>
                        </div>
                    )
                })}


            </section>
        )
    }
}


export default Flags;