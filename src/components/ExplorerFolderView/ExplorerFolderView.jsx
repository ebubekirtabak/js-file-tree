import { connect } from "react-redux";
import ExplorerFolderItem from "../ExplorerFolderItem/ExplorerFolderItem";

const ExplorerFolderView = (props) => {
    const { dir = [] } = props;
    const folders = dir.filter(({ type }) => type === "folder");
    return (
        <div className="explorer-folder-view" data-testid="folderView">
            { 
                folders.map((folder) => <ExplorerFolderItem folder={folder} key={folder.path} />)
            }
        </div>
    );
}

const mapStateToProps = function(state) {
    const { directoryReducers } = state;
    return {
        dir: directoryReducers.dir,
    }
};

export default connect(mapStateToProps)(ExplorerFolderView);