import React from 'react'
import Landing from '../components/landing/Landing'
import Signup from '../components/signup/Signup'
import Login from '../components/login/Login'

const routes = {
    '/': () => <Landing />,
    '/signup': () => <Signup />,
    '/login': () => <Login />
}
export default routes