'use client';

import React, { useState } from 'react';

export default function HumanDesires() {
  const [isNepali, setIsNepali] = useState(false);

  const toggleLanguage = () => setIsNepali(!isNepali);

  return (
    <div className="human-desire  p-6">
      {/* Toggle Button */}
      <div className="text-right mb-4">
        <button
          className="nes-btn is-secondary
        "
          onClick={toggleLanguage}
        >
          {isNepali ? 'Show English' : 'Show Nepali'}
        </button>
      </div>

      {/* Header */}
      <header className="desire-header mb-6">
        <h1 className="header-title">
          {isNepali ? 'के साँच्चै हाम्रो हो?' : 'Nothing is Truly Ours'}
        </h1>
      </header>

      {/* Main */}
      <main className="desire-section space-y-4">
        <h2>{isNepali ? 'शरीर, मन, र विचार' : 'Body, Mind & Thoughts'}</h2>

        <p>
          {isNepali
            ? 'मैले यो शरीर रोजेँ? वा आफैं बनाएँ? स्पष्ट छैन। जन्मदेखि प्राप्त यो शरीर हाम्रो पितृ–मातृको देन हो, हाम्रो जीनले बनाएको। कसैले अन्धो वा अपाङ्ग भएर जन्म्यो भने, त्यो उसको रोजाइ थिएन। स्वस्थ वा athletic हुनु पनि आफ्नो चुनाव होइन, प्रकृतिको नियम हो।'
            : 'Did I choose or create this body? Clearly not. I inherited it at birth, shaped by genetics I never selected. If someone is born blind or with a disability, they didn’t choose it. Just like others didn’t choose to be healthy or athletic.'}
        </p>

        <p>
          {isNepali
            ? 'हाम्रो मन व्यक्तिगत देखिन्छ, तर यसलाई बनाएको तह–तह हाम्रो संस्कार, भाषा, शिक्षा, र परिवारका मूल्यहरू हुन्। यदि तपाईं नेपालमा जन्मिनु भयो भने, तपाईंको विचार र भाषा जापान वा ब्राजिलका मान्छेबाट बिल्कुल फरक हुनेछ। मन एक विशाल पुस्तकालय जस्तो छ, तर आधारभूत shelves अरूले तयार पारेका हुन्।'
            : 'The mind seems personal, yet it is built from layers we didn’t choose: language, beliefs, culture, education, and upbringing. If you were born in Japan, you’d probably speak Japanese and have very different ideas about life than someone born in Brazil. The mind is shaped by beliefs, family, culture, religion — things we didn’t choose in our young age.'}
        </p>

        <p>
          {isNepali
            ? 'विचारहरू त व्यक्तिगत लाग्छन्, तर अक्सर वरिपरि भएका कुराबाट आउँछन्। कसैले रुनु देखेँ भने दुःख लाग्छ। बचपनको गीत सुनेँ भने यादहरू आउँछन्। तपाईंले यी विचार योजना बनाएर ल्याउनुभएन, तिनीहरू आफैं आइपुग्छन्। हामी तिनीहरूलाई हाम्रो ठान्छौं, तर वास्तविकता यस्तो छ कि ती पाहुना जस्ता हुन्, खुला ढोका भएर आउँछन् र जान्छन्।'
            : 'Thoughts seem very personal. But they often come from things around us. If you see someone crying, you might feel sad. If you hear a song from your childhood, memories pop up. Even reading this now might make you question your identity. You didn’t plan these thoughts — they just appeared. We mistake their sudden presence for ownership, yet they are more like visitors passing through an open door.'}
        </p>
      </main>

      {/* Footer */}
      <footer className="desire-footer mt-6">
        <p>
          {isNepali
            ? 'हामीले यी सबै रोजेका होइनौं, नियन्त्रण गर्न सक्दैनौं, र सधैं राख्न सक्दैनौं। त्यसो भए, साँच्चै के हाम्रो हो? सायद केवल त्यही चेतना, जुन यी सबै उब्जन र हराउने कुरा हेर्दैछ, मात्र हाम्रो हो।'
            : 'We didn’t choose them, we can’t fully control them, and we can’t keep them forever. What, then, is left that we can truly call "I"? Perhaps only the awareness watching all these things arise and pass away.'}
        </p>
      </footer>
    </div>
  );
}
