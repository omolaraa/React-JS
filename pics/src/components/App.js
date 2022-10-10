import React from "react";
import axios from 'axios';
import SearchBar from './SearchBar';

 class App extends React.Component {

    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization:
                'Client-ID QO3my55AOv928CIAJsKbiCosAgJgxLqx6YBizBL6HPE'
            }
        });
    }

    render(){
    return (
        <div className="ui container" style={{marginTop : '10px'}}>
            <SearchBar submit={this.onSearchSubmit} />
        </div>
    )
    }
 }

export default App;