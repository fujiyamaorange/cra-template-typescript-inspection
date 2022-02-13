import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { FormikForm } from './form/FormikForm'
import { ReactHookForm } from './form/ReactHookForm'

function App() {
  return (
    <Router>
      <header>This is Header</header>
      <Routes>
        <Route path="/">
          <Route path="form">
            <Route path="formik" element={<FormikForm />} />
            <Route path="reacthookform" element={<ReactHookForm />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
