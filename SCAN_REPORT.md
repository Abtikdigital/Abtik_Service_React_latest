# Pages Folder Scan Report

## Total Files: 54 .tsx files

## Files with max-w-[1920px] already applied: 22 files
- About.tsx ✅
- AgrisureService.tsx ✅
- Angelinverstor.tsx ✅
- AnnualComplaince.tsx ✅
- Blog.tsx ✅
- BusinessLoanService.tsx ✅
- Career.tsx ✅
- CGTMSEService.tsx ✅
- CMEGPService.tsx ✅
- Contact.tsx ✅
- CopyRightService.tsx ✅ (just fixed)
- ExpandedBlog.tsx ✅
- Home.tsx ✅
- PageNotFound.tsx ✅
- PdfPreview.tsx ✅
- PMEGPService.tsx ✅
- PMFMEService.tsx ✅
- PrivacyPolicy.tsx ✅
- ProjectFunding.tsx ✅
- RefundPolicy.tsx ✅
- SeedFundService.tsx ✅
- SmeService.tsx ✅
- Udaan.tsx ✅

## Files STILL NEEDING max-w-[1920px] fixes: 32 files

### Batch 1 (5 files):
1. DroplineOdService.tsx
2. EBook.tsx
3. FssaiLiecence.tsx
4. GrantsService.tsx
5. IsoCertificate.tsx

### Batch 2 (5 files):
6. LAPService.tsx
7. MakeInIndiaCertificate.tsx
8. MSMECertificate.tsx
9. MSMELoans.tsx
10. MudraLoan.tsx

### Batch 3 (5 files):
11. NAIFF_AIFFService.tsx
12. NBFC.tsx
13. OverdraftService.tsx
14. PartnershipFirm.tsx
15. PatentFilingService.tsx

### Batch 4 (5 files):
16. TaxExemptionCertificate.tsx
17. TdsCompliance.tsx
18. VCInvestor.tsx
19. ZedCertificate.tsx
20. StartupIndiaCertificate.tsx

### Batch 5 (5 files):
21. TermService.tsx
22. TradeLicence.tsx
23. TrademarkRegistrationAndFillingService.tsx
24. StandUpIndiaService.tsx
25. SoleProprietorship.tsx

### Batch 6 (5 files):
26. Section8Company.tsx
27. PrivateLimitedService.tsx
28. ProducerCompany.tsx
29. LlpService.tsx
30. GstRegistration_Filling.tsx

### Batch 7 (2 files):
31. CashCreditService.tsx
32. SmeService.tsx

## Pattern to Apply:

### For "Get In Touch" sections:
- Change: `className="flex flex-col md:flex-row gap-8 bg-[#f7f7f7] py-16 px-7 md:px-14"`
- To: `className="bg-[#f7f7f7] py-16"`
- Add wrapper: `<div className="w-full max-w-[1920px] mx-auto px-7 md:px-14">`
- Add inner flex: `<div className="flex flex-col md:flex-row gap-8 items-stretch">`
- Fix left card: Add `flex flex-col` and change inner div to `flex flex-col justify-evenly flex-grow`
- Fix right image: Change grid to `grid grid-cols-1 lg:grid-cols-2` and image wrapper to `aspect-[4/3]`

### For other sections:
- Change: `className="px-7 md:px-14 bg-[#f7f7f7] py-8"`
- To: `className="bg-[#f7f7f7] py-8"`
- Add wrapper: `<div className="w-full max-w-[1920px] mx-auto px-7 md:px-14">` before content
- Add closing `</div>` before closing `</motion.section>`

