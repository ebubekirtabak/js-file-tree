import ExplorerContextMenu from "../ExplorerContextMenu/ExplorerContextMenu";
import { useState } from 'react';
import ItemEditor from '../ItemEditor/ItemEditor';

const ExplorerFileItem = (props) => {
  const { file } = props;
  const { name } = file;
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextAction, setContextAction] = useState('');
  return (    
    <div className="explorer-file-item">
      {
        contextAction === 'edit' && (<ItemEditor value={name} onSubmitNewName={(newName) => {
          console.log(newName);
          setContextAction('');
          dispatch(updateFileName(file, newName));
        }} />)
      }
      <div 
        className={`explorer-file-item__head ${contextAction === 'edit' ? 'hide' : ''}`}
        onContextMenu={(event) => {
          event.preventDefault();
          setShowContextMenu(!showContextMenu);
        }}
        data-testid="file-item-head"
      >
        <span className="material-icons">description</span>
        { name }
      </div>
      <ExplorerContextMenu show={showContextMenu} handleMenuItemClick={(type) => {
        setShowContextMenu(false)
        setContextAction(type)
      }} />
    </div>
  );
};

export default ExplorerFileItem;
