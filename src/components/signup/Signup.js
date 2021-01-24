import React, { useState } from 'react'
import UserService from '../../services/user-service'

const Signup = () => {

    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[phone, setPhone] = useState('')
    const[birthAge, setBirthAge] = useState('')
    const[adress, setAdress] = useState('')
    const[summary, setSummary] = useState('')
    const[message, setMessage] = useState('')

    const onChangeName = (e) => {
        const name = e.target.value
        setName(name)
    }
    const onChangeSurname = (e) => {
        const surname = e.target.value
        setSurname(surname)
    }
    const onChangeEmail = (e) => {
        const email = e.target.value
        setEmail(email)
    }
    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
    }
    const onChangePhone = (e) => {
        const phone = e.target.value
        setPhone(phone)
    }
    const onChangeBirth = (e) => {
        const birthAge = e.target.value
        setBirthAge(birthAge)
    }
    const onChangeAdress = (e) => {
        const adress = e.target.value
        setAdress(adress)
    }
    const onChangeSummary = (e) => {
        const summary = e.target.value
        setSummary(summary)
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        setMessage('')
    }

    return (
        <div>
            <form action={handleSignUp}>
                <input 
                    type="text" 
                    name='name' 
                    value={name} 
                    onChange={e => onChangeName(e)} 
                    placeholder="Name"
                />
                <input 
                    type="text" 
                    name='surname' 
                    value={surname} 
                    onChange={e => onChangeSurname(e)} 
                placeholder="Surname"
                />
                <input 
                    type="text" 
                    name='email' 
                    value={email} 
                    onChange={e => onChangeEmail(e)} 
                placeholder="email"
                />
                <input 
                    type="password" 
                    name='password' 
                    value={password} 
                    onChange={e => onChangePassword(e)} 
                    placeholder="your password"
                />
                <input 
                    type="text" 
                    name='phone' 
                    value={phone} 
                    onChange={e => onChangePhone(e)} 
                    placeholder="phone"
                />
                <input 
                    type="text" 
                    name='birthage' 
                    value={birthAge} 
                    onChange={e => onChangeBirth(e)} 
                    placeholder="birthage"
                />
                <input 
                    type="text" 
                    name='adress' 
                    value={adress} 
                    onChange={e => onChangeAdress(e)} 
                    placeholder="adress"
                />
                <input 
                    type="text" 
                    name='summary' 
                    value={summary} 
                    onChange={e => onChangeSummary(e)} 
                    placeholder="summary"
                />
            </form>
        </div>
    )
}

export default Signup