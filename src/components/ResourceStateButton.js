import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
      primary: {
        main: '#141e49',
      },
      secondary: {
          main: '#64748B',
      }
    },
  });

function ResourceStateButton() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button variant="outlined" color="secondary" style={{marginRight:"10px", color:"black"}}>
                    리소스 생성
                </Button>
                <Button variant="outlined" color="secondary" style={{marginRight:"10px", color:"black"}}>
                    리소스 보기
                </Button>
                <Button variant="outlined" color="secondary" style={{color:"black"}}>
                    리소스 삭제
                </Button>
            </ThemeProvider>
        </div>
    );
}

export default ResourceStateButton;