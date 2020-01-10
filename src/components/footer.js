// import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { YMInitializer } from 'react-yandex-metrika';

const Footer = ({siteTitle}) => (
    <footer
        style={{
            background: "lightgray"
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
        © 2019-{new Date().getFullYear()}, {siteTitle}
        </div>
        <div>
            <YMInitializer accounts={[56902711]} options={{clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true}} />
        </div>

    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
