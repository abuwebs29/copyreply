export type ReplyVariant = { label: string; text: string };
export type ReplyItem = { slug: string; title: string; description: string; category: string; categorySlug: string; keywords: string[]; variants: ReplyVariant[]; };

import { scaleCategories, scaleReplies } from "./scaleData";

export const baseCategories = [
  {
    "slug": "work",
    "name": "Work",
    "icon": "Briefcase",
    "description": "Replies for recruiters, managers, colleagues, meetings, clients, and careers."
  },
  {
    "slug": "customer-service",
    "name": "Customer Service",
    "icon": "Headphones",
    "description": "Clear responses for complaints, refunds, delivery issues, accounts, and support."
  },
  {
    "slug": "thank-you",
    "name": "Thank You",
    "icon": "Heart",
    "description": "Warm, professional, and simple thank-you replies for every situation."
  },
  {
    "slug": "social",
    "name": "Social",
    "icon": "MessageCircle",
    "description": "Ready replies for WhatsApp, LinkedIn, Facebook, and everyday conversations."
  },
  {
    "slug": "education",
    "name": "Education",
    "icon": "GraduationCap",
    "description": "Polite messages for teachers, professors, students, admissions, and deadlines."
  },
  {
    "slug": "invitations",
    "name": "Invitations",
    "icon": "CalendarCheck",
    "description": "Accept, decline, postpone, or acknowledge personal and business invitations."
  }
  ,{
    "slug": "sales",
    "name": "Sales & Clients",
    "icon": "Handshake",
    "description": "Replies for leads, proposals, pricing, negotiations, follow-ups, and client relationships."
  },
  {
    "slug": "relationships",
    "name": "Relationships",
    "icon": "Users",
    "description": "Thoughtful replies for friends, family, partners, boundaries, and difficult conversations."
  },
  {
    "slug": "travel",
    "name": "Travel & Hospitality",
    "icon": "Plane",
    "description": "Useful messages for hotels, bookings, hosts, airlines, guests, and travel changes."
  },
  {
    "slug": "healthcare",
    "name": "Healthcare",
    "icon": "Stethoscope",
    "description": "Clear, respectful replies for appointments, clinics, medical offices, and patient communication."
  }
] as const;

export const categories = [...baseCategories, ...scaleCategories] as const;

export const baseReplies: ReplyItem[] = [
  {
    slug: "reply-to-recruiter-after-interview", title: "Reply to a Recruiter After an Interview", description: "Professional follow-up replies that show appreciation and genuine interest.",
    category: "Work", categorySlug: "work", keywords: ["recruiter", "interview", "job", "follow up"],
    variants: [
      { label: "Professional", text: "Thank you for taking the time to speak with me today. I appreciated learning more about the role and the team. Our conversation strengthened my interest in the opportunity, and I look forward to hearing about the next steps." },
      { label: "Short", text: "Thank you for speaking with me today. I enjoyed learning more about the role and remain very interested in the opportunity." },
      { label: "Warm", text: "It was a pleasure speaking with you today. Thank you for sharing more about the position and team. I would be excited to continue in the process." },
    ]
  },
  {
    slug: "reply-to-interview-invitation", title: "Reply to an Interview Invitation", description: "Confirm an interview clearly and professionally.",
    category: "Work", categorySlug: "work", keywords: ["interview invitation", "confirm interview", "recruiter"],
    variants: [
      { label: "Professional", text: "Thank you for the invitation. I am pleased to confirm my availability for the interview on [date] at [time]. I look forward to speaking with you and learning more about the role." },
      { label: "Enthusiastic", text: "Thank you for inviting me to interview. I am excited about the opportunity and happy to confirm [date] at [time]." },
      { label: "Request Another Time", text: "Thank you for the invitation. I am unavailable at the proposed time, but I am available on [option 1] or [option 2]. Please let me know whether either works for you." },
    ]
  },
  {
    slug: "reply-to-job-offer", title: "Reply to a Job Offer", description: "Accept, acknowledge, or request time to review a job offer.",
    category: "Work", categorySlug: "work", keywords: ["job offer", "accept offer", "review offer"],
    variants: [
      { label: "Accept", text: "Thank you for offering me the [role] position. I am delighted to accept and look forward to joining the team. Please share the next steps and any documents I should complete." },
      { label: "Review", text: "Thank you very much for the offer. I appreciate the opportunity and would like until [date] to review the details carefully before confirming my decision." },
      { label: "Clarify", text: "Thank you for the offer. Before I confirm, could you please clarify [salary/start date/benefit]? I appreciate your help and remain very interested in the role." },
    ]
  },
  {
    slug: "decline-job-offer-politely", title: "How to Decline a Job Offer Politely", description: "Respectful messages that preserve a positive professional relationship.",
    category: "Work", categorySlug: "work", keywords: ["decline job offer", "reject offer", "career"],
    variants: [
      { label: "Professional", text: "Thank you sincerely for the offer and for the time your team invested in the process. After careful consideration, I have decided not to accept the position. I greatly appreciate the opportunity and hope we can stay connected." },
      { label: "Short", text: "Thank you for the offer. After careful consideration, I have decided to pursue another opportunity. I appreciate your time and consideration." },
      { label: "Warm", text: "I am grateful for the offer and enjoyed meeting the team. This was a difficult decision, but I have chosen a different direction that better fits my current goals." },
    ]
  },
  {
    slug: "reply-to-salary-expectations", title: "Reply When Asked About Salary Expectations", description: "Confident ways to discuss compensation without closing the conversation.",
    category: "Work", categorySlug: "work", keywords: ["salary expectations", "recruiter", "compensation"],
    variants: [
      { label: "Range", text: "Based on the responsibilities of the role and current market rates, I am targeting a range of [amount] to [amount]. I am open to discussing the complete compensation package." },
      { label: "Flexible", text: "I am flexible and would like to understand the full scope of the role and benefits. I am confident we can agree on compensation that reflects the responsibilities and my experience." },
      { label: "Ask Budget", text: "Could you share the budgeted range for the position? That would help me provide an informed answer and confirm that our expectations are aligned." },
    ]
  },
  {
    slug: "reply-to-boss-for-appreciation", title: "Reply to Your Boss for Appreciation", description: "Gracious replies for praise and positive feedback.",
    category: "Work", categorySlug: "work", keywords: ["boss", "manager", "appreciation", "praise"],
    variants: [
      { label: "Professional", text: "Thank you for the kind feedback. I appreciate your support and am glad my work contributed positively to the team." },
      { label: "Confident", text: "Thank you. I am pleased the work delivered the result we needed, and I appreciate your recognition." },
      { label: "Warm", text: "Thank you so much. Your feedback means a lot to me, and I am grateful for your guidance and support." },
    ]
  },
  {
    slug: "reply-to-meeting-request", title: "Reply to a Meeting Request", description: "Accept, reschedule, or ask for context before a meeting.",
    category: "Work", categorySlug: "work", keywords: ["meeting request", "schedule", "calendar"],
    variants: [
      { label: "Accept", text: "Thank you for reaching out. I am available on [date] at [time] and have added the meeting to my calendar. I look forward to our discussion." },
      { label: "Reschedule", text: "Thank you for the invitation. I have a conflict at that time. Would [alternative date/time] work instead?" },
      { label: "Ask Agenda", text: "I would be happy to meet. Could you please share the agenda or key topics so I can prepare appropriately?" },
    ]
  },
  {
    slug: "reply-to-client-payment-delay", title: "Reply to a Client About a Payment Delay", description: "Polite but clear responses about overdue or delayed payments.",
    category: "Work", categorySlug: "work", keywords: ["client", "payment delay", "invoice", "overdue"],
    variants: [
      { label: "Polite Reminder", text: "I hope you are well. This is a friendly reminder that invoice [number], due on [date], remains outstanding. Please let me know when payment is expected or if you need another copy." },
      { label: "Firm", text: "Invoice [number] is now overdue. Please arrange payment by [date] or contact me today if there is an issue preventing settlement." },
      { label: "Understanding", text: "Thank you for the update. I understand delays can happen. Please confirm the revised payment date so I can update my records." },
    ]
  },
  {
    slug: "reply-to-customer-complaint", title: "Reply to a Customer Complaint", description: "Calm, accountable responses that move toward a solution.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["customer", "complaint", "support", "apology"],
    variants: [
      { label: "Professional", text: "Thank you for bringing this to our attention. I am sorry for the inconvenience you experienced. We are reviewing the issue and will update you with the next steps as soon as possible." },
      { label: "Empathetic", text: "I understand how frustrating this must have been, and I am sorry we did not meet your expectations. Please allow us the opportunity to investigate and make this right." },
      { label: "Short", text: "I am sorry about this experience. We are reviewing the issue and will get back to you shortly with a solution." },
    ]
  },
  {
    slug: "reply-to-refund-request", title: "Reply to a Refund Request", description: "Useful responses for approvals, reviews, and missing information.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["refund", "return", "payment", "support"],
    variants: [
      { label: "Approval", text: "Your refund request has been approved. The amount will be returned to your original payment method. Processing time may vary depending on your bank." },
      { label: "Under Review", text: "Thank you for your refund request. We are reviewing the details and will confirm the outcome shortly. We appreciate your patience." },
      { label: "Need Details", text: "We can help with your refund request. Please share your order number and a brief description of the issue so we can review it promptly." },
    ]
  },
  {
    slug: "reply-to-negative-review", title: "Reply to a Negative Review", description: "Public responses that acknowledge concerns and protect trust.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["negative review", "customer review", "business response"],
    variants: [
      { label: "Professional", text: "Thank you for sharing your feedback. We are sorry your experience did not meet expectations. Please contact us at [contact] so we can review what happened and work toward a resolution." },
      { label: "Empathetic", text: "We are genuinely sorry to hear about your experience. Your feedback matters to us, and we would appreciate the opportunity to make things right." },
      { label: "Brief", text: "We are sorry we missed the mark. Please contact us directly so we can investigate and help." },
    ]
  },
  {
    slug: "reply-to-delivery-delay", title: "Reply to a Customer About a Delivery Delay", description: "Clear updates that set expectations and reduce frustration.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["delivery delay", "shipping", "customer update"],
    variants: [
      { label: "Update", text: "We apologize for the delay with your order. It is currently expected to arrive by [date]. We are monitoring the shipment and will notify you of any further changes." },
      { label: "Compensation", text: "We are sorry for the delivery delay. Your order is now expected by [date], and we have added [credit/refund] to your account for the inconvenience." },
      { label: "Investigating", text: "I am sorry your order has not arrived. We have opened an investigation with the carrier and will update you within [timeframe]." },
    ]
  },
  {
    slug: "reply-to-cancellation-request", title: "Reply to a Cancellation Request", description: "Confirm, retain, or clarify a customer cancellation.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["cancellation", "subscription", "order"],
    variants: [
      { label: "Confirmed", text: "Your cancellation has been completed, and no further charges will be made. You will receive a confirmation email shortly." },
      { label: "Clarify", text: "We can help with your cancellation. Please confirm the order or subscription number so we can process it correctly." },
      { label: "Retention", text: "I am sorry to hear you are considering cancellation. Before we proceed, would you like help resolving [issue] or reviewing a more suitable plan?" },
    ]
  },
  {
    slug: "reply-to-thank-you", title: "How to Reply to Thank You", description: "Natural replies in professional, friendly, and warm tones.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["thank you", "welcome", "appreciation"],
    variants: [
      { label: "Professional", text: "You are very welcome. I am glad I could help." },
      { label: "Friendly", text: "Anytime! Happy to help." },
      { label: "Warm", text: "You are most welcome. It was truly my pleasure." },
    ]
  },
  {
    slug: "reply-to-thank-you-for-gift", title: "Reply to Thank You for a Gift", description: "Warm responses after someone appreciates your gift.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["thank you gift", "gift reply", "appreciation"],
    variants: [
      { label: "Warm", text: "You are very welcome. I am so glad you liked it, and it made me happy to celebrate the occasion with you." },
      { label: "Simple", text: "My pleasure! I am happy the gift was useful and well received." },
      { label: "Affectionate", text: "You deserve it. Seeing you happy was the best part for me." },
    ]
  },
  {
    slug: "reply-to-thank-you-email", title: "Reply to a Thank-You Email", description: "Professional and personal email responses to appreciation.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["thank you email", "email reply", "professional"],
    variants: [
      { label: "Professional", text: "Thank you for your thoughtful message. I appreciate your kind words and am pleased I could assist." },
      { label: "Collaborative", text: "You are very welcome. It was a team effort, and I am glad we achieved a positive result together." },
      { label: "Short", text: "You are welcome, and thank you for taking the time to write." },
    ]
  },
  {
    slug: "reply-to-appreciation-from-colleague", title: "Reply to Appreciation From a Colleague", description: "Gracious workplace replies that strengthen teamwork.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["colleague appreciation", "coworker", "team"],
    variants: [
      { label: "Team-Focused", text: "Thank you. I appreciate your kind words, and I am glad we could support each other and deliver this together." },
      { label: "Friendly", text: "Thank you! Working with you made the process much easier." },
      { label: "Professional", text: "I appreciate the feedback. It was a pleasure collaborating with you on this." },
    ]
  },
  {
    slug: "reply-to-birthday-wishes", title: "Reply to Birthday Wishes", description: "Thank everyone with short, warm, and group-friendly replies.",
    category: "Social", categorySlug: "social", keywords: ["birthday", "wishes", "facebook", "whatsapp"],
    variants: [
      { label: "Warm", text: "Thank you so much for the lovely birthday wishes. You made my day even more special." },
      { label: "Group Reply", text: "Thank you everyone for the wonderful birthday wishes. I truly appreciate all the love and kind messages." },
      { label: "Short", text: "Thank you for the birthday wishes! I really appreciate it." },
    ]
  },
  {
    slug: "reply-to-congratulations", title: "How to Reply to Congratulations", description: "Simple and gracious replies to congratulatory messages.",
    category: "Social", categorySlug: "social", keywords: ["congratulations", "achievement", "promotion"],
    variants: [
      { label: "Warm", text: "Thank you so much! Your kind words mean a lot to me." },
      { label: "Professional", text: "Thank you for the congratulations. I truly appreciate your support and encouragement." },
      { label: "Shared Credit", text: "Thank you! I am grateful for the support of everyone who helped make this possible." },
    ]
  },
  {
    slug: "reply-to-apology", title: "How to Reply When Someone Apologizes", description: "Accept an apology with warmth, boundaries, or neutrality.",
    category: "Social", categorySlug: "social", keywords: ["apology", "sorry", "forgive"],
    variants: [
      { label: "Accepting", text: "Thank you for apologizing. I appreciate you acknowledging what happened, and I am ready to move forward." },
      { label: "Need Time", text: "I appreciate your apology. I still need some time to process everything, but thank you for reaching out." },
      { label: "Simple", text: "Thank you for saying that. I accept your apology." },
    ]
  },
  {
    slug: "reply-to-good-morning-message", title: "Reply to a Good Morning Message", description: "Friendly, warm, and professional morning responses.",
    category: "Social", categorySlug: "social", keywords: ["good morning", "whatsapp", "message"],
    variants: [
      { label: "Friendly", text: "Good morning! I hope your day starts beautifully and gets even better." },
      { label: "Warm", text: "Good morning to you too. Your message was a lovely way to start my day." },
      { label: "Professional", text: "Good morning. Thank you for your message. I hope you have a productive day ahead." },
    ]
  },
  {
    slug: "reply-to-how-are-you", title: "How to Reply to “How Are You?”", description: "Natural responses for casual and professional conversations.",
    category: "Social", categorySlug: "social", keywords: ["how are you", "conversation", "small talk"],
    variants: [
      { label: "Friendly", text: "I am doing well, thank you! How have you been?" },
      { label: "Professional", text: "I am well, thank you for asking. I hope you are doing well too." },
      { label: "Honest", text: "It has been a busy week, but I am doing okay. Thanks for checking in." },
    ]
  },
  {
    slug: "decline-an-invitation-politely", title: "How to Decline an Invitation Politely", description: "Respectful ways to say no without sounding cold.",
    category: "Invitations", categorySlug: "invitations", keywords: ["decline", "invitation", "party", "polite"],
    variants: [
      { label: "Polite", text: "Thank you very much for the invitation. Unfortunately, I will not be able to attend, but I truly appreciate you thinking of me." },
      { label: "Warm", text: "I am so grateful for the invitation. I am sorry I cannot make it this time, and I hope you have a wonderful event." },
      { label: "Short", text: "Thank you for inviting me. I am unable to attend, but I really appreciate the invitation." },
    ]
  },
  {
    slug: "accept-an-invitation", title: "How to Accept an Invitation", description: "Enthusiastic and polite ways to confirm attendance.",
    category: "Invitations", categorySlug: "invitations", keywords: ["accept invitation", "rsvp", "attend"],
    variants: [
      { label: "Warm", text: "Thank you so much for inviting me. I would be delighted to attend and look forward to celebrating with you." },
      { label: "Simple", text: "Thank you for the invitation. I am happy to confirm that I will attend." },
      { label: "Enthusiastic", text: "I would love to come! Thank you for including me. I am really looking forward to it." },
    ]
  },
  {
    slug: "reply-to-wedding-invitation", title: "Reply to a Wedding Invitation", description: "Accept or decline a wedding invitation gracefully.",
    category: "Invitations", categorySlug: "invitations", keywords: ["wedding invitation", "rsvp", "marriage"],
    variants: [
      { label: "Accept", text: "Thank you for inviting us to share in your special day. We are delighted to attend and cannot wait to celebrate with you." },
      { label: "Decline", text: "Thank you for the beautiful invitation. We are sorry we cannot attend, but we send our warmest wishes for a joyful wedding and a wonderful life together." },
      { label: "Pending", text: "Thank you for the invitation. We are checking our schedule and will confirm our attendance by [date]." },
    ]
  },
  {
    slug: "reply-to-dinner-invitation", title: "Reply to a Dinner Invitation", description: "Friendly ways to accept, decline, or suggest another date.",
    category: "Invitations", categorySlug: "invitations", keywords: ["dinner invitation", "accept dinner", "decline dinner"],
    variants: [
      { label: "Accept", text: "Thank you for inviting me. I would love to join you for dinner and look forward to seeing everyone." },
      { label: "Decline", text: "Thank you for the kind invitation. I am unable to make it this time, but I hope we can arrange another evening soon." },
      { label: "Alternative", text: "I cannot make that date, but I would love to catch up. Would [alternative date] work for you?" },
    ]
  },
  {
    slug: "reply-to-professor-about-late-assignment", title: "Reply to a Professor About a Late Assignment", description: "Responsible messages for explaining a late submission.",
    category: "Education", categorySlug: "education", keywords: ["professor", "late assignment", "student", "deadline"],
    variants: [
      { label: "Responsible", text: "Thank you for contacting me. I apologize for missing the deadline and take responsibility for the delay. I have completed the assignment and would appreciate the opportunity to submit it, even with a penalty if necessary." },
      { label: "Request", text: "I apologize for the late submission. I experienced an unexpected issue that affected my ability to meet the deadline. Would it be possible to submit the assignment by [date]?" },
      { label: "Short", text: "I apologize for the delay and understand the importance of the deadline. May I submit the completed assignment by [date]?" },
    ]
  },
  {
    slug: "reply-to-teacher-appreciation", title: "Reply to a Teacher’s Appreciation", description: "Polite responses to praise or encouragement from a teacher.",
    category: "Education", categorySlug: "education", keywords: ["teacher appreciation", "student", "praise"],
    variants: [
      { label: "Respectful", text: "Thank you for your encouraging words. I appreciate your guidance and will continue working hard." },
      { label: "Warm", text: "Thank you so much. Your support and teaching have helped me improve, and I truly appreciate it." },
      { label: "Short", text: "Thank you. Your encouragement means a lot to me." },
    ]
  },
  {
    slug: "request-deadline-extension", title: "Request a Deadline Extension", description: "Clear, accountable messages asking for more time.",
    category: "Education", categorySlug: "education", keywords: ["deadline extension", "assignment", "professor"],
    variants: [
      { label: "Professional", text: "I am writing to request a short extension for [assignment]. Due to [brief reason], I may not be able to submit work of the expected quality by [date]. Would submission by [new date] be possible?" },
      { label: "Responsible", text: "I understand the deadline and take responsibility for planning my work. An unexpected situation has affected my progress, and I would be grateful for an extension until [date]." },
      { label: "Short", text: "Would it be possible to extend the deadline for [assignment] to [date]? I apologize for the inconvenience and appreciate your consideration." },
    ]
  },
  {
    slug: "reply-to-admission-offer", title: "Reply to a University Admission Offer", description: "Accept, request time, or ask questions about admission.",
    category: "Education", categorySlug: "education", keywords: ["admission offer", "university", "college"],
    variants: [
      { label: "Accept", text: "Thank you for offering me admission to [program]. I am delighted to accept and look forward to joining the university. Please let me know the next steps." },
      { label: "Review", text: "Thank you for the admission offer. I am honored and would like until [date] to review the information before confirming." },
      { label: "Question", text: "Thank you for the offer. Could you please clarify [scholarship/housing/deposit] before I submit my final decision?" },
    ]
  },
  {
    slug: "reply-to-linkedin-connection", title: "Reply to a LinkedIn Connection Message", description: "Professional replies that open a useful conversation.",
    category: "Social", categorySlug: "social", keywords: ["linkedin", "connection", "networking"],
    variants: [
      { label: "Professional", text: "Thank you for connecting. I look forward to following your work and staying in touch." },
      { label: "Conversation Starter", text: "Thanks for connecting. I noticed your work in [area] and would be interested to learn more about your experience." },
      { label: "After Event", text: "It was great meeting you at [event]. Thank you for connecting, and I hope we can continue the conversation." },
    ]
  },
  {
    slug: "reply-to-client-inquiry", title: "Reply to a New Client Inquiry", description: "Fast, confident replies that move a lead forward.",
    category: "Work", categorySlug: "work", keywords: ["client inquiry", "freelancer", "lead"],
    variants: [
      { label: "Professional", text: "Thank you for reaching out. I would be happy to learn more about your project. Could you share the scope, timeline, and expected deliverables so I can recommend the best next step?" },
      { label: "Available", text: "Thank you for your inquiry. I am currently available and would be glad to discuss your requirements. Would [date/time] suit you for a brief call?" },
      { label: "Need Details", text: "Thanks for contacting me. Please send any relevant examples, your target deadline, and budget range, and I will respond with an initial recommendation." },
    ]
  },
  {
    slug: "reply-to-proposal-rejection", title: "Reply After Your Proposal Is Rejected", description: "Professional replies that preserve future opportunities.",
    category: "Work", categorySlug: "work", keywords: ["proposal rejected", "client", "freelancer"],
    variants: [
      { label: "Professional", text: "Thank you for letting me know. Although I am disappointed, I appreciate the opportunity to submit a proposal and learn more about your needs. Please keep me in mind for future projects." },
      { label: "Feedback", text: "Thank you for the update. If possible, I would appreciate any brief feedback that could help me improve future proposals." },
      { label: "Warm", text: "Thank you for considering my proposal. I enjoyed learning about the project and hope we may have an opportunity to work together in the future." },
    ]
  },
  {
    slug: "reply-to-out-of-stock-customer", title: "Reply When an Item Is Out of Stock", description: "Helpful customer responses with alternatives and next steps.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["out of stock", "customer", "product"],
    variants: [
      { label: "Alternative", text: "I am sorry, but this item is currently out of stock. We expect it back by [date]. In the meantime, I can recommend [alternative] with similar features." },
      { label: "Notify", text: "This item is temporarily unavailable. I can add you to our notification list and contact you as soon as it returns." },
      { label: "Refund", text: "Unfortunately, the item is no longer available. We can issue a full refund or help you select a suitable alternative." },
    ]
  },
  {
    slug: "reply-to-password-reset-request", title: "Reply to a Password Reset Request", description: "Security-conscious support messages for account access.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["password reset", "account access", "support"],
    variants: [
      { label: "Instructions", text: "We have sent a password-reset link to the email associated with your account. The link will expire in [time]. Please check your spam folder if you do not see it." },
      { label: "Verify", text: "For security, we need to verify your account before resetting the password. Please confirm [approved verification detail]." },
      { label: "Resolved", text: "Your password has been reset successfully. You can now sign in using the new password. Please contact us if you experience any further difficulty." },
    ]
  },
  {
    slug: "reply-to-compliment", title: "How to Reply to a Compliment", description: "Confident and natural responses without awkwardness.",
    category: "Social", categorySlug: "social", keywords: ["compliment", "praise", "reply"],
    variants: [
      { label: "Simple", text: "Thank you, that is very kind of you to say." },
      { label: "Warm", text: "Thank you so much. I really appreciate that." },
      { label: "Confident", text: "Thank you. I worked hard on it, and I am glad it came across well." },
    ]
  },
  {
    slug: "reply-to-get-well-soon", title: "Reply to “Get Well Soon”", description: "Grateful responses to caring recovery wishes.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["get well soon", "recovery", "thanks"],
    variants: [
      { label: "Warm", text: "Thank you for your kind wishes. Your message truly lifted my spirits." },
      { label: "Short", text: "Thank you. I really appreciate you thinking of me." },
      { label: "Update", text: "Thank you for checking in. I am recovering well and hope to be back to normal soon." },
    ]
  },
  {
    slug: "reply-to-condolence-message", title: "Reply to a Condolence Message", description: "Simple, heartfelt ways to acknowledge sympathy.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["condolence", "sympathy", "loss"],
    variants: [
      { label: "Heartfelt", text: "Thank you for your kind words and support during this difficult time. It means more than I can express." },
      { label: "Short", text: "Thank you for your sympathy and for keeping us in your thoughts." },
      { label: "Personal", text: "Your message brought comfort to our family. Thank you for remembering [name] and supporting us." },
    ]
  },
  {
    slug: "reply-to-event-invitation-business", title: "Reply to a Business Event Invitation", description: "Professional RSVP replies for conferences and networking events.",
    category: "Invitations", categorySlug: "invitations", keywords: ["business event", "conference", "networking"],
    variants: [
      { label: "Accept", text: "Thank you for the invitation. I am pleased to confirm my attendance and look forward to the event." },
      { label: "Decline", text: "Thank you for considering me. Unfortunately, I am unable to attend, but I appreciate the invitation and hope the event is a success." },
      { label: "Delegate", text: "Thank you for the invitation. I am unavailable, but my colleague [name] would be interested in attending on behalf of our team." },
    ]
  },
  {
    slug: "reply-to-scholarship-rejection", title: "Reply to a Scholarship Rejection", description: "Respectful responses that request feedback or future consideration.",
    category: "Education", categorySlug: "education", keywords: ["scholarship rejection", "student", "university"],
    variants: [
      { label: "Gracious", text: "Thank you for informing me. Although I am disappointed, I appreciate the committee’s time and consideration." },
      { label: "Feedback", text: "Thank you for the update. If possible, I would be grateful for any feedback that could strengthen a future application." },
      { label: "Future", text: "I appreciate the opportunity to apply. Please let me know if I may be considered for any future funding opportunities." },
    ]
  },
  {
    slug: "reply-to-second-interview-invitation", title: "Reply to a Second Interview Invitation", description: "Confirm a second-round interview with confidence and enthusiasm.",
    category: "Work", categorySlug: "work", keywords: ["second interview", "interview invitation", "job"],
    variants: [
      { label: "Professional", text: "Thank you for inviting me to the second interview. I am pleased to confirm my availability on [date] at [time] and look forward to continuing our conversation." },
      { label: "Enthusiastic", text: "Thank you for the update. I am excited to move forward and happy to confirm the second interview for [date] at [time]." },
      { label: "Reschedule", text: "Thank you for the invitation. I am unavailable at the proposed time, but I can attend on [option 1] or [option 2]." },
    ]
  },
  {
    slug: "reply-after-job-rejection", title: "Reply After a Job Rejection", description: "Respond professionally, request feedback, and preserve future opportunities.",
    category: "Work", categorySlug: "work", keywords: ["job rejection", "interview feedback", "career"],
    variants: [
      { label: "Professional", text: "Thank you for letting me know. Although I am disappointed, I appreciate the opportunity to interview and learn more about the team." },
      { label: "Feedback", text: "Thank you for the update. If possible, I would appreciate any brief feedback that could help me improve in future interviews." },
      { label: "Stay Connected", text: "Thank you for your consideration. I remain interested in your organization and would be grateful if you kept me in mind for suitable future roles." },
    ]
  },
  {
    slug: "reply-to-promotion-announcement", title: "Reply to a Promotion Announcement", description: "Congratulate a colleague or manager on a promotion.",
    category: "Work", categorySlug: "work", keywords: ["promotion", "congratulations", "colleague"],
    variants: [
      { label: "Professional", text: "Congratulations on your well-deserved promotion. Your leadership and hard work have made a strong impact, and I wish you continued success in the new role." },
      { label: "Friendly", text: "Congratulations! This is fantastic news and very well deserved." },
      { label: "Team", text: "Congratulations on the promotion. I look forward to continuing to work with you in your new role." },
    ]
  },
  {
    slug: "reply-to-salary-negotiation", title: "Reply to a Salary Negotiation Email", description: "Negotiate compensation clearly while keeping the conversation positive.",
    category: "Work", categorySlug: "work", keywords: ["salary negotiation", "compensation", "job offer"],
    variants: [
      { label: "Confident", text: "Thank you for the offer. Based on my experience and the responsibilities of the role, I was hoping for a base salary closer to [amount]. Is there flexibility in the package?" },
      { label: "Collaborative", text: "I am very interested in the position and appreciate the offer. Could we discuss whether the compensation can be adjusted to better reflect [experience/market range]?" },
      { label: "Total Package", text: "Thank you for the offer. If the base salary is fixed, I would be glad to discuss other elements such as a signing bonus, additional leave, or a performance review after [period]." },
    ]
  },
  {
    slug: "reply-to-internship-offer", title: "Reply to an Internship Offer", description: "Accept, review, or clarify an internship offer professionally.",
    category: "Work", categorySlug: "work", keywords: ["internship offer", "student", "career"],
    variants: [
      { label: "Accept", text: "Thank you for offering me the internship position. I am delighted to accept and look forward to learning from the team. Please share the next steps." },
      { label: "Review", text: "Thank you for the offer. I am grateful for the opportunity and would like until [date] to review the details before confirming." },
      { label: "Clarify", text: "Thank you for the offer. Could you please clarify the expected schedule, start date, and whether the internship is paid?" },
    ]
  },
  {
    slug: "reply-to-reference-request", title: "Reply to a Reference Request", description: "Accept or decline a request to provide a professional reference.",
    category: "Work", categorySlug: "work", keywords: ["reference request", "recommendation", "work"],
    variants: [
      { label: "Accept", text: "I would be happy to provide a reference for you. Please send the role details, deadline, and any points you would like me to highlight." },
      { label: "Need Context", text: "I may be able to help. Could you share more about the position and the skills the employer is asking about?" },
      { label: "Decline", text: "Thank you for asking. I do not feel I have worked closely enough with you to provide the detailed reference you deserve, so it may be better to ask someone with more direct experience of your work." },
    ]
  },
  {
    slug: "reply-to-performance-review", title: "Reply to Performance Review Feedback", description: "Acknowledge positive or constructive performance feedback.",
    category: "Work", categorySlug: "work", keywords: ["performance review", "manager feedback", "work"],
    variants: [
      { label: "Positive", text: "Thank you for the thoughtful feedback. I appreciate the recognition and will continue building on these strengths." },
      { label: "Constructive", text: "Thank you for the clear feedback. I understand the areas I need to improve and will create a plan to address them." },
      { label: "Clarify", text: "Thank you for the review. Could we discuss specific examples and measurable expectations for the next review period?" },
    ]
  },
  {
    slug: "reply-to-team-welcome-message", title: "Reply to a Team Welcome Message", description: "Respond warmly when joining a new team.",
    category: "Work", categorySlug: "work", keywords: ["new team", "welcome message", "onboarding"],
    variants: [
      { label: "Professional", text: "Thank you for the warm welcome. I am excited to join the team and look forward to working with everyone." },
      { label: "Friendly", text: "Thank you all! I am really happy to be here and excited to get started." },
      { label: "Helpful", text: "Thank you for the welcome. I look forward to learning from the team and contributing wherever I can." },
    ]
  },
  {
    slug: "reply-to-resignation-acknowledgement", title: "Reply to a Resignation Acknowledgement", description: "Respond after your manager acknowledges your resignation.",
    category: "Work", categorySlug: "work", keywords: ["resignation", "notice period", "manager"],
    variants: [
      { label: "Professional", text: "Thank you for acknowledging my resignation. I am committed to supporting a smooth handover during my notice period." },
      { label: "Warm", text: "Thank you for your understanding and support. I have valued my time with the team and will do everything possible to ensure a smooth transition." },
      { label: "Confirm Details", text: "Thank you for confirming. Please let me know the priorities for the handover and any exit formalities I should complete." },
    ]
  },
  {
    slug: "reply-to-work-from-home-request", title: "Reply to a Work-From-Home Request", description: "Approve, decline, or clarify a remote-work request.",
    category: "Work", categorySlug: "work", keywords: ["work from home", "remote work", "manager"],
    variants: [
      { label: "Approve", text: "Your work-from-home request for [date] is approved. Please remain available during normal working hours and keep the team updated." },
      { label: "Need Details", text: "Thanks for the request. Before I confirm, please share how you plan to cover meetings and any tasks that require on-site access." },
      { label: "Decline", text: "I am unable to approve remote work on [date] because [brief reason]. Let us discuss another arrangement that may work." },
    ]
  },
  {
    slug: "reply-to-client-discount-request", title: "Reply to a Client Asking for a Discount", description: "Protect your value while responding constructively to discount requests.",
    category: "Work", categorySlug: "work", keywords: ["client discount", "pricing", "freelancer"],
    variants: [
      { label: "Hold Price", text: "Thank you for asking. The quoted price reflects the scope, time, and quality required, so I am unable to reduce it without adjusting the deliverables." },
      { label: "Offer Scope", text: "I can work within a lower budget by reducing the scope to [deliverables]. I would be happy to revise the proposal accordingly." },
      { label: "Small Discount", text: "I can offer a [percentage] discount if the project is confirmed by [date] and payment terms remain [terms]." },
    ]
  },
  {
    slug: "reply-to-scope-creep", title: "Reply to a Client About Scope Creep", description: "Address additional requests without damaging the client relationship.",
    category: "Work", categorySlug: "work", keywords: ["scope creep", "client project", "freelancer"],
    variants: [
      { label: "Professional", text: "The new request falls outside the agreed scope. I can add it through a change request with an updated fee and timeline." },
      { label: "Friendly", text: "I am happy to help with this addition. Since it was not included in the original scope, I will send a quick estimate for the extra work." },
      { label: "Boundary", text: "To keep the current deadline, we should either replace an existing deliverable or schedule this request as a second phase." },
    ]
  },
  {
    slug: "reply-to-deadline-extension-request", title: "Reply to a Deadline Extension Request", description: "Approve or manage a request for more time.",
    category: "Work", categorySlug: "work", keywords: ["deadline extension", "project", "work"],
    variants: [
      { label: "Approve", text: "The extension is approved. Please submit the completed work by [new date] and let me know immediately if any further issue arises." },
      { label: "Conditional", text: "I can approve an extension until [date], provided the priority section is delivered by [earlier date]." },
      { label: "Decline", text: "I understand the situation, but the deadline cannot be moved because of [dependency]. Please send what is complete and highlight any remaining risks." },
    ]
  },
  {
    slug: "reply-to-meeting-cancellation", title: "Reply to a Meeting Cancellation", description: "Acknowledge a cancelled meeting and reschedule efficiently.",
    category: "Work", categorySlug: "work", keywords: ["meeting cancelled", "reschedule", "calendar"],
    variants: [
      { label: "Professional", text: "Thank you for letting me know. I understand, and I am happy to reschedule. Please send a few alternative times that work for you." },
      { label: "Short", text: "No problem, thank you for the update. Let us find another suitable time." },
      { label: "Keep Moving", text: "Thanks for the notice. To keep things moving, feel free to send any decisions or questions by email before we reschedule." },
    ]
  },
  {
    slug: "reply-to-linkedin-connection-request", title: "Reply to a LinkedIn Connection Request", description: "Start a useful professional conversation after connecting.",
    category: "Social", categorySlug: "social", keywords: ["linkedin", "networking", "connection"],
    variants: [
      { label: "Professional", text: "Thank you for connecting. I am glad to expand my network and look forward to learning more about your work in [field]." },
      { label: "Shared Interest", text: "Thanks for connecting. I noticed we both work in [area], and I would be interested to hear about your experience." },
      { label: "Short", text: "Thanks for connecting. I look forward to staying in touch." },
    ]
  },
  {
    slug: "reply-to-linkedin-recruiter", title: "Reply to a Recruiter on LinkedIn", description: "Respond to recruiter outreach with interest or polite boundaries.",
    category: "Work", categorySlug: "work", keywords: ["linkedin recruiter", "job opportunity", "career"],
    variants: [
      { label: "Interested", text: "Thank you for reaching out. The opportunity sounds interesting. Please share the job description, location, salary range, and hiring timeline." },
      { label: "Not Now", text: "Thank you for considering me. I am not looking to move at the moment, but I would be happy to stay connected for future opportunities." },
      { label: "Refer Someone", text: "Thank you for reaching out. The role is not a fit for me, but I may know someone suitable. Please send the full details." },
    ]
  },
  {
    slug: "reply-to-customer-negative-review", title: "Reply to a Negative Customer Review", description: "Respond publicly with empathy and move the issue toward resolution.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["negative review", "customer service", "reputation"],
    variants: [
      { label: "Public Reply", text: "We are sorry to hear about your experience. This is not the standard we aim for. Please contact us at [contact] with your order details so we can investigate and help." },
      { label: "Empathetic", text: "Thank you for sharing your feedback. We understand your frustration and would appreciate the opportunity to make this right." },
      { label: "Resolved", text: "Thank you for speaking with us. We are glad we could resolve the issue and appreciate your patience throughout the process." },
    ]
  },
  {
    slug: "reply-to-delivery-delay", title: "Reply to a Customer About a Delivery Delay", description: "Explain delays clearly and give realistic next steps.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["delivery delay", "shipping", "customer"],
    variants: [
      { label: "Update", text: "We are sorry for the delay. Your order is currently expected to arrive by [date]. We will continue monitoring the shipment and update you if anything changes." },
      { label: "Investigating", text: "Thank you for your patience. We have contacted the carrier and are investigating the delay. We will provide another update within [time]." },
      { label: "Compensation", text: "We apologize for the delay. As a gesture of goodwill, we have added [credit/discount] to your account." },
    ]
  },
  {
    slug: "reply-to-damaged-item", title: "Reply to a Customer About a Damaged Item", description: "Handle damaged-item reports with clear replacement or refund options.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["damaged item", "replacement", "refund"],
    variants: [
      { label: "Replace", text: "I am sorry the item arrived damaged. Please send a photo of the damage and packaging, and we will arrange a replacement." },
      { label: "Refund", text: "We apologize for the condition of the item. Once we confirm the details, we can issue a full refund to your original payment method." },
      { label: "Choice", text: "I am sorry about this. We can offer either a replacement at no cost or a full refund. Please let us know which you prefer." },
    ]
  },
  {
    slug: "reply-to-wrong-item-delivered", title: "Reply When the Wrong Item Was Delivered", description: "Correct fulfillment mistakes quickly and professionally.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["wrong item", "delivery issue", "customer"],
    variants: [
      { label: "Apology", text: "We are sorry you received the wrong item. Please share a photo and your order number so we can correct this immediately." },
      { label: "Replacement", text: "We have arranged shipment of the correct item. We will also provide return instructions for the item received by mistake." },
      { label: "Keep Item", text: "We have sent the correct item, and there is no need to return the incorrect one. We apologize for the inconvenience." },
    ]
  },
  {
    slug: "reply-to-cancellation-request", title: "Reply to a Customer Cancellation Request", description: "Confirm, review, or explain limits on an order cancellation.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["cancel order", "customer request", "support"],
    variants: [
      { label: "Confirmed", text: "Your cancellation has been confirmed. Any eligible refund will be returned to your original payment method." },
      { label: "Too Late", text: "The order has already entered processing and can no longer be cancelled. You may return it after delivery under our return policy." },
      { label: "Need Details", text: "We can help with the cancellation. Please confirm your order number and the email used for purchase." },
    ]
  },
  {
    slug: "reply-to-subscription-cancellation", title: "Reply to a Subscription Cancellation", description: "Acknowledge cancellation while preserving trust and future business.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["subscription cancellation", "account", "customer"],
    variants: [
      { label: "Confirmed", text: "Your subscription has been cancelled and will not renew. You will retain access until [date]." },
      { label: "Save Offer", text: "I can cancel the subscription now. Before I do, would a lower plan or temporary pause better suit your needs?" },
      { label: "Feedback", text: "Your subscription is now cancelled. If you have a moment, we would appreciate knowing what led to your decision." },
    ]
  },
  {
    slug: "reply-to-billing-error", title: "Reply to a Customer About a Billing Error", description: "Acknowledge billing problems and explain the correction process.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["billing error", "charge", "refund"],
    variants: [
      { label: "Investigate", text: "Thank you for reporting the charge. We are reviewing the account and will update you within [time]." },
      { label: "Corrected", text: "We confirmed the billing error and issued a refund of [amount]. It may take [days] to appear on your statement." },
      { label: "Explain", text: "The charge relates to [service/order]. I have attached the billing details, but please let us know if anything remains unclear." },
    ]
  },
  {
    slug: "reply-to-account-locked", title: "Reply to an Account Locked Message", description: "Give secure and practical account-recovery instructions.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["account locked", "login", "support"],
    variants: [
      { label: "Instructions", text: "Your account was temporarily locked after multiple sign-in attempts. Please wait [time] or use the password-reset link to regain access." },
      { label: "Verify", text: "For security, we need to verify your identity before unlocking the account. Please provide [approved verification information]." },
      { label: "Resolved", text: "Your account has been unlocked. Please sign in again and update your password if prompted." },
    ]
  },
  {
    slug: "reply-to-feature-request", title: "Reply to a Customer Feature Request", description: "Acknowledge product ideas without making false promises.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["feature request", "product feedback", "support"],
    variants: [
      { label: "Acknowledge", text: "Thank you for the suggestion. We have shared it with our product team for consideration." },
      { label: "Roadmap", text: "This feature is on our roadmap, although we do not yet have a confirmed release date. We appreciate your patience." },
      { label: "Alternative", text: "We do not currently offer that feature, but you may be able to achieve a similar result using [alternative]." },
    ]
  },
  {
    slug: "reply-to-service-outage", title: "Reply to Customers During a Service Outage", description: "Communicate incidents calmly and transparently.",
    category: "Customer Service", categorySlug: "customer-service", keywords: ["service outage", "incident", "status"],
    variants: [
      { label: "Initial", text: "We are aware of an issue affecting [service]. Our team is investigating, and we will share another update within [time]." },
      { label: "Progress", text: "The team has identified the cause and is working on a fix. Some users may continue to experience [impact]." },
      { label: "Resolved", text: "The service has been restored. We are monitoring performance and apologize for the disruption." },
    ]
  },
  {
    slug: "reply-to-wedding-invitation", title: "Reply to a Wedding Invitation", description: "Accept or decline a wedding invitation warmly.",
    category: "Invitations", categorySlug: "invitations", keywords: ["wedding invitation", "rsvp", "social"],
    variants: [
      { label: "Accept", text: "Thank you so much for inviting us. We are delighted to celebrate with you and happily confirm our attendance." },
      { label: "Decline", text: "Thank you for the beautiful invitation. We are sorry we cannot attend, but we send our warmest wishes for a wonderful celebration." },
      { label: "Need Time", text: "Thank you for the invitation. We are checking our plans and will confirm by [date]." },
    ]
  },
  {
    slug: "reply-to-birthday-invitation", title: "Reply to a Birthday Invitation", description: "Friendly RSVP messages for birthday celebrations.",
    category: "Invitations", categorySlug: "invitations", keywords: ["birthday invitation", "rsvp", "party"],
    variants: [
      { label: "Accept", text: "Thank you for inviting me. I would love to come and celebrate with you." },
      { label: "Decline", text: "Thank you for the invitation. I am sorry I cannot make it, but I hope you have a fantastic birthday." },
      { label: "Maybe", text: "Thanks for inviting me. I am checking another commitment and will confirm by [date]." },
    ]
  },
  {
    slug: "reply-to-dinner-invitation", title: "Reply to a Dinner Invitation", description: "Accept, decline, or ask what to bring.",
    category: "Invitations", categorySlug: "invitations", keywords: ["dinner invitation", "rsvp", "social"],
    variants: [
      { label: "Accept", text: "Thank you for the invitation. I would be delighted to join you for dinner." },
      { label: "Ask", text: "Thank you, I would love to come. Is there anything I can bring?" },
      { label: "Decline", text: "Thank you for thinking of me. I am unable to join this time, but I hope we can meet soon." },
    ]
  },
  {
    slug: "reply-to-event-speaker-invitation", title: "Reply to an Invitation to Speak at an Event", description: "Accept, decline, or request details about a speaking invitation.",
    category: "Invitations", categorySlug: "invitations", keywords: ["speaker invitation", "conference", "event"],
    variants: [
      { label: "Interested", text: "Thank you for the invitation. I am interested in speaking and would appreciate details about the audience, topic, format, date, and honorarium." },
      { label: "Accept", text: "Thank you for inviting me. I am pleased to accept and look forward to contributing to the event." },
      { label: "Decline", text: "Thank you for considering me. Unfortunately, I am unavailable on the proposed date, but I appreciate the invitation." },
    ]
  },
  {
    slug: "reply-to-webinar-invitation", title: "Reply to a Webinar Invitation", description: "Professional responses for webinar attendance or participation.",
    category: "Invitations", categorySlug: "invitations", keywords: ["webinar invitation", "online event", "rsvp"],
    variants: [
      { label: "Attend", text: "Thank you for the invitation. I have registered and look forward to attending the webinar." },
      { label: "Speaker", text: "Thank you for inviting me to participate. Please share the proposed topic, duration, audience profile, and technical requirements." },
      { label: "Decline", text: "Thank you for the invitation. I am unable to attend, but I would appreciate access to the recording if available." },
    ]
  },
  {
    slug: "reply-to-teacher-thank-you", title: "Reply to a Teacher\u2019s Thank-You Message", description: "Warm and respectful responses for teachers and parents.",
    category: "Education", categorySlug: "education", keywords: ["teacher", "thank you", "school"],
    variants: [
      { label: "Parent", text: "Thank you for your message and for the care you show the students. We truly appreciate your support." },
      { label: "Student", text: "You are very welcome. Thank you for your guidance and encouragement." },
      { label: "Professional", text: "Thank you for the kind note. I appreciate our partnership in supporting [student name]." },
    ]
  },
  {
    slug: "reply-to-professor-feedback", title: "Reply to Professor Feedback", description: "Acknowledge academic feedback and show how you will use it.",
    category: "Education", categorySlug: "education", keywords: ["professor feedback", "assignment", "student"],
    variants: [
      { label: "Grateful", text: "Thank you for the detailed feedback. I appreciate the guidance and will use it to strengthen my next submission." },
      { label: "Clarify", text: "Thank you for the feedback. Could you please clarify your comment about [topic] so I can better understand how to improve?" },
      { label: "Revision", text: "Thank you for reviewing my work. I will revise the highlighted sections and submit the updated version by [date]." },
    ]
  },
  {
    slug: "reply-to-assignment-extension", title: "Reply to an Assignment Extension Decision", description: "Respond to an approved or declined academic extension.",
    category: "Education", categorySlug: "education", keywords: ["assignment extension", "student", "deadline"],
    variants: [
      { label: "Approved", text: "Thank you for approving the extension. I appreciate your understanding and will submit the assignment by [new date]." },
      { label: "Declined", text: "Thank you for considering my request. I understand the decision and will do my best to meet the original deadline." },
      { label: "Confirm", text: "Thank you for the extension. Could you please confirm the new deadline and whether any late penalty will apply?" },
    ]
  },
  {
    slug: "reply-to-admission-offer", title: "Reply to a University Admission Offer", description: "Accept, request time, or ask questions about admission.",
    category: "Education", categorySlug: "education", keywords: ["admission offer", "university", "student"],
    variants: [
      { label: "Accept", text: "Thank you for offering me admission to [program]. I am delighted to accept and look forward to joining the university." },
      { label: "Review", text: "Thank you for the offer. I am grateful for the opportunity and would like until [date] to complete my decision." },
      { label: "Questions", text: "Thank you for the admission offer. Could you please clarify the enrollment deadline, deposit, and scholarship options?" },
    ]
  },
  {
    slug: "reply-to-waitlist-notification", title: "Reply to a University Waitlist Notification", description: "Stay interested and provide relevant updates after being waitlisted.",
    category: "Education", categorySlug: "education", keywords: ["waitlist", "university admission", "student"],
    variants: [
      { label: "Interest", text: "Thank you for the update. I remain very interested in [program] and would be pleased to accept a place if one becomes available." },
      { label: "Update", text: "Thank you for keeping my application under consideration. Since applying, I have [brief relevant achievement], which I hope may be added to my file." },
      { label: "Withdraw", text: "Thank you for the notification. I have decided to pursue another option and would like to withdraw from the waitlist." },
    ]
  },
  {
    slug: "reply-to-grade-inquiry", title: "Reply to a Grade Inquiry", description: "Address a question about grades respectfully and clearly.",
    category: "Education", categorySlug: "education", keywords: ["grade inquiry", "teacher", "student"],
    variants: [
      { label: "Teacher", text: "Thank you for your message. The grade reflects [criteria]. I am happy to review the rubric with you during [office hours/time]." },
      { label: "Student", text: "Thank you for explaining the grade. I would appreciate a brief meeting to understand where I lost marks and how to improve." },
      { label: "Correction", text: "Thank you for bringing this to my attention. I reviewed the record and corrected the grade to [grade]." },
    ]
  },
  {
    slug: "reply-to-thank-you-for-gift", title: "Reply to \u201cThank You for the Gift\u201d", description: "Warm responses when someone appreciates your gift.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["gift", "thank you", "social"],
    variants: [
      { label: "Warm", text: "You are very welcome. I am so glad you liked it." },
      { label: "Personal", text: "It was my pleasure. I saw it and immediately thought of you." },
      { label: "Short", text: "You are welcome! I am happy you enjoyed it." },
    ]
  },
  {
    slug: "reply-to-thank-you-for-help", title: "Reply to \u201cThank You for Your Help\u201d", description: "Professional and friendly ways to acknowledge appreciation.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["thanks for help", "appreciation", "reply"],
    variants: [
      { label: "Professional", text: "You are very welcome. I am glad I could help." },
      { label: "Friendly", text: "Anytime! I am happy we got it sorted out." },
      { label: "Team", text: "You are welcome. I appreciate everyone\u2019s cooperation in getting this completed." },
    ]
  },
  {
    slug: "reply-to-customer-thank-you", title: "Reply to a Customer Thank-You Message", description: "Turn customer appreciation into a stronger relationship.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["customer thank you", "business", "support"],
    variants: [
      { label: "Professional", text: "Thank you for your kind message. We appreciate your business and are glad we could help." },
      { label: "Warm", text: "It was our pleasure. Thank you for choosing us, and please reach out whenever you need support." },
      { label: "Review", text: "Thank you for the feedback. We are delighted you had a positive experience. Your support means a great deal to our team." },
    ]
  },
  {
    slug: "reply-to-host-thank-you", title: "Reply to Someone Thanking You for Hosting", description: "Warm responses after hosting guests or an event.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["hosting", "thank you", "guests"],
    variants: [
      { label: "Warm", text: "You are very welcome. It was wonderful having you, and I am glad you enjoyed the evening." },
      { label: "Short", text: "Our pleasure. We loved having you over." },
      { label: "Future", text: "You are welcome. Let us do it again soon." },
    ]
  },
  {
    slug: "reply-to-mentor-appreciation", title: "Reply to Appreciation From a Mentee", description: "Encouraging responses that reinforce growth and confidence.",
    category: "Thank You", categorySlug: "thank-you", keywords: ["mentor", "appreciation", "mentee"],
    variants: [
      { label: "Encouraging", text: "Thank you for the kind words. It has been rewarding to see your progress, and you should be proud of the work you have done." },
      { label: "Professional", text: "I appreciate your message. I am glad the guidance was useful and look forward to seeing what you accomplish next." },
      { label: "Warm", text: "You are very welcome. Supporting your growth has been a genuine pleasure." },
    ]
  },
  {
    slug: "reply-to-good-morning-message", title: "Reply to a Good Morning Message", description: "Friendly, warm, and professional morning replies.",
    category: "Social", categorySlug: "social", keywords: ["good morning", "whatsapp", "message"],
    variants: [
      { label: "Friendly", text: "Good morning! I hope you have a wonderful day ahead." },
      { label: "Warm", text: "Good morning. Your message was a lovely way to start the day." },
      { label: "Professional", text: "Good morning, and thank you for your message. I hope your day is going well." },
    ]
  },
  {
    slug: "reply-to-how-are-you", title: "How to Reply to \u201cHow Are You?\u201d", description: "Natural answers for casual, professional, and difficult days.",
    category: "Social", categorySlug: "social", keywords: ["how are you", "conversation", "small talk"],
    variants: [
      { label: "Casual", text: "I am doing well, thanks! How about you?" },
      { label: "Professional", text: "I am well, thank you. I hope you are doing well too." },
      { label: "Honest", text: "I have had a challenging week, but I am taking things one step at a time. Thank you for asking." },
    ]
  },
  {
    slug: "reply-to-i-miss-you", title: "How to Reply to \u201cI Miss You\u201d", description: "Warm, neutral, or boundary-setting replies.",
    category: "Social", categorySlug: "social", keywords: ["i miss you", "relationship", "message"],
    variants: [
      { label: "Warm", text: "I miss you too. I hope we can see each other soon." },
      { label: "Friendly", text: "That is sweet of you to say. It has been a while!" },
      { label: "Boundary", text: "Thank you for being honest. I do not feel the same way, but I wish you well." },
    ]
  },
  {
    slug: "reply-to-long-time-no-see", title: "Reply to \u201cLong Time No See\u201d", description: "Restart a conversation naturally after time apart.",
    category: "Social", categorySlug: "social", keywords: ["long time no see", "reconnect", "friend"],
    variants: [
      { label: "Friendly", text: "It really has been a long time! How have you been?" },
      { label: "Warm", text: "So good to hear from you. I would love to catch up soon." },
      { label: "Busy", text: "Yes, it has been a while. Life has been busy, but I hope everything is going well with you." },
    ]
  },
  {
    slug: "reply-to-social-media-comment", title: "Reply to a Positive Social Media Comment", description: "Engaging responses for comments on posts and business pages.",
    category: "Social", categorySlug: "social", keywords: ["social media comment", "instagram", "facebook"],
    variants: [
      { label: "Friendly", text: "Thank you so much! I really appreciate your support." },
      { label: "Engaging", text: "Thank you! What part did you find most useful?" },
      { label: "Business", text: "Thank you for the kind feedback. We are glad you enjoyed it." },
    ]
  },
  {
    slug: "reply-to-unwanted-message", title: "Reply to an Unwanted Message", description: "Set a respectful but clear communication boundary.",
    category: "Social", categorySlug: "social", keywords: ["unwanted message", "boundary", "stop contacting"],
    variants: [
      { label: "Clear", text: "I am not comfortable continuing this conversation. Please do not contact me again." },
      { label: "Polite", text: "Thank you for reaching out, but I am not interested. I wish you well." },
      { label: "Professional", text: "This communication is not appropriate. Please keep any future messages limited to [work-related topic/channel]." },
    ]
  },
  {
    slug: "reply-to-late-response", title: "Reply After Responding Late", description: "Acknowledge a delayed reply without overexplaining.",
    category: "Social", categorySlug: "social", keywords: ["late reply", "sorry for delay", "message"],
    variants: [
      { label: "Professional", text: "Apologies for the delayed response, and thank you for your patience. Regarding your message, [answer]." },
      { label: "Friendly", text: "Sorry for the slow reply! It has been a busy few days. [Answer]." },
      { label: "No Apology", text: "Thank you for your patience. I have now reviewed your message and [answer/next step]." },
    ]
  },
  {
    slug: "reply-to-cancelled-plans", title: "Reply When Someone Cancels Plans", description: "Respond with understanding, disappointment, or a rescheduling option.",
    category: "Social", categorySlug: "social", keywords: ["cancelled plans", "friend", "reschedule"],
    variants: [
      { label: "Understanding", text: "No worries, I understand. Let us find another day that works." },
      { label: "Honest", text: "I understand things come up, although I am disappointed. Please let me know when you are ready to reschedule." },
      { label: "Short", text: "Thanks for letting me know. We can try again another time." },
    ]
  },
  {
    slug: "reply-to-voice-note", title: "Reply to a Voice Note", description: "Acknowledge a voice message when you can or cannot listen immediately.",
    category: "Social", categorySlug: "social", keywords: ["voice note", "whatsapp", "message"],
    variants: [
      { label: "Received", text: "Got it, thank you. I will listen and get back to you shortly." },
      { label: "Cannot Listen", text: "I am unable to listen right now. Could you send the main point in a text message?" },
      { label: "Reply", text: "Thanks for the voice note. I agree with [point], and I think the next step should be [action]." },
    ]
  },
  {
    slug: "reply-to-appointment-confirmation", title: "Reply to an Appointment Confirmation", description: "Confirm, reschedule, or cancel an appointment clearly.",
    category: "Invitations", categorySlug: "invitations", keywords: ["appointment confirmation", "schedule", "rsvp"],
    variants: [
      { label: "Confirm", text: "Thank you for the confirmation. I will attend on [date] at [time]." },
      { label: "Reschedule", text: "Thank you for the reminder. I need to reschedule. Do you have availability on [option 1] or [option 2]?" },
      { label: "Cancel", text: "Thank you for the confirmation. Unfortunately, I need to cancel the appointment. Please let me know if any cancellation policy applies." },
    ]
  },
  {
    slug: "reply-to-volunteer-invitation", title: "Reply to a Volunteer Invitation", description: "Accept or decline a request to volunteer.",
    category: "Invitations", categorySlug: "invitations", keywords: ["volunteer invitation", "community", "event"],
    variants: [
      { label: "Accept", text: "Thank you for inviting me to volunteer. I would be happy to help. Please share the schedule, responsibilities, and any preparation required." },
      { label: "Decline", text: "Thank you for considering me. I am unable to commit this time, but I appreciate the important work you are doing." },
      { label: "Limited", text: "I can help for [time period/task], although I am unable to commit to the full schedule." },
    ]
  },
  {
    slug: "reply-to-parent-teacher-meeting", title: "Reply to a Parent-Teacher Meeting Invitation", description: "Confirm or reschedule a school meeting.",
    category: "Education", categorySlug: "education", keywords: ["parent teacher meeting", "school", "invitation"],
    variants: [
      { label: "Confirm", text: "Thank you for the invitation. I confirm that I will attend the meeting on [date] at [time]." },
      { label: "Reschedule", text: "Thank you for arranging the meeting. I am unavailable at that time. Could we meet on [alternative]?" },
      { label: "Ask Agenda", text: "Thank you. Could you please share the main topics you would like to discuss so I can prepare?" },
    ]
  },
  {
    slug: "reply-to-course-enrollment-confirmation", title: "Reply to a Course Enrollment Confirmation", description: "Acknowledge course registration and ask practical questions.",
    category: "Education", categorySlug: "education", keywords: ["course enrollment", "student", "confirmation"],
    variants: [
      { label: "Confirm", text: "Thank you for confirming my enrollment. I look forward to starting the course on [date]." },
      { label: "Materials", text: "Thank you for the confirmation. Please let me know whether any books, software, or preparation are required before the first class." },
      { label: "Payment", text: "Thank you. Could you please confirm the remaining payment deadline and accepted payment methods?" },
    ]
  },
  {
    slug: "reply-to-group-project-message", title: "Reply to a Group Project Message", description: "Organize academic group work clearly and constructively.",
    category: "Education", categorySlug: "education", keywords: ["group project", "student", "team"],
    variants: [
      { label: "Organize", text: "Thanks for reaching out. I suggest we divide the project into [sections] and agree on an internal deadline of [date]." },
      { label: "Available", text: "I am available to meet on [options]. Please share which time works best for the group." },
      { label: "Concern", text: "I am concerned that we are behind schedule. Can everyone confirm their progress and any support needed by [time]?" },
    ]
  },
  {
    slug: "reply-to-sales-inquiry", title: "Reply to a Sales Inquiry", description: "Respond to a potential customer with clarity and momentum.",
    category: "Sales & Clients", categorySlug: "sales", keywords: ["sales inquiry", "lead", "customer", "pricing"],
    variants: [
      { label: "Professional", text: "Thank you for your interest in [product/service]. Based on what you shared, I believe [option] could be a strong fit. I would be happy to arrange a short call to understand your needs and recommend the best next step." },
      { label: "Short", text: "Thank you for reaching out. I would be glad to help. Could you share your main goal, timeline, and expected budget?" },
      { label: "Confident", text: "Thank you for your inquiry. We regularly help clients with [need], and I am confident we can support you. The next step is a brief discovery call at [time options]." },
    ]
  },
  {
    slug: "reply-to-client-requesting-discount", title: "Reply to a Client Requesting a Discount", description: "Protect your value while keeping the conversation positive.",
    category: "Sales & Clients", categorySlug: "sales", keywords: ["client discount", "pricing", "negotiation"],
    variants: [
      { label: "Hold Price", text: "Thank you for asking. Our pricing reflects the scope, expertise, and support included, so I am unable to reduce the fee. I would be happy to clarify the value included in the proposal." },
      { label: "Adjust Scope", text: "I may not be able to reduce the price for the current scope, but we can adjust the deliverables to fit your budget. I can prepare a streamlined option at [amount]." },
      { label: "Conditional", text: "We can offer a discount of [percentage] if the project is confirmed by [date] and payment is made according to [terms]." },
    ]
  },
  {
    slug: "reply-to-proposal-follow-up", title: "Follow Up After Sending a Proposal", description: "Professional follow-ups that invite a decision without sounding pushy.",
    category: "Sales & Clients", categorySlug: "sales", keywords: ["proposal follow up", "client", "sales"],
    variants: [
      { label: "Professional", text: "I wanted to follow up on the proposal I sent on [date]. Please let me know if you have any questions or would like to discuss adjustments before making a decision." },
      { label: "Value Focused", text: "I am following up on the proposal for [project]. The recommended approach is designed to help you achieve [outcome]. I would be happy to walk through the details together." },
      { label: "Closing", text: "I wanted to check whether you are ready to move forward with the proposal. If approved by [date], we can begin on [start date]." },
    ]
  },
  {
    slug: "reply-to-client-scope-creep", title: "Reply to Client Scope Creep", description: "Set boundaries when requests go beyond the agreed project scope.",
    category: "Sales & Clients", categorySlug: "sales", keywords: ["scope creep", "client boundaries", "project"],
    variants: [
      { label: "Professional", text: "I would be happy to help with this request. It falls outside the agreed scope, so I can provide a separate estimate and revised timeline for approval." },
      { label: "Collaborative", text: "This is a useful addition. To include it properly, we should update the scope, budget, and delivery date. I will send a change proposal for review." },
      { label: "Firm", text: "The current agreement covers [original scope]. The new request is additional work and cannot be included without a formal scope change." },
    ]
  },
  {
    slug: "reply-to-client-ending-contract", title: "Reply When a Client Ends a Contract", description: "Close a client relationship professionally and protect future goodwill.",
    category: "Sales & Clients", categorySlug: "sales", keywords: ["client contract", "termination", "offboarding"],
    variants: [
      { label: "Professional", text: "Thank you for letting me know. I appreciate the opportunity to have worked together. I will complete the agreed offboarding steps and send any remaining files by [date]." },
      { label: "Feedback", text: "Thank you for the update. I respect your decision and would appreciate any feedback that could help us improve. I will ensure a smooth handover." },
      { label: "Warm", text: "I am grateful for the work we completed together and wish you continued success. Please feel free to reach out if I can support you in the future." },
    ]
  },
  {
    slug: "reply-to-new-lead-on-linkedin", title: "Reply to a New Lead on LinkedIn", description: "Turn an inbound LinkedIn message into a useful sales conversation.",
    category: "Sales & Clients", categorySlug: "sales", keywords: ["linkedin lead", "sales message", "prospect"],
    variants: [
      { label: "Professional", text: "Thank you for reaching out. I would be interested to learn more about your goals with [topic]. Could you share your current situation and the result you want to achieve?" },
      { label: "Short", text: "Thanks for connecting. What is the main challenge you are hoping to solve right now?" },
      { label: "Call Invite", text: "Thank you for your message. This sounds relevant to our work. Would a 20-minute call on [option 1] or [option 2] be convenient?" },
    ]
  },
  {
    slug: "reply-to-friend-who-is-upset", title: "Reply to a Friend Who Is Upset", description: "Supportive replies that acknowledge feelings without making assumptions.",
    category: "Relationships", categorySlug: "relationships", keywords: ["friend upset", "support", "empathy"],
    variants: [
      { label: "Supportive", text: "I am sorry you are going through this. I am here to listen, and you do not have to explain everything at once." },
      { label: "Practical", text: "That sounds really difficult. Would it help more if I listened, helped you think through options, or simply stayed with you?" },
      { label: "Warm", text: "You matter to me, and I am here for you. Take the time you need, and message or call whenever you are ready." },
    ]
  },
  {
    slug: "reply-to-setting-boundaries", title: "How to Reply When Setting Boundaries", description: "Clear, respectful wording for protecting your time and wellbeing.",
    category: "Relationships", categorySlug: "relationships", keywords: ["boundaries", "respect", "difficult conversation"],
    variants: [
      { label: "Respectful", text: "I value our relationship, but I am not comfortable with [behavior/request]. I need us to handle this differently going forward." },
      { label: "Firm", text: "I am not available for this conversation when it becomes disrespectful. I am willing to continue when we can speak calmly." },
      { label: "Time Boundary", text: "I cannot commit to this right now. I need to protect my current priorities, so my answer is no." },
    ]
  },
  {
    slug: "reply-to-family-conflict", title: "Reply During a Family Conflict", description: "De-escalate tension while expressing your position honestly.",
    category: "Relationships", categorySlug: "relationships", keywords: ["family conflict", "argument", "calm reply"],
    variants: [
      { label: "Calm", text: "I care about our relationship and do not want this disagreement to become more hurtful. I would like us to pause and continue when we are both calmer." },
      { label: "Honest", text: "I understand that you see this differently. My decision is based on [reason], and I need it to be respected even if we disagree." },
      { label: "Reconcile", text: "I am sorry this has become tense. I want to understand your perspective and find a way forward that protects our relationship." },
    ]
  },
  {
    slug: "reply-to-someone-needing-space", title: "Reply When Someone Says They Need Space", description: "Respect requests for distance without creating pressure.",
    category: "Relationships", categorySlug: "relationships", keywords: ["need space", "relationship", "distance"],
    variants: [
      { label: "Respectful", text: "I understand. I will give you the space you asked for. Please reach out when you feel ready to talk." },
      { label: "Warm", text: "Thank you for being honest. I care about you and will respect your need for space. There is no pressure to reply immediately." },
      { label: "Clarify", text: "I will respect your request. To avoid misunderstandings, would you prefer no contact until you reach out, or a brief check-in after [time]?" },
    ]
  },
  {
    slug: "reply-to-unwanted-advice", title: "Reply to Unwanted Advice", description: "Respond politely or firmly when advice is not helpful.",
    category: "Relationships", categorySlug: "relationships", keywords: ["unwanted advice", "boundaries", "family"],
    variants: [
      { label: "Polite", text: "I know you mean well, and I appreciate your concern. Right now, I need support more than advice." },
      { label: "Direct", text: "Thank you, but I am not looking for advice on this decision. I have chosen the approach that feels right for me." },
      { label: "Warm", text: "I appreciate that you want to help. It would mean more to me if you could simply listen." },
    ]
  },
  {
    slug: "reply-to-friend-cancelling-repeatedly", title: "Reply to a Friend Who Keeps Cancelling", description: "Address repeated cancellations without unnecessary conflict.",
    category: "Relationships", categorySlug: "relationships", keywords: ["friend cancelling", "plans", "boundary"],
    variants: [
      { label: "Honest", text: "I understand that things come up, but repeated cancellations have been disappointing. I would prefer that we make plans only when you are confident you can attend." },
      { label: "Gentle", text: "I value spending time with you, although it has been difficult when plans change repeatedly. Let us choose a time that is genuinely realistic." },
      { label: "Firm", text: "I will leave the next plan with you. Reach out when you know you are available and ready to commit." },
    ]
  },
  {
    slug: "reply-to-hotel-booking-confirmation", title: "Reply to a Hotel Booking Confirmation", description: "Confirm details and request important information before arrival.",
    category: "Travel & Hospitality", categorySlug: "travel", keywords: ["hotel booking", "confirmation", "travel"],
    variants: [
      { label: "Confirm", text: "Thank you for confirming my reservation for [dates]. Please confirm the room type, total amount, and check-in time." },
      { label: "Special Request", text: "Thank you for the confirmation. Could you please note my request for [late arrival/quiet room/accessible room] and confirm whether it can be accommodated?" },
      { label: "Airport Transfer", text: "Thank you. Please share the available airport transfer options, prices, and booking instructions." },
    ]
  },
  {
    slug: "reply-to-flight-change", title: "Reply to an Airline About a Flight Change", description: "Request alternatives after a schedule change or cancellation.",
    category: "Travel & Hospitality", categorySlug: "travel", keywords: ["flight change", "airline", "rebooking"],
    variants: [
      { label: "Rebook", text: "I received notice that flight [number] has changed. Please rebook me on the closest available flight that arrives by [time/date]." },
      { label: "Refund", text: "The revised itinerary no longer meets my travel needs. Please confirm my eligibility for a full refund and the processing timeline." },
      { label: "Clarify", text: "Please confirm the new departure time, connection details, baggage status, and whether any action is required from me." },
    ]
  },
  {
    slug: "reply-to-airbnb-host", title: "Reply to an Airbnb Host", description: "Communicate clearly with a host before or during a stay.",
    category: "Travel & Hospitality", categorySlug: "travel", keywords: ["airbnb host", "booking", "travel"],
    variants: [
      { label: "Before Arrival", text: "Thank you for hosting us. We expect to arrive around [time]. Please share the check-in instructions and any important house information." },
      { label: "Issue", text: "I wanted to let you know about an issue with [problem]. Could you please advise how it can be resolved?" },
      { label: "Thank You", text: "Thank you for a comfortable stay. We appreciated [specific detail] and have completed the checkout instructions." },
    ]
  },
  {
    slug: "reply-to-guest-complaint", title: "Reply to a Guest Complaint", description: "Hospitality responses that acknowledge concerns and offer solutions.",
    category: "Travel & Hospitality", categorySlug: "travel", keywords: ["guest complaint", "hotel", "hospitality"],
    variants: [
      { label: "Empathetic", text: "I am sorry this affected your stay. Thank you for telling us. We are addressing the issue now and will update you within [timeframe]." },
      { label: "Solution", text: "I apologize for the inconvenience. We can offer [room change/repair/refund/credit] and would like to resolve this as quickly as possible." },
      { label: "Follow Up", text: "Thank you for your patience while we handled the issue. Please let us know whether the solution has fully resolved your concern." },
    ]
  },
  {
    slug: "reply-to-tour-booking", title: "Reply to a Tour Booking Confirmation", description: "Confirm a tour and clarify pickup, timing, and requirements.",
    category: "Travel & Hospitality", categorySlug: "travel", keywords: ["tour booking", "excursion", "confirmation"],
    variants: [
      { label: "Confirm", text: "Thank you for confirming the tour on [date]. Please confirm the meeting point, start time, expected duration, and what we should bring." },
      { label: "Pickup", text: "Could you please confirm whether hotel pickup is included and the expected pickup time?" },
      { label: "Change Guests", text: "I need to update the booking from [number] to [number] guests. Please confirm availability and any price difference." },
    ]
  },
  {
    slug: "reply-to-travel-refund-delay", title: "Reply About a Delayed Travel Refund", description: "Follow up on refunds from airlines, hotels, or booking platforms.",
    category: "Travel & Hospitality", categorySlug: "travel", keywords: ["travel refund", "airline refund", "hotel refund"],
    variants: [
      { label: "Professional", text: "I am following up on refund reference [number], approved on [date]. Please confirm the current status and expected completion date." },
      { label: "Firm", text: "The stated refund timeframe has passed. Please process the refund immediately or provide a clear written explanation and final payment date." },
      { label: "Escalate", text: "Please escalate this case to a supervisor and provide the escalation reference. I have attached the approval and previous correspondence." },
    ]
  },
  {
    slug: "reply-to-doctor-appointment-confirmation", title: "Reply to a Doctor Appointment Confirmation", description: "Confirm or adjust a medical appointment clearly.",
    category: "Healthcare", categorySlug: "healthcare", keywords: ["doctor appointment", "clinic", "confirmation"],
    variants: [
      { label: "Confirm", text: "Thank you for the confirmation. I will attend my appointment on [date] at [time]." },
      { label: "Reschedule", text: "I am unable to attend at the scheduled time. Please share the next available appointments with [doctor/department]." },
      { label: "Ask Preparation", text: "Please confirm whether I need to fast, bring test results, stop any medication, or complete forms before the appointment." },
    ]
  },
  {
    slug: "reply-to-clinic-requesting-information", title: "Reply to a Clinic Requesting Information", description: "Provide requested details while asking about secure submission.",
    category: "Healthcare", categorySlug: "healthcare", keywords: ["clinic information", "medical records", "patient"],
    variants: [
      { label: "Professional", text: "Thank you for your message. I can provide the requested information. Please confirm the secure method for submitting these documents." },
      { label: "Clarify", text: "Could you please specify which records and date range are required, and whether copies are acceptable?" },
      { label: "Privacy", text: "Before sending sensitive information, please confirm that this email address or portal is approved for secure medical communication." },
    ]
  },
  {
    slug: "reply-to-medical-test-results", title: "Reply After Receiving Medical Test Results", description: "Acknowledge results and ask clear follow-up questions.",
    category: "Healthcare", categorySlug: "healthcare", keywords: ["test results", "doctor", "follow up"],
    variants: [
      { label: "Acknowledge", text: "Thank you for sharing the results. Please let me know whether any follow-up appointment, treatment, or repeat testing is recommended." },
      { label: "Questions", text: "I have reviewed the results and would appreciate clarification about [specific result], what it may indicate, and the recommended next step." },
      { label: "Urgency", text: "Please confirm whether any result requires urgent attention and whom I should contact if symptoms change." },
    ]
  },
  {
    slug: "reply-to-pharmacy-delay", title: "Reply to a Pharmacy About a Prescription Delay", description: "Ask about availability, alternatives, and next steps.",
    category: "Healthcare", categorySlug: "healthcare", keywords: ["pharmacy", "prescription delay", "medication"],
    variants: [
      { label: "Status", text: "Could you please confirm the current status of prescription [reference] and when it is expected to be ready?" },
      { label: "Alternative", text: "If the medication is unavailable, please let me know whether another branch has stock or whether you can contact the prescriber about an alternative." },
      { label: "Urgent", text: "I am due to run out on [date]. Please advise the fastest safe option and whether I need to contact my doctor." },
    ]
  },
  {
    slug: "reply-to-patient-cancellation", title: "Reply to a Patient Cancelling an Appointment", description: "Professional responses for healthcare appointment cancellations.",
    category: "Healthcare", categorySlug: "healthcare", keywords: ["patient cancellation", "clinic", "appointment"],
    variants: [
      { label: "Confirmed", text: "Thank you for letting us know. Your appointment on [date] has been cancelled. Please contact us when you are ready to reschedule." },
      { label: "Reschedule", text: "We have cancelled the appointment. The next available times are [options]. Please let us know which one works best." },
      { label: "Policy", text: "Your appointment has been cancelled. Please note that [policy] may apply because the cancellation was received within [timeframe]." },
    ]
  },
  {
    slug: "reply-to-insurance-document-request", title: "Reply to a Health Insurance Document Request", description: "Respond to requests for medical or insurance documentation.",
    category: "Healthcare", categorySlug: "healthcare", keywords: ["insurance documents", "healthcare", "claim"],
    variants: [
      { label: "Provide", text: "Thank you for your message. I have attached the requested documents for claim [number]. Please confirm receipt and advise if anything else is required." },
      { label: "Clarify", text: "Please confirm exactly which document is missing, the required format, and the submission deadline." },
      { label: "Follow Up", text: "I submitted the requested documents on [date]. Please confirm the claim status and expected review timeline." },
    ]
  }];

export const replies: ReplyItem[] = [...baseReplies, ...scaleReplies];

export function getReply(slug: string) { return replies.find((item) => item.slug === slug); }
export function getCategory(slug: string) { return categories.find((item) => item.slug === slug); }