import React, { useEffect , useRef } from 'react'

const FocuInput  = () => {
    function ref() {
        return inputRef.current.focus()
    }
    const inputRef = useRef(null);

    useEffect(() => {
        console.log('weorking')
        ref();
      }, []);

    return (
        <div>
            <input ref={inputRef} type='text' className='my-3'></input>
        </div>
    )
}

export default FocuInput