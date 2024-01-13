function loopTo50() {
    var data = []

    for (let index = 1; index < 51; index++) {
        data.push(index)
    }

    alert(data)
}

function evenLoop() {
    var data = []

    for (let index = 1; index < 51; index++) {
        if (index % 2 != 0)
            data.push(index)
    }

    alert(data)
}

function fibonachi() {
    var data = [], angka1, angka2;

    for (let index = 0; index < 11; index++) {
        if (data.length == 0) {
            data.push(index + 1)
            data.push(index + 2)
        } else {
            angka1 = data[index - 1]
            angka2 = data[index]
            console.log(angka2);
            data.push(angka1 + angka2)
        }
    }

    alert(data)
}

function passwordCondition () {
    var password = 'inipassword'

    var username  = prompt("Masukkan Username")
    var inputPassword = prompt("Masukkan Password")

    if (inputPassword != password) {
        alert("Password yang anda masukan tidak sesuai")
        passwordCondition()
    } else {
        alert(`Selamat datang ${username}`)
    }
}

var data = []

function daftarSiswa() {
    if (data.length != 0)
        data = []

    var senin = prompt("Siswa yang untuk masuk hari senin")
    var selasa = prompt("Siswa yang untuk masuk hari selasa")
    var rabu = prompt("Siswa yang untuk masuk hari rabu")
    var kamis = prompt("Siswa yang untuk masuk hari kamis")
    var jumat = prompt("Siswa yang untuk masuk hari jumat")
    
    data.push({
        senin,
        selasa,
        rabu,
        kamis,
        jumat
    })

    var arrHari = [
        'senin',
        'selasa',
        'rabu',
        'kamis',
        'jumat'
    ], hari, result = "";

    for (let i = 0; i < arrHari.length; i++) {
        var hari = arrHari[i]

        var jumlahToNum = parseInt(data[0][hari])
        for (let j = 0; j < jumlahToNum; j++) {
            result += "x"
            document.getElementById(hari).innerHTML = result
        }
        result = ""
    }
}


