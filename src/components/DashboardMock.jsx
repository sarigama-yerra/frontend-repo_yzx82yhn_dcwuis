import { motion } from "framer-motion";
import { Calendar, Clock8, ImagePlus, Upload, Rocket, BarChart2, Activity, Send, Wand2, CheckCircle2, Loader2 } from "lucide-react";

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-white/80 p-4 shadow-xl ring-1 ring-slate-200 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

export default function DashboardMock() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-8 space-y-4"
      >
        <Card>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow">
                <Upload className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-800">Create a Post</h3>
                <p className="text-xs text-slate-500">Upload → Describe → Select Status → Auto-Publish</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2 py-1 text-teal-700 ring-1 ring-teal-200"><Loader2 className="h-3 w-3 animate-spin"/> Auto-publish Ready</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="col-span-1">
              <div className="aspect-video w-full rounded-xl border border-dashed border-slate-300 bg-slate-50/60 p-3 text-center">
                <div className="flex h-full w-full flex-col items-center justify-center text-slate-500">
                  <ImagePlus className="h-6 w-6" />
                  <span className="mt-1 text-xs">Upload image</span>
                </div>
              </div>
            </div>
            <div className="col-span-2 space-y-3">
              <textarea className="w-full rounded-xl border border-slate-200 bg-white/70 p-3 text-sm text-slate-700 placeholder-slate-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-200" rows={4} placeholder="Write a caption... #hashtags" />

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <select className="w-full rounded-xl border border-slate-200 bg-white/70 p-2.5 text-sm text-slate-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-200">
                  <option>Draft</option>
                  <option>Review</option>
                  <option>Ready to Post</option>
                </select>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 p-2.5 text-sm text-slate-700 shadow-inner">
                  <Calendar className="h-4 w-4 text-indigo-600" />
                  <span>Aug 24, 10:30 AM</span>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 px-3 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/20">
                  <Rocket className="h-4 w-4" />
                  Schedule
                </button>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-50/60 p-2 ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                  Publish to: LinkedIn, Facebook, Instagram
                </div>
                <button className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200 shadow-sm">
                  <Wand2 className="h-4 w-4 text-violet-600" /> AI Suggest Caption
                </button>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-semibold text-slate-800">Posting Pipeline</h3>
          <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: "Draft", color: "from-slate-200 to-slate-100" },
              { label: "Review", color: "from-amber-200 to-amber-100" },
              { label: "Ready", color: "from-indigo-200 to-indigo-100" },
              { label: "Published", color: "from-teal-200 to-teal-100" },
            ].map((s, i) => (
              <div key={i} className={`rounded-xl bg-gradient-to-b ${s.color} p-3 ring-1 ring-slate-200`}>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">{s.label}</span>
                  <span className="text-slate-500">{Math.floor(Math.random()*8)+2}</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/60">
                  <div className="h-full w-2/3 rounded-full bg-slate-900/10" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="md:col-span-4 space-y-4"
      >
        <Card>
          <h3 className="text-sm font-semibold text-slate-800">Calendar & Scheduler</h3>
          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[10px] text-slate-500">
            {[...Array(28)].map((_, i) => (
              <div key={i} className={`aspect-square rounded-lg ${i%6===0? 'bg-indigo-50 ring-1 ring-indigo-200 text-indigo-700': 'bg-slate-50 ring-1 ring-slate-200' } flex items-center justify-center`}>{i+1}</div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-white/70 p-2 text-xs text-slate-600 ring-1 ring-slate-200">
            <div className="flex items-center gap-2"><Clock8 className="h-3.5 w-3.5 text-indigo-600"/> Next: Today 2:00 PM</div>
            <button className="rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 px-3 py-1.5 font-medium text-white">Quick Publish</button>
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-semibold text-slate-800">Insights</h3>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { label: 'Impressions', value: '24.3k' },
              { label: 'Clicks', value: '3.1k' },
              { label: 'Reach', value: '58.9k' },
            ].map((m, i) => (
              <div key={i} className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                <div className="text-[10px] text-slate-500">{m.label}</div>
                <div className="text-sm font-semibold text-slate-800">{m.value}</div>
                <div className="mt-2 h-8 w-full overflow-hidden rounded-lg bg-white">
                  <div className="h-full w-full bg-gradient-to-r from-indigo-200 via-violet-200 to-teal-200" style={{ clipPath: 'polygon(0 80%, 10% 70%, 20% 90%, 30% 60%, 40% 75%, 50% 55%, 60% 65%, 70% 40%, 80% 55%, 90% 30%, 100% 45%)' }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-semibold text-slate-800">Recent Posts</h3>
          <div className="mt-2 space-y-2">
            {[1,2,3].map((i)=> (
              <div key={i} className="flex items-center justify-between rounded-xl bg-white/70 p-2 ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <div className="h-7 w-7 rounded-lg bg-slate-100" />
                  Launch update v{i}.0 — 1h ago
                </div>
                <button className="inline-flex items-center gap-1 rounded-lg bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-700 ring-1 ring-slate-200"><Send className="h-3 w-3"/> Republish</button>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
