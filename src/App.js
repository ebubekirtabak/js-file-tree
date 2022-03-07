import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDirData } from './store/actions/DirectoryActions';
import ExplorerFolderView from './components/ExplorerFolderView/ExplorerFolderView';
import './App.scss';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDirData());
  }, [dispatch]);

  return (
    <div className="App">
      <ExplorerFolderView  />
    </div>
  );
}

export default App;
