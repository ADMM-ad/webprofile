import React, { useState } from 'react';

/**
 * Projects Component
 * Menampilkan portfolio project yang telah dikerjakan
 */
const Projects = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  /**
   * Data project portfolio
   * Ganti dengan project Anda yang sebenarnya
   */
  const projects = [
    {
      id: 1,
      title: "Website Point of Sale Sukses Digital Media",
      
      detailedDescription: `Sistem Point of Sale (POS) yang komprehensif yang dirancang khusus untuk Sukses Digital Media dengan fitur utama:
      
• Multi-Role System: Mendukung peran Admin, Customer Service, dan Editor dengan hak akses terpisah.
• Multi-Business Management: Mengelola hingga tiga jenis bisnis berbeda dalam satu sistem.
• Manajemen Karyawan: Pengaturan data dan peran karyawan secara terstruktur.
• Manajemen Produk: Pengelolaan produk dan jenis produk untuk setiap lini bisnis.
• Manajemen Jobdesk Editor: Monitoring dan penugasan pekerjaan editor secara efisien.
• Manajemen Lead : Pengelolaan jumlah lead setiap customer service.
• Integrasi API Mengantar: Otomatisasi pengecekan ongkir dan kode pos untuk efisiensi operasional.
• Laporan Keuangan Terperinci :  Berdasarkan rentang waktu dan jenis bisnis.
• Laporan Penjualan per Customer Service: Analisis performa individu dan kontribusi penjualan.
• Manajemen Iklan & Kampanye: Pengaturan dan evaluasi efektivitas kampanye promosi.
• Import & Export Data Penjualan: Kemudahan ekspor laporan dan impor data.
• Desain Responsif: Antarmuka yang menyesuaikan berbagai ukuran layar (desktop, tablet, dan mobile) untuk pengalaman pengguna yang optimal.
`,
      image: "/image/possdm.webp",
      technologies: ["Laravel 12", "Mysql", "Bootstrap", "API Mengantar"],
      featured: true
    },
    {
      id: 2,
      title: "Website Manajemen Kinerja Karyawan Ourweb",
    
      detailedDescription: `Sistem Manajemen Kinerja Karyawan yang dirancang untuk membantu perusahaan Our Digital Creative dalam menilai dan memantau produktivitas karyawan melalui pendekatan Key Performance Indicators (KPI) dengan fitur utama:
      
• Multi-Role System: Mendukung tiga level peran yaitu Pimpinan, Team Leader, dan Karyawan dengan hak akses yang disesuaikan. 
• Absensi Terintegrasi: Validasi kehadiran menggunakan lokasi, alamat IP, dan waktu.  
• Perizinan Karyawan: Pengajuan cuti tahunan, izin atau sakit  secara digital dengan proses persetujuan.   
• Manajemen Tugas: Penugasan, pelacakan progres, dan evaluasi hasil kerja berbasis sistem.  
• Penilaian Kinerja Berbasis KPI: Pengukuran performa menggunakan indikator terukur dan objektif.  
• Pengaturan Jaringan Absensi: Pembatasan area dan perangkat absensi untuk menjaga validitas data kehadiran.  
• Pelaporan Kinerja & Kehadiran: Rekap dan analisis data karyawan untuk mendukung pengambilan keputusan strategis.  
• Desain Responsif: Antarmuka yang menyesuaikan berbagai ukuran layar (desktop, tablet, dan mobile) untuk pengalaman pengguna yang optimal.
`,
      image: "/image/mkkourweb.webp",
      technologies: ["Laravel 12", "Mysql", "Bootstrap", "Track Location and IP Address Public"],
      featured: false
    },
    {
      id: 3,
      title: "Website SubPage Sysco Fire",
     
      detailedDescription: `Website informatif yang menampilkan produk apar foam dari Sysco Fire, 
dirancang untuk memberikan penjelasan lengkap mengenai pengertian, fungsi, 
dan keunggulan produk. Website ini bertujuan membantu pengunjung memahami 
pentingnya alat pemadam kebakaran berbasis foam serta mengenal kualitas dan 
teknologi yang ditawarkan oleh Sysco Fire.`,
      image: "image/spsysco.webp",
      technologies: ["WordPress"],
      featured: false
    },
    {
      id: 4,
      title: "Website Cek Status Pengiriman dan Point Of Sale Sysco Fire",
  
      detailedDescription: `Website Sysco Fire yang menggabungkan sistem cek status pengiriman dan Point of Sale (POS) dalam satu platform dengan fitur utama:
      
Fitur Utama:
• Dua level akses yaitu Admin dan Driver dengan hak dan fungsi berbeda.
• Cek status pengiriman dari berbagai ekspedisi menggunakan nomor resi atau nomor customer.
• Manajemen karyawan dengan pengaturan data dan peran.
• Manajemen customer untuk pencatatan dan pemantauan data pelanggan.
• Manajemen produk.
• Manajemen transaksi untuk pencatatan penjualan dan laporan keuangan.
• Pengelolaan status pengiriman khusus untuk driver agar proses distribusi lebih terpantau.`,
      image: "image/possysco.webp",
      technologies: ["Laravel 10", "Mysql", "Bootstrap","API Cek Resi"],
      featured: false
    },
    {
      id: 5,
      title: "Website Profile Pribadi",
     
      detailedDescription: `Website profil pribadi yang dibuat menggunakan React dan Tailwind CSS. Menampilkan informasi tentang pengalaman, sertifikat, dan project yang pernah dikerjakan dengan tampilan modern, responsif, dan mudah diakses di berbagai perangkat.`,
      image: "image/webprofile.webp",
      technologies: ["React","Tailwind CSS"],
      featured: false
    },
  ];

  const handleDetailClick = (projectId, e) => {
    e.preventDefault();
    setFlippedCard(flippedCard === projectId ? null : projectId);
  };

  const handleCloseDetail = (e) => {
    e.stopPropagation();
    setFlippedCard(null);
  };

  return (
    <section id="projects" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-800 mb-4">
            Real Projects 
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Koleksi project nyata yang telah saya kembangkan dengan menampilkan pengalaman 
    langsung dalam membangun website modern, responsif, dan berfokus pada hasil. 
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`project-card relative h-96 [perspective:1000px] cursor-pointer ${
                flippedCard === project.id ? 'z-10' : ''
              }`}
              onClick={() => setFlippedCard(flippedCard === project.id ? null : project.id)}
            >
              {/* Card Container dengan Flip Animation */}
              <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                flippedCard === project.id ? '[transform:rotateY(180deg)]' : ''
              }`}>
                
                {/* Front of Card */}
                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] ${
                  flippedCard === project.id ? 'opacity-0' : 'opacity-100'
                } transition-opacity duration-300`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative overflow-hidden flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            New
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-navy-800 mb-3 group-hover:text-navy-600 transition-colors">
                        {project.title}
                      </h3>
                    

                      {/* Detail Button */}
                      <button
                        onClick={(e) => handleDetailClick(project.id, e)}
                        className="w-full bg-navy-700 text-white text-center py-2 rounded-lg font-medium hover:bg-navy-800 transition-colors duration-200 mt-auto"
                      >
                        Detail Project
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back of Card - Detail View */}
                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-2xl shadow-2xl overflow-hidden ${
                  flippedCard === project.id ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}>
                  <div className="p-6 h-full flex flex-col">
                    
                    
                    {/* Detail Content */}
                    <div className="flex-grow overflow-y-auto">
                      <h3 className="text-2xl font-bold text-navy-800 mb-4 pr-8">
                        {project.title}
                      </h3>
                      
                      <div className="prose prose-gray max-w-none">
                        <pre className="whitespace-pre-wrap font-sans text-gray-700 text-sm leading-relaxed text-justify">
                          {project.detailedDescription}
                        </pre>
                      </div>

                      {/* Technologies in Detail */}
                      <div className="mt-6">
                       
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="bg-navy-100 text-navy-700 px-3 py-2 rounded-lg text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Back to Front Button */}
                    <button
                      onClick={handleCloseDetail}
                      className="w-full mt-4 border-2 border-navy-700 text-navy-700 text-center py-3 rounded-lg font-medium hover:bg-navy-700 hover:text-white transition-all duration-300"
                    >
                      Kembali ke Overview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Tertarik melihat lebih banyak project?
          </p>
          <a
            href="https://github.com/ADMM-ad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-navy-700 text-navy-700 rounded-lg font-medium hover:bg-navy-700 hover:text-white transition-all duration-300"
          >
            Visit My GitHub
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;