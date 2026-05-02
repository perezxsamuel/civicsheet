import React, { useState } from 'react';
import { RadarChartOverlay, ComparisonSidebar } from '../components';
import { mockUserAlignment, mockCandidates } from '../lib/mockData';

export const AlignmentDemo: React.FC = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(mockCandidates[0]);

  const candidatesWithMatches = mockCandidates.map(c => ({
    ...c,
    matchPercentage: Math.random() * 100
  }));

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-black text-slate-900 mb-2">Political Alignment Platform</h1>
        <p className="text-slate-600">Compare candidates against your values and demographic groups</p>
      </div>

      {/* Candidate Selection */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Select a Candidate</h2>
        <div className="flex flex-wrap gap-3">
          {mockCandidates.map(candidate => (
            <button
              key={candidate.id}
              onClick={() => setSelectedCandidate(candidate)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                selectedCandidate.id === candidate.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
              }`}
            >
              {candidate.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Comparison Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Radar Chart - Takes up 2 columns on large screens */}
        <div className="lg:col-span-2">
          <RadarChartOverlay
            userAlignment={mockUserAlignment}
            candidateAlignment={selectedCandidate.alignment}
            candidateName={selectedCandidate.name}
          />
        </div>

        {/* Sidebar - Takes up 1 column */}
        <div>
          <ComparisonSidebar
            selectedCandidate={selectedCandidate}
            candidatesWithMatches={candidatesWithMatches.map(c => ({
              ...c,
              matchPercentage: Math.random() * 100
            }))}
            onCandidateChange={setSelectedCandidate}
          />
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">How to Use These Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-bold text-slate-900 mb-2">RadarChartOverlay</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Displays alignment across 5 policy areas</li>
              <li>• Overlays user, candidate, and group data</li>
              <li>• Uses Recharts for responsive visualization</li>
              <li>• Customizable colors and styling</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-2">ComparisonSidebar</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Shows match percentage calculation</li>
              <li>• Provides demographic filtering</li>
              <li>• Expandable/collapsible sections</li>
              <li>• Real-time group comparison updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};