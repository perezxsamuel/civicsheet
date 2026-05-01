import type { UserPreferences, UserAlignment } from '../types/alignment';

const STORAGE_KEY = 'civicsheet_user_preferences';

export const defaultUserAlignment: UserAlignment = {
  economicPolicy: 50,
  socialJustice: 50,
  environmentalRegulation: 50,
  infrastructure: 50,
  healthcare: 50
};

export const defaultUserPreferences: UserPreferences = {
  selectedPolicies: ['climate-change-action', 'racial-justice-reform', 'medicare-for-all'],
  selectedGroups: ['millennials'],
  alignment: defaultUserAlignment,
  lastUpdated: new Date().toISOString()
};

export const sessionStorage = {
  getUserPreferences(): UserPreferences {
    try {
      const stored = window.sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Validate the structure
        if (parsed && typeof parsed === 'object' && parsed.alignment) {
          return parsed;
        }
      }
    } catch (error) {
      console.warn('Failed to parse user preferences from session storage:', error);
    }
    return defaultUserPreferences;
  },

  setUserPreferences(preferences: UserPreferences): void {
    try {
      const updated = {
        ...preferences,
        lastUpdated: new Date().toISOString()
      };
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error('Failed to save user preferences to session storage:', error);
    }
  },

  updateAlignment(alignment: Partial<UserAlignment>): void {
    const current = this.getUserPreferences();
    this.setUserPreferences({
      ...current,
      alignment: { ...current.alignment, ...alignment }
    });
  },

  updateSelectedPolicies(policies: string[]): void {
    const current = this.getUserPreferences();
    this.setUserPreferences({
      ...current,
      selectedPolicies: policies
    });
  },

  updateSelectedGroups(groups: string[]): void {
    const current = this.getUserPreferences();
    this.setUserPreferences({
      ...current,
      selectedGroups: groups
    });
  },

  updateSelectedCandidates(candidates: string[]): void {
    // Store in localStorage for comparison across sessions if needed
    try {
      window.sessionStorage.setItem('civicsheet_selected_candidates', JSON.stringify(candidates));
    } catch (error) {
      console.error('Failed to save selected candidates:', error);
    }
  },

  getSelectedCandidates(): string[] {
    try {
      const stored = window.sessionStorage.getItem('civicsheet_selected_candidates');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.warn('Failed to parse selected candidates:', error);
      return [];
    }
  },

  clear(): void {
    window.sessionStorage.removeItem(STORAGE_KEY);
  }
};