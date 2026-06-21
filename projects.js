/**
 * Projects — homepage grid + case studies.
 * Homepage: /thumbs/ (see thumbs/dimensions.txt).
 * Case-study stills: /stills/<project>/ (see stills/README.txt).
 * Use detail.body (plain) or detail.bodyHTML (for links; recognition, etc.)
 * Project title: use the top H1 only (all caps via CSS, not bold). In bodyHTML: p.case-study-line
 * for each award/recognition/press line (one block per line), then
 * p.case-study-sect: <i>Insight</i> / <i>Idea</i> / <i>Objective</i> (italic section labels, not h1–h3).
 * Optional: detail.stageHeading — short label above the hero player (e.g. Dolby Atmos®).
 * Optional: detail.railHTML — HTML in the right column below stills (e.g. extra Vimeo embeds).
 * Optional: detail.audioPlaylist — [{ file, label }] for MP3s in /audio/; native playlist UI (replaces railHTML when set).
 * Optional on vimeo media: h — privacy token from Vimeo Share → Embed (?h=…) if the player errors but the vimeo.com URL works in a tab.
 * Optional: detail.stillsLabel — set to false to hide the “Stills” heading, or a string to replace it.
 * Optional: detail.mediaImageObjectFit — e.g. "contain" for image-only stage slideshows (full image visible in 16:9 frame).
 * Optional: detail.media item type "video" with src (+ optional poster) for local MP4 in the hero carousel.
 * Optional: detail.printLayout — [{ title, slides: [{type,src,alt,?poster,?url,?h}], carousel?: boolean }]; renders stacked singles or local carousels (empty detail.media).
 * Optional stills row: { section: "SITE" } or { subSection: "References" } (headings, no image).
 * Or { vimeo: "https://vimeo.com/…", vimeoTitle?: "…" } for an embed in the stills column.
 * Optional: onlyInView — e.g. "ai": tile appears only when that workspace filter is active (hidden from All and other tabs).
 * Optional: detail.passwordPhrase — viewer must submit this text (phrase match, case-insensitive) to see the page; persists for session in sessionStorage.
 */
const PORTFOLIO_PROJECTS = [
  {
    id: "2",
    slug: "honda-dream-generator",
    title: "Honda Dream Generator",
    thumb: "stills/honda-dream-generator/1_site.png",
    cardTags: "ai, interactive",
    tags: ["ai", "tech"],
    vimeo: "https://vimeo.com/935982647",
    detail: {
      bodyHTML:
        '<p class="case-study-line">Shorty Awards × 2</p>' +
        '<p class="case-study-line">Gold — Animation</p>' +
        '<p class="case-study-line">Silver — Automotive</p>' +
        '<p class="case-study-line">ADDYs — Silver, Innovation in Interactive</p>' +
        '<p class="case-study-line">The One Show — Finalist</p>' +
        '<p class="case-study-line"><a href="https://adage.com/article/marketing-news-strategy/honda-offers-ai-generated-create-your-own-adventure-videos-around-new-suv/2546561" target="_blank" rel="noopener noreferrer">Ad Age</a></p>' +
        '<p class="case-study-line"><a href="https://finance.yahoo.com/news/honda-leverages-ai-dream-generator-090000510.html" target="_blank" rel="noopener noreferrer">Marketing Dive</a></p>' +
        '<p class="case-study-line"><a href="https://shortyawards.com/17th/amazon-honda-dream-generator" target="_blank" rel="noopener noreferrer">Shorty Awards</a></p>' +
        '<p class="case-study-line"><a href="https://www.lovethework.com/work-awards/campaigns/honda-dream-generator-1618272" target="_blank" rel="noopener noreferrer">Cannes Love The Work</a></p>' +
        '<p class="case-study-line"><a href="https://www.designrush.com/news/honda-and-amazon-ads-team-up-to-create-dream-generator" target="_blank" rel="noopener noreferrer">Design Rush</a></p>' +
        '<p class="case-study-line"><a href="https://thedrumawards.com/live/en/page/content-results" target="_blank" rel="noopener noreferrer">The Drum Awards</a></p>' +
        '<p class="case-study-line"><a href="https://www.aaflosangeles.org/2025-winners-list" target="_blank" rel="noopener noreferrer">AAF LA</a></p>' +
        "<p>For many families, EVs feel complicated and unapproachable. So we created Dream Generator&mdash;an AI-powered Fire TV and web experience that showed how the Honda Prologue is perfect for any family adventure they can dream up.</p>" +
        "<p>Families choose where they want to go, who they want to bring, and what they want to pack. Then a hybrid AI-and-human artist workflow turns their inputs into a custom two-minute animated dream film&mdash;sending them on a fantastic voyage made possible by the Prologue&rsquo;s cargo space, smart tech, and instant torque.</p>" +
        "<p>And because every family is different, so is every Dream Generator adventure&mdash;with nearly 200 unique films demonstrating the full versatility of the Prologue.</p>" +
        '<p class="case-study-sect"><i>Results</i></p>' +
        "<p>247MM impressions in the first 18 days</p>" +
        "<p>$72.5MM in earned media</p>" +
        "<p>+70% engagement rates</p>" +
        "<p>20,000+ personalized films created</p>" +
        "<p>7.4x increase in Honda EV ad awareness</p>" +
        "<p>+39% perception of Honda as family-friendly</p>" +
        '<p class="case-study-sect"><i>The Tech</i></p>' +
        "<p>A hybrid production pipeline combined hand-drawn illustration, animation, motion design, AI engineering, and development. Every source image was artist-created and fully cleared&mdash;proving AI can amplify artists rather than replace them.</p>" +
        '<p class="case-study-sect"><i>Dream Generator</i></p>' +
        '<p class="case-study-line"><a href="https://www.amazon.com/stores/page/B09BCB6F-45BF-44F8-92BE-7405CBE00568" target="_blank" rel="noopener noreferrer">Experience</a></p>',
      media: [{ type: "vimeo", url: "https://vimeo.com/935982647" }],
      stillsLabel: false,
      stills: [
        { section: "PLATFORM" },
        { src: "stills/honda-dream-generator/1_site.png", alt: "Honda Dream Generator — site 1" },
        { src: "stills/honda-dream-generator/2_site.jpeg", alt: "Honda Dream Generator — site 2" },
        { subSection: "Custom film" },
        {
          vimeo: "https://vimeo.com/936004671",
          vimeoTitle: "Honda Dream Generator | Space",
        },
        { src: "stills/honda-dream-generator/2_user.png", alt: "Honda Dream Generator — user" },
        { src: "stills/honda-dream-generator/3_site.png", alt: "Honda Dream Generator — site 3" },
        { section: "LORA TRAINING" },
        { src: "stills/honda-dream-generator/1_training.jpeg", alt: "Honda Dream Generator — training 1" },
        { src: "stills/honda-dream-generator/2_training.jpg", alt: "Honda Dream Generator — training 2" },
        { src: "stills/honda-dream-generator/3_training.png", alt: "Honda Dream Generator — training 3" },
        { section: "ControlNet + references" },
        { src: "stills/honda-dream-generator/1_controlnet+references.gif", alt: "Honda Dream Generator — ControlNet references 1" },
        { src: "stills/honda-dream-generator/2_controlnet+references.gif", alt: "Honda Dream Generator — ControlNet references 2" },
        { src: "stills/honda-dream-generator/3_controlnet+references.gif", alt: "Honda Dream Generator — ControlNet references 3" },
        { subSection: "ControlNet" },
        { src: "stills/honda-dream-generator/1_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet 1" },
        { src: "stills/honda-dream-generator/2_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet 2" },
        { src: "stills/honda-dream-generator/3_controlnet+loras.jpeg", alt: "Honda Dream Generator — ControlNet 3" },
        { src: "stills/honda-dream-generator/4_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet 4" },
        { src: "stills/honda-dream-generator/5_controlnet+loras.png", alt: "Honda Dream Generator — ControlNet 5" },
        { src: "stills/honda-dream-generator/6_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet 6" },
        { src: "stills/honda-dream-generator/7_controlnet+loras.png", alt: "Honda Dream Generator — ControlNet 7" },
        { src: "stills/honda-dream-generator/8_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet 8" },
        { src: "stills/honda-dream-generator/9_controlnet+loras.jpeg", alt: "Honda Dream Generator — ControlNet 9" },
        { src: "stills/honda-dream-generator/10_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet 10" },
        { src: "stills/honda-dream-generator/11_controlnet+loras.png", alt: "Honda Dream Generator — ControlNet 11" },
        { src: "stills/honda-dream-generator/12_controlnet+loras.gif", alt: "Honda Dream Generator — ControlNet 12" },
        { section: "Case study board" },
        { src: "stills/honda-dream-generator/1_case_study_board.webp", alt: "Honda Dream Generator — case study board" },
      ],
    },
  },
  {
    id: "fbm",
    slug: "fbm",
    title: "FBM | Pros Know",
    thumb: "thumbs/fbm.png",
    cardTags: "integrated, broadcast, ai",
    tags: ["general", "ai"],
    vimeo: "https://vimeo.com/1201326366/cf1e94f8c3",
    detail: {
      bodyHTML:
        "<p>Big construction pros know that Foundation Building Materials delivers pro-grade materials.</p>" +
        "<p>So when FBM decided to open their doors to smaller crews, they needed to introduce themselves in a way that separated them from the big-box stores.</p>" +
        "<p>So we built a campaign using the language of the job site. We made it look pro-grade too, using real job-site reference images and AI to create an always-moving energy every pro could relate to.</p>" +
        "<p>All for a seriously tight budget any GC would appreciate.</p>",
      media: [
        {
          type: "vimeo",
          url: "https://vimeo.com/1201326366/cf1e94f8c3",
          alt: "FBM — Pros Know video 1",
        },
        {
          type: "vimeo",
          url: "https://vimeo.com/1201329155/39cbe4289c",
          alt: "FBM — Pros Know video 2",
        },
        {
          type: "vimeo",
          url: "https://vimeo.com/1201328071/da5965ddb1",
          alt: "FBM — Pros Know video 3",
        },
      ],
      stillsLabel: false,
      stills: [
        { section: "OOH" },
        { src: "stills/fbm/1_ooh.jpg", alt: "FBM — out-of-home 1" },
        { src: "stills/fbm/2_ooh.jpg", alt: "FBM — out-of-home 2" },
        { src: "stills/fbm/3_ooh_busbench.jpg", alt: "FBM — bus bench 1", size: "half" },
        { src: "stills/fbm/4_ooh_busbench.jpg", alt: "FBM — bus bench 2", size: "half" },
      ],
      railHTML:
        '<p class="project-rail-h project-rail-h--banners">Banners</p>' +
        '<div class="project-banner" data-banner-src="FBM/4_Banners/1_FBM300x250_PROSKNOW_AWARENESS_300x250/FBM300x250_PROSKNOW_AWARENESS_300x250.html">' +
        '<div class="project-embed project-banner__frame"><div class="project-embed__inner project-embed__inner--banner">' +
        '<iframe title="FBM — Pros Know awareness banner"></iframe>' +
        '<button type="button" class="project-banner__play" aria-label="Play Pros Know awareness banner"><span class="project-banner__play-icon" aria-hidden="true">▶</span><span class="project-banner__play-label">Play</span></button></div></div></div>' +
        '<div class="project-banner" data-banner-src="FBM/4_Banners/2_FBM_2026_ProsKnow_Conversion_SameDayPickup_AnimatedDisplay_300x250/FBM_2026_ProsKnow_Conversion_SameDayPickup_AnimatedDisplay_300x250.html">' +
        '<div class="project-embed project-banner__frame"><div class="project-embed__inner project-embed__inner--banner">' +
        '<iframe title="FBM — same-day pickup banner"></iframe>' +
        '<button type="button" class="project-banner__play" aria-label="Play same-day pickup banner"><span class="project-banner__play-icon" aria-hidden="true">▶</span><span class="project-banner__play-label">Play</span></button></div></div></div>' +
        '<div class="project-banner" data-banner-src="FBM/4_Banners/3_300x250_FORKLIFT2_CONSIDERATION/300x250_FORKLIFT2_CONSIDERATION.html">' +
        '<div class="project-embed project-banner__frame"><div class="project-embed__inner project-embed__inner--banner">' +
        '<iframe title="FBM — forklift consideration banner"></iframe>' +
        '<button type="button" class="project-banner__play" aria-label="Play forklift consideration banner"><span class="project-banner__play-icon" aria-hidden="true">▶</span><span class="project-banner__play-label">Play</span></button></div></div></div>' +
        '<p class="project-rail-h">Radio</p>' +
        '<div class="project-rail__figure project-rail__figure--audio">' +
        '<p class="project-audio__caption">:30 broadcast mix</p>' +
        '<audio controls preload="metadata" src="FBM/2_Audio/FBM_ProsKnow30_05_21_26_BROADCAST_MIX.wav"></audio></div>' +
        '<div class="project-rail__figure project-rail__figure--audio">' +
        '<p class="project-audio__caption">:20 broadcast mix</p>' +
        '<audio controls preload="metadata" src="FBM/2_Audio/FBM_ProsKnow20_05_21_26_BROADCAST_MIX.wav"></audio></div>',
    },
  },
  {
    id: "4",
    slug: "lexus-gamers-is",
    title: "Lexus | Gamers' IS",
    thumb: "thumbs/gamers_is.webp",
    cardTags: "technology, film, twitch",
    tags: ["tech", "general"],
    vimeo: "https://vimeo.com/670863804",
    detail: {
      bodyHTML:
        '<p class="case-study-line"><a href="https://winners.webbyawards.com/2022/ai-immersive-games/games-features/best-real-time-experience/211748/twitch-x-lexus-the-ultimate-gamers-is" target="_blank" rel="noopener noreferrer">The Webby Awards</a></p>' +
        '<p class="case-study-line"><a href="https://adage.com/article/cmo-strategy/lexus-made-car-just-gamers/2315656" target="_blank" rel="noopener noreferrer">Ad Age</a></p>' +
        '<p class="case-study-line"><a href="https://www.marketingdive.com/news/lexus-crowdsources-gamer-ready-car-design-on-twitch/593363/" target="_blank" rel="noopener noreferrer">Marketing Dive</a></p>' +
        '<p class="case-study-line"><a href="https://www.theweek.co.uk/952049/lexus-gamers-is-the-ultimate-gaming-space" target="_blank" rel="noopener noreferrer">The Week</a></p>' +
        '<p class="case-study-line"><a href="https://www.caranddriver.com/news/a35562123/2021-lexus-is350-f-sport-twitch-gaming-pc/" target="_blank" rel="noopener noreferrer">Car and Driver</a></p>' +
        '<p class="case-study-line"><a href="https://www.cnet.com/roadshow/news/twitch-gamers-mod-lexus-rgb-lights/" target="_blank" rel="noopener noreferrer">CNET</a></p>' +
        '<p class="case-study-line"><a href="https://hypebeast.com/2021/2/lexus-twitch-gamers-is-2021-lexus-is-all-in-campaign-announcement" target="_blank" rel="noopener noreferrer">Hypebeast</a></p>' +
        '<p class="case-study-line"><a href="https://www.ballerstatus.com/2021/02/18/lexus-partners-with-twitch-to-create-ultimate-gamers-is-350/" target="_blank" rel="noopener noreferrer">BallerStatus</a></p>' +
        "<p>How do you get gamers to consider the Lexus IS? Definitely not by making a commercial.</p>" +
        "<p>Instead, we stoked their obsession by inviting them to help build the world&rsquo;s first 150 MPH mobile gaming space: Gamers&rsquo; IS.</p>" +
        "<p>With gaming influencer Fuslie, this two-part Twitch livestream event let fans vote on how to create the ultimate gaming cabin&mdash;then turned their dream build into a real, road-ready Lexus IS.</p>" +
        "<p>The result: a livestream reveal, gamer-approved details, and a campaign that helped drive a 178% spike in IS sales&mdash;and helped push the Lexus IS to become the #2 top-selling car in the U.S. And Twitch&rsquo;s CEO called our initiative &ldquo;the model for marketers.&rdquo;</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/670863804" }],
      stillsLabel: false,
      stills: [
        { section: "BUILD" },
        {
          vimeo: "https://vimeo.com/526328758",
          vimeoTitle: "Gamers' IS — build",
        },
        { src: "stills/lexus-gamers-is/1_build.jpg", alt: "Gamers' IS — build 1" },
        { src: "stills/lexus-gamers-is/2_build.jpg", alt: "Gamers' IS — build 2" },
        { src: "stills/lexus-gamers-is/3_build.jpg", alt: "Gamers' IS — build 3" },
        { src: "stills/lexus-gamers-is/4_build.png", alt: "Gamers' IS — build 4" },
        { src: "stills/lexus-gamers-is/5_build.png", alt: "Gamers' IS — build 5" },
        { section: "SOCIAL" },
        { src: "stills/lexus-gamers-is/1.png", alt: "Gamers' IS 1" },
        { src: "stills/lexus-gamers-is/2.png", alt: "Gamers' IS 2" },
        { src: "stills/lexus-gamers-is/3.png", alt: "Gamers' IS 3" },
        { src: "stills/lexus-gamers-is/4.png", alt: "Gamers' IS 4" },
        { src: "stills/lexus-gamers-is/5.gif", alt: "Gamers' IS 5" },
      ],
      railHTML:
        '<p class="project-rail-h">LIVESTREAM</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/526343448?title=0&byline=0&portrait=0" title="Gamers\' IS — livestream recap" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>',
    },
  },
  {
    id: "1",
    slug: "honda",
    title: "Honda | Keep Dreaming",
    thumb: "thumbs/keep_dreaming.webp",
    cardTags: "broadcast",
    tags: ["general"],
    vimeo: "https://vimeo.com/884917302",
    detail: {
      bodyHTML:
        '<p class="case-study-line"><a href="https://adage.com/creativity/work/keep-dreaming/2533811/" target="_blank" rel="noopener noreferrer">Ad Age</a></p>' +
        '<p class="case-study-line"><a href="https://www.adforum.com/creative-work/ad/player/34686990/keep-dreaming/honda" target="_blank" rel="noopener noreferrer">AdForum — Honda &ldquo;Keep Dreaming&rdquo;</a></p>' +
        "<p class=\"case-study-line\">Ads of the World</p>" +
        "<p class=\"case-study-line\">LA Addy Awards: Gold</p>" +
        "<p>When Honda announced its goal to be carbon neutral by 2050, skeptics could have said, &ldquo;Keep dreaming.&rdquo;</p>" +
        "<p>So we leaned into that.</p>" +
        "<p>Working with Smith &amp; Foulkes, we created a spiraling first-person journey through Honda&rsquo;s past, present, and future breakthroughs in lower-emissions innovation. Blending CG, miniatures, animation, illustration, green screen, CAD and AI.</p>" +
        "<p>All to prove one thing:</p>" +
        "<p>To achieve something as ambitious as carbon neutrality, you have to keep dreaming.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/884917302" }],
      stills: [
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0000_Layer+Comp+1.webp", alt: "Honda Keep Dreaming prologue 1" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0001_Layer+Comp+2.webp", alt: "Honda Keep Dreaming prologue 2" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0002_Layer+Comp+3.webp", alt: "Honda Keep Dreaming prologue 3" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0003_Layer+Comp+4.webp", alt: "Honda Keep Dreaming prologue 4" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0004_Layer+Comp+5.webp", alt: "Honda Keep Dreaming prologue 5" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0005_Layer+Comp+6.webp", alt: "Honda Keep Dreaming prologue 6" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0006_Layer+Comp+7.webp", alt: "Honda Keep Dreaming prologue 7" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0007_Layer+Comp+8.webp", alt: "Honda Keep Dreaming prologue 8" },
        { src: "stills/honda/PROLOGUE_SCREENGRAB_0008_Layer+Comp+9.webp", alt: "Honda Keep Dreaming prologue 9" },
      ],
      stillsLabel: false,
    },
  },
  {
    id: "5",
    slug: "grammys",
    title: "GRAMMYs | Music is life is music",
    thumb: "thumbs/grammys.webp",
    cardTags: "integrated",
    tags: ["general"],
    vimeo: "https://vimeo.com/20124076",
    detail: {
      bodyHTML:
        '<p class="case-study-line"><a href="http://www.graphis.com/entry/c2ad319e-4b31-11e2-a2c9-f23c91dffdec/" target="_blank" rel="noopener noreferrer">Graphis</a></p>' +
        '<p class="case-study-line"><a href="http://thefwa.com/shortlist/music-is-life-is-music" target="_blank" rel="noopener noreferrer">The FWA</a></p>' +
        '<p class="case-study-line"><a href="http://www.commarts.com/exhibit/musicislifeismusic.html" target="_blank" rel="noopener noreferrer">Communications Arts Exhibit</a></p>' +
        "<p class=\"case-study-line\">D&amp;AD Pencil</p>" +
        "<p class=\"case-study-line\">Webby Awards</p>" +
        "<p>How do we reignite one's love of music and the GRAMMYs?</p>" +
        "<p>By letting them share the soundtrack of their lives.</p>" +
        "<p>We built a platform where users tagged songs to places and memories—allowing them to create their own audiobiographies.</p>" +
        "<p>I helped concept and write the site, app, TV, and more—from recording Katy Perry in the basement of Staples Center to recording Samuel L. Jackson at CBS.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/20124076" }],
      stills: [],
      railHTML:
        '<p class="project-rail-h">Platform</p>' +
        '<div class="project-rail__figure"><img src="stills/grammys/1.png" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs platform 1" /></div>' +
        '<div class="project-rail__figure"><img src="stills/grammys/2.gif" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs platform 2" /></div>' +
        '<p class="project-rail-h">Broadcast</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20124364?title=0&byline=0&portrait=0" title="Music Is Life Is Music — Eminem promo" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20124575?title=0&byline=0&portrait=0" title="Music Is Life Is Music — Cee Lo Green" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">Katy Perry app demo</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20124183?title=0&byline=0&portrait=0" title="App demo" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">Posters</p>' +
        '<div class="project-rail__figure"><img src="stills/grammys/3.webp" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs poster 1" /></div>' +
        '<div class="project-rail__figure"><img src="stills/grammys/4.webp" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs poster 2" /></div>' +
        '<div class="project-rail__figure"><img src="stills/grammys/5.webp" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs poster 3" /></div>' +
        '<div class="project-rail__figure"><img src="stills/grammys/6.webp" width="1600" height="900" loading="lazy" decoding="async" alt="GRAMMYs poster 4" /></div>',
    },
  },
  {
    id: "6",
    slug: "lexus-driving-disrupted",
    title: "Lexus | Driving Disrupted",
    thumb: "thumbs/driving_disrupted.webp",
    cardTags: "technology, film, stunt",
    tags: ["tech"],
    vimeo: "",
    detail: {
      bodyHTML:
        '<p class="case-study-line"><a href="https://www.adsoftheworld.com/campaigns/driving-disrupted" target="_blank" rel="noopener noreferrer">Ads of the World</a></p>' +
        '<p class="case-study-line">MediaPost</p>' +
        "<p class=\"case-study-line\">Car and Driver</p>" +
        '<p class="case-study-line"><a href="https://www.luxurydaily.com/lexus-driving-disrupted/" target="_blank" rel="noopener noreferrer">Luxury Daily</a></p>' +
        '<p class="case-study-line"><a href="https://www.jalopnik.com/the-lexus-nx-4-6-is-like-beer-goggles-for-distracted-dr-1846661064/" target="_blank" rel="noopener noreferrer">Jalopnik</a></p>' +
        '<p class="case-study-line"><a href="https://www.the360mag.com/tag/driving-safety/" target="_blank" rel="noopener noreferrer">360 Magazine</a></p>' +
        "<p>4.6 seconds is the average amount of time a text takes our eyes off the road.</p>" +
        "<p>So to show how just distracting texting while driving can be, we used SmartTint technology to blackout the windshield of a Lexus NX for 4.6 seconds.</p>" +
        "<p>Then we set drivers loose on a closed course filled with moving foam obstacles&mdash;unaware their vision would suddenly disappear.</p>" +
        "<p>The results were destructive.</p>" +
        "<p>Especially to perceptions of texting while driving.</p>" +
        "<p>The film also shattered expectations, earning 224.7MM media impressions with coverage across marketing, automotive, and lifestyle outlets including MediaPost, Car and Driver, Luxury Daily, Jalopnik, and 360 Magazine.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/716637087" }],
      stillsLabel: false,
      stills: [
        { src: "stills/lexus-driving-disrupted/1a.png", alt: "Lexus | Driving Disrupted — 1" },
        { src: "stills/lexus-driving-disrupted/1b.png", alt: "Lexus | Driving Disrupted — 2" },
        { src: "stills/lexus-driving-disrupted/1c.png", alt: "Lexus | Driving Disrupted — 3" },
        { src: "stills/lexus-driving-disrupted/2b.png", alt: "Lexus | Driving Disrupted — 4" },
        { src: "stills/lexus-driving-disrupted/3.png", alt: "Lexus | Driving Disrupted — 5" },
        { src: "stills/lexus-driving-disrupted/4.png", alt: "Lexus | Driving Disrupted — 6" },
        { src: "stills/lexus-driving-disrupted/5.png", alt: "Lexus | Driving Disrupted — 7" },
        { src: "stills/lexus-driving-disrupted/5b.png", alt: "Lexus | Driving Disrupted — 8" },
        { src: "stills/lexus-driving-disrupted/6a.png", alt: "Lexus | Driving Disrupted — 9" },
        { src: "stills/lexus-driving-disrupted/6b.png", alt: "Lexus | Driving Disrupted — 10" },
        { src: "stills/lexus-driving-disrupted/7a.png", alt: "Lexus | Driving Disrupted — 11" },
        { src: "stills/lexus-driving-disrupted/7b.png", alt: "Lexus | Driving Disrupted — 12" },
        { src: "stills/lexus-driving-disrupted/8.png", alt: "Lexus | Driving Disrupted — 13" },
        { src: "stills/lexus-driving-disrupted/9.png", alt: "Lexus | Driving Disrupted — 14" },
        { src: "stills/lexus-driving-disrupted/10.png", alt: "Lexus | Driving Disrupted — 15" },
        { src: "stills/lexus-driving-disrupted/11.png", alt: "Lexus | Driving Disrupted — 16" },
      ],
    },
  },
  {
    id: "7",
    slug: "lexus-is-wax",
    title: "Lexus | IS Wax",
    thumb: "thumbs/lexus_is_wax.webp",
    cardTags: "technology, pitchfork, wired",
    tags: ["tech", "general"],
    vimeo: "https://vimeo.com/670864058",
    detail: {
      bodyHTML:
        "<p class=\"case-study-line\">Clio Awards — Bronze, Public Relations</p>" +
        "<p class=\"case-study-line\">The One Show — Shortlist</p>" +
        "<p>Audiophiles are a subculture we wanted to reach with the Lexus IS.</p>" +
        "<p>So we teamed up with Pitchfork, Madlib, and Kaytranada to do something no one had done in 40 years:</p>" +
        "<p>Put a working turntable in a car.</p>" +
        "<p>Fun fact: it didn’t skip—even over bumps.</p>" +
        "<p>The result: a sport sedan that felt unexpected, analog, and alive—and helped push the IS to become the #2 top-selling car in the U.S.</p>" +
        "<p>Featured in Pitchfork, Wired, Uncrate, Hypebeast, Car and Driver, Motor1, MotorTrend, and Jalopnik.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/670864058" }],
      stills: [],
      railHTML:
        '<p class="project-rail-h">Documentary</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/526462857?title=0&byline=0&portrait=0" title="Lexus IS Wax — documentary" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">Wired photo essay</p>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/1_wired_essay.png" width="1600" height="900" loading="lazy" decoding="async" alt="Wired photo essay" /></div>' +
        '<p class="project-rail__linkline"><a href="https://www.wired.com/sponsored/story/creating-a-vinyl-record-player-system-for-a-car/" target="_blank" rel="noopener noreferrer">Creating a vinyl record player system for a car — WIRED</a></p>' +
        '<p class="project-rail-h">Build demo</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/502303302?title=0&byline=0&portrait=0" title="Lexus IS Wax — build demo" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">X</p>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/1_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — X 1" /></div>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/2_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — X 2" /></div>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/3_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — X 3" /></div>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/4_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — X 4" /></div>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/5_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — X 5" /></div>' +
        '<div class="project-rail__figure"><img src="stills/lexus-is-wax/6_twitter.png" width="1600" height="900" loading="lazy" decoding="async" alt="Lexus IS Wax — X 6" /></div>',
    },
  },
  {
    id: "8",
    slug: "engineered-for-fun",
    title: "Engineered For Fun",
    thumb: "thumbs/engineered_for_fun.webp",
    cardTags: "ai, film, facial expression analysis",
    tags: ["ai", "tech"],
    vimeo: "https://vimeo.com/1171127200",
    detail: {
      bodyHTML:
        "<p>When the next-generation Honda Prelude launched, enthusiasts questioned whether it could live up to its legacy of fun.</p>" +
        "<p>So we set out to prove it&mdash;scientifically.</p>" +
        "<p>We built an AI facial-expression analysis system to capture real emotional reactions from drivers on a closed course.</p>" +
        "<p>The science confirmed it: the Prelude is hella fun.</p>" +
        "<p>The client loved it too. According to Ace Metrix, the ad ranked in the top 1% of all Tier 1 automotive ads that year&mdash;and in the 99th percentile of all automotive ads ever tested.</p>" +
        '<p class="case-study-sect"><i>Production Note</i></p>' +
        "<p>We pulled it off on an insanely limited budget, entirely in-house. My VP/CD Sarah May Bates directed the film, and I led the facial-expression analysis, using MorphCast and OpenAI to assess and quantify the emotion metrics.</p>" +
        "<p>I can&rsquo;t share the exact budget number. But if I did, your facial-expression analysis would register 98% disbelief.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/1171127200" }],
      stillsLabel: false,
      stills: [
        { section: "FACIAL EXPRESSION ANALYSIS" },
        { src: "stills/engineered-for-fun/1_analysis.png", alt: "Engineered For Fun — analysis 1" },
        { src: "stills/engineered-for-fun/2_analysis.png", alt: "Engineered For Fun — analysis 2" },
      ],
    },
  },
  {
    id: "9",
    slug: "microsoft",
    title: "Microsoft | Zune Arts",
    thumb: "thumbs/microsoft.webp",
    cardTags: "film, digital",
    tags: ["general"],
    vimeo: "https://vimeo.com/1186435131",
    detail: {
      bodyHTML:
        '<p class="case-study-line"><a href="https://adage.com/creativity/work/zune-arts/2960" target="_blank" rel="noopener noreferrer">Ad Age</a></p>' +
        '<p class="case-study-line"><a href="http://www.aicpshow.com/show/masks/" target="_blank" rel="noopener noreferrer">AICP</a></p>' +
        '<p class="case-study-line"><a href="http://www.annecy.org/about/archives/2008/official-selection/film-index:f20080749" target="_blank" rel="noopener noreferrer">Annecy Finalist</a></p>' +
        '<p class="case-study-line"><a href="http://www.commarts.com/fresh/72andsunny.html" target="_blank" rel="noopener noreferrer">Communication Arts</a></p>' +
        '<p class="case-study-line"><a href="http://creativity-online.com/work/zune-laika/2551" target="_blank" rel="noopener noreferrer">Creativity</a></p>' +
        "<p class=\"case-study-line\">MoMA</p>" +
        "<p class=\"case-study-line\">One Show</p>" +
        "<p>The Zune music player let people share music wirelessly—pretty radical at the time.</p>" +
        "<p>To drive awareness, my partner and I led an artist program centered on sharing and friendship—collaborating and concepting with culture-shaping artists including Steve Niles and FriendsWithYou.</p>" +
        "<p>Intense, challenging, and one of the most rewarding projects I’ve worked on.</p>",
      media: [
        { type: "vimeo", url: "https://vimeo.com/1186435131", alt: "Zune Arts — case study" },
        { type: "vimeo", url: "https://vimeo.com/19449868", alt: "Zune Arts — Laika" },
        { type: "vimeo", url: "https://vimeo.com/19539791", alt: "Zune Arts — Le Cadeau du Temps" },
        { type: "vimeo", url: "https://vimeo.com/19445552", alt: "Zune Arts — Piece of Me, Piece of You" },
      ],
      stills: [
        { section: "PLATFORM" },
        { src: "stills/microsoft/1_site.png", alt: "Zune Arts — site" },
      ],
      stillsLabel: false,
      railHTML:
        '<p class="project-rail-h">Graphic novel</p>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/1_graphic_novel.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="The Lost Ones graphic novel 1" /></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/2_graphic_novel.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="The Lost Ones graphic novel 2" /></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/3_graphic_novel.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="The Lost Ones graphic novel 3" /></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/4_graphic_novel.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="The Lost Ones graphic novel 4" /></div>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20121977?title=0&byline=0&portrait=0" title="The Lost Ones — graphic novel trailer" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://player.vimeo.com/video/20121995?title=0&byline=0&portrait=0" title="The Lost Ones — behind the scenes" ' +
        'allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div>' +
        '<p class="project-rail-h">Promos</p>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/1_promo.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="Zune Arts promo 1" /></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/2_promos.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="Zune Arts promo 2" /></div>' +
        '<div class="project-rail__figure"><img src="stills/microsoft/3_promos.jpg" width="1600" height="900" loading="lazy" decoding="async" alt="Zune Arts promo 3" /></div>',
    },
  },
  {
    id: "14",
    slug: "lexus-immersive-sonic-challenge",
    title: "Lexus | Immersive Sonic Challenge",
    thumb: "thumbs/lexus_immersive_sonic.webp",
    cardTags: "experiential",
    tags: ["general", "tech"],
    vimeo: "https://vimeo.com/1186849107",
    detail: {
      bodyHTML:
        '<p class="case-study-line"><a href="https://www.adsoftheworld.com/campaigns/immersive-sonic-challenge" target="_blank" rel="noopener noreferrer">Ads of the World</a></p>' +
        "<p>The Lexus LC 500 is a naturally aspirated 5.0-liter V8-powered beast.</p>" +
        "<p>However, when people think Lexus, they don&rsquo;t always think high-performance. So we set out to change their perception with a groundbreaking, hyper-real 9.1 sonic experience.</p>" +
        "<p>We went to SEMA and challenged &ldquo;car people&rdquo; to identify a car based only on the sound of its exhaust note.</p>" +
        "<p>Some guessed Lamborghini.<br>Others guessed Ferrari, Maserati, or Porsche.</p>" +
        "<p>Then we revealed the beastly growl they just heard came from the Lexus LC 500.</p>" +
        "<p>Minds&mdash;and ears&mdash;were blown.</p>" +
        "<p>We then took the experience to theaters, creating the first-ever North American in-cinema ad mixed for Atmos.</p>" +
        "<p>The result: a wave of enthusiast press that helped shift perceptions on Lexus performance.</p>",
      media: [
        { type: "vimeo", url: "https://vimeo.com/1186849107", alt: "Lexus — Immersive Sonic Challenge, case study" },
      ],
      stillsLabel: false,
      stills: [
        { section: "Dolby Atmos® Cinema Ad" },
        {
          vimeo: "https://vimeo.com/222100963",
          vimeoTitle: "Lexus — Atmos cinema ad",
        },
        { section: "Experience" },
        { src: "stills/lexus-immersive-sonic-challenge/1.png", alt: "Immersive Sonic Challenge 1" },
        { src: "stills/lexus-immersive-sonic-challenge/2.gif", alt: "Immersive Sonic Challenge 2" },
        { src: "stills/lexus-immersive-sonic-challenge/3.gif", alt: "Immersive Sonic Challenge 3" },
        { src: "stills/lexus-immersive-sonic-challenge/4.jpg", alt: "Immersive Sonic Challenge 4" },
        { src: "stills/lexus-immersive-sonic-challenge/5.png", alt: "Immersive Sonic Challenge 5" },
        { section: "Press" },
        { src: "stills/lexus-immersive-sonic-challenge/1_press.png", alt: "Immersive Sonic — press 1" },
        { src: "stills/lexus-immersive-sonic-challenge/2_press.png", alt: "Immersive Sonic — press 2" },
        { src: "stills/lexus-immersive-sonic-challenge/3_press.png", alt: "Immersive Sonic — press 3" },
        { src: "stills/lexus-immersive-sonic-challenge/4_press.png", alt: "Immersive Sonic — press 4" },
        { src: "stills/lexus-immersive-sonic-challenge/5_press.png", alt: "Immersive Sonic — press 5" },
        { src: "stills/lexus-immersive-sonic-challenge/6_press.png", alt: "Immersive Sonic — press 6" },
        { src: "stills/lexus-immersive-sonic-challenge/7_press.png", alt: "Immersive Sonic — press 7" },
        { src: "stills/lexus-immersive-sonic-challenge/8_press.png", alt: "Immersive Sonic — press 8" },
        { src: "stills/lexus-immersive-sonic-challenge/9_press.png", alt: "Immersive Sonic — press 9" },
      ],
    },
  },
  {
    id: "3",
    slug: "the-dream-phone",
    title: "The Dream Phone",
    thumb: "thumbs/dream_phone.webp",
    cardTags: "ai, hacking, pi, code",
    tags: ["ai", "tech"],
    vimeo: "https://vimeo.com/1195174907",
    detail: {
      bodyHTML:
        "<p>Visionaries like Steve Jobs, Soichiro Honda, and John Lennon once inspired the world.</p>" +
        "<p>What if their voices could return—so convincingly, they inspire you all over again?</p>" +
        "<p>The Dream Phone closes the gap between illusion and reality by connecting you with the unmistakable voices and personalities of history&rsquo;s greatest dreamers through an actual Western Electric rotary phone. A device so warm and familiar, the voice on the other end simply has to be real.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/1195174907" }],
      stills: [
        { section: "Build" },
        { src: "stills/the-dream-phone/1_build.jpeg", alt: "The Dream Phone — build 1" },
        { src: "stills/the-dream-phone/2_build.jpeg", alt: "The Dream Phone — build 2" },
        { src: "stills/the-dream-phone/3_build.jpeg", alt: "The Dream Phone — build 3" },
        { src: "stills/the-dream-phone/4_build.jpg", alt: "The Dream Phone — build 4" },
        { src: "stills/the-dream-phone/5_build.jpeg", alt: "The Dream Phone — build 5" },
        { section: "Admin" },
        { src: "stills/the-dream-phone/1_admin.png", alt: "The Dream Phone — admin" },
      ],
      stillsLabel: false,
      railHTML:
        '<div class="project-detail__body project-detail__body--html">' +
        '<div class="project-stills__section project-stills__section--in-rail" role="presentation"><h3 class="project-stills__section-title">TECH</h3></div>' +
        '<p class="phone-tech-h"><i>Hardware</i></p>' +
        "<p>Raspberry Pi Zero 2 W — the brain inside the phone<br>" +
        "Rotary dial + hook switch — physical input system<br>" +
        "Analog handset + speaker — authentic audio I/O<br>" +
        "12V → 5V power (buck converter) — keeps everything stable<br>" +
        "Ring hardware + transistor control for real bell actuation</p>" +
        "<p>👉 Required much hardware research and manipulation. Replacing headset mic and speaker, splicing and soldering new cables from the handset cradle and rotary dial contact terminals, connecting via Dupont to Pi GPIO.</p>" +
        '<p class="phone-tech-h"><i>Conversation Engine (The Voice Brain)</i></p>' +
        "<p>Hume EVI — real-time conversational layer<br>" +
        "WebSocket streaming for live dialogue<br>" +
        "Emotion + prosody control (tuned down to prevent voice drift)<br>" +
        "ChatGPT as the language brain</p>" +
        "<p>👉 Took a lot of trial and error to settle on the best TTS service, but ultimately, Hume won out hands down. Expensive, but makes conversations emotional, interruptible, and believable.</p>" +
        '<p class="phone-tech-h"><i>Persona System</i></p>' +
        "<p>Text-based personality files (personality.txt) per caller<br>" +
        "Modular inserts (micro-lines, triggered dynamically)<br>" +
        "Knowledge constraints (e.g., stops at year of death)<br>" +
        "Recognition logic (&ldquo;Who&rsquo;s calling?&rdquo; &rarr; personalized response)</p>" +
        "<p>👉 Vibe-coded admin page hosted on Cloudflare, enabling admin to add and adjust personas. Pushed and pulled from a GitHub repo.</p>" +
        '<p class="phone-tech-h"><i>Experience Layer (The Magic)</i></p>' +
        "<p>Rotary dialing = input (year of death)<br>" +
        "Ring &rarr; pickup &rarr; voice appears<br>" +
        "Real-time, unscripted conversation<br>" +
        "Delivered through analog hardware</p>" +
        "<p>👉 The trick: modern AI hidden inside a completely analog interaction</p>" +
        "</div>",
    },
  },
  {
    id: "10",
    slug: "chingon-pong",
    title: "¡Chingón Pong!",
    thumb: "thumbs/four_corners_brewing.png",
    cardTags: "arcade, interactive, beer",
    tags: ["general", "tech"],
    vimeo: "",
    detail: {
      bodyHTML:
        "<p>When Four Corners Brewing came to Team One, we built a beer pong-inspired arcade game to generate awareness around their unique 360&deg;-opening cans.</p>" +
        "<p>Players had one minute to sink balls into open Four Corners cans. Each hit triggered a custom animation inspired by the art and personality of that can.</p>" +
        "<p>Guests loved it. Four Corners loved it. Constellation loved it enough to ask for a portable version.</p>" +
        "<p>Hard as hell</p>" +
        "<p>But it hit a lot of my favorite things:</p>" +
        "<p>Technology. Gaming. Music. Beer.</p>" +
        '<p class="case-study-sect"><i>The Tech</i></p>' +
        "<p>Laser sensors detected when balls passed through the cans<br>" +
        "Arduino handled inputs, scoring, and timing<br>" +
        "Raspberry Pi drove visuals, animations, and sound</p>",
      media: [
        { type: "vimeo", url: "https://vimeo.com/296117526", alt: "¡Chingón Pong! — case study" },
      ],
      stillsLabel: false,
      stills: [
        { src: "stills/four-corners-brewing/1.png", alt: "¡Chingón Pong! 1" },
        { src: "stills/four-corners-brewing/2.jpg", alt: "¡Chingón Pong! 2" },
        { src: "stills/four-corners-brewing/3.gif", alt: "¡Chingón Pong! 3" },
        { src: "stills/four-corners-brewing/4.png", alt: "¡Chingón Pong! 4" },
        { src: "stills/four-corners-brewing/four-corners-brewing.jpg", alt: "¡Chingón Pong!" },
      ],
    },
  },
  {
    id: "11",
    slug: "lexus-december-to-remember",
    title: "Lexus | December to Remember",
    thumb: "thumbs/lexus_december_to_remember.jpg",
    cardTags: "broadcast",
    tags: ["general"],
    vimeo: "https://vimeo.com/375775553",
    detail: {
      bodyHTML:
        "<p>For the 20th anniversary of the December to Remember Sales Event, we asked a simple question:</p>" +
        "<p>Before the big driveway reveal, where do you hide a bow that big?</p>" +
        "<p>Our campaign explored all the elaborate ways a family might work together to keep that iconic red bow under wraps.</p>",
      media: [
        { type: "vimeo", url: "https://vimeo.com/375775553", alt: "Lexus — December to Remember" },
        { type: "vimeo", url: "https://vimeo.com/375779234", alt: "Lexus — December to Remember" },
        { type: "vimeo", url: "https://vimeo.com/375778911", alt: "Lexus — December to Remember" },
      ],
      stillsLabel: false,
      stills: [
        { src: "stills/lexus-december-to-remember/1.png", alt: "December to Remember 1" },
        { src: "stills/lexus-december-to-remember/2.png", alt: "December to Remember 2" },
        { src: "stills/lexus-december-to-remember/3.png", alt: "December to Remember 3" },
        { src: "stills/lexus-december-to-remember/4.png", alt: "December to Remember 4" },
      ],
    },
  },
  {
    id: "12",
    slug: "richards-group-holiday-card",
    title: "Believe",
    thumb: "thumbs/richards_group_holiday.jpg",
    cardTags: "holiday card",
    tags: ["general"],
    vimeo: "",
    detail: {
      bodyHTML:
        '<p class="case-study-line">One Show Merit</p>' +
        "<p>Belief in Santa was on the decline.</p>" +
        "<p>So my partner Kevin and I created a holiday card disguised as an ad campaign&mdash;to get people to believe again.</p>",
      mediaImageObjectFit: "contain",
      media: [
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_01.jpg", alt: "The Richards Group holiday card — page 1" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_02.jpg", alt: "The Richards Group holiday card — page 2" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_03.jpg", alt: "The Richards Group holiday card — page 3" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_04.jpg", alt: "The Richards Group holiday card — page 4" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_05.jpg", alt: "The Richards Group holiday card — page 5" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_06.jpg", alt: "The Richards Group holiday card — page 6" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_07.jpg", alt: "The Richards Group holiday card — page 7" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_08.jpg", alt: "The Richards Group holiday card — page 8" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_09.jpg", alt: "The Richards Group holiday card — page 9" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_10.jpg", alt: "The Richards Group holiday card — page 10" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_11.jpg", alt: "The Richards Group holiday card — page 11" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_12.jpg", alt: "The Richards Group holiday card — page 12" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_13.jpg", alt: "The Richards Group holiday card — page 13" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_14.jpg", alt: "The Richards Group holiday card — page 14" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_15.jpg", alt: "The Richards Group holiday card — page 15" },
        { type: "image", src: "stills/richards-group-holiday-card/trg_card_Page_16.jpg", alt: "The Richards Group holiday card — page 16" },
      ],
      stillsLabel: false,
      stills: [],
    },
  },
  {
    id: "13",
    slug: "carol-o-matic",
    title: "Carol-O-Matic",
    thumb: "thumbs/carol_o_matic.png",
    cardTags: "holiday, web app",
    tags: ["general", "tech"],
    vimeo: "https://vimeo.com/115999951",
    detail: {
      bodyHTML:
        "<p>Each year, Team One uses technology to make the holidays a little more fun.</p>" +
        "<p>For this Happy Technolidays experience, we eliminated the pain of holiday pitchiness with Carol-O-Matic&mdash;a web app that let friends sing in perfect four-part harmony.</p>" +
        "<p>No rehearsal required.</p>" +
        "<p>AgencySpy named it one of the best agency holiday cards.</p>" +
        "<p>More importantly, my kids liked it.</p>",
      media: [
        { type: "vimeo", url: "https://vimeo.com/115999951", alt: "Carol-O-Matic — video" },
      ],
      stillsLabel: false,
      stills: [],
      railHTML:
        '<p class="project-rail-h">Kids&rsquo; Version</p>' +
        '<div class="project-embed"><div class="project-embed__inner"><iframe ' +
        'src="https://www.youtube.com/embed/TT5C_0SsrTA" title="Carol-O-Matic — Kids&rsquo; Version" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div>',
    },
  },
  {
    id: "15",
    slug: "lexus-dadchelor-party",
    title: "Lexus | Dad'chelor Party",
    thumb: "thumbs/lexus_dadchelor_party.png",
    cardTags: "broadcast, comedy",
    tags: ["general"],
    vimeo: "https://vimeo.com/110311988",
    detail: {
      bodyHTML:
        "<p>For many, EVs aren&rsquo;t quite ready for prime time.</p>" +
        "<p>So to get EV shoppers to consider a Lexus hybrid, we partnered with Funny or Die on a short film showing how painfully bad it would be to road trip from LA to Vegas in an EV.</p>" +
        "<p>The result: <i>The Dad&rsquo;chelor Party</i>.</p>",
      media: [{ type: "vimeo", url: "https://vimeo.com/110311988", alt: "Lexus — The Dad'chelor Party" }],
      stills: [],
    },
  },
  {
    id: "16",
    slug: "sistacade",
    title: "Sistacade",
    thumb: "thumbs/sistacade.jpg",
    cardTags: "arcade, personal",
    tags: ["general"],
    vimeo: "",
    detail: {
      bodyHTML:
        "<p>I made my daughters an arcade game.</p>" +
        "<p>OK, I made it for me too.</p>" +
        "<p>The concept is Sistacade&mdash;each sister reimagined through the art of her favorite game.</p>" +
        "<p>#8bitSiblingRivalry #GameOn #ᗧ•••ᗣ•••</p>",
      media: [{ type: "image", src: "thumbs/sistacade.jpg", alt: "Sistacade" }],
      stillsLabel: false,
      stills: [
        { src: "stills/sistacade/2.jpg", alt: "Sistacade 2" },
        { src: "stills/sistacade/3.jpg", alt: "Sistacade 3" },
        { src: "stills/sistacade/4.png", alt: "Sistacade 4" },
        { src: "stills/sistacade/5.jpg", alt: "Sistacade 5" },
        { src: "stills/sistacade/6.jpg", alt: "Sistacade 6" },
        { src: "stills/sistacade/7.jpg", alt: "Sistacade 7" },
        { src: "stills/sistacade/8.jpg", alt: "Sistacade 8" },
        { src: "stills/sistacade/9.jpg", alt: "Sistacade 9" },
      ],
    },
  },
  {
    id: "17",
    slug: "assorted-broadcast",
    title: "Assorted Broadcast",
    thumb: "thumbs/broadcast.png",
    cardTags: "broadcast",
    tags: ["general"],
    vimeo: "https://vimeo.com/72761123",
    detail: {
      bodyHTML:
        "<p>The Infiniti spot was directed by Michel Gondry. I interviewed him for a " +
        '<a href="https://vimeo.com/73543161?fl=ls&amp;fe=ec" target="_blank" rel="noopener noreferrer">BTS video</a> ' +
        "about the frozen moment technique used in the film.</p>" +
        "<p>The Lexus spot was directed by Joe Kizinkzi. I also created a " +
        '<a href="https://vimeo.com/305124488" target="_blank" rel="noopener noreferrer">BTS</a> ' +
        "because the production was pre-AI, and the swinging cars were shot practically.</p>" +
        "<p>For audio, I wrote the lyrics for the two HeartOne spots, and I wrote the lyrics, composed and performed the music and co-mix and mastered the song in Funstigator.</p>",
      media: [
        { type: "vimeo", url: "https://vimeo.com/72761123", alt: "Assorted Broadcast 1" },
        { type: "vimeo", url: "https://vimeo.com/19445010", alt: "Assorted Broadcast 2" },
        { type: "vimeo", url: "https://vimeo.com/116275909", alt: "Assorted Broadcast 3" },
        { type: "vimeo", url: "https://vimeo.com/20381741", alt: "Assorted Broadcast 4" },
        { type: "vimeo", url: "https://vimeo.com/20381750", alt: "Assorted Broadcast 5" },
      ],
      stillsLabel: false,
      stills: [],
      audioPlaylist: [
        { file: "1 - Smashed My Heart - HeartOne.mp3", label: "Smashed My Heart — HeartOne" },
        { file: "2 - Common Sense - NTTA.mp3", label: "Common Sense — NTTA" },
        { file: "3 - Moonsoon Picnic - Tony Roma's.mp3", label: "Moonsoon Picnic — Tony Roma’s" },
        { file: "4 - Funstigator -  Main Event.mp3", label: "Funstigator — Main Event" },
        { file: "5 - Giving You My Heart - HeartOne.mp3", label: "Giving You My Heart — HeartOne" },
        { file: "6 - Tin Man - Medical City.mp3", label: "Tin Man — Medical City" },
      ],
    },
  },
  {
    id: "18",
    slug: "assorted-print",
    title: "Assorted Print",
    thumb: "print/tr_accetable.png",
    cardTags: "print",
    tags: ["general"],
    detail: {
      mediaImageObjectFit: "contain",
      bodyHTML:
        '<p class="case-study-sect"><i>Tony Roma&rsquo;s</i></p>' +
        '<p class="case-study-line">One Show Merit</p>' +
        '<p class="case-study-sect"><i>Perennials Fabrics</i></p>' +
        '<p class="case-study-line">Communication Arts Advertising Annual</p>' +
        '<p class="case-study-sect"><i>STEAM Carnival</i></p>' +
        '<p class="case-study-sect"><i>Lexus</i></p>' +
        '<p class="case-study-sect"><i>Dallas Symphony Orchestra</i></p>' +
        '<p class="case-study-line"><a href="https://www.oneclub.org/#olmag=/_ajax/archive/?action=arc_work%26value=12795" target="_blank" rel="noopener noreferrer">One Show Merit</a></p>' +
        '<p class="case-study-line">Graphis 100 Best Annual Reports Platinum Award</p>' +
        '<p class="case-study-sect"><i>Jamba Juice</i></p>',
      media: [],
      printLayout: [
        {
          title: "Tony Roma\u2019s",
          slides: [
            { type: "image", src: "print/tr_accetable.png", alt: "Tony Roma\u2019s" },
            { type: "image", src: "print/tr_experience.png", alt: "Tony Roma\u2019s" },
            { type: "image", src: "print/tr_salad_fork.png", alt: "Tony Roma\u2019s" },
          ],
        },
        {
          title: "Perennials Fabrics",
          slides: [
            { type: "image", src: "print/WBY_Poster_LOREZ A.jpg", alt: "Perennials Fabrics" },
            { type: "image", src: "print/WBY_Poster_LOREZ B.jpg", alt: "Perennials Fabrics" },
            { type: "image", src: "print/WBY_Poster_LOREZ C.jpg", alt: "Perennials Fabrics" },
            { type: "image", src: "print/WBY_Poster_LOREZ D.jpg", alt: "Perennials Fabrics" },
          ],
        },
        {
          title: "STEAM Carnival",
          slides: [
            { type: "image", src: "print/Rocker-Scientist-Posters_1000.jpg", alt: "STEAM Carnival" },
            { type: "image", src: "print/Rocker-Scientist-Posters2_1000.jpg", alt: "STEAM Carnival" },
            { type: "image", src: "print/Rocker-Scientist-Posters3_1000.jpg", alt: "STEAM Carnival" },
          ],
        },
        {
          title: "Lexus",
          slides: [
            {
              type: "image",
              src: "print/es_print.png",
              alt: "Lexus ES print — Uncommon Luxury",
            },
          ],
        },
        {
          title: "Dallas Symphony Orchestra",
          carousel: true,
          slides: [
            {
              type: "image",
              src: "print/DSO/DSO002-10x14-AR_2009_Page_01_working.jpg",
              alt: "DSO annual report pp. 1",
            },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_02.jpg", alt: "DSO pp. 2" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_03.jpg", alt: "DSO pp. 3" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_04.jpg", alt: "DSO pp. 4" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_05.jpg", alt: "DSO pp. 5" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_06.jpg", alt: "DSO pp. 6" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_07.jpg", alt: "DSO pp. 7" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_08.jpg", alt: "DSO pp. 8" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_09.jpg", alt: "DSO pp. 9" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_10.jpg", alt: "DSO pp. 10" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_11.jpg", alt: "DSO pp. 11" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_12.jpg", alt: "DSO pp. 12" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_13.jpg", alt: "DSO pp. 13" },
            { type: "image", src: "print/DSO/DSO002-10x14-AR_2009_Page_14.jpg", alt: "DSO pp. 14" },
          ],
        },
        {
          title: "Jamba Juice",
          carousel: true,
          slides: [
            { type: "image", src: "print/Cubicle Picnic/cubicle_picnic.png", alt: "Jamba Juice — Cubicle Picnic print" },
            {
              type: "vimeo",
              url: "https://vimeo.com/1187420274",
              alt: "Jamba Juice — Cubicle Picnic film",
            },
          ],
        },
      ],
      stillsLabel: false,
      stills: [],
    },
  },
  {
    id: "ai-films",
    slug: "ai-films",
    title: "AI Films",
    cardTags: "ai films · password protected",
    tags: ["ai"],
    onlyInView: "ai",
    vimeo: "https://vimeo.com/1187071074/8c701596e2",
    thumb: "thumbs/ai-films.webp",
    detail: {
      passwordPhrase: "Show me",
      bodyHTML:
        "<p>The first two films I created for my wife, who is a talented strategist and business owner. I concepted, wrote, generated, and edited these films for her clients: Avvio and Recycle Global Exchange.</p>" +
        "<p>The third film I concepted, wrote, and generated assets alongside my creative partner, Kirk Williams, to celebrate the extraordinary career of a really great dude, Joe Baratelli. One of the funnest and silliest things I&rsquo;ve made in a while.</p>",
      media: [
        {
          type: "vimeo",
          url: "https://vimeo.com/1187071074/8c701596e2",
          alt: "Avvio — AI film",
        },
        {
          type: "vimeo",
          url: "https://vimeo.com/1187073837/bc27aeb3a4",
          alt: "Tame Your Beast — Recycling Global Exchange",
        },
        {
          type: "vimeo",
          url: "https://vimeo.com/1187516659/c90597d207",
          alt: "Joe Baratelli tribute — AI film",
        },
      ],
      stillsLabel: false,
      stills: [],
    },
  },
];

window.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
