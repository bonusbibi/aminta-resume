import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  th: {
    nav: {
      about: "เกี่ยวกับฉัน",
      projects: "ผลงาน",
      skills: "ทักษะ",
      experience: "ประสบการณ์",
      contact: "ติดต่อ",
      resume: "เรซูเม่",
      role: "นักศึกษาวิทยาการคอมพิวเตอร์"
    },
    hero: {
      statusLabel: "สถานะการฝึกงาน:",
      statusText: "พร้อมเริ่มฝึกงาน (พ.ย. 2026 – มี.ค. 2027)",
      location: "เพชรบุรี, ประเทศไทย",
      badge: "นักศึกษาวิทยาการคอมพิวเตอร์",
      headlinePrefix: "สร้างสรรค์โซลูชัน",
      headlineHighlight: "เว็บ & โมบายล์",
      headlineSuffix: "ด้วยความใฝ่รู้และมุ่งมั่น",
      bio: "สวัสดีค่ะ! ฉัน อมินตรา รุ่งเรือง (Aminta Rungruang) นักศึกษาสาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏเพชรบุรี มีความหลงใหลในการพัฒนา Web Applications, Mobile Applications, และเทคโนโลยี AI พร้อมที่จะเรียนรู้และร่วมงานกับทีมจริง",
      stats: {
        projects: "ผลงานที่พัฒนา",
        projectsSub: "เว็บ, แอป & AI",
        nsc: "รางวัลระดับชาติ",
        nscSub: "NSC Final Round 2026",
        grad: "ปีที่คาดว่าจะจบ",
        gradSub: "วท.บ. วิทย์คอม มรภ.เพชรบุรี"
      },
      exploreBtn: "ดูผลงานทั้งหมด",
      cvBtn: "ดาวน์โหลดเรซูเม่",
      passionateBadge: "นักพัฒนาไฟแรง",
      photoLabels: {
        real: "รูปจริง",
        half: "อวตารครึ่งตัว",
        full: "อวตารเต็มตัว"
      },
      photoSubtitle: "ผู้สมัครฝึกงานสาขาวิทยาการคอมพิวเตอร์",
      studentTag: "นักศึกษา มรภ.เพชรบุรี",
      graduatingTag: "สำเร็จการศึกษาปี 2027"
    },
    about: {
      tag: "ประวัติและความสนใจ",
      title: "เกี่ยวกับฉัน",
      leadDesc: "การผสมผสานทฤษฎีทางวิทยาการคอมพิวเตอร์เข้ากับการลงมือพัฒนาซอฟต์แวร์จริงในโลกปัจจุบัน",
      heading: "เปลี่ยนความอยากรู้ ให้กลายเป็นซอฟต์แวร์ที่ใช้งานได้จริง",
      p1: "ฉันเป็นนักศึกษาปริญญาตรีสาขาวิทยาการคอมพิวเตอร์ ที่มีประสบการณ์จริงในการพัฒนาเว็บและโมบายล์แอปพลิเคชัน เทคโนโลยีหลังบ้าน (Backend) และการจัดการฐานข้อมูล ทั้งจากโครงงานในหลักสูตร การแข่งขัน และการทำงานจริง",
      p2: "ขณะนี้กำลังเปิดรับโอกาสในการฝึกงานตำแหน่ง Web Developer, Backend Developer, Data และ Software Developer มีความกระตือรือร้นที่จะนำความรู้ที่มีไปต่อยอด เรียนรู้จากทีมงานมืออาชีพ และสร้างสรรค์ผลงานที่มีคุณค่า",
      degree: "วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์",
      gradYear: "สำเร็จการศึกษา 2027",
      university: "มหาวิทยาลัยราชภัฏเพชรบุรี (PBRU) • จ.เพชรบุรี",
      internshipAvailable: "พร้อมเริ่มฝึกงานช่วง:",
      internshipPeriod: "พฤศจิกายน 2026 – มีนาคม 2027 (เต็มเวลา)",
      focusAreas: "ความเชี่ยวชาญหลัก",
      domains: [
        {
          title: "Full-Stack Web Development",
          desc: "พัฒนาเว็บแอปพลิเคชันทันสมัยด้วย TypeScript, JavaScript, Node.js และระบบฐานข้อมูลเชิงสัมพันธ์"
        },
        {
          title: "Cross-Platform Mobile Apps",
          desc: "พัฒนาแอปพลิเคชันบนมือถือด้วย Dart & Flutter เชื่อมต่อ REST APIs และระบบฐานข้อมูล Firebase แบบเรียลไทม์"
        },
        {
          title: "Applied Computer Vision & AI",
          desc: "เชื่อมต่อโมเดล Roboflow Vision สำหรับวิเคราะห์ภาพผ่านกล้องแบบเรียลไทม์เพื่อคัดกรองสุขภาพเบื้องต้น"
        },
        {
          title: "Relational & Cloud Databases",
          desc: "ออกแบบโครงสร้างและเขียนคิวรีฐานข้อมูล PostgreSQL, MySQL, Supabase และ Firestore อย่างมีประสิทธิภาพ"
        }
      ]
    },
    projects: {
      tag: "ผลงานที่โดดเด่น",
      title: "ผลงานที่พัฒนา",
      subtitle: "รวบรวม 8 โปรเจกต์ครอบคลุมเว็บแอปพลิเคชัน โมบายล์แอปพลิเคชัน และระบบที่ส่งเข้าแข่งขันระดับประเทศ",
      filters: {
        All: "ทั้งหมด",
        Featured: "ผลงานเด่น",
        "Web & System": "เว็บ & ระบบ",
        "Mobile & AI": "โมบายล์ & AI",
        "Tools & Games": "เครื่องมือ & เกม"
      },
      featuredBadge: "ผลงานเด่น",
      photosCount: "รูปภาพ",
      viewDetails: "ดูรายละเอียดและภาพตัวอย่าง",
      modal: {
        galleryTitle: "ภาพตัวอย่างระบบและหน้าจอการใช้งาน",
        photoCount: "รูปที่ {current} จาก {total}",
        overview: "ภาพรวมโปรเจกต์",
        techStack: "เทคโนโลยีและเครื่องมือที่ใช้",
        contributions: "ฟังก์ชันหลักและสิ่งที่ได้ลงมือทำจริง",
        closeBtn: "ปิดหน้าต่าง"
      }
    },
    skills: {
      tag: "ความสามารถและเครื่องมือ",
      title: "ทักษะทางเทคนิค",
      subtitle: "ทักษะและความคุ้นเคยในการใช้งานภาษาโปรแกรม เฟรมเวิร์ก ฐานข้อมูล และเครื่องมือสำหรับพัฒนาซอฟต์แวร์",
      competencies: "รายการทักษะ",
      categories: {
        "Programming Languages": "ภาษาคอมพิวเตอร์",
        "Web & Backend": "เว็บและเทคโนโลยีหลังบ้าน",
        "Mobile": "โมบายล์แอปพลิเคชัน",
        "Databases": "ระบบฐานข้อมูล",
        "Tools & Platforms": "เครื่องมือและแพลตฟอร์ม",
        "Soft Skills & Languages": "ทักษะส่วนบุคคลและภาษา"
      },
      explorationTag: "กำลังศึกษาเพิ่มเติม",
      explorationTitle: "การเรียนรู้อย่างต่อเนื่อง",
      explorationDesc: "กำลังขยายความรู้ด้านสถาปัตยกรรมระบบหลังบ้านขนาดใหญ่ การวิเคราะห์ข้อมูล และการต่อยอดโมเดล Machine Learning เข้ากับซอฟต์แวร์"
    },
    experience: {
      tag: "เส้นทางและผลงาน",
      title: "ประสบการณ์และรางวัล",
      subtitle: "รางวัลจากการแข่งขัน ประสบการณ์การทำงานในมหาวิทยาลัย และแผนการเรียนตลอด 4 ปี",
      projectFocus: "โฟกัสโครงการ:",
      trajectoryTag: "แผนการศึกษาตลอด 4 ปี",
      trajectoryTitle: "การเติบโตและการเรียนรู้ในมหาวิทยาลัย",
      yearBadge: "ชั้นปีที่",
      years: [
        {
          year: "ชั้นปีที่ 1",
          title: "ปูพื้นฐานสู่สายคอมพิวเตอร์",
          items: ["พื้นฐานการเขียนโปรแกรม", "ทฤษฎีวิทยาการคอมพิวเตอร์", "ระบบเครือข่ายคอมพิวเตอร์"]
        },
        {
          year: "ชั้นปีที่ 2",
          title: "ลงมือสร้างชิ้นงานจริง",
          items: ["การเขียนโปรแกรมขั้นสูง", "โครงสร้างข้อมูลและอัลกอริทึม", "ระบบฐานข้อมูล", "การพัฒนาเว็บแอปพลิเคชัน", "โปรเจกต์รายวิชา"]
        },
        {
          year: "ชั้นปีที่ 3",
          title: "ทดลองสร้างสรรค์หลากหลายสาย",
          items: ["การพัฒนาโมบายล์แอปพลิเคชัน", "โครงงานประยุกต์ใช้ AI", "โครงงานพัฒนาซอฟต์แวร์", "การจัดการฐานข้อมูลและเว็บเชิงลึก"]
        },
        {
          year: "ชั้นปีที่ 4",
          title: "รวบรวมองค์ความรู้สู่การทำงานจริง",
          items: ["โครงงานวิจัยและสัมมนาขั้นสูง", "พัฒนาพอร์ตโฟลิโอส่วนตัว", "เตรียมความพร้อมฝึกงาน", "ค้นหาทิศทางสายอาชีพที่สนใจ"]
        }
      ],
      experiences: [
        {
          title: "National Software Contest 2026 (NSC)",
          role: "ผ่านเข้ารอบชิงชนะเลิศ — รางวัลชมเชยระดับประเทศ (Honorable Mention)",
          project: "NeoCoare AI: แอปพลิเคชันผู้ช่วย AI สำหรับคัดกรองภาวะเส้นประสาทเสื่อมในผู้ป่วยเบาหวานสำหรับใช้งานที่บ้าน",
          period: "2026",
          tag: "รางวัลระดับชาติ",
          points: [
            "ร่วมพัฒนาและนำเสนอโมบายล์แอปพลิเคชันด้านการแพทย์แก่คณะกรรมการผู้ทรงคุณวุฒิในการแข่งขันรอบชิงชนะเลิศระดับประเทศ",
            "นำโมเดล Computer Vision (Roboflow API) มาผสานเข้ากับกล้องมือถือ เพื่อแสดงภาพไกด์ตรวจเท้าและวิเคราะห์แผลเบาหวานแบบเรียลไทม์",
            "ได้รับรางวัลชมเชย (Honorable Mention Award) จากเวทีประกวดโครงงานซอฟต์แวร์ระดับประเทศ"
          ]
        },
        {
          title: "ผู้ช่วยพัฒนาระบบเว็บ — โครงการ Earn While Learn",
          role: "นักศึกษาช่วยงาน / ผู้ช่วยพัฒนาเว็บไซต์",
          project: "ระบบเว็บไซต์และการบริหารจัดการข้อมูลของมหาวิทยาลัย",
          period: "โครงการในมหาวิทยาลัย",
          tag: "ประสบการณ์ทำงานจริง",
          points: [
            "ดูแลและอัปเดตข้อมูลบนเว็บไซต์ ปรับปรุงหน้าตา UI ให้สวยงามใช้งานง่าย และแก้ปัญหาบั๊กการแสดงผล",
            "ทดสอบความเข้ากันได้ของการแสดงผลบนหน้าจออุปกรณ์ต่างๆ (Responsive Testing)",
            "ได้สัมผัสการทำงานจริงร่วมกับบุคลากร รับฟังความต้องการ และนำมาปรับใช้งานได้ตามกำหนดเวลา"
          ]
        },
        {
          title: "การแข่งขันพัฒนาเว็บไซต์ — PCNK Games 2025",
          role: "ผู้เข้าแข่งขัน & พัฒนาฝั่งหน้าบ้าน (Frontend)",
          project: "การพัฒนาเว็บไซต์ภายใต้โจทย์และเวลาที่กำหนด",
          period: "2025",
          tag: "การแข่งขัน Hackathon",
          points: [
            "ทำงานร่วมกับทีมในการออกแบบและพัฒนาเว็บไซต์อย่างรวดเร็วภายใต้เวลาจำกัดของการแข่งขัน",
            "เขียนโค้ดหน้าบ้านที่มีโครงสร้างชัดเจน ตอบโจทย์เกณฑ์การให้คะแนนของคณะกรรมการ",
            "ฝึกฝนทักษะการทำงานเป็นทีม การสื่อสาร และการแก้ปัญหาเฉพาะหน้าอย่างมีประสิทธิภาพ"
          ]
        }
      ]
    },
    contact: {
      internshipTag: "ช่วงเวลาฝึกงาน: พ.ย. 2026 – มี.ค. 2027",
      title: "มาร่วมพูดคุยและสร้างสรรค์สิ่งดีๆ ไปด้วยกัน",
      desc: "ไม่ว่าจะเป็นโอกาสในการฝึกงาน การแลกเปลี่ยนความรู้ด้านการพัฒนาซอฟต์แวร์ หรือโครงงานที่สนใจร่วมกัน สามารถติดต่อมาได้ตลอดเวลาค่ะ",
      sendEmailBtn: "ส่งอีเมลหาฉัน",
      viewPdfBtn: "ดูเรซูเม่ฉบับเต็ม (PDF)",
      emailLabel: "อีเมลติดต่อ",
      phoneLabel: "เบอร์โทรศัพท์",
      githubLabel: "กิตฮับ (GITHUB)",
      locationLabel: "ที่อยู่ปัจจุบัน",
      locationVal: "จ.เพชรบุรี, ประเทศไทย"
    },
    footer: {
      rights: "อมินตรา รุ่งเรือง © 2026",
      subtitle: "นักศึกษาวิทยาการคอมพิวเตอร์ • มหาวิทยาลัยราชภัฏเพชรบุรี",
      backToTop: "กลับด้านบน"
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume",
      role: "CS Undergraduate"
    },
    hero: {
      statusLabel: "Availability:",
      statusText: "Open for Internship (Nov 2026 – Mar 2027)",
      location: "Phetchaburi, Thailand",
      badge: "Computer Science Undergraduate",
      headlinePrefix: "Building",
      headlineHighlight: "web & mobile",
      headlineSuffix: "solutions with curiosity.",
      bio: "I'm Aminta Rungruang, an enthusiastic CS student at Phetchaburi Rajabhat University. I specialize in developing intuitive web interfaces, reliable backend architectures, and AI-assisted mobile tools.",
      stats: {
        projects: "Projects Built",
        projectsSub: "Web, Mobile & AI",
        nsc: "Finalist Award",
        nscSub: "National 2026",
        grad: "Expected Grad",
        gradSub: "B.Sc. CS @ PBRU"
      },
      exploreBtn: "Explore Selected Work",
      cvBtn: "Download CV",
      passionateBadge: "Passionate Builder",
      photoLabels: {
        real: "Real Photo",
        half: "Half Avatar",
        full: "Full Avatar"
      },
      photoSubtitle: "B.Sc. Computer Science Candidate",
      studentTag: "PBRU Student",
      graduatingTag: "Graduating 2027"
    },
    about: {
      tag: "Profile & Background",
      title: "About Me",
      leadDesc: "A dedicated undergraduate combining theoretical computer science with practical software engineering.",
      heading: "Turning curiosity into solid, reliable software.",
      p1: "I am a Computer Science undergraduate with hands-on experience in web and mobile application development, backend technologies, and database management through university coursework and practical projects.",
      p2: "Currently, I am actively exploring opportunities in Web Development, Backend Development, Data, and Software Development. I am eager to apply my technical knowledge, learn from experienced engineering teams, and contribute to impactful real-world projects.",
      degree: "Bachelor of Science in Computer Science",
      gradYear: "Graduation 2027",
      university: "Phetchaburi Rajabhat University (PBRU) • Phetchaburi, Thailand",
      internshipAvailable: "Available for Internship:",
      internshipPeriod: "November 2026 – March 2027 (Full-time)",
      focusAreas: "Primary Focus Areas",
      domains: [
        {
          title: "Full-Stack Web Development",
          desc: "Architecting responsive, modern web applications with TypeScript, JavaScript, Node.js, and relational database systems."
        },
        {
          title: "Cross-Platform Mobile Apps",
          desc: "Developing client applications using Dart & Flutter with REST API integrations and Firebase real-time sync."
        },
        {
          title: "Applied Computer Vision & AI",
          desc: "Integrating Roboflow vision models for real-time camera overlays, sensory guidance, and automated health checks."
        },
        {
          title: "Relational & Cloud Databases",
          desc: "Designing schemas and managing transactional queries across PostgreSQL, MySQL, Supabase, and Firestore."
        }
      ]
    },
    projects: {
      tag: "Portfolio Showcase",
      title: "Selected Projects",
      subtitle: "A showcase of 8 applications, academic systems, and competition entries developed across multiple frameworks.",
      filters: {
        All: "All",
        Featured: "Featured",
        "Web & System": "Web & System",
        "Mobile & AI": "Mobile & AI",
        "Tools & Games": "Tools & Games"
      },
      featuredBadge: "Featured",
      photosCount: "photos",
      viewDetails: "View Details & Screenshots",
      modal: {
        galleryTitle: "Project Screenshots & UI Gallery",
        photoCount: "Photo {current} of {total}",
        overview: "Project Overview",
        techStack: "Tech Stack & APIs",
        contributions: "Key Implementations & Contributions",
        closeBtn: "Close Window"
      }
    },
    skills: {
      tag: "Capabilities & Stack",
      title: "Technical Skills",
      subtitle: "Structured competencies across modern programming languages, cloud stacks, and development workflows.",
      competencies: "competencies",
      categories: {
        "Programming Languages": "Programming Languages",
        "Web & Backend": "Web & Backend",
        "Mobile": "Mobile",
        "Databases": "Databases",
        "Tools & Platforms": "Tools & Platforms",
        "Soft Skills & Languages": "Soft Skills & Languages"
      },
      explorationTag: "Active Exploration",
      explorationTitle: "Continuous Growth & Emerging Tech",
      explorationDesc: "Actively expanding into backend distributed architecture, complex data flows, and automated machine learning inferencing."
    },
    experience: {
      tag: "Track Record",
      title: "Experience & Milestones",
      subtitle: "Key competitive achievements, university roles, and the 4-year Computer Science learning curve.",
      projectFocus: "Project Focus:",
      trajectoryTag: "Academic Trajectory",
      trajectoryTitle: "University Curriculum & Progression",
      yearBadge: "YEAR",
      years: [
        {
          year: "YEAR 1",
          title: "Getting Started",
          items: ["Programming fundamentals", "Computer science fundamentals", "Computer networks"]
        },
        {
          year: "YEAR 2",
          title: "Learning by Building",
          items: ["Programming", "Data structures", "Databases", "Web development", "University projects"]
        },
        {
          year: "YEAR 3",
          title: "Trying Different Things",
          items: ["Mobile application development", "AI-related project", "Software development projects", "More database and web development"]
        },
        {
          year: "YEAR 4",
          title: "Putting Things Together",
          items: ["Advanced university projects", "Seminar", "Portfolio", "Internship preparation", "Exploring career interests"]
        }
      ],
      experiences: [
        {
          title: "National Software Contest 2026 (NSC)",
          role: "Final Round — Honorable Mention Award",
          project: "NeoCoare AI: AI-Assisted Diabetic Neuropathy Screening Application for Home Use",
          period: "2026",
          tag: "National Award",
          points: [
            "Co-developed and pitched an AI-assisted healthcare screening mobile app to evaluation panels in the national final round.",
            "Integrated mobile computer vision guidance using Roboflow API to guide non-expert healthcare volunteers with real-time camera overlays.",
            "Recognized with an Honorable Mention Award in one of Thailand's premier national software innovation contests."
          ]
        },
        {
          title: "Web Development Support — Earn While Learn",
          role: "Student Assistant / Web Development",
          project: "University Web Systems & Portal Management",
          period: "University Program",
          tag: "Work Experience",
          points: [
            "Assisted with website maintenance, content publishing, and UI refinements across assigned faculty web services.",
            "Performed basic troubleshooting, responsiveness testing, and layout bug fixing for university portals.",
            "Gained direct experience translating user requirements into functional web updates under tight deadlines."
          ]
        },
        {
          title: "PCNK Games 2025 — Website Development Competition",
          role: "Competitor & Frontend Collaborator",
          project: "Fast-Paced Competition Web Deliverable",
          period: "2025",
          tag: "Hackathon / Competition",
          points: [
            "Collaborated closely in a multidisciplinary team under tight countdown pressure.",
            "Delivered structured, responsive web page components satisfying specific competition criteria.",
            "Enhanced agile teamwork, active problem solving, and rapid prototyping capabilities."
          ]
        }
      ]
    },
    contact: {
      internshipTag: "Internship Window: Nov 2026 – Mar 2027",
      title: "Let's connect & build something impactful.",
      desc: "Whether you have an internship opportunity, want to discuss software engineering, or explore potential collaborative projects, my inbox is always open.",
      sendEmailBtn: "aminta.rungruang@gmail.com",
      viewPdfBtn: "View Full Resume (PDF)",
      emailLabel: "EMAIL ADDRESS",
      phoneLabel: "PHONE NUMBER",
      githubLabel: "GITHUB REPOSITORIES",
      locationLabel: "CURRENT RESIDENCE",
      locationVal: "Phetchaburi, Thailand"
    },
    footer: {
      rights: "Aminta Rungruang © 2026",
      subtitle: "Computer Science Undergraduate • Phetchaburi Rajabhat University",
      backToTop: "Back to Top"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('aminta_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('aminta_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'th' ? 'en' : 'th'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
