import React from 'react';
import styled from 'styled-components';

// const title = styled.div``

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="serviceCreate">
                <div className="create"><b>서비스생성</b></div>
                <hr/>
                <div>Mysql 서버 인스턴스를 생성합니다.</div>
                <button className="dbbtn">데이터베이스 생성</button>
            </div>
            <div className="serviceState">
                <div className="state"><b>서비스 상태</b></div>
                <hr/>
                <div>DB리스트와 상태 혹은 요약정보(정상/이상)</div>
                <div className="dbinfo">
                  <div className="dbsum">DB Server 요약 정보</div>
                  <table>
                    <thead>
                      <tr>
                        <th width="150px">DB 서버명</th><th>DB 상태</th>
                      </tr>
                    </thead>
                    <tbody> 
                      <tr>
                        <td>DB1</td><td>Running</td>
                      </tr>
                      <tr>
                        <td>DB2</td><td>Running</td>
                      </tr>
                      <tr>
                        <td>DB3</td><td>Running</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
            <div className="bottom">
                <div className="metric">
                  <div className="m"><b>메트릭</b></div>
                  <hr/>
                  <div>고부하 Top3 서버</div>
                </div>
                <div className="event">
                  <div className="e"><b>이벤트</b></div>
                  <hr/>
                  <div>발생한 이벤트 리스트 혹은 요약 정보 조회</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;