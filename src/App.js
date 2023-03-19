import './App.css';
import {getAuth} from 'firebase/auth'
import app from './firebase/firebase.init';
import RegisterReactBs from './components/RegisterReactBs';

const auth = getAuth(app)

function App() {

  // const handleRegister = event => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   console.log(email, password);
  // }

  return (
    <div className="">
      <RegisterReactBs></RegisterReactBs>
      {/* <form onSubmit={handleRegister}>
        <input type='email' name='email' id='' placeholder='your email'/>
        <br/>
        <input type='password' name='password' id='' placeholder='your password'/>
        <br/>
        <button type='submit'>Register</button>
      </form> */}
    </div>
  );
}

export default App;
