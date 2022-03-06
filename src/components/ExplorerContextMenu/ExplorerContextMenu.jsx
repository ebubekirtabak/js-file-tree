import ExplorerContextMenuItem from "../ExplorerContextMenuItem/ExplorerContextMenuItem";

const defaultMenu = [
    { type: 'edit', name: 'Edit', icon: 'edit' },
    { type: 'delete', name: 'Delete', icon: 'remove' },
];

const ExplorerContextMenu = (props) => {
    const { show } = props;
    return (
        <div className={`explorer-context-menu ${show ? 'open' : '' }`} data-testid="context-menu">
            { 
                defaultMenu.map((item, index) => (
                    <ExplorerContextMenuItem 
                        item={item}
                        key={`${item.type}-${index}`}
                        handleMenuItemClick={(type) => props.handleMenuItemClick(type)} 
                    />
                ))
            }
        </div>
    );
};

export default ExplorerContextMenu;