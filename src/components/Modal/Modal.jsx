import React, {useState} from 'react';
import PropTypes from 'prop-types'; 

export const Modal = ({content}) => {

    const [modal, setModal] = useState(false)

    const toggleModal = () =>{
        setModal(!modal);
    }

    return (
        <>
            <div>
                <button onClick={toggleModal}>Open modal</button>
            </div>
            {modal && (
            <div className="modal">
                <div onClick={toggleModal} className="modalOverlay"></div>
                <div className="modalContent"><p>{content}</p>
                    <button onClick={toggleModal} className="modalClose">
                        <span className="material-icons">close</span>
                    </button>
                </div>
            </div>
            )}
        </>
    )
}

Modal.propTypes ={
    content: PropTypes.string

}