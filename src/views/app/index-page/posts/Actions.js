import React, { memo, Fragment } from "react";

const Likes = memo(function () {
    return (
        <Fragment>
            <div className="flex-grow-1 pt-1 pb-1 hover-action fw-bold text-muted">
                Thích
            </div>
        </Fragment>
    );
});

const Comments = memo(function () {
    return (
        <Fragment>
            <div className="flex-grow-1 pt-1 pb-1 hover-action fw-bold text-muted">
                Bình luận
            </div>
        </Fragment>
    );
});

const Shares = memo(function () {
    return (
        <Fragment>
            <div className="flex-grow-1 pt-1 pb-1 hover-action fw-bold text-muted">
                Chia sẻ
            </div>
        </Fragment>
    );
});

const Actions = memo(function () {

    return (
        <Fragment>
            <div className="post-action">
                <div className="d-flex flex-row text-center">
                    <Likes />
                    <Comments />
                    <Shares />
                </div>
            </div>
        </Fragment>
    );
});

export default Actions;