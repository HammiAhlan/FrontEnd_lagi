import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://uts-webservice2024-172a0582e09a.herokuapp.com/donasi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}
//bodo