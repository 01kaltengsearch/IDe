/// <reference types="vite/client" />
interface Window{webforge:{openProject():Promise<string|null>;listFiles(root:string):Promise<{path:string,type:'file'|'directory'}[]>;readFile(root:string,rel:string):Promise<string>;writeFile(root:string,rel:string,content:string):Promise<boolean>}}
