import React, {useEffect} from 'react'
// import 'normalize.css'
// import 'materialize-css'
import {Navigation} from './UI/components/Navigation'
import {Global} from '@emotion/react'
import {Styled} from './App-styled'
// import {useStoreState} from '@proscom/prostore-react'
// import {themeStore} from './BLL/models/theme'
import {useQuery} from '@apollo/client'
import {GET_ALL_USERS} from './DAL/queries/users'

const App: React.FC = () => {

    const {data, loading, error} = useQuery(GET_ALL_USERS)

    // const theme = useStoreState(themeStore)

    useEffect(() => {
        console.log(data)
    })

    return (
        <>
            <Global styles={Styled}/>
            <div className="App">
                <Navigation/>
            </div>
        </>
    )

}

export default App
