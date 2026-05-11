export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location?: string;
  startLabel: string;
  endLabel: string | null;
  current: boolean;
  summary: string;
  achievements?: string[];
};

/** Default résumé entries for the CV work timeline. */
export const PLACEHOLDER_EXPERIENCES: ExperienceItem[] = [
  {
    id: "ocp-sg",
    role: "Product Owner (B2B/B2C Digital Agricultural Product)",
    organization: "OCP Singapore",
    startLabel: "Sep 2025",
    endLabel: null,
    current: true,
    summary:
      "Leading a digital agricultural product lane with a focus on validation in real farming contexts.",
    achievements: [
      "Built and validated a crop monitoring product prototype using Replit and ChatGPT, conducting field tests, together with user interviews with farmers to evaluate usability, crop monitoring workflows, and feature effectiveness in actual farming environments.",
    ],
  },
  {
    id: "sp-wellness",
    role: "Product Owner (Client Project: B2C Wellness Service)",
    organization: "Seven Peaks Software",
    startLabel: "Feb 2025",
    endLabel: "Aug 2025",
    current: false,
    summary:
      "Service design and delivery for a B2C wellness client, from journey mapping through launch.",
    achievements: [
      "Designed the user journey for the entire service, including the user flow in the application and the operation flow with the designers and clients.",
      "Implemented Stripe for seamless credit/debit card and PromptPay payments.",
    ],
  },
  {
    id: "sp-scg",
    role: "Product Manager (Client Project: SCG – Nexter Living)",
    organization: "Seven Peaks Software",
    startLabel: "Jul 2023",
    endLabel: "Feb 2025",
    current: false,
    summary:
      "Client delivery for SCG Nexter Living—proposals through go-live and operational improvement.",
    achievements: [
      "Collaborated with the BD team to craft client proposals through contract signing.",
      "Reduce Manual Work by up to 30% by revising the supply chain operations flow and replacing some manual tasks with automation.",
    ],
  },
  {
    id: "sp-rever",
    role: "Product Owner (Client Project: Rever Automotive)",
    organization: "Seven Peaks Software",
    startLabel: "Jun 2023",
    endLabel: "Nov 2023",
    current: false,
    summary:
      "Cross-system alignment and integrations for an automotive client program.",
    achievements: [
      "Collaborated with system architects to streamline operations and integrate 3rd-party systems, including SAP Financial Module and the logistics system.",
    ],
  },
  {
    id: "freshket",
    role: "Product Owner",
    organization: "Freshket (Polar Bear Mission Company Limited)",
    startLabel: "Sep 2022",
    endLabel: "May 2023",
    current: false,
    summary:
      "Internal sales tooling and sales-process redesign for CRM cost and efficiency.",
    achievements: [
      "Within four months, redesigning the sales process and developing internal sales solutions reduced CRM's annual cost by more than 50% or 2 million baht.",
    ],
  },
  {
    id: "chef-yim",
    role: "Product Owner Manager",
    organization: "Chef Yim / Cho Yim (Central Food Retail B2B Platform)",
    startLabel: "Oct 2021",
    endLabel: "Aug 2022",
    current: false,
    summary:
      "B2B platform order flow and scrum-led delivery for Central Food Retail.",
    achievements: [
      "Re-designed the order flow with 3rd-party developers, increasing the order success rate to 80%.",
      "Increased sales revenue by 10X daily within 3 months by managing a scrum team to build a sales solution in one month.",
    ],
  },
  {
    id: "exxon",
    role: "System Change Coordinator",
    organization: "ExxonMobil Limited (Esso Smiles Thailand)",
    startLabel: "Oct 2021",
    endLabel: "Aug 2022",
    current: false,
    summary:
      "Loyalty and portable EDC experience design—field research with pump attendants and territory managers.",
    achievements: [
      "Designed the end-to-end earn-and-redeem points flow for the portable EDC system.",
      "Conducted an online usability testing event with 12 pump attendants and four territory managers to gather feedback on the new Android EDC.",
    ],
  },
];
