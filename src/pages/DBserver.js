import React from 'react'
function DBserver() {
  return (
      <div className="dbserver">
        <div className="Top">
          <div>DB Server</div>
          <div>Mysql 서버 인스턴스를 생성하고 관리할 수 있습니다.</div>
          <hr/>
        </div>
        <div className="middle">
          <button className="DBServer">DB Server 신청</button>
          <div>Action</div>
          <button>검색</button>

        </div>
          
      </div>
    );
}

export default DBserver;