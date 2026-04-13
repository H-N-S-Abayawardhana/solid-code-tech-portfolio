export type ProcessStep = {
  step: number;
  title: string;
  summary: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    summary:
      "We align on goals, constraints, and what success looks like — before writing a single line of code.",
    detail:
      "Stakeholder workshops, system audits, and user research. You receive a clear findings summary and a well-defined scope boundary so there are no surprises later.",
  },
  {
    step: 2,
    title: "Planning",
    summary:
      "Architecture, milestones, and risks are defined upfront — giving you a roadmap you can trust.",
    detail:
      "Technical architecture, integration maps, environment strategy, and a delivery plan your team can follow and defend at every stage.",
  },
  {
    step: 3,
    title: "Design",
    summary:
      "UX flows and visual design are validated with real users before development begins.",
    detail:
      "Wireframes evolve into high-fidelity screens and a component system that developers can implement without guesswork — reducing rework and speeding delivery.",
  },
  {
    step: 4,
    title: "Development",
    summary:
      "Incremental, reviewable builds with continuous integration and weekly demos.",
    detail:
      "Clean code, automated testing, and regular deployments to shared environments. You see real progress every week — not just at the end.",
  },
  {
    step: 5,
    title: "Testing",
    summary:
      "Rigorous QA tied to acceptance criteria — functional, regression, performance, and security.",
    detail:
      "Every critical path, edge case, and integration is tested systematically. Security-sensitive areas receive dedicated review before release.",
  },
  {
    step: 6,
    title: "Launch",
    summary:
      "Smooth go-live with runbooks, monitoring, rollback plans, and a dedicated hypercare window.",
    detail:
      "Cutover is planned and rehearsed. Your team receives handover sessions and documentation so you own day-two operations with confidence.",
  },
  {
    step: 7,
    title: "Support",
    summary:
      "Ongoing maintenance, proactive improvements, and a partner who stays invested after launch.",
    detail:
      "SLA-backed response times, regular dependency updates, and quarterly reviews against real usage data — so your product keeps improving over time.",
  },
];
