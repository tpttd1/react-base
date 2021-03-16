import React, { memo, useEffect, useState, useCallback, useRef } from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
    .alert {
        background: #F36F21;
        min-width: 320px;
        position: fixed;
        right: 0;
        top: 16px;
        z-index: 19;
        border-radius: 4px;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
        height: fit-content;
    }
    .showAlert {
        opacity: 1;
        pointer-events: auto;
    }
    .show {
        transition-timing-function: ease-in;
        transition-duration: 0.8s;
        transform: translateX(-12px);
    }
    .hide {
        transition-timing-function: ease-out;
        transition-duration: 0.8s;
        transform: translateX(100%);
    }
    .fa-exclamation-circle {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: #ce8500;
        font-size: 30px;
    }
    .msg {
        font-size: 16px;
        color: white;
        padding: 20px 40px;
    }
    .close-btn {
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
        background: #ffd080;
        padding: 20px 18px;
        cursor: pointer;
    }
    .close-btn:hover {
        background: #ffc766;
    }
    .close-btn .fas {
        color: #ce8500;
        font-size: 22px;
        line-height: 40px;
    }
`;

const GlobalNotifyModal = memo(({ content }) => {
    const [modalContent, setModalContent] = useState('');
    const [color, setColor] = useState('success');
    const callback = useRef<any>(null);

    const hideNotifyModal = useCallback(() => {
        setModalContent('');
        // callback.current?.();
        // callback.current = null;
    }, []);

    const showNotifyModal = useCallback((content, _callback, color = "success") => {
        // callback.current = _callback;
        setModalContent(content);
        setColor(old => color)
        setTimeout(() => {
            setModalContent('');
        }, 3000)
    }, []);

    useEffect(() => {
        // global.showNotifyModal = showNotifyModal;
        // global.hideNotifyModal = hideNotifyModal;
        setModalContent(modalContent => content)
    }, [modalContent]);

    if (!modalContent) return null;

    return (
        <Wrapper >
            <div className={`alert ${modalContent?.length > 0 ? "show showAlert" : "hide"}`}>
                {/* <span className="fas fa-exclamation-circle"></span> */}
                <div className="msg">{modalContent}</div>
                {/* <div className="close-btn">
                    <span className="fas fa-times"></span>
                </div> */}
            </div>
        </Wrapper>
    )
})

export default GlobalNotifyModal;