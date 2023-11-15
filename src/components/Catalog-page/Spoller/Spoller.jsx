
import { useState } from 'react';

import { MdArrowBackIos } from 'react-icons/md';
{/* <MdArrowBackIos className='advantages__arrow-left' style={{'color': '#28553F', 'transform': 'rotate(-90deg)'}} />  */ }


const Spoller = (props) => {

    const [spoilerState, setSpoilerState] = useState(false);
    console.log(props.props)
    return (
        <>
            <div>
                <button onClick={() => { setSpoilerState(!spoilerState) }}>
                    {spoilerState ? 'Hide Spoiler 1' : 'Show Spoiler 1'}
                </button>
                {props.props}
            </div>

        </>
    )
}

export default Spoller;
