import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://uts-webservice2024-172a0582e09a.herokuapp.com/donasi";
get(urlAPI,isiTableDonasi);
function isiTableDonasi(results){
    console.log(results);
}
//bodo