import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import HomeSvg from "@shared/Icons/Home.svg";
import RippleDrop from "@shared/Icons/RippleDrop.svg";
import DropPlusSVG from "@shared/Icons/Drop+.svg";
import NotificationSvg from "@shared/Icons/Notification.svg";
import ProfileSvg from "@shared/Icons/Profile.svg";
import ProfilePlusSvg from "@shared/Icons/Profile+.svg";
import BookmarkSvg from "@shared/Icons/Bookmark.svg";
import AnalyticsSvg from "@shared/Icons/Analytics.svg";

import './style.sass';

export const SideMenu: FunctionComponent<{}> = ({ }) => {
    return (
        <div className="sideMenu">
            <Link to="/vote/equal rights">
                <RippleDrop />
            </Link>
            <Link to="/feed">
                <HomeSvg />
            </Link>
            <Link to="/feed">
                <NotificationSvg />
            </Link>
            <Link to="/profile">
                <ProfileSvg />
            </Link>
            <Link to="/feed">
                <BookmarkSvg />
            </Link>
            <Link to="/feed">
                <AnalyticsSvg />
            </Link>
            <Link to="/create-vote" className="button_ inverted icon-contain">
                <DropPlusSVG />
            </Link>
            <br />
            <br />
            <br />
            <br />
            <Link to="/register">
                <ProfilePlusSvg />
            </Link>
        </div>
    );
}

