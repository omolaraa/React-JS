import React from "react";

class SearchBar extends React.Component{
    // Uncontrolled event handler
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = {term: ''};

    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.term);
    }

    render (){
        return(
            <div className="ui segment">
                <form   onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type="text" onChange={this.onInputChange} /> */}
                        {/* Alternate event handler syntex: */}
                        {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
                        {/* Controlled event handler */}
                        <input 
                        type="text"
                         value={this.state.term} 
                         onChange={e => this.setState({term: e.target.value})}
                          />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;