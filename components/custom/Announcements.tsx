'use client';

import { useEffect, useRef } from 'react';
import SecondaryButton from './buttons/SecondaryButton';

export default function Announcements() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="front-announcements">
      <div className="inner inner--slim-1172">

        <div className="front-announcements__inner">
          <div className="sub-heading">How It Works</div>
          <h3 className="h3">Honest Diagnosis. Upfront Price. Done Right.</h3>
        </div>

        <div className="relative z-20 front-announcements__content">

          {/* Image */}
          <div className="front-announcements__image" ref={imageRef}>
            <div>
              <span
                style={{
                  backgroundImage:
                    'url(/images/IMG_9688-1024x682.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '50% 50%',
                  backgroundSize: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#101d2b',
                }}
              />
              {/* [TODO: Replace with Top HVAC NYC technician or job site photo] */}
            </div>
          </div>

          {/* Text */}
          <div className="front-announcements__text">
            <div className="content-entry">
              <p>
                Every service call starts the same way: we arrive, assess your system in
                front of you, explain exactly what&apos;s wrong, and give you the price
                before any work begins. No guessing, no surprise invoices — just a straight
                answer and a plan you can say yes or no to.
              </p>
              <p>
                <strong>Step 1: Diagnose.</strong> Our licensed technician inspects your
                system, identifies the root cause, and explains the issue in plain language.
              </p>
              <p>
                <strong>Step 2: Approve &amp; Repair.</strong> You get the price upfront.
                Once you approve, we get to work — most repairs are completed same-day.
              </p>
              <p>
                <strong>Step 3: Test &amp; Confirm.</strong> We run a full system test in
                front of you before we pack up. If it&apos;s not right, we don&apos;t leave.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2.5rem' }}>
              <SecondaryButton
                href="/contact-us"
                label="Schedule Service"
                wow
              />
              <SecondaryButton
                href="/craft-catalog"
                label="See All Services"
                wow
                delay={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
