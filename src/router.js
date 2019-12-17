import React ,{ Component } from 'react'
import {Switch,Route,Redirect,HashRouter} from 'react-router-dom'
import App from './App';
import Admin from './Admin'
import Login from './pages/login/index'
import Button from './pages/ui/button/button'
import Modal from './pages/ui/modal/modal'
import Home from './pages/home/index'
class IRouter extends Component{
render(){
    return(
        <HashRouter>
            <App>
                
                <Route path='/login' component={Login} />
                <Route  path='/admin' render={()=>
                <Admin>
                    <switch>
                        <Route exact path='/admin/home' component={Home}></Route>
                        <Route exact path='/admin/ui/button' component={Button}></Route>
                        <Route exact path='/admin/ui/modal' component={Modal}></Route>
                    </switch>
                </Admin>} />
            </App>
        </HashRouter>
    )
}
}

export default IRouter