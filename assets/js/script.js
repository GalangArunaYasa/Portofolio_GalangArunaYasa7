
function btn() {
    const section = document.getElementById("mySection");
    const footer = document.getElementById("myfooter");

    

    section.style.display = "flex";
    footer.style.display = "flex";
    document.getElementById("mySection").scrollIntoView({ behavior: "smooth" });
}

function btn1() {
    const section = document.getElementById("mySection");
    const footer = document.getElementById("myfooter");

    

    section.style.display = "flex";
    footer.style.display = "flex";
    document.getElementById("myfooter").scrollIntoView({ behavior: "smooth" });
}

const ubah_nama = document.getElementById('name');
const list = ['Galang Aruna yasa', 'Siswa Skanthree', 'Pemuda RPL'];
const warna = ['gold','darkcyan','darkcyan']
let index = 0;


setInterval (() =>
{index = (index + 1 )% list.length;
    ubah_nama.textContent = list[index];

ubah_nama.style.color = warna[index]
}
,2000
)