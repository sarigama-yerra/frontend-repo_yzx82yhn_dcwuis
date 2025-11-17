import { motion } from "framer-motion";
import { Upload, FileText, Rocket } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload", desc: "Add your image or media in seconds." },
  { icon: FileText, title: "Describe", desc: "Write a caption, select status, schedule." },
  { icon: Rocket, title: "Auto-Publish", desc: "We publish to LinkedIn, Facebook, Instagram." },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">How it works</h2>
          <p className="mt-2 text-slate-600">From asset to audience in three simple steps.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
