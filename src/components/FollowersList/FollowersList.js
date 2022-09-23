import React, { useEffect, useState } from 'react'
import "./FollowersList.css"
import { Link } from 'react-router-dom';
import { callApi } from './api'

export default function FollowersList() {

    const [followers, setFollowers] = useState([]);

    useEffect(() => {

        const fetchFollowers = async () => {
            const results = await callApi();
            setFollowers(results)
        }

        fetchFollowers()
    }, []);

		if(followers.length <= 0) return <div data-testid="loading">Loading...</div>

    return (
        <div className="followerslist-container">
            <div>
                {followers.map((follower, index) => (
                    <div className="follower-item" data-testid={`follower-item-${index}`}>
                        <img src={follower.picture.large}/>
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}
