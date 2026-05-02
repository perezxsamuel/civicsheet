import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Settings,
  Info,
  Heart,
  Users,
  Award,
  BarChart3
} from 'lucide-react';
import { RadarChartOverlay } from './RadarChartOverlay';
import { ComparisonSidebar } from './ComparisonSidebar';
import { SelectedFilters } from './SelectedFilters';
import { calculateMatchPercentage } from '../lib/matchPercentage';
import { sessionStorage } from '../lib/sessionStorage';
import { mockCandidates } from '../lib/mockData';
import type { Candidate, UserPreferences } from '../types/alignment';

export const Dashboard: React.FC = () => {
  const [userPrefs] = useState<UserPreferences>(sessionStorage.getUserPreferences());
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate>(mockCandidates[0]);

  // For demo purposes, start with first 2 candidates selected
  const getInitialSelectedCandidates = () => {
    return mockCandidates.slice(0, 2);
  };

  const [comparisonCandidates, setComparisonCandidates] = useState<Candidate[]>(getInitialSelectedCandidates());

  // Calculate matches when user preferences change
  const candidatesWithMatches = mockCandidates
    .map(candidate => ({
      ...candidate,
      matchPercentage: calculateMatchPercentage(userPrefs.selectedPolicies, candidate.policyPositions)
    }))
    .sort((a, b) => (b.matchPercentage || 0) - (a.matchPercentage || 0));

  const getPartyColor = (party: string) => {
    switch (party) {
      case 'Democrat': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Republican': return 'text-red-600 bg-red-50 border-red-200';
      case 'Independent': return 'text-purple-600 bg-purple-50 border-purple-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <Target className="text-blue-600 group-hover:text-blue-700 transition-colors" size={28} />
            <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">
              CivicSheet
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <Link
              to="/configure"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <Settings size={18} />
              <span className="font-medium">Configure</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <Info size={18} />
              <span className="font-medium">About</span>
            </Link>
            <Link
              to="/sponsors"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <Heart size={18} />
              <span className="font-medium">Sponsors</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">
            Candidate Alignment
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Compare how candidates and groups align with the policies and priorities you care about.
            Transparent, data-driven insights to help you understand the issues.
          </p>
        </div>

        {/* Selected Filters Summary */}
        <SelectedFilters
          selectedPolicies={userPrefs.selectedPolicies}
          selectedCandidates={comparisonCandidates}
          selectedGroups={userPrefs.selectedGroups}
          onRemovePolicy={(policyId) => {
            sessionStorage.updateSelectedPolicies(userPrefs.selectedPolicies.filter(p => p !== policyId));
          }}
          onRemoveCandidate={(candidateId) => {
            setComparisonCandidates(comparisonCandidates.filter(c => c.id !== candidateId));
          }}
          onRemoveGroup={(groupId) => {
            sessionStorage.updateSelectedGroups(userPrefs.selectedGroups.filter(g => g !== groupId));
          }}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          {/* Radar Chart - Takes up 2 columns */}
          <div className="xl:col-span-2">
            <RadarChartOverlay
              userAlignment={userPrefs.alignment}
              candidateAlignment={selectedCandidate.alignment}
              candidateName={selectedCandidate.name}
              className="h-full"
            />
          </div>

          {/* Sidebar */}
          <div>
            <ComparisonSidebar
              selectedCandidate={selectedCandidate}
              candidatesWithMatches={candidatesWithMatches}
              onCandidateChange={setSelectedCandidate}
            />
          </div>
        </div>

        {/* Candidate Leaderboard */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Award className="text-amber-500" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">Top Matches</h2>
            </div>
            <div className="text-sm text-slate-500">
              Ranked by alignment with your selected policies
            </div>
          </div>

          {userPrefs.selectedPolicies.length === 0 ? (
            <div className="text-center py-12">
              <Target className="text-slate-400 mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">No Policies Selected</h3>
              <p className="text-slate-600 mb-6">
                To see candidate matches, first select the policies that matter most to you.
              </p>
              <Link
                to="/configure"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Settings size={18} />
                Configure Your Preferences
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {candidatesWithMatches.slice(0, 4).map((candidate, index) => (
                <div
                  key={candidate.id}
                  onClick={() => setSelectedCandidate(candidate)}
                  className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                    selectedCandidate.id === candidate.id
                      ? 'border-blue-300 bg-blue-50 shadow-md'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{candidate.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getPartyColor(candidate.party)}`}>
                            {candidate.party}
                          </span>
                          <span className="text-sm text-slate-500">
                            {candidate.state} {candidate.district}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-black text-slate-900">
                        {candidate.matchPercentage}%
                      </div>
                      <div className="text-sm text-slate-500">Match</div>
                    </div>
                  </div>

                  {/* Key Positions */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {candidate.keyPositions.slice(0, 3).map((position, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        {position}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Selected Candidate Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Votes */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="text-blue-600" size={20} />
              <h3 className="text-xl font-bold text-slate-900">Recent Voting Record</h3>
            </div>

            <div className="space-y-4">
              {selectedCandidate.recentVotes.map((vote, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 text-sm">{vote.bill}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        vote.position === 'Yes'
                          ? 'bg-green-100 text-green-700'
                          : vote.position === 'No'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {vote.position}
                      </span>
                      <span className="text-xs text-slate-500">
                        {vote.alignment}% alignment
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Lobbyists */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Users className="text-blue-600" size={20} />
              <h3 className="text-xl font-bold text-slate-900">Top Contributors</h3>
            </div>

            <div className="space-y-3">
              {selectedCandidate.topLobbyists.map((lobbyist, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-slate-900">{lobbyist}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-xs text-amber-800">
                <strong>Transparency Note:</strong> This data is sourced from public campaign finance records
                and lobbying disclosures. CivicSheet maintains strict neutrality in data presentation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

