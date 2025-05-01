document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const userData = {
        name: "FİDAN <span class='highlight'>ABBASOVA</span>",
        title: "STUDENT",
        contact: [
            { icon: "phone.png", text: "+994 70 566 69 91" },
            { icon: "email.png", text: "fidanabbasll0306@gmail.com" },
            { icon: "location.png", text: "Azerbaijan/Baku/Ahmadli" }
        ],
        socialMedia: [
            { icon: "instagram.png", text: "fidanabbasll" },
            { icon: "tik-tok.png", text: "abbasll.060" },
            { icon: "github.png", text: "fidano9" }
        ],
        education: [
            { period: "2013 - 2024", school: "Hajilar village high school" },
            { period: "2024 - 2025", school: "AzTU - Information Security" }
        ],
        skills: ["Problem Solving & Debugging", "Programming Languages", "Responsive Web Design"],
        languages: ["Azerbaijani", "English", "Turkish", "Italian"],
        profile: "A highly motivated cybersecurity student with a strong foundation in software development and digital media. With hands-on experience in video editing and content creation, I bring a creative edge to problem-solving in technical environments. Passionate about protecting digital infrastructure, continuously learning, and contributing to collaborative, forward-thinking projects.",
        workExperience: [
            {
                title: "Freelance Video Editor & Content Creator",
                details: ["As a freelance video editor and digital content creator, I have collaborated with various clients including YouTubers, small businesses, and social media influencers. My work primarily involves editing short-form and long-form video content using Adobe Premiere Pro, After Effects, and DaVinci Resolve. I specialize in storytelling through visual editing, color correction, and sound design to create engaging content tailored to target audiences."]
            },
            {
                title: "Junior Software Developer Intern",
                details: ["During my internship at CyberShield Solutions, a company focused on network security and threat mitigation tools, I worked closely with the cybersecurity team to develop a Python-based internal vulnerability scanning tool. I participated in daily stand-up meetings, collaborated in agile development cycles, and contributed to writing clean and efficient code."]
            }
        ],
        reference: "James and I have worked on over 30 video projects together across various platforms. He can provide insight into my reliability, creative workflow, and ability to deliver high-quality work on time.",
        certifications: [
            {
                name: "Google Cybersecurity Professional Certificate",
                description: "This professional-level certification included training in networking, operating systems, system administration, incident response, and security tools. It also covered practical labs on identifying and mitigating cyber threats, using SIEM tools, and analyzing security logs."
            },
            {
                name: "Introduction to Ethical Hacking",
                description: "This certification course covered foundational topics in ethical hacking including reconnaissance, scanning, enumeration, and exploitation. Focused on hands-on application and ethical considerations in cybersecurity."
            }
        ],
        projects: [
            {
                name: "SecureLogin: Multi-factor Authentication System",
                description: "Developed a C# application that implements multi-factor authentication using password and one-time code via email. Designed for small-scale enterprise login systems with a focus on security."
            },
            {
                name: "CyberAware: Phishing Simulation Tool",
                description: "Built a Python-based phishing simulation tool for educational use, allowing organizations to test employee awareness in a safe environment. Generated detailed reports for each test round."
            },
            {
                name: "MyCV Online Portfolio Website",
                description: "Created a fully responsive HTML/CSS-based online CV with editable sections and save functionality. Implemented a system to generate and store new versions dynamically under a shared CSS design."
            }
        ]
    };

    // --- ADD DATA TO PAGE ---
    document.getElementById('userName').innerHTML = userData.name;
    document.getElementById('userTitle').textContent = userData.title;

    const createList = (array, iconPath = "") => {
        return array.map(item => 
            `<p class="editable" contenteditable="false"><img src="photos/${iconPath}${item.icon || ''}" alt="" class="icon"> ${item.text}</p>`
        ).join('');
    };

    const createEducation = (array) => {
        return array.map(item => `<p><strong>${item.period}</strong><br>${item.school}</p>`).join('');
    };

    const createSkills = (array) => {
        return `<ul style="list-style-type: none;">${array.map(skill => `<li>${skill}</li>`).join('')}</ul>`;
    };

    const createWork = (array) => {
        return array.map(job => `
            <p><strong>${job.title}</strong></p>
            <ul style="list-style-type: none;">${job.details.map(d => `<li>${d}</li>`).join('')}</ul>
        `).join('');
    };

    const createCertifications = (array) => {
        return array.map(cert => `
            <p><strong>${cert.name}</strong></p>
            <p>${cert.description}</p>
        `).join('');
    };

    const createProjects = (array) => {
        return array.map(project => `
            <p><strong>${project.name}</strong></p>
            <p>${project.description}</p>
        `).join('');
    };

    document.getElementById('contactInfo').innerHTML = createList(userData.contact);
    document.getElementById('socialMedia').innerHTML = createList(userData.socialMedia);
    document.getElementById('educationInfo').innerHTML = createEducation(userData.education);
    document.getElementById('skillsInfo').innerHTML = createSkills(userData.skills);
    document.getElementById('languagesInfo').innerHTML = createSkills(userData.languages);
    document.getElementById('profileInfo').innerHTML = `<p>${userData.profile}</p>`;
    document.getElementById('workExperience').innerHTML = createWork(userData.workExperience);
    document.getElementById('referenceInfo').innerHTML = `<p>${userData.reference}</p>`;
    document.getElementById('certificationsInfo').innerHTML = createCertifications(userData.certifications);
    document.getElementById('projectsInfo').innerHTML = createProjects(userData.projects);

    // --- OLD FUNCTIONS (Edit, Save, Accordion, Zip) ---
    const editBtn = document.getElementById('editBtn');
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    let isEditing = false;

    // Accordion open/close
    accordionBtns.forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;
            if (panel.classList.contains('active')) {
                panel.style.maxHeight = null;
                panel.classList.remove('active');
            } else {
                panel.classList.add('active');
                panel.style.maxHeight = "300px";
            }
        });
    });

    // Toggle edit mode
    editBtn.addEventListener('click', () => {
        isEditing = !isEditing;
        editBtn.textContent = isEditing ? 'Save' : 'Edit';

        // Open Accordion panels
        accordionBtns.forEach(btn => {
            const panel = btn.nextElementSibling;
            panel.classList.add('active');
            panel.style.maxHeight = "300px";
        });

        // Activate all editable fields
        const editableElements = document.querySelectorAll('h1, h3, .accordion-panel p, .accordion-panel li, .accordion-panel .editable');
        editableElements.forEach(el => {
            el.setAttribute('contenteditable', isEditing);
        });

        // Save
        if (!isEditing) {
            downloadFiles();
        }
    });

    // Add a new line on Enter key
    const panels = document.querySelectorAll('.accordion-panel');
    panels.forEach(panel => {
        panel.addEventListener('keydown', e => {
            if (!isEditing) return;
            if (e.key === 'Enter') {
                e.preventDefault();
                document.execCommand('insertHTML', false, '<br><br>');
            }
        });
    });

    // Download the page as ZIP
    async function downloadFiles() {
        const zip = new JSZip();

        // Add HTML file
        const html = document.documentElement.outerHTML;
        zip.file("index.html", html);

        // Add CSS file
        const cssPath = Array.from(document.styleSheets).find(s => s.href && s.href.endsWith("style.css"))?.href;
        if (cssPath) {
            try {
                const response = await fetch(cssPath);
                const cssText = await response.text();
                zip.file("style.css", cssText);
            } catch (err) {
                console.warn("CSS dosyası alınamadı:", err);
            }
        }

        // Add script file
        const scriptPath = Array.from(document.scripts).find(s => s.src && s.src.endsWith("script.js"))?.src;
        if (scriptPath) {
            try {
                const response = await fetch(scriptPath);
                const scriptText = await response.text();
                zip.file("script.js", scriptText);
            } catch (err) {
                console.warn("Script dosyası alınamadı:", err);
            }
        }

        // Add photos
        const images = [...document.querySelectorAll("img")];
        for (let img of images) {
            const src = img.src;
            if (src.startsWith("blob:")) continue;
            try {
                const res = await fetch(src);
                const blob = await res.blob();
                const name = img.src.split("/").pop();
                zip.file(`photos/${name}`, blob);
            } catch (err) {
                console.warn("Resim yüklenemedi:", src);
            }
        }

        // Download ZIP
        zip.generateAsync({ type: "blob" }).then(content => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(content);
            a.download = 'cv.zip';
            a.click();
        });
    }
});
