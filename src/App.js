//Stateless functional components
//class based components
//state, life cycle methods
//React hooks
//classes- Syntactical sugar for contrctor functions
//subclass of Component 
//extends functionality
//Component class is used to transfer from basic Es6 class.



// state, this.setState = hold/access/change data of component
// props =read only

import React from 'react';
import BookList from './BookList' 
import './App.css'
const App=()=>(
  <section>
    <BookList />
  </section>
)
 
export default App;