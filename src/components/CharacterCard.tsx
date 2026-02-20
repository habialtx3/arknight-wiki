import React from 'react'

export default function CharacterCard() {
    return (
        <>
            <div className="group relative bg-surface-dark border border-white/5 hover:border-accent-lime/50 transition-all duration-300 rounded overflow-hidden cursor-pointer hover:shadow-[0_0_20px_rgba(163,230,53,0.15)] clip-corner">
                <div className="aspect-[3/4] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                    <div className="absolute inset-0 bg-primary mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                    <img
                        alt="Portrait of a male operator with stern expression"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                        src="/assets/character/amiya.webp"
                    />

                    <div className="absolute top-2 right-2 z-20 bg-black/50 backdrop-blur-sm p-1 rounded border border-white/10">
                        <span className="material-symbols-outlined text-white text-[18px]">
                            flare
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-3 z-20 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-0.5 text-accent-amber text-[10px]">
                            <span className="material-symbols-outlined text-[12px] fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-[12px] fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-[12px] fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-[12px] fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-[12px] fill-current">
                                star
                            </span>
                            <span className="material-symbols-outlined text-[12px] fill-current">
                                star
                            </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">
                            #SA01
                        </span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight uppercase tracking-wide group-hover:text-accent-lime transition-colors">
                        AMIYA
                    </h3>
                    <div className="w-full h-[2px] bg-white/20 mt-1 overflow-hidden">
                        <div className="h-full bg-accent-lime w-0 group-hover:w-full transition-all duration-500 ease-out" />
                    </div>
                </div>
            </div>
        </>
    )
}
