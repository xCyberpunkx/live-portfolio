"use client";

import React from "react";
import { useMagnetic } from "@/lib/animations/use-magnetic";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  /** Extra pull field beyond the element's own box, in px. */
  radius?: number;
  /** 0–1 pull strength on the outer element. */
  strength?: number;
  /** 0–1 pull strength on the inner label — keep higher than `strength` for the two-layer parallax feel. */
  labelStrength?: number;
  "data-cursor"?: string;
};

type AnchorProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" };

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" };

type Props = AnchorProps | ButtonProps;

/**
 * <MagneticButton href="/projects" className="...">View Projects</MagneticButton>
 * <MagneticButton as="button" onClick={...}>Send</MagneticButton>
 *
 * The children are wrapped in an inner span that moves slightly further
 * than the outer shell — that's what makes it read as a physical pull
 * rather than the whole button just translating as one rigid block.
 */
export default function MagneticButton({
  children,
  className,
  radius = 70,
  strength = 0.35,
  labelStrength = 0.6,
  as,
  ...rest
}: Props) {
  const { ref, childRef } = useMagnetic<HTMLAnchorElement | HTMLButtonElement, HTMLSpanElement>({
    radius,
    strength,
    childStrength: labelStrength,
  });

  const inner = (
    <span ref={childRef} className="inline-flex items-center gap-2 will-change-transform">
      {children}
    </span>
  );

  if (as === "button") {
    return (
      <button
        ref={ref as React.RefObject<HTMLButtonElement>}
        className={className}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {inner}
      </button>
    );
  }

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      className={className}
      {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {inner}
    </a>
  );
}
