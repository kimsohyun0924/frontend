import * as React from 'react';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
            // width: 200,
            borderRadius:0,
        },
    },
};
  
const serverType = [
    { "name": "1vCore 1GB", "value": 1 },
    { "name": "2vCore 2GB", "value": 2 },
    { "name": "4vCore 4GB", "value": 3 },
    { "name": "4vCore 8GB", "value": 4 },
    { "name": "4vCore 16GB", "value": 5 },
    { "name": "4vCore 32GB", "value": 7 },
    { "name": "8vCore 8GB", "value": 8 },
    { "name": "8vCore 16GB", "value": 9 },
    { "name": "8vCore 32GB", "value": 10 },
    { "name": "8vCore 64GB", "value": 11 },
    { "name": "16vCore 32GB", "value": 12 },
    { "name": "16vCore 64GB", "value": 13 },
    { "name": "16vCore 128GB", "value": 14 },
    { "name": "32vCore 64GB", "value": 15 },
    { "name": "32vCore 128GB", "value": 16 },
    { "name": "32vCore 256GB", "value": 17 }
];

const parameterGroup = 
    {
        "id": "parameter_group",
        "name": "parameter_group_id",
        "display_name": "파라미터 그룹",
        "type": "parameter_group",
        "validation": {
            "nullable": false,
            "set_default_value": false
        },
        "values": [
            {
                "created_at": "2022-10-13T18:08:24",
                "updated_at": "2022-10-13T18:08:24",
                "id": "0b6c06b6-65d4-4f68-9781-227603971a38",
                "db": "MySQL",
                "db_version": "8.0.29",
                "display_name": "Default MySQL 8.0.29",
                "detail": "Default parameter group for MySQL8.0.29",
                "default_type": true
            },
            {
                "created_at": "2022-10-13T18:08:24",
                "updated_at": "2022-10-13T18:08:24",
                "id": "cd992301-34d3-486c-bb65-ee4ebdf95626",
                "db": "MySQL",
                "db_version": "8.0.27",
                "display_name": "Default MySQL 8.0.27",
                "detail": "Default parameter group for MySQL8.0.27",
                "default_type": true
            },
            {
                "created_at": "2022-10-13T18:08:24",
                "updated_at": "2022-10-13T18:08:24",
                "id": "ecf177c3-fbe0-42e9-84ce-d9bbb7aacceb",
                "db": "MySQL",
                "db_version": "8.0.28",
                "display_name": "Default MySQL 8.0.28",
                "detail": "Default parameter group for MySQL8.0.28",
                "default_type": true
            },
            {
                "created_at": "2022-10-20T19:28:51.857852",
                "updated_at": "2022-10-20T19:28:51.857852",
                "id": "a48beb0b-55f4-4499-bc4d-2716e29a91de",
                "db": "MySQL",
                "tenant_id": "29977b985dfb49adbaea215b5f79d36b",
                "db_version": "8.0.29",
                "display_name": "복제한것",
                "detail": "copy",
                "default_type": false
            },
            {
                "created_at": "2022-11-08T18:28:25.319651",
                "updated_at": "2022-11-08T18:28:25.319651",
                "id": "399a182f-6d96-4556-81fc-13dee5892e9d",
                "db": "MySQL",
                "tenant_id": "29977b985dfb49adbaea215b5f79d36b",
                "db_version": "8.0.29",
                "display_name": "뉴파람-1108",
                "detail": "신규건",
                "default_type": false
            },
            {
                "created_at": "2022-11-08T18:35:34.282739",
                "updated_at": "2022-11-08T18:35:34.282739",
                "id": "6b0e4351-5aff-4c79-8ddf-338a819968ca",
                "db": "MySQL",
                "tenant_id": "29977b985dfb49adbaea215b5f79d36b",
                "db_version": "8.0.29",
                "display_name": "test-ljy",
                "detail": "테스트",
                "default_type": false
            },
            {
                "created_at": "2022-11-09T08:07:40.102948",
                "updated_at": "2022-11-09T08:07:40.102948",
                "id": "f03de586-d95a-4bc3-8db8-7011ab582a21",
                "db": "MySQL",
                "tenant_id": "29977b985dfb49adbaea215b5f79d36b",
                "db_version": "8.0.29",
                "display_name": "maxconnection",
                "detail": "1000",
                "default_type": false
            },
            {
                "created_at": "2023-01-16T10:43:00.936854",
                "updated_at": "2023-01-16T10:43:00.936854",
                "id": "3223a569-1da3-4cc1-8e1e-323ef3965313",
                "db": "MySQL",
                "tenant_id": "29977b985dfb49adbaea215b5f79d36b",
                "db_version": "8.0.29",
                "display_name": "kjkTest",
                "detail": "kjkTest",
                "default_type": false
            },
            {
                "created_at": "2023-02-07T20:20:47.973491",
                "updated_at": "2023-02-07T20:20:47.973491",
                "id": "327fcd05-e5be-4d73-b826-714e3ccc7816",
                "db": "MySQL",
                "tenant_id": "29977b985dfb49adbaea215b5f79d36b",
                "db_version": "8.0.29",
                "display_name": "eddy",
                "detail": "eddy",
                "default_type": false
            },
            {
                "created_at": "2023-02-08T09:21:44.07154",
                "updated_at": "2023-02-08T09:21:44.07154",
                "id": "f2e87749-3182-46e4-ad77-e01694d3dd23",
                "db": "MySQL",
                "tenant_id": "29977b985dfb49adbaea215b5f79d36b",
                "db_version": "8.0.29",
                "display_name": "test",
                "detail": "test",
                "default_type": false
            },
            {
                "created_at": "2023-02-13T15:02:22.82024",
                "updated_at": "2023-02-13T15:02:22.82024",
                "id": "3c6a932a-cdca-44e9-9c50-a84f6ac7e6f5",
                "db": "MySQL",
                "tenant_id": "29977b985dfb49adbaea215b5f79d36b",
                "db_version": "8.0.29",
                "display_name": "hansutest",
                "detail": "1231",
                "default_type": false
            },
            {
                "created_at": "2023-02-23T23:51:20.623729",
                "updated_at": "2023-02-23T23:51:20.623729",
                "id": "76dae5eb-efa5-4316-baab-db3330d63966",
                "db": "MySQL",
                "tenant_id": "29977b985dfb49adbaea215b5f79d36b",
                "db_version": "8.0.29",
                "display_name": "dddd",
                "detail": "ddddddd",
                "default_type": false
            },
            {
                "created_at": "2023-02-23T23:54:35.801796",
                "updated_at": "2023-02-23T23:54:35.801796",
                "id": "51e66552-c5ce-4515-a58e-3275c2f74437",
                "db": "MySQL",
                "tenant_id": "29977b985dfb49adbaea215b5f79d36b",
                "db_version": "8.0.29",
                "display_name": "smj",
                "detail": "smjsmj",
                "default_type": false
            }
        ]       
    };
  
export default function MultipleSelect() {
    const [age, setAge] = React.useState('Default MySQL 8.0.29');
  
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const TestIcon = () =>  {
        return(
            <Icon>&#9662;</Icon>
        );
    }

    console.log(parameterGroup.values);
    
    return (
        <div>
            <FormControl sx={{ m: 1}}>
            <Select
                value={age}
                onChange={handleChange}
                MenuProps={MenuProps}
                IconComponent={TestIcon}
                sx={{padding:'0px 10px 0px 0px', background:'white', height: '37px', fontSize: '14px', borderRadius: 0}}
            >
                { parameterGroup.values.map((item: any, index: any) => (
                <MenuItem
                    key={index}
                    value={item.display_name}
                    sx={{fontSize: '14px'}}
                >
                    {item.display_name}
                </MenuItem>
                ))}
            </Select>
            </FormControl>
        </div>
    );
}