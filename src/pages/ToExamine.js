import React from 'react';

function ToExamine() {
    return (
        <div className="toExamine">
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
            </div>
            <div className="bottom">
                <div className="metric">
                    <div className="m"><b>메트릭</b></div>
                    <hr/>
                </div>
                <div className="event"></div>
            </div>
        </div>
    );
}

export default ToExamine;