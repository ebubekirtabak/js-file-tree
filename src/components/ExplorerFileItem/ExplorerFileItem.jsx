const ExplorerFileItem = (props) => {
    const { file } = props;
    const { name } = file;
    return (    
        <div className="explorer-file-item">
            <div className="explorer-file-item__head">
                <span className="material-icons">description</span>
                { name }
            </div>
        </div>
    );
};

export default ExplorerFileItem;