import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import LogoImage from "../components/stslogo"

const Header = ({siteTitle}) => (
    <header
        style={{
            background: `#0C4DA1`,
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
                <div style={{display: "flex"}}>
                    <div style={{flex: "auto", display: "flex", flexDirection:"column"}}>
                        <h1 style={{margin: 0}}>
                            <Link
                                to="/"
                                style={{
                                    color: `white`,
                                    textDecoration: `none`,
                                }}
                            >
                                {siteTitle}
                            </Link>
                        </h1>
                        <div style={{flex: "auto", display: "flex", flexDirection:"column", color: `white`}}>
                            <a href="tel:+78462300809"
                               className="d-inline-flex"
                               style={{
                                color: `white`,
                            }}
                            >
                                <i className={"material-icons"}>local_phone</i>
                                +7 (846) 230-08-09</a>
                            <a href="mailto:2300809@bk.ru"
                               className="d-inline-flex"
                               style={{
                                color: `white`,
                            }}
                            >
                                <i className={"material-icons"}>mail_outline</i>
                                <span>2300809@bk.ru</span></a>
                        </div>
                    </div>
                    <div style={{width: `200px`}}>
                        <LogoImage/>
                    </div>
                </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
