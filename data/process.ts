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
      "We align on goals, constraints, stakeholders, and what success looks like in measurable terms.",
    detail:
      "Workshops, system reviews, and light documentation of current workflows. You receive a concise findings note and a proposed scope boundary.",
  },
  {
    step: 2,
    title: "Planning",
    summary:
      "Architecture, milestones, and risk are made explicit before significant build work begins.",
    detail:
      "Technical approach, integration map, environment strategy, and a delivery plan your team can defend internally.",
  },
  {
    step: 3,
    title: "Design",
    summary:
      "UX structure and visual language are validated with the people who will use the software.",
    detail:
      "Wireframes evolve into high-fidelity screens and a component approach developers can implement without guesswork.",
  },
  {
    step: 4,
    title: "Development",
    summary:
      "Incremental builds with demos, code review, and automated checks integrated from the start.",
    detail:
      "Regular integration into shared environments; feature flags where needed; traceability from requirement to release.",
  },
  {
    step: 5,
    title: "Testing",
    summary:
      "Functional, regression, and performance checks tied to acceptance criteria—not ad hoc clicking.",
    detail:
      "Test plans cover critical paths, edge cases, and integrations. Security-sensitive areas receive targeted review.",
  },
  {
    step: 6,
    title: "Launch",
    summary:
      "Cutover planning, monitoring, rollback options, and communication with support teams.",
    detail:
      "Go-live runbooks, hypercare window, and handover sessions so your organisation owns day-two operations confidently.",
  },
  {
    step: 7,
    title: "Support",
    summary:
      "Structured maintenance, roadmap input, and measured improvement after release.",
    detail:
      "SLA-backed response, dependency and patch cadence, and quarterly reviews against usage and incident data.",
  },
];
