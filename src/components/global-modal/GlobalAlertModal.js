import React, { memo, useEffect, useState, useCallback, useRef } from "react";
import CustomButton from "../button/custom-button";
import { Modal, ModalBody } from "reactstrap";

const GlobalAlertModal = memo(() => {
    const [isOpenModals, setIsOpenModals] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [color, setColor] = useState('success');
    const callback = useRef<any>(null);

    const toggleModal = () => {
        setIsOpenModals(isOpenModal => !isOpenModal)
    }

    const hideAlertModal = () => {
        toggleModal()
        setModalContent('');
        callback.current?.();
        callback.current = null;
    }

    const showAlertModal = (content, _callback, color = "success") => {
        callback.current = _callback;
        setModalContent(content);
        setColor(old => color)
        toggleModal();
    }

    useEffect(() => {
        global.showAlertModal = showAlertModal;
        global.hideAlertModal = hideAlertModal;
    }, []);
    if (!modalContent) return null;

    return (
        <Modal
            isOpen={isOpenModals}
            toggleModal={toggleModal}
        >
            <ModalBody>
                <p className="pb-2">{modalContent}</p>
                <div className="text-right mt-3">
                    <CustomButton
                        label="Closed"
                        color="white"
                        background={color}
                        onClick={hideAlertModal}
                    />
                </div>
            </ModalBody>
        </Modal>
    )
})

export default GlobalAlertModal;