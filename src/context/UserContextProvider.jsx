    import React from 'react'
    import UserContext from './UserContext'
    
    function UserContextProvider({children}) {
        const [user, setUser] = React.useState(null)
      return (
        <UserContext.Provider value={{user,setUser}}>
            {children}  //components that can use the data
        </UserContext.Provider>
      )
    }
    
    export default UserContextProvider