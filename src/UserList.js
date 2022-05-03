import React, { useEffect } from "react";

function User( { user, onRemove, onToggle }) {
    const {username, email, id, active} = user;
    
    
    // useEffect(() => {
    //     //컴포넌트가 나타날 때 호출(props -> state, REST API, 라이브러리 호출, setInterval, setTimeout) 특정 값이 업데이트 된 후 출력됨
    //     console.log('user 값이 설정됨');
    //     console.log(user);

    //     //컴포넌트사 사라질 때 호출(clearInterval, clearTimeout, 라이브러리 인스턴스 제거) return은 뒷정리 함수 
    //     return () => {
    //         console.log('user 값이 바뀌기 전');
    //         console.log(user);
    //     }
    //     //컴포넌트가 바뀔 때마다 호출
    // }, [user]);



    return (
        <div>
            <b style={{ color : active ? 'green' : 'black', cursor : 'pointer'}} onClick={() => onToggle(id)}>
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}


function UserList( { users, onRemove, onToggle } ) {
   
    return (
        <div>
            {
                users.map(
                    (user) => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />
                    )
                )
            }
        </div>
    );
}

export default UserList;