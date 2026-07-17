export type ReplyVariant = { label: string; text: string };
export type ReplyItem = { slug: string; title: string; description: string; category: string; categorySlug: string; keywords: string[]; variants: ReplyVariant[]; };

export const categories = [
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
] as const;

export const replies: ReplyItem[] = [
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
];

export function getReply(slug: string) { return replies.find((item) => item.slug === slug); }
export function getCategory(slug: string) { return categories.find((item) => item.slug === slug); }