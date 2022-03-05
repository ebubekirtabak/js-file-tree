import './App.scss';
import ExplorerFolderView from './components/ExplorerFolderView/ExplorerFolderView';

const dir = [
  { 
    type: 'folder',
    name: 'Home',
    path: '/Home',
    files: [
      { type: 'file', name: 'note.txt' },
      { type: 'folder', name: 'User', path: '/Home/User',
        files: [
          { type: 'file', path: '/Home/User/UserSettings.txt', name: 'UserSettings.txt' },
          { type: 'file', path: '/Home/User/UserNotes.txt', name: 'UserNotes.txt' },
          { type: 'file', path: '/Home/User/UserSettings(2).txt', name: 'UserSettings(2).txt' },
        ]
      }
    ]
  },
  { type: 'file', name: '.zshrc' },
];

function App() {
  return (
    <div className="App">
      <ExplorerFolderView dir={dir} />
    </div>
  );
}

export default App;
