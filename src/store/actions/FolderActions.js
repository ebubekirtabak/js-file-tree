import { fetchDir } from './DirectoryActions';

export function updateFolderName(targetFolder, newName) {
  return (dispatch, getState) => {
    const state = getState();
    const { dir } = state.directoryReducers;
    const { path, name } = targetFolder;
    const rootPath = findFileRootByPath(dir, path);
    const folder = rootPath.files.find(({ path: targetPath}) => targetPath === path)
    folder.name = newName;
    const newPath = path.replace('/' + name, '/' + newName);
    folder.path = newPath;
    dispatch(fetchDir(dir))
  }
}

const findFileRootByPath = (dir, path) => {
  const paths = path.split('/');
  let lastPath = ''
  let rootPath = dir;
  for (let i = 1; i < (paths.length - 1); i++) {
    lastPath += `/${paths[i]}`;
    if (Array.isArray(rootPath)) {
      rootPath = rootPath.find(({ path }) => path === lastPath);
    } else {
      rootPath = rootPath.files.find(({ path }) => path === lastPath);
    }
  }

  return rootPath;
}
