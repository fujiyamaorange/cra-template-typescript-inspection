import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import '../src/App.css'
import { FormikForm } from './form/FormikForm'
import { ReactHookForm } from './form/ReactHookForm'

function App() {
  return (
    <Router>
      <div className="app-header">
        <Link to={'/form/formik'}>Formik Form</Link>
        <Link to={'/form/reacthookform'}>React Hook Form</Link>
      </div>
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
