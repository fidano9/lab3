const data = {
    "personal_information": {
      "name": "FİDAN ABBASOVA",
      "title": "STUDENT",
      "profile_picture": "photos/profile.jpg"
    },
    "contact": {
      "phone": "+994 70 566 69 91",
      "email": "fidanabbasll0306@gmail.com",
      "location": "Azerbaijan/Baku/Ahmadli"
    },
    "social_media": [
      {
        "platform": "Instagram",
        "username": "fidanabbasll",
        "icon": "photos/instagram.png"
      },
      {
        "platform": "TikTok",
        "username": "abbasll.060",
        "icon": "photos/tik-tok.png"
      },
      {
        "platform": "GitHub",
        "username": "fidano9",
        "icon": "photos/github.png"
      }
    ],
    "education": [
      {
        "period": "2013 - 2024",
        "institution": "Hajilar village high school"
      },
      {
        "period": "2024 - 2025",
        "institution": "AzTU - Information Security"
      }
    ],
    "skills": [
      "Problem Solving & Debugging",
      "Programming Languages",
      "Responsive Web Design"
    ],
    "languages": [
      "Azerbaijani",
      "English",
      "Turkish",
      "Italian"
    ],
    "profile_summary": "A highly motivated cybersecurity student with a strong foundation in software development and digital media. With hands-on experience in video editing and content creation, I bring a creative edge to problem-solving in technical environments. Passionate about protecting digital infrastructure, continuously learning, and contributing to collaborative, forward-thinking projects.",
    "work_experience": [
      {
        "title": "Freelance Video Editor & Content Creator",
        "description": "As a freelance video editor and digital content creator, I have collaborated with various clients including YouTubers, small businesses, and social media influencers. My work primarily involves editing short-form and long-form video content using Adobe Premiere Pro, After Effects, and DaVinci Resolve. I specialize in storytelling through visual editing, color correction, and sound design to create engaging content tailored to target audiences."
      },
      {
        "title": "Junior Software Developer Intern",
        "company": "CyberShield Solutions (implied)",
        "description": "During my internship at CyberShield Solutions, a company focused on network security and threat mitigation tools, I worked closely with the cybersecurity team to develop a Python-based internal vulnerability scanning tool. I participated in daily stand-up meetings, collaborated in agile development cycles, and contributed to writing clean and efficient code."
      }
    ],
    "reference": {
      "name": "James (implied)",
      "description": "James and I have worked on over 30 video projects together across various platforms. He can provide insight into my reliability, creative workflow, and ability to deliver high-quality work on time."
    },
    "certifications": [
      {
        "title": "Google Cybersecurity Professional Certificate",
        "description": "This professional-level certification included training in networking, operating systems, system administration, incident response, and security tools. It also covered practical labs on identifying and mitigating cyber threats, using SIEM tools, and analyzing security logs."
      },
      {
        "title": "Introduction to Ethical Hacking",
        "description": "This certification course covered foundational topics in ethical hacking including reconnaissance, scanning, enumeration, and exploitation. Focused on hands-on application and ethical considerations in cybersecurity."
      }
    ],
    "projects": [
      {
        "title": "SecureLogin: Multi-factor Authentication System",
        "description": "Developed a C# application that implements multi-factor authentication using password and one-time code via email. Designed for small-scale enterprise login systems with a focus on security."
      },
      {
        "title": "CyberAware: Phishing Simulation Tool",
        "description": "Built a Python-based phishing simulation tool for educational use, allowing organizations to test employee awareness in a safe environment. Generated detailed reports for each test round."
      },
      {
        "title": "MyCV Online Portfolio Website",
        "description": "Created a fully responsive HTML/CSS-based online CV with editable sections and save functionality. Implemented a system to generate and store new versions dynamically under a shared CSS design."
      }
    ]
  }

  document.getElementById("name").textContent = data.personal_information.name;
  document.getElementById("title").textContent = data.personal_information.title;
  document.getElementById("email").textContent = data.contact.email;
  document.getElementById("nomre").textContent = data.contact.phone;
  document.getElementById("yer").textContent = data.contact.location;
  document.getElementById("instagram").textContent = data.social_media[0].username;
  document.getElementById("tiktok").textContent = data.social_media[1].username;
  document.getElementById("github").textContent = data.social_media[2].username;

  document.getElementById("təhsil").innerHTML = data.education.map(item => `<p><strong>${item.period}</strong><br> ${item.institution}</p>`).join("");

  document.getElementById("bacariqlar").innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join("");

  document.getElementById("iş-tecrübəsi").innerHTML = data.work_experience.map(exp => `<p><strong>${exp.title}</strong><br> ${exp.description}</p>`).join("");

  document.getElementById("dillər").innerHTML = data.languages.map(lang => `<li>${lang}</li>`).join("");
  document.getElementById("proyektlər").innerHTML = data.projects.map(lang => `<p><strong>${lang.title}</strong><br> ${lang.description}</p>`).join("");
  document.getElementById("sertifikalar").innerHTML = data.certifications.map(lang => `<p><strong>${lang.title}</strong><br> ${lang.description}</p>`).join("");
  document.getElementById("referans").innerHTML = `<p><strong>${data.reference.name}</strong><br> ${data.reference.description}</p>`;
  document.getElementById("profile-info").innerHTML = `<p>${data.profile_summary}</p>`;

  document.getElementById("bacariq-elave-et").addEventListener("click", () => {
    const skill = prompt("Bacarıqlarınızı daxil edin:");
    if (skill) {
        document.getElementById("bacariqlar").innerHTML += `<li>${skill}</li>`;
    }
});

document.getElementById("dil-elave-et").addEventListener("click", () => {
    const language = prompt("Dilləri daxil edin:");
    if (language) {
        document.getElementById("dillər").innerHTML += `<li>${language}</li>`;
    }
});
