import React from 'react';
import ReactDOM  from 'react-dom';

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
 constructor(props) {
    super(props);

    // This is the only time we do direct assignment to this.state
    this.state = { lat:null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            //we called setState
            this.setState({ lat: position.coords.latitude });
             //Never do:  this.state.lat = position.coords.latitude
        },
        (err) => {
            //console.log(err)
            this.setState({ errorMessage: err.message });
        }
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
        return <div>Latitude: {this.state.lat} </div>
    }
    }
} 

ReactDOM.render(<App/>, document.querySelector('#root'))