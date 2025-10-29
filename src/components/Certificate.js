import React from "react";
import { motion } from "framer-motion";

/**
 * Certificate Component untuk menampilkan sertifikat dengan gambar dan penjelasan
 */
const Certificate = () => {
  // Data sertifikat (contoh, sesuaikan dengan sertifikat Anda)
  const certificates = [
    {
      id: 1,
      imageSrc: "/image/sertifsmk1.jpg",
      alt: "Sertifikat BNSP - Computer Software Programing",
      title: "Certificate Computer Software Programing",
      issuer: "Badan Nasional Sertifikasi Profesi",
      year: "2024",
    },
    {
      id: 2,
      imageSrc: "/image/pkldafindo.webp",
      alt: "Sertifikat BNSP - Telecommunications with Cable",
      title: "Certificate Telecommunications with Cable",
      issuer: "Badan Nasional Sertifikasi Profesi",
      year: "2021",
      
    },
    {
      id: 3,
      imageSrc: "/image/certificate3.png",
      alt: "Sertifikat Uji Kompetensi - Simple Networking Installation",
      title: "Certificate Simple Networking Installation",
      issuer: "Sertifikat Uji Kompetensi",
      year: "2022",
      
    },
    {
      id: 4,
      imageSrc: "/image/certificate3.png",
      alt: "Sertifikat MikroTik Certified NetworkAssociate (MTCNA) ",
      title: "Certificate MikroTik Certified Network Associate (MTCNA) ",
      issuer: "Mikrotik",
      year: "2024",
      
    },
    {
      id: 5,
      imageSrc: "/image/certificate3.png",
      alt: "Sertifikat Magang PT Somawi Surya Semesta",
      title: "Certificate Internship PT Somawi Surya Semesta",
      issuer: "PT Somawi Surya Semesta",
      year: "2024",
      
    },
    {
      id: 6,
      imageSrc: "/image/certificate3.png",
      alt: "Sertifikat Praktek Kerja Lapangan Dafindo Komputer",
      title: "Certificate Industrial Practice Dafindo Computer",
      issuer: "Dafindo Computer",
      year: "2021",
      
    },
    {
      id: 7,
      imageSrc: "/image/certificate3.png",
      alt: "Sertifikat Test of English for International Communication",
      title: "Certificate Test of English for International Communication",
      issuer: "International Test Center",
      year: "2025",
      
    },
  ];

  return (
    <section
      id="certificate"
      className="min-h-screen py-12 lg:py-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Judul Seksi */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-800">
            My Certificates
          </h2>
          <p className="text-navy-600 text-lg mt-2">
            Sertifikat yang menguatkan kualifikasi dan keahlian daya di bidang teknologi informasi
          </p>
        </motion.div>

        {/* Daftar Sertifikat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              {/* Container gambar dengan overflow hidden */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={cert.imageSrc}
                  alt={cert.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Overlay effect pada hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 ease-in-out" />
              </div>

              {/* Deskripsi Sertifikat */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy-800 group-hover:text-navy-600 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-navy-600 font-medium">{cert.issuer}</p>
                <p className="text-navy-500 text-sm">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;