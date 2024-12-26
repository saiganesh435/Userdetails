import React, { useState } from 'react';

const UserCard = (user) => {
    const { avatar, name, address, followers, posts, is_following } = user;

     console.log(user);
    const [following, setFollowing] = useState(is_following);

    const handleFollowClick = () => {
        setFollowing(!following); 
    };

    return (
        <>
            <div style={{display:'flex', alignItems:'center', gap:'20px', border:'1px solid black', width:'500px', margin:'auto'}}>
                <div>
                    <img src={avatar} alt={name}  style={{borderRadius:'50%'}}/>
                </div>

                <div>
                <div>
                    <h2 data-testid='user_name'>{name}</h2>
                    <p data-testid='user_address'>{address}</p>
                </div>

                <div style={{display:'flex',gap:'20px'}}>   
                 <div>
                <h3>Posts</h3>
                <p data-testid='user_posts'>{posts}</p>
                </div>
                <div>
                    <h3>Followers</h3>
                    <p data-testid='user_followers'>{followers}</p>
                </div>
                </div>

                </div> 
                <div>
                    <button onClick={handleFollowClick}>
                        {following ? 'Following' : 'Follow'}
                    </button>
                </div>
             
            </div>
        </>
    );
}

export default UserCard;