import React, {useState} from 'react';


function InputSmaple() {
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });

    const { name, nickname } = inputs;
    
    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name] : value,
        });
    };

    const onRest = () => {
        setInputs({
            name : '',
            nickname : '',
        });
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onRest}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSmaple;