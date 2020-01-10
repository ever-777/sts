import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const menu = ({activePage}) => (
    <nav
        // style={{
        //     margin: `0 auto`,
        //     maxWidth: 960,
        //     padding: `1.45rem 1.0875rem`,
        //     textAlign: 'right'
        // }}
        className={"nav justify-content-end"}
    >
        <Link className={"nav-link disabled"}
              to="/about/">О компании</Link>
        <Link  className={"nav-link disabled"}
              to="/">Наши партнеры</Link>
        <Link  className={"nav-link"}
              to="/contacts/">Контакты</Link>
    </nav>
)

menu.propTypes = {
    activePage: PropTypes.string,
}

menu.defaultProps = {
    activePage: ``,
}

export default menu
