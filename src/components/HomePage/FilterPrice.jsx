import { useForm } from "react-hook-form"
import ('../../pages/styles/FilterPrice.css')

const FilterPrice = ({setPriceRange}) => {

 const {register, handleSubmit, reset} = useForm()

 const submit = data => {
    const from = +data.from
    const to = +data.to

    setPriceRange({
        from,
        to: to === 0 ? Infinity : to
    })
    
    reset ({
        from: '',
        to: '',
    })
 }
  return (
    <form className="filter__form" onSubmit={handleSubmit(submit)}>
        <label className="filter__label">
            <br/>
            <span className="filter__span">From</span>
            <input className="filter__input" {...register('from')} type="number" />
            </label>
        <label className="filter__label1" >
            <span className="filter__span1">To</span>
            <input className="filter__input" {...register('to')} type="number" />
            </label>
            <button className="filter__button">Filter</button>
    </form>
  )
}

export default FilterPrice