export type Capability = {
  title: string;
  description: string;
  bullets: string[];
  tools?: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Product Vision & Strategy",
    description:
      "Aligning business goals, user needs, and product direction into actionable strategy.",
    bullets: [
      "Stakeholder alignment",
      "Prioritization through impact analysis",
      "Product roadmap planning",
      "Success metric definition",
    ],
    tools: ["Miro", "Canva"],
  },
  {
    title: "Product Discovery",
    description:
      "Understanding users, validating assumptions, and identifying opportunities before building solutions.",
    bullets: [
      "Competitive and market research",
      "Product analytics",
      "User flow mapping",
      "Assumption mapping",
      "Design thinking",
      "AI-assisted research workflows",
    ],
    tools: ["NotebookLM", "Metabase"],
  },
  {
    title: "Product Delivery",
    description:
      "Turning ideas into scalable product experiences through collaboration and iterative delivery.",
    bullets: [
      "Agile and Scrum delivery",
      "Release planning",
      "Rollout and onboarding planning",
      "UAT/SIT coordination",
      "User training support",
    ],
  },
  {
    title: "Counseling Psychology",
    description:
      "Developing a deeper understanding of human behavior, emotions, communication, and mental well-being.",
    bullets: [
      "Deep and empathetic listening",
      "Socratic questioning",
      "Reflection and summarization",
      "Positive psychology approaches",
      "Statistics and behavioral analysis",
    ],
    tools: ["Jamovi"],
  },
  {
    title: "Project Management",
    description:
      "Coordinating people, timelines, and operational execution across cross-functional environments.",
    bullets: [
      "Resource planning",
      "Vendor coordination",
      "Work breakdown structures",
      "Timeline and task management",
      "Jira and ClickUp workflows",
    ],
    tools: ["Jira", "ClickUp"],
  },
  {
    title: "AI-assisted Prototyping",
    description:
      "Using AI-assisted workflows to accelerate prototyping, communication, and product experimentation.",
    bullets: [
      "Rapid prototype generation",
      "AI-assisted documentation",
      "Workflow automation",
      "Prompt-driven development",
      "Rapid iteration using AI tools",
    ],
    tools: ["Claude", "Cursor", "ChatGPT", "Replit"],
  },
];
