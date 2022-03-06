export class DirDataProvider { 
    fetchDirData = () => fetch('dir.json').then(res => res.json())
}