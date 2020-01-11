import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout activeItem="Ворота и шлагбаумы">
        <SEO title="Ворота и шлагбаумы"/>
        <h1>Ворота и шлагбаумы</h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-pause="false"
             data-interval="3000">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/gates/gates1.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="/images/gates/gates2.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="/images/gates/gates3.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="/images/gates/gates4.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </Layout>
)
