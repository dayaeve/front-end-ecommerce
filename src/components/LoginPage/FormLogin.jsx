import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import('../../pages/styles/FormLogin.css')

const FormLogin = () => {

  const {register, handleSubmit, reset} =  useForm()

  const {loginUser} = useAuth()

  const submit = (data) => {
    loginUser(data)

  }
    return (
        
        <div className="login__container">
        <form className="login__form" onSubmit={handleSubmit(submit)}>
        <h2 className="login__h2">Sign in</h2>
            <label className="login__label">
                <span>Email</span>
                <input className="login__input" {...register('email')} type="email" />
            </label>
            <label className="login__label1">
                <span>Password</span>
                <input className="login__input" {...register('password')} type="password" />
            </label>
            <button className="login__button">Login</button>
        </form>
        </div>
    )
}

export default FormLogin