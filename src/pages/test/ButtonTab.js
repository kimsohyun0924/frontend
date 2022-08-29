import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

export default function ButtonTab() {

    const navigate = useNavigate();
    const [value, setValue] = React.useState(null);

    const onClick = () => {
        navigate('/mytab', {state: value, setValue});
    }

    return (
        <React.Fragment>
            <button onClick={onClick}>탭 사용</button>
        </React.Fragment> 
    );
}