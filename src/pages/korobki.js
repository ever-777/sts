import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Image} from "react-bootstrap";

export default () => (
  <Layout activeItem="Коробки">
        <SEO title="Коробки"/>
        <h1>Типы коробок</h1>
        <h2>1. Дверная коробка открытого типа, выполненная из цельногнутого профиля.
        </h2>
        <div className={"d-flex justify-content-center"}>
        <Image src={"/images/doors/korobka1.jpg"}/>
        </div>
        <p>
        Наличник г-образный с загибом 90°<br/>
        Цельногнутое полотно, внутри панель вдвижная.<br/>
        На данном типе дверей предусмотрена установка двух контуров уплотнения (один контур на короб, второй — на полотно).<br/>
        </p>
        <h2>2. Дверная коробка закрытого типа с заглушением снаружи.
        </h2>
        <div className={"d-flex justify-content-center"}>
        <Image src={"/images/doors/korobka2.jpg"}/>
        </div>
        <p>
        Наличник шириной 70 мм.<br/>
        Толщина короба — 94,97 или 108 мм.<br/>
        Цельногнутое полотно типа конверт.<br/>
        Толщина полотна — 64, 67 или 78 мм (без учета толщины панелей).<br/>
        На данном типе дверей предусмотрена установка двух контуров уплотнения (один контур на короб, второй — на полотно).<br/>
        </p>
  </Layout>
)
