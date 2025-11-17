import { motion } from "framer-motion";
import { Share2, Layers, Calendar, BarChart3 } from "lucide-react";

const features = [
  { icon: Share2, title: "Auto-Post", desc: "One click to publish everywhere with platform-aware formatting." },
  { icon: Layers, title: "Multi-Platform", desc: "LinkedIn Pages, Profiles, Facebook, and Instagram support." },
  { icon: Calendar, title: "Scheduling", desc: "Plan content with a calendar and precise time slots." },
  { icon: BarChart3, title: "Insights", desc: "Real-time impressions, clicks, reach, and engagement." },
];

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Built for modern social teams</h2>
          <p className="mt-2 text-slate-600">Everything you need to automate posting and grow engagement.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
