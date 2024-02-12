import { useState } from 'react';

const Spoller = (props) => {
    const [spoilerState, setSpoilerState] = useState(false);
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
