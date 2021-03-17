import React, { Component }  from 'react';

const validEmailRegex = 
RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class Register extends Component {

    constructor(props){
        super(props);

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
        let {name, value} = e.target;
        let errors = this.state.errors;
        switch(name){
            case 'fname':
               errors.name = value.length < 5 ? "Name needs to be longer than 5 characters" : '';
                break;
            case 'emailAddy':
                errors.email = validEmailRegex.test(value) ? '' : 'Email is invalid';
                break;
            case 'password':
                errors.password = value.length < 8 ? 'Password needs to be longer than 8 characters' : '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value}, () => {
            console.log(errors)
        })
    }
    
    render(){
        return(
            <div className="body">
              <div className="form">
                <h1>Register</h1>
                <form  noValidate  >
                  <div className="fname">
                    <label htmlFor="names">Full Name:</label>
                    <input type="text" name="fname" onChange={this.handleChange} noValidate/>
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

export default Register;