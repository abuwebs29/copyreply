import type { ReplyItem } from "./data";

export const authorityCategories = [
  {
    "slug": "job-search",
    "name": "Job Search",
    "icon": "Briefcase",
    "description": "Applications, recruiter outreach, interview logistics, and hiring follow-ups."
  },
  {
    "slug": "leadership",
    "name": "Leadership",
    "icon": "Building2",
    "description": "Replies for managers, team leads, delegation, feedback, and difficult decisions."
  },
  {
    "slug": "remote-work",
    "name": "Remote Work",
    "icon": "Laptop",
    "description": "Messages for distributed teams, availability, async updates, and virtual meetings."
  },
  {
    "slug": "project-management",
    "name": "Project Management",
    "icon": "CalendarCheck",
    "description": "Clear replies for scope, deadlines, risks, status updates, and stakeholders."
  },
  {
    "slug": "legal-admin",
    "name": "Legal & Administration",
    "icon": "Landmark",
    "description": "Practical replies for contracts, documents, compliance requests, and official records."
  },
  {
    "slug": "real-estate",
    "name": "Real Estate",
    "icon": "Building2",
    "description": "Messages for tenants, landlords, agents, viewings, maintenance, and property offers."
  },
  {
    "slug": "ecommerce",
    "name": "E-commerce",
    "icon": "Headphones",
    "description": "Replies for orders, returns, marketplaces, product questions, and seller communication."
  },
  {
    "slug": "saas-support",
    "name": "SaaS Support",
    "icon": "Laptop",
    "description": "Customer replies for subscriptions, access, bugs, onboarding, and product updates."
  },
  {
    "slug": "events",
    "name": "Events",
    "icon": "CalendarCheck",
    "description": "Replies for conferences, weddings, speakers, vendors, and event changes."
  },
  {
    "slug": "nonprofit",
    "name": "Nonprofit & Community",
    "icon": "Heart",
    "description": "Messages for donors, volunteers, community partners, and fundraising."
  },
  {
    "slug": "public-relations",
    "name": "Public Relations",
    "icon": "MessageCircle",
    "description": "Media replies, statements, interview requests, and reputation management."
  },
  {
    "slug": "creator-business",
    "name": "Creator Business",
    "icon": "Sparkles",
    "description": "Replies for sponsorships, collaborations, licensing, and audience partnerships."
  },
  {
    "slug": "procurement",
    "name": "Procurement",
    "icon": "Handshake",
    "description": "Vendor replies, quotations, purchase orders, delivery terms, and negotiations."
  },
  {
    "slug": "insurance",
    "name": "Insurance",
    "icon": "Landmark",
    "description": "Messages for claims, documents, renewals, coverage questions, and adjusters."
  },
  {
    "slug": "automotive",
    "name": "Automotive",
    "icon": "Briefcase",
    "description": "Replies for service bookings, repairs, dealerships, rentals, and vehicle sales."
  },
  {
    "slug": "home-services",
    "name": "Home Services",
    "icon": "Building2",
    "description": "Messages for contractors, quotes, appointments, repairs, and service complaints."
  },
  {
    "slug": "food-hospitality",
    "name": "Food & Hospitality",
    "icon": "Heart",
    "description": "Restaurant, catering, reservation, delivery, and guest-service replies."
  },
  {
    "slug": "technology",
    "name": "Technology",
    "icon": "Laptop",
    "description": "Replies for technical teams, incidents, access requests, and product communication."
  },
  {
    "slug": "personal-finance",
    "name": "Personal Finance",
    "icon": "Landmark",
    "description": "Messages for budgets, payments, loans, account questions, and financial planning."
  },
  {
    "slug": "community-groups",
    "name": "Community Groups",
    "icon": "Users",
    "description": "Replies for clubs, associations, neighborhood groups, and volunteer coordination."
  }
] as const;

type AuthorityTopic = { slug:string; title:string; category:string; categorySlug:string; keywords:string[]; context:string };

const authorityTopics: AuthorityTopic[] = [
  {
    "slug": "cold-email-to-recruiter-reply",
    "title": "Reply About Cold Email To Recruiter",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "cold email to recruiter",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about cold email to recruiter"
  },
  {
    "slug": "application-status-update-reply",
    "title": "Reply About Application Status Update",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "application status update",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about application status update"
  },
  {
    "slug": "resume-request-reply",
    "title": "Reply About Resume Request",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "resume request",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about resume request"
  },
  {
    "slug": "portfolio-request-reply",
    "title": "Reply About Portfolio Request",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "portfolio request",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about portfolio request"
  },
  {
    "slug": "screening-call-invitation-reply",
    "title": "Reply About Screening Call Invitation",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "screening call invitation",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about screening call invitation"
  },
  {
    "slug": "interview-availability-reply",
    "title": "Reply About Interview Availability",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "interview availability",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about interview availability"
  },
  {
    "slug": "interview-reschedule-request-reply",
    "title": "Reply About Interview Reschedule Request",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "interview reschedule request",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about interview reschedule request"
  },
  {
    "slug": "take-home-assignment-reply",
    "title": "Reply About Take-home Assignment",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "take-home assignment",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about take-home assignment"
  },
  {
    "slug": "reference-check-request-reply",
    "title": "Reply About Reference Check Request",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "reference check request",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about reference check request"
  },
  {
    "slug": "background-check-request-reply",
    "title": "Reply About Background Check Request",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "background check request",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about background check request"
  },
  {
    "slug": "offer-timeline-question-reply",
    "title": "Reply About Offer Timeline Question",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "offer timeline question",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about offer timeline question"
  },
  {
    "slug": "rejection-after-final-interview-reply",
    "title": "Reply About Rejection After Final Interview",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "rejection after final interview",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about rejection after final interview"
  },
  {
    "slug": "talent-pool-invitation-reply",
    "title": "Reply About Talent Pool Invitation",
    "category": "Job Search",
    "categorySlug": "job-search",
    "keywords": [
      "talent pool invitation",
      "job-search",
      "job search"
    ],
    "context": "respond clearly and professionally about talent pool invitation"
  },
  {
    "slug": "delegate-a-task-reply",
    "title": "Reply About Delegate A Task",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "delegate a task",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about delegate a task"
  },
  {
    "slug": "missed-deadline-from-team-member-reply",
    "title": "Reply About Missed Deadline From Team Member",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "missed deadline from team member",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about missed deadline from team member"
  },
  {
    "slug": "recognize-excellent-work-reply",
    "title": "Reply About Recognize Excellent Work",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "recognize excellent work",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about recognize excellent work"
  },
  {
    "slug": "give-constructive-feedback-reply",
    "title": "Reply About Give Constructive Feedback",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "give constructive feedback",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about give constructive feedback"
  },
  {
    "slug": "address-repeated-lateness-reply",
    "title": "Reply About Address Repeated Lateness",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "address repeated lateness",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about address repeated lateness"
  },
  {
    "slug": "announce-a-team-change-reply",
    "title": "Reply About Announce A Team Change",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "announce a team change",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about announce a team change"
  },
  {
    "slug": "request-a-progress-update-reply",
    "title": "Reply About Request A Progress Update",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "request a progress update",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about request a progress update"
  },
  {
    "slug": "respond-to-disagreement-reply",
    "title": "Reply About Respond To Disagreement",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "respond to disagreement",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about respond to disagreement"
  },
  {
    "slug": "approve-a-flexible-schedule-reply",
    "title": "Reply About Approve A Flexible Schedule",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "approve a flexible schedule",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about approve a flexible schedule"
  },
  {
    "slug": "decline-a-resource-request-reply",
    "title": "Reply About Decline A Resource Request",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "decline a resource request",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about decline a resource request"
  },
  {
    "slug": "handle-a-confidential-concern-reply",
    "title": "Reply About Handle A Confidential Concern",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "handle a confidential concern",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about handle a confidential concern"
  },
  {
    "slug": "welcome-a-new-manager-reply",
    "title": "Reply About Welcome A New Manager",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "welcome a new manager",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about welcome a new manager"
  },
  {
    "slug": "set-quarterly-priorities-reply",
    "title": "Reply About Set Quarterly Priorities",
    "category": "Leadership",
    "categorySlug": "leadership",
    "keywords": [
      "set quarterly priorities",
      "leadership",
      "leadership"
    ],
    "context": "respond clearly and professionally about set quarterly priorities"
  },
  {
    "slug": "internet-outage-update-reply",
    "title": "Reply About Internet Outage Update",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "internet outage update",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about internet outage update"
  },
  {
    "slug": "work-from-home-request-reply",
    "title": "Reply About Work From Home Request",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "work from home request",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about work from home request"
  },
  {
    "slug": "async-status-update-reply",
    "title": "Reply About Async Status Update",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "async status update",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about async status update"
  },
  {
    "slug": "camera-off-request-reply",
    "title": "Reply About Camera-off Request",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "camera-off request",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about camera-off request"
  },
  {
    "slug": "timezone-scheduling-conflict-reply",
    "title": "Reply About Timezone Scheduling Conflict",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "timezone scheduling conflict",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about timezone scheduling conflict"
  },
  {
    "slug": "virtual-meeting-follow-up-reply",
    "title": "Reply About Virtual Meeting Follow-up",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "virtual meeting follow-up",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about virtual meeting follow-up"
  },
  {
    "slug": "remote-onboarding-question-reply",
    "title": "Reply About Remote Onboarding Question",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "remote onboarding question",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about remote onboarding question"
  },
  {
    "slug": "availability-notice-reply",
    "title": "Reply About Availability Notice",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "availability notice",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about availability notice"
  },
  {
    "slug": "focus-time-request-reply",
    "title": "Reply About Focus Time Request",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "focus time request",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about focus time request"
  },
  {
    "slug": "home-office-equipment-request-reply",
    "title": "Reply About Home Office Equipment Request",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "home office equipment request",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about home office equipment request"
  },
  {
    "slug": "missed-slack-message-reply",
    "title": "Reply About Missed Slack Message",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "missed Slack message",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about missed Slack message"
  },
  {
    "slug": "remote-team-check-in-reply",
    "title": "Reply About Remote Team Check-in",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "remote team check-in",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about remote team check-in"
  },
  {
    "slug": "digital-nomad-approval-reply",
    "title": "Reply About Digital Nomad Approval",
    "category": "Remote Work",
    "categorySlug": "remote-work",
    "keywords": [
      "digital nomad approval",
      "remote-work",
      "remote work"
    ],
    "context": "respond clearly and professionally about digital nomad approval"
  },
  {
    "slug": "project-kickoff-confirmation-reply",
    "title": "Reply About Project Kickoff Confirmation",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "project kickoff confirmation",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about project kickoff confirmation"
  },
  {
    "slug": "scope-change-request-reply",
    "title": "Reply About Scope Change Request",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "scope change request",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about scope change request"
  },
  {
    "slug": "deadline-extension-request-reply",
    "title": "Reply About Deadline Extension Request",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "deadline extension request",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about deadline extension request"
  },
  {
    "slug": "risk-escalation-reply",
    "title": "Reply About Risk Escalation",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "risk escalation",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about risk escalation"
  },
  {
    "slug": "status-report-acknowledgment-reply",
    "title": "Reply About Status Report Acknowledgment",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "status report acknowledgment",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about status report acknowledgment"
  },
  {
    "slug": "stakeholder-feedback-request-reply",
    "title": "Reply About Stakeholder Feedback Request",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "stakeholder feedback request",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about stakeholder feedback request"
  },
  {
    "slug": "blocked-task-update-reply",
    "title": "Reply About Blocked Task Update",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "blocked task update",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about blocked task update"
  },
  {
    "slug": "project-handover-reply",
    "title": "Reply About Project Handover",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "project handover",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about project handover"
  },
  {
    "slug": "milestone-approval-reply",
    "title": "Reply About Milestone Approval",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "milestone approval",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about milestone approval"
  },
  {
    "slug": "budget-overrun-warning-reply",
    "title": "Reply About Budget Overrun Warning",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "budget overrun warning",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about budget overrun warning"
  },
  {
    "slug": "change-request-approval-reply",
    "title": "Reply About Change Request Approval",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "change request approval",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about change request approval"
  },
  {
    "slug": "project-cancellation-notice-reply",
    "title": "Reply About Project Cancellation Notice",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "project cancellation notice",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about project cancellation notice"
  },
  {
    "slug": "lessons-learned-invitation-reply",
    "title": "Reply About Lessons Learned Invitation",
    "category": "Project Management",
    "categorySlug": "project-management",
    "keywords": [
      "lessons learned invitation",
      "project-management",
      "project management"
    ],
    "context": "respond clearly and professionally about lessons learned invitation"
  },
  {
    "slug": "contract-review-request-reply",
    "title": "Reply About Contract Review Request",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "contract review request",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about contract review request"
  },
  {
    "slug": "document-signature-reminder-reply",
    "title": "Reply About Document Signature Reminder",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "document signature reminder",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about document signature reminder"
  },
  {
    "slug": "privacy-request-acknowledgment-reply",
    "title": "Reply About Privacy Request Acknowledgment",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "privacy request acknowledgment",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about privacy request acknowledgment"
  },
  {
    "slug": "compliance-evidence-request-reply",
    "title": "Reply About Compliance Evidence Request",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "compliance evidence request",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about compliance evidence request"
  },
  {
    "slug": "official-letter-acknowledgment-reply",
    "title": "Reply About Official Letter Acknowledgment",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "official letter acknowledgment",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about official letter acknowledgment"
  },
  {
    "slug": "terms-clarification-reply",
    "title": "Reply About Terms Clarification",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "terms clarification",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about terms clarification"
  },
  {
    "slug": "records-correction-request-reply",
    "title": "Reply About Records Correction Request",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "records correction request",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about records correction request"
  },
  {
    "slug": "authorization-letter-request-reply",
    "title": "Reply About Authorization Letter Request",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "authorization letter request",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about authorization letter request"
  },
  {
    "slug": "policy-consent-confirmation-reply",
    "title": "Reply About Policy Consent Confirmation",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "policy consent confirmation",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about policy consent confirmation"
  },
  {
    "slug": "legal-notice-receipt-reply",
    "title": "Reply About Legal Notice Receipt",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "legal notice receipt",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about legal notice receipt"
  },
  {
    "slug": "document-certification-request-reply",
    "title": "Reply About Document Certification Request",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "document certification request",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about document certification request"
  },
  {
    "slug": "company-registration-update-reply",
    "title": "Reply About Company Registration Update",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "company registration update",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about company registration update"
  },
  {
    "slug": "confidentiality-agreement-reply",
    "title": "Reply About Confidentiality Agreement",
    "category": "Legal & Administration",
    "categorySlug": "legal-admin",
    "keywords": [
      "confidentiality agreement",
      "legal-admin",
      "legal & administration"
    ],
    "context": "respond clearly and professionally about confidentiality agreement"
  },
  {
    "slug": "property-viewing-request-reply",
    "title": "Reply About Property Viewing Request",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "property viewing request",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about property viewing request"
  },
  {
    "slug": "rental-application-follow-up-reply",
    "title": "Reply About Rental Application Follow-up",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "rental application follow-up",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about rental application follow-up"
  },
  {
    "slug": "maintenance-request-reply",
    "title": "Reply About Maintenance Request",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "maintenance request",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about maintenance request"
  },
  {
    "slug": "rent-increase-notice-reply",
    "title": "Reply About Rent Increase Notice",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "rent increase notice",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about rent increase notice"
  },
  {
    "slug": "lease-renewal-offer-reply",
    "title": "Reply About Lease Renewal Offer",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "lease renewal offer",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about lease renewal offer"
  },
  {
    "slug": "security-deposit-question-reply",
    "title": "Reply About Security Deposit Question",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "security deposit question",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about security deposit question"
  },
  {
    "slug": "property-offer-submission-reply",
    "title": "Reply About Property Offer Submission",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "property offer submission",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about property offer submission"
  },
  {
    "slug": "inspection-scheduling-reply",
    "title": "Reply About Inspection Scheduling",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "inspection scheduling",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about inspection scheduling"
  },
  {
    "slug": "tenant-complaint-reply",
    "title": "Reply About Tenant Complaint",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "tenant complaint",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about tenant complaint"
  },
  {
    "slug": "landlord-reference-request-reply",
    "title": "Reply About Landlord Reference Request",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "landlord reference request",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about landlord reference request"
  },
  {
    "slug": "move-in-date-confirmation-reply",
    "title": "Reply About Move-in Date Confirmation",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "move-in date confirmation",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about move-in date confirmation"
  },
  {
    "slug": "key-handover-appointment-reply",
    "title": "Reply About Key Handover Appointment",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "key handover appointment",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about key handover appointment"
  },
  {
    "slug": "property-listing-inquiry-reply",
    "title": "Reply About Property Listing Inquiry",
    "category": "Real Estate",
    "categorySlug": "real-estate",
    "keywords": [
      "property listing inquiry",
      "real-estate",
      "real estate"
    ],
    "context": "respond clearly and professionally about property listing inquiry"
  },
  {
    "slug": "order-confirmation-question-reply",
    "title": "Reply About Order Confirmation Question",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "order confirmation question",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about order confirmation question"
  },
  {
    "slug": "wrong-item-received-reply",
    "title": "Reply About Wrong Item Received",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "wrong item received",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about wrong item received"
  },
  {
    "slug": "damaged-parcel-report-reply",
    "title": "Reply About Damaged Parcel Report",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "damaged parcel report",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about damaged parcel report"
  },
  {
    "slug": "marketplace-seller-inquiry-reply",
    "title": "Reply About Marketplace Seller Inquiry",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "marketplace seller inquiry",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about marketplace seller inquiry"
  },
  {
    "slug": "return-label-request-reply",
    "title": "Reply About Return Label Request",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "return label request",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about return label request"
  },
  {
    "slug": "product-availability-question-reply",
    "title": "Reply About Product Availability Question",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "product availability question",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about product availability question"
  },
  {
    "slug": "coupon-not-working-reply",
    "title": "Reply About Coupon Not Working",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "coupon not working",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about coupon not working"
  },
  {
    "slug": "duplicate-order-cancellation-reply",
    "title": "Reply About Duplicate Order Cancellation",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "duplicate order cancellation",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about duplicate order cancellation"
  },
  {
    "slug": "preorder-delay-update-reply",
    "title": "Reply About Preorder Delay Update",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "preorder delay update",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about preorder delay update"
  },
  {
    "slug": "review-response-reply",
    "title": "Reply About Review Response",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "review response",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about review response"
  },
  {
    "slug": "address-change-request-reply",
    "title": "Reply About Address Change Request",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "address change request",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about address change request"
  },
  {
    "slug": "missing-package-claim-reply",
    "title": "Reply About Missing Package Claim",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "missing package claim",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about missing package claim"
  },
  {
    "slug": "bulk-order-inquiry-reply",
    "title": "Reply About Bulk Order Inquiry",
    "category": "E-commerce",
    "categorySlug": "ecommerce",
    "keywords": [
      "bulk order inquiry",
      "ecommerce",
      "e-commerce"
    ],
    "context": "respond clearly and professionally about bulk order inquiry"
  },
  {
    "slug": "trial-extension-request-reply",
    "title": "Reply About Trial Extension Request",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "trial extension request",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about trial extension request"
  },
  {
    "slug": "subscription-cancellation-reply",
    "title": "Reply About Subscription Cancellation",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "subscription cancellation",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about subscription cancellation"
  },
  {
    "slug": "password-reset-issue-reply",
    "title": "Reply About Password Reset Issue",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "password reset issue",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about password reset issue"
  },
  {
    "slug": "feature-request-acknowledgment-reply",
    "title": "Reply About Feature Request Acknowledgment",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "feature request acknowledgment",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about feature request acknowledgment"
  },
  {
    "slug": "bug-report-response-reply",
    "title": "Reply About Bug Report Response",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "bug report response",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about bug report response"
  },
  {
    "slug": "service-outage-update-reply",
    "title": "Reply About Service Outage Update",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "service outage update",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about service outage update"
  },
  {
    "slug": "data-export-request-reply",
    "title": "Reply About Data Export Request",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "data export request",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about data export request"
  },
  {
    "slug": "account-ownership-transfer-reply",
    "title": "Reply About Account Ownership Transfer",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "account ownership transfer",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about account ownership transfer"
  },
  {
    "slug": "billing-plan-change-reply",
    "title": "Reply About Billing Plan Change",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "billing plan change",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about billing plan change"
  },
  {
    "slug": "onboarding-call-invitation-reply",
    "title": "Reply About Onboarding Call Invitation",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "onboarding call invitation",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about onboarding call invitation"
  },
  {
    "slug": "api-access-request-reply",
    "title": "Reply About Api Access Request",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "API access request",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about API access request"
  },
  {
    "slug": "security-questionnaire-reply",
    "title": "Reply About Security Questionnaire",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "security questionnaire",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about security questionnaire"
  },
  {
    "slug": "product-deprecation-notice-reply",
    "title": "Reply About Product Deprecation Notice",
    "category": "SaaS Support",
    "categorySlug": "saas-support",
    "keywords": [
      "product deprecation notice",
      "saas-support",
      "saas support"
    ],
    "context": "respond clearly and professionally about product deprecation notice"
  },
  {
    "slug": "speaker-invitation-reply",
    "title": "Reply About Speaker Invitation",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "speaker invitation",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about speaker invitation"
  },
  {
    "slug": "vendor-quote-request-reply",
    "title": "Reply About Vendor Quote Request",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "vendor quote request",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about vendor quote request"
  },
  {
    "slug": "event-cancellation-reply",
    "title": "Reply About Event Cancellation",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "event cancellation",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about event cancellation"
  },
  {
    "slug": "guest-list-confirmation-reply",
    "title": "Reply About Guest List Confirmation",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "guest list confirmation",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about guest list confirmation"
  },
  {
    "slug": "conference-registration-issue-reply",
    "title": "Reply About Conference Registration Issue",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "conference registration issue",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about conference registration issue"
  },
  {
    "slug": "wedding-rsvp-follow-up-reply",
    "title": "Reply About Wedding Rsvp Follow-up",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "wedding RSVP follow-up",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about wedding RSVP follow-up"
  },
  {
    "slug": "venue-availability-inquiry-reply",
    "title": "Reply About Venue Availability Inquiry",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "venue availability inquiry",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about venue availability inquiry"
  },
  {
    "slug": "sponsorship-proposal-reply-reply",
    "title": "Reply About Sponsorship Proposal Reply",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "sponsorship proposal reply",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about sponsorship proposal reply"
  },
  {
    "slug": "event-agenda-update-reply",
    "title": "Reply About Event Agenda Update",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "event agenda update",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about event agenda update"
  },
  {
    "slug": "dietary-requirement-request-reply",
    "title": "Reply About Dietary Requirement Request",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "dietary requirement request",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about dietary requirement request"
  },
  {
    "slug": "photographer-booking-inquiry-reply",
    "title": "Reply About Photographer Booking Inquiry",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "photographer booking inquiry",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about photographer booking inquiry"
  },
  {
    "slug": "ticket-transfer-request-reply",
    "title": "Reply About Ticket Transfer Request",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "ticket transfer request",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about ticket transfer request"
  },
  {
    "slug": "post-event-thank-you-reply",
    "title": "Reply About Post-event Thank-you",
    "category": "Events",
    "categorySlug": "events",
    "keywords": [
      "post-event thank-you",
      "events",
      "events"
    ],
    "context": "respond clearly and professionally about post-event thank-you"
  },
  {
    "slug": "donation-acknowledgment-reply",
    "title": "Reply About Donation Acknowledgment",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "donation acknowledgment",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about donation acknowledgment"
  },
  {
    "slug": "volunteer-application-reply",
    "title": "Reply About Volunteer Application",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "volunteer application",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about volunteer application"
  },
  {
    "slug": "fundraising-partnership-reply",
    "title": "Reply About Fundraising Partnership",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "fundraising partnership",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about fundraising partnership"
  },
  {
    "slug": "grant-application-follow-up-reply",
    "title": "Reply About Grant Application Follow-up",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "grant application follow-up",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about grant application follow-up"
  },
  {
    "slug": "community-event-invitation-reply",
    "title": "Reply About Community Event Invitation",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "community event invitation",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about community event invitation"
  },
  {
    "slug": "donor-update-reply",
    "title": "Reply About Donor Update",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "donor update",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about donor update"
  },
  {
    "slug": "volunteer-shift-cancellation-reply",
    "title": "Reply About Volunteer Shift Cancellation",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "volunteer shift cancellation",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about volunteer shift cancellation"
  },
  {
    "slug": "in-kind-donation-offer-reply",
    "title": "Reply About In-kind Donation Offer",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "in-kind donation offer",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about in-kind donation offer"
  },
  {
    "slug": "board-meeting-invitation-reply",
    "title": "Reply About Board Meeting Invitation",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "board meeting invitation",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about board meeting invitation"
  },
  {
    "slug": "beneficiary-inquiry-reply",
    "title": "Reply About Beneficiary Inquiry",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "beneficiary inquiry",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about beneficiary inquiry"
  },
  {
    "slug": "campaign-thank-you-reply",
    "title": "Reply About Campaign Thank-you",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "campaign thank-you",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about campaign thank-you"
  },
  {
    "slug": "corporate-sponsor-request-reply",
    "title": "Reply About Corporate Sponsor Request",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "corporate sponsor request",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about corporate sponsor request"
  },
  {
    "slug": "membership-renewal-reply",
    "title": "Reply About Membership Renewal",
    "category": "Nonprofit & Community",
    "categorySlug": "nonprofit",
    "keywords": [
      "membership renewal",
      "nonprofit",
      "nonprofit & community"
    ],
    "context": "respond clearly and professionally about membership renewal"
  },
  {
    "slug": "media-interview-request-reply",
    "title": "Reply About Media Interview Request",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "media interview request",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about media interview request"
  },
  {
    "slug": "press-statement-approval-reply",
    "title": "Reply About Press Statement Approval",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "press statement approval",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about press statement approval"
  },
  {
    "slug": "journalist-deadline-extension-reply",
    "title": "Reply About Journalist Deadline Extension",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "journalist deadline extension",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about journalist deadline extension"
  },
  {
    "slug": "correction-request-to-publication-reply",
    "title": "Reply About Correction Request To Publication",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "correction request to publication",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about correction request to publication"
  },
  {
    "slug": "crisis-inquiry-acknowledgment-reply",
    "title": "Reply About Crisis Inquiry Acknowledgment",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "crisis inquiry acknowledgment",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about crisis inquiry acknowledgment"
  },
  {
    "slug": "press-release-follow-up-reply",
    "title": "Reply About Press Release Follow-up",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "press release follow-up",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about press release follow-up"
  },
  {
    "slug": "podcast-guest-invitation-reply",
    "title": "Reply About Podcast Guest Invitation",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "podcast guest invitation",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about podcast guest invitation"
  },
  {
    "slug": "embargo-agreement-reply",
    "title": "Reply About Embargo Agreement",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "embargo agreement",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about embargo agreement"
  },
  {
    "slug": "spokesperson-availability-reply",
    "title": "Reply About Spokesperson Availability",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "spokesperson availability",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about spokesperson availability"
  },
  {
    "slug": "fact-check-request-reply",
    "title": "Reply About Fact-check Request",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "fact-check request",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about fact-check request"
  },
  {
    "slug": "negative-coverage-response-reply",
    "title": "Reply About Negative Coverage Response",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "negative coverage response",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about negative coverage response"
  },
  {
    "slug": "award-announcement-reply",
    "title": "Reply About Award Announcement",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "award announcement",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about award announcement"
  },
  {
    "slug": "media-partnership-proposal-reply",
    "title": "Reply About Media Partnership Proposal",
    "category": "Public Relations",
    "categorySlug": "public-relations",
    "keywords": [
      "media partnership proposal",
      "public-relations",
      "public relations"
    ],
    "context": "respond clearly and professionally about media partnership proposal"
  },
  {
    "slug": "brand-collaboration-inquiry-reply",
    "title": "Reply About Brand Collaboration Inquiry",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "brand collaboration inquiry",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about brand collaboration inquiry"
  },
  {
    "slug": "sponsorship-rate-request-reply",
    "title": "Reply About Sponsorship Rate Request",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "sponsorship rate request",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about sponsorship rate request"
  },
  {
    "slug": "affiliate-proposal-reply",
    "title": "Reply About Affiliate Proposal",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "affiliate proposal",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about affiliate proposal"
  },
  {
    "slug": "content-usage-permission-reply",
    "title": "Reply About Content Usage Permission",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "content usage permission",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about content usage permission"
  },
  {
    "slug": "late-brand-payment-reply",
    "title": "Reply About Late Brand Payment",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "late brand payment",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about late brand payment"
  },
  {
    "slug": "creative-brief-clarification-reply",
    "title": "Reply About Creative Brief Clarification",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "creative brief clarification",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about creative brief clarification"
  },
  {
    "slug": "product-gifting-offer-reply",
    "title": "Reply About Product Gifting Offer",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "product gifting offer",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about product gifting offer"
  },
  {
    "slug": "podcast-collaboration-reply",
    "title": "Reply About Podcast Collaboration",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "podcast collaboration",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about podcast collaboration"
  },
  {
    "slug": "newsletter-sponsorship-reply",
    "title": "Reply About Newsletter Sponsorship",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "newsletter sponsorship",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about newsletter sponsorship"
  },
  {
    "slug": "usage-rights-negotiation-reply",
    "title": "Reply About Usage Rights Negotiation",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "usage rights negotiation",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about usage rights negotiation"
  },
  {
    "slug": "campaign-deadline-extension-reply",
    "title": "Reply About Campaign Deadline Extension",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "campaign deadline extension",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about campaign deadline extension"
  },
  {
    "slug": "decline-unpaid-collaboration-reply",
    "title": "Reply About Decline Unpaid Collaboration",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "decline unpaid collaboration",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about decline unpaid collaboration"
  },
  {
    "slug": "approve-sponsored-content-reply",
    "title": "Reply About Approve Sponsored Content",
    "category": "Creator Business",
    "categorySlug": "creator-business",
    "keywords": [
      "approve sponsored content",
      "creator-business",
      "creator business"
    ],
    "context": "respond clearly and professionally about approve sponsored content"
  },
  {
    "slug": "request-for-quotation-reply",
    "title": "Reply About Request For Quotation",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "request for quotation",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about request for quotation"
  },
  {
    "slug": "purchase-order-confirmation-reply",
    "title": "Reply About Purchase Order Confirmation",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "purchase order confirmation",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about purchase order confirmation"
  },
  {
    "slug": "vendor-onboarding-reply",
    "title": "Reply About Vendor Onboarding",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "vendor onboarding",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about vendor onboarding"
  },
  {
    "slug": "delivery-delay-notice-reply",
    "title": "Reply About Delivery Delay Notice",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "delivery delay notice",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about delivery delay notice"
  },
  {
    "slug": "price-negotiation-reply",
    "title": "Reply About Price Negotiation",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "price negotiation",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about price negotiation"
  },
  {
    "slug": "sample-request-reply",
    "title": "Reply About Sample Request",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "sample request",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about sample request"
  },
  {
    "slug": "supplier-complaint-reply",
    "title": "Reply About Supplier Complaint",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "supplier complaint",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about supplier complaint"
  },
  {
    "slug": "contract-renewal-reply",
    "title": "Reply About Contract Renewal",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "contract renewal",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about contract renewal"
  },
  {
    "slug": "payment-terms-request-reply",
    "title": "Reply About Payment Terms Request",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "payment terms request",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about payment terms request"
  },
  {
    "slug": "minimum-order-question-reply",
    "title": "Reply About Minimum Order Question",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "minimum order question",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about minimum order question"
  },
  {
    "slug": "quality-issue-report-reply",
    "title": "Reply About Quality Issue Report",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "quality issue report",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about quality issue report"
  },
  {
    "slug": "bid-submission-acknowledgment-reply",
    "title": "Reply About Bid Submission Acknowledgment",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "bid submission acknowledgment",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about bid submission acknowledgment"
  },
  {
    "slug": "vendor-meeting-request-reply",
    "title": "Reply About Vendor Meeting Request",
    "category": "Procurement",
    "categorySlug": "procurement",
    "keywords": [
      "vendor meeting request",
      "procurement",
      "procurement"
    ],
    "context": "respond clearly and professionally about vendor meeting request"
  },
  {
    "slug": "claim-acknowledgment-reply",
    "title": "Reply About Claim Acknowledgment",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "claim acknowledgment",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about claim acknowledgment"
  },
  {
    "slug": "missing-claim-document-reply",
    "title": "Reply About Missing Claim Document",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "missing claim document",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about missing claim document"
  },
  {
    "slug": "policy-renewal-reminder-reply",
    "title": "Reply About Policy Renewal Reminder",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "policy renewal reminder",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about policy renewal reminder"
  },
  {
    "slug": "coverage-clarification-reply",
    "title": "Reply About Coverage Clarification",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "coverage clarification",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about coverage clarification"
  },
  {
    "slug": "claim-decision-follow-up-reply",
    "title": "Reply About Claim Decision Follow-up",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "claim decision follow-up",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about claim decision follow-up"
  },
  {
    "slug": "adjuster-appointment-reply",
    "title": "Reply About Adjuster Appointment",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "adjuster appointment",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about adjuster appointment"
  },
  {
    "slug": "premium-increase-question-reply",
    "title": "Reply About Premium Increase Question",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "premium increase question",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about premium increase question"
  },
  {
    "slug": "beneficiary-update-reply",
    "title": "Reply About Beneficiary Update",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "beneficiary update",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about beneficiary update"
  },
  {
    "slug": "policy-cancellation-request-reply",
    "title": "Reply About Policy Cancellation Request",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "policy cancellation request",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about policy cancellation request"
  },
  {
    "slug": "proof-of-insurance-request-reply",
    "title": "Reply About Proof Of Insurance Request",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "proof of insurance request",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about proof of insurance request"
  },
  {
    "slug": "repair-estimate-submission-reply",
    "title": "Reply About Repair Estimate Submission",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "repair estimate submission",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about repair estimate submission"
  },
  {
    "slug": "claim-payment-delay-reply",
    "title": "Reply About Claim Payment Delay",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "claim payment delay",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about claim payment delay"
  },
  {
    "slug": "insurance-complaint-reply",
    "title": "Reply About Insurance Complaint",
    "category": "Insurance",
    "categorySlug": "insurance",
    "keywords": [
      "insurance complaint",
      "insurance",
      "insurance"
    ],
    "context": "respond clearly and professionally about insurance complaint"
  },
  {
    "slug": "service-appointment-confirmation-reply",
    "title": "Reply About Service Appointment Confirmation",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "service appointment confirmation",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about service appointment confirmation"
  },
  {
    "slug": "repair-estimate-question-reply",
    "title": "Reply About Repair Estimate Question",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "repair estimate question",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about repair estimate question"
  },
  {
    "slug": "vehicle-test-drive-request-reply",
    "title": "Reply About Vehicle Test Drive Request",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "vehicle test drive request",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about vehicle test drive request"
  },
  {
    "slug": "car-rental-extension-reply",
    "title": "Reply About Car Rental Extension",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "car rental extension",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about car rental extension"
  },
  {
    "slug": "warranty-claim-reply",
    "title": "Reply About Warranty Claim",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "warranty claim",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about warranty claim"
  },
  {
    "slug": "dealership-follow-up-reply",
    "title": "Reply About Dealership Follow-up",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "dealership follow-up",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about dealership follow-up"
  },
  {
    "slug": "parts-availability-inquiry-reply",
    "title": "Reply About Parts Availability Inquiry",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "parts availability inquiry",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about parts availability inquiry"
  },
  {
    "slug": "vehicle-delivery-delay-reply",
    "title": "Reply About Vehicle Delivery Delay",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "vehicle delivery delay",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about vehicle delivery delay"
  },
  {
    "slug": "roadside-assistance-follow-up-reply",
    "title": "Reply About Roadside Assistance Follow-up",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "roadside assistance follow-up",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about roadside assistance follow-up"
  },
  {
    "slug": "trade-in-offer-question-reply",
    "title": "Reply About Trade-in Offer Question",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "trade-in offer question",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about trade-in offer question"
  },
  {
    "slug": "service-complaint-reply",
    "title": "Reply About Service Complaint",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "service complaint",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about service complaint"
  },
  {
    "slug": "accident-repair-update-reply",
    "title": "Reply About Accident Repair Update",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "accident repair update",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about accident repair update"
  },
  {
    "slug": "vehicle-purchase-offer-reply",
    "title": "Reply About Vehicle Purchase Offer",
    "category": "Automotive",
    "categorySlug": "automotive",
    "keywords": [
      "vehicle purchase offer",
      "automotive",
      "automotive"
    ],
    "context": "respond clearly and professionally about vehicle purchase offer"
  },
  {
    "slug": "contractor-quote-request-reply",
    "title": "Reply About Contractor Quote Request",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "contractor quote request",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about contractor quote request"
  },
  {
    "slug": "plumber-appointment-reply",
    "title": "Reply About Plumber Appointment",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "plumber appointment",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about plumber appointment"
  },
  {
    "slug": "electrician-delay-update-reply",
    "title": "Reply About Electrician Delay Update",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "electrician delay update",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about electrician delay update"
  },
  {
    "slug": "cleaning-service-complaint-reply",
    "title": "Reply About Cleaning Service Complaint",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "cleaning service complaint",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about cleaning service complaint"
  },
  {
    "slug": "repair-warranty-request-reply",
    "title": "Reply About Repair Warranty Request",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "repair warranty request",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about repair warranty request"
  },
  {
    "slug": "renovation-scope-change-reply",
    "title": "Reply About Renovation Scope Change",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "renovation scope change",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about renovation scope change"
  },
  {
    "slug": "technician-access-instructions-reply",
    "title": "Reply About Technician Access Instructions",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "technician access instructions",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about technician access instructions"
  },
  {
    "slug": "service-cancellation-reply",
    "title": "Reply About Service Cancellation",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "service cancellation",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about service cancellation"
  },
  {
    "slug": "pest-control-follow-up-reply",
    "title": "Reply About Pest Control Follow-up",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "pest control follow-up",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about pest control follow-up"
  },
  {
    "slug": "landscaping-proposal-reply",
    "title": "Reply About Landscaping Proposal",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "landscaping proposal",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about landscaping proposal"
  },
  {
    "slug": "invoice-clarification-reply",
    "title": "Reply About Invoice Clarification",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "invoice clarification",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about invoice clarification"
  },
  {
    "slug": "emergency-repair-request-reply",
    "title": "Reply About Emergency Repair Request",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "emergency repair request",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about emergency repair request"
  },
  {
    "slug": "work-completion-acknowledgment-reply",
    "title": "Reply About Work Completion Acknowledgment",
    "category": "Home Services",
    "categorySlug": "home-services",
    "keywords": [
      "work completion acknowledgment",
      "home-services",
      "home services"
    ],
    "context": "respond clearly and professionally about work completion acknowledgment"
  },
  {
    "slug": "restaurant-reservation-request-reply",
    "title": "Reply About Restaurant Reservation Request",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "restaurant reservation request",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about restaurant reservation request"
  },
  {
    "slug": "catering-quote-reply",
    "title": "Reply About Catering Quote",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "catering quote",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about catering quote"
  },
  {
    "slug": "food-delivery-complaint-reply",
    "title": "Reply About Food Delivery Complaint",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "food delivery complaint",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about food delivery complaint"
  },
  {
    "slug": "allergy-accommodation-reply",
    "title": "Reply About Allergy Accommodation",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "allergy accommodation",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about allergy accommodation"
  },
  {
    "slug": "table-booking-change-reply",
    "title": "Reply About Table Booking Change",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "table booking change",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about table booking change"
  },
  {
    "slug": "private-dining-inquiry-reply",
    "title": "Reply About Private Dining Inquiry",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "private dining inquiry",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about private dining inquiry"
  },
  {
    "slug": "guest-review-response-reply",
    "title": "Reply About Guest Review Response",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "guest review response",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about guest review response"
  },
  {
    "slug": "catering-headcount-update-reply",
    "title": "Reply About Catering Headcount Update",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "catering headcount update",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about catering headcount update"
  },
  {
    "slug": "menu-substitution-request-reply",
    "title": "Reply About Menu Substitution Request",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "menu substitution request",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about menu substitution request"
  },
  {
    "slug": "late-delivery-apology-reply",
    "title": "Reply About Late Delivery Apology",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "late delivery apology",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about late delivery apology"
  },
  {
    "slug": "restaurant-complaint-resolution-reply",
    "title": "Reply About Restaurant Complaint Resolution",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "restaurant complaint resolution",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about restaurant complaint resolution"
  },
  {
    "slug": "event-catering-cancellation-reply",
    "title": "Reply About Event Catering Cancellation",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "event catering cancellation",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about event catering cancellation"
  },
  {
    "slug": "reservation-no-show-follow-up-reply",
    "title": "Reply About Reservation No-show Follow-up",
    "category": "Food & Hospitality",
    "categorySlug": "food-hospitality",
    "keywords": [
      "reservation no-show follow-up",
      "food-hospitality",
      "food & hospitality"
    ],
    "context": "respond clearly and professionally about reservation no-show follow-up"
  },
  {
    "slug": "access-request-approval-reply",
    "title": "Reply About Access Request Approval",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "access request approval",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about access request approval"
  },
  {
    "slug": "incident-status-update-reply",
    "title": "Reply About Incident Status Update",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "incident status update",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about incident status update"
  },
  {
    "slug": "software-deployment-notice-reply",
    "title": "Reply About Software Deployment Notice",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "software deployment notice",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about software deployment notice"
  },
  {
    "slug": "security-alert-acknowledgment-reply",
    "title": "Reply About Security Alert Acknowledgment",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "security alert acknowledgment",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about security alert acknowledgment"
  },
  {
    "slug": "technical-documentation-request-reply",
    "title": "Reply About Technical Documentation Request",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "technical documentation request",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about technical documentation request"
  },
  {
    "slug": "code-review-follow-up-reply",
    "title": "Reply About Code Review Follow-up",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "code review follow-up",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about code review follow-up"
  },
  {
    "slug": "system-maintenance-notice-reply",
    "title": "Reply About System Maintenance Notice",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "system maintenance notice",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about system maintenance notice"
  },
  {
    "slug": "integration-issue-reply",
    "title": "Reply About Integration Issue",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "integration issue",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about integration issue"
  },
  {
    "slug": "device-replacement-request-reply",
    "title": "Reply About Device Replacement Request",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "device replacement request",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about device replacement request"
  },
  {
    "slug": "data-migration-update-reply",
    "title": "Reply About Data Migration Update",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "data migration update",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about data migration update"
  },
  {
    "slug": "it-support-escalation-reply",
    "title": "Reply About It Support Escalation",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "IT support escalation",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about IT support escalation"
  },
  {
    "slug": "license-renewal-question-reply",
    "title": "Reply About License Renewal Question",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "license renewal question",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about license renewal question"
  },
  {
    "slug": "technical-interview-scheduling-reply",
    "title": "Reply About Technical Interview Scheduling",
    "category": "Technology",
    "categorySlug": "technology",
    "keywords": [
      "technical interview scheduling",
      "technology",
      "technology"
    ],
    "context": "respond clearly and professionally about technical interview scheduling"
  },
  {
    "slug": "loan-application-follow-up-reply",
    "title": "Reply About Loan Application Follow-up",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "loan application follow-up",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about loan application follow-up"
  },
  {
    "slug": "budget-meeting-request-reply",
    "title": "Reply About Budget Meeting Request",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "budget meeting request",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about budget meeting request"
  },
  {
    "slug": "payment-plan-proposal-reply",
    "title": "Reply About Payment Plan Proposal",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "payment plan proposal",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about payment plan proposal"
  },
  {
    "slug": "bank-fee-dispute-reply",
    "title": "Reply About Bank Fee Dispute",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "bank fee dispute",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about bank fee dispute"
  },
  {
    "slug": "credit-report-correction-reply",
    "title": "Reply About Credit Report Correction",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "credit report correction",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about credit report correction"
  },
  {
    "slug": "account-closure-request-reply",
    "title": "Reply About Account Closure Request",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "account closure request",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about account closure request"
  },
  {
    "slug": "mortgage-document-request-reply",
    "title": "Reply About Mortgage Document Request",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "mortgage document request",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about mortgage document request"
  },
  {
    "slug": "financial-adviser-appointment-reply",
    "title": "Reply About Financial Adviser Appointment",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "financial adviser appointment",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about financial adviser appointment"
  },
  {
    "slug": "late-payment-explanation-reply",
    "title": "Reply About Late Payment Explanation",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "late payment explanation",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about late payment explanation"
  },
  {
    "slug": "savings-goal-update-reply",
    "title": "Reply About Savings Goal Update",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "savings goal update",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about savings goal update"
  },
  {
    "slug": "debt-repayment-confirmation-reply",
    "title": "Reply About Debt Repayment Confirmation",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "debt repayment confirmation",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about debt repayment confirmation"
  },
  {
    "slug": "investment-statement-question-reply",
    "title": "Reply About Investment Statement Question",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "investment statement question",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about investment statement question"
  },
  {
    "slug": "refund-to-bank-account-reply",
    "title": "Reply About Refund To Bank Account",
    "category": "Personal Finance",
    "categorySlug": "personal-finance",
    "keywords": [
      "refund to bank account",
      "personal-finance",
      "personal finance"
    ],
    "context": "respond clearly and professionally about refund to bank account"
  },
  {
    "slug": "club-membership-inquiry-reply",
    "title": "Reply About Club Membership Inquiry",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "club membership inquiry",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about club membership inquiry"
  },
  {
    "slug": "neighborhood-meeting-invitation-reply",
    "title": "Reply About Neighborhood Meeting Invitation",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "neighborhood meeting invitation",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about neighborhood meeting invitation"
  },
  {
    "slug": "volunteer-rota-change-reply",
    "title": "Reply About Volunteer Rota Change",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "volunteer rota change",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about volunteer rota change"
  },
  {
    "slug": "association-fee-reminder-reply",
    "title": "Reply About Association Fee Reminder",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "association fee reminder",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about association fee reminder"
  },
  {
    "slug": "community-complaint-reply",
    "title": "Reply About Community Complaint",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "community complaint",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about community complaint"
  },
  {
    "slug": "committee-nomination-reply",
    "title": "Reply About Committee Nomination",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "committee nomination",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about committee nomination"
  },
  {
    "slug": "group-event-cancellation-reply",
    "title": "Reply About Group Event Cancellation",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "group event cancellation",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about group event cancellation"
  },
  {
    "slug": "membership-approval-reply",
    "title": "Reply About Membership Approval",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "membership approval",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about membership approval"
  },
  {
    "slug": "facility-booking-request-reply",
    "title": "Reply About Facility Booking Request",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "facility booking request",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about facility booking request"
  },
  {
    "slug": "local-sponsorship-request-reply",
    "title": "Reply About Local Sponsorship Request",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "local sponsorship request",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about local sponsorship request"
  },
  {
    "slug": "meeting-minutes-acknowledgment-reply",
    "title": "Reply About Meeting Minutes Acknowledgment",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "meeting minutes acknowledgment",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about meeting minutes acknowledgment"
  },
  {
    "slug": "community-survey-request-reply",
    "title": "Reply About Community Survey Request",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "community survey request",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about community survey request"
  },
  {
    "slug": "welcome-new-member-reply",
    "title": "Reply About Welcome New Member",
    "category": "Community Groups",
    "categorySlug": "community-groups",
    "keywords": [
      "welcome new member",
      "community-groups",
      "community groups"
    ],
    "context": "respond clearly and professionally about welcome new member"
  }
];


function makeVariants(topic: AuthorityTopic) {
  const subject = topic.title.replace(/^Reply About\s+/i, "").toLowerCase();
  return [
    {label:"Professional",text:`Hello [name],\n\nThank you for your message regarding ${subject}. I am writing to ${topic.context}. Please let me know whether you need any additional details or documents from me.\n\nKind regards,\n[your name]`},
    {label:"Short",text:`Hello [name], thank you for the update regarding ${subject}. Please confirm the next step when convenient.`},
    {label:"Warm",text:`Hi [name],\n\nThanks for reaching out about ${subject}. I appreciate your help and wanted to make sure we are aligned on the next step. Please let me know what works best.`},
    {label:"Direct",text:`Hello [name],\n\nRegarding ${subject}, please confirm [decision/action/date] by [date]. This will allow me to proceed without delay. Thank you.`}
  ];
}
export const authorityReplies: ReplyItem[] = authorityTopics.map(topic=>({
  ...topic,
  description:`Ready-to-copy replies to ${topic.context}.`,
  variants:makeVariants(topic)
}));
