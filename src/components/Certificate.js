import React, { useState } from "react";
import { motion } from "framer-motion";

const Certificate = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const certificates = [
    {
      id: 1,
      imageSrc: "/image/bnspweb.webp",
      alt: "Sertifikat BNSP - Computer Software Programing",
      title: "Certificate Computer Software Programing",
      issuer: "Badan Nasional Sertifikasi Profesi",
      year: "2024",
    },
    {
      id: 2,
      imageSrc: "/image/bnspjaringan.webp",
      alt: "Sertifikat BNSP - Telecommunications with Cable",
      title: "Certificate Telecommunications with Cable",
      issuer: "Badan Nasional Sertifikasi Profesi",
      year: "2021",
    },
    {
      id: 3,
      imageSrc: "/image/suk.webp",
      alt: "Sertifikat Uji Kompetensi - Simple Networking Installation",
      title: "Certificate Simple Networking Installation",
      issuer: "Sertifikat Uji Kompetensi",
      year: "2022",
    },
    {
      id: 4,
      imageSrc: "/image/mtcna.webp",
      alt: "Sertifikat MikroTik Certified Network Associate (MTCNA)",
      title: "Certificate MikroTik Certified Network Associate (MTCNA)",
      issuer: "Mikrotik",
      year: "2024",
    },
    {
      id: 5,
      imageSrc: "/image/pklsysco.webp",
      alt: "Sertifikat Magang PT Somawi Surya Semesta",
      title: "Certificate Internship PT Somawi Surya Semesta",
      issuer: "PT Somawi Surya Semesta",
      year: "2024",
    },
    {
      id: 6,
      imageSrc: "/image/pkldafindo.webp",
      alt: "Sertifikat Praktek Kerja Lapangan Dafindo Komputer",
      title: "Certificate Industrial Practice Dafindo Computer",
      issuer: "Dafindo Computer",
      year: "2021",
    },
    {
      id: 7,
      imageSrc: "/image/toeic.webp",
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
        {/* Judul */}
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

        {/* Grid Sertifikat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const isFlipped = flippedCard === cert.id;

            return (
              <div
                key={cert.id}
                className="relative"
                style={{ perspective: "1000px" }}
              >
                {/* Flip Container */}
                <motion.div
                  className="relative w-full"
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                  }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                >
                  {/* === DEPAN CARD (SAMA PERSIS SEPERTI ASLINYA) === */}
                  <motion.div
                    className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={cert.imageSrc}
                        alt={cert.alt}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-navy-800 group-hover:text-navy-600 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-navy-600 font-medium">{cert.issuer}</p>
                      <p className="text-navy-500 text-sm">{cert.year}</p>

                      {/* Tombol Cek Sertifikat */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFlippedCard(cert.id);
                        }}
                        className="mt-4 w-full bg-navy-700 hover:bg-navy-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
                      >
                        Cek Sertifikat
                      </button>
                    </div>
                  </motion.div>

                  {/* === BELAKANG CARD: Hanya Gambar Asli === */}
                  <div
                    className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden backface-hidden flex items-center justify-center p-4"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Tombol Kembali */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFlippedCard(null);
                      }}
                      className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl z-10 shadow-md"
                    >
                      x
                    </button>

                    {/* Gambar Asli: object-contain, tidak zoom, tetap di dalam card */}
                    <img
                      src={cert.imageSrc}
                      alt={cert.alt}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS untuk Flip 3D */}
      <style jsx>{`
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Certificate;