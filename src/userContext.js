import React, { Component } from 'react'


const UserContext = React.createContext();



class UserProvider extends Component {

    state = {
        login: 'Tomek'
    }

    logIn = (data) => {
        this.setState({login: data})
    }

    logOut = () => {
        this.setState({login: ''})
    }
   

    render() {
        return (
            <UserContext.Provider value={{
                ...this.state,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}


const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer, UserContext};