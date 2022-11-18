import React from 'react';
import './index.less'
import classNames from "classnames";

const Loading = ({isShow}: { isShow: boolean }) => {
    return (<div className={classNames('loader', 'fullScreen', {hidden: !isShow})}>
        <div className="wrapper">
            <div className="inner"></div>
            <div className="text">LOADING</div>
        </div>
    </div>);
};

export default Loading;
