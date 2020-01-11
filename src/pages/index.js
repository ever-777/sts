import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Image} from "react-bootstrap";
import ModalForDoors from "../components/modalForDoors";
import ModalForDoorsButton from "../components/modalForDoorsButton";

const IndexPage = ({data}) => (
    <Layout activeItem="Металлические">
        <SEO title="Двери металлические"/>
        <h1>Двери</h1>
        <div className={"d-flex flex-wrap"}>
            {data.allMarkdownRemark.edges.map(({node}) => (
                <div key={node.id} className={"card w-50"}>
                    <Link to={node.fields.slug} className={"card-body"}>
                        <div className={"d-flex justify-content-center"}>
                            <Image src={"images/doors/" + node.frontmatter.picture}/>
                        </div>
                        <h5>{node.frontmatter.title}</h5>
                        <p>Цена: {node.frontmatter.price} рублей</p>
                    </Link>
                    <div className={"d-flex justify-content-center card-footer"}>
                            <ModalForDoorsButton/>
                    </div>
                </div>
            ))}
        </div>
        <ModalForDoors/>
    </Layout>
)


export default IndexPage

export const query = graphql`
{
    allMarkdownRemark {
    totalCount
    edges {
    node {
    id
    frontmatter {
    title
    price
    picture
}
    fields{
    slug
}
    excerpt
}
}
}
}
`
