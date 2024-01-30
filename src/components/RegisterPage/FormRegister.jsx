import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth"
import ('../../pages/styles/FormRegister.css')

const FormRegister = () => {

   const {register, handleSubmit, reset} = useForm()

   const {registerUser} = useAuth()

   const submit = (data) => {
    registerUser(data)
   }
   
    return (
        <div className="register__container">
        <form className="register__form" onSubmit={handleSubmit(submit)}>
            <label className="register__label">
                <span className="register__span">First name</span>
                <input className="register__input"{...register('firstName')} type="text" />
            </label>
            <label className="register__label" >
                <span className="register__span">Last name</span>
                <input className="register__input" {...register('lastName')} type="text" />
            </label>
            <label className="register__label1">
                <span className="register__span">Email</span>
                <input className="register__input" {...register('email')} type="email" />
            </label>
            <label className="register__label2">
                <span className="register__span">Password</span>
                <input className="register__input" {...register('password')}type="password" />
            </label>
            <label className="register__label3">
                <span className="register__span">Phone</span>
                <input className="register__input" {...register('phone')} type="text" />
            </label>
            <button className="register__button">Register</button>

        </form>
        </div>
    )
}

export default FormRegister