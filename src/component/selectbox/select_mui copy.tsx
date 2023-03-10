import * as React from 'react';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { DBcreate, DBCreate_version, DBCreate_vm_flavor, DBCreate_cluster_nodes } from 'redux/reducerSlice';

const Icon = styled.span`
  font-size: 16px;
  color: #333336;
  &:hover {
      cursor: pointer;
    }
`;
  
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: '200px',
            borderRadius:0,
        },
    },
};
  
export default function MultipleSelect({ dropdown, name, name2 }: any) {

    const dispatch = useDispatch();
    const test = useSelector(DBcreate);
    const [data, setData] = React.useState(test[0][name][name2]);

    const handleChange = (event: SelectChangeEvent) => {
        setData(event.target.value as string);

        if(name2 === 'vm_flavor') {
            dispatch(DBCreate_vm_flavor(event.target.value));
        }
        if(name === 'mysql') {
            dispatch(DBCreate_cluster_nodes(event.target.value));
        }
    };

    const TestIcon = () =>  {
        return(
            <Icon>&#9662;</Icon>
        );
    }
    // console.log(parameterGroup.values);

    return (
        <div>
            <FormControl sx={{ m: 1}}>
            <Select
                value={data}
                onChange={handleChange}
                MenuProps={MenuProps}
                IconComponent={TestIcon}
                sx={{padding:'0px 10px 0px 0px', background:'white', width: '210px', height: '32px', fontSize: '14px', borderRadius: 0}}
            >
                { dropdown.map((item: any, index: any) => (
                <MenuItem
                    key={index}
                    value={item.name}
                    sx={{fontSize: '14px'}}
                >
                    {item.name}
                </MenuItem>
                ))}
            </Select>
            </FormControl>
        </div>
    );
}