import React, { useState } from 'react';
import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  Plus,
  X,
  Check,
  Volume2,
  VolumeX,
  Maximize2
} from 'lucide-react';

export default function App() {
  const [selectedPill, setSelectedPill] = useState<string>('AI Generation');
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreModalOpen, setExploreModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [videoMuted, setVideoMuted] = useState(true);
  const [sparklesActive, setSparklesActive] = useState(false);

  // Botanical generation parameters state for interactive modal
  const [petalDensity, setPetalDensity] = useState(68);
  const [curvatureIndex, setCurvatureIndex] = useState(42);
  const [translucency, setTranslucency] = useState(85);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleQuickAdd = () => {
    showToast('Specimen added to your Botanical Canvas');
  };

  const pills = ['Artistic Gallery', 'AI Generation', '3D Structures'];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-white/20 selection:text-white">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted={videoMuted}
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-90 contrast-105"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
        />
        {/* Subtle monochrome ambient scrim */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Main Two-Panel Split Container */}
      <div className="relative z-10 min-h-screen w-full flex flex-col lg:flex-row p-3 sm:p-4 lg:p-6 gap-4 lg:gap-6 box-border">
        {/* ===================== LEFT PANEL ===================== */}
        <div className="relative w-full lg:w-[52%] flex flex-col min-h-[calc(100vh-1.5rem)] sm:min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)]">
          {/* Liquid Glass Strong Overlay Container */}
          <div className="liquid-glass-strong rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col justify-between flex-1 relative">
            {/* Top Navigation */}
            <header className="flex items-center justify-between w-full">
              {/* Logo + Brand */}
              <div className="flex items-center gap-3 cursor-pointer group">
                <img
                  src="/logo.png"
                  alt="Bloom Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg object-contain transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="font-semibold text-2xl tracking-tighter text-white">
                  bloom
                </span>
              </div>

              {/* Menu Button */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-xs font-medium text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                <span>Menu</span>
                <Menu className="w-3.5 h-3.5 text-white" />
              </button>
            </header>

            {/* Hero Center Section */}
            <div className="flex-1 flex flex-col items-center justify-center text-center my-auto py-6 sm:py-8 lg:py-10">
              {/* Logo Emblem (80x80) */}
              <div className="relative mb-6 group cursor-pointer" onClick={() => setExploreModalOpen(true)}>
                <img
                  src="/logo.png"
                  alt="Bloom Emblem"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-2xl object-contain drop-shadow-[0_10px_25px_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* H1 Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.05em] text-white leading-[1.08] max-w-xl mx-auto mb-8 text-balance">
                Innovating the{' '}
                <span className="font-serif italic font-normal text-white/80">
                  spirit of bloom AI
                </span>
              </h1>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => setExploreModalOpen(true)}
                className="liquid-glass-strong rounded-full px-7 py-3 flex items-center gap-3.5 text-white text-sm font-medium hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-lg mb-8"
              >
                <span>Explore Now</span>
                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <Download className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              {/* Three Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {pills.map((pill) => {
                  const isActive = selectedPill === pill;
                  return (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => {
                        setSelectedPill(pill);
                        showToast(`Switched view to ${pill}`);
                      }}
                      className={`liquid-glass rounded-full px-4 py-2 text-xs transition-transform cursor-pointer hover:scale-105 active:scale-95 ${
                        isActive
                          ? 'text-white bg-white/10'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {pill}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Quote Block */}
            <footer className="flex flex-col items-center text-center pt-4">
              <span className="text-[11px] tracking-widest uppercase text-white/50 font-medium mb-1.5">
                VISIONARY DESIGN
              </span>
              <p className="text-sm sm:text-base text-white/85 max-w-md mx-auto leading-relaxed">
                <span>We </span>
                <span className="font-serif italic text-white">imagined </span>
                <span>a realm </span>
                <span className="font-serif italic text-white">
                  with no ending.
                </span>
              </p>
              <div className="flex items-center justify-center gap-3 mt-3 w-full max-w-[240px]">
                <div className="h-px flex-1 bg-white/20" />
                <span className="text-[10px] tracking-widest uppercase text-white/50 font-medium whitespace-nowrap">
                  MARCUS AURELIO
                </span>
                <div className="h-px flex-1 bg-white/20" />
              </div>
            </footer>
          </div>
        </div>

        {/* ===================== RIGHT PANEL (Desktop Only) ===================== */}
        <div className="hidden lg:flex lg:w-[48%] flex-col justify-between relative min-h-[calc(100vh-3rem)]">
          {/* Top Bar */}
          <div className="flex items-center justify-between w-full">
            {/* Social icons pill with ArrowRight */}
            <div className="liquid-glass rounded-full px-3.5 py-2 flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-white/80 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <div className="w-px h-3.5 bg-white/20" />
              <button
                type="button"
                onClick={() => setEcosystemOpen(true)}
                aria-label="Social directory"
                className="text-white hover:text-white/80 transition-colors cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Account & Sparkles Actions */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setAccountModalOpen(true)}
                className="liquid-glass rounded-full px-4 py-2 text-xs font-medium text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                Account
              </button>
              <button
                type="button"
                onClick={() => {
                  setSparklesActive(!sparklesActive);
                  showToast(
                    sparklesActive
                      ? 'Ambient radiance calibrated'
                      : 'Ethereal flora synthesis mode active'
                  );
                }}
                aria-label="Toggle AI Sparkles"
                className={`liquid-glass rounded-full w-9 h-9 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer ${
                  sparklesActive ? 'bg-white/20' : ''
                }`}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Community Card */}
          <div
            onClick={() => setEcosystemOpen(true)}
            className="liquid-glass rounded-2xl p-4 w-56 ml-auto mt-6 cursor-pointer hover:scale-105 transition-transform group"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-white">
                Enter our ecosystem
              </span>
              <ArrowRight className="w-3 h-3 text-white/60 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[11px] text-white/60 leading-relaxed">
              Join 14,000+ generative botanical artists sculpting synthetic flora.
            </p>
          </div>

          {/* Video Audio Control Minimal Badge */}
          <div className="flex items-center justify-end my-4">
            <button
              type="button"
              onClick={() => setVideoMuted(!videoMuted)}
              aria-label={videoMuted ? 'Unmute atmospheric audio' : 'Mute audio'}
              className="liquid-glass rounded-full px-3 py-1.5 flex items-center gap-2 text-[10px] text-white/70 hover:text-white hover:scale-105 transition-transform cursor-pointer"
            >
              {videoMuted ? (
                <>
                  <VolumeX className="w-3 h-3 text-white/70" />
                  <span>Cinematic Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3 h-3 text-white" />
                  <span>Ambient Audio Active</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom Feature Section */}
          <div className="liquid-glass rounded-[2.5rem] p-4 flex flex-col gap-3 mt-auto">
            {/* Two Side-by-Side Cards */}
            <div className="grid grid-cols-2 gap-3">
              {/* Processing Card */}
              <div
                onClick={() => setActiveFeature('Processing')}
                className="liquid-glass rounded-3xl p-4 sm:p-5 flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Wand2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-white mb-1">
                    Processing
                  </h3>
                  <p className="text-[11px] text-white/60 leading-snug">
                    Neural petal synthesis and recursive procedural growth.
                  </p>
                </div>
              </div>

              {/* Growth Archive Card */}
              <div
                onClick={() => setActiveFeature('Growth Archive')}
                className="liquid-glass rounded-3xl p-4 sm:p-5 flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-white mb-1">
                    Growth Archive
                  </h3>
                  <p className="text-[11px] text-white/60 leading-snug">
                    Curated biological taxonomy of synthetic crystal flora.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Card: Advanced Plant Sculpting */}
            <div
              onClick={() => setActiveFeature('Advanced Plant Sculpting')}
              className="liquid-glass rounded-3xl p-3 flex items-center justify-between gap-3 hover:scale-105 transition-transform cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <img
                  src="/src/assets/hero-flowers.png"
                  alt="Advanced Plant Sculpting"
                  width={96}
                  height={64}
                  className="w-24 h-16 rounded-2xl object-cover shrink-0 filter brightness-95 group-hover:brightness-110 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <h3 className="text-xs font-medium text-white truncate mb-0.5">
                    Advanced Plant Sculpting
                  </h3>
                  <p className="text-[11px] text-white/60 line-clamp-2 leading-snug">
                    Multi-layered procedural stem growth with ambient light response.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickAdd();
                }}
                aria-label="Add plant specimen"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 hover:bg-white/25 active:scale-95 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== INTERACTIVE MODALS & DRAWERS ===================== */}

      {/* Menu Overlay Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative w-full max-w-sm h-full liquid-glass-strong p-6 sm:p-8 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo.png"
                    alt="Bloom"
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-lg object-contain"
                  />
                  <span className="font-semibold text-xl tracking-tighter text-white">
                    bloom
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <span className="text-[10px] tracking-widest uppercase text-white/50 font-medium mb-3 block">
                NAVIGATION
              </span>

              <nav className="flex flex-col gap-2">
                {[
                  { name: 'Artistic Gallery', desc: 'Curated 8k botanical stills' },
                  { name: 'Generative Engine', desc: 'AI procedural petal sculpts' },
                  { name: '3D Spatial Flora', desc: 'Export OBJ, GLTF & USDZ' },
                  { name: 'Taxonomy Archive', desc: 'Catalog of 4,200 specimens' },
                  { name: 'Marcus Aurelio Series', desc: 'Visionary edition' },
                ].map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      showToast(`Navigated to ${item.name}`);
                    }}
                    className="liquid-glass rounded-2xl p-3.5 text-left hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between text-xs font-medium text-white mb-0.5">
                      <span>{item.name}</span>
                      <ArrowRight className="w-3 h-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <span className="text-[11px] text-white/60 block">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6">
              <div className="liquid-glass rounded-2xl p-4">
                <span className="text-[10px] tracking-widest uppercase text-white/50 font-medium block mb-1">
                  CURRENT BUILD
                </span>
                <p className="text-xs text-white/80">
                  Bloom Generative Core 4.2
                </p>
                <p className="text-[11px] text-white/50 mt-1">
                  Liquid Glass Morphism Specification
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Explore Now Modal */}
      {exploreModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setExploreModalOpen(false)}
          />
          <div className="relative w-full max-w-xl liquid-glass-strong rounded-3xl p-6 sm:p-8 z-10 flex flex-col gap-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-base font-medium text-white">
                    Explore Bloom AI Synthesis
                  </h2>
                  <p className="text-xs text-white/60">
                    Live procedural parameter engine
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setExploreModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Specimen Showcase Visual */}
            <div className="relative rounded-2xl overflow-hidden liquid-glass h-48 sm:h-56 flex items-center justify-center">
              <img
                src="/src/assets/hero-flowers.png"
                alt="Specimen"
                className="w-full h-full object-cover filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-white/60 font-medium">
                    ACTIVE SEED #8942
                  </span>
                  <p className="text-sm font-medium text-white">
                    Frosted Crystalline Magnolia
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive sliders */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between text-xs text-white/80 mb-1.5">
                  <span>Petal Growth Density</span>
                  <span className="text-white font-medium">{petalDensity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={petalDensity}
                  onChange={(e) => setPetalDensity(Number(e.target.value))}
                  className="w-full accent-white h-1.5 bg-white/20 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-white/80 mb-1.5">
                  <span>Stem Curvature Index</span>
                  <span className="text-white font-medium">{curvatureIndex}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="90"
                  value={curvatureIndex}
                  onChange={(e) => setCurvatureIndex(Number(e.target.value))}
                  className="w-full accent-white h-1.5 bg-white/20 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-white/80 mb-1.5">
                  <span>Glass Translucency &amp; Refraction</span>
                  <span className="text-white font-medium">{translucency}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={translucency}
                  onChange={(e) => setTranslucency(Number(e.target.value))}
                  className="w-full accent-white h-1.5 bg-white/20 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-between pt-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setPetalDensity(75);
                  setCurvatureIndex(35);
                  setTranslucency(90);
                  showToast('Re-randomized seed matrix');
                }}
                className="liquid-glass rounded-full px-4 py-2.5 text-xs text-white/80 hover:text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                Synthesize New Seed
              </button>
              <button
                type="button"
                onClick={() => {
                  setExploreModalOpen(false);
                  showToast('Exporting 3D geometry package (.usdz & .obj)...');
                }}
                className="liquid-glass-strong rounded-full px-5 py-2.5 text-xs font-medium text-white flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export High-Res Model</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Account / Workspace Dialog */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setAccountModalOpen(false)}
          />
          <div className="relative w-full max-w-md liquid-glass-strong rounded-3xl p-6 z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="User"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">
                    Marcus Aurelio Studio
                  </h3>
                  <p className="text-xs text-white/60">
                    Botanical Architect tier
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setAccountModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="liquid-glass rounded-2xl p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/60">Active Specimen Library</span>
                <span className="text-white font-medium">18 Assets</span>
              </div>
              <div className="h-px bg-white/15" />
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/60">GPU Petal Synthesis Units</span>
                <span className="text-white font-medium">1,420 / 2,000</span>
              </div>
              <div className="h-px bg-white/15" />
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/60">Spatial Mesh Formats</span>
                <span className="text-white font-medium">USDZ, OBJ, GLTF</span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setAccountModalOpen(false);
                  showToast('Workspace settings saved');
                }}
                className="liquid-glass rounded-full px-5 py-2 text-xs font-medium text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feature Details Modal (Processing, Growth Archive, Sculpting) */}
      {activeFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setActiveFeature(null)}
          />
          <div className="relative w-full max-w-lg liquid-glass-strong rounded-3xl p-6 sm:p-8 z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  {activeFeature === 'Processing' ? (
                    <Wand2 className="w-4 h-4 text-white" />
                  ) : activeFeature === 'Growth Archive' ? (
                    <BookOpen className="w-4 h-4 text-white" />
                  ) : (
                    <Sparkles className="w-4 h-4 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">
                    {activeFeature}
                  </h3>
                  <p className="text-xs text-white/60">
                    Bloom Generative Pipeline
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveFeature(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="liquid-glass rounded-2xl p-4 text-xs text-white/80 leading-relaxed">
              {activeFeature === 'Processing' && (
                <p>
                  The Bloom Neural Processing Pipeline utilizes differential growth
                  algorithms simulating cellular division and photosynthetic light
                  seeking. Each floral curve is procedurally generated with real-time
                  subdivision surfaces.
                </p>
              )}
              {activeFeature === 'Growth Archive' && (
                <p>
                  Access our verified botanical taxonomy of over 4,200 crystalline
                  and organic flora. All specimens feature physically accurate
                  refraction indices, caustic projections, and procedural vein
                  maps.
                </p>
              )}
              {activeFeature === 'Advanced Plant Sculpting' && (
                <p>
                  Sculpt botanical silhouettes using fluid physics and ambient light
                  attractors. Modify Fibonacci branch distributions and glass
                  dispersion parameters with zero rendering lag.
                </p>
              )}
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveFeature(null);
                  showToast(`Engaged ${activeFeature}`);
                }}
                className="liquid-glass-strong rounded-full px-5 py-2 text-xs font-medium text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                Launch Workbench
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enter Ecosystem Modal */}
      {ecosystemOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => setEcosystemOpen(false)}
          />
          <div className="relative w-full max-w-md liquid-glass-strong rounded-3xl p-6 z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-white">
                  Bloom Creator Ecosystem
                </h3>
                <p className="text-xs text-white/60">
                  Global collective of floral artists
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEcosystemOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              Bloom unites architects, landscape visionaries, and digital sculptors
              exploring the boundary between botanical growth and algorithmic form.
            </p>

            <div className="flex flex-col gap-2">
              {[
                { name: 'X / Twitter Community', handle: '@bloom_botanical' },
                { name: 'Instagram Gallery', handle: '@bloom.sculpt' },
                { name: 'LinkedIn Research Network', handle: 'Bloom Studio Labs' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="liquid-glass rounded-xl p-3 flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-medium text-white block">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-white/50">{item.handle}</span>
                  </div>
                  <Check className="w-3.5 h-3.5 text-white/70" />
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => {
                  setEcosystemOpen(false);
                  showToast('Welcome to the Bloom collective');
                }}
                className="liquid-glass-strong rounded-full px-5 py-2 text-xs font-medium text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                Join Network
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Feedback Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-2xl pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="text-xs font-medium text-white tracking-wide">
            {toastMessage}
          </span>
        </div>
      )}
    </main>
  );
}
