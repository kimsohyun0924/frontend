import React, {useState, useRef} from 'react';


function InputSmaple() {
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });


    //useRef는 DOM에 접근할 때 사용한다..
    const nameInput = useRef();
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
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
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