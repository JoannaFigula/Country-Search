import React, {Component} from 'react';
import './Info.css';


class Info extends Component {

    render() {
        // console.log(this.props.countryInfo.currencies);

        return (
            <section className="info container">

                <div className="country-image">
                    {/*<img src={this.props.countryInfo.flag ? this.props.countryInfo.flag : 'images/poland.jpg'}/>*/}
                    <img src={this.props.countryInfo.flag}/>
                </div>


                <div className="country-info">
                    <div className="country-plan row">
                        <div className="col-2">
                            <h1>Main informations:</h1>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="row">
                            <div className="col-1"><h3>Name: </h3></div>
                            <div className="col-1"><h3>{this.props.countryInfo.name}</h3></div>
                        </div>
                        <div className="row">
                            <div className="col-1">Capital:</div>
                            <div className="col-1">{this.props.countryInfo.capital}</div>
                        </div>
                        <div className="row">
                            <div className="col-1">Region:</div>
                            <div className="col-1">{this.props.countryInfo.region}</div>
                        </div>
                        <div className="row">
                            <div className="col-1">Subregion:</div>
                            <div className="col-1">{this.props.countryInfo.subregion}</div>
                        </div>
                        <div className="row">
                            <div className="col-1">Population:</div>
                            <div
                                className="col-1">{this.props.countryInfo.population ? `${(this.props.countryInfo.population / 1000000).toFixed(2)} mln` : ""}</div>
                        </div>
                        <div className="row">
                            <div className="col-1">Area:</div>
                            <div
                                className="col-1">{this.props.countryInfo.area ? `${this.props.countryInfo.area} km2` : ""}</div>
                        </div>
                        <div className="row">
                            <div className="col-1">Borders:</div>
                            <div
                                className="col-1">{this.props.countryInfo.borders ? this.props.countryInfo.borders.map((border) => `${border}, `) : ""}</div>
                        </div>
                        <div className="row">
                            <div className="col-1">Currencies:</div>
                            <div className="col-1">{this.props.countryInfo.currencies[0].name}</div>
                        </div>
                    </div>
                </div>

            </section>

        )
    }

}

export default Info;