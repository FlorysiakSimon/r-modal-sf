import React from 'react';
import PropTypes from 'prop-types'; 

/** Display modal
 * @param  {string} content
 * @param  {object} style
 * @param  {boolean} modalOpen
 * @param  {function} modalClose
 * @param  {string} buttonContent
 */
export const Modal = ({content,style,modalOpen,modalClose,buttonContent}) => {

    const defaultStyles = {
        modal:{
            width: '100vw',
            height: '100vh',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            position: 'fixed',
        },
        overlay:{
            width: '100vw',
            height: '100vh',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            position: 'fixed',
            background: 'rgba(49, 49, 49, 0.8)',
        },
        content:{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            lineHeight: '1.4',
            background: '#f1f1f1',
            padding: '14px 28px',
            borderRadius: '3px',
            maxWidth: '600px',
            minWidth: '300px',
        },
        close:{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '5px 17px',
            size:'14px',
            border:'none',
            background: '#f1f1f1',
        }
    }

    if(!modalOpen){return null;}

    return (
        <>
            <div className="modal" style={style && style.modal ? style.modal : defaultStyles.modal}>
                <div onClick={modalClose}
                style={style && style.overlay ? style.overlay : defaultStyles.overlay}
                className="modalOverlay">   
                </div>
                <div className="modalContent" style={style && style.content ? style.content : defaultStyles.content}>
                    <div>{content}</div>
                    <button onClick={modalClose} style={style && style.close ? style.close : defaultStyles.close} className="modalClose">
                        {buttonContent}
                    </button>
                </div>
            </div>
        </>
    )
}

Modal.propTypes ={
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    style:PropTypes.object,
    modalOpen: PropTypes.bool.isRequired,
    modalClose: PropTypes.func.isRequired,
    buttonClose: PropTypes.string
}