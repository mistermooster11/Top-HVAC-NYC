"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

export default function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`front-donation ia-bg-sky flex-module wow fadeInUpS${vis}`}
    >
      <div className="inner inner--slim-1172">
        <div className={`sub-heading wow fadeInUpS${vis}`} style={{ animationDelay: "0.1s" }}>
          Same-Day Service Available
        </div>
        <h2 className={`h2 wow fadeInUpS${vis}`} style={{ animationDelay: "0.15s" }}>
          HVAC Problem? Call Now.
        </h2>
        <div className={`front-donation__in wow fadeInUpS${vis}`} style={{ animationDelay: "0.2s" }}>
          <div className="content-entry">
            <p>
              Heating or cooling issues don&apos;t wait for a convenient time. Our Manhattan
              technicians are on the road 7 days a week — call us and we&apos;ll get someone
              out the same day.
            </p>
          </div>
          <div className="front-donation__btn-wrap">
            <div className="front-donation__btn">
              <SecondaryButton
                label="Call (646) 493-4904"
                href="tel:6464934904"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
