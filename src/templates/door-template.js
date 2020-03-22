import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Image} from "react-bootstrap";
import ModalForDoors from "../components/modalForDoors";
import ModalForDoorsButton from "../components/modalForDoorsButton";

export default ({data}) => (
    <Layout>
        <SEO title={data.markdownRemark.frontmatter.title}/>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div className={"d-flex justify-content-center"}>
            <Image src={"../images/doors/" + data.markdownRemark.frontmatter.picture}/>
        </div>
        <p><span className={"font-weight-bold"}>Цена:</span> {data.markdownRemark.frontmatter.price} рублей</p>
        <p><span className={"font-weight-bold"}>Размер:</span> {data.markdownRemark.frontmatter.size}</p>
        <p className={"text-justify"}><span
            className={"font-weight-bold"}>Описание:</span> {data.markdownRemark.frontmatter.description}</p>
        <ModalForDoorsButton/>
        <ModalForDoors/>
    </Layout>
)

export const query = graphql`
query($slug: String!){ 
  markdownRemark (fields: {slug: {eq:$slug}}) {
        id
        frontmatter {
          title
          price
          picture
          size
          description
          }
          fields{
          slug
          }
  }
}
`
