import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInputValue: '',
            allCountriesList: [],
        }
        this.onChangeSearchInput=this.onChangeSearchInput.bind(this);
        this.onSearch=this.onSearch.bind(this);
        this.inputComponentReference=React.createRef();
        this.fetchAllCountries=this.fetchAllCountries.bind(this);
        this.fetchAllCountries();
    }

    fetchAllCountries() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(function (response) {
                return (response.json())

            })
            .then((allCountries) => {
                let newAllCountries =  allCountries.map(element=>{
                    return element.name
                })
                // console.log(newAllCountries);
                this.setState({
                    allCountriesList: newAllCountries,
                })
            })
    }

    onSearch(e){
        e.preventDefault();
        // console.log(this.state.searchInputValue);
        //metoda fetchInfo pobierz informację a w argumencie ma wartość inputu
        this.props.fetchInfo(this.state.searchInputValue);
        console.log(this.inputComponentReference);
        //czyszczenie htmlowego inputu
        this.inputComponentReference.current.value="";
        //czyszczenie stanu, czyli informacji, którą przechowujemy w inpucie
        this.setState({
            searchInputValue:"",
        })
    }

    onChangeSearchInput(e){
        // console.log(e.target.value);
        this.setState({searchInputValue: e.target.value})
    }

    onClickCountry(countryName){
        // console.log(countryName);
        this.inputComponentReference.current.value=countryName;
        this.setState({
            searchInputValue:countryName,
        })
    }

    render() {
        return(

            <form onSubmit={this.onSearch} className="form container">
                <h1>Search Country</h1>
                <div className="form-row">
                    <input onChange={this.onChangeSearchInput} type="text" placeholder="Search"
                           className="form-control" ref={this.inputComponentReference}/>

                    {this.state.searchInputValue.length >= 3 && <div className="allCountryList">
                        {this.state.allCountriesList.filter(name=> {
                                return name.includes(this.state.searchInputValue);
                            }
                        ).filter(name=>{
                            return name!== this.state.searchInputValue;
                        })
                            .map((name, index) =>{
                                return <div key={index} onClick={()=>this.onClickCountry(name)} className="allCountryListItem">{name}</div>
                            })}

                    </div> }
                </div>

                <div className="form-row">
                    <button type="submit" className="form-button">Search</button>
                </div>
            </form>

        )
    }
}

export default Search;