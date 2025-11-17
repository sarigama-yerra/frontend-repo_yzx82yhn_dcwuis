import { motion } from "framer-motion";

const items = [
  { quote: "We replaced spreadsheets and cut our posting time by 70%.", author: "Growth Lead, Fintech" },
  { quote: "The scheduling and insights helped us 3x weekly reach.", author: "CMO, SaaS" },
  { quote: "Finally a clean dashboard our team actually enjoys.", author: "Head of Social, Agency" },
];

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Trusted by modern marketing teams</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl bg-white p-6 text-slate-700 shadow-xl ring-1 ring-slate-200">
              <p className="text-sm">“{t.quote}”</p>
              <footer className="mt-4 text-xs text-slate-500">{t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
