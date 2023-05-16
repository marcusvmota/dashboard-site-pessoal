import React, { useEffect, useState } from "react"

import { Formik, Form } from "formik"
import * as Yup from "yup"

import styles from "./CadastrarInformacoes.module.css"
import Input from "../../../components/forms/Input/Input"
import TextArea from "../../../components/forms/textarea/TextArea"
import {
  Informacoes,
  updateInformacoes,
  getInformacoes,
} from "../../../services/informacoesService"
import InformacoesCard from "./InformacoesCard/InformacoesCard"
import Button from "../../../components/commom/Button"

const CadastrarInformacoes: React.FC = () => {
  const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes)

  const initialValues: Informacoes = {
    id: 1,
    foto: "",
    nome: "",
    cargo: "",
    resumo: "",
  }

  const validationSchema = Yup.object().shape({
    foto: Yup.string().required("Campo obrigatório"),
    nome: Yup.string().required("Campo obrigatório"),
    cargo: Yup.string().required("Campo obrigatório"),
    resumo: Yup.string().required("Campo obrigatório"),
  })

  const fecthInformacoes = async () => {
    try {
      const informacao = await getInformacoes()
      setInformacoes(informacao)
    } catch (error) {
      console.error("Erro ao buscar informações", error)
    }
  }

  useEffect(() => {
    fecthInformacoes()
  }, [])

  const onSubmit = async (
    values: Informacoes,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await updateInformacoes(values)
      setInformacoes(values)
      console.log(values)
      // resetForm()
      alert("Formulário enviado com sucesso!")
    } catch (error) {
      console.error("Erro ao enviar formulário", error)
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.")
    }
  }

  const handleDelete = async () => {
    try {
      await updateInformacoes(initialValues)
      setInformacoes(initialValues)
      alert("Informações deletadas com sucesso!")
    } catch (error) {
      console.error("Erro ao deletar informações", error)
      alert("Ocorreu um erro ao deletar informações. Tente novamente.")
    }
  }

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2 className={styles.title}>Cadastrar Informações</h2>

            <Input
              label="Foto"
              name="foto"
              errors={errors.foto}
              touched={touched.foto}
            />

            <Input
              label="Nome"
              name="nome"
              errors={errors.nome}
              touched={touched.nome}
            />

            <Input
              label="Cargo"
              name="cargo"
              errors={errors.cargo}
              touched={touched.cargo}
            />

            <TextArea
              label="Resumo"
              name="resumo"
              errors={errors.resumo}
              touched={touched.resumo}
            />

            <Button type="submit">Salvar</Button>
          </Form>
        )}
      </Formik>

      {informacoes &&
        Object.entries(informacoes).some(
          ([key, value]) => key !== "id" && value.trim() !== ""
        ) && (
          <div className={styles.cardContainer}>
            <InformacoesCard informacoes={informacoes} />
            <Button onClick={handleDelete} red={true}>
              Deletar
            </Button>
          </div>
        )}
    </div>
  )
}

export default CadastrarInformacoes
