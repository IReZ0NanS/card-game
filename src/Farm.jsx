import React, { useState, useEffect } from "react";
import { Swords } from "lucide-react";

export default function FarmView({ profile, db, appId, cardsCatalog, rarities, showToast }) {
    return (
        <div className="pb-10 animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center justify-center min-h-[60vh] text-center">
            <Swords size={80} className="text-red-500 mb-6 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse" />
            <h2 className="text-4xl font-black text-white uppercase tracking-widest mb-2">
                Полювання
            </h2>
            <p className="text-neutral-400">
                Готуйте зброю, Мій лорд! Тут скоро з'являться Боси.
            </p>
        </div>
    );
}