import { fetchDir } from './DirectoryActions';

export function updateFileName(targetFile, newName) {
  return (dispatch, getState) => {
    const state = getState();
    const { dir } = state.directoryReducers;
    const { path } = targetFile;
    const file = findFileByPath(dir, path);

    file.name = newName;
    dispatch(fetchDir(dir))
  }
}

const findFileByPath = (dir, path) => {
  const paths = path.split('/');
  let lastPath = ''
  let rootPath = dir;
  for (let i = 1; i < paths.length; i++) {
    lastPath += `/${paths[i]}`;
    if (Array.isArray(rootPath)) {
      rootPath = rootPath.find(({ path }) => path === lastPath);
    } else {
      rootPath = rootPath.files.find(({ path }) => path === lastPath);
    }
  }

  return rootPath;
}
