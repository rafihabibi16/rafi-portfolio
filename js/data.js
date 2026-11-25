/*
 * DATA PORTFOLIO — Rafi Ahmad Habibi
 * Edit konten di sini tanpa mengubah HTML/CSS.
 * Gunakan null untuk tautan, tanggal, atau gambar yang belum tersedia.
 * Untuk proyek baru, cukup salin satu objek pada daftar projects.
 */
window.portfolioData = {
  profile: {
    name: 'Rafi Ahmad Habibi',
    shortName: 'Rafi Habibi',
    initials: 'RA',
    headline: 'Mahasiswa Mekatronika dan Kecerdasan Buatan | Aspiring AI Engineer',
    location: 'Jakarta Timur, Indonesia',
    email: 'rafihabibie16@gmail.com',
    openToInternship: true,
    tagline: 'Saya mengeksplorasi machine learning, data, dan pengembangan perangkat lunak untuk menciptakan solusi yang praktis dan bermanfaat.',
    bio: [
      'Saya adalah Rafi Ahmad Habibi, mahasiswa S1 Mekatronika dan Kecerdasan Buatan di Universitas Pendidikan Indonesia.',
      'Saya tertarik pada Artificial Intelligence, Machine Learning, Data Science, dan Data Analytics. Saya senang mempelajari hal baru, berpikir analitis, serta membangun solusi berbasis teknologi lewat proyek akademik.',
      'Melalui magang, saya ingin meningkatkan keterampilan teknis dan profesional, mendapatkan pengalaman kerja nyata, dan berkontribusi menyelesaikan permasalahan di lingkungan industri.'
    ],
    photo: 'assets/images/rafi-profile.webp', // Ganti path jika ingin memakai foto lain
    cvFile: 'assets/cv/CV_Rafi_Ahmad_Habibi_Data Scientist.pdf', // Contoh: 'assets/cv/rafi-ahmad-habibi-cv.pdf'
    socialLinks: {
      github: 'https://github.com/rafihabibi16',
      linkedin: 'https://www.linkedin.com/in/rafi-ahmad-habibi-b07383313/'
    }
  },

  skillCategories: [
    {
      title: 'Programming', icon: '</>',
      description: 'Bahasa pemrograman untuk pengolahan data dan pengembangan aplikasi.',
      skills: ['Python', 'C++']
    },
    {
      title: 'Machine Learning & Vision', icon: '✳',
      description: 'Pemodelan data dan pemrosesan informasi visual.',
      skills: ['Machine Learning', 'Computer Vision', 'Image Processing', 'OpenCV']
    },
    {
      title: 'Data & Analytics', icon: '▥',
      description: 'Menyiapkan dan menganalisis data untuk mendapatkan insight.',
      skills: ['Data Analysis', 'Data Preprocessing']
    },
    {
      title: 'Project & System Analysis', icon: '⌘',
      description: 'Koordinasi pekerjaan tim dan analisis kebutuhan dalam proyek kolaborasi industri.',
      skills: ['Requirement Gathering', 'System Planning', 'Stakeholder Communication', 'Project Coordination']
    },
    {
      title: 'Professional Skills', icon: '↗',
      description: 'Kebiasaan kerja yang terus saya kembangkan.',
      skills: ['Problem Solving', 'Analytical Thinking']
    }
  ],

  projects: [
    {
      id: 'agavi-food-safety',
      title: 'Food Safety Consultation Platform',
      subtitle: 'Industry Collaboration · Universitas Pendidikan Indonesia × AGAVI',
      category: 'Web Platform · Business & System Analysis',
      status: 'In Progress · Prototype',
      projectType: 'Industry Collaboration',
      teamSize: 4,
      year: '2026 — Present',
      role: 'Project Leader · Business & System Analysis',
      description: 'Memimpin pengembangan prototipe platform konsultasi keamanan pangan berbasis web bersama tim 4 orang melalui kolaborasi Universitas Pendidikan Indonesia dan PT Agritama Sinergi Inovasi (AGAVI). Prototipe dirancang untuk mendukung alur Gap Analysis, dokumen bukti, review konsultan, dan monitoring progres pendampingan. Saat ini masih dalam tahap pengembangan.',
      contributions: [
        'Project leadership: memimpin dan mengoordinasikan tim beranggotakan 4 orang.',
        'Stakeholder communication: menghubungkan tim, dosen pembimbing, dan pihak AGAVI.',
        'Requirement gathering: mengidentifikasi kebutuhan dan alur bisnis konsultasi keamanan pangan.',
        'System planning: mengarahkan perencanaan fitur dan kebutuhan sistem.',
        'Project management: membagi tugas, menyusun timeline, dan memantau kemajuan pekerjaan.',
        'Partnership administration: mengoordinasikan administrasi kerja sama, termasuk PKS dan IA.'
      ],
      highlights: [
        'Rancangan platform dengan tiga peran pengguna: Admin, Consultant, dan Client.',
        'Admin: rancangan pengelolaan perusahaan, pengguna, Gap Analysis, proyek, persetujuan, dan laporan.',
        'Consultant: rancangan review bukti, penugasan Gap Analysis, prioritas pekerjaan, dan pendampingan.',
        'Client: rancangan checklist Gap Analysis, unggah bukti, tugas revisi, dan pemantauan progres.',
        'Screenshot menunjukkan prototipe dengan data dummy, bukan sistem produksi atau hasil implementasi di AGAVI.'
      ],
      // Stack pemrograman belum dikonfirmasi. Ini adalah metode/area pekerjaan yang diketahui.
      stackLabel: 'Methods & Focus',
      technologies: ['Requirement Gathering', 'System Analysis', 'Project Coordination', 'Web Prototype'],
      github: null,
      demo: null,
      image: 'assets/images/agavi-admin.webp',
      imageAlt: 'Tampilan prototipe dashboard Admin AGAVI dengan metrik dan aktivitas proyek',
      gallery: [
        { src: 'assets/images/agavi-admin.webp', caption: '01 / Admin — Dashboard perusahaan, Gap Analysis, proyek, dan aktivitas terbaru' },
        { src: 'assets/images/agavi-konsultan.webp', caption: '02 / Consultant — Pekerjaan prioritas, review bukti, dan penjadwalan kunjungan' },
        { src: 'assets/images/agavi-client.webp', caption: '03 / Client — Checklist, revisi dokumen, dan pemantauan progres pendampingan' }
      ],
      theme: 'green'
    },
    {
      id: 'segmentasi-umkm',
      // Peran dan kontribusi pribadi: tulis hanya yang BENAR-BENAR kamu lakukan.
      // Contoh jika benar kamu kerjakan: preprocessing data transaksi, analisis RFM, eksperimen K-Means, atau dashboard Streamlit.
      role: "Machine Learning & Data Analytics", // Contoh nanti: 'Pengembangan aplikasi dan analisis data'
      contributions: ["Melakukan pemeriksaan dan preprocessing dataset pelanggan untuk mempersiapkan data sebelum proses segmentasi.",

            "Menerapkan pendekatan Recency, Frequency, dan Monetary (RFM) untuk menganalisis karakteristik perilaku pembelian pelanggan.",

             "Mengembangkan proses segmentasi pelanggan menggunakan algoritma K-Means Clustering untuk mengelompokkan pelanggan berdasarkan karakteristik RFM.",

            "Mengembangkan dashboard interaktif menggunakan Streamlit untuk menampilkan profil, distribusi, dan karakteristik setiap segmen pelanggan.",

            "Mengimplementasikan fitur prediksi segmen berdasarkan input data RFM serta rekomendasi strategi promosi berbasis aturan bisnis.",

            "Menyediakan fitur ekspor hasil prediksi dalam format CSV untuk memudahkan pengguna mengakses hasil analisis."], // Contoh: ['Saya mengerjakan ...', 'Saya menguji ...']
      title: 'Segmentasi Pelanggan UMKM',
      subtitle: 'RFM & K-Means Clustering',
      category: 'Machine Learning · Data Analytics',
      description: 'Aplikasi Streamlit untuk membantu pemilik bakery dan coffee shop memahami pola pembelian pelanggan, mengeksplorasi empat segmen RFM, dan mendapatkan usulan promosi berdasarkan karakteristik masing-masing segmen.',
      highlights: [
        'Dashboard profil dan distribusi segmen pelanggan.',
        'Prediksi cluster menggunakan fitur Recency, Frequency, dan Monetary.',
        'Rekomendasi promosi berbasis aturan bisnis, serta unduhan CSV.',
        'Prototipe menggunakan dataset sintetis; rekomendasi belum diuji sebagai peningkatan penjualan.'
      ],
      technologies: ['Python', 'K-Means', 'RFM', 'Streamlit'],
      github: 'https://github.com/rafihabibi16/segmentasi-pelanggan-umkm',
      demo: null,
      image: 'assets/images/segmentasi-umkm.webp',
      imageAlt: 'Overview segmentasi pelanggan berisi statistik jumlah pelanggan dan segmen',
      gallery: [
        { src: 'assets/images/segmentasi-umkm.webp', caption: 'Overview dan ringkasan segmentasi pelanggan' },
        { src: 'assets/images/segmentasi-detail.webp', caption: 'Profil segmen Pelanggan Kurang Aktif dan rekomendasi promosi' },
        { src: 'assets/images/segmentasi-ringkasan.webp', caption: 'Ringkasan empat segmen pelanggan dari aplikasi' }
      ],
      year: null,
      theme: 'blue'
    },
    {
      id: 'machine-condition',
      // Peran dan kontribusi pribadi: tulis hanya yang BENAR-BENAR kamu lakukan.
      // Contoh jika benar kamu kerjakan: pengecekan data, preprocessing, eksperimen model, evaluasi, atau demo Streamlit.
      role: "Machine Learning Development", // Contoh nanti: 'Pengembangan aplikasi dan analisis data'
      contributions: ["Melakukan pemeriksaan kualitas data dan preprocessing terhadap fitur operasional mesin sebelum proses pemodelan.",

        "Melakukan eksperimen model machine learning untuk mengklasifikasikan kondisi mesin berdasarkan karakteristik operasional.",

        "Melakukan evaluasi model klasifikasi untuk menilai kemampuan model dalam membedakan kondisi mesin.",

        "Mengembangkan aplikasi demo menggunakan Streamlit untuk menerima input fitur operasional dan menampilkan hasil klasifikasi.",

        "Mengintegrasikan pipeline preprocessing dan model machine learning ke dalam alur prediksi aplikasi.",

        "Melakukan pengujian terhadap input dan hasil prediksi untuk memastikan aplikasi menjalankan proses klasifikasi sesuai rancangan."], // Contoh: ['Saya mengerjakan ...', 'Saya menguji ...']
      title: 'Machine Condition Classification',
      subtitle: 'Operational Data Classification',
      category: 'Machine Learning · Streamlit',
      description: 'Proyek pembelajaran klasifikasi kondisi mesin berdasarkan fitur operasional. Alur kerja mencakup pemeriksaan kualitas data, preprocessing, eksperimen model, evaluasi, hingga pembuatan aplikasi demo Streamlit.',
      highlights: [
        'Input fitur operasional seperti suhu, kecepatan putaran, torsi, dan keausan alat.',
        'Hasil prediksi kelas kondisi mesin melalui antarmuka Streamlit.',
        'Model mengklasifikasikan sampel, bukan memprediksi waktu kerusakan atau sisa umur mesin.'
      ],
      technologies: ['Python', 'Machine Learning', 'Preprocessing', 'Streamlit'],
      github: 'https://github.com/rafihabibi16/machine-condition-classification',
      demo: null,
      image: 'assets/images/machine-condition.webp',
      imageAlt: 'Aplikasi Machine Condition Classification menampilkan form dan hasil prediksi normal',
      gallery: [
        { src: 'assets/images/machine-condition.webp', caption: 'Form fitur operasional dan hasil klasifikasi kondisi mesin' }
      ],
      year: null,
      theme: 'dark'
    },
    {
      id: 'ternax',
      // Peran dan kontribusi pribadi: tulis hanya yang BENAR-BENAR kamu lakukan.
      // Contoh jika benar kamu kerjakan: tampilan JavaFX, integrasi MySQL, dashboard, atau fitur stok dan penjualan.
      role: "Desktop Application Development", // Contoh nanti: 'Pengembangan aplikasi dan analisis data'
      contributions: ["Berkontribusi dalam pengembangan aplikasi desktop manajemen peternakan menggunakan Java dan JavaFX.",

  "Terlibat dalam perancangan dan implementasi antarmuka pengguna untuk mendukung pengelolaan aktivitas operasional peternakan.",

  "Berkontribusi dalam pengembangan fitur pengelolaan data ternak, stok pakan, hasil produksi, dan penjualan.",

  "Mendukung pengelolaan data aplikasi menggunakan database MySQL.",

  "Terlibat dalam pengembangan dashboard monitoring yang menampilkan informasi produksi, omzet, stok, dan kondisi kesehatan ternak.",

  "Membantu pengujian fungsionalitas aplikasi untuk mengidentifikasi dan memperbaiki kendala pada fitur yang dikembangkan."], // Contoh: ['Saya mengerjakan ...', 'Saya menguji ...']
      title: 'TernaX',
      subtitle: 'Livestock Management & Monitoring System',
      category: 'Desktop Application · JavaFX',
      description: 'Aplikasi desktop manajemen peternakan dengan JavaFX dan MySQL, mencakup data ternak, stok pakan, hasil produksi, quality control, penjualan, dan dashboard monitoring.',
      highlights: [
        'Pencatatan produksi ternak, stok, dan hasil peternakan.',
        'Dashboard grafik produksi, omzet, stok, dan kondisi kesehatan ternak.',
        'Pengelolaan pengguna dengan role-based access.'
      ],
      technologies: ['Java', 'JavaFX', 'MySQL'],
      github: null,
      demo: null,
      image: 'assets/images/ternax.webp',
      imageAlt: 'Dashboard TernaX dengan grafik produksi, omzet, stok, dan kondisi ternak',
      gallery: [
        { src: 'assets/images/ternax.webp', caption: 'Dashboard monitoring dan analitik TernaX' },
        { src: 'assets/images/ternax-produksi.webp', caption: 'Tampilan pengelolaan data produk peternakan' }
      ],
      year: null,
      theme: 'green'
    },
    {
      id: 'running-led',
      // Peran dan kontribusi pribadi: tulis hanya yang BENAR-BENAR kamu lakukan.
      // Contoh jika benar kamu kerjakan: membuat skematik, merangkai komponen, soldering, troubleshooting, atau pengujian.
      role: "Electronics Prototyping & Circuit Development", // Contoh nanti: 'Pengembangan aplikasi dan analisis data'
      contributions: ["Berkontribusi dalam perancangan prototipe sistem petunjuk arah jalan menggunakan rangkaian Running LED.",

  "Terlibat dalam penyusunan diagram skematik dan perencanaan susunan komponen elektronika.",

  "Melakukan perakitan rangkaian, electrical wiring, dan soldering komponen pada prototipe.",

  "Berpartisipasi dalam proses troubleshooting untuk mengatasi kendala seperti kerusakan IC, hubungan singkat LED, dan ketidakstabilan catu daya.",

  "Melakukan pengujian fungsi rangkaian untuk memastikan indikator LED dapat menampilkan arah sesuai rancangan.",

  "Berkontribusi dalam penyelesaian dan demonstrasi prototipe pada miniatur lintasan jalan."], // Contoh: ['Saya mengerjakan ...', 'Saya menguji ...']
      title: 'Running LED untuk Petunjuk Arah Jalan',
      subtitle: 'Mechatronics Prototype',
      category: 'Electronics · Mechatronics',
      description: 'Prototipe indikator petunjuk arah berbasis running LED pada miniatur lintasan jalan. Proyek melibatkan perancangan skematik, perakitan, wiring, soldering, dan troubleshooting rangkaian.',
      highlights: [
        'Perancangan dan perakitan rangkaian LED pada miniatur jalan.',
        'Troubleshooting komponen, hubungan singkat, dan masalah catu daya.',
        'Prototipe fisik selesai dirakit dan diuji.'
      ],
      technologies: ['Electronics', 'Circuit Design', 'Wiring', 'Soldering'],
      github: null,
      demo: null,
      image: 'assets/images/running-led.webp',
      imageAlt: 'Foto prototipe running LED pada miniatur lintasan jalan dengan sumber daya',
      gallery: [
        { src: 'assets/images/running-led.webp', caption: 'Foto asli prototipe running LED petunjuk arah jalan' }
      ],
      
      year: null,
      theme: 'amber',
      portrait: true
    },

    // =====================================
    // PROJECT 5 — POTS
    // =====================================
    {
      id: 'pots',

      role: 'Electrical Wiring & ESP32 Programming',

      contributions: [
        'Bertanggung jawab dalam electrical wiring dan integrasi komponen elektronika pada prototipe POTS.',
        'Melakukan pengkabelan dan integrasi ESP32 dengan soil moisture sensor, DHT11, water level sensor, modul relay, dan mini water pump.',
        'Mengembangkan pemrograman ESP32 untuk pembacaan data sensor dan pengendalian aktuator penyiraman.',
        'Mendukung integrasi perangkat keras dan perangkat lunak pada sistem monitoring dan penyiraman tanaman.'
      ],

      title: 'POTS — Plant Oriented Thinking System',

      subtitle: 'Smart Plant Monitoring & Remote Watering System',

      category: 'Internet of Things · Embedded Systems',

      description: 'Plant Oriented Thinking System (POTS) merupakan sistem monitoring dan penyiraman tanaman berbasis Internet of Things (IoT). Sistem menggunakan ESP32 yang terintegrasi dengan berbagai sensor untuk memantau kondisi tanaman serta mendukung pengendalian penyiraman jarak jauh melalui Arduino Cloud. Proyek ini dikembangkan bersama tim Internet Thinking dan meraih Juara 2 dalam kompetisi IoT TechnoCorner.',

      highlights: [
        'Monitoring kelembapan tanah menggunakan soil moisture sensor.',
        'Pemantauan suhu dan kelembapan udara menggunakan DHT11.',
        'Monitoring ketinggian air menggunakan water level sensor.',
        'Pengendalian pompa air melalui modul relay.',
        'Monitoring data dan kontrol penyiraman melalui Arduino Cloud.',
        'Meraih Juara 2 kompetisi IoT TechnoCorner bersama tim Internet Thinking.'
      ],

      technologies: [
        'ESP32',
        'Arduino IDE',
        'Arduino Cloud',
        'Internet of Things',
        'Electrical Wiring',
        'Sensor Integration'
      ],

      github: null,
      demo: null,

      // Foto utama kartu proyek
      image: 'assets/images/POTS_Lampiran_Dokumentasi_3.png',

      imageAlt: 'Dokumentasi prototipe fisik POTS',

      // Galeri foto ketika kartu proyek diklik
      gallery: [
        {
          src: 'assets/images/POTS_Lampiran_Dokumentasi_3m,.png',
          caption: '01 / Dokumentasi Prototipe Fisik POTS'
        },
        {
          src: 'assets/images/pots-skematik-rangkaian.png',
          caption: '02 / Electrical Wiring & Circuit Schematic'
        },
        {
          src: 'assets/images/pots-diagram-blok.jpg',
          caption: '03 / System Block Diagram'
        },
        {
          src: 'assets/images/pots-dashboard-ui.png',
          caption: '04 / IoT Dashboard Interface'
        },
        {
          src: 'assets/images/pots-sketsa-alat.jpg',
          caption: '05 / Initial System Design'
        }
      ],

      year: '2025',
      theme: 'green'
    }
  ],

  // Publikasi dapat ditambah dengan menyalin satu objek baru.
  // Metadata berikut diverifikasi dari situs resmi Jurnal Media Elektro.
  publications: [
    {
      id: 'smart-alert-yolov8-2026',
      title: 'YOLOv8-Based Smart Alert System for Detecting Mahram Restrictions in Confined Spaces',
      originalTitle: 'Sistem Smart Alert Berbasis YOLOv8 untuk Deteksi Pelanggaran Batasan Mahram pada Ruang Terbatas',
      journal: 'Jurnal Media Elektro',
      volume: 'Vol. 15, No. 2',
      date: '14 Oktober 2026',
      pages: '68–76',
      year: 2026,
      authors: [
        'Muhammad Riyu Saputra',
        'Rafi Ahmad Habibi',
        'Yasir Ahmadin Moersyid',
        'Muhammad Ganesh Alifadito',
        "Yahya Rafi Sya'bani"
      ],
      description: 'Penelitian kolaboratif mengenai sistem smart alert berbasis YOLOv8 untuk mendeteksi keberadaan laki-laki pada ruang terbatas seperti asrama putri, lalu memberikan notifikasi real-time melalui Telegram Bot.',
      metrics: [
        { label: 'mAP@50', value: '0,840' },
        { label: 'Precision', value: '0,828' }
      ],
      topics: ['YOLOv8', 'Computer Vision', 'Object Detection', 'Telegram Bot'],
      articleUrl: 'https://ejurnal.undana.ac.id/index.php/jme/article/view/28590',
      pdfUrl: 'https://ejurnal.undana.ac.id/index.php/jme/article/download/28590/10685/',
      doiUrl: 'https://doi.org/10.35508/jme.v0i0.28590',
      doi: '10.35508/jme.v0i0.28590'
    }
  ],

  education: [
    {
      title: 'S1 Mekatronika dan Kecerdasan Buatan',
      place: 'Universitas Pendidikan Indonesia',
      period: '2024 — Sekarang',
      description: 'Mempelajari sistem mekatronika dan kecerdasan buatan, dengan minat khusus pada machine learning dan analisis data.',
      meta: 'IPK 3,78 / 4,00'
    }
  ],

  
  // ==========================================
  // LEADERSHIP, ACTIVITIES & ACHIEVEMENTS
  // ==========================================

  experiences: [

    // 1. Project Leader AGAVI
    {
      title: 'Project Leader — Food Safety Consultation Platform',
      place: 'Universitas Pendidikan Indonesia × PT AGAVI',
      period: '2026 — Present',

      description:
        'Memimpin tim beranggotakan 4 orang dalam proyek kolaborasi industri bersama PT Agritama Sinergi Inovasi (AGAVI). Bertanggung jawab dalam koordinasi tim, komunikasi stakeholder, requirement gathering, perencanaan sistem, pembagian tugas, dan monitoring perkembangan proyek.',

      meta: 'Leadership · Industry Collaboration'
    },

    // 2. KJMU Purwakarta Coordinator
    {
      title: 'KJMU Purwakarta Coordinator',
      place: 'KJMU Student Community — Purwakarta',
      period: '2025 - 2026',

      description:
        'Berperan sebagai koordinator komunitas penerima KJMU wilayah Purwakarta yang mencakup lebih dari 25 penerima. Mendukung koordinasi anggota, komunikasi internal, serta penyampaian informasi dan kebutuhan komunitas.',

      meta: 'Leadership · 25+ Recipients'
    },

    // 3. SLK Logistics Committee
    {
      title: 'Logistics Committee — SLK',
      place: 'Campus Legislative Seminar',

      period: '2025',

      description:
        'Berkontribusi sebagai anggota divisi logistik dalam kegiatan Seminar Legislatif Kampus (SLK) yang dihadiri lebih dari 100 peserta. Mendukung persiapan perlengkapan, kebutuhan teknis, dan koordinasi logistik untuk kelancaran kegiatan.',

      meta: 'Committee · 100+ Attendees'
    },

    // 4. Achievement — IoT TechnoCorner
    {
      title: '2nd Place — IoT TechnoCorner Competition',
      place: 'Internet Thinking Team · POTS',
      period: '2025',

      description:
        'Meraih Juara 2 bersama tim Internet Thinking melalui pengembangan Plant Oriented Thinking System (POTS), sistem monitoring dan penyiraman tanaman berbasis IoT. Berkontribusi dalam electrical wiring, integrasi komponen elektronika, serta pemrograman ESP32.',

      meta: 'Achievement · 2nd Place'
    }

  ],


  certifications: [
    { title: 'Overview of AI', issuer: 'HUAWEI ICE ACADEMY', year: null, credentialUrl: null },
    { title: 'Data Classification and Summarization Using IBM Granite', issuer: null, year: null, credentialUrl: null },
    { title: 'Classifying Data Using IBM Granite', issuer: null, year: null, credentialUrl: null }
  ]
};
