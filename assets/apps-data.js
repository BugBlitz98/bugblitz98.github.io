// Visuo Labs Applications Master Dataset
// Created & Maintained by Animesh Manna

const APPS_DATA = [
  {
    id: "canvas-notes-studio",
    title: "Canvas Notes Studio",
    tagline: "Visual Note-Taking & Infinite Mindmap Canvas",
    category: "visual-notes",
    categoryLabel: "Desktop App",
    platforms: ["mac", "windows"],
    featured: true,
    badge: "Mac & Windows",
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3f/d9/b3/3fd9b35e-ccb9-2b03-3445-6d9dc9ed5893/icon.png/180x180bb.png",
    fallbackEmoji: "🎨",
    heroImage: "./assets/app_mockup_productivity.jpg",
    shortDesc: "Visual note-taking and infinite mindmap canvas. Connect thoughts, organize complex ideas visually, with local-first secure storage.",
    fullDesc: "Canvas Notes Studio is an expansive spatial thinking environment engineered for knowledge workers, researchers, software architects, and creators. Instead of linear documents, organize thoughts across an unbounded 2D canvas with fluid node connections, multimedia attachments, markdown annotations, and instant keyboard shortcuts. Engineered local-first for 100% data privacy and lightning-fast responsiveness.",
    features: [
      { title: "Infinite 2D Freeform Canvas", desc: "Pan, zoom, and organize thousands of note cards and connection lines with zero viewport lag." },
      { title: "Non-Linear Visual Mindmapping", desc: "Link notes hierarchically or organically with directional connectors, color tags, and grouped clusters." },
      { title: "Local-First Data Privacy", desc: "All files and canvases are stored locally on your device with no unwanted cloud telemetry." },
      { title: "Markdown & Rich Formatting", desc: "Full markdown styling, code syntax blocks, checklist tasks, and embedded images inside cards." },
      { title: "High-Resolution Export", desc: "Export mindmaps as crystal-clear PNG, SVG vector graphics, or structured JSON data models." },
      { title: "macOS & Windows Native", desc: "Optimized native builds for Apple Silicon (M1/M2/M3) and modern Windows 11/10 architectures." }
    ],
    techStack: [
      { label: "Rendering Engine", value: "High-performance Canvas 2D & WebGL hardware acceleration" },
      { label: "Architecture", value: "Local-First Spatial Graph Model with IndexedDB caching" },
      { label: "Platforms", value: "macOS (Apple Silicon & Intel), Windows 11 / 10" },
      { label: "Export Formats", value: "PNG, SVG, Markdown, JSON Schema" }
    ],
    links: [
      { type: "apple", label: "Download for macOS", url: "https://apps.apple.com/us/app/canvas-notes-studio/id6794408320?mt=12" },
      { type: "windows", label: "Get on Microsoft Store", url: "https://apps.microsoft.com/search/publisher?name=Visuo+Labs&hl=en-US&gl=IN" }
    ]
  },
  {
    id: "easy-prescription-maker",
    title: "Easy Prescription Maker",
    tagline: "Professional Digital Rx Generator for Doctors & Clinics",
    category: "productivity",
    categoryLabel: "Medical & Health",
    platforms: ["apple"],
    featured: true,
    badge: "App Store",
    iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c4/78/24/c4782443-aaaa-68ae-8134-56fa974fe69e/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/180x180wa.png",
    fallbackEmoji: "💊",
    heroImage: "./assets/app_mockup_productivity.jpg",
    shortDesc: "Professional digital prescription and Rx generator for healthcare practitioners. Create, print, and export patient prescriptions in seconds.",
    fullDesc: "Easy Prescription Maker is an intuitive digital Rx generator crafted specifically for medical doctors, dentists, therapists, and healthcare practitioners on iPhone and iPad. Simplify consultation workflows by quickly formatting medications, dosages, diagnostic notes, patient vitals, and clinic branding into clean, printable medical prescriptions.",
    features: [
      { title: "Instant Rx Generation", desc: "Build standard, professional medical prescriptions in under 60 seconds." },
      { title: "Medication & Dosage Library", desc: "Save frequently prescribed medicines, standard frequencies, and intake instructions." },
      { title: "Custom Doctor & Clinic Letterhead", desc: "Add clinic logos, license registration numbers, contact details, and custom signatures." },
      { title: "PDF Print & WhatsApp Share", desc: "Export high-resolution PDF prescriptions ready for AirPrint or instant patient messaging." },
      { title: "Patient Record Management", desc: "Track patient visit histories, diagnoses, and prior prescription logs safely on-device." },
      { title: "Secure & Offline Capable", desc: "Works seamlessly without requiring active cellular data or hospital Wi-Fi." }
    ],
    techStack: [
      { label: "Framework", value: "Native iOS / SwiftUI & CoreData" },
      { label: "PDF Engine", value: "Native CoreGraphics vector PDF compositor" },
      { label: "Platform", value: "iOS 16+ (iPhone & iPad)" },
      { label: "Security", value: "On-device encrypted sandbox storage" }
    ],
    links: [
      { type: "apple", label: "Download on iOS App Store", url: "https://apps.apple.com/us/app/easy-prescription-maker/id6796944989" }
    ]
  },
  {
    id: "json-viewer",
    title: "JSON Viewer – Graph Visualizer",
    tagline: "Interactive Graph Tree & Node Parser for JSON Payloads",
    category: "dev-tools",
    categoryLabel: "Developer Tool",
    platforms: ["android", "web", "chrome", "vscode"],
    featured: true,
    badge: "Top Tool",
    iconUrl: "https://play-lh.googleusercontent.com/-xvRVghF7zwDGoV2RQZjTV93q_UHQHwlCjbCQRVtpQ7X9BR2li6E3LhoD-akmnqs7bgQnaqV-ZeELmAo3hZ6WQ=s180-rw",
    fallbackEmoji: "🌿",
    heroImage: "./assets/app_mockup_devtool.jpg",
    shortDesc: "Transform raw JSON into interactive graph trees and visual node diagrams. Parse, format, and debug complex payloads across Android, web, Chrome, and VS Code.",
    fullDesc: "JSON Viewer converts deeply nested, monolithic JSON payloads into interactive visual graph trees and expandable node diagrams. Whether you're debugging microservice REST APIs, inspecting database dumps, or exploring configuration files, navigate payloads effortlessly with instant search, tree filtering, and syntax validation. Available as an Android mobile app, a high-traffic SaaS web platform at jsonviewer.tools, a popular Chrome extension, and a VS Code extension on Open VSX.",
    features: [
      { title: "Interactive Graph & Tree Visualization", desc: "Convert rigid raw text into expandable, color-coded node graphs with collapsible branches." },
      { title: "High-Throughput Parsing", desc: "Engineered to stream and parse multi-megabyte JSON payloads with sub-millisecond rendering." },
      { title: "Real-Time Key & Value Search", desc: "Quickly pinpoint specific keys, array indices, nested objects, and regex patterns." },
      { title: "Syntax Error Highlighter", desc: "Identifies line numbers and character offsets of missing commas, brackets, or invalid types." },
      { title: "Multi-Format Exporter", desc: "Format, minify, and export cleaned JSON, CSV structures, or visual diagram screenshots." },
      { title: "Web & Mobile Parity", desc: "Sync workflows between the mobile Android utility and the global web SaaS jsonviewer.tools." },
      { title: "Browser & Editor Extensions", desc: "Use JSON visualization directly inside Chrome and VS Code through official extension channels." }
    ],
    techStack: [
      { label: "Web SaaS Stack", value: "Next.js (App Router, Server Components & Edge Rendering) + MongoDB Atlas" },
      { label: "Database Architecture", value: "MongoDB NoSQL document storage with high-throughput indexing" },
      { label: "Mobile Engine", value: "Flutter / Dart with custom tree traversal algorithms" },
      { label: "Parser Specs", value: "Streaming AST tokenizer with deep nested node virtualization" },
      { label: "Supported Platforms", value: "Web (jsonviewer.tools), Android, Chrome Extension & VS Code Extension" }
    ],
    links: [
      { type: "web", label: "Open jsonviewer.tools (Web SaaS)", url: "https://jsonviewer.tools" },
      { type: "android", label: "Get on Google Play", url: "https://play.google.com/store/apps/details?id=com.jsonviewer" },
      { type: "chrome", label: "Add Chrome Extension", url: "https://chromewebstore.google.com/detail/json-viewer-%E2%80%93-visualize-j/lpcemjdcamlnebgbeanjpjjdplnccllm" },
      { type: "vscode", label: "Install VS Code Extension", url: "https://open-vsx.org/extension/jsonviewertools/animesh-jsonviz78/" }
    ]
  },
  {
    id: "graph-notes",
    title: "Graph Notes – Visual Notes",
    tagline: "Networked Node Graph for Connected Ideas & Knowledge",
    category: "visual-notes",
    categoryLabel: "Productivity",
    platforms: ["android", "apple"],
    featured: false,
    badge: "Multi-Platform",
    iconUrl: "https://play-lh.googleusercontent.com/TlXc2znSuzzVaoGf6UZ0_gSuJi5CDF0yMg4F5qhZhOuHXL9-jtMFITZe3E-Xffqh508leUtdWl-SDNdkP7UjpSc=s180-rw",
    fallbackEmoji: "🧠",
    heroImage: "./assets/app_mockup_productivity.jpg",
    shortDesc: "Organize thoughts, brain dump ideas, and connect concepts in a non-linear visual node graph network. Think in interconnected webs.",
    fullDesc: "Graph Notes is built around the philosophy that human memory and creativity operate in interconnected webs rather than rigid folder hierarchies. Create note nodes, draw relational links between thoughts, cluster concepts by topic, and uncover emergent patterns across your personal knowledge base.",
    features: [
      { title: "Dynamic Force-Directed Graph", desc: "Interact with physics-simulated node networks that adjust organically as you build ideas." },
      { title: "Bi-Directional Note Linking", desc: "Connect related insights with hyperlinks and visual relationship arrows." },
      { title: "Tag-Based Clustering", desc: "Color-code and filter node clusters by subject, project milestone, or urgency." },
      { title: "Multi-Platform Mobile", desc: "Optimized for touch gestures, pinch-to-zoom, and smooth panning across Android & iOS." }
    ],
    techStack: [
      { label: "Engine", value: "Cross-platform Flutter with Custom Force-Directed Physics" },
      { label: "Platforms", value: "Android (Google Play) & iOS (App Store)" },
      { label: "Storage", value: "Encrypted SQLite on-device database" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.graphnotes" },
      { type: "apple", label: "Apple App Store", url: "https://apps.apple.com/us/app/graph-notes-visual-notes/id6799601737" }
    ]
  },
  {
    id: "glb-viewer",
    title: "GLB Viewer – 3D Model Viewer",
    tagline: "High-Performance 3D Inspector for GLB & glTF Assets",
    category: "dev-tools",
    categoryLabel: "3D Graphics",
    platforms: ["android", "apple"],
    featured: false,
    badge: "4.1★ Rated",
    iconUrl: "https://play-lh.googleusercontent.com/NsdGM9jIp3-Le5IyiP4UCLBK064O1SaWW1r4SC-HOHi5oekM5z5-M-P30D3ax7XX7sBKW3QgLBe9fUIWMR-AUK0=s180-rw",
    fallbackEmoji: "🧊",
    heroImage: "./assets/app_mockup_devtool.jpg",
    shortDesc: "Smooth 3D model viewer for GLB and glTF files. Rotate, inspect meshes, textures, animations, and lighting in real time.",
    fullDesc: "GLB Viewer is a lightweight yet robust mobile 3D model inspector. Built for 3D artists, game developers, AR creators, and architects, it allows effortless opening, rotation, mesh inspection, lighting adjustment, and animation previewing of .glb and .gltf assets directly on mobile devices.",
    features: [
      { title: "60 FPS 3D Rendering", desc: "Hardware-accelerated viewport rendering with dynamic PBR shading and environment reflections." },
      { title: "Animation Playback Controller", desc: "Scrub through embedded skeletal animations, adjust speeds, and toggle animation tracks." },
      { title: "Mesh & Material Inspection", desc: "View polygon counts, vertex data, texture channels, and wireframe topology." },
      { title: "Custom Lighting & HDR Environments", desc: "Toggle studio lighting presets and HDRI skyboxes to preview assets under varying conditions." }
    ],
    techStack: [
      { label: "Graphics API", value: "OpenGL ES 3.0 / Filament 3D Engine" },
      { label: "Formats Supported", value: "GLB (binary glTF), glTF 2.0 with embedded textures" },
      { label: "Platforms", value: "Android & iOS" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.glbviewer" },
      { type: "apple", label: "Apple App Store", url: "https://apps.apple.com/us/app/glb-viewer-3d-model-viewer/id6792433740" }
    ]
  },
  {
    id: "org-chart-builder",
    title: "Organization Chart Builder",
    tagline: "Design Company Trees, Team Hierarchies & Org Workflows",
    category: "productivity",
    categoryLabel: "Business Tool",
    platforms: ["android", "apple", "windows"],
    featured: false,
    badge: "Cross-Platform",
    iconUrl: "https://play-lh.googleusercontent.com/YFBkltn_N3svWN5kcMgLJj6ySQWTMtG0ccjNqhDXwghx-gymzMvpSlCDvZ8u2Iz4YtHS3ofc4XZD_pReegLKnQ=s180-rw",
    fallbackEmoji: "🏢",
    heroImage: "./assets/app_mockup_productivity.jpg",
    shortDesc: "Design professional company hierarchies, team organizational trees, and reporting workflows with easy export options.",
    fullDesc: "Organization Chart Builder allows HR leaders, executives, and team managers to design, manage, and export professional corporate hierarchies. Easily map out department structures, role reporting lines, team allocations, and executive leadership trees with automatic tree layout alignments.",
    features: [
      { title: "Smart Auto-Layout Alignment", desc: "Nodes auto-align seamlessly when you add direct reports or lateral colleagues." },
      { title: "Role & Member Customization", desc: "Attach employee photos, role titles, departments, email contacts, and custom badges." },
      { title: "Export to High-Res PDF & Images", desc: "Generate print-ready org chart posters or vector PDFs for executive presentations." },
      { title: "Universal Platform Support", desc: "Available across Android phones/tablets, iPhones, iPads, and Windows PCs." }
    ],
    techStack: [
      { label: "Layout Algorithm", value: "Hierarchical Tree Traversal & Dynamic Subtree Balancing" },
      { label: "Platforms", value: "Android, iOS & Windows" },
      { label: "Export Capabilities", value: "PDF, PNG, CSV Import/Export" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.orgchartbuilder" },
      { type: "apple", label: "Apple App Store", url: "https://apps.apple.com/us/app/organization-chart-builder/id6789635187" }
    ]
  },
  {
    id: "xml-viewer",
    title: "XML Viewer – Graph Visualizer",
    tagline: "Convert Tedious Markup into Interactive Node Diagrams",
    category: "dev-tools",
    categoryLabel: "Developer Tool",
    platforms: ["android"],
    featured: false,
    badge: "Live",
    iconUrl: "https://play-lh.googleusercontent.com/BGfxOJd5Qd3A0p_vQ56tw4bev4STCFRiQfruTIPIqVMgfo8-2hNNz98Pa8y7S-IkprU71G1Lcvpxkv6W_WUrYg=s180-rw",
    fallbackEmoji: "📐",
    heroImage: "./assets/app_mockup_devtool.jpg",
    shortDesc: "Render nested XML structures as clean, readable interactive node graphs without squinting at tedious raw markup.",
    fullDesc: "XML Viewer breaks through the frustration of deciphering deep, unformatted XML documents. It parses tags, attributes, and CDATA blocks into visual hierarchical trees with collapsible nodes, color-coded tag indicators, and instant xpath filtering.",
    features: [
      { title: "Tree & Graph Visualization", desc: "Inspect XML tags, child nodes, and nested structures with visual color distinctions." },
      { title: "Attribute & Namespace Support", desc: "Clearly formats complex namespaces, XML schemas, and tag attributes." },
      { title: "Error Diagnostics", desc: "Highlights unclosed tags, malformed syntax, and encoding mismatches." }
    ],
    techStack: [
      { label: "Parser", value: "Streaming SAX & DOM Parser" },
      { label: "Platform", value: "Android (Google Play)" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.animesh.xmlviewer" }
    ]
  },
  {
    id: "yaml-viewer",
    title: "YAML Viewer – Graph Visualizer",
    tagline: "Visualize CI/CD, Kubernetes & Docker Configs Visually",
    category: "dev-tools",
    categoryLabel: "Developer Tool",
    platforms: ["android"],
    featured: false,
    badge: "Live",
    iconUrl: "https://play-lh.googleusercontent.com/J4nYmtNpz49bUehvjX8_vv3qP4uMXtccVOko6_vckdQIaQuQWiwmHyJ4lWpW7FSwIsRxVaudeJZ51bUr7CZxzA=s180-rw",
    fallbackEmoji: "📜",
    heroImage: "./assets/app_mockup_devtool.jpg",
    shortDesc: "Visualize YAML configuration files into interactive diagrams. Ideal for inspecting CI/CD pipelines, Kubernetes, and Docker configs.",
    fullDesc: "YAML Viewer simplifies debugging whitespace-sensitive YAML files by rendering them as interactive node trees. Essential for DevOps engineers and cloud architects reviewing Kubernetes manifests, GitHub Actions workflows, Docker Compose stacks, and Helm charts on mobile.",
    features: [
      { title: "Indentation-Resilient Visualizer", desc: "No more guessing indentation levels; see parent-child hierarchies visually." },
      { title: "YAML to JSON Conversion", desc: "Instantly convert between YAML and JSON formats with single-tap export." },
      { title: "Cloud Manifest Presets", desc: "Optimized syntax highlighting for K8s pods, services, and pipeline definitions." }
    ],
    techStack: [
      { label: "Parser", value: "Custom YAML AST parser with schema validation" },
      { label: "Platform", value: "Android" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.animesh.yamlviewer" }
    ]
  },
  {
    id: "mongolens",
    title: "MongoLens – MongoDB Client",
    tagline: "Visual MongoDB Client & Database Explorer on Mobile & Web",
    category: "dev-tools",
    categoryLabel: "Database Tool",
    platforms: ["android", "web"],
    featured: true,
    badge: "mongolens.com",
    iconUrl: "https://play-lh.googleusercontent.com/rZCuYqwtbdRCnHwr6oM3kXrGK4XfCQ5ag5ESFjtdHTKzn4s7-gZZnKGG6ap4KmPhS9q3B8hAt9AK-2VZh3Mc=s180-rw",
    fallbackEmoji: "🔭",
    heroImage: "./assets/app_mockup_devtool.jpg",
    shortDesc: "Connect and manage MongoDB databases seamlessly. Run queries, view collections, and edit documents with an intuitive UI.",
    fullDesc: "MongoLens is a sleek, modern MongoDB GUI client designed for developers on the go. Connect via direct URI strings (including MongoDB Atlas), explore databases, inspect collections, execute aggregation pipelines, and view JSON/BSON documents in visual tree or raw editor modes.",
    features: [
      { title: "MongoDB Atlas & Self-Hosted Support", desc: "Connect securely with SSL/TLS connection strings and SRV records." },
      { title: "Interactive Query Builder", desc: "Filter documents with standard JSON queries, sorting, and projection controls." },
      { title: "Document CRUD Operations", desc: "Insert, edit, duplicate, and delete documents with instant safety prompts." },
      { title: "Dedicated Web App", desc: "Accessible both on Android and as a web client at mongolens.com." }
    ],
    techStack: [
      { label: "Architecture", value: "Secure Driver Bridge with BSON/EJSON serialization" },
      { label: "Platforms", value: "Android & Web SaaS (mongolens.com)" }
    ],
    links: [
      { type: "web", label: "Open mongolens.com", url: "https://mongolens.com" },
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mongolens" }
    ]
  },
  {
    id: "mermaid-studio",
    title: "Mermaid Studio: Diagram Editor",
    tagline: "Write Markdown Syntax & Render Diagrams Instantly",
    category: "dev-tools",
    categoryLabel: "Diagram Tool",
    platforms: ["android"],
    featured: false,
    badge: "Live",
    iconUrl: "https://play-lh.googleusercontent.com/XgmQFZ9FYXmXxCCXyryT-lnHWo51vDSwqxZBsE7x_MWr7sxgrIyGYV4xGVMMbZ5MQgWIByzhmSCQF3f0VLxsKg=s180-rw",
    fallbackEmoji: "🧜‍♀️",
    heroImage: "./assets/app_mockup_devtool.jpg",
    shortDesc: "Write Mermaid-js markdown syntax and generate flowcharts, sequence diagrams, class models, and state graphs instantly.",
    fullDesc: "Mermaid Studio brings the power of text-to-diagram generation to your fingertips. Write plain text markdown code and watch it render instantly into crisp flowcharts, architecture sequence diagrams, Gantt schedules, class graphs, and entity-relationship diagrams.",
    features: [
      { title: "Live Real-Time Preview", desc: "Visual diagram updates in real-time as you write and edit Mermaid syntax." },
      { title: "Templates Library", desc: "Pre-built templates for flowcharts, git graphs, sequence diagrams, and mindmaps." },
      { title: "Vector SVG & PNG Export", desc: "Export sharp diagrams for documentation, markdown files, or presentations." }
    ],
    techStack: [
      { label: "Renderer", value: "Mermaid-JS Runtime with SVG Vector Compositing" },
      { label: "Platform", value: "Android" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mermaidviewer" }
    ]
  },
  {
    id: "html-runner",
    title: "HTML Runner: Live Web Editor",
    tagline: "Instant Mobile Code Sandbox for HTML, CSS & JavaScript",
    category: "dev-tools",
    categoryLabel: "Web Playground",
    platforms: ["android"],
    featured: false,
    badge: "Live",
    iconUrl: "https://play-lh.googleusercontent.com/ixSq6yTj0lJoFDc6W8mU5yd8r_gtjXYJASkwSiNaDau3nZdwg6d_Nfzxrz8l54YWNlpNNi9IyWYk8-gody_ixH0=s180-rw",
    fallbackEmoji: "⚡",
    heroImage: "./assets/app_mockup_devtool.jpg",
    shortDesc: "Instant web coding sandbox on mobile. Write HTML, CSS, and JS with instant preview, console debugger, and offline support.",
    fullDesc: "HTML Runner provides a complete web development playground right on your smartphone. Code HTML5, modern CSS3 styling, and JavaScript logic with a live iframe sandbox, integrated browser console, snippet manager, and offline capabilities.",
    features: [
      { title: "Split-Screen Live Preview", desc: "See your web changes take effect in real time as you type." },
      { title: "Interactive Developer Console", desc: "Inspect console.log statements, JS execution warnings, and error stacks." },
      { title: "CDN Library Importer", desc: "Inject popular libraries like Bootstrap, Tailwind, jQuery, and FontAwesome with one click." }
    ],
    techStack: [
      { label: "Sandbox Engine", value: "Isolated WebView container with IPC console stream" },
      { label: "Platform", value: "Android" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=app.htmlrunner" }
    ]
  },
  {
    id: "json-compare",
    title: "JSON Compare – Diff & Viewer",
    tagline: "Side-by-Side Visual Delta & Key-Value Diff Inspector",
    category: "dev-tools",
    categoryLabel: "Developer Tool",
    platforms: ["android"],
    featured: false,
    badge: "Live",
    iconUrl: "https://play-lh.googleusercontent.com/CwmEy5qigZRZsj0Hzc09v2YnY5W3bAAER0vtkg4YGzNaeYjgrewP2HO8kj6SUFtIq5tmLcpV20ExsAuMVvilqg=s180-rw",
    fallbackEmoji: "🔍",
    heroImage: "./assets/app_mockup_devtool.jpg",
    shortDesc: "Compare two JSON files side-by-side with color-coded diff highlighting, key matching, and syntax error detection.",
    fullDesc: "JSON Compare pinpoint differences between two JSON payloads in seconds. Features color-coded side-by-side delta visualization, semantic key matching (ignoring key order), value replacement detection, and deep nested object diff analysis.",
    features: [
      { title: "Semantic JSON Diff", desc: "Detects added, removed, and modified keys regardless of original key order." },
      { title: "Side-by-Side Synchronized Scroll", desc: "Both panes scroll concurrently to keep matching paths in view." },
      { title: "Summary Delta Report", desc: "Provides counts of added, changed, and deleted keys at a glance." }
    ],
    techStack: [
      { label: "Diff Algorithm", value: "Myers Diff & Recursive AST Semantic Delta Engine" },
      { label: "Platform", value: "Android" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.jsoncompare" }
    ]
  },
  {
    id: "chart-maker",
    title: "Chart Maker – Graph Creator",
    tagline: "Create Sleek Data Visualizations, Bar, Line & Pie Charts",
    category: "dev-tools",
    categoryLabel: "Design & Charts",
    platforms: ["android"],
    featured: false,
    badge: "Live",
    iconUrl: "https://play-lh.googleusercontent.com/NbK2L6aDbntt5sXGcjaUOP-0ScvJQmt83MJa6wZqXHkw0X0rfQRtD_lT0V5iQfKRNRDCDOo071ySkobbZHG8=s180-rw",
    fallbackEmoji: "📊",
    heroImage: "./assets/app_mockup_devtool.jpg",
    shortDesc: "Create sleek, customizable charts (bar, line, pie, radar) with customizable color palettes, live data inputs, and high-res image exports.",
    fullDesc: "Chart Maker makes data visualization accessible on mobile. Input your numbers or import tables, pick from rich chart templates (Bar, Line, Area, Pie, Donut, Radar), customize palettes, and export publication-ready charts for reports or social sharing.",
    features: [
      { title: "Multiple Chart Types", desc: "Bar, Stacked Bar, Line, Pie, Donut, Radar, and Scatter charts." },
      { title: "Curated Aesthetic Palettes", desc: "Pre-configured vibrant, dark-mode, and corporate color themes." },
      { title: "High-Res Image Export", desc: "Export PNGs or PDFs with customized titles, legends, and axis marks." }
    ],
    techStack: [
      { label: "Engine", value: "Flutter Chart Graphics & Vector Canvas" },
      { label: "Platform", value: "Android" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.chartmaker" }
    ]
  },
  {
    id: "gym-timetable-maker",
    title: "Gym Timetable Maker",
    tagline: "Workout Planner, Split Builder & Fitness Scheduler",
    category: "productivity",
    categoryLabel: "Fitness & Routine",
    platforms: ["android"],
    featured: false,
    badge: "Live",
    iconUrl: "https://play-lh.googleusercontent.com/DifPMyS6VU6E_zyNK0J20q-EMiGYGR97dDIi24xNz9pZZrkIIX-7YrOUOLPq7b6T77X8TuZOW5JplKbvXVw1=s180-rw",
    fallbackEmoji: "💪",
    heroImage: "./assets/app_mockup_productivity.jpg",
    shortDesc: "Build customized weekly workout splits, timetable schedules, and exercise routines with ease to stay consistent at the gym.",
    fullDesc: "Gym Timetable Maker helps fitness enthusiasts and trainers organize workout schedules, muscle splits (Push-Pull-Legs, Upper-Lower, Bro-Split), rep schemes, and rest days into visually motivating weekly timetables.",
    features: [
      { title: "Custom Split Creator", desc: "Configure multi-day workout splits with targeted muscle groups." },
      { title: "Exercise Library", desc: "Add exercises with target sets, rep ranges, and rest intervals." },
      { title: "Shareable Schedule Card", desc: "Export your customized weekly gym calendar as a sleek lockscreen wallpaper or image." }
    ],
    techStack: [
      { label: "Platform", value: "Android (Google Play)" },
      { label: "Storage", value: "Local SQLite database" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.gymtimetablemaker" }
    ]
  },
  {
    id: "connect-path-puzzle",
    title: "Connect Path Puzzle",
    tagline: "Engaging Logic Flow & Color Path Brain Teaser",
    category: "games",
    categoryLabel: "Casual Game",
    platforms: ["android", "apple"],
    featured: false,
    badge: "Multi-Platform",
    iconUrl: "https://play-lh.googleusercontent.com/QXAWIKh79SK4TgUNHdbYudwxsBlVQV4KhsRJSiKDhdl3okXtOTV7dprBQU76A81gJvFb_YYo1x5aG0bgZSVtQ98=s180-rw",
    fallbackEmoji: "🧩",
    heroImage: "./assets/app_mockup_games.jpg",
    shortDesc: "Engaging logic puzzle game. Connect matching color nodes and paths without overlapping lines across hundreds of stages.",
    fullDesc: "Connect Path Puzzle challenges your brain to connect pairs of matching colored dots with continuous pipes or paths across a grid. The rule is simple: pipes cannot intersect or overlap, and every square on the board must be filled.",
    features: [
      { title: "Hundreds of Brain-Bending Levels", desc: "Ranging from relaxing 5x5 boards to devilishly hard 12x12 grids." },
      { title: "Clean Minimalist Visuals", desc: "Crisp glowing neon paths with soothing haptic feedback and sound effects." },
      { title: "Time Attack & Daily Puzzles", desc: "Compete against the clock or enjoy daily hand-crafted logic challenges." }
    ],
    techStack: [
      { label: "Engine", value: "Optimized 2D Grid Engine with Path Validation Algorithms" },
      { label: "Platforms", value: "Android & iOS" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.pathflow" },
      { type: "apple", label: "Apple App Store", url: "https://apps.apple.com/us/app/connect-path-puzzle/id6792431900" }
    ]
  },
  {
    id: "cow-dash",
    title: "Cow Dash: Endless Runner",
    tagline: "Fast-Paced Action Arcade Sprint & Obstacle Runner",
    category: "games",
    categoryLabel: "Runner Game",
    platforms: ["android"],
    featured: false,
    badge: "Arcade",
    iconUrl: "https://play-lh.googleusercontent.com/p2VdiQsXtQZruRQg_jemoCNfSfBJXMuagKKh0tupLbG_XJNkhYQ8V4ZAlF8cU_UrkEoYatzTbzhu_1K6F61gVkw=s180-rw",
    fallbackEmoji: "🐄",
    heroImage: "./assets/app_mockup_games.jpg",
    shortDesc: "Fast-paced, adrenaline-filled endless runner arcade game! Dodge hurdles, collect power-ups, and sprint for high scores.",
    fullDesc: "Cow Dash delivers vibrant, high-energy endless running action. Control a brave cow dashing across treacherous barnyards and wild terrains, dodging obstacles, collecting coins, activating shields, and competing for the global leaderboard high score.",
    features: [
      { title: "Fast Reflex Arcade Gameplay", desc: "Swipe to jump, slide, and switch lanes at increasing velocity." },
      { title: "Power-Ups & Multipliers", desc: "Unlock magnets, turbo rockets, and invincibility shields." },
      { title: "Unlockable Skins & Customizations", desc: "Dress up your cow with comical hats, costumes, and trail effects." }
    ],
    techStack: [
      { label: "Game Engine", value: "60 FPS 2D Arcade Sprite Loop" },
      { label: "Platform", value: "Android" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.cowrunnermobile" }
    ]
  },
  {
    id: "pocket-donkey",
    title: "My Talking Donkey / Pocket Donkey",
    tagline: "Hilarious Virtual Pet Companion with Voice Mimicry",
    category: "games",
    categoryLabel: "Fun & Casual",
    platforms: ["android", "apple"],
    featured: false,
    badge: "Virtual Pet",
    iconUrl: "https://play-lh.googleusercontent.com/LsNhRKrrdnfT492rbWcBXJApVDiP4c1PqrPcU1--Iv5lvDK4bQXnefNfNsVnCVstQ2C7yndvA27nqF96JEjqN0g=s180-rw",
    fallbackEmoji: "🫏",
    heroImage: "./assets/app_mockup_games.jpg",
    shortDesc: "Hilarious talking donkey companion! Repeats what you say in comical voices, performs funny dances, and offers mini-games.",
    fullDesc: "Meet Pocket Donkey, the lovable, funny talking donkey virtual pet! Talk to him and he repeats everything back in hilarious high-pitched or goofy voices. Poke, tickle, feed him snacks, and enjoy interactive mini-games on both Android and iOS.",
    features: [
      { title: "Real-Time Voice Pitch Shifter", desc: "Captures microphone input and plays back comical audio transformations instantly." },
      { title: "Animated Reactions & Dances", desc: "Dozens of funny animations, dance moves, and sound gags." },
      { title: "Mini-Games Built-In", desc: "Includes casual mini-games to collect carrots and coins." }
    ],
    techStack: [
      { label: "Audio Engine", value: "Real-Time DSP Pitch Modification & Audio Buffer" },
      { label: "Platforms", value: "Android & iOS (Pocket Donkey)" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mytalkingdonkey" },
      { type: "apple", label: "Apple App Store", url: "https://apps.apple.com/us/app/pocket-donkey/id6789635717" }
    ]
  },
  {
    id: "facepop",
    title: "FacePop: Emoji Bubble Shooter",
    tagline: "Vibrant Bubble Match & Expressive Emoji Chain Blaster",
    category: "games",
    categoryLabel: "Casual Game",
    platforms: ["android"],
    featured: false,
    badge: "Shooter",
    iconUrl: "https://play-lh.googleusercontent.com/wLTg2NmqLwmGF_dRu1Hg2VSagkMWEdhQvlw9eX6Jonxo0b2nereDZJDRlGdP7B6YfIXIvEAjF1BDIMs4JVtg=s180-rw",
    fallbackEmoji: "🎯",
    heroImage: "./assets/app_mockup_games.jpg",
    shortDesc: "Vibrant bubble shooter game powered with expressive animated emoji bubbles, chain reactions, and power boosters.",
    fullDesc: "FacePop blends classic bubble shooter mechanics with hilarious, expressive animated emoji characters. Match 3 or more matching emoji bubbles to create explosive chain reactions, trigger screen-clearing power-ups, and tackle hundreds of colorful puzzle stages.",
    features: [
      { title: "Expressive Emoji Dynamics", desc: "Bubbles animate with quirky expressions when targeted or popped." },
      { title: "Exciting Power Combos", desc: "Rainbow bombs, lightning strikes, and super-aim laser pointers." },
      { title: "Over 300+ Levels", desc: "Progressive difficulty curve with fun boss stages and obstacle bubbles." }
    ],
    techStack: [
      { label: "Game Engine", value: "2D Particle Physics & Grid Collision System" },
      { label: "Platform", value: "Android" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.facepop" }
    ]
  },
  {
    id: "fly-my-dragon",
    title: "Fly My Dragon",
    tagline: "Fly Through Mythical Skies & Maneuver Flight Obstacles",
    category: "games",
    categoryLabel: "Arcade Game",
    platforms: ["android"],
    featured: false,
    badge: "Action",
    iconUrl: "https://play-lh.googleusercontent.com/kKXIsirAdvLJCiimy2r_UI65wdyaHiupirLuNp7DCpRJ6TZrQJHOuJdll0jqb8cZBVVoQKpfugTwmIbMchU=s180-rw",
    fallbackEmoji: "🐉",
    heroImage: "./assets/app_mockup_games.jpg",
    shortDesc: "Fly through mythical skies, maneuver through tight obstacles, and collect coins in this addictive dragon flight simulator.",
    fullDesc: "Fly My Dragon tests your flight precision and reflexes. Take control of an agile fantasy dragon soaring through floating islands, ancient ruins, and cavernous cliffs. Collect magical energy orbs while dodging fiery obstacles and spikes.",
    features: [
      { title: "Precision Touch Flight Controls", desc: "Tap to flap wings and glide smoothly through narrow cavern gaps." },
      { title: "Dynamic Day & Night Environments", desc: "Beautiful fantasy backdrops with changing sky palettes." },
      { title: "Dragon Evolution & Breeds", desc: "Unlock new mythical dragons with unique flight dynamics and breath trails." }
    ],
    techStack: [
      { label: "Physics Engine", value: "Gravity & Flap Velocity Kinematic Loop" },
      { label: "Platform", value: "Android" }
    ],
    links: [
      { type: "android", label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.flymydragon" }
    ]
  },
  {
    id: "yourorgtree",
    title: "YourOrgTree – Org Chart Maker",
    tagline: "Interactive Hierarchy & Department Tree Visualizer on Web & Windows",
    category: "productivity",
    categoryLabel: "Business Tool",
    platforms: ["windows", "web"],
    featured: true,
    badge: "yourorgtree.com",
    iconUrl: "https://play-lh.googleusercontent.com/YFBkltn_N3svWN5kcMgLJj6ySQWTMtG0ccjNqhDXwghx-gymzMvpSlCDvZ8u2Iz4YtHS3ofc4XZD_pReegLKnQ=s180-rw",
    fallbackEmoji: "🌲",
    heroImage: "./assets/app_mockup_productivity.jpg",
    shortDesc: "Interactive organizational hierarchy & team chart maker. Visualize company structures, department trees, and export high-res charts directly in browser & Windows.",
    fullDesc: "YourOrgTree is a web SaaS and Windows desktop solution for building and presenting high-resolution organizational trees and team structures. With a frictionless interface, anyone can map out startup structures, enterprise enterprise departments, or agile squads, customize role cards, and export crisp presentation diagrams in seconds.",
    features: [
      { title: "Interactive Drag & Drop Tree Reorganization", desc: "Re-parent and move entire departments or direct reports with ease." },
      { title: "Multi-Tier Department Color-Coding", desc: "Visual group distinction across Marketing, Engineering, Sales, and Leadership." },
      { title: "Web Platform & Windows Native App", desc: "Use on the web at yourorgtree.com or install the Windows desktop version." },
      { title: "High-Res Vector & Image Export", desc: "Export clear diagrams formatted for pitch decks, company wikis, or PDF handbooks." }
    ],
    techStack: [
      { label: "Web Platform", value: "Interactive Web Platform at yourorgtree.com" },
      { label: "Desktop Build", value: "Microsoft Store Windows 11 / 10 Suite" },
      { label: "Layout Specs", value: "Reingold-Tilford Tidier Trees Algorithm" }
    ],
    links: [
      { type: "web", label: "Open yourorgtree.com (Web App)", url: "https://yourorgtree.com" },
      { type: "windows", label: "Get on Microsoft Store", url: "https://apps.microsoft.com/search/publisher?name=Visuo+Labs&hl=en-US&gl=IN" }
    ]
  }
];

// Helper to look up an app by id
function getAppById(id) {
  if (!id) return APPS_DATA[0];
  const found = APPS_DATA.find(a => a.id.toLowerCase() === id.toLowerCase());
  return found || APPS_DATA[0];
}
