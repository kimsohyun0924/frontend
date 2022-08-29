import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainContainer from 'layouts/MainContainer';
import { PageTitle, PageSubTitle } from 'style/PageStyle';
import styled, { ThemeProvider } from "styled-components";
import Button from 'components/Button';
import TableCompUsageStage from 'components/TableCompUsageStage';
import ModalApiDelete from 'components/ModalApiDelete';
import ModalApiUpdate from 'components/ModalApiUpdate';
import ModalStageConnect from 'components/ModalStageConnect';
import MainHeader from 'components/MainHeader';
import { useLocation } from "react-router";

const HeadDiv = styled.div`
`;

const MenuDiv = styled.div`
/* flex 아이템들을 왼쪽에서 오른쪽으로 정렬 */
  display: flex;
  padding: 30px 0px 20px 0px;
`;

const TableDiv = styled.div`
  
`;

const TableHeader = [
  "API 이름",
  "Stage 이름"
];

export default function UsagePlanStage() {

  const { state } = useLocation();
  const initialState = {
    "service_name": null,
    "service_id": null,
    "stage_name": null,
    "stage_id": null,
  }
  const [clickData, setClickData] = useState(initialState);
  const [createdialog, setCreateDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [DataTemp, setDataTemp] = useState([]);
  const [selectItem, setSelectItem] = useState(null);
  const [selectItem2, setSelectItem2] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const testData = [
    {
      "api_name": "test_stage",
      "service_id": "63058d05c321357100befe6f",
      "stage_name": "stage_test1",
      "stage_id": "63058d5cc321357100befe75"
    },
    {
      "api_name": "test_stage2",
      "service_id": "63058d05c321357100befe6f",
      "stage_name": "stage_test2",
      "stage_id": "6305d32fc321357100befe7f"
    },
  ]

  const Create = () => {
    setCreateDialog(true);
  };

  const Delete = () => {
    setDeleteDialog(true);
  };

  const onCancel = () => {
    console.log('취소');
    setCreateDialog(false);
    setDeleteDialog(false);
  };


  const fetchUsageStageConnect = async () => {
    //get UsagePlan-Stage Connect list
    try {
      setError(null);

      const response = await axios.get(
        '/v1.0/g1/paas/Memsq07/apigw/usage-plans/'+state.usage_plan_id+'/stages'
      );
      setDataTemp(response.data); // 데이터는 response.data)
      // console.log(response.data);
    } catch (e) {
      setError(e);
    }
  };

  const onCreate = () => {
      //create UsagePlan-Stage Connect
    const createUsageStageConnect = async () => {
      try {
        setError(null);
        await axios.post(
          '/v1.0/g1/paas/Memsq07/apigw/stage/usage-plan',
          {
            stage_id: selectItem2,
            usage_plan_id: state.usage_plan_id
          }
        );
      } catch (e) {
        setError(e);
      }
    };
    createUsageStageConnect();
    setTimeout(()=>{
      window.location.reload(true);
    }, 500);
    setCreateDialog(false);
  };

  const onDelete = () => {
    //delete UsagePlan-Stage Connect
    const deleteUsageStageConnect = async () => {
      try {
        setError(null);
        await axios.delete(
          '/v1.0/g1/paas/Memsq07/apigw/stage/'+clickData.stage_id+'/usage-plan/'+state.usage_plan_id
        );
      } catch (e) {
        setError(e);
        console.log(error);
      }
    };
    deleteUsageStageConnect();
    window.location.reload(true);
    setDeleteDialog(false);
   };

  useEffect(() => {
    fetchUsageStageConnect();
  }, []);

  return (
    <React.Fragment>
      <MainContainer>
        <HeadDiv>
          <MainHeader location={"Usage Plans"}/>
            <PageTitle>연결된 Stage 목록</PageTitle>
            <PageSubTitle>{state.name}</PageSubTitle>
        </HeadDiv>
        <MenuDiv>
          <ThemeProvider theme={{ palette: { blue: '#141e49', gray: '#495057', pink: '#f06595' }}}>
          <span style={{padding: "0px 20px 0px 0px"}}><Button size="medium" line="line" onClick={Create}>Stage 연결</Button></span>
            <Button size="small" line="outline" onClick={Delete}>삭제</Button>
          </ThemeProvider>
        </MenuDiv>
        <TableDiv>
          <TableCompUsageStage columns={TableHeader} data={DataTemp} clickData={clickData} setClickData={setClickData}/>
        </TableDiv>
      </MainContainer>
      <ModalStageConnect
            title="Stage와 연결합니다."
            confirmText="연결하기"
            cancelText="취소"
            onCreate={onCreate}
            onCancel={onCancel}
            selectItem={selectItem}
            setSelectItem={setSelectItem}
            setSelectItem2={setSelectItem2}
            visible={createdialog}>
      </ModalStageConnect>
      <ModalApiDelete
            // title="정말로 삭제하시겠습니까?"
            confirmText="삭제하기"
            cancelText="취소"
            onConfirm={onDelete}
            onCancel={onCancel}
            checkedItem={clickData.id}
            visible={deleteDialog}
            >
            <span style={{fontWeight:"bold"}}>{clickData.stage_name}</span><span style={{padding:"0px 0px 0px 10px"}}>Stage와 연결을 해제합니다.</span>
      </ModalApiDelete>
    </React.Fragment>
  );
}


