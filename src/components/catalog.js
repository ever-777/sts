import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Catalog = ({activeItem}) => (
    <div>
        <div>
            КАТАЛОГИ
        </div>
        <ul className="nav nav-pills flex-column" id={"accordion"}>
            <li className="nav-item">
                <Link className="nav-link" to="/"  data-toggle={"collapse"} data-target={"#collapseOne"} aria-expanded={"true"} aria-controls={"collapseOne"}>Двери</Link>
                {/*<div className="nav-link" data-toggle={"collapse"} data-target={"#collapseOne"} aria-expanded={"true"} aria-controls={"collapseOne"}>Двери</div>*/}
                <ul className={activeItem==="Деревянные" || activeItem==="Фурнитура" || activeItem==="Металлические" || activeItem==="Коробки" ? "nav flex-column collapse show" : "nav flex-column collapse"} id={"collapseOne"} data-parent={"#accordion"}>
                    <li className="nav-item">
                        <a className={activeItem==="Металлические" ? "nav-link active" : "nav-link"} href="/">Металлические</a>
                    </li>
                    <li className="nav-item">
                        <a className={activeItem==="Деревянные" ? "nav-link active" : "nav-link"} href="/wooddoors/">Деревянные</a>
                    </li>
                    <li className="nav-item">
                        <a className={activeItem==="Фурнитура" ? "nav-link active" : "nav-link"} href="/furnitura/">Фурнитура</a>
                    </li>
                    <li className="nav-item">
                        <a className={activeItem==="Коробки" ? "nav-link active" : "nav-link"} href="/korobki/">Коробки</a>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/domofons/"}  data-toggle={"collapse"} data-target={"#collapseTwo"} aria-expanded={"true"} aria-controls={"collapseTwo"}>Безопасность</Link>
                {/*<div className="nav-link" data-toggle={"collapse"} data-target={"#collapseTwo"} aria-expanded={"true"} aria-controls={"collapseTwo"}>Безопасность</div>*/}
                <ul className={activeItem==="Домофонное обрудование" || activeItem==="Видеонаблюдение" || activeItem==="Ворота и шлагбаумы" ? "nav flex-column collapse show" : "nav flex-column collapse"}  id={"collapseTwo"} data-parent={"#accordion"}>
                    <li className="nav-item">
                        <Link className={activeItem==="Домофонное обрудование" ? "nav-link active" : "nav-link"} to={"/domofons/"}>Домофонное обрудование</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={activeItem==="Видеонаблюдение" ? "nav-link active" : "nav-link"} to={"/video/"}>Видеонаблюдение</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={activeItem==="Ворота и шлагбаумы" ? "nav-link active" : "nav-link"} to={"/gates/"}>Ворота и шлагбаумы</Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/mconstructions/"}>Металлоконструкции</Link>
                <ul className={activeItem==="Для дома" || activeItem==="Для дачи" || activeItem==="Для города" ? "nav flex-column collapse show" : "nav flex-column collapse"}>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Для дома</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Для дачи</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Для города</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div>
            УСЛУГИ
        </div>
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link  disabled" href="/">Строительство</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="/">Безопасность</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="/">Монтажные работы</a>
            </li>
        </ul>
    </div>
)

Catalog.propTypes = {
    activeItem: PropTypes.string,
}

Catalog.defaultProps = {
    activeItem: ``,
}

export default Catalog
