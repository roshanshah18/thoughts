'use client';

import React from 'react';

export default function HumanDesires() {
  return (
    <div className="human-desire">
      <header className="desire-header">
        <h1 className="header-title">Nothing is truly Ours</h1>
        {/* <p className="header-subtitle">Not every one of us are</p> */}
      </header>

      <main className="desire-main">
        <section className="desire-section">
          <h2>Body, Mind, Thoughts</h2>
          <p>
            Nothing is truly Ours - Body, Mind, Thoughts Did I choose or create
            this body? Clearly not. I inherited it at birth, shaped by genetics
            I never selected. If someone is born blind or with a disability,
            they didn&apos;t choose it. Just like others didn&apos;t choose to
            be healthy or athletic.
          </p>
          <p>
            {' '}
            The mind seems personal, yet it is built from layers we didn&apos;t
            choose: language, beliefs, culture, education, and upbringing. If
            you were born in Japan, you&apos;d probably speak Japanese and have
            very different ideas about life than someone born in Brazil. The
            mind is shaped by beliefs, family, culture, religion, — things we
            didn&apos;t choose in our young age. It’s a magnificent library of
            information, but the foundational shelves were stocked by others.
          </p>{' '}
          <p>
            Thoughts seem very personal. But they often come from things around
            us. If you see someone crying, you might feel sad. If you hear a
            song from your childhood, memories pop up. Even reading this now
            might make you question your identity. You didn&apos;t plan these
            thoughts — they just appeared. We mistake their sudden presence for
            ownership, yet they are more like visitors passing through an open
            door.
          </p>
        </section>
      </main>

      <footer className="desire-footer">
        <p>
          We didn&apos;t choose them, we can&apos;t fully control them, and we
          can&apos;t keep them forever. What, then, is left that we can truly
          call &apos;I&apos;? Perhaps only the awareness watching all these
          things arise and pass away.
        </p>
      </footer>
    </div>
  );
}
