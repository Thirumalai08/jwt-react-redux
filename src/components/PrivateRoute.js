import React from 'react'
import {Redirect} from 'react-router-dom'

class ProtectedRoute extends React.Component {
    render(){
        const Component = this.props.component
        const isAuth = localStorage.getItem('userInfo')
        return isAuth ? (
            <Component />
        ) : (
            <Redirect to={{pathname: '/login'}} />
        )
    }
}
export default ProtectedRoute