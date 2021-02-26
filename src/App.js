import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Register />
    );
  }
}

let validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class Register extends Component {

 constructor(props){
   super(props);
//  the state contains property names of every input and also a place to store error messages.
   this.state = {
      fullName: null,
      email: null,
      password: null,

      // if there is an error, they errors object key will have a string as a value.
      errors : {
        fullName: '',
        email: '',
        password: ''
      }
   }
 }
  handleChange = event => {
      event.preventDefault();
      const { name, value } = event.target;
      // let name = stores target element name attr value here.
      // let value = stores input target input value; not name attr value;
      
      let errors = this.state.errors;
    
      // switch statment runs every single time a character is entered.
      switch(name) {
      // switch(name) = input name attr
      // case value = input name attr value;
      // when event.target is fired off, its grabs the clicked (target) <input>  name attribute's value and checks for the matching case value. ex <input name = "name"> = case 'name': .... 
        case 'name':
          errors.fullName = 
          value.length < 5 ? 'Full Name must be 5 characters' : '';
          console.log(event.target.name, event.target.value);
          break;

        case 'emailAddy':
          errors.email = 
            validEmailRegex.test(value) ? '' : 'Email is not valid!';
            console.log(event.target.name, event.target.value)
          break;

        case 'password':
          errors.password = 
            value.length < 8 ? 'Password must be 8 character long!' : '';
            console.log(event.target.name, event.target.value);
            break;

        default:
            break

      }
      this.setState( {errors, [name]: value}, ()=> {
        console.log(errors)
      })
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   if(validateForm(this.state.errors)){
  //     console.info('valid Form')
  //   } else {
  //     console.error('Invalid Form')
  //   }
  // }
  render(){

    return(
      <div className="body">
        <div className="form">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="name">
              <label htmlFor="names">Full Name:</label>
              <input type="text" name="name" onChange={this.handleChange} noValidate/>
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input type="email" name="emailAddy" onChange={this.handleChange} noValidate/>
            </div>
            <div className="pass">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" onChange={this.handleChange} noValidate/>
            </div>
            <div className="restrictions">
              <p>Password must be eight character in length</p>
            </div>
          </form>
          <button>Create</button>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    )
  }

}

export default App;
