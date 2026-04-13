/* ============================================
   Wardah Shafi — Portfolio Scripts
   ============================================ */

(function () {
  'use strict';

  // --- Case Study Data ---
  const caseStudies = {
    'featured-virtualmd': {
      name: 'VirtualMD',
      desc: 'Personal AI health assistant',
      color: '#6C5CE7',
      icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3L4 7V17L12 21L20 17V7L12 3Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M4 7L12 11M12 11L20 7M12 11V21" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg>',
      overview: [
        'VirtualMD is an AI-powered health assistant that helps users understand symptoms, track medications, and manage their wellness journey. The app combines conversational AI with structured health data to provide personalized guidance.',
        'A cross-functional team of four engineers, one PM, and me as the lead designer. We had three months to deliver a fully functional MVP for investor demo day.'
      ],
      context: 'Telehealth usage surged post-pandemic, but most apps felt clinical and cold. We saw an opportunity to create a health companion that felt approachable, warm, and genuinely helpful — not just another symptom checker.',
      principles: [
        'Conversational-first interface over form-heavy flows',
        'Calm, reassuring visual language with soft color palettes',
        'Accessibility-first: WCAG AA compliant across all screens',
        'Progressive disclosure for complex medical information'
      ],
      audience: 'Health-conscious millennials and Gen-Z users who prefer self-service digital tools over traditional clinic visits for non-emergency health questions.',
      metrics: [
        { value: '94%', label: 'User satisfaction' },
        { value: '3.2x', label: 'Engagement increase' },
        { value: '47%', label: 'Task completion rate lift' }
      ],
      screens: ['Home', 'Chat', 'Profile', 'History']
    },

    'featured-swarppay': {
      name: 'Swarp Pay',
      desc: 'Crypto payments wallet',
      color: '#2D3436',
      icon: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="white" stroke-width="1.5"/><path d="M15 10C15 10 14 8.5 12 8.5C10 8.5 9 9.75 9 11C9 14 15 12.5 15 15C15 16.25 13.5 17.5 12 17.5C10 17.5 9 16 9 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7V8.5M12 17.5V19" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>',
      overview: [
        'Swarp Pay is a crypto payments wallet designed to make sending, receiving, and managing digital currencies as simple as traditional banking apps. The product bridges the gap between complex blockchain interactions and everyday financial tasks.',
        'Working closely with a fintech startup team of six, I was responsible for the end-to-end design — from onboarding flows to transaction confirmations and security layers.'
      ],
      context: 'Crypto wallets in 2024 still felt intimidating. Seed phrases, gas fees, and network selection created friction for mainstream adoption. Swarp Pay set out to abstract all that complexity.',
      principles: [
        'Zero-jargon interface — no "gas fees" or "nonces" in user-facing copy',
        'Progressive security: simple by default, advanced when needed',
        'Real-time visual feedback for every transaction state'
      ],
      audience: 'First-time crypto users in the MENA region, particularly young professionals looking to use crypto for remittances, freelance payments, and peer-to-peer transfers.',
      metrics: [
        { value: '68%', label: 'Onboarding completion' },
        { value: '2.1s', label: 'Avg. transaction time' },
        { value: '12K+', label: 'Beta sign-ups' }
      ],
      screens: ['Wallet', 'Send', 'Receive', 'Activity']
    },

    'featured-bayut': {
      name: 'Bayut KSA',
      desc: 'Real estate marketplace',
      color: '#E17055',
      icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 12L12 5L21 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 20V14H14V20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      overview: [
        'Bayut KSA is the Saudi Arabian expansion of Bayut, one of the Middle East\'s leading real estate platforms. I led the product design for the Kingdom\'s market entry — adapting the core experience to local preferences, RTL layouts, and Saudi real estate norms.',
        'A dedicated squad of three designers, five engineers, and two PMs. Over eight months, we shipped a fully localized platform covering property search, agent profiles, and listing management.'
      ],
      context: 'Saudi Arabia\'s Vision 2030 accelerated real estate investment and homeownership. The market needed a modern, trustworthy property platform — not just a listing board, but a complete home-finding experience.',
      principles: [
        'RTL-native design system built from the ground up',
        'Trust signals woven throughout — verified badges, agent ratings, market data',
        'Map-first exploration optimized for Saudi geography and neighborhoods',
        'Performance-first with large image galleries on variable network speeds'
      ],
      audience: 'Saudi nationals and expats looking to buy, rent, or invest in properties across Riyadh, Jeddah, and Dammam — from first-time renters to seasoned real estate investors.',
      metrics: [
        { value: '340%', label: 'Listing growth (6 months)' },
        { value: '89%', label: 'Search relevance score' },
        { value: '4.6★', label: 'App Store rating' }
      ],
      screens: ['Search', 'Listing', 'Map View', 'Agent']
    },

    'project-blueprint': {
      name: 'The Human Blueprint',
      desc: 'Self-growth community platform',
      color: '#0984E3',
      icon: '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="white" stroke-width="1.5"/><path d="M9 9H15M9 12H15M9 15H12" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>',
      overview: [
        'The Human Blueprint is a self-growth community platform that combines structured personal development programs with peer accountability. Think of it as a modern take on masterminds — designed for the digital-native generation.',
        'Solo design work for an early-stage founder. I took the product from initial concept sketches to a fully functional design system and interactive prototype.'
      ],
      context: 'The self-improvement space is saturated with courses, but lacks structured community support. People buy programs and never finish them. Blueprint solves the completion problem through social accountability.',
      principles: [
        'Community-first: every feature designed around group dynamics',
        'Progress visualization that motivates without gamification traps',
        'Clean, distraction-free reading and learning experience'
      ],
      audience: 'Ambitious professionals aged 25-40 who invest in personal development but struggle with consistency and accountability.',
      metrics: [
        { value: '78%', label: 'Program completion rate' },
        { value: '4.2x', label: 'Daily engagement vs industry avg' },
        { value: '92%', label: 'Would recommend score' }
      ],
      screens: ['Dashboard', 'Program', 'Community', 'Progress']
    },

    'project-remembery': {
      name: 'Remembery',
      desc: 'Social memory sharing app',
      color: '#E84393',
      icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 4 16 4 10C4 6.68629 6.68629 4 10 4C11.2145 4 12.3419 4.38399 13.2734 5.04148" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M12 21C12 21 20 16 20 10C20 6.68629 17.3137 4 14 4C12.7855 4 11.6581 4.38399 10.7266 5.04148" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>',
      overview: [
        'Remembery is a social memory-sharing app where friends and family can collaboratively build shared timelines of their most meaningful moments. Instead of endless scrolling, it focuses on curation and reflection.',
        'Designed as a passion project with two developer friends. I owned all product design and branding decisions from concept through launch.'
      ],
      context: 'Social media captures moments but doesn\'t preserve memories. Photos get lost in camera rolls, and stories disappear in 24 hours. Remembery creates a permanent, beautiful home for the moments that matter.',
      principles: [
        'Memories over moments — quality over quantity curation',
        'Collaborative by default with granular privacy controls',
        'Emotions-first tagging system instead of hashtags'
      ],
      audience: 'Close friend groups and families who want a private, intentional space to preserve and revisit shared experiences together.',
      metrics: [
        { value: '5.2', label: 'Avg. memories per user/week' },
        { value: '3.8K', label: 'Beta users' },
        { value: '67%', label: 'Week 4 retention' }
      ],
      screens: ['Timeline', 'Memory', 'Create', 'Shared']
    },

    'project-holos': {
      name: 'Holos',
      desc: 'Pickleball club management',
      color: '#1a1a1a',
      icon: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="white" stroke-width="1.5"/><path d="M8 6V18" stroke="white" stroke-width="1.5"/><path d="M16 6V18" stroke="white" stroke-width="1.5"/><path d="M3 12H21" stroke="white" stroke-width="1.5"/></svg>',
      overview: [
        'Holos is a club management tool designed specifically for the booming pickleball community. It handles court bookings, league management, member communications, and tournament brackets — all in one platform.',
        'Contracted design engagement with a sports-tech startup. I redesigned their existing MVP into a polished, scalable product that could support clubs of 50 to 5,000+ members.'
      ],
      context: 'Pickleball is the fastest-growing sport globally, but club management still runs on spreadsheets and WhatsApp groups. Holos brings modern SaaS tooling to recreational sports.',
      principles: [
        'Glanceable dashboards for club admins',
        'Mobile-first booking experience for members',
        'Smart scheduling that minimizes court idle time'
      ],
      audience: 'Pickleball club owners, recreational league organizers, and community center managers running regular play sessions and tournaments.',
      metrics: [
        { value: '24', label: 'Clubs onboarded' },
        { value: '85%', label: 'Booking utilization' },
        { value: '60%', label: 'Admin time saved' }
      ],
      screens: ['Dashboard', 'Courts', 'Members', 'Schedule']
    },

    'project-vybstk': {
      name: 'VYBSTK',
      desc: 'Interest-driven social platform',
      color: '#6C5CE7',
      icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 5L8 19L12 10L16 19L20 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      overview: [
        'VYBSTK (Vibe Stack) is an interest-driven social platform where users build and share curated collections of their favorite things — from music and films to restaurants and travel spots. Think Pinterest meets Letterboxd, but for everything.',
        'Product design lead for a 4-person founding team. I defined the core interaction patterns, visual identity, and design system during the pre-launch phase.'
      ],
      context: 'Mainstream social media rewards broadcasting, not genuine interest-sharing. VYBSTK creates a space where what you love defines your identity, not what you look like or how many followers you have.',
      principles: [
        'Collections over posts — structured curation as the core unit',
        'Taste-based discovery algorithm instead of popularity-based',
        'Visual consistency through a minimal, content-first layout'
      ],
      audience: 'Culture-curious millennials and Gen-Z who love discovering new music, movies, books, and places — and want a social layer built around taste and curation.',
      metrics: [
        { value: '8.4', label: 'Avg. collections per user' },
        { value: '6 min', label: 'Avg. session duration' },
        { value: '2.1K', label: 'Waitlist signups' }
      ],
      screens: ['Feed', 'Collection', 'Profile', 'Discover']
    },

    'project-athleads': {
      name: 'Athleads',
      desc: 'Athlete recruitment platform',
      color: '#2D3436',
      icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 4L14.5 9H9.5L12 4Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 9V20" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M7 14H17" stroke="white" stroke-width="1.5" stroke-linecap="round"/><path d="M8 17H16" stroke="white" stroke-width="1.5" stroke-linecap="round"/></svg>',
      overview: [
        'Athleads is a recruitment platform connecting amateur and semi-professional athletes with scouts, agents, and sports programs. It streamlines the traditionally opaque process of sports recruitment through verified profiles and highlight reels.',
        'End-to-end product design for a two-sided marketplace. I designed both the athlete-facing app and the scout dashboard, ensuring a cohesive experience across roles.'
      ],
      context: 'Talented athletes often get overlooked because they lack connections or visibility. Athleads democratizes recruitment by putting performance data and verified highlights in front of the right decision-makers.',
      principles: [
        'Data-rich athlete profiles that tell a complete story',
        'Video-first: highlight reels and game footage as primary content',
        'Trust layers: verification badges, coach endorsements, stat validation'
      ],
      audience: 'High school and college athletes seeking exposure, and scouts and coaches from university programs and semi-pro leagues looking for undiscovered talent.',
      metrics: [
        { value: '1.8K', label: 'Athlete profiles' },
        { value: '340', label: 'Active scouts' },
        { value: '23%', label: 'Response rate' }
      ],
      screens: ['Profile', 'Highlights', 'Scout View', 'Search']
    }
  };

  // --- Generate Case Study HTML ---
  function generateCaseStudyHTML(data) {
    return `
      <div class="sheet-content">
        <div class="cs-section">
          <div class="cs-section-header">
            <span class="cs-section-label">Overview</span>
            <div class="cs-section-line"></div>
          </div>
          ${data.overview.map(p => `<p class="cs-text">${p}</p>`).join('')}
        </div>

        <div class="cs-divider">···</div>

        <div class="cs-section">
          <div class="cs-section-header">
            <span class="cs-section-label">Approach</span>
            <div class="cs-section-line"></div>
          </div>

          <div class="cs-subsection">
            <div class="cs-subsection-label">Context</div>
            <p class="cs-text">${data.context}</p>
          </div>

          <div class="cs-subsection">
            <div class="cs-subsection-label">Principles</div>
            <ul class="cs-list">
              ${data.principles.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>

          <div class="cs-subsection">
            <div class="cs-subsection-label">Audience</div>
            <p class="cs-text">${data.audience}</p>
          </div>
        </div>

        <div class="cs-divider">···</div>

        <div class="cs-section">
          <div class="cs-section-header">
            <span class="cs-section-label">Screens</span>
            <div class="cs-section-line"></div>
          </div>
          <div class="cs-gallery">
            ${data.screens.map(screen => `
              <div class="cs-gallery-item">
                <span class="cs-gallery-placeholder">${screen}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="cs-section">
          <div class="cs-section-header">
            <span class="cs-section-label">Impact</span>
            <div class="cs-section-line"></div>
          </div>
          <div class="cs-metrics">
            ${data.metrics.map(m => `
              <div class="cs-metric">
                <div class="cs-metric-value">${m.value}</div>
                <div class="cs-metric-label">${m.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // --- Bottom Sheet Logic ---
  function setupBottomSheet() {
    const backdrop = document.getElementById('sheet-backdrop');
    const sheet = document.getElementById('sheet');
    const closeBtn = document.getElementById('sheet-close');
    const sheetIcon = document.getElementById('sheet-icon');
    const sheetName = document.getElementById('sheet-name');
    const sheetDesc = document.getElementById('sheet-desc');
    const sheetBody = document.getElementById('sheet-body');

    if (!backdrop || !sheet) return;

    function openSheet(id) {
      const data = caseStudies[id];
      if (!data) return;

      // Populate header
      sheetIcon.style.background = data.color;
      sheetIcon.innerHTML = data.icon;
      sheetName.textContent = data.name;
      sheetDesc.textContent = data.desc;

      // Populate body
      sheetBody.innerHTML = generateCaseStudyHTML(data);

      // Show
      requestAnimationFrame(() => {
        document.body.classList.add('sheet-open');
        backdrop.classList.add('active');
        sheet.classList.add('active');
        sheetBody.scrollTop = 0;
      });
    }

    function closeSheet() {
      backdrop.classList.remove('active');
      sheet.classList.remove('active');
      document.body.classList.remove('sheet-open');
    }

    // Close handlers
    closeBtn.addEventListener('click', closeSheet);
    backdrop.addEventListener('click', closeSheet);

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sheet.classList.contains('active')) {
        closeSheet();
      }
    });

    // Attach click handlers to all featured + project rows
    document.querySelectorAll('.list-row[id^="featured-"], .list-row[id^="project-"]').forEach((row) => {
      row.addEventListener('click', (e) => {
        e.preventDefault();
        openSheet(row.id);
      });
    });
  }

  // --- Live Clock ---
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    const hoursStr = String(hours).padStart(2, '0');

    const clockTime = document.getElementById('clock-time');
    const clockPeriod = document.getElementById('clock-period');

    if (clockTime) clockTime.textContent = `${hoursStr}:${minutes}:${seconds}`;
    if (clockPeriod) clockPeriod.textContent = period;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // --- Commit Graph ---
  function generateCommitGraph() {
    const container = document.getElementById('commit-graph');
    if (!container) return;

    const days = 30;
    const bars = [];

    for (let i = 0; i < days; i++) {
      const rand = Math.random();
      let height, level;

      if (rand < 0.4) {
        height = 3;
        level = 'none';
      } else if (rand < 0.7) {
        height = 6 + Math.random() * 10;
        level = 'active';
      } else {
        height = 14 + Math.random() * 22;
        level = 'active-high';
      }

      bars.push({ height, level });
    }

    bars.forEach((bar, index) => {
      const el = document.createElement('div');
      el.className = `commit-bar ${bar.level !== 'none' ? bar.level : ''}`;
      el.style.height = '3px';
      el.title = `Day ${index + 1}`;
      container.appendChild(el);

      setTimeout(() => {
        el.style.height = `${bar.height}px`;
      }, 50 + index * 20);
    });

    const commitCount = document.getElementById('commit-count');
    if (commitCount) {
      const total = bars.filter(b => b.level !== 'none').length;
      commitCount.textContent = `${total} commits`;
    }
  }

  // --- Init ---
  function init() {
    generateCommitGraph();
    setupScrollReveal();
    setupSmoothAnchors();
    setupBottomSheet();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // --- Scroll Reveal ---
  function setupScrollReveal() {
    const sections = document.querySelectorAll('.section');

    if (!('IntersectionObserver' in window)) {
      sections.forEach(s => s.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    sections.forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });
  }

  // --- Smooth Anchor Scrolling ---
  function setupSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        // Skip if it's a case study row (handled by bottom sheet)
        if (this.classList.contains('list-row')) return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
})();
