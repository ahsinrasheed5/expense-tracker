import React,{useState} from 'react';
import './App.css';
import Parent from './Parent';
import Child from './Child';
import ContentCreate from './ContentCreate';
const App =() => {
    let countState =  useState(1);
    // let [count, setCount] = useState(30);
    return (
        <ContentCreate.Provider value= {countState}> 
        <div>
            <Parent/>
        </div>
        </ContentCreate.Provider>
    );
} 
 export default App;




// import React,{Component,object} from 'react';
// import productList from './productList';
// import Cars from './Cars';
// import MyProvider from './MyProvider';



// class App extends Component {
//   render() {
//       return (
//           <MyProvider>
//               <div className="App">
//                   <header className="App-header">
//                       <img src={logo} className="App-logo" alt="logo" />
//                       <h1 className="App-title">Welcome to my web store</h1>
//                   </header>
//                   <ProductList />
//               </div>
//           </MyProvider>
//       );
//   }
// }

// export default App;












// import ThemeContext from './context/ThemeContext';
// import Main from './MainWithClass';

// class App extends  Component {
//     state = {
//       cars: {
//         car001:{name :'Honda', price: 100},
//         car002: {name:'BMW', price: 150},
//         car003: {name:'Mercedes', price : 200}
//       }
//     };

//     incrementCarPrice = this.incrementCarPrice.bind(this);
//     decrementCarPrice = this.decrementCarPrice.bind(this);

//     incrementCarPrice (selectedID){
//       const cars = object.assign({},this.state.cars);
//       cars[selectedID].price= cars[selectedID].price + 1;
//         this.setState({
//           cars
//         });
//     }
//     decrementCarPrice (selectedID){
//       const cars = object.assign({},this.state.cars);
//       cars[selectedID].price = cars[selectedID].price - 1;
//       this.setState({
//         cars
//       });
//     }
//     render(){
//       return (
//         <div className =  "APP">
//           <header className ="App-header">
//             {/* <img src ={logo} className ="App-logo" alt="logo"/> */}
//             <h1 className= "App-litle">Welcome to Web Store</h1>
//           </header>
//           <productList
//               cars ={ this.state.cars}
//               incrementCarPrice={this.incrementCarPrice}
//               decrementCarPrice={this.decrementCarPrice}
//           />
//         </div>
//       );
//     }
// }

// export default App;
