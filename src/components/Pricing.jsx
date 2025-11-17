import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$19",
    desc: "For solo creators",
    features: ["10 scheduled posts/mo", "3 connected accounts", "Basic insights"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$49",
    desc: "For growing teams",
    features: ["Unlimited scheduling", "10 connected accounts", "Advanced insights"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "$99",
    desc: "For agencies",
    features: ["Unlimited everything", "Priority support", "Team workflows"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Simple pricing</h2>
          <p className="mt-2 text-slate-600">Start free. Upgrade when you’re ready.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`rounded-2xl p-6 shadow-xl ring-1 ${t.highlight ? 'bg-gradient-to-br from-indigo-600 to-violet-600 text-white ring-indigo-400' : 'bg-white ring-slate-200 text-slate-900'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="text-3xl font-bold">{t.price}<span className="text-sm font-medium opacity-70">/mo</span></div>
              </div>
              <p className={`mt-1 text-sm ${t.highlight? 'text-white/80': 'text-slate-600'}`}>{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${t.highlight? 'bg-white/20 text-white': 'bg-indigo-50 text-indigo-600'}`}>
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-medium shadow ${t.highlight? 'bg-white text-slate-900': 'bg-gradient-to-br from-indigo-600 to-violet-600 text-white'}`}>Choose {t.name}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
