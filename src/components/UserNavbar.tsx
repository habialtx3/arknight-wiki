import React from 'react'

export default function UserNavbar() {
    return (
        <>
            <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-surface-dark/80 border-b border-white/5">
                <div className="flex items-center justify-between px-6 py-3 max-w-[1600px] mx-auto">

                    <div className="flex items-center gap-4">
                        <div className="size-8 text-primary animate-pulse">
                            <span className="material-symbols-outlined text-[32px]">hub</span>
                        </div>
                        <div>
                            <h2 className="text-white text-lg font-bold leading-tight tracking-[0.1em]">
                                RHODES ARCHIVE
                            </h2>
                            <p className="text-[10px] text-primary/60 font-mono tracking-widest">
                                TERMINAL_01 // CONNECTED
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">

                        <div className="hidden md:flex gap-4">
                            <div className="flex items-center gap-2 px-3 py-1 rounded bg-surface-darker border border-white/5">
                                <span className="material-symbols-outlined text-accent-lime text-[16px]">
                                    bolt
                                </span>
                                <span className="text-xs font-bold text-white tracking-widest">
                                    135/135
                                </span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 rounded bg-surface-darker border border-white/5">
                                <span className="material-symbols-outlined text-accent-amber text-[16px]">
                                    monetization_on
                                </span>
                                <span className="text-xs font-bold text-white tracking-widest">
                                    540,200
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex items-center justify-center size-9 rounded hover:bg-white/10 text-white transition-colors group relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2 size-2 bg-accent-amber rounded-full animate-ping" />
                                <span className="absolute top-2 right-2 size-2 bg-accent-amber rounded-full" />
                            </button>
                            <button className="flex items-center justify-center size-9 rounded hover:bg-white/10 text-white transition-colors">
                                <span className="material-symbols-outlined">settings</span>
                            </button>
                            <div className="ml-2 size-9 rounded overflow-hidden border border-white/10">
                                <img
                                    alt="User avatar profile picture"
                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC654MgGK0G609g7g2NyQ_eKVdVWMrGrFVdCEYcjkSkD2jQ3YMtmyJTXYLO5pFihCpX5cEH4SqT935EsloUWd1AtUOS0lHg4To7XSGs0TQnj0TkAEBaADKiVRz7AiiZk8US713ZpjXET_Vgz-unOpPiDZf2Zq78yVe8nq7r5uYtKqG_MZ1dur7JSSAsyPgk4FpQdzTdUeUTxT2WuvyBp4EBc-JLAbXH7W7yBF5DF79bUfJ1a-9vUlMHHzQUOSp5ygylOtcjqH8i6Yk"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
