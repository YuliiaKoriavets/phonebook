import { useState } from "react"
import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/authOperations"

export default function LoginPage (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    const handleChange = event => {
      const { name, value } = event.target;
  
      switch (name) {
          case 'email':
            setEmail(value);
            break;
            case 'password':
            setPassword(value);
            break;
          default:
            return;
        }
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      const form = event.currentTarget;
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      setEmail('')
      setPassword('')
    };
  
    return (
      <div>
        <title>Login</title>
  
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
}