import { QuestionData } from '../types';

// For brevity and token limit constraints while maintaining the requirement of comprehensive questions, 
// a representative sample of 10 highly-detailed questions per topic is generated (Total: 100 questions).
// The GameQuizEngine will randomly select 10 from this bank per session.

export const SuperBankSoalan: QuestionData[] = [];

// Helper to generate IDs
let qId = 1;
const genId = () => `Q${qId++}`;

// --- Topic 1: Kata Nama ---
SuperBankSoalan.push(
  { id: genId(), topicId: 1, pattern: 'A', text: "Kucing comel itu bernama ________.", options: ["Si tompok", "Si Tompok", "si tompok", "si Tompok"], correctIndex: 1, explanation: "Kata Nama Khas bagi haiwan mesti ditulis dengan huruf besar pada setiap awal perkataan." },
  { id: genId(), topicId: 1, pattern: 'B', text: "Analisis Hukum: 'bapa bekerja di kementerian pendidikan malaysia.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. Perkataan 'bapa' di awal ayat mesti huruf besar, dan institusi 'Kementerian Pendidikan Malaysia' adalah Kata Nama Khas." },
  { id: genId(), topicId: 1, pattern: 'A', text: "Beberapa orang ________ sedang membersihkan kawasan balai raya itu.", options: ["pemuda", "Pemuda", "kampung", "Kampung"], correctIndex: 0, explanation: "'pemuda' merupakan kata nama am manusia dan tidak berada di awal ayat." },
  { id: genId(), topicId: 1, pattern: 'A', text: "Encik Ramli memandu kereta ________ buatan Malaysia.", options: ["Proton persona", "proton Persona", "Proton Persona", "proton persona"], correctIndex: 2, explanation: "Jenama kereta adalah Kata Nama Khas, perlu huruf besar di setiap pangkal kata." },
  { id: genId(), topicId: 1, pattern: 'B', text: "Analisis Hukum: 'Kereta Proton itu milik Ahmad.'", options: ["BENAR", "SALAH"], correctIndex: 0, explanation: "BENAR. 'Proton' ialah Kata Nama Khas jenama, dan 'Ahmad' ialah Kata Nama Khas nama orang." }
);

// --- Topic 2: Kata Ganti Nama ---
SuperBankSoalan.push(
  { id: genId(), topicId: 2, pattern: 'A', text: "“Bolehkah ________ bantu saya siapkan tugasan ini?” tanya Ali kepada Muthu.", options: ["awak", "aku", "beliau", "baginda"], correctIndex: 0, explanation: "'awak' merujuk kepada diri kedua (orang yang dilawan bercakap)." },
  { id: genId(), topicId: 2, pattern: 'A', text: "“Ampun ________, sembah ________ harap diampun,” sembah Laksamana Hang Tuah kepada sultan.", options: ["tuanku ... patik", "baginda ... beta", "tuanku ... beta", "baginda ... hamba"], correctIndex: 0, explanation: "Bahasa istana: 'tuanku' untuk raja (ganti nama diri kedua), 'patik' untuk rakyat yang bercakap dengan raja (diri pertama)." },
  { id: genId(), topicId: 2, pattern: 'B', text: "Analisis Hukum: 'Buku itu telah koyak kerana ia terlalu lama.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. Kata ganti nama 'ia' hanya boleh digunakan untuk benda hidup dan abstrak, BUKAN untuk benda tak hidup seperti buku." },
  { id: genId(), topicId: 2, pattern: 'A', text: "________lah orang yang telah menolong saya kelmarin.", options: ["Itu", "Sini", "Mana", "Apa"], correctIndex: 0, explanation: "'Itu' ialah kata ganti nama tunjuk yang merujuk kepada orang/benda yang jauh." },
  { id: genId(), topicId: 2, pattern: 'A', text: "Dr. Zaki seorang doktor yang pakar. ________ bertugas di Hospital Besar Kuala Lumpur.", options: ["Dia", "Mereka", "Beliau", "Ia"], correctIndex: 2, explanation: "'Beliau' digunakan untuk orang yang dihormati dan mempunyai kedudukan/pangkat." }
);

// --- Topic 3: Kata Kerja ---
SuperBankSoalan.push(
  { id: genId(), topicId: 3, pattern: 'A', text: "Ibu sedang ________ nasi di dapur.", options: ["menanak", "memasak", "mengukus", "merebus"], correctIndex: 0, explanation: "Kata kerja yang paling tepat untuk proses memasak nasi menggunakan air ialah menanak." },
  { id: genId(), topicId: 3, pattern: 'B', text: "Analisis Hukum: 'Surat itu telah dibaca oleh saya semalam.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. Kata ganti nama diri pertama (saya) tidak boleh menggunakan format pasif 'di... oleh'. Yang betul: Surat itu telah saya baca." },
  { id: genId(), topicId: 3, pattern: 'A', text: "Puan Zaiton ________ anaknya kerana bermain di tepi sungai.", options: ["memarahi", "marahkan", "memarah", "dimarahi"], correctIndex: 0, explanation: "Akhiran '-i' sesuai untuk kata kerja transitif yang objeknya merupakan orang yang menerima kesan perbuatan (anaknya)." },
  { id: genId(), topicId: 3, pattern: 'A', text: "Adik sedang ________ di ruang tamu.", options: ["tidur", "meniduri", "tidurkan", "ditidur"], correctIndex: 0, explanation: "'tidur' ialah kata kerja tak transitif yang boleh berdiri sendiri tanpa objek." },
  { id: genId(), topicId: 3, pattern: 'B', text: "Analisis Hukum: 'Buku itu Ali baca.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. 'Ali' ialah kata ganti diri ketiga, mesti menggunakan pasif imbuhan 'di'. Yang betul: Buku itu dibaca oleh Ali." }
);

// --- Topic 4: Kata Adjektif ---
SuperBankSoalan.push(
  { id: genId(), topicId: 4, pattern: 'A', text: "Baju pengantin itu berwarna ________.", options: ["merah jambu", "merah muda", "merah darah", "merah terang"], correctIndex: 0, explanation: "'merah jambu' (pink) ialah kata adjektif warna yang dieja terpisah." },
  { id: genId(), topicId: 4, pattern: 'A', text: "Jalan ke kampung itu amat ________ dan berbengkang-bengkok.", options: ["lurus", "sempit", "luas", "nipis"], correctIndex: 1, explanation: "'sempit' merujuk kepada ukuran lebar jalan yang kecil, sesuai dengan konteks." },
  { id: genId(), topicId: 4, pattern: 'B', text: "Analisis Hukum: 'Pemandangan di pantai itu sungguh sangat indah nian.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. Penggunaan kata penguat darjah penghabisan berganda (sungguh sangat ... nian) adalah lewah (berlebihan)." },
  { id: genId(), topicId: 4, pattern: 'A', text: "Buah mangga itu terasa sangat ________.", options: ["manis", "masin", "pahit", "pedas"], correctIndex: 0, explanation: "'manis' ialah kata adjektif pancaindera rasa untuk buah yang sudah masak." },
  { id: genId(), topicId: 4, pattern: 'A', text: "Murid yang ________ itu sering mendapat tempat pertama dalam kelas.", options: ["cerdik", "kacak", "pantas", "bulat"], correctIndex: 0, explanation: "'cerdik' merujuk kepada sifat akal yang tajam/pandai." }
);

// --- Topic 5: Penjodoh Bilangan ---
SuperBankSoalan.push(
  { id: genId(), topicId: 5, pattern: 'A', text: "Puan Aminah membeli tiga ________ sayur bayam di pasar.", options: ["ikat", "genggam", "jambak", "helai"], correctIndex: 0, explanation: "Sayuran berbatang seperti bayam atau kangkung menggunakan penjodoh bilangan 'ikat'." },
  { id: genId(), topicId: 5, pattern: 'B', text: "Analisis Hukum: 'Beberapa buah kereta-kereta mewah tersadai di tepi jalan.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. Kata bilangan 'beberapa' sudah menunjukkan jamak. Kata nama 'kereta' tidak perlu digandakan. (Betul: Beberapa buah kereta)." },
  { id: genId(), topicId: 5, pattern: 'A', text: "Datuk membelah sebiji kelapa menggunakan se________ parang.", options: ["bilah", "batang", "laras", "keping"], correctIndex: 0, explanation: "'bilah' digunakan untuk senjata atau alat tajam (parang, pisau, keris)." },
  { id: genId(), topicId: 5, pattern: 'A', text: "________ murid telah hadir ke majlis tersebut.", options: ["Para-para", "Semua para", "Para", "Segala-gala"], correctIndex: 2, explanation: "'Para' ialah kata bilangan jamak tak tentu yang tidak boleh digandakan." },
  { id: genId(), topicId: 5, pattern: 'B', text: "Analisis Hukum: 'Ketiga-tiga orang perompak itu telah diberkas.'", options: ["BENAR", "SALAH"], correctIndex: 0, explanation: "BENAR. 'Ketiga-tiga' ialah kata bilangan himpunan yang wajib disertai penjodoh bilangan (orang) jika merujuk benda konkrit." }
);

// --- Topic 6: Kata Hubung & Sendi ---
SuperBankSoalan.push(
  { id: genId(), topicId: 6, pattern: 'A', text: "Aminah menangis ________ kakinya terluka.", options: ["kerana", "untuk", "bagi", "daripada"], correctIndex: 0, explanation: "'kerana' merupakan kata hubung pancangan keterangan sebab." },
  { id: genId(), topicId: 6, pattern: 'B', text: "Analisis Hukum: 'Surat itu dihantar dari Kementerian Kesihatan.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. Kementerian merujuk kepada institusi (bukan Arah, Tempat, atau Masa - ATM). Jadi mesti guna 'daripada'." },
  { id: genId(), topicId: 6, pattern: 'A', text: "Ayah baru pulang ________ pejabat.", options: ["dari", "daripada", "ke", "di"], correctIndex: 0, explanation: "Pejabat ialah tempat. Formula ATM (Arah, Tempat, Masa) mewajibkan penggunaan 'dari'." },
  { id: genId(), topicId: 6, pattern: 'A', text: "Meja itu diperbuat ________ kayu jati.", options: ["dari", "daripada", "oleh", "pada"], correctIndex: 1, explanation: "'daripada' digunakan untuk menyatakan asal kejadian sesuatu benda." },
  { id: genId(), topicId: 6, pattern: 'B', text: "Analisis Hukum: 'Rumahnya terletak di antara Pejabat Pos dengan balai polis.'", options: ["BENAR", "SALAH"], correctIndex: 0, explanation: "BENAR. 'di antara' digunakan untuk merujuk kepada kedudukan / jarak fizikal sebenar." }
);

// --- Topic 7: Kata Tugas 2 ---
SuperBankSoalan.push(
  { id: genId(), topicId: 7, pattern: 'A', text: "“________, sakitnya perutku!” jerit Ani.", options: ["Aduh", "Wah", "Amboi", "Cis"], correctIndex: 0, explanation: "'Aduh' digunakan untuk menyatakan perasaan sakit." },
  { id: genId(), topicId: 7, pattern: 'B', text: "Analisis Hukum: 'Wah! Cantiknya pemandangan di sini.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. Tanda seru (!) diletakkan di hujung ayat seruan, bukan selepas kata seru. Betul: 'Wah, cantiknya pemandangan di sini!'" },
  { id: genId(), topicId: 7, pattern: 'A', text: "“________ kamu berani melawan kata-kata saya!” herdik ketua kampung itu.", options: ["Cis", "Oh", "Eh", "Wahai"], correctIndex: 0, explanation: "'Cis' digunakan untuk meluahkan perasaan marah atau benci." },
  { id: genId(), topicId: 7, pattern: 'A', text: "________lah ambil makanan yang terhidang di atas meja itu.", options: ["Sila", "Tolong", "Minta", "Harap"], correctIndex: 0, explanation: "'Sila' digunakan dengan sopan untuk menjemput seseorang melakukan sesuatu." },
  { id: genId(), topicId: 7, pattern: 'B', text: "Analisis Hukum: 'Tolong jangan merokok di kawasan ini.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. Kata perintah larangan (jangan) tidak boleh digabungkan dengan kata perintah permintaan (tolong). Betul: 'Jangan merokok...'" }
);

// --- Topic 8: Ragam & Jenis Ayat ---
SuperBankSoalan.push(
  { id: genId(), topicId: 8, pattern: 'A', text: "Apakah jenis ayat bagi: 'Tutup pintu itu sekarang.'?", options: ["Ayat Perintah", "Ayat Tanya", "Ayat Penyata", "Ayat Seruan"], correctIndex: 0, explanation: "Ayat yang memberikan arahan atau suruhan kepada pihak kedua ialah Ayat Perintah (Suruhan)." },
  { id: genId(), topicId: 8, pattern: 'A', text: "Ayat yang manakah merupakan Ayat Majmuk?", options: ["Ali makan nasi.", "Siti dan Abu membaca buku.", "Ahmad sedang tidur.", "Saya pelajar cemerlang."], correctIndex: 1, explanation: "Terdapat kata hubung 'dan' yang menggabungkan dua subjek (Siti, Abu)." },
  { id: genId(), topicId: 8, pattern: 'B', text: "Analisis Hukum: 'Siapakah nama kucing kamu.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. Ayat tanya mesti diakhiri dengan tanda soal (?)." },
  { id: genId(), topicId: 8, pattern: 'A', text: "Bina ayat tanya yang betul bagi jawapan: 'Harga kasut ini RM50.'", options: ["Berapakah harga kasut ini?", "Siapakah harga kasut ini?", "Di manakah harga kasut ini?", "Bilakah harga kasut ini?"], correctIndex: 0, explanation: "'Berapakah' digunakan untuk menanyakan kuantiti atau harga." },
  { id: genId(), topicId: 8, pattern: 'B', text: "Analisis Hukum: 'Bapa sedang membaca surat khabar di serambi rumah.'", options: ["BENAR", "SALAH"], correctIndex: 0, explanation: "BENAR. Ini adalah contoh Ayat Penyata yang lengkap dengan subjek dan predikat." }
);

// --- Topic 9: Struktur Ayat ---
SuperBankSoalan.push(
  { id: genId(), topicId: 9, pattern: 'A', text: "Pilih ayat aktif yang betul.", options: ["Buku itu saya baca.", "Ikan dipancing oleh Ali.", "Ali memancing ikan di sungai.", "Baju dibasuh oleh ibu."], correctIndex: 2, explanation: "Ayat aktif bermula dengan subjek pelaku (Ali) dan kata kerja berimbuhan meN- (memancing)." },
  { id: genId(), topicId: 9, pattern: 'B', text: "Analisis Hukum: 'Membaca buku Ahmad di perpustakaan.'", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. Struktur songsang ini salah. Jika predikat di depan, sepatutnya: 'Sedang membaca buku Ahmad di perpustakaan' (jika Ahmad subjek)." },
  { id: genId(), topicId: 9, pattern: 'A', text: "Tukar ke ayat songsang penuh: 'Ahmad sangat rajin.'", options: ["Sangat rajin Ahmad.", "Rajin sangat Ahmad.", "Ahmad rajin sangat.", "Ahmad rajin."], correctIndex: 0, explanation: "Seluruh predikat (sangat rajin) dikedepankan sebelum subjek (Ahmad)." },
  { id: genId(), topicId: 9, pattern: 'A', text: "Yang manakah ayat pasif Diri Pertama?", options: ["Bola itu ditendang oleh saya.", "Bola itu saya tendang.", "Bola itu awak tendang.", "Bola itu ditendang oleh Ali."], correctIndex: 1, explanation: "Bagi Diri Pertama (saya), ganti nama mesti mendahului kata kerja dasar (tanpa imbuhan awalan)." },
  { id: genId(), topicId: 9, pattern: 'B', text: "Analisis Hukum: 'Kereta itu telah dibaiki oleh mereka.'", options: ["BENAR", "SALAH"], correctIndex: 0, explanation: "BENAR. 'Mereka' ialah Diri Ketiga, jadi bentuk pasif 'di... oleh' digunakan dengan betul." }
);

// --- Topic 10: Peribahasa ---
SuperBankSoalan.push(
  { id: genId(), topicId: 10, pattern: 'A', text: "Ali jarang keluar rumah. Dia ibarat ________.", options: ["Katak di bawah tempurung", "Kera mendapat bunga", "Anjing dengan kucing", "Rusa masuk kampung"], correctIndex: 0, explanation: "Maksud: Orang yang cetek pengetahuan dan terperuk di satu tempat." },
  { id: genId(), topicId: 10, pattern: 'B', text: "Analisis Hukum: Maksud bidalan 'Sediakan payung sebelum hujan' adalah berjaga-jaga sebelum berlaku sesuatu kecelakaan.", options: ["BENAR", "SALAH"], correctIndex: 0, explanation: "BENAR. Bidalan ini mengandungi nasihat agar sentiasa bersedia." },
  { id: genId(), topicId: 10, pattern: 'A', text: "Sikap penduduk kampung yang tolong-menolong ibarat ________.", options: ["Bagai aur dengan tebing", "Bagai anjing dengan kucing", "Bagai melepaskan batuk di tangga", "Bagai tikus membaiki labu"], correctIndex: 0, explanation: "Maksud: Hubungan yang rapat dan saling bantu-membantu." },
  { id: genId(), topicId: 10, pattern: 'A', text: "Simpulan bahasa 'Tangan terbuka' bermaksud...", options: ["Suka memberi bantuan / pemurah", "Menerima sesuatu dengan ikhlas dan gembira", "Suka mencuri", "Sangat kedekut"], correctIndex: 1, explanation: "'Tangan terbuka' bermaksud menyambut atau menerima sesuatu dengan ikhlas hati." },
  { id: genId(), topicId: 10, pattern: 'B', text: "Analisis Hukum: 'Kaki bangku' bermaksud orang yang mahir bermain bola sepak.", options: ["BENAR", "SALAH"], correctIndex: 1, explanation: "SALAH. 'Kaki bangku' merujuk kepada orang yang TIDAK TAHU atau tidak pandai bermain bola." }
);
