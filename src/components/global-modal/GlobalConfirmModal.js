import React, { memo, useEffect, useState,  useRef } from "react";
import CustomButton from "../button/custom-button";
import { Modal, ModalBody } from "reactstrap";

const GlobalConfirmModal = memo(function () {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const callback = useRef < any > (null);

    const toggleModal = () => {
        setIsOpenModal(isOpenModal => !isOpenModal)
    }

    const hideModal = () => {
        setModalContent(null);
        toggleModal()
        callback.current?.();
        callback.current = null;
    }

    const showModal = (content, _callback) => {
        callback.current = _callback;
        setModalContent(content);
        toggleModal();
    }

    useEffect(() => {
        window.showModal = showModal;
        window.hideModal = hideModal;
        // eslint-disable-next-line
    }, []);

    if (!modalContent) return null;

    return (
        <Modal isOpen={isOpenModal} toggleModal={toggleModal} >
            <ModalBody>
                <p className="pb-2">{modalContent?.content}</p>
                <div className="button-container mt-3">
                    <CustomButton
                        label={modalContent?.activeButton?.text || "Confirm"}
                        color="white"
                        background="primary"
                        className="mr-3"
                        onClick={() => {
                            modalContent?.activeButton?.onPress?.();
                            hideModal();
                        }}
                    />
                    <CustomButton
                        label={modalContent?.ignoreButton?.text || "Cancel"}
                        color="primary"
                        onClick={() => {
                            modalContent?.ignoreButton?.onPress?.();
                            hideModal();
                        }}
                    />
                </div>
            </ModalBody>
        </Modal>
    );
});

export default GlobalConfirmModal;