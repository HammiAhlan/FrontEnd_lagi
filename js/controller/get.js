import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
        isiTabel.replace("No.", value._id)
        .replace("Nama", value.nama)
        .replace("Jenis_donasi", value.jenis_donasi)
        .replace("Jumlah", value.jumlah)
    addInner("iniTabel", content);
}