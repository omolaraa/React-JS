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
    this.state = { lat:null };

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            //we called setState
            this.setState({ lat: position.coords.latitude });
             //Never do:  this.state.lat = position.coords.latitude
        },
        (err) => console.log(err)
    );
 }

    render() {
        return <div>Latitude: {this.state.lat} </div>;
    }
} 

ReactDOM.render(<App/>, document.querySelector('#root'))