import { memo } from "react";

function Content({ onIncrease }){
    
    console.log('content');

    return (
        <button onClick={onIncrease}>Increase</button>
    )
}

export default memo(Content)