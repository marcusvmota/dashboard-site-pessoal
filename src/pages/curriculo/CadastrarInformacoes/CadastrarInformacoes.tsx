import React from "react"
import styles from "./CadastrarInformacoes.module.css"

const CadastrarInformacoes = () => {
  return (
    <div className={styles.formWrapper}>
      <form action="" className={styles.form}>
        <h2 className={styles.title}>Informações Pessoais</h2>

        <fieldset className={styles.formGroup}>
          <label htmlFor="foto" className={styles.label}>
            Foto
          </label>
          <input type="text" name="foto" id="foto" className={styles.input} />
        </fieldset>

        <fieldset className={styles.formGroup}>
          <label htmlFor="nome" className={styles.label}>
            Nome
          </label>
          <input type="text" name="nome" id="nome" className={styles.input} />
        </fieldset>

        <fieldset className={styles.formGroup}>
          <label htmlFor="cargo" className={styles.label}>
            Cargo
          </label>
          <input type="text" name="cargo" id="cargo" className={styles.input} />
        </fieldset>

        {/* textarea de resumo */}
        <fieldset className={styles.formGroup}>
          <label htmlFor="resumo" className={styles.label}>
            Resumo
          </label>
          <textarea name="resumo" id="resumo" className={styles.textarea} />
        </fieldset>
      </form>
    </div>
  )
}

export default CadastrarInformacoes
