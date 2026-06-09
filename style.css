/* ==========================================================================
   VARIABLES & BASE RESET
   ========================================================================== */
:root {
    --bg-main: #090d16;      /* Super dark navy */
    --bg-surface: #131926;   /* Card surface */
    --border-color: #222d44;
    --text-primary: #f1f5f9;
    --text-muted: #64748b;
    --accent-cyan: #22d3ee;
    --accent-indigo: #818cf8;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-main);
    color: var(--text-primary);
    font-family: 'Plus Jakarta Sans', sans-serif;
    overflow-x: hidden;
}

/* ==========================================================================
   NAVIGATION BAR
   ========================================================================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(9, 13, 22, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
}
.nav-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: -1px;
}
.logo span { color: var(--accent-cyan); }
.nav-links {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 30px;
}
.nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;
}
.nav-links a:hover { color: var(--text-primary); }
.nav-links .btn-nav {
    background: var(--text-primary);
    color: var(--bg-main) !important;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
}
.nav-links .btn-nav:hover { opacity: 0.9; }

/* ==========================================================================
   HERO SECTION
   ========================================================================== */
.hero {
    max-width: 800px;
    margin: 0 auto;
    padding: 160px 20px 60px 20px;
    text-align: center;
}
.badge-hero {
    background: rgba(34, 211, 238, 0.1);
    color: var(--accent-cyan);
    font-size: 12px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 20px;
    border: 1px solid rgba(34, 211, 238, 0.2);
}
.hero h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -2px;
    line-height: 1.1;
    margin-top: 24px;
    margin-bottom: 20px;
}
.gradient-text {
    background: linear-gradient(to right, var(--accent-cyan), var(--accent-indigo));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.hero p {
    font-size: 18px;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 35px;
}
.hero-cta {
    display: flex;
    justify-content: center;
    gap: 15px;
}
.btn-primary, .btn-secondary {
    padding: 12px 24px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.2s;
}
.btn-primary { background: var(--accent-cyan); color: var(--bg-main); }
.btn-primary:hover { background: #06b6d4; transform: translateY(-2px); }
.btn-secondary { background: var(--bg-surface); color: var(--text-primary); border: 1px solid var(--border-color); }
.btn-secondary:hover { border-color: var(--text-muted); }

/* ==========================================================================
   LABS BANNER
   ========================================================================== */
.widget-banner {
    max-width: 1060px;
    margin: 40px auto;
    padding: 0 20px;
}
.banner-box {
    background: linear-gradient(to right, rgba(129, 140, 248, 0.1), rgba(34, 211, 238, 0.1));
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}
.banner-text h3 { font-size: 16px; color: var(--text-primary); margin-bottom: 4px; }
.banner-text p { font-size: 13px; color: var(--text-muted); }
.btn-labs {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
}
.btn-labs:hover { background: var(--text-primary); color: var(--bg-main); }

/* ==========================================================================
   PROJECTS COMPONENT
   ========================================================================== */
.projects-section, .skills-section {
    max-width: 1060px;
    margin: 80px auto;
    padding: 0 20px;
}
.section-title { margin-bottom: 40px; }
.section-title h2 { font-family: 'Space Grotesk', sans-serif; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; }
.section-title p { color: var(--text-muted); margin-top: 6px; font-size: 14px; }

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 30px;
}
.project-card {
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s, border-color 0.3s;
}
.project-card:hover { transform: translateY(-5px); border-color: var(--text-muted); }
.project-img {
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.project-placeholder-icon { font-size: 48px; opacity: 0.3; color: white; }
.project-info { padding: 24px; }
.proj-tech { font-size: 11px; font-weight: 700; color: var(--accent-indigo); letter-spacing: 0.5px; text-transform: uppercase; }
.project-info h3 { font-size: 18px; margin-top: 8px; margin-bottom: 10px; }
.project-info p { font-size: 13px; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px; }
.project-links { display: flex; gap: 15px; }
.project-links a { color: var(--text-primary); text-decoration: none; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 6px; opacity: 0.8; }
.project-links a:hover { opacity: 1; color: var(--accent-cyan); }

/* ==========================================================================
   SKILLS & CONTACT COMPONENT
   ========================================================================== */
.skills-grid { display: flex; flex-wrap: wrap; gap: 12px; }
.skill-tag {
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    padding: 10px 18px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
}

.contact-section { max-width: 1060px; margin: 100px auto; padding: 0 20px; }
.contact-card {
    background: linear-gradient(180deg, var(--bg-surface) 0%, rgba(19, 25, 38, 0.5) 100%);
    border: 1px solid var(--border-color);
    padding: 60px 20px;
    border-radius: 24px;
    text-align: center;
}
.contact-card h2 { font-family: 'Space Grotesk', sans-serif; font-size: 32px; margin-bottom: 12px; }
.contact-card p { color: var(--text-muted); max-width: 500px; margin: 0 auto 30px auto; font-size: 15px; }
.btn-email {
    background: var(--text-primary); color: var(--bg-main); text-decoration: none;
    padding: 14px 28px; border-radius: 12px; font-weight: 700; font-size: 15px;
    display: inline-flex; align-items: center; gap: 10px; transition: opacity 0.2s;
}
.btn-email:hover { opacity: 0.9; }

footer { text-align: center; padding: 40px 20px; border-top: 1px solid var(--border-color); color: var(--text-muted); font-size: 12px; }

/* RESPONSIVE BREAKPOINT */
@media (max-width: 600px) {
    .hero h1 { font-size: 38px; }
    .nav-links { display: none; } /* Simpel top navbar hide */
}
