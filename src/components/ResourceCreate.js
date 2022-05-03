import React from "react";

function ResourceCreate() {
    return(
        <>
            <div className="rccreate" style={{padding:"10px 0px 0px 0px"}}>
                <div className="column">
                    Hey
                </div>
                <div className="createtitle">
                    <div style={{margin:"12px 0px 0px 10px"}}>
                        리소스 생성
                    </div>
                </div>
                <div className="cont">
                    <div className="contitem">
                        <span className="cs-span">
                            <div className="inputtext" >리소스 경로</div>
                            <input className="inputbox" type="text">

                            </input>
                        </span>
                        <span className="cs-span">
                            <div className="inputtext">Access-Control-Allow-Method</div>
                            <input className="inputbox" type="text">

                            </input>
                        </span>
                        <span className="cs-span">
                            <div className="inputtext">Access-Control-Allow-Headerss</div>
                            
                            <input className="inputbox" type="text">

                            </input>
                        </span>

                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default ResourceCreate;