export const PRODUCTS = [
  {
    slug: 'campaign-manager',
    short: 'Campaign Manager',
    title: 'Zolar Campaign Manager',
    tagline: 'Segmented outreach for quote follow-up, reactivation, and newsletters.',
    angle: -90,
    accent: 'Outreach',
    color: '#F4B528',
    description:
      'A Listmonk-powered outreach engine that turns lead source, industry, lifecycle stage and behavior into segmented follow-up — instead of rebuilding campaigns by hand each quarter.',
    pillars: [
      { label: 'Segmentation', body: 'Tag contacts by source, industry, lifecycle, intent and behavior.' },
      { label: 'Quote follow-up', body: 'Reanimate dormant quotes with scheduled, reason-aware sequences.' },
      { label: 'Reactivation', body: 'Win back idle accounts with cadence designed for B2B sales cycles.' }
    ],
    capabilities: [
      'Lead source + industry segmentation',
      'Lifecycle stage logic (cold, open quote, won, dormant)',
      'Quote follow-up cadences with reminders',
      'Newsletter and broadcast campaigns',
      'Customer reactivation playbooks',
      'Listmonk-native list & template management'
    ]
  },
  {
    slug: 'blueprint-reader',
    short: 'AI Blueprint Reader',
    title: 'AI Blueprint & Document Reader',
    tagline: 'Extract scope, terms, risks and action items from complex files.',
    angle: -18,
    accent: 'Intelligence',
    color: '#F4B528',
    description:
      'Review drawings, specs, bid packages and project files with structure. Zolar pulls scope, deliverables, risks and action items out of dense documents so your operators decide what needs attention faster.',
    pillars: [
      { label: 'Drawing review', body: 'Parse blueprints, RFPs and spec books down to scoped sections.' },
      { label: 'Scope extraction', body: 'Surface the line items, deliverables and exclusions that drive cost.' },
      { label: 'Risk flags', body: 'Highlight ambiguous clauses, missing data and exposure points.' }
    ],
    capabilities: [
      'Blueprint and PDF parsing',
      'Scope and spec extraction',
      'Risk and action-item flags',
      'Trade and section tagging',
      'Per-file action queues',
      'Export to estimating tools'
    ]
  },
  {
    slug: 'workflow-manager',
    short: 'Workflow Manager',
    title: 'PO-to-Production Workflow Manager',
    tagline: 'Move work from intake through approval, production and handoff.',
    angle: 54,
    accent: 'Operations',
    color: '#F4B528',
    description:
      'Standardize intake, approvals, production handoffs and status updates through one operating process. Built so leadership can actually see where work is — and where it’s stuck.',
    pillars: [
      { label: 'Intake → approval', body: 'Capture POs, quotes and requests with clean ownership from day one.' },
      { label: 'Production status', body: 'Track build, fabrication and fulfillment stages without spreadsheets.' },
      { label: 'Bottlenecks', body: 'See who owns each item, what’s waiting, and where time is leaking.' }
    ],
    capabilities: [
      'Intake forms for PO, quote, lead',
      'Approval routing with audit log',
      'Stage-based production tracking',
      'Handoff checklists per role',
      'Ownership and SLA visibility',
      'Leadership dashboards'
    ]
  },
  {
    slug: 'contract-intelligence',
    short: 'Contract Intelligence',
    title: 'Contract & Document Intelligence',
    tagline: 'Structured review for contracts, MSAs and high-stakes documents.',
    angle: 126,
    accent: 'Risk',
    color: '#F4B528',
    description:
      'Review contracts, MSAs and statements of work with operator-grade precision. Zolar surfaces obligations, indemnity exposure, payment terms and renewal mechanics in a format your team can act on.',
    pillars: [
      { label: 'Obligations', body: 'Extract commitments, deliverables and SLAs into a readable register.' },
      { label: 'Exposure', body: 'Flag indemnity, liability caps, IP terms and termination triggers.' },
      { label: 'Renewals', body: 'Track auto-renewal windows, notice periods and pricing escalators.' }
    ],
    capabilities: [
      'Contract clause extraction',
      'Obligation and SLA register',
      'Risk and indemnity flags',
      'Payment term and pricing analysis',
      'Renewal calendar with notice windows',
      'Per-counterparty document history'
    ]
  },
  {
    slug: 'consulting',
    short: 'Consulting',
    title: 'Operator-Led Consulting',
    tagline: 'Process design and implementation, not just software.',
    angle: -162,
    accent: 'Advisory',
    color: '#F4B528',
    description:
      'Software alone rarely fixes operational drag. Zolar Capital also runs implementation planning, data structure design, workflow mapping and operator-level advisory work to turn the idea into a workable operating system.',
    pillars: [
      { label: 'Process design', body: 'Map intake, approval and handoff flows the way they actually run.' },
      { label: 'Implementation', body: 'Stand up Zolar tools alongside your existing CRM, ERP and document stack.' },
      { label: 'Operator advisory', body: 'Coach owners and operations leads on what to measure and enforce.' }
    ],
    capabilities: [
      'Workflow audits',
      'Data model and tagging design',
      'Tooling and integration planning',
      'KPI and reporting structure',
      'Hands-on implementation',
      'Quarterly operator reviews'
    ]
  }
];

export const PROCESS_STEPS = [
  { code: '01', label: 'Capture', body: 'Bring in documents, leads, orders and workflow events.' },
  { code: '02', label: 'Classify', body: 'Tag content, context, status and ownership.' },
  { code: '03', label: 'Campaign', body: 'Launch follow-up, reminders and communication sequences.' },
  { code: '04', label: 'Route', body: 'Move work through approval, execution and handoff.' },
  { code: '05', label: 'Report', body: 'Give operators a more useful view of what needs attention.' }
];

export const USE_CASES = [
  {
    title: 'Document review',
    tags: ['Construction', 'Manufacturing', 'Professional services'],
    body: 'Review blueprints, specs, contracts, scopes, emails and project files with more structure.'
  },
  {
    title: 'Quote and bid follow-up',
    tags: ['B2B sales', 'Suppliers', 'Service businesses'],
    body: 'Turn dormant quotes and inconsistent follow-up into repeatable campaigns and reminders.'
  },
  {
    title: 'Order and production workflow',
    tags: ['Manufacturing', 'Custom products', 'Distribution'],
    body: 'Track work from intake and approvals through execution, production and delivery.'
  },
  {
    title: 'Operating visibility',
    tags: ['Operations', 'Finance', 'Customer teams'],
    body: 'Give leadership better visibility into bottlenecks, statuses and commercial activity.'
  }
];
