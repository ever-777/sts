import React from "react"
import {YMaps, Map, Placemark} from "react-yandex-maps"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactsPage = () => (
  <Layout activeItem="Контакты">
        <SEO title="Контакты"/>
        <h1>Контакты</h1>
        <p><span className={"font-weight-bold"}>ООО "Универсал"</span></p>
        <p><span className={"font-weight-bold"}>Телефон:</span> 8 (846) 230-08-09</p>
        <p><span className={"font-weight-bold"}>E-mail:</span> 2300809@bk.ru</p>
        <p><span className={"font-weight-bold"}>Адрес:</span> 443028, г.Самара, ул. Виталия Жалнина, д.3, кв.99</p>
        <p><span className={"font-weight-bold"}>Часы работы:</span> пн-пт 9:00-18:00</p>
        <YMaps>
                <Map defaultState={{center:[53.312478,50.308770], zoom:16}} width={"100%"} height={"300px"}>
                        <Placemark
                                defaultGeometry={[53.312478,50.308770]}
                                properties={{balloonContent:  "ООО \"Универсал\" Офис", hintContent:  "ООО \"Универсал\"  Офис" }}
                                modules = {['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                />
                </Map>
        </YMaps>
        <p></p>
        <p><span className={"font-weight-bold"}>Адрес производства:</span> Самарская обл., пос. Козелки база УПТК 522 Спецстроя России</p>
        <p><span className={"font-weight-bold"}>Телефоны:</span> 8 (846) 250-10-10, +7(937) 201-47-77, +7(996) 724-00-00</p>
            <YMaps>
                    <Map defaultState={{center:[53.334862,50.322600], zoom:16}} width={"100%"} height={"300px"}>
                            <Placemark
                                    defaultGeometry={[53.334862,50.322600]}
                                    properties={{balloonContent:  "ООО \"Универсал\" Производство", hintContent:  "ООО \"Универсал\" Производство" }}
                                    modules = {['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                    />
                    </Map>
            </YMaps>
    </Layout>
)

export default ContactsPage
