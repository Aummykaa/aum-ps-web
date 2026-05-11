import type { ExperienceItem } from "@/data/work-experience";

const MONTH_ORDER: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function monthYearToNumber(label: string): number {
  const m = label.match(/^([A-Za-z]{3})\s+(\d{4})$/);
  if (!m?.[1] || !m[2]) return 0;
  const mon = MONTH_ORDER[m[1]] ?? 0;
  const year = Number.parseInt(m[2], 10);
  return year * 12 + mon;
}

function endSortKey(exp: ExperienceItem): number {
  if (exp.current || exp.endLabel == null) return Number.POSITIVE_INFINITY;
  return monthYearToNumber(exp.endLabel);
}

function startSortKey(exp: ExperienceItem): number {
  return monthYearToNumber(exp.startLabel);
}

/** Stable sort: current roles first, then by end/start dates and organization tie-break. */
export function sortExperienceItems(list: ExperienceItem[]): ExperienceItem[] {
  return [...list].sort((a, b) => {
    if (a.current !== b.current) return a.current ? -1 : 1;
    const endDiff = endSortKey(b) - endSortKey(a);
    if (endDiff !== 0) return endDiff;
    const startDiff = startSortKey(b) - startSortKey(a);
    if (startDiff !== 0) return startDiff;
    return a.organization.localeCompare(b.organization);
  });
}
