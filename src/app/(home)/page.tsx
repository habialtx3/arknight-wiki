import CharacterCard from "@/components/CharacterCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-hex-pattern pointer-events-none opacity-50" />
      <div className="fixed inset-0 z-0 scanlines-overlay bg-scanlines opacity-10 pointer-events-none" />

      <div className="fixed top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary z-50 pointer-events-none" />
      <div className="fixed top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary z-50 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary z-50 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary z-50 pointer-events-none" />



      <main className="flex-1 flex justify-center w-full z-10 px-4 py-8">
        <div className="w-full max-w-[1400px] flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-primary pl-4 py-1">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight glitch-text cursor-default">
                OPERATOR DIRECTORY
              </h1>
              <p className="text-slate-400 mt-1 font-mono text-sm tracking-wider">
                {`// PERSONNEL DATABASE ACCESS LEVEL 3`}
              </p>
            </div>
            <div className="flex gap-2 font-mono text-xs text-primary/50">
              <span>SYS.VER.4.0.2</span>
              <span>::</span>
              <span>PING 14ms</span>
            </div>
          </div>

          <section className="bg-surface-dark border border-white/5 rounded-lg p-1 shadow-lg relative overflow-hidden group">

            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none"></div>
            <div className="flex flex-col xl:flex-row gap-1">

              <div className="relative flex-1 min-w-[300px] group/search">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-500 group-focus-within/search:text-primary transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="w-full h-14 bg-surface-darker text-white pl-12 pr-4 border-none focus:ring-1 focus:ring-primary placeholder:text-slate-600 font-mono text-sm transition-all"
                  placeholder="SEARCH DATABASE [CODENAME_OR_ID]..."
                  type="text"
                />
                <div className="absolute bottom-0 left-0 h-[2px] bg-primary w-0 group-focus-within/search:w-full transition-all duration-500"></div>
              </div>

              <div className="flex flex-wrap items-center gap-1 bg-surface-darker p-2 xl:px-4 overflow-x-auto scrollbar-hide">
                <span className="text-[10px] font-bold text-slate-500 mr-2 tracking-widest hidden md:block">
                  CLASS //
                </span>
                <button className="h-10 px-3 flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 rounded hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[18px]">
                    grid_view
                  </span>
                  <span className="text-xs font-bold">ALL</span>
                </button>
                <button
                  className="h-10 w-10 flex items-center justify-center bg-surface-dark hover:bg-white/5 text-slate-400 hover:text-white rounded transition-colors group"
                  title="Vanguard"
                >
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                    shield_moon
                  </span>
                </button>
                <button
                  className="h-10 w-10 flex items-center justify-center bg-surface-dark hover:bg-white/5 text-slate-400 hover:text-white rounded transition-colors group"
                  title="Guard"
                >
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                    swords
                  </span>
                </button>
                <button
                  className="h-10 w-10 flex items-center justify-center bg-surface-dark hover:bg-white/5 text-slate-400 hover:text-white rounded transition-colors group"
                  title="Defender"
                >
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                    security
                  </span>
                </button>
                <button
                  className="h-10 w-10 flex items-center justify-center bg-surface-dark hover:bg-white/5 text-slate-400 hover:text-white rounded transition-colors group"
                  title="Sniper"
                >
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                    match_word
                  </span>
                </button>
                <button
                  className="h-10 w-10 flex items-center justify-center bg-surface-dark hover:bg-white/5 text-slate-400 hover:text-white rounded transition-colors group"
                  title="Caster"
                >
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                    flare
                  </span>
                </button>
                <button
                  className="h-10 w-10 flex items-center justify-center bg-surface-dark hover:bg-white/5 text-slate-400 hover:text-white rounded transition-colors group"
                  title="Medic"
                >
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                    medical_services
                  </span>
                </button>
                <button
                  className="h-10 w-10 flex items-center justify-center bg-surface-dark hover:bg-white/5 text-slate-400 hover:text-white rounded transition-colors group"
                  title="Supporter"
                >
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                    stars
                  </span>
                </button>
                <button
                  className="h-10 w-10 flex items-center justify-center bg-surface-dark hover:bg-white/5 text-slate-400 hover:text-white rounded transition-colors group"
                  title="Specialist"
                >
                  <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                    build
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-1 bg-surface-darker p-2 xl:px-4">
                <span className="text-[10px] font-bold text-slate-500 mr-2 tracking-widest hidden md:block">
                  RARITY //
                </span>
                <div className="flex bg-surface-dark rounded p-1 gap-1">
                  <button className="px-3 h-8 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors">
                    1-3
                  </button>
                  <button className="px-3 h-8 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors">
                    4
                  </button>
                  <button className="px-3 h-8 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors">
                    5
                  </button>
                  <button className="px-3 h-8 text-xs font-bold bg-accent-amber text-black rounded shadow-[0_0_10px_rgba(245,158,11,0.4)]">
                    6
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            
          </div>
        </div>
      </main>

      <div className="hidden 2xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-8 items-center pointer-events-none">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <div className="text-[10px] font-mono text-primary/40 vertical-rl tracking-widest writing-mode-vertical-rl rotate-180">
          SECURE_CONNECTION // ENCRYPTED
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>

    </>
  );
}
