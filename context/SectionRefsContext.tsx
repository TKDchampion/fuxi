"use client";

import { createContext, useContext, RefObject } from "react";

export type SectionKey =
  | "home"
  | "about"
  | "practice"
  | "attorneys"
  | "pricing"
  | "caseStudies"
  | "contact";

export type SectionMap = Partial<Record<SectionKey, HTMLElement>>;

export const SectionRefsContext = createContext<RefObject<SectionMap> | null>(
  null
);

export function useSectionRefs() {
  return useContext(SectionRefsContext);
}
