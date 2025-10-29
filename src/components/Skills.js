import React, { useState } from 'react';
import { 
  SiLaravel,
  SiAndroidstudio,
  SiFlutter,
  SiReact,
  SiMysql,
  SiCisco,
  SiCanva,
  SiFigma,
  SiAdobephotoshop,
  SiGoogleanalytics,
  SiVirtualbox 
} from 'react-icons/si';
import { 
  IoHardwareChipOutline,
  IoVideocamOutline
} from 'react-icons/io5';
import { 
  FaNetworkWired,
  FaTools,
  FaSearchDollar 
} from 'react-icons/fa';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = [
    {
      name: "Laravel",
      icon: <SiLaravel />,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      textColor: "text-red-600"
    },
    {
      name: "Android Studio",
      icon: <SiAndroidstudio />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      textColor: "text-green-600"
    },
    {
      name: "Flutter",
      icon: <SiFlutter />,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-400/10",
      textColor: "text-blue-500"
    },
    {
      name: "React",
      icon: <SiReact />,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      textColor: "text-cyan-600"
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/10",
      textColor: "text-blue-700"
    },
    {
      name: "IoT",
      icon: <IoHardwareChipOutline />, // Alternatif untuk IoT
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-600/10",
      textColor: "text-green-700"
    },
    {
      name: "Cisco Packet Tracer",
      icon: <SiCisco />,
      color: "from-blue-800 to-blue-900",
      bgColor: "bg-blue-800/10",
      textColor: "text-blue-800"
    },
    {
      name: "Canva",
      icon: <SiCanva />,
      color: "from-cyan-400 to-blue-400",
      bgColor: "bg-cyan-400/10",
      textColor: "text-cyan-500"
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-600"
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop />,
      color: "from-blue-700 to-indigo-700",
      bgColor: "bg-blue-700/10",
      textColor: "text-blue-700"
    },
    {
      name: "Digital Marketing",
      icon: <SiGoogleanalytics />,
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-500/10",
      textColor: "text-teal-600"
    }, {
      name: "Jaringan Komputer",
      icon: <FaNetworkWired />,
      color: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-600/10",
      textColor: "text-gray-700"
    },
    {
      name: "Service Komputer",
      icon: <FaTools />,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-600"
    },
    {
      name: "Virtual Box",
      icon: <SiVirtualbox />,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-600"
    },
    {
  name: "CapCut",
  icon: <IoVideocamOutline />,
  color: "from-cyan-500 to-blue-500",
  bgColor: "bg-cyan-500/10",
  textColor: "text-cyan-600"
},
{
  name: "SEO",
  icon: <FaSearchDollar />,
  color: "from-purple-500 to-indigo-500",
  bgColor: "bg-purple-500/10",
  textColor: "text-purple-600"
}
  ];

  return (
    <section id="skills" className="py-16 relative">
      {/* LAYER SEMI-TRANSPARANT - background navy dengan opacity */}
      <div className="absolute inset-0 bg-navy-800 backdrop-blur-sm z-0"></div>
      
      {/* CONTENT DI ATAS LAYER */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header - text putih karena background gelap */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-8">
              Skills & Technologies
            </h2>
          
          </div>

          {/* MAIN CARD - tanpa background karena sudah ada layer */}
          <div className="bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-md">
            <div className="relative">
              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Icon */}
                    <div className={`
                      relative flex flex-col items-center justify-center p-4 rounded-2xl 
                      transition-all duration-300 ease-out transform
                      ${hoveredSkill === skill.name 
                        ? `scale-110 bg-gradient-to-br ${skill.color} shadow-lg` 
                        : `bg-white/10 hover:bg-white/20 scale-100`
                      }
                      border border-white/20 hover:border-white/40
                      cursor-pointer
                    `}>
                      
                      {/* Icon */}
                      <span className={`
                        text-2xl mb-2 transition-all duration-300
                        ${hoveredSkill === skill.name ? 'scale-125 text-white' : 'scale-100 text-white'}
                      `}>
                        {skill.icon}
                      </span>
                      
                     
                      
                      {/* Hover Effect Ring */}
                      {hoveredSkill === skill.name && (
                        <div className={`absolute inset-0 rounded-2xl border-2 border-white/50 animate-pulse`}></div>
                      )}
                    </div>

                    {/* Tooltip on Hover */}
                    {hoveredSkill === skill.name && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                        <div className={`bg-gradient-to-r ${skill.color} text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl`}>
                          {skill.name}
                          {/* Tooltip arrow */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-inherit rotate-45"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;