import React, { memo, Fragment } from "react";

const NumberOfInteractions = memo(function () {

    return (
        <Fragment>
            <div className="d-flex flex-row pt-2 pb-2">
                <div className="flex-grow-1">
                    <span className="pr-2">
                        <img alt="img" className="interactive-icon" src="/like.png" />
                        <img alt="img" className="interactive-icon" src="/love.png" />
                        <img alt="img" className="interactive-icon" src="/love-2.png" />
                    </span>
                    <span className="text-muted hover-cursor">430</span>
                </div>
                <div className="mr-2 text-muted hover-cursor">50 bình luận</div>
                <div className="text-muted hover-cursor">29 lượt chia sẻ</div>
            </div>
        </Fragment>
    );
});

const Content = memo(function () {

    return (
        <Fragment>
            <div className="content">
                <p>| 15. 03. 2021 - Radio 02 |Love doesn't hurt.</p>
                <p>Nếu bạn đang mang trong mình một trái tim có sẹo, thì đừng tự ti, và đừng bao giờ nghĩ mình không xứng đáng. Bạn xứng đáng hơn bất kì một ai khác. Vì đã trao đi cả bản thân mình. Dám yêu và chấp nhận đau vì nó.</p>
                <p>Xin đừng để bản thân mắc kẹt vì một kẻ chẳng ra gì.… Xem thêm</p>
            </div>
            <div className="media-content">
                <img alt="img" src="/post.jpg" />
            </div>
            <NumberOfInteractions />
        </Fragment>
    );
});

export default Content;