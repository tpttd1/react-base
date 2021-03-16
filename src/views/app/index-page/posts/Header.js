import React, { memo, Fragment } from "react";

const Avatar = memo(function () {
    return (
        <div className="wrapper-posts-avatar">
            <a href="#1">
                <img alt="img" src="/avatar.jpg" />
            </a>
        </div>
    )
})

const OwnerPost = memo(function () {
    return (
        <div className="flex-grow-1 owner-post">
            <a href="#1">
                <p className="fw-bold">Chuyện của Hà Nội</p>
            </a>
            <div className="d-flex flex-row">
                <a href="#1" className="fs-14 text-muted">14 giờ</a>
                <span className="serfdom fs-14 text-muted">O</span>
            </div>
        </div>
    )
})

const Optional = memo(function () {

    const showModalOptional = () => {

    }

    return (
        <div className="optional fs-16 fw-bold" onClick={showModalOptional}>
            <p>...</p>
        </div>
    )
})

const Header = memo(function () {

    return (
        <Fragment>
            <div className="d-flex flex-row">
                <Avatar />
                <OwnerPost />
                <Optional />
            </div>
        </Fragment>
    );
});

export default Header;