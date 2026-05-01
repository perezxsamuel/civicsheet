import { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';
import { 
  Target, 
  Users, 
  Filter, 
  ChevronRight,
  Info,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [candidates, setCandidates] = useState<any[]>([]);
  // Mocking the alignment score logic we discussed for the UI demo
  const [activeFilter, setActiveFilter] = useState('Fiscal Responsibility');

  useEffect(() => {
    // In the real app, this fetches from your 'candidates' or 'sponsors' table
    // joined with their voting record scores
    const mockCandidates = [
      { id: 1, name: 'Alex Rivera', district: 'CA-12', match: 94, party: 'D', image: 'AR' },
      { id: 2, name: 'Jordan Smith', district: 'CA-05', match: 88, party: 'R', image: 'JS' },
      { id: 3, name: 'Casey Chen', district: 'CA-21', match: 72, party: 'D', image: 'CC' },
    ];
    setCandidates(mockCandidates);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Navigation - Identity-focused */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <Target className="text-blue-600" size={24} />
          <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">CivicSheet</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-400 uppercase">Profile Alignment</p>
            <p className="text-sm font-bold text-slate-900">Samuel Perez</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-900 border-2 border-white shadow-sm flex items-center justify-center text-white font-bold">
            SP
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 md:p-10">
        {/* The Filter Bar - This is where the alignment logic begins */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter size={18} className="text-slate-400" />
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Alignment Priorities</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Fiscal Responsibility', 'Tech Regulation', 'Environmental Policy', 'Housing Reform'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeFilter === filter 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 ring-2 ring-blue-600 ring-offset-2' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* The Candidate Alignment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-3xl p-1 shadow-sm border border-slate-200 hover:shadow-xl transition-shadow group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {candidate.image}
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase mb-1">
                      <CheckCircle2 size={12} />
                      {candidate.match}% Match
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Based on {activeFilter}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-black text-slate-900">{candidate.name}</h3>
                  <p className="text-sm font-bold text-slate-400">{candidate.party} &bull; District {candidate.district}</p>
                </div>

                {/* Mini Alignment Bar */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                    <span>Alignment Score</span>
                    <span>{candidate.match}/100</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
                      style={{ width: `${candidate.match}%` }}
                    />
                  </div>
                </div>

                <button className="w-full py-4 rounded-2xl bg-slate-900 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                  View Full Record
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}

          {/* Add Candidate Placeholder */}
          <div className="border-4 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-10 text-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center mb-4">
              <Users className="text-slate-400" size={24} />
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase">Track Another Candidate</p>
          </div>
        </div>

        {/* Insight Footer */}
        <div className="mt-16 p-6 rounded-3xl bg-blue-50 border border-blue-100 flex items-start gap-4">
          <div className="p-2 bg-white rounded-xl text-blue-600 shadow-sm">
            <Info size={20} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-blue-900 uppercase mb-1">How Alignment Works</h4>
            <p className="text-xs text-blue-700 leading-relaxed max-w-2xl">
              Scores are calculated by cross-referencing your selected **{activeFilter}** priorities against the primary 
              sponsorships and voting outcomes stored in your Supabase backend.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}