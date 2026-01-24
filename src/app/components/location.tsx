import { MapPin, Plane, Car, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/translations';
import { siteConfig } from '@/config/siteConfig';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Location() {
  const { language } = useLanguage();
  const t = translations[language].location;
  const common = translations[language].common;
  const [isRecommendedExpanded, setIsRecommendedExpanded] = useState(false);
  const [expandedTransport, setExpandedTransport] = useState<number | null>(null);

  const toggleTransport = (index: number) => {
    setExpandedTransport(expandedTransport === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#b3dce6]/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-[#0a3d3d] text-center mb-4">{t.title}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src={siteConfig.location.googleMapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.business.name} Location`}
              className="w-full h-[300px] sm:h-[400px]"
            ></iframe>
          </div>

          {/* Address & Quick Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4 mb-4">
                <MapPin className="w-6 h-6 text-[#f58220] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-[#0a3d3d] mb-2">{t.ourAddress}</h3>
                  <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                    {t.address}
                  </p>
                  <a
                    href={siteConfig.location.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#f58220] hover:text-[#d47020] mt-3 transition-colors text-base"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    {t.directions}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <Plane className="w-6 h-6 text-[#f58220] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl text-[#0a3d3d] mb-2">{t.fromAirport}</h3>
                  <p className="text-gray-700 text-base mb-2">
                    <strong>{t.distance}</strong> {t.distanceValue}
                  </p>
                  <p className="text-gray-700 text-base">
                    <strong>{t.travelTime}</strong> {t.travelTimeValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="bg-gradient-to-r from-[#f58220] to-[#d47020] text-white rounded-2xl p-4 sm:p-8 md:p-10 mb-8">
          <div className="flex items-start gap-3 sm:gap-4">
            <Car className="w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">{t.recommendedTitle}</h3>
              <p className="text-sm sm:text-lg text-white/90 mb-3 sm:mb-0">{t.recommendedSubtitle}</p>
            </div>
          </div>
          
          {/* Accordion Button - Mobile Only */}
          <button
            className="md:hidden w-full text-sm text-white/90 py-3 flex items-center justify-center border-t border-white/20 mt-3"
            onClick={() => setIsRecommendedExpanded(!isRecommendedExpanded)}
          >
            {isRecommendedExpanded ? common.hideDetails : common.showDetails}
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isRecommendedExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Collapsible Details */}
          <div className={`overflow-hidden transition-all duration-300 ${isRecommendedExpanded ? 'max-h-[1000px] mt-4' : 'max-h-0 md:max-h-[1000px] md:mt-6'}`}>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6 space-y-4">
              <div>
                <h4 className="text-lg sm:text-xl mb-2">{t.airportTaxiTitle}</h4>
                <p className="text-white/90 mb-2 text-sm sm:text-base">
                  {t.airportTaxiDesc}
                </p>
                <ul className="space-y-2 text-white/90 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span><strong>{t.taxiCost}</strong> {t.taxiCostValue}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span><strong>{t.taxiWhere}</strong> {t.taxiWhereValue}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span><strong>{t.taxiDuration}</strong> {t.taxiDurationValue}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span><strong>{t.taxiTip}</strong> {t.taxiTipValue}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Transport Options */}
        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3">
          {/* Airport Bus */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleTransport(0)}
              className="w-full p-4 flex items-center justify-between text-left"
            >
              <h4 className="text-lg text-[#0a3d3d] font-semibold">{t.airportBusTitle}</h4>
              <ChevronDown className={`w-5 h-5 text-[#f58220] transition-transform ${expandedTransport === 0 ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedTransport === 0 ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="px-4 pb-4 border-t border-gray-100 pt-3">
                <p className="text-gray-600 text-sm mb-3">
                  {t.airportBusDesc}
                </p>
                <p className="text-gray-700">
                  <strong>{t.taxiCost}</strong> {t.busCost}<br />
                  <strong>{t.taxiDuration}</strong> {t.busDuration}
                </p>
              </div>
            </div>
          </div>

          {/* Private Transfer */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleTransport(1)}
              className="w-full p-4 flex items-center justify-between text-left"
            >
              <h4 className="text-lg text-[#0a3d3d] font-semibold">{t.privateTransferTitle}</h4>
              <ChevronDown className={`w-5 h-5 text-[#f58220] transition-transform ${expandedTransport === 1 ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedTransport === 1 ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="px-4 pb-4 border-t border-gray-100 pt-3">
                <p className="text-gray-600 text-sm mb-3">
                  {t.privateTransferDesc}
                </p>
                <p className="text-gray-700">
                  <strong>{t.taxiCost}</strong> {t.privateCost}<br />
                  <strong>{t.taxiDuration}</strong> {t.privateDuration}
                </p>
              </div>
            </div>
          </div>

          {/* Local Transport */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleTransport(2)}
              className="w-full p-4 flex items-center justify-between text-left"
            >
              <h4 className="text-lg text-[#0a3d3d] font-semibold">{t.localTransportTitle}</h4>
              <ChevronDown className={`w-5 h-5 text-[#f58220] transition-transform ${expandedTransport === 2 ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${expandedTransport === 2 ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="px-4 pb-4 border-t border-gray-100 pt-3">
                <p className="text-gray-600 text-sm mb-3">
                  {t.localTransportDesc}
                </p>
                <p className="text-gray-700">
                  <strong>{t.taxiCost}</strong> {t.localCost}<br />
                  <strong>{t.taxiTip}</strong> {t.localTip}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg text-[#0a3d3d] mb-3">{t.airportBusTitle}</h4>
            <p className="text-gray-600 text-sm mb-2">
              {t.airportBusDesc}
            </p>
            <p className="text-gray-700">
              <strong>{t.taxiCost}</strong> {t.busCost}<br />
              <strong>{t.taxiDuration}</strong> {t.busDuration}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg text-[#0a3d3d] mb-3">{t.privateTransferTitle}</h4>
            <p className="text-gray-600 text-sm mb-2">
              {t.privateTransferDesc}
            </p>
            <p className="text-gray-700">
              <strong>{t.taxiCost}</strong> {t.privateCost}<br />
              <strong>{t.taxiDuration}</strong> {t.privateDuration}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg text-[#0a3d3d] mb-3">{t.localTransportTitle}</h4>
            <p className="text-gray-600 text-sm mb-2">
              {t.localTransportDesc}
            </p>
            <p className="text-gray-700">
              <strong>{t.taxiCost}</strong> {t.localCost}<br />
              <strong>{t.taxiTip}</strong> {t.localTip}
            </p>
          </div>
        </div>

        {/* Help Notice */}
        <div className="mt-12 bg-[#b3dce6]/20 border-2 border-[#b3dce6] rounded-xl p-6 text-center">
          <p className="text-gray-700 text-lg">
            <strong>{t.helpTitle}</strong>
          </p>
          <p className="text-gray-600 mt-2">
            {t.helpDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4">
            <a
              href={`https://wa.me/${siteConfig.contact.phone.raw.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f58220] hover:bg-[#d47020] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {t.whatsappButton}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.raw}`}
              className="inline-block bg-[#0a3d3d] hover:bg-[#0a3d3d]/80 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {t.callButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}