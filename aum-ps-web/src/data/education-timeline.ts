export type EducationTimelineEntry = {
  id: string;
  degree: string;
  institution: string;
  periodLabel: string;
  current: boolean;
  body: string;
};

export const educationTimelineEntries: EducationTimelineEntry[] = [
  {
    id: "be-ice",
    degree: "B.E., Information and Communication Engineering",
    institution: "Chulalongkorn University",
    periodLabel: "Aug 2013 — May 2017",
    current: false,
    body:
      "Relevant Coursework: Software Development, Technology Management, Networking, and Telecommunications",
  },
  {
    id: "ma-counseling",
    degree: "M.A., Counseling Psychology",
    institution: "Ramkhamhaeng University",
    periodLabel: "Expected 2027",
    current: true,
    body:
      "Relevant Coursework: Counseling Psychology theories and therapeutic approaches, including Cognitive Behavioral Therapy (CBT), Satir Model, Solution-Focused Brief Therapy (SFBT), Existential Therapy, and Gestalt Therapy, along with Statistics, Mental Health, Positive Psychology, Crisis Counseling, and Group and Family Counseling.",
  },
];
