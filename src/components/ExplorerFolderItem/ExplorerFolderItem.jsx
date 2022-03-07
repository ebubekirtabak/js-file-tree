import { useState } from "react";
import ExplorerFileItem from "../ExplorerFileItem/ExplorerFileItem";
import ItemEditor from '../ItemEditor/ItemEditor';
import ExplorerContextMenu from '../ExplorerContextMenu/ExplorerContextMenu';
import { useDispatch } from 'react-redux';
import { updateFolderName } from '../../store/actions/FolderActions';

const ExplorerFolderItem = (props) => {
    const { folder } = props;
    const { name, files = [], path } = folder;
    const [ active, setActive ] = useState(false);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [contextAction, setContextAction] = useState('');
    const dispatch = useDispatch();

    const folders = files.filter(({ type }) => type === "folder");
    const fileList = files.filter(({ type }) => type === "file");
    return (
        <div className="explorer-folder-item">
            {
                contextAction === 'edit' && (<ItemEditor value={name} onSubmitNewName={(newName) => {
                    console.log(newName);
                    setContextAction('');
                    dispatch(updateFolderName(folder, newName));
                }} />)
            }
            <div 
                className={`explorer-folder-item__head ${active ? "active" : ""} ${contextAction === 'edit' ? 'hide' : ''}`}
                key={path}
                onClick={() => setActive(!active)}
                onContextMenu={(event) => {
                    event.preventDefault();
                    setShowContextMenu(!showContextMenu);
                }}
                data-testid="folder-item-head"
                >
                <span className="material-icons">folder</span>
                { name }
                <span className="material-icons explorer-folder-item__indicator">arrow_right</span>
            </div>
            <ExplorerContextMenu show={showContextMenu} handleMenuItemClick={(type) => {
                setShowContextMenu(false)
                setContextAction(type)
            }} />
            <div 
                className={`explorer-folder-item__list ${active ? "active" : ""}`}
                data-testid="folder-item-list"
            >
                { folders.map((folder) => <ExplorerFolderItem folder={folder} key={folder.path} /> ) }
                { fileList.map((file) => <ExplorerFileItem file={file} key={file.path} />) }
            </div>
        </div>
    );
}

export default ExplorerFolderItem;
