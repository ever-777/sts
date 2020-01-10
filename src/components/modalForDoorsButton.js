import PropTypes from "prop-types"
import React from "react"

const ModalForDoorsButton = ({activeItem}) => (
    <button type={"button"} className={"btn btn-primary d-inline-flex"} data-toggle={"modal"}
            data-target={"#showModal"}><i className={"material-icons"}>shopping_cart</i>Заказать
    </button>
)

ModalForDoorsButton.propTypes = {
    activeItem: PropTypes.string,
}

ModalForDoorsButton.defaultProps = {
    activeItem: ``,
}

export default ModalForDoorsButton
