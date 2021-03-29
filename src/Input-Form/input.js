import React, { Component }  from 'react';


const validEmailRegex = 
RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

let validForm = (objWeArePassingIn) => {
  let valid = true;

  // we need to retrieve or error object values. For each value longer than 0 we return invalid. If all are empty we are good to go!

  // values() returns an array
  Object.values(objWeArePassingIn).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
}
class Register extends Component {
  // with constructor we create an instance of an object.
  constructor(props){
    super(props);

    this.state = {
      name: null,
      email: null,
      password: null,
      error : {
        // keys with strings are invalid, empty values are valid
        name: '',
        email: '',
        password: '',
      }
    }
  }

  // After creating our state, we need to retrieve our input values. We need to check if our input valid (length and correct syntax). If the input in invalid, we will update the keys value with a corresponding error message, else leave it empty.we will update the state with setState. What does set state do? It holds the updates and lets the component know its should make changes to the current state.
  
  handleChange = (e) => {
    e.preventDefault();
    // retrieve input values and the name of the targeted input element.
    let { name, value } = e.target;

    let {error} = this.state;

    // we will use a switch statement because we have many values.
    switch(name){ // pass is name of the targeted element
      case 'fname':
        // set objects key = ternary result;
        error.name = value.length < 5 ? 'Name must be composed of 5 or more characters' : '';
        // console.log(error.name)
        break;
      case 'email':
        error.email = validEmailRegex.test(value) ? '' : 'Invalid Email';
        // console.log(error.email);
        break;
      case 'password':
        error.password = value.length < 8 ? 'Password must be composed of 8 or more characters' : ''
        // console.log(error.password);
        break;
      default:
        break;
    }
  // we communicate any updates for the component with setState;
    this.setState({error, [name]:value})
  }
 

  //Although we have updated our values (or not), we still have to verify if they are valid. We created a validForm callback to help out.
  handleSubmit = (e) => {
    e.preventDefault();
    let { error } = this.state;
    if(validForm(error)){
      console.log('Valid Form')
    } else {
      console.log('Invalid Form')
    }
  }

  // now that we've evaluated the form, we should we return an error message if necessary.

    render(){

      let { error } = this.state;
        return(
            <div className="body">
              <div className="form">
                <h1>REGISTER</h1>
                <form  onSubmit={this.handleSubmit} noValidate >
                  <div className="fname">
                    <label htmlFor="names">Full Name:</label>
                    <input type="text" name="fname" placeholder="5 character minimum" onChange={this.handleChange} noValidate/>
                    {/* Add the keys error message, if there is one */}
                    {error.name.length > 0 && <div className ='error'>{error.name}</div>}
                  </div>
                  <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" onChange={this.handleChange} noValidate/>
                    {error.email.length > 0 && <div className='error'>{error.email}</div>};
                  </div>
                  <div className="pass">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="8 character minimum"onChange={this.handleChange} noValidate/>
                    {error.password.length > 0 && <div className='error'>{error.password}</div>}
                  </div>
                  <div className="submit">
                    <button>CREATE</button>
                  </div>
                </form>
              </div>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
        )
    }
}

export default Register;