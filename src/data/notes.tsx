import { NoteData } from '../types';
import React from 'react';

export const NotaKompendium: NoteData[] = [
  {
    id: 1,
    title: "1. Kata Nama Am & Khas",
    content: (
      <div className="space-y-4">
        <p>Kata Nama Am merujuk kepada benda, manusia, tempat, dan haiwan secara umum. <strong>Huruf kecil</strong> kecuali di awal ayat. 🐶🏢</p>
        <p>Kata Nama Khas merujuk secara khusus. <strong>Huruf besar</strong> pada pangkal perkataan. 🇲🇾🎓</p>
        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="font-bold">Contoh KPM:</p>
          <ul className="list-disc pl-5">
            <li>Am Hidup Manusia: guru, polis, murid</li>
            <li>Am Tak Hidup Institusi: sekolah, hospital, persatuan</li>
            <li>Khas: Cikgu Ahmad, Sang Kancil, Sekolah Kebangsaan Melati</li>
          </ul>
        </div>
        <div className="bg-red-100 p-3 border-l-4 border-red-500 rounded-r-lg mt-4">
          <p className="font-bold text-red-700">⚠️ Awas Kesalahan Lazim</p>
          <p>Jangan gunakan Kata Nama Khas selepas penjodoh bilangan jika tidak spesifik. (SALAH: sebuah Proton Saga. BETUL: sebuah kereta Proton Saga).</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "2. Kata Ganti Nama Diri",
    content: (
      <div className="space-y-4">
        <p>Kata yang menjadi pengganti nama sesuatu benda, manusia, atau tempat. 🙋‍♂️🗣️</p>
        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="font-bold">Pembahagian:</p>
          <ul className="list-disc pl-5">
            <li><strong>Diri Pertama:</strong> aku, saya, beta (raja), patik (rakyat kepada raja)</li>
            <li><strong>Diri Kedua:</strong> awak, kamu, engkau, tuanku (kepada raja)</li>
            <li><strong>Diri Ketiga:</strong> dia, ia, mereka, baginda (raja)</li>
          </ul>
        </div>
        <div className="bg-red-100 p-3 border-l-4 border-red-500 rounded-r-lg mt-4">
          <p className="font-bold text-red-700">⚠️ Awas Kesalahan Lazim</p>
          <p>Kata ganti nama diri 'ia' hanya untuk benda hidup/haiwan/konsep abstrak, BUKAN untuk benda mati. (SALAH: Meja itu rosak kerana ia lama).</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "3. Kata Kerja",
    content: (
      <div className="space-y-4">
        <p>Kata Kerja menunjukkan sesuatu perbuatan atau keadaan. 🏃‍♂️✍️</p>
        <div className="bg-blue-100 p-3 rounded-lg">
          <ul className="list-disc pl-5">
            <li><strong>Transitif:</strong> Memerlukan objek (Contoh: Ali <strong>menendang</strong> bola).</li>
            <li><strong>Tak Transitif:</strong> Boleh berdiri sendiri tanpa objek (Contoh: Adik sedang <strong>tidur</strong>).</li>
            <li><strong>Pasif:</strong> Perbuatan yang dikenakan kepada objek (Contoh: Bola itu <strong>ditendang</strong> oleh Ali).</li>
          </ul>
        </div>
        <div className="bg-red-100 p-3 border-l-4 border-red-500 rounded-r-lg mt-4">
          <p className="font-bold text-red-700">⚠️ Awas Kesalahan Lazim</p>
          <p>Pasif Diri 1 & 2 tidak boleh guna 'di... oleh'. (SALAH: Kuih itu dimakan oleh saya. BETUL: Kuih itu saya makan).</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "4. Kata Adjektif",
    content: (
      <div className="space-y-4">
        <p>Menerangkan sifat atau keadaan sesuatu kata nama. Terdapat 9 jenis! 🌈📏</p>
        <div className="bg-blue-100 p-3 rounded-lg">
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>Sifat/Keadaan:</strong> baik, pandai</li>
            <li><strong>Warna:</strong> merah, biru</li>
            <li><strong>Ukuran:</strong> nipis, tebal</li>
            <li><strong>Bentuk:</strong> bulat, bujur</li>
            <li><strong>Waktu:</strong> lama, baru</li>
            <li><strong>Jarak:</strong> jauh, dekat</li>
            <li><strong>Cara:</strong> cepat, lambat</li>
            <li><strong>Perasaan:</strong> rindu, sedih</li>
            <li><strong>Pancaindera:</strong> manis, bising</li>
          </ul>
        </div>
        <div className="bg-red-100 p-3 border-l-4 border-red-500 rounded-r-lg mt-4">
          <p className="font-bold text-red-700">⚠️ Awas Kesalahan Lazim</p>
          <p>Jangan gandakan kata penguat. (SALAH: sangat cantik sekali. BETUL: sangat cantik / cantik sekali).</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Penjodoh Bilangan & Kata Bilangan",
    content: (
      <div className="space-y-4">
        <p>Digunakan bersama kata bilangan untuk membilang sesuatu benda. 🍎📚</p>
        <div className="bg-blue-100 p-3 rounded-lg">
          <ul className="list-disc pl-5">
            <li><strong>Bentuk:</strong> cincin, mata kail</li>
            <li><strong>Rumpun:</strong> buluh, serai</li>
            <li><strong>Ulas:</strong> durian, limau</li>
            <li><strong>Tandan:</strong> pisang, kelapa</li>
          </ul>
        </div>
        <div className="bg-red-100 p-3 border-l-4 border-red-500 rounded-r-lg mt-4">
          <p className="font-bold text-red-700">⚠️ Awas Kesalahan Lazim</p>
          <p>Kata bilangan jamak (semua, para, beberapa) TIDAK perlukan penjodoh bilangan. (SALAH: Semua buah epal. BETUL: Semua epal).</p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "6. Kata Hubung & Sendi Nama",
    content: (
      <div className="space-y-4">
        <p>Menyambungkan ayat atau frasa. 🔗🛤️</p>
        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="font-bold mb-2">Formula ATM (Kata Sendi 'Dari'):</p>
          <ul className="list-disc pl-5">
            <li><strong>A</strong>rah (Contoh: dari utara)</li>
            <li><strong>T</strong>empat (Contoh: dari sekolah)</li>
            <li><strong>M</strong>asa (Contoh: dari semalam)</li>
          </ul>
          <p className="mt-2 italic text-sm">*'Daripada' pula untuk Orang, Bandingan, Asal kejadian, dan Abstrak.</p>
        </div>
        <div className="bg-red-100 p-3 border-l-4 border-red-500 rounded-r-lg mt-4">
          <p className="font-bold text-red-700">⚠️ Awas Kesalahan Lazim</p>
          <p>Perbandingan 'di antara' vs 'antara': 'Di antara' untuk jarak fizikal (Duduk di antara Ali dan Abu). 'Antara' untuk perkara abstrak/pilihan (Antara hobi saya ialah membaca).</p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "7. Kata Tugas Bahagian 2",
    content: (
      <div className="space-y-4">
        <p>Merangkumi pelbagai kata yang memberikan pelbagai tugas tatabahasa. ❗❓</p>
        <div className="bg-blue-100 p-3 rounded-lg">
          <ul className="list-disc pl-5">
            <li><strong>Kata Seru:</strong> Wah, amboi, cis, aduh</li>
            <li><strong>Kata Perintah:</strong> Sila, tolong, harap, jangan, usah</li>
            <li><strong>Kata Penegas:</strong> -lah, -tah, -kah, juga, jua, pun</li>
          </ul>
        </div>
        <div className="bg-red-100 p-3 border-l-4 border-red-500 rounded-r-lg mt-4">
          <p className="font-bold text-red-700">⚠️ Awas Kesalahan Lazim</p>
          <p>Tanda seru (!) diletakkan di HUJUNG ayat, bukan selepas kata seru. (SALAH: Wah! cantiknya baju itu. BETUL: Wah, cantiknya baju itu!)</p>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "8. Ragam & Jenis Ayat",
    content: (
      <div className="space-y-4">
        <p>Ayat dibahagikan mengikut binaan dan fungsi. 📝🔍</p>
        <div className="bg-blue-100 p-3 rounded-lg">
          <ul className="list-disc pl-5">
            <li><strong>Ayat Tunggal:</strong> Satu subjek, satu predikat (Ali makan.)</li>
            <li><strong>Ayat Majmuk:</strong> Gabungan dengan kata hubung (Ali dan Abu makan.)</li>
            <li><strong>Ayat Penyata:</strong> Memberi keterangan.</li>
            <li><strong>Ayat Perintah:</strong> Memberi arahan/larangan.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "9. Struktur & Susunan Ayat",
    content: (
      <div className="space-y-4">
        <p>Melibatkan kedudukan Subjek dan Predikat. 🔄🏗️</p>
        <div className="bg-blue-100 p-3 rounded-lg">
          <ul className="list-disc pl-5">
            <li><strong>Susunan Biasa:</strong> Subjek di depan, Predikat di belakang (Budak itu / rajin).</li>
            <li><strong>Susunan Songsang:</strong> Predikat di depan, Subjek di belakang (Rajin / budak itu).</li>
          </ul>
        </div>
        <div className="bg-red-100 p-3 border-l-4 border-red-500 rounded-r-lg mt-4">
          <p className="font-bold text-red-700">⚠️ Awas Kesalahan Lazim</p>
          <p>Ayat aktif transitif MESTI diikuti oleh objek (Kata Nama). Tidak boleh diikuti Kata Sendi Nama. (SALAH: Dia menceritakan tentang kisah itu. BETUL: Dia menceritakan kisah itu).</p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "10. Peribahasa Komprehensif",
    content: (
      <div className="space-y-4">
        <p>Kiasan berseni dalam masyarakat Melayu. 🎭📜</p>
        <div className="bg-blue-100 p-3 rounded-lg">
          <ul className="list-disc pl-5">
            <li><strong>Simpulan Bahasa:</strong> Dua patah perkataan (Kaki bangku)</li>
            <li><strong>Perumpamaan:</strong> Menggunakan 'seperti, bagai, laksana' (Bagai aur dengan tebing)</li>
            <li><strong>Bidalan:</strong> Ada unsur pengajaran (Sediakan payung sebelum hujan)</li>
            <li><strong>Pepatah:</strong> Rangkaian kata berkerat-kerat (Berat sama dipikul, ringan sama dijinjing)</li>
          </ul>
        </div>
      </div>
    )
  }
];
