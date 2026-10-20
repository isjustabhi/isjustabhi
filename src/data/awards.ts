export const awards = [
  {
    id: "distinguished-scholar",
    title: "Distinguished Graduate Scholar, Spring 2026",
    org: "University of Arizona · College of Information Science",
    year: "2026",
    description:
      "Named on the College of Information Science Distinguished Graduate Scholars list for Spring 2026.",
    href: "https://infosci.arizona.edu/students-and-careers/distinguished-scholars",
    verified: true,
  },
  {
    id: "colab",
    title: "Co-Lab Award for Graduate Capstone",
    org: "University of Arizona iShowcase · Applied Research & Industry Impact",
    year: "Spring 2026",
    description:
      "Team award for Rural Health Kiosk / Dr. Dexter, an AI healthcare capstone using voice, text, and avatar interaction for rural access. Public evidence currently comes from LinkedIn and the GitHub profile; an official iShowcase winners page was not located.",
    href: "https://infosci.arizona.edu/ishowcase",
    verified: false,
    sourceNote: "Self-published LinkedIn announcement; official winner listing not found.",
  },
] as const;

export const certifications = [
  {
    id: "powerbi",
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    org: "Microsoft",
    href: "https://www.credly.com/badges/7d548279-64fd-4a90-80e8-f7c25cb9ef82/linked_in_profile",
    note: "LinkedIn lists issue date March 2023, expiry March 2024. Confirm whether the credential is currently active.",
  },
  {
    id: "google-data",
    title: "Google Data Analytics Certificate",
    org: "Google / Coursera",
    href: "https://www.credly.com/users/abhiramvarma",
    note: "Listed on the public GitHub profile and Credly user page; badge ID not independently copied here.",
  },
] as const;
