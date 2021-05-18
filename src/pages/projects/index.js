import React from "react"
import Layout from "../../components/Layout"
import "../../styles/global.css"
import * as styles from "../../styles/projects.module.css"

export default function index() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <section>
          <div>
            <h2>Portfolio</h2>
            <p>Projects & Websites I've Created</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
