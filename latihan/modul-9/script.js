// Bagian untuk menghitung luas persegi

function hitungLuas() {
    var panjang = prompt("Masukkan Panjang Persegi")
    var lebar = prompt("Masukkan Lebar Persegi")

    alert(`Lebar persegi anda adalah : ${panjang * lebar}`)
}

var barang, parsedJson;

parsedJson = JSON.parse(localStorage.getItem('barang'))

if (parsedJson == null || parsedJson.length == 0) {
    barang = []
} else {
    barang = parsedJson
}

function tambahData() {
    var nama, harga, jumlah;

    nama = prompt("Masukkan nama barang")

    harga = prompt("Masukkan harga barang")

    jumlah = prompt("Masukkan jumlah barang")

    alert("Data berhasil di input")

    barang.push({
        nama: nama,
        harga: harga,
        jumlah: jumlah,
        subTotal: harga * jumlah
    })

    localStorage.setItem('barang', JSON.stringify(barang))
    return window.location.reload()
}

var table = document.getElementById('table'), tr, td;

var attr = [
    "i",
    "nama",
    "harga",
    "jumlah",
    "subTotal"
]

barang.forEach((item, i) => {
    tr = document.createElement('tr')

    for (let index = 0; index < attr.length; index++) {
        td = document.createElement('td')
        tr.appendChild(td)
        td.innerHTML = index == 0 ? i + 1 : item[attr[index]]
    }

    table.tBodies[0].appendChild(tr)
});
