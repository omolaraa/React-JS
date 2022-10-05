import React from 'react';
import ReactDOM  from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//Functional component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>Hi There!</div>;
// };

// Class component
class App extends React.Component{

        // This is the only time we do direct assignment to this.state
        state = { lat:null, errorMessage: '' };

 // It's best to place data loading items inside the componentDidMount method
 componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({ lat: position.coords.latitude }),
        (err) => this.setState({ errorMessage: err.message })
    );
 }
    render() {
        // return ( 
        // <div>
        //     Latitude: {this.state.lat}
        //     <br/>
        //     Error: {this.state.errorMessage}
        //      </div>
        // );
    // Conditional statement for when the positionn, error message or loading should display
    if(this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage} </div>
    }

    if(!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading!</div>
    }
} 

ReactDOM.render(<App/>, document.querySelector('#root'))