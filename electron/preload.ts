import {contextBridge,ipcRenderer} from 'electron';
contextBridge.exposeInMainWorld('webforge',{openProject:()=>ipcRenderer.invoke('project:open'),listFiles:(root:string)=>ipcRenderer.invoke('project:list',root),readFile:(root:string,rel:string)=>ipcRenderer.invoke('file:read',root,rel),writeFile:(root:string,rel:string,content:string)=>ipcRenderer.invoke('file:write',root,rel,content)});
