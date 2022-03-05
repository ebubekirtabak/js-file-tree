import { useState } from "react";
import ExplorerFileItem from "../ExplorerFileItem/ExplorerFileItem";

const ExplorerFolderItem = (props) => {
    const { folder } = props;
    const { name, files = [], path } = folder;
    const [ active, setActive ] = useState(false);
    const folders = files.filter(({ type }) => type === "folder");
    const fileList = files.filter(({ type }) => type === "file");
    return (
        <div className="explorer-folder-item">
            <div 
                className={`explorer-folder-item__head ${active ? "active" : ""}`}
                key={path}
                onClick={() => setActive(!active)}
                >
                <span className="material-icons">folder</span>
                { name }
                <span className="material-icons explorer-folder-item__indicator">arrow_right</span>
            </div>
            <div className={`explorer-folder-item__list ${active ? "active" : ""}`}>
                { folders.map((folder) => <ExplorerFolderItem folder={folder} key={folder.path} /> ) }
                { fileList.map((file) => <ExplorerFileItem file={file} key={file.path} />) }
            </div>
        </div>
    );
}

export default ExplorerFolderItem;