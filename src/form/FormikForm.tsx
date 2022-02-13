import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'

import '../style/form/FormikForm.css'

export const FormikForm = () => {
  const initialValues = {
    name: '',
    phoneNumber: '',
    email: '',
    postCode: '',
    prefecture: '',
    address: '',
  }

  const onSubmit = (values: typeof initialValues) => {
    console.log('form data', values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('必須項目です'),
    phoneNumber: Yup.string().required('必須項目です'),
    email: Yup.string().email('正しいメール形式で入力してください').required('必須項目です'),
    postCode: Yup.string().required('必須項目です'),
    prefecture: Yup.string().required('必須項目です'),
    address: Yup.string().required('必須項目です'),
  })

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="formikFormContainer">
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />

          <Field type="text" id="phoneNumber" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" />

          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" />

          <Field type="text" id="postCode" name="postCode" />
          <ErrorMessage name="postCode" />

          <Field type="text" id="prefecture" name="prefecture" />
          <ErrorMessage name="prefecture" />

          <Field type="text" id="address" name="address" />
          <ErrorMessage name="address" />

          <input type="submit" />
        </Form>
      </Formik>
    </>
  )
}
