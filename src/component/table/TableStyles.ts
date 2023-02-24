import styled from 'styled-components';

export const Styles = styled.div`
  .table {
    .th,
    .td {
      background-color: #fff;
      overflow: hidden;
    }
    &.sticky {  
      overflow: scroll;
      .header {
        position: sticky;
        top: 0;
      }
    }
  }
`;