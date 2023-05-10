import { Formik, Form } from "formik"
import React from "react"
import styles from "./login.module.css"
import Input from "../../components/forms/Input"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/authService"

interface LoginValues {
  email: string
  password: string
}

const initialValues: LoginValues = {
  email: "",
  password: "",
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: Yup.string()
    .min(6, "Mínimo 6 caracteres")
    .required("Campo obrigatório"),
})

const Login = () => {
  const navigate = useNavigate()
  const onSubmit = async (values: LoginValues) => {
    try {
      await login(values.email, values.password)
      navigate("/")
      console.log(values)
    } catch (error) {
      console.log(error)
      alert("Usuário ou senha inválidos")
    }
  }

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.formWrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <h1 className={styles.title}>Meu Site Pessoal</h1>

              <Input
                label="Email"
                name="email"
                type="email"
                errors={errors.email}
                touched={touched.email}
              />

              <Input
                label="Password"
                name="password"
                type="password"
                errors={errors.password}
                touched={touched.password}
              />

              <button type="submit" className={styles.button}>
                Entrar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
