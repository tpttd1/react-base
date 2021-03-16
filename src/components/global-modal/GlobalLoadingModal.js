import React, { memo, useEffect, useState, useCallback } from "react";
import Skeleton from 'react-loading-skeleton';

const GlobalLoadingModal = memo(() => {
    const [isOpenModals, setIsOpenModals] = useState(false);

    const toggleModal = () => {
        setIsOpenModals(isOpenModal => !isOpenModal)
    }

    const hideLoading = () => {
        toggleModal()
    }

    const showLoading = () => {
        toggleModal();
    }

    useEffect(() => {
        global.showLoading = showLoading;
        global.hideLoading = hideLoading;
    }, []);

    return (
        // <>
        //     {isOpenModals && (
        //         <>
        //             <Skeleton circle={true} height={100} width={100} duration={2}/>
        //             <Skeleton height={100} width={800} duration={2}/>
        //             <Skeleton height={300} duration={1}/>
        //             <Skeleton height={300} duration={1}/>
        //         </>
        //     )}
        // </>
        <section id="section-loading">
            <div id="loading">
                <img id="loading-image" src="/assets/images/ic_loading.gif" alt="Loading..." />
            </div>
        </section>
    )
}, [])

export default GlobalLoadingModal;