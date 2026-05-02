import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Settings,
  Target,
  Users,
  Check,
  Save,
  RotateCcw,
  CheckSquare,
  Square,
  Moon,
  Sun
} from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';
import { sessionStorage } from '../lib/sessionStorage';
import { mockGroupAlignments } from '../lib/mockData';
import { POLICIES_AND_CONCERNS } from '../lib/policiesAndGroups';
import type { UserPreferences } from '../types/alignment';

// Removed GROUPS_AND_ORGANIZATIONS import as it was unused and causing build failure

export const Configuration: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [preferences, setPreferences] = useState<UserPreferences>(sessionStorage.getUserPreferences());
  const [hasChanges, setHasChanges] = useState(false);

  const togglePolicy = (policyId: string) => {
    setPreferences(prev => ({
      ...prev,
      selectedPolicies: prev.selectedPolicies.includes(policyId)
        ? prev.selectedPolicies.filter(id => id !== policyId)
        : [...prev.selectedPolicies, policyId]
    }));
    setHasChanges(true);
  };

  const toggleGroup = (groupKey: string) => {
    setPreferences(prev => ({
      ...prev,
      selectedGroups: prev.selectedGroups.includes(groupKey)
        ? prev.selectedGroups.filter(key => key !== groupKey)
        : [...prev.selectedGroups, groupKey]
    }));
    setHasChanges(true);
  };

  const savePreferences = () => {
    sessionStorage.setUserPreferences(preferences);
    setHasChanges(false);
  };

  const resetToDefaults = () => {
    const defaults = sessionStorage.getUserPreferences();
    setPreferences(defaults);
    sessionStorage.clear();
    setHasChanges(false);
  };

  const policiesByCategory = POLICIES_AND_CONCERNS.reduce((acc, policy) => {
    if (!acc[policy.category]) {
      acc[policy.category] = [];
    }
    acc[policy.category].push(policy);
    return acc;
  }, {} as Record<string, typeof POLICIES_AND_CONCERNS>);

  const categoryLabels: Record<string, string> = {
    economic: 'Economic Policy',
    social: 'Social Issues',
    environmental: 'Environmental Policy',
    infrastructure: 'Infrastructure',
    healthcare: 'Healthcare',
    education: 'Education',
    criminalJustice: 'Criminal Justice',
    immigration: 'Immigration',
    foreignPolicy: 'Foreign Policy',
    technology: 'Technology',
    labor: 'Labor Rights',
    housing: 'Housing'
  };

  return (
    <div className={`min-h-screen transition-colors ${isDark ? 'dark bg-slate-900' : 'bg-slate-50'}`}>
      <nav className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:hover:text-white transition-colors" size={20} />
            <span className="font-medium text-slate-900 dark:text-white">Back to Dashboard</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              title="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            {hasChanges && (
              <button
                onClick={savePreferences}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Save size={16} />
                Save Changes
              </button>
            )}
            <button
              onClick={resetToDefaults}
              className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6 lg:p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-blue-600 dark:text-blue-400" size={32} />
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">Configure Your Preferences</h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Select the policies and issues that matter most to you. CivicSheet will use these selections
            to calculate how well candidates and groups align with your priorities.
          </p>
        </div>

        {/* Policy Selection Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Target className="text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Your Policy Priorities</h2>
          </div>

          <div className="space-y-8">
            {Object.entries(policiesByCategory).map(([category, policies]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                  {categoryLabels[category] || category}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {policies.map((policy) => (
                    <button
                      key={policy.id}
                      onClick={() => togglePolicy(policy.id)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        preferences.selectedPolicies.includes(policy.id)
                          ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          {preferences.selectedPolicies.includes(policy.id) ? (
                            <CheckSquare className="text-blue-600 dark:text-blue-400" size={20} />
                          ) : (
                            <Square className="text-slate-400 dark:text-slate-500" size={20} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 dark:text-white mb-1">{policy.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{policy.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group Comparison Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
          <div className="flex items-center gap-2 mb-6">
            <Users className="text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Comparison Groups</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(mockGroupAlignments).map(([key, group]) => (
              <button
                key={key}
                onClick={() => toggleGroup(key)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  preferences.selectedGroups.includes(key)
                    ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{group.groupName}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{group.demographic}</p>
                  </div>
                  {preferences.selectedGroups.includes(key) && (
                    <Check className="text-blue-600 dark:text-blue-400 ml-2" size={20} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};