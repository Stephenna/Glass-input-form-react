import React, { Component }  from 'react';


const validEmailRegex = 
RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const vForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach( val => val.length > 0 && (valid = false));
  return valid;
}
class Register extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: null,
      email: null,
      password: null,
      errors: {
        name: '',
        email: '',
        password: '',
      }
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let { errors } = this.state;

    switch(name){
      case 'fname':
        errors.name = value.length < 5 ? 'Name must be 5 characters in length' : '';
        break;
      case 'emailAddy':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is invalid';
        break;
      case 'password':
        errors.password = value.length < 8 ? 'Password must be 8 characters in length' : '';
        break;
        default: 
        break;
    }
    this.setState( {errors, [name]: value} )
  }

 handleSubmit = (e) => {
   e.preventDefault();
  let { errors } = this.state;

  if(vForm(errors)){
    console.info('Valid Form')
  } else {
    console.error('Invalid Form')
  }
 }
 
    
    render(){
      const {errors} = this.state;
        return(
            <div className="body">
              <div className="form">
                <h1>REGISTER</h1>
                <form  onSubmit={this.handleSubmit} noValidate >
                  <div className="fname">
                    <label htmlFor="names">Full Name:</label>
                    <input type="text" name="fname" placeholder="5 character minimum" onChange={this.handleChange} noValidate/>
                    {errors.name.length > 0 && <div className='error'>{errors.name}</div>}
                  </div>
                  <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="emailAddy" onChange={this.handleChange} noValidate/>
                    {errors.email.length > 0 && <div className='error'>{errors.email}</div>}
                  </div>
                  <div className="pass">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="8 character minimum"onChange={this.handleChange} noValidate/>
                    {errors.password.length > 0 && <div className='error'>{errors.password}</div>}
                  </div>
                  {/* <div className="info">
                    <small>Password must be eight character in length</small>
                  </div> */}
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