import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styled, { css } from 'styled-components';
import { useMenuState } from 'data/MenuContext';
import MainContainer from 'layouts/MainContainer';

import DBCreateInfo from 'page/dbinstance/DBCreateInfo';
import DBCreateConfig from 'page/dbinstance/DBCreateConfig';
import { DBCreateData } from 'data/initial_data';

import { useDispatch, useSelector } from 'react-redux';
import { DBCreate } from 'redux/reducerSlice';

const steps = ['서버 선택', 'DB 구성', 'DB 설정','Network 설정'];

const Content = styled.div`
  width: 100%;
  padding: 15px 15px 0px 15px;
`;

export default function DBInstanceCreate() {
    
    const dispatch = useDispatch();
    const menuState = useMenuState();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
        isLastStep() && !allStepsCompleted()
            ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        if(step === 0) {
            setActiveStep(step);
        }
        if(step === 1) {
            setActiveStep(step);
        }
        if(step === 2) {
            setActiveStep(step);
        }
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const selectComponent: any = {
        0: <DBCreateInfo />,
        1: <DBCreateConfig />,
        2: <DBCreateInfo />,
      };
    
    useEffect(() => {
        dispatch(DBCreate(DBCreateData));
    }, []);

    return (
        <React.Fragment>
            <MainContainer>
                <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                        {label}
                        </StepButton>
                    </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                    ) : (
                    <React.Fragment>
                        <div style={{padding: '20px 10px 20px 20px'}}>
                        {  <Content>{selectComponent[activeStep]}</Content> }
                        {/* Step {activeStep + 1} */}
                        </div>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext} sx={{ mr: 1 }}>
                            Next
                        </Button>
                        {activeStep !== steps.length &&
                            (completed[activeStep] ? (
                            <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                Step {activeStep + 1} already completed
                            </Typography>
                            ) : (
                            <Button onClick={handleComplete}>
                                {completedSteps() === totalSteps() - 1
                                ? 'Finish'
                                : 'Complete Step'}
                            </Button>
                            ))}
                        </Box>
                    </React.Fragment>
                    )}
                </div>
                </Box>
            </MainContainer>
        </React.Fragment>
    );
}