export type Guide = { slug:string; title:string; description:string; categorySlug:string; category:string; intro:string; sections:{heading:string;body:string}[]; relatedSlugs:string[] };
const baseGuides: Guide[] = [
 {slug:"how-to-write-a-professional-reply",title:"How to Write a Professional Reply",description:"A practical framework for clear, polite, action-focused professional messages.",categorySlug:"work",category:"Work",intro:"A strong professional reply is easy to understand, respectful, and clear about what happens next.",sections:[{heading:"Start with the purpose",body:"Open by acknowledging the message and state why you are replying. Avoid a long introduction when the recipient needs a decision or update."},{heading:"Add only useful context",body:"Include the date, request, decision, or constraint that helps the recipient understand your answer. Remove details that do not change the next step."},{heading:"Close with an action",body:"End with a clear question, confirmation, deadline, or next step. This prevents unnecessary back-and-forth."}],relatedSlugs:["reply-to-meeting-request","reply-to-boss-for-appreciation","reply-to-client-payment-delay"]},
 {slug:"how-to-follow-up-after-an-interview",title:"How to Follow Up After an Interview",description:"Learn when to follow up, what to say, and how to show interest without sounding pushy.",categorySlug:"interviews",category:"Interviews & Careers",intro:"The best interview follow-up is brief, specific, and timed appropriately.",sections:[{heading:"Send a thank-you first",body:"Send a concise thank-you within one business day. Mention one useful detail from the conversation and reaffirm your interest."},{heading:"Respect the stated timeline",body:"When the interviewer gives a decision date, wait until that date has passed before asking for an update."},{heading:"Keep the follow-up simple",body:"Ask whether there is an update and whether the team needs anything else from you. One polite follow-up is usually enough."}],relatedSlugs:["interview-thank-you-email","follow-up-after-no-interview-response","ask-for-interview-feedback"]},
 {slug:"how-to-decline-politely",title:"How to Decline Politely Without Damaging the Relationship",description:"Say no clearly while preserving trust, respect, and future opportunities.",categorySlug:"social",category:"Social",intro:"A polite decline combines appreciation, a clear answer, and an appropriate level of explanation.",sections:[{heading:"Do not hide the answer",body:"State the decline early. Vague wording can create false expectations and more follow-up messages."},{heading:"Use a brief reason when useful",body:"A short reason can add context, but you do not need to defend every decision or disclose private details."},{heading:"Offer an alternative carefully",body:"Suggest another date, person, or option only when you genuinely intend to help."}],relatedSlugs:["decline-job-offer-politely","decline-networking-meeting","decline-collaboration"]},
 {slug:"how-to-handle-customer-complaints",title:"How to Reply to Customer Complaints",description:"A step-by-step method for calming frustration and moving toward a fair solution.",categorySlug:"customer-service",category:"Customer Service",intro:"Effective complaint replies acknowledge the experience, take ownership of the next step, and avoid defensive language.",sections:[{heading:"Acknowledge the impact",body:"Show that you understand what went wrong and how it affected the customer. Avoid generic apologies that ignore the actual issue."},{heading:"Explain the next action",body:"Tell the customer what you will investigate, replace, refund, or escalate, including a realistic timeframe."},{heading:"Close the loop",body:"Follow up after the solution to confirm that the issue is resolved and record any lesson for the team."}],relatedSlugs:["reply-to-customer-complaint","reply-to-angry-customer","reply-to-refund-request"]},
 {slug:"how-to-follow-up-on-late-payment",title:"How to Follow Up on a Late Payment",description:"Professional ways to remind a client, become firmer, and protect the working relationship.",categorySlug:"freelancing",category:"Freelancing",intro:"Late-payment follow-ups work best when they are factual, easy to act on, and progressively firmer.",sections:[{heading:"Begin with a friendly reminder",body:"Include the invoice number, due date, amount, and payment link or bank details so the client can act immediately."},{heading:"Set a new deadline",body:"When the first reminder is ignored, give a specific payment date and ask the client to explain any dispute promptly."},{heading:"Apply the agreed terms",body:"Pause work, charge an agreed late fee, or escalate only in line with the contract and applicable rules."}],relatedSlugs:["reply-to-client-payment-delay","request-project-deposit","confirm-payment-received"]},
 {slug:"business-email-etiquette",title:"Business Email Etiquette: 10 Rules That Prevent Confusion",description:"Simple email habits that make messages clearer, faster, and more professional.",categorySlug:"work",category:"Work",intro:"Good email etiquette is less about formality and more about helping the recipient understand and act.",sections:[{heading:"Use a useful subject line",body:"Name the project, request, or decision. Add a date when timing matters."},{heading:"Keep one main purpose",body:"When several unrelated decisions are needed, separate them into clear bullets or different messages."},{heading:"Review names, dates, and attachments",body:"Most damaging email mistakes are factual. Check the recipient, deadline, amount, links, and promised attachments before sending."}],relatedSlugs:["reply-to-meeting-request","request-annual-leave","reply-to-policy-update"]},
 {slug:"how-to-ask-for-a-referral",title:"How to Ask for a Professional Referral",description:"Request a referral respectfully and make it easy for the other person to help.",categorySlug:"networking",category:"Networking",intro:"A referral request should be personal, specific, and free of pressure.",sections:[{heading:"Choose the right person",body:"Ask someone who knows your work or can credibly speak about your fit. A weak connection may be uncomfortable endorsing you."},{heading:"Provide the essentials",body:"Share the role link, a short fit summary, and an updated resume. Do not make the person research the opportunity for you."},{heading:"Make declining easy",body:"Use wording that allows the contact to say no without embarrassment. Thank them regardless of the answer."}],relatedSlugs:["ask-for-professional-referral","reply-to-referral-offer","thank-someone-for-referral"]},
 {slug:"how-to-manage-scope-creep",title:"How Freelancers Can Handle Scope Creep",description:"Recognize extra work, reset boundaries, and offer a fair change request.",categorySlug:"freelancing",category:"Freelancing",intro:"Scope creep becomes easier to manage when the conversation stays focused on the original agreement and options.",sections:[{heading:"Name the added request",body:"Describe exactly what is new and connect it to the agreed deliverables. Avoid accusing the client of bad intent."},{heading:"Explain the impact",body:"State how the change affects cost, timeline, or other deliverables."},{heading:"Offer clear options",body:"Provide a paid change order, a swap with an existing deliverable, or a future phase."}],relatedSlugs:["reply-to-scope-creep","reply-to-revision-request","reply-to-budget-too-low"]},
];

export const authorityGuides: Guide[] = [
  {
    "slug": "write-a-clear-status-update",
    "title": "How to Write a Clear Status Update",
    "description": "Keep distributed teams aligned without unnecessary meetings.",
    "categorySlug": "remote-work",
    "category": "Remote Work",
    "intro": "Keep distributed teams aligned without unnecessary meetings.",
    "sections": [
      {
        "heading": "State the outcome first",
        "body": "State the outcome first with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Separate progress from blockers",
        "body": "Separate progress from blockers with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Name the next checkpoint",
        "body": "Name the next checkpoint with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "give-constructive-feedback",
    "title": "How to Give Constructive Feedback",
    "description": "Use specific, fair feedback that supports improvement.",
    "categorySlug": "leadership",
    "category": "Leadership",
    "intro": "Use specific, fair feedback that supports improvement.",
    "sections": [
      {
        "heading": "Describe observable behavior",
        "body": "Describe observable behavior with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Explain the impact",
        "body": "Explain the impact with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Agree on a next step",
        "body": "Agree on a next step with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "manage-a-project-delay",
    "title": "How to Communicate a Project Delay",
    "description": "Explain delays early while protecting trust.",
    "categorySlug": "project-management",
    "category": "Project Management",
    "intro": "Explain delays early while protecting trust.",
    "sections": [
      {
        "heading": "Share the facts",
        "body": "Share the facts with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Reset the timeline",
        "body": "Reset the timeline with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Reduce future risk",
        "body": "Reduce future risk with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "reply-to-a-legal-document-request",
    "title": "How to Reply to a Document Request",
    "description": "Respond accurately to formal document and records requests.",
    "categorySlug": "legal-admin",
    "category": "Legal & Administration",
    "intro": "Respond accurately to formal document and records requests.",
    "sections": [
      {
        "heading": "Confirm what was requested",
        "body": "Confirm what was requested with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Check authority and privacy",
        "body": "Check authority and privacy with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Set a realistic delivery date",
        "body": "Set a realistic delivery date with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "handle-a-tenant-maintenance-request",
    "title": "How to Handle a Tenant Maintenance Request",
    "description": "A practical response framework for property maintenance.",
    "categorySlug": "real-estate",
    "category": "Real Estate",
    "intro": "A practical response framework for property maintenance.",
    "sections": [
      {
        "heading": "Acknowledge urgency",
        "body": "Acknowledge urgency with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Arrange access",
        "body": "Arrange access with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Confirm completion",
        "body": "Confirm completion with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "respond-to-an-ecommerce-return",
    "title": "How to Respond to an E-commerce Return",
    "description": "Make return communication simple, fair, and actionable.",
    "categorySlug": "ecommerce",
    "category": "E-commerce",
    "intro": "Make return communication simple, fair, and actionable.",
    "sections": [
      {
        "heading": "Verify the order",
        "body": "Verify the order with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Explain the return path",
        "body": "Explain the return path with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Close with timing",
        "body": "Close with timing with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "write-a-saas-outage-update",
    "title": "How to Write a SaaS Outage Update",
    "description": "Communicate incidents with clarity and credibility.",
    "categorySlug": "saas-support",
    "category": "SaaS Support",
    "intro": "Communicate incidents with clarity and credibility.",
    "sections": [
      {
        "heading": "Acknowledge impact",
        "body": "Acknowledge impact with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Share verified facts",
        "body": "Share verified facts with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Commit to update times",
        "body": "Commit to update times with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "decline-an-event-invitation",
    "title": "How to Decline an Event Invitation Gracefully",
    "description": "Say no without weakening the relationship.",
    "categorySlug": "events",
    "category": "Events",
    "intro": "Say no without weakening the relationship.",
    "sections": [
      {
        "heading": "Thank the host",
        "body": "Thank the host with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Decline clearly",
        "body": "Decline clearly with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Offer a warm close",
        "body": "Offer a warm close with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "thank-nonprofit-donors",
    "title": "How to Thank Nonprofit Donors",
    "description": "Write donor messages that feel personal and accountable.",
    "categorySlug": "nonprofit",
    "category": "Nonprofit & Community",
    "intro": "Write donor messages that feel personal and accountable.",
    "sections": [
      {
        "heading": "Lead with gratitude",
        "body": "Lead with gratitude with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Show the impact",
        "body": "Show the impact with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Keep the relationship open",
        "body": "Keep the relationship open with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "respond-to-a-media-inquiry",
    "title": "How to Respond to a Media Inquiry",
    "description": "Handle journalist requests quickly and carefully.",
    "categorySlug": "public-relations",
    "category": "Public Relations",
    "intro": "Handle journalist requests quickly and carefully.",
    "sections": [
      {
        "heading": "Confirm the deadline",
        "body": "Confirm the deadline with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Define what is on record",
        "body": "Define what is on record with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Provide accurate follow-up",
        "body": "Provide accurate follow-up with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "negotiate-creator-sponsorship",
    "title": "How Creators Can Negotiate Sponsorships",
    "description": "Protect value, rights, and deadlines in brand deals.",
    "categorySlug": "creator-business",
    "category": "Creator Business",
    "intro": "Protect value, rights, and deadlines in brand deals.",
    "sections": [
      {
        "heading": "Clarify deliverables",
        "body": "Clarify deliverables with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Price usage rights",
        "body": "Price usage rights with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Confirm payment terms",
        "body": "Confirm payment terms with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "compare-vendor-quotes",
    "title": "How to Compare and Reply to Vendor Quotes",
    "description": "Evaluate quotations and communicate decisions consistently.",
    "categorySlug": "procurement",
    "category": "Procurement",
    "intro": "Evaluate quotations and communicate decisions consistently.",
    "sections": [
      {
        "heading": "Compare like for like",
        "body": "Compare like for like with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Ask targeted questions",
        "body": "Ask targeted questions with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Document the decision",
        "body": "Document the decision with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "follow-up-on-an-insurance-claim",
    "title": "How to Follow Up on an Insurance Claim",
    "description": "Keep claim communication organized and evidence-based.",
    "categorySlug": "insurance",
    "category": "Insurance",
    "intro": "Keep claim communication organized and evidence-based.",
    "sections": [
      {
        "heading": "Reference the claim number",
        "body": "Reference the claim number with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Ask for a specific status",
        "body": "Ask for a specific status with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Record every commitment",
        "body": "Record every commitment with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "reply-to-a-repair-estimate",
    "title": "How to Reply to an Automotive Repair Estimate",
    "description": "Review repair estimates before approving work.",
    "categorySlug": "automotive",
    "category": "Automotive",
    "intro": "Review repair estimates before approving work.",
    "sections": [
      {
        "heading": "Ask what is essential",
        "body": "Ask what is essential with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Confirm parts and labor",
        "body": "Confirm parts and labor with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Approve in writing",
        "body": "Approve in writing with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "hire-a-home-service-provider",
    "title": "How to Hire a Home Service Provider",
    "description": "Request and compare service quotes with fewer surprises.",
    "categorySlug": "home-services",
    "category": "Home Services",
    "intro": "Request and compare service quotes with fewer surprises.",
    "sections": [
      {
        "heading": "Define the job",
        "body": "Define the job with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Confirm exclusions",
        "body": "Confirm exclusions with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Agree on access and payment",
        "body": "Agree on access and payment with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "respond-to-restaurant-complaints",
    "title": "How to Respond to Restaurant Complaints",
    "description": "Resolve guest concerns with empathy and speed.",
    "categorySlug": "food-hospitality",
    "category": "Food & Hospitality",
    "intro": "Resolve guest concerns with empathy and speed.",
    "sections": [
      {
        "heading": "Recognize the experience",
        "body": "Recognize the experience with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Offer a proportionate remedy",
        "body": "Offer a proportionate remedy with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Follow up privately",
        "body": "Follow up privately with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "write-a-technical-incident-update",
    "title": "How to Write a Technical Incident Update",
    "description": "Make technical updates useful to nontechnical stakeholders.",
    "categorySlug": "technology",
    "category": "Technology",
    "intro": "Make technical updates useful to nontechnical stakeholders.",
    "sections": [
      {
        "heading": "Translate impact",
        "body": "Translate impact with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Separate facts from assumptions",
        "body": "Separate facts from assumptions with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "State recovery actions",
        "body": "State recovery actions with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "request-a-payment-plan",
    "title": "How to Request a Payment Plan",
    "description": "Propose a realistic arrangement before a payment problem grows.",
    "categorySlug": "personal-finance",
    "category": "Personal Finance",
    "intro": "Propose a realistic arrangement before a payment problem grows.",
    "sections": [
      {
        "heading": "Explain briefly",
        "body": "Explain briefly with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Offer a workable amount",
        "body": "Offer a workable amount with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Get the agreement in writing",
        "body": "Get the agreement in writing with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "run-a-community-meeting",
    "title": "How to Communicate Before a Community Meeting",
    "description": "Help members arrive informed and ready to decide.",
    "categorySlug": "community-groups",
    "category": "Community Groups",
    "intro": "Help members arrive informed and ready to decide.",
    "sections": [
      {
        "heading": "Share the purpose",
        "body": "Share the purpose with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Publish the agenda",
        "body": "Publish the agenda with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Explain how to participate",
        "body": "Explain how to participate with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "follow-up-on-job-application",
    "title": "How to Follow Up on a Job Application",
    "description": "Show interest without overwhelming the hiring team.",
    "categorySlug": "job-search",
    "category": "Job Search",
    "intro": "Show interest without overwhelming the hiring team.",
    "sections": [
      {
        "heading": "Wait an appropriate period",
        "body": "Wait an appropriate period with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Reference the exact role",
        "body": "Reference the exact role with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Keep the request light",
        "body": "Keep the request light with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "reply-to-scope-change",
    "title": "How to Reply to a Scope Change",
    "description": "Turn an informal request into a clear project decision.",
    "categorySlug": "project-management",
    "category": "Project Management",
    "intro": "Turn an informal request into a clear project decision.",
    "sections": [
      {
        "heading": "Identify the change",
        "body": "Identify the change with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Explain cost and time impact",
        "body": "Explain cost and time impact with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Request approval",
        "body": "Request approval with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "handle-vendor-delays",
    "title": "How to Handle Vendor Delays",
    "description": "Protect delivery commitments while preserving supplier relationships.",
    "categorySlug": "procurement",
    "category": "Procurement",
    "intro": "Protect delivery commitments while preserving supplier relationships.",
    "sections": [
      {
        "heading": "Confirm the revised date",
        "body": "Confirm the revised date with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Assess downstream impact",
        "body": "Assess downstream impact with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      },
      {
        "heading": "Agree on recovery actions",
        "body": "Agree on recovery actions with concrete facts, respectful wording, and a clear next step. Keep the message focused on what the recipient needs to understand or do."
      }
    ],
    "relatedSlugs": []
  }
];

export const guides: Guide[] = [...baseGuides, ...authorityGuides];
export function getGuide(slug:string){return guides.find(g=>g.slug===slug)}
