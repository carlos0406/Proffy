import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TecherForm from './pages/TeacherForm'
import TecherList from './pages/TeacherList'


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/study" component={TecherList} />
            <Route path="/give-classes" component={TecherForm} />
        </BrowserRouter>
    )
}

export default Routes;