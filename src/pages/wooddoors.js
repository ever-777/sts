import React from "react"
import {Link} from "gatsby"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Image} from "react-bootstrap";
import ModalForDoors from "../components/modalForDoors";
import ModalForDoorsButton from "../components/modalForDoorsButton";
import InfoNotification from "../components/infoNotification";

const IndexPage = ({data}) => (
    <Layout activeItem="Деревянные">
        <SEO title="Двери деревянные"/>
        <h1>Двери деревянные</h1>
        <div className={"d-flex flex-wrap"}>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id} className={"card w-50"}>
                    <Link to={node.fields.slug} className={"card-body"}>
                        <div className={"d-flex justify-content-center"}>
                            <Image src={"../images/doors/" + node.frontmatter.picture}/>
                        </div>
                        <h5>{node.frontmatter.title}</h5>
                        <p>Цена полотна: {node.frontmatter.price_door} рублей</p>
                        <p>Цена комплекта: {node.frontmatter.price_complect} рублей</p>
                    </Link>
                    <div className={"d-flex justify-content-center card-footer"}>
                            <ModalForDoorsButton/>
                    </div>
                </div>
            ))}

        </div>
        <ModalForDoors/>
        <InfoNotification/>
    </Layout>
)


export default IndexPage

export const query = graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___title}, filter: {fields: {}, frontmatter: {type: {eq: "wood"}}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          price
          price_door
          price_complect
          picture
        }
        excerpt
        excerptAst
        fields {
          slug
        }
      }
    }
  }
}
`
