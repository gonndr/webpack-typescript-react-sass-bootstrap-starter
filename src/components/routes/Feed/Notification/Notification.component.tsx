import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";

import VoteGraph1 from "@shared/VoteGraph1";
import './style.sass';

export const Notification: FunctionComponent<{ v: any }> = ({ v }) => {

    const [userVote, setUserVote] = React.useState(null);
    const handleUserVote = (vote: string) => {
        if (vote === userVote) {
            setUserVote(null)
        } else {
            setUserVote(vote);
        }
    }

    return (
        <>
            <div className="d-flex relative">
                <Link to="/profile">
                    <div className="small-avatar bg"></div>
                </Link>
                <div className="flex-fill">
                    <p className="mb-n1">
                        <Link to="/profile">
                            <b>{v.who.name}</b>
                            <small className="ml-1">{v.who.handle}</small>
                        </Link>
                        <div className="badge ml-1">Represents You</div>
                    </p>
                    <p className="mb-0">{v.message} <Link to="/vote/equal%20rights"><b className="white">{v.name}</b></Link></p>
                    <small className="d-flex mb-2">3 days ago</small>
                    <div className="bar-wrapper" >
                        <VoteGraph1 key={`a-${v.name}`} {...v} name={null} />
                    </div>

                    <div className="d-flex d-flex justify-content-between mt-4">
                        <div
                            onClick={() => handleUserVote('for')}
                            className={`button_ ${userVote === 'for' && 'selected'}`}
                        >
                            Vote For
                        </div>
                        <div
                            onClick={() => handleUserVote('against')}
                            className={`button_ ${userVote === 'against' && 'selected'}`}
                        >
                            Vote Against
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

