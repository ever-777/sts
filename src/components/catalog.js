import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Catalog = ({activeItem}) => (
    <div>
        <div>
            КАТАЛОГИ
        </div>
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link active" href="/">Двери</a>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Металлические</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Деревянные</a>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/security/"}>Безопасность</Link>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/domofons/"}>Домофонное обрудование</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/video/"}>Видеонаблюдение</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/gates/"}>Ворота и шлагбаумы</Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/mconstructions/"}>Металлоконструкции</Link>
                <ul className="nav flex-column">
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
