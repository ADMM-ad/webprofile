import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * About Component untuk menjelaskan tentang saya, riwayat pendidikan, dan pengalaman kerja
 */
const About = () => {
  // Data pendidikan dengan logo
  const education = [
    {
      id: 1,
      logoSrc: "/image/alhuda.png",
      alt: "SMK Alhuda Kota Kediri",
      school: "SMK Alhuda Kota Kediri",
      major: "Teknik Komputer dan Jaringan",
      year: "2019 - 2022",
    },
    {
      id: 2,
      logoSrc: "/image/polinema.png",
      alt: "Politeknik Negeri Malang",
      school: "Politeknik Negeri Malang",
      major: "Manajemen Informatika",
      year: "2022 - 2025",
    },
  ];

  // Data pengalaman kerja dengan logo
  const workExperience = [
    {
      id: 1,
      logoSrc: "/image/sdmlogo.webp",
      alt: "Sukses Digital Media",
      company: "Sukses Digital Media",
      position: "Web Developer",
      year: "16 Juni 2025 - 10 Oktober 2025",
    },
    {
      id: 2,
      logoSrc: "/image/ourweblogo.jpg",
      alt: "Ourweb",
      company: "Our Digital Creative",
      position: "Web Developer",
      year: "Januari 2025 - April 2025",
    },
    {
      id: 3,
      logoSrc: "/image/syscologo.webp",
      alt: "Sysco Fire",
      company: "PT Somawi Surya Semesta",
      position: "Web Developer dan Digital Marketer",
      year: "24 Juni 2024 - 24 September 2024",
    },
    {
      id: 4,
      logoSrc: "/image/dafindologo.png",
      alt: "Dafindo Computer",
      company: "Dafindo Computer",
      position: "PKL Teknisi Komputer",
      year: "18 Januari 2021 - 30 April 2021",
    },
  ];

  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2); // Karena duplikat, lebar original adalah setengah dari total
    }
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen py-8 lg:py-8 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Konten Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Deskripsi Diri (Who I Am) - Ukuran disesuaikan untuk seimbang dengan kolom kanan */}
          {/* Deskripsi Diri (Who I Am) - Diperbaiki */}
<motion.div
  className="space-y-6 text-center lg:text-left pl-6 lg:pl-12 bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl p-8 border border-navy-100 h-full flex flex-col justify-between"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  <div>
    <h3 className="text-2xl lg:text-3xl font-bold text-navy-700 mb-6">
  Who I Am
</h3>

<div className="space-y-4 text-justify">
  <p className="text-navy-600 text-md leading-relaxed">
    Saya adalah individu yang sangat antusias di dunia teknologi informasi, 
    berasal dari Kediri, dan saat ini berusia 21 tahun. Kecintaan saya pada IT 
    sudah dimulai sejak jenjang SMK, di mana saya 
    mendalami berbagai keterampilan dasar seperti konfigurasi jaringan, perakitan 
    dan perbaikan komputer, 
    serta pengenalan awal terhadap konsep Internet of Things.
  </p>

  <p className="text-navy-600 text-md leading-relaxed">
    Pendidikan saya berlanjut ke jenjang D3 Manajemen Informatika di Politeknik 
    Negeri Malang, yang berhasil saya selesaikan dengan IPK 3,67. Selama masa kuliah, 
    saya mengalihkan fokus dan secara intensif mempelajari pengembangan perangkat lunak, 
    khususnya pengembangan website dan aplikasi mobile, serta manajemen basis data. 
    Saya memiliki portofolio yang kuat, termasuk tiga proyek pengembangan website nyata 
    dan berbagai proyek kuliah di bidang web dan mobile.
  </p>

  <p className="text-navy-600 text-md leading-relaxed">
    Pengalaman praktis saya semakin terasah melalui magang dan pengalaman kerja 
    sebagai Web Developer. Di sana, saya tidak hanya memperdalam keterampilan teknis tetapi juga mengembangkan 
    pemahaman di bidang Digital Marketing.
  </p>
</div>
  </div>
 
  
  
</motion.div>

          {/* Kolom Kanan: Education di atas, Work Experience di bawah */}
          <div className="space-y-8">
            {/* Riwayat Pendidikan */}
            <motion.div
              className="space-y-6 pl-12 lg:pl-16 pr-6 lg:pr-12 bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl p-8 border border-navy-100"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-navy-700 text-center lg:text-left">
                Education
              </h3>
              <div className="relative pl-4 lg:pl-6">
                {/* Garis Vertikal Tunggal */}
                <div className="absolute left-4 lg:left-6 top-0 w-0.5 bg-navy-600 h-[calc(100%-3rem)] last:h-0" />
                {education.map((edu) => (
                  <div key={edu.id} className="relative mb-12 last:mb-0">
                    <div className="absolute left-0 -ml-8 lg:-ml-10">
                      <motion.div
                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white border-2 border-navy-600 shadow-lg overflow-hidden z-10"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img
                          src={edu.logoSrc}
                          alt={edu.alt}
                          className="w-full h-full object-contain p-2"
                        />
                      </motion.div>
                    </div>
                    <div className="pl-12 lg:pl-16">
                      <h4 className="text-xl font-semibold text-navy-800">
                        {edu.school}
                      </h4>
                      <p className="text-navy-600 font-medium">{edu.major}</p>
                      <p className="text-navy-500 text-sm">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pengalaman Kerja - Card mirip education, dengan ukuran sama, isi horizontal scroll dengan auto-slide pelan dan drag manual */}
            <motion.div
              className="space-y-6 pl-12 lg:pl-2 pr-6 lg:pr-2 bg-white/70 backdrop-blur-sm shadow-lg rounded-2xl p-8 border border-navy-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h3 className="text-2xl lg:pl-12 pr-6 lg:pr-12 lg:text-3xl font-bold text-navy-700 text-center lg:text-left">
                Work Experience
              </h3>
              <div className="overflow-hidden">
                <motion.div
                  ref={containerRef}
                  className="flex space-x-4"
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  initial={{ x: 0 }}
                  animate={{ x: [0, -width] }} // Auto-slide pelan dari 0 ke -width (lebar original)
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: workExperience.length * 5, // Durasi berdasarkan jumlah item, misal 5 detik per item
                    ease: "linear",
                  }}
                >
                  {/* Duplikat item untuk seamless loop */}
                  {[...workExperience, ...workExperience].map((work, index) => (
                    <div
                      key={`${work.id}-${index}`}
                      className="flex-shrink-0 w-64 p-2 text-center"
                    >
                      <div className="mb-4">
                        <img
                          src={work.logoSrc}
                          alt={work.alt}
                          className="w-16 h-16 mx-auto rounded-full object-contain border-2 border-navy-600"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-navy-800">
                        {work.company}
                      </h4>
                      <p className="text-navy-600 font-medium text-sm">
                        {work.position}
                      </p>
                      <p className="text-navy-500 text-xs">{work.year}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;