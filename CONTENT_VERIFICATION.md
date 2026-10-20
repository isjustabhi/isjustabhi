# Content verification

This file separates verified facts from claims that still need Abhiram’s review. Nothing here is hidden from the portfolio; the live site prefers conservative language.

## Verified facts and sources

| Fact | Source |
| --- | --- |
| Full name Abhiram Varma Nandimandalam; GitHub `isjustabhi` | GitHub profile |
| Official title: Scientific Analyst, LSCH, faculty supervisor Dave Sbarra | [UA Psychology directory](https://psychology.arizona.edu/person/abhiram-nandimandalam), updated 07/14/26 |
| University email `abhiramn@arizona.edu` | Same directory |
| Professional email `abhivn.connect@gmail.com` | Public GitHub profile README |
| M.S. Data Science, University of Arizona | University directory; LinkedIn |
| NLP Graduate Certificate (NDP), 2025–2026 | LinkedIn |
| Spring 2026 Distinguished Graduate Scholar | [College of Information Science list](https://infosci.arizona.edu/students-and-careers/distinguished-scholars) |
| LLM-HyPZ third author, College of Information Science | IEEE ICDMW 2025, doi [10.1109/ICDMW69685.2025.00150](https://doi.org/10.1109/ICDMW69685.2025.00150); [arXiv:2509.00647](https://arxiv.org/abs/2509.00647) |
| Paper stats: 114,836 CVEs; 1,742 hardware CVEs; 99.5% on validation set; 411/1,026 MIHW CVEs | Same paper |
| Skin-disease paper, N. Abhiram Varma, MITS | IEEE IConSCEPT 2024, doi [10.1109/IConSCEPT61884.2024.10627847](https://doi.org/10.1109/IConSCEPT61884.2024.10627847) |
| Housing GA Aug 2025–May 2026 | LinkedIn; WayUp |
| Campus Health analyst May 2025–Aug 2025 | LinkedIn; WayUp |
| GRA Jan 2025–Aug 2025 | LinkedIn; WayUp |
| MeeBuddy Data Analyst Jan 2023–Aug 2024 | WayUp |
| EarlyEco backend contributor | GitHub `EarlyEco/be` contributors includes `isjustabhi` |
| Public repos and live demos | GitHub API, 39 public repositories as of audit |

## Self-reported metrics awaiting confirmation

These appear on the public GitHub profile biography and/or older portfolio copy. They are shown on the site with attribution, not as independently audited results.

- 250K+ records processed
- 15+ dashboards (Tableau Public bio says 50+ — conflict)
- 85%+ forecasting accuracy
- +28% RAG retrieval improvement (not a numbered claim in the LLM-HyPZ paper)
- 40% reduction in data errors
- 25% survey engagement increase
- 60% reduction in AI response wait times
- 2,000+ pilot queries for AI Student Care (README does not contain this)
- 54K+ students served
- GPA 4.0 (public, but not on the university directory page)
- Co-Lab Award for Graduate Capstone, iShowcase Spring 2026 (LinkedIn / GitHub; no official winners page found)
- AWS Cloud Practitioner and Tableau Author (older README; not independently confirmed in this pass)
- Microsoft Power BI credential listed as issued Mar 2023 / expired Mar 2024

## Missing assets

- No resume PDF in this repository (`public/resume/` is empty)
- No professional headshot committed; GitHub avatar can be added later
- Rural Health Kiosk has no public screenshots or repo
- DiaBuddy and Bio Scholar AI have Lovable demos only; no public source
- OSF page `https://osf.io/ydq57/` did not return usable bibliographic HTML in this audit

## Unverified or incomplete project links

| Project | Issue |
| --- | --- |
| Rural Health Kiosk / Dr. Dexter | No public GitHub repository |
| LLM-HyPZ application code | Paper only; no public implementation repo under `isjustabhi` |
| DiaBuddy AI | `https://dia-wise-ai.lovable.app` — confirm still live |
| Bio Scholar AI | `https://bio-cite-scribe.lovable.app` — confirm still live |
| MediBERTx | Mentioned on LinkedIn; **not** in the current public repo list |
| Image Classification CIFAR-10 | Linked from old portfolio; not in current public repos |
| NIT Puducherry “Machine Learning Researcher” | Present in old `experience.json`; absent from LinkedIn/WayUp; paper affiliation is MITS. **Not published as a job on the new site.** |

## Ambiguous professional titles

| Source | Title |
| --- | --- |
| UA Psychology directory | Scientific Analyst |
| LinkedIn headline | Data Scientist @ University of Arizona \| LSCH |
| LinkedIn role | Scientific Analyst - Data Science, College of Science, Jun 2026–present |
| Current portfolio JSON | Scientific Analyst: Data Science, Jul 2026 |
| WayUp | Housing GA still “present” (stale versus LinkedIn end date May 2026) |
| GRA affiliation | MITHRA Lab, College of Information Science. IEEE LLM-HyPZ lists College of Information Science as the author affiliation. “PRISM Lab” was removed as inaccurate. |

Site policy: official directory title plus a broader headline supported by the work.

## Publication details needing review

- Confirm whether LLM-HyPZ should be cited as ICDM Workshops (IEEE/Crossref) vs a full ICDM listing.
- Confirm OSF systematic mapping author position and whether it is a preprint, registered report, or repository-only record.
- Confirm IConSCEPT author display name “N. Abhiram Varma” vs professional name.
- Google Scholar citation counts move; do not hard-code “cited by 12” as a permanent figure (Scholar HTML showed 13 all-time during this audit, and the old site said 12).

## Security notes

- DataLoom and SleepLens use `VITE_OPENAI_API_KEY` (browser-exposed).
- DRIFT asks for an API key in the UI and keeps it in React state.
- Do not copy secrets from any repository into this portfolio.
- No GitHub token is used in frontend code.

## Healthcare disclaimers required

TriageLens, HealthMate, SleepLens, AI Student Care, Rural Health Kiosk, DiaBuddy, EarlyEco, and the skin-disease paper are nonclinical prototypes or research experiments.
