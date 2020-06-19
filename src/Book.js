import React, { Component } from 'react';
// import Button from './Button'
//Prop drilling Methods to children

class Book extends Component {
   constructor(props){
     super(props)
     this.state={
        count: 1
     } 
    //  this.handleClick=this.handleClick.bind(this)
// this.addCount=this.addCount.bind(this);
// this.resetCount=this.resetCount.bind(this);
// this.lowerCount=this.lowerCount.bind(this);
// this.handleDelete=this.handleDelete.bind(this);
}
   
//     state={
//       count: 1
//    }
   

    // handleClick(){
    //     console.log("you clicked me");
    //     console.log(this.state.count);
        
    // }



    // handleClick=()=>{
    //     console.log("you clicked me");
    //     console.log(this.state.count);
        
    // }
//STATE iMMUTABLE
//shallow merge
//this.setState({})


    // addCount=()=>{
    //     this.setState({
    //     count: this.state.count + 1
    // })}
    // resetCount=()=>{ this.setState({
    //     count: 0
    // })}
    // lowerCount=()=>{
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }
    render() {
        // console.log(this.props);
const {id,img ,title}=this.props.info;        
const {handleDelete}=this.props;
// console.log(this.props);
console.log(id);

        
return (
            <article className="book">
            <img src={img} alt=""/>
           <div>
           <h3>title :{title}</h3>
             {/* <Button handleDelete={handleDelete} /> prop drilling */}
             
             {/* <button type="button" onClick={this.handleClick}>add Count</button> */}

          {/* <button type="button" onClick={this.addCount}>addCount</button>
            <h3>{this.state.count}</h3>
          <button type="button" onClick={this.resetCount}>Reset</button>
          <button type="button" onClick={this.lowerCount}>Lower Count</button> */}
      
      {/* <button type="button" onClick={handleDelete}>delete me</button> */}

      {/* <button type="button" onClick={handleDelete(id)}>delete me</button> */}
      <button type="button" onClick={()=>handleDelete(id)}>delete me</button>

           </div>
            </article>
        );
    }
}

export default Book;





