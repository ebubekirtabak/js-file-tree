const ExplorerContextMenuItem = (props) => {
    const { item } = props;
    const { icon, name, type } = item;
    return (
        <div 
            className="explorer-context-menu-item"
            data-testid="context-menu-item"
            onClick={ () => props.handleMenuItemClick(type) }>
            <span className="material-icons">{ icon }</span>
            { name }
        </div>
    );
};

export default ExplorerContextMenuItem;