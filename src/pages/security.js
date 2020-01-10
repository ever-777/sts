import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Image} from "react-bootstrap";
import { Link } from "gatsby"


export default () => (
    <Layout>
        <SEO title="Безопасность"/>
        <h1>Безопасность</h1>
        <div className={"card-group"}>
            <div className={"card"}>
                <Link to={"/domofons/"}>
                    <Image className={"card-img-top"} src={"/images/cards/domofoncard.jpg"} alt={"Домофонное оборудование"}/>
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>Домофонное оборудование</h5>
                    </div>
                </Link>
            </div>
            <div className={"card"}>
                <Link to={"/video/"}>
                    <Image className={"card-img-top"} src={"/images/cards/videocard.jpg"} alt={"Видеонаблюдение"}/>
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>Видеонаблюдение</h5>
                    </div>
                </Link>
            </div>
            <div className={"card"}>
                <Link to={"/gates/"}>
                    <Image className={"card-img-top"} src={"/images/cards/shlagbaumcard.jpg"} alt={"Ворота и шлагбаумы"}/>
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>Ворота и шлагбаумы</h5>
                    </div>
                </Link>
            </div>
        </div>
    </Layout>
)