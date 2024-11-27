import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import ClassCom from './components/ClassCom';
import Props from './components/Props';
import PropsClass from './components/PropsClass';
import ClassState from './components/ClassState';
import IncreDecrFun from './components/IncreDecrFun';
import InputSearch from './components/InputSearch';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import AxiosApi from './components/AxiosApi';

function App() {
  return (
    <div className='bg-info'>
      <AxiosApi />
    </div>
  )
}





// --------Navbar , footer, card
// function App() {

//     const users = [
//         {name: 'John', age: 25, occupation: 'Developer', city: 'Ahmedabad'},
//         {name: 'Jane', age: 30, occupation: 'Designer', city: 'Surat'},
//         {name: 'Bob', age: 35, occupation: 'Manager', city: 'Vadodara'},
//     ]

//   return (
//     <div>
//       <Navbar />
//       <div>
//           {users.map((e)=>{
//             return <Card userName={e.name} ageA={e.age} occu={e.occupation} citi={e.city}/>
//           })}
//       </div>
//       <Footer />
//     </div>
//   )
// } 
// -------------------

// ------------- Ex-2 class component
// class App extends React.Component {
//   render() {
//     return( 
//     <div>
//       <h1>Hello</h1>
//       <Header />
//       <ClassCom />

//       <Props name='Meet' lastName='Patel'><p>This is a smart boy</p> </Props>
//       <Props name='Dhruvin' lastName='Golani'> 
//         <a href="https://www.google.com">Click here</a>
//       </Props>
//       <Props name='Yash' lastName='Patel'/>

//       <PropsClass name='Meet'><p>This is a name</p> </PropsClass>
//       <PropsClass name='Yash' />
//       <ClassState/>
//       <IncreDecrFun />
//       <InputSearch />
//     </div>
//   )
//   }
// }
// -----------------------

// ------------- Example-1
// const age = (a) => {
//   if(a > 8) {
//     return <span>you are eligible</span>
//   }
//   else {
//     return <span>you are not eligible</span>
//   }
// }
// const newElement=React.createElement('h2',{ classNama:'newElement'},'Hello,word');
// const text = function(){
//   alert('Hello, type there');
// } 
// const name = <span>Hello, How are you</span>
// function App() {
//   return (
//       <div>
//         <p>Age:{age(19)}</p>
//         <p>{newElement}</p>
//         <button onClick={text}>Text Alert</button>
//         <p>{name}</p>
//       </div>
//   );
// }
// -------------

export default App;
