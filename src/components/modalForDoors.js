import PropTypes from "prop-types"
import React from "react"

const ModalForDoors = ({activeItem}) => (
    <div className="modal fade" id="showModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Перезвонить</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form className="modal-body form" id={"application"}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Имя</label>
                        <input name={"name"} type="text" className="form-control" id="exampleInputName"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPhone">Телефон</label>
                        <input name={"telephone"} type="phone" className="form-control" id="exampleInputPhone"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                        <button type="submit" className="btn btn-primary" form={"application"}>Заказать</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

ModalForDoors.propTypes = {
    activeItem: PropTypes.string,
}

ModalForDoors.defaultProps = {
    activeItem: ``,
}

export default ModalForDoors
