import React from 'react';
import { useParams } from 'react-router-dom';

// 프로필에서 사용 할 데이터
const profileData = {
  velopert: {
    name: '김민준',
    description:
      'Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공'
  }
};

const Profile = ({ }) => {
  const {username} = useParams();
  console.log(username);
  const profile = profileData[username];
  if(!profile) {
    return <div>선택한 사용자가 없습니다.</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;