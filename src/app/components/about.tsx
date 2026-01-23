import hostPhoto from "figma:asset/d873a09b9daa74b19fd6bfcd9d5107923506e80f.png";
import hostsPhoto from "figma:asset/a63fc3fbb80d4ad73ddfeba588e73e49fdf50c84.png";
import { useLanguage } from '@/contexts/language-context';
import { useState } from 'react';

export function About() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'right' | 'notRight'>('right');
  
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-[#0a3d3d] mb-6">{t.about.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
            <p className="text-gray-700 text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
            <p className="text-gray-700 text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.about.p3 }} />
            
            <div className="bg-[#f58220]/10 border-l-4 border-[#f58220] p-4 mb-6">
              <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: t.about.note }} />
            </div>

            <p className="text-gray-600 text-sm mb-4" dangerouslySetInnerHTML={{ __html: t.about.budget }} />
          </div>
          <div className="space-y-4">
            <img 
              src={hostsPhoto}
              alt={t.about.hostsPhotoAlt}
              className="rounded-lg shadow-xl w-full h-[280px] object-cover"
            />
            <img 
              src={hostPhoto}
              alt={t.about.hostPhotoAlt}
              className="rounded-lg shadow-xl w-full h-[280px] object-cover"
            />
          </div>
        </div>

        {/* Who We're Right For */}
        {/* Mobile Tabbed Interface */}
        <div className="mt-12 md:hidden">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab('right')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'right'
                  ? 'bg-[#f58220] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              ✓ {t.about.rightForYouTitle}
            </button>
            <button
              onClick={() => setActiveTab('notRight')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'notRight'
                  ? 'bg-gray-700 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              • {t.about.notRightTitle}
            </button>
          </div>

          {activeTab === 'right' ? (
            <div className="bg-[#b3dce6]/20 p-5 rounded-lg">
              <ul className="space-y-2.5">
                {t.about.rightForYou.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700 text-sm">
                    <span className="text-[#f58220] mr-2 text-base flex-shrink-0 mt-0.5">✓</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-gray-50 p-5 rounded-lg border-2 border-gray-200">
              <ul className="space-y-2.5">
                {t.about.notRight.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600 text-sm">
                    <span className="text-gray-400 mr-2 text-base flex-shrink-0 mt-0.5">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Grid */}
        <div className="mt-16 hidden md:grid grid-cols-2 gap-8">
          <div className="bg-[#b3dce6]/20 p-8 rounded-lg">
            <h3 className="text-2xl text-[#0a3d3d] mb-6">{t.about.rightForYouTitle}</h3>
            <ul className="space-y-3">
              {t.about.rightForYou.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-[#f58220] mr-3 text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
            <h3 className="text-2xl text-[#0a3d3d] mb-6">{t.about.notRightTitle}</h3>
            <ul className="space-y-3">
              {t.about.notRight.map((item, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <span className="text-gray-400 mr-3 text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

About.displayName = 'About';