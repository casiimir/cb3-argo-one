// import fsPromises from 'fs/promises';
// import path from 'path'

// export async function loadLanguage() {
//   const filePath = path.join(process.cwd(), `./languages/${lang}.json`);
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);
//     console.log(objectData);
//   return {
//     props: objectData
//   }
// }
// export const getLanguage = () => {
//     let lang = localStorage.getItem('language')
//     if (!lang) { 
//         localStorage.setItem('language', 'en')
//     }

//     return localStorage.getItem('language')
// }

// export const translate = (key) => {
//     loadLanguage();
//     .then((data) => {
//         console.log(JSON.parse(data));
//         if (typeof data[key] !== undefined) {
//             return data[key];
//         }
    
//         return '';
//     })
// }

