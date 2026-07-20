"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";

const quizOptions = [
  {
    id: "calves",
    label: "Heavy legs or tight calves",
    scene: "Training, long workdays, standing, or travel",
    product: "RecoveryAir Calf Pro",
    href: "/products/recoveryair-calf-pro",
    reason: "A 15-minute calf-focused routine with air compression and heated surface support."
  },
  {
    id: "eyes",
    label: "Tired eyes after screens",
    scene: "Desk days, evening decompression, or travel rest",
    product: "RelaxiWave Eye Mask",
    href: "/products/relaxiwave-eye-mask",
    reason: "A short eye relaxation routine with vibration massage, heated comfort, and built-in white noise."
  },
  {
    id: "back",
    label: "Back or body tension",
    scene: "Desk-body tension, workouts, or self-massage routines",
    product: "Back Massage Gun",
    href: "/products/back-massage-gun",
    reason: "Independent back massage support with full-body relaxation positioning."
  },
  {
    id: "legs",
    label: "Full-leg recovery routine",
    scene: "Broader leg recovery after active days",
    product: "RecoveryAir Leg Elite",
    href: "/products/recoveryair-leg-elite",
    reason: "EMS massage, heated comfort, and air-bag compression for leg-focused routines."
  }
];

export function RecoveryQuiz() {
  const [selectedId, setSelectedId] = useState(quizOptions[0].id);
  const selectedOption = useMemo(() => quizOptions.find((option) => option.id === selectedId) ?? quizOptions[0], [selectedId]);

  return (
    <section className="bg-white py-16" id="recovery-quiz">
      <div className="grid page-shell gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeader
          eyebrow="Find your recovery"
          title="Answer one question first: what needs attention today?"
          description="This is the first version of the Chirp-style recommendation path. It uses confirmed product positioning and avoids medical diagnosis."
        />
        <div className="rounded-monauro border border-black/10 bg-[#f7f7f4] p-5">
          <div className="grid gap-3">
            {quizOptions.map((option) => (
              <button
                className={`rounded-monauro border p-4 text-left transition ${
                  option.id === selectedId ? "border-monauro-orange bg-white shadow-sm" : "border-black/10 bg-white/60 hover:border-black/25"
                }`}
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                type="button"
              >
                <p className="font-semibold">{option.label}</p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{option.scene}</p>
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-monauro border border-black/10 bg-white p-5">
            <Tag tone="green">Recommended routine</Tag>
            <h3 className="mt-4 text-2xl font-semibold">{selectedOption.product}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{selectedOption.reason}</p>
            <div className="mt-6">
              <Button href={selectedOption.href}>View recommendation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
