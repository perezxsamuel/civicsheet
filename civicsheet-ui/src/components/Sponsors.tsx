import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  DollarSign,
  Users,
  Scale
} from 'lucide-react';

export const Sponsors: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="text-slate-600 group-hover:text-slate-900 transition-colors" size={20} />
            <span className="font-medium text-slate-900">Back to Dashboard</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6">
            <Heart className="text-red-600" size={32} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Sponsorship Policy</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Maintaining trust through strict neutrality and transparency
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">Our Commitment to Neutrality</h2>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              CivicSheet operates on a fundamental principle: <strong>political neutrality is non-negotiable</strong>.
              Our mission is to provide citizens with unbiased, data-driven political analysis. We believe that
              trust in political information is essential for a healthy democracy, and we will never compromise
              this trust for financial gain.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-blue-800 font-medium">
                "The moment CivicSheet shows favoritism toward any political party, candidate, or ideology,
                we cease to serve the public interest. Our sponsorship policy exists to protect this neutrality."
              </p>
            </div>
          </div>
        </div>

        {/* Sponsorship Guidelines */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">Sponsorship Guidelines</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Allowed */}
            <div className="border border-green-200 bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="text-green-600" size={24} />
                <h3 className="text-lg font-bold text-green-800">Permitted Sponsors</h3>
              </div>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5" />
                  <span>Non-profit organizations focused on civic education</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5" />
                  <span>Academic institutions and research organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5" />
                  <span>Technology infrastructure providers (servers, hosting)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5" />
                  <span>Open-source software foundations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5" />
                  <span>Individual donors (no corporate affiliations)</span>
                </li>
              </ul>
            </div>

            {/* Not Allowed */}
            <div className="border border-red-200 bg-red-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="text-red-600" size={24} />
                <h3 className="text-lg font-bold text-red-800">Strictly Prohibited</h3>
              </div>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-600 mt-0.5" />
                  <span>Political parties or party-affiliated organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-600 mt-0.5" />
                  <span>Political action committees (PACs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-600 mt-0.5" />
                  <span>Lobbying firms or trade associations</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-600 mt-0.5" />
                  <span>Corporations with political interests</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle size={16} className="text-red-600 mt-0.5" />
                  <span>Any entity that could influence political outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">Current Sponsorship Status</h2>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-amber-600 mt-1" size={20} />
              <div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">No Active Sponsors</h3>
                <p className="text-amber-800 mb-4">
                  CivicSheet currently operates without any sponsorships or external funding.
                  This ensures complete independence and eliminates any potential conflicts of interest.
                </p>
                <p className="text-amber-800 text-sm">
                  <strong>Future Policy:</strong> If sponsorships are ever accepted, they will be
                  publicly disclosed with full transparency about the relationship and any conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Support */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-blue-600" size={32} />
            <h2 className="text-2xl font-bold text-slate-900">Support CivicSheet</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Individual Support</h3>
              <p className="text-slate-600 mb-4">
                The most valuable support comes from individuals who believe in our mission.
                You can contribute by:
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Using and sharing CivicSheet with others</li>
                <li>• Providing feedback and suggestions</li>
                <li>• Contributing to our open-source codebase</li>
                <li>• Spreading awareness about civic technology</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Organization Support</h3>
              <p className="text-slate-600 mb-4">
                Organizations interested in supporting civic technology can:
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Provide infrastructure support (hosting, servers)</li>
                <li>• Contribute to open-source development</li>
                <li>• Partner on civic education initiatives</li>
                <li>• Support academic research partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions About Sponsorship?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We welcome inquiries from organizations that align with our mission of promoting
            transparent, neutral civic technology. All sponsorship discussions are conducted
            with full transparency.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="mailto:sponsorship@civicsheet.org"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              Contact Us
            </a>
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};