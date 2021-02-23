
import './App.css';

function App() {
  return (
    <div className="body">
      <div className="form">
         <h1>Register</h1>
        <form action="">
          <div className="name">
            <label htmlFor="name">Full Name:</label>
            <input type="text" name="name"/>
          </div>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email"/>
          </div>
          <div className="pass">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password"/>
          </div>
          <div className="restrictions">
            <p>Password must be eight character in length</p>
          </div>
        </form>
        <button>Create</button>
      </div>
    </div>
  );
}

export default App;
