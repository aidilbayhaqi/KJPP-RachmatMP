# KJPP Rachmat MP & Rekan

Website company profile multipage menggunakan HTML, CSS, dan JavaScript murni.

## Membuka website

1. Ekstrak seluruh isi ZIP.
2. Buka folder `kjpp-rmp-website-clean`.
3. Klik dua kali `index.html`. Semua halaman dan gambar dapat dibuka secara lokal.

Tidak perlu Node.js, instalasi paket, atau proses build. Untuk konsultasi melalui formulir, perangkat perlu aplikasi email yang menangani tautan `mailto:`. Mengisi formulir tidak otomatis mengirim pesan.

## Struktur dan penyuntingan

| File | Isi |
| --- | --- |
| `index.html` | Beranda, ringkasan layanan, proyek pilihan, dan pendiri |
| `tentang.html` | Perjalanan, visi dan misi, manajemen, dan perizinan |
| `layanan.html` | Tujuh layanan dengan navigasi bagian |
| `keahlian.html` | Keahlian berdasarkan sektor industri |
| `pengalaman.html` | Portofolio, aset pemerintah, kajian BOT/BTO/KSP, kemitraan |
| `pendiri.html` | Profil, pendidikan, akademik, dan registrasi pendiri |
| `kontak.html` | Alamat, telepon, email, dan penyusunan draf konsultasi |
| `styles.css` | Warna, tipografi, komponen, breakpoint, animasi, dan mode cetak |
| `script.js` | Navigasi mobile, animasi scroll, tahun, dan draf email |
| `assets/` | Gambar lokal yang digunakan website |
| `docs/company-profile-kjpp-rmp.pdf` | Dokumen sumber lengkap dari pengguna |

URL lama `about.html`, `services.html`, `expertise.html`, `founder.html`, dan `contact.html` mengarah ke halaman bahasa Indonesia yang sesuai. Tidak ada lagi versi konten lama yang berbeda.

Warna dan jarak utama dikelola melalui variabel pada `:root` di awal stylesheet. Konten HTML tetap tersedia ketika JavaScript dinonaktifkan. Header dan footer dibuat statis agar website dapat dibuka dengan `file://`; saat mengubah data bersama, perbarui ketujuh halaman secara konsisten.

## Acuan data

Sumber: **COMPANY PROFILE KJPP RMP.pdf**, 48 halaman, yang diberikan pengguna. Nomor halaman berikut adalah urutan halaman PDF, bukan penomoran tercetak.

| Informasi | Sumber |
| --- | --- |
| Izin usaha 2.09.0066; KMK No. 1216/KM.1/2009; 19 Oktober 2009 | Hlm. 2, 6 |
| Pengalaman pendiri sejak 1988; sertifikasi 2001; direktur 1996–2005; UJP 2006 | Hlm. 2 |
| Profil, gelar Doktor, pendidikan, buku 2023, dan partisipasi seleksi lembaga | Hlm. 3 |
| Foto pendiri yang digunakan | Gambar asli yang diekstrak dari hlm. 3 |
| Struktur organisasi dan manajemen | Hlm. 4–5 |
| Izin Penilai Publik RMP, OJK, BPN/ATR, NIB, KADIN, FKJPP | Hlm. 6 |
| Visi dan lima misi | Hlm. 7 |
| Tujuh kelompok layanan | Hlm. 8–15 |
| Dokumentasi kemitraan dan perbankan | Hlm. 16–18 |
| Portofolio sektor dan korporasi | Hlm. 20–36 |
| 117 entri pekerjaan pemerintah/instansi yang diberi nomor | Hlm. 37–40 |
| Delapan kajian BOT/BTO/KSP | Hlm. 41 |
| Alamat, dua nomor telepon, dan dua email | Hlm. 48 |

Keputusan penyelarasan:

- Tahun 1988 menjelaskan pengalaman pendiri; 2009 menjelaskan izin usaha KJPP. Tahun pengalaman tidak disajikan sebagai tahun berdirinya KJPP.
- Gelar pendiri menggunakan **Dr.**, sesuai dokumen. Keikutsertaan dalam seleksi lembaga tidak disajikan sebagai jabatan yang pernah diemban.
- Dokumen menampilkan dua nomor NIB dengan tahun berbeda. Website mengikuti entri NIB berbasis risiko 2025: **0220350121476**.
- Gelar Dicky Gesti Ardiansyah berbeda antara bagan dan daftar manajemen. Website mempertahankan nama dan perannya tanpa menetapkan salah satu gelar.
- Dua lokasi kajian aset Kabupaten Buton ditampilkan terpisah sehingga daftar kajian mencakup delapan penugasan.
- Nama dan logo kemitraan disajikan sebagai dokumentasi historis, bukan konfirmasi hubungan aktif atau endorsement.
- Gambar gedung, meja analisis, dan diskusi adalah ilustrasi dari ZIP awal. Foto pendiri diganti dengan foto yang benar-benar terdapat pada PDF.
- Data diselaraskan dengan dokumen yang diberikan; tidak dilakukan verifikasi status perizinan secara langsung kepada lembaga penerbit.

## Alur kontak dan privasi

Formulir memvalidasi nama, alamat email, layanan, dan ringkasan kebutuhan, kemudian membuka draf ke `kjpp.rmpjkt@gmail.com`. Pengguna meninjau dan mengirim dari aplikasi emailnya. Draf salinan tetap tersedia jika aplikasi email tidak terbuka.

Website tidak menampilkan klaim pesan terkirim, tidak menyimpan data ke browser atau server, dan tidak memakai layanan analitik atau pelacak. Tombol penyusunan draf baru aktif setelah penanganan formulir berhasil dipasang. Jika JavaScript tidak tersedia, pengguna tetap dapat menyalin alamat email atau menekan tautan email langsung.

Website ini tidak menggunakan database atau API backend. Keduanya tidak diperlukan untuk company profile statis. Jika nanti dibutuhkan pengiriman langsung dari website, tambahkan endpoint server, validasi di server, pembatasan permintaan, dan kredensial email di server.

## Pemeriksaan yang dilakukan

- Struktur HTML, satu H1 per halaman, ID unik, label formulir, teks alternatif, dan keberadaan semua aset lokal.
- Semua tautan lokal dan anchor, termasuk navigasi layanan, legalitas, dan pengalihan URL lama.
- Sintaks JavaScript dan CSS.
- Pembuatan draf email: penerima, Unicode, karakter `&`, `#`, `%`, `?`, dan pesan multiline.
- Isi perusahaan, kontak, layanan, dan pemetaan sumber sebagaimana tabel di atas.

Layout responsif disusun untuk desktop, tablet, dan mobile. Animasi menghormati `prefers-reduced-motion`. Pengujian browser visual dan pengiriman email nyata belum dilakukan dalam pengerjaan ini.

## Publikasi

Unggah seluruh isi folder website ke direktori publik hosting statis atau `public_html`. Pastikan `index.html` berada di tingkat utama dan struktur `assets/` serta `docs/` dipertahankan. Aktifkan HTTPS pada hosting. Website tidak memerlukan variabel lingkungan atau kunci rahasia.

Sebelum peluncuran, tinjau tampilan pada perangkat sasaran dan coba alur email dengan aplikasi yang digunakan. Jika domain resmi telah tersedia, metadata canonical dapat ditambahkan menggunakan domain yang benar. Tidak ada domain contoh yang ditanamkan dalam kode.
