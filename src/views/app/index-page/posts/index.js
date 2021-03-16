import React, { memo, Fragment } from "react";
import Header from './Header';
import Content from './Content';
import Actions from './Actions';
import './style.scss';

const Posts = memo(function () {

    return (
        <Fragment>
            <div className="posts">
                <Header />
                <Content />
                <Actions />
            </div>
        </Fragment>
    );
});

export default Posts;