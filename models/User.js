const mongoose = require('mongoose')

const SiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isi Nama'],
        unique: true
    },
    nis: {
        type: Number,
        required: [true, 'Silahkan isi NIS'],
        unique: true
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isi Kelas'],
        unique: false
    },
    jurusan: {
        type: String,
        required: [true, 'Silahkan isi Jurusan'],
        unique: false
    },
    umur: {
        type: Number,
        required: [true, 'Silahkan isi Umur'],
        unique: false
    },
    alamat: {
        type: String,
        required: [true, 'Silahkan isi Alamat'],
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isi Email valid !']

    }
})

module.exports = mongoose.model('Siswa', SiswaSchema)