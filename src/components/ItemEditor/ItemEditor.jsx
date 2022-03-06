import { useState } from 'react';

const ItemEditor = (props) => {
    const [value, setValue] = useState(props.value);
    const inputKeyUp = (event) => {
        const which = event.which || event.keyCode;
        (which === 13) && props.onSubmitNewName(value);
    };

    return (
        <div className="item-editor" data-testid="item-editor">
            <input 
                type="text"
                name="newName"
                className=""
                value={value}
                onChange={({ target }) => { setValue(target.value)}}
                onKeyUp={(event) => inputKeyUp(event)}
            />
        </div>
    );
};

export default ItemEditor;