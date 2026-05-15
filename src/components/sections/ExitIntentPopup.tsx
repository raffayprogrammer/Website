"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (dismissed) return;
      if (e.clientY <= 0) {
        setVisible(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("exitPopupSeen");
    if (alreadySeen) { setDismissed(true); return; }

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("exitPopupSeen", "1");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Top navy bar */}
        <div className="bg-navy px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-cyan text-xs font-semibold uppercase tracking-widest">
              Wait — Before You Go
            </span>
          </div>
          <button
            onClick={dismiss}
            className="text-white/60 hover:text-white transition-colors text-lg leading-none"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)] mb-3 leading-tight">
            Your Free Revenue Audit Is About to Expire
          </h2>
          <p className="text-body text-sm leading-relaxed mb-5">
            Before you leave, let one of our RCM experts show you exactly how
            much revenue your practice is missing. Takes{" "}
            <span className="font-semibold text-charcoal">15 minutes</span>.{" "}
            <span className="font-semibold text-charcoal">100% free</span>. No
            obligation.
          </p>

          <ul className="space-y-2 mb-6">
            {[
              "Analysis of your current collection rate vs. benchmarks",
              "Denial rate breakdown by category",
              "Dollar estimate of annual revenue you are losing",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-charcoal">
                <span className="text-cyan font-bold mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/free-audit"
            onClick={dismiss}
            className="block w-full bg-cyan text-white font-bold py-3.5 rounded-xl text-center hover:bg-[#0090B0] transition-colors text-sm"
          >
            ▶ Claim My Free Audit Before I Leave →
          </Link>

          <button
            onClick={dismiss}
            className="block w-full text-center text-body text-xs mt-3 hover:text-charcoal transition-colors"
          >
            No thanks, I&apos;ll leave revenue on the table
          </button>
        </div>
      </div>
    </div>
  );
}