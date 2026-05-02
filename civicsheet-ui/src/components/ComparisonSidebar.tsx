import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target } from 'lucide-react';
import type { Candidate } from '../types/alignment';

interface ComparisonSidebarProps {
  selectedCandidate: Candidate;
  candidatesWithMatches: Array<Candidate & { matchPercentage?: number }>;
  onCandidateChange: (candidate: Candidate) => void;
  className?: string;
}

export const ComparisonSidebar: React.FC<ComparisonSidebarProps> = ({
  selectedCandidate,
  candidatesWithMatches,
  onCandidateChange,
  className = ''
}) => {
  const [expandedSections, setExpandedSections] = useState({
    match: true,
    candidates: true
  });

  const matchPercentage = selectedCandidate.matchPercentage || 0;

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600 bg-green-50 border-green-200 dark:bg-green-900/30 dark:text-green-300';
    if (percentage >= 60) return 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300';
    if (percentage >= 40) return 'text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300';
    return 'text-red-600 bg-red-50 border-red-200 dark:bg-red-900/30 dark:text-red-300';
  };

  const getMatchLabel = (percentage: number) => {
    if (percentage >= 80) return 'Strong Match';
    if (percentage >= 60) return 'Good Match';
    if (percentage >= 40) return 'Fair Match';
    return 'Weak Match';
  };

  return (
    <div className={`bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 ${className}`}>
      {/* Match Section */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-700">
        <button
          onClick={() => toggleSection('match')}
          className="w-full flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-2">
            <Target className="text-blue-600 dark:text-blue-400" size={20} />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Match</h3>
          </div>
          {expandedSections.match ? (
            <ChevronUp size={16} className="text-slate-400" />
          ) : (
            <ChevronDown size={16} className="text-slate-400" />
          )}
        </button>

        {expandedSections.match && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border-2 ${getMatchColor(matchPercentage)}`}>
              <div className="text-center">
                <div className="text-3xl font-black mb-1">{Math.round(matchPercentage)}%</div>
                <div className="text-sm font-bold uppercase tracking-wide">
                  {getMatchLabel(matchPercentage)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Other Candidates Section */}
      {candidatesWithMatches.length > 1 && (
        <div className="p-6">
          <button
            onClick={() => toggleSection('candidates')}
            className="w-full flex items-center justify-between mb-4"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Compare Candidates</h3>
            {expandedSections.candidates ? (
              <ChevronUp size={16} className="text-slate-400" />
            ) : (
              <ChevronDown size={16} className="text-slate-400" />
            )}
          </button>

          {expandedSections.candidates && (
            <div className="space-y-2">
              {candidatesWithMatches
                .filter(c => c.id !== selectedCandidate.id)
                .map(candidate => (
                  <button
                    key={candidate.id}
                    onClick={() => onCandidateChange(candidate)}
                    className="w-full text-left p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm">{candidate.name}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{candidate.party}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-blue-600 dark:text-blue-400">
                          {Math.round(candidate.matchPercentage || 0)}%
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};