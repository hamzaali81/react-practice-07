import React, { Component } from 'react';
import Book from './Book';
import booksdata from './BookData'
class BookList extends Component {
  
  constructor(props){
      super(props)
        this.state={
            books: booksdata
        }
    }
  
//     state={

//     //   books: [
//     //      {
//     //          book: "book number one",
//     //          author:"john doe"
    
//     //      },
//     //      {
//     //          book:"book number two",
//     //          author: "koko"
//     //      }
//     //  ]
//     books: booksdata
     
//   }
  
// handleDelete =()=>{
//     console.log(`i m from parent component`);
    
// }

// handleDelete =(id)=>{
//     console.log(id);
    
// }

handleDelete =id=>{
    console.log(this.state.books);
    const sortedBooks= this.state.books.filter((item)=> item.id !== id); 
//   console.log(this.state.books);
//   console.log(sortedBooks);
this.setState({
    books: sortedBooks
})  
      
}
    render() { 
        // const books=this.state.books.map((item)=>item.book)
        // console.log(books);
        //filter
        //forEach
        //map
        //reduce
        return (
            <section>
                {/* <Book book={this.books[0]}/> */}
                 {/* <Book /> */}
                 {this.state.books.map((item,index)=><Book info={item} key={index} handleDelete={this.handleDelete} />)}
           {/*  key={item.id} */}
            </section>
        );
    }
}
 
export default BookList;