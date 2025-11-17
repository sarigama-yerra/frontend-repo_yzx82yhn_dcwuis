import { motion } from "framer-motion";
import { ArrowRight, Play, Linkedin, Facebook, Instagram } from "lucide-react";
import Spline from "@splinetool/react-spline";
import DashboardMock from "./DashboardMock";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            Automated Multi-Platform Social Media Posting
          </span>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Automate your content from idea to impact
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Upload an image, write a description, select a status, and auto-publish across your LinkedIn profile, LinkedIn Pages, Facebook, and Instagram. Replace spreadsheets with a clean, dashboard-first workflow.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 px-6 py-3 text-white shadow-lg shadow-indigo-500/20 transition hover:shadow-indigo-500/30"
            >
              Start Posting
              <ArrowRight className="h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3 text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
            >
              <Play className="h-4 w-4" />
              Try Demo
            </a>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 text-slate-500">
            <span className="text-xs uppercase tracking-wide">Publish to</span>
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 ring-1 ring-slate-200 shadow-sm backdrop-blur">
              <Linkedin className="h-4 w-4 text-indigo-600" />
              <Instagram className="h-4 w-4 text-pink-500" />
              <Facebook className="h-4 w-4 text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          id="demo"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-12 max-w-6xl"
        >
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}
