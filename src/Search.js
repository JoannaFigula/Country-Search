import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInputValue: '',
        }
        this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
        this.onSearch = this.onSearch.bind(this);

        this.inputComponentReference=React.createRef();
    }

    onSearch(e) {
        e.preventDefault();
        // console.log(this.state.searchInputValue);
        this.props.fetchInfo(this.state.searchInputValue);

        // console.log(this.inputComponentReference);
        this.inputComponentReference.current.value="";
        this.setState({
            searchInputValue: '',
        })
    }

    onChangeSearchInput(e) {
        // console.log(e.target.value);
        this.setState({searchInputValue: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.onSearch} className="form container">
                <h1>Search Country</h1>
                <div className="form-row">
                    <input onChange={this.onChangeSearchInput} type="text" placeholder="Search"
                           className="form-control" ref={this.inputComponentReference}/>
                </div>

                <div className="form-row">
                    <button type="submit" className="form-button">Search</button>
                </div>
            </form>
        )
    }
}

export default Search;