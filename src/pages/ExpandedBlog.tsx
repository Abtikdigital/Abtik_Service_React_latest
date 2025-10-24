import { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/ExpandedBlog/bgImg.svg";
import Image1 from "../assets/NewBlog/Budget1.jpg";
import Image2 from "../assets/NewBlog/Startup.jpg";
import Image3 from "../assets/NewBlog/Image2.jpg";
import Image4 from "../assets/NewBlog/BussinessWomen.jpg";
import Image5 from "../assets/NewBlog/BusinessRegistrationMadeSimple.jpg";
import Image6 from "../assets/NewBlog/Article2.jpg";
import Image7 from "../assets/NewBlog/TrademarkIpImage.jpg"
import Image8 from "../assets/NewBlog/Article8.jpeg"
import { useDispatch } from "react-redux";

interface BlogListItem {
  title: string;
  lists: string[];
  description: string;
}

interface BlogData {
  title: string;
  description: string;
  img: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  list: BlogListItem[];
}

const ExpandedBlog = () => {
  const dispatch = useDispatch();
  const handleOpenDialog = () => {
    dispatch({ type: "open" });
  };
  const blogsData: BlogData[] = [
    {
  title: "The MSME Certificate & License Roadmap: Your Gateway to Government Benefits & Business Growth",
  description: "Did you know that having the right certificates and licenses can unlock benefits worth lakhs of rupees for your MSME? Yet, 60% of Indian MSMEs operate without essential certifications, missing out on government schemes, tax benefits, easier loans, and market opportunities that could transform their business trajectory. If you're an MSME owner wondering which certificates matter for your business, this comprehensive guide will save you time, money, and unlock hidden opportunities you never knew existed.",
  img: Image8, // Replace with relevant certificate/license-related image
  slug: "the-msme-certificate-license-roadmap",
  date: "October 18, 2025",
  readTime: "14 min read",
  category: "Business Growth",
  list: [
    {
      title: "The Hidden Cost of Operating Without Proper Certifications",
      lists: [
        "Real Impact Story: Ramesh Kumar's manufacturing unit in Coimbatore was eligible for a ₹50 lakh government subsidy. However, his application was rejected because he lacked MSME registration and ISO certification.",
        "By the time he obtained these certificates, the scheme had closed — costing his business ₹50 lakhs in missed opportunities."
      ],
      description: "Operating without proper certifications can lead to missed financial opportunities, scheme disqualifications, and loss of market credibility."
    },
    {
      title: "Why Certificates & Licenses Are Your Business Growth Multipliers",
      lists: [
        "Government Scheme Access: Most benefits require specific certifications.",
        "Enhanced Credibility: Certificates build trust among customers and investors.",
        "Market Access: Many tenders and contracts mandate certifications.",
        "Financial Benefits: Lower interest rates, tax exemptions, and subsidies.",
        "Competitive Advantage: Certified businesses win more contracts.",
        "Risk Mitigation: Ensures legal compliance and protects your business."
      ],
      description: "Certifications are not just compliance tools — they are business growth multipliers offering financial, strategic, and reputational benefits."
    },
    {
      title: "The Essential Certificate Portfolio Every MSME Needs",
      lists: [
        "Foundation Level: Must-have registrations for all MSMEs.",
        "Growth Level: Specialized certifications for scaling businesses.",
        "Quality & Safety Level: Market access and compliance certifications.",
        "Operational Level: Business-specific licenses.",
        "Sector-Specific: Industry-targeted certifications for manufacturing, food, technology, and services."
      ],
      description: "Every MSME should have a combination of foundational, growth-oriented, and industry-specific certifications to ensure long-term success."
    },
    {
      title: "Foundation Level: Must-Have Registrations",
      lists: [
        "Startup India Recognition: Offers 3-year tax exemption, 80% patent fee reduction, and access to a ₹10,000 crore fund.",
        "Tax Exemption Certificate: Enables Section 80-IAC benefits, angel tax exemptions, and export incentives."
      ],
      description: "Foundational certifications establish your business legally and open doors to multiple government programs."
    },
    {
      title: "Growth Level: Specialized Certifications",
      lists: [
        "MSME Registration (Udyam): Provides access to loans, subsidies, and delayed payment protection.",
        "Make In India Certificate: Enhances credibility and provides preference in government tenders."
      ],
      description: "These certifications unlock financial benefits and recognition that boost your market presence and competitiveness."
    },
    {
      title: "Quality & Safety Level: Market Access Certifications",
      lists: [
        "FSSAI License: Mandatory for all food businesses; enables legal compliance and export eligibility.",
        "ZED Certificate (Zero Defect Zero Effect): Improves quality, efficiency, and environmental responsibility.",
        "ISO Certifications: Includes ISO 9001, 14001, 45001, and 27001 for quality, safety, environment, and data security."
      ],
      description: "Quality certifications enhance operational excellence, trust, and access to both domestic and global markets."
    },
    {
      title: "Operational Level: Business-Specific Licenses",
      lists: [
        "Trade License: Legal authorization to operate from commercial premises.",
        "Municipal and Pollution Board Clearances: Required for compliance and sustainability.",
        "Sector-Specific Licenses: Vary by industry — from factory licenses to STPI registrations."
      ],
      description: "These licenses ensure that your business operates within local, state, and national legal frameworks."
    },
    {
      title: "Sector-Specific Certifications",
      lists: [
        "Manufacturing: Factory License, Pollution Control Clearance, Boiler Registration.",
        "Food & Agriculture: Organic Certification, AGMARK, Spice Board Registration.",
        "Technology: STPI Registration, Data Protection, Cyber Security Certifications.",
        "Services: SEPC Registration, Professional Tax, and Service Tax Registration."
      ],
      description: "Sector-specific certifications ensure compliance and help tap into specialized markets and export opportunities."
    },
    {
      title: "The MSME Advantage: Special Benefits You Can Claim",
      lists: [
        "Free MSME registration through Udyam portal.",
        "Up to 75% reimbursement for ISO certifications.",
        "Fast-track processing for MSME applications.",
        "Subsidized consultancy and training programs.",
        "Cluster-based certification support for reduced costs."
      ],
      description: "Government incentives and financial assistance make it easier and more affordable for MSMEs to get certified."
    },
    {
      title: "The Certification Roadmap: Phased Approach",
      lists: [
        "Phase 1 (Month 1-2): MSME Registration, Trade License, Startup India recognition.",
        "Phase 2 (Month 3-6): FSSAI, Tax Exemption, Make In India certifications.",
        "Phase 3 (Month 6-12): ISO and ZED certifications for advanced growth."
      ],
      description: "A structured, phased certification plan helps MSMEs build credibility and access benefits progressively."
    },
    {
      title: "Success Story: The Transformation Power of Certifications",
      lists: [
        "'Our small electronics unit was struggling for contracts. After obtaining MSME, ISO 9001, and Make In India certifications, we started receiving government and corporate orders. Our turnover tripled in 18 months.' – Anjali Patel, Electronics Manufacturer, Pune"
      ],
      description: "Real-world success stories show that strategic certifications can directly lead to business growth and higher revenue."
    },
    {
      title: "Common Mistakes That Cost MSMEs Dearly",
      lists: [
        "Mistake #1: Applying randomly without strategy – Plan based on business goals.",
        "Mistake #2: DIY approach causing rejections – Seek professional help.",
        "Mistake #3: Ignoring renewals – Set reminders for timely updates.",
        "Mistake #4: Getting irrelevant certificates – Align with business benefits.",
        "Mistake #5: Not leveraging certificates – Use them in marketing and tenders."
      ],
      description: "Avoiding these mistakes ensures your certification investments yield tangible business benefits."
    },
    {
      title: "Red Flags: When You Need Immediate Action",
      lists: [
        "You're missing out on tenders or bank loans.",
        "Customers question your credentials.",
        "Competitors are winning contracts using certifications.",
        "You're expanding into new markets or exports."
      ],
      description: "If any of these apply to your business, it’s time to prioritize certification immediately."
    },
    {
      title: "The Professional Advantage: Why Expert Help Matters",
      lists: [
        "DIY Challenges: Complex procedures, risk of rejections, missed renewals.",
        "Professional Benefits: Expert documentation, strategic guidance, and compliance monitoring for maximum ROI."
      ],
      description: "Hiring experts streamlines the certification journey and ensures long-term compliance and success."
    },
    {
      title: "Your Certification Action Plan",
      lists: [
        "Step 1: Assessment (Week 1) – Identify relevant certifications and benefits.",
        "Step 2: Planning (Week 2) – Set timelines, budgets, and expert support.",
        "Step 3: Implementation (Month 1–12) – Acquire certifications in phases.",
        "Step 4: Optimization (Ongoing) – Maintain compliance and renew regularly."
      ],
      description: "A step-by-step approach ensures systematic certification progress and sustained business advantages."
    },
    {
      title: "Investment vs. Returns: The Numbers Game",
      lists: [
        "Foundation Level: ₹30,000 - ₹50,000 | Growth Level: ₹50,000 - ₹1,00,000 | Advanced Level: ₹1,00,000 - ₹5,00,000.",
        "Professional Support: ₹25,000 - ₹75,000.",
        "Potential Returns: ₹5,00,000 - ₹50,00,000+ from government schemes and opportunities.",
        "ROI: Every ₹1 invested in certifications can yield ₹10–₹50 in returns."
      ],
      description: "The ROI on certifications far exceeds the cost — making them one of the smartest investments for MSMEs."
    },
    {
      title: "The Bottom Line",
      lists: [
        "Certificates and licenses are strategic business assets, not just compliance documents.",
        "They unlock funding, contracts, credibility, and long-term growth.",
        "In today’s market, the real question is not whether you need certifications — but which ones you need first."
      ],
      description: "Strategic certifications can transform your MSME into a growth-ready, opportunity-rich enterprise."
    }
  ]
}
,
    {
      title: "Protecting Your Business Assets: The Ultimate Guide to Trademark & IP for Indian MSMEs",
      description: "Your brand name, logo, and innovative ideas are worth millions – but are they legally protected? Every day, Indian businesses lose crores of rupees due to trademark infringement and intellectual property theft. Yet, 80% of MSMEs operate without proper IP protection, unknowingly putting their most valuable assets at risk. If you've built a recognizable brand or developed innovative solutions, this article could save your business from costly legal battles and revenue loss.",
      img: Image7, // Using existing image - can be replaced with specific IP/trademark image
      slug: "Protecting-Your-Business-Assets-Trademark-IP-Guide-Indian-MSMEs",
      date: "October 15, 2025",
      readTime: "12 min read",
      category: "Legal",
      list: [
        {
          title: "The Harsh Reality: What Happens Without IP Protection",
          lists: [
            "Case Study: A Bangalore-based software startup spent 3 years building their brand 'TechSolve' only to discover a larger company had registered the same trademark. Result? Complete rebranding costs of ₹15 lakhs and loss of brand recognition.",
            "Another Example: A Mumbai manufacturer's unique product design was copied by competitors within months of launch. Without design protection, they couldn't take legal action and lost 40% market share."
          ],
          description: "Real-world examples show how unprotected intellectual property can lead to devastating financial losses and competitive disadvantages."
        },
        {
          title: "Why Trademark & IP Protection is Critical for MSMEs",
          lists: [
            "Brand Protection = Business Protection: Your trademark is your business identity. It's what customers recognize, trust, and choose repeatedly. Without legal protection, anyone can use your brand name, confuse customers, and steal your market share.",
            "Revenue Security: Protected intellectual property can become a revenue stream through licensing, franchising, or sale. Unprotected IP has zero commercial value.",
            "Investor Confidence: Investors and partners prefer businesses with protected IP. It shows professionalism and reduces investment risks.",
            "Competitive Advantage: Legal protection gives you exclusive rights to your innovations, keeping competitors at bay."
          ],
          description: "IP protection is not just about legal compliance – it's about securing your business future and maximizing your competitive edge."
        },
        {
          title: "The 3 Pillars of IP Protection Every MSME Needs",
          lists: [
            "Pillar 1: Trademark Registration - Business name, logos, taglines, product names, service marks",
            "Pillar 2: Copyright Protection - Original content, creative designs, software code, marketing materials",
            "Pillar 3: Patent Filing - New inventions, unique processes, technical solutions, product improvements"
          ],
          description: "These three pillars form the foundation of comprehensive IP protection for your business assets."
        },
        {
          title: "Pillar 1: Trademark Registration",
          lists: [
            "What Gets Protected: Business name and brand names, Logos and symbols, Taglines and slogans, Product names, Service marks",
            "Why It Matters: Exclusive usage rights for 10 years (renewable indefinitely), Legal protection against infringement, Pan-India coverage with single registration, Enhanced brand credibility",
            "The Process: Trademark search and availability check, Application filing with classification, Examination by trademark office, Publication in trademark journal, Registration certificate issuance",
            "Timeline: 12-18 months | Investment: ₹10,000 - ₹25,000 | ROI: Priceless brand protection"
          ],
          description: "Trademark registration is your first line of defense in protecting your brand identity and market position."
        },
        {
          title: "Pillar 2: Copyright Protection",
          lists: [
            "What Gets Protected: Original written content (websites, brochures, manuals), Creative designs and artwork, Software code and applications, Marketing materials, Training content",
            "Key Benefits: Automatic protection upon creation, Lifetime + 60 years protection period, Revenue generation through licensing, Legal remedy against copying",
            "When to Formalize: While copyright exists automatically, formal registration provides stronger legal standing in disputes."
          ],
          description: "Copyright protection ensures your creative works remain exclusively yours and can generate additional revenue streams."
        },
        {
          title: "Pillar 3: Patent Filing",
          lists: [
            "What Gets Protected: New inventions and innovations, Unique manufacturing processes, Technical solutions to problems, Product improvements and modifications",
            "Why Patents Matter: 20-year monopoly on your invention, Licensing opportunities for passive income, Market leadership position, Investor attraction for tech startups",
            "Types Available: Ordinary patents: Standard 20-year protection, Provisional patents: 12‑month priority window, Design Registration: Protection for ornamental designs"
          ],
          description: "Patents protect your innovations and can transform them into valuable business assets with licensing potential."
        },
        {
          title: "The MSME Advantage: Special Benefits You Can Claim",
          lists: [
            "Government Support for MSMEs: 80% fee reduction on patent filing, 50% discount on trademark registration, Expedited examination on request under Rule 24C, Dedicated MSME desks at IP offices",
            "Total Savings Example: Regular patent filing fee: ₹1,60,000, MSME discounted fee: ₹32,000, You save: ₹1,28,000 per patent!"
          ],
          description: "The Indian government provides significant financial incentives to encourage MSMEs to protect their intellectual property."
        },
        {
          title: "The Hidden Dangers: Common IP Mistakes MSMEs Make",
          lists: [
            "Mistake #1: 'We'll register later when we grow bigger' - Reality: By then, someone else might have registered your brand name.",
            "Mistake #2: 'Our business name registration is enough' - Reality: Business registration doesn't provide trademark protection.",
            "Mistake #3: 'We're too small for anyone to copy us' - Reality: Successful ideas get copied regardless of business size.",
            "Mistake #4: 'IP registration is too expensive' - Reality: IP theft costs much more than protection.",
            "Mistake #5: 'The process is too complicated' - Reality: Professional help makes it simple and systematic."
          ],
          description: "Avoiding these common mistakes can save your business from costly IP-related problems and missed opportunities."
        },
        {
          title: "The Smart Approach: Why Professional Help Makes Sense",
          lists: [
            "DIY Challenges: Complex legal procedures, Risk of application rejection, Missed deadlines and renewals, Inadequate protection coverage, Time-consuming research and filing",
            "Professional Benefits: Comprehensive IP audit of your business, Strategic protection planning based on business goals, Expert application preparation with higher success rates, Ongoing monitoring for infringement, Renewal management to maintain protection"
          ],
          description: "Professional IP services ensure comprehensive protection and maximize your chances of successful registration."
        },
        {
          title: "Success Story: How IP Protection Transformed a Business",
          lists: [
            "'We were a small textile printing company with a unique design technique. After getting our designs copyrighted and process patented, we started licensing our technique to other manufacturers. Today, licensing revenue contributes 30% to our total income.' - Priya Shah, Creative Textiles, Surat"
          ],
          description: "Real success stories demonstrate how proper IP protection can create new revenue streams and business opportunities."
        },
        {
          title: "Red Flags: When You MUST Take Immediate Action",
          lists: [
            "If any of these apply to you, get IP protection NOW: Competitors are copying your designs/products, You're planning to expand to new markets, Investors are showing interest in your business, You're launching a new product/service, Your business name/logo is becoming recognizable, You've developed unique processes or solutions"
          ],
          description: "Recognizing these warning signs can help you take timely action to protect your valuable business assets."
        },
        {
          title: "Your IP Protection Action Plan",
          lists: [
            "Phase 1: Assessment (Week 1) - Identify all protectable assets, Conduct trademark/patent searches, Assess potential infringement risks",
            "Phase 2: Priority Protection (Month 1-2) - File trademark applications for key brands, Register critical copyrights, File provisional patents for innovations",
            "Phase 3: Comprehensive Coverage (Month 3-6) - Complete patent applications, International trademark filing (if needed), Set up monitoring systems",
            "Phase 4: Maintenance (Ongoing) - Monitor for infringement, Manage renewals, Update protection as business grows"
          ],
          description: "A structured approach ensures comprehensive IP protection without overwhelming your business operations."
        },
        {
          title: "The Investment Reality: Costs vs. Benefits",
          lists: [
            "Typical Investment: Trademark registration: ₹10,000 - ₹25,000, Copyright registration: ₹5,000 - ₹10,000, Patent filing: ₹30,000 - ₹1,00,000, Professional consultation: ₹20,000 - ₹50,000",
            "Potential Savings from One Prevented Infringement: Legal fees: ₹5,00,000+, Revenue loss: ₹10,00,000+, Rebranding costs: ₹5,00,000+, Total risk: ₹20,00,000+",
            "ROI Analysis: Spending ₹1 lakh on IP protection can save ₹20 lakhs in potential losses."
          ],
          description: "The investment in IP protection is minimal compared to the potential losses from IP theft and infringement."
        },
        {
          title: "Take Action: Your IP Journey Starts Today",
          lists: [
            "Immediate Steps: Audit your IP assets – What needs protection?, Prioritize based on business risk – What's most valuable?, Get professional consultation – Don't go alone, Start with trademark registration – Protect your brand first, Plan for comprehensive coverage – Build systematic protection"
          ],
          description: "Taking immediate action is crucial to protect your business assets before it's too late."
        },
        {
          title: "Conclusion",
          lists: [
            "Your intellectual property is often your most valuable business asset. In today's competitive market, unprotected IP is like leaving your shop unlocked overnight.",
            "The question isn't whether you can afford IP protection – it's whether you can afford to operate without it.",
            "Ready to protect your business assets? Don't wait until it's too late. Every day without protection is a day of unnecessary risk."
          ],
          description: "IP protection is not optional – it's essential for business survival and growth in today's competitive marketplace."
        }
      ]
    },

    {
      title:
        "Unlocking Growth: A Complete Guide to Funding Solutions for Indian MSMEs in 2025",
      description:
        "Are you an MSME owner struggling to secure the right funding for your business growth? You're not alone. Over 63 million MSMEs in India contribute nearly 30% to our GDP, yet access to adequate funding remains their biggest challenge. The good news? There are more funding opportunities available today than ever before – you just need to know where to look and how to access them.",
      img: Image6, // add new image import or reuse an existing one
      slug: "Unlocking-Growth-Funding-Solutions-for-Indian-MSMEs-2025",
      date: "October 10, 2025",
      readTime: "9 min read",
      category: "Finance",
      list: [
        {
          title: "Why Funding Matters More Than Ever for MSMEs",
          lists: [
            "MSMEs need capital not just to survive, but to thrive",
            "Funding supports expansion, technology upgrades, and market entry",
            "Right funding choice enables long-term scalability",
          ],
          description:
            "In today's competitive landscape, MSMEs require strategic funding to accelerate growth, enhance competitiveness, and ensure sustainability.",
        },
        {
          title: "Seed Funding: Nurturing Your Business Idea",
          lists: [
            "Funding range: ₹5 lakhs – ₹2 crores",
            "Ideal for startups and early-stage ventures",
            "Sources: Angel investors, incubators, or government schemes",
            "Timeline: 3–6 months processing",
          ],
          description:
            "Perfect for startups and early-stage ventures seeking initial capital to transform ideas into reality.",
        },
        {
          title: "Government Subsidies: Your Gateway to Affordable Capital",
          lists: [
            "CGTMSE – Credit Guarantee Fund Trust for Micro and Small Enterprises",
            "PMEGP – Prime Minister's Employment Generation Programme",
            "TUFS – Technology Upgradation Fund Scheme",
          ],
          description:
            "The Indian government provides numerous subsidies to reduce capital costs and promote MSME competitiveness.",
        },
        {
          title: "Government Grants: Non-Repayable Funding",
          lists: [
            "Grant range: ₹1 lakh – ₹50 lakhs+",
            "Available across technology, agriculture, manufacturing, and women entrepreneurship sectors",
          ],
          description:
            "Unlike loans, grants don’t require repayment and support innovation, R&D, and capacity building.",
        },
        {
          title: "MSME Loans: Tailored Financial Products",
          lists: [
            "Working capital loans",
            "Term loans for machinery",
            "Export financing",
            "Invoice discounting",
          ],
          description:
            "Custom-designed loans with flexible repayment terms and minimal documentation, ideal for scaling operations.",
        },
        {
          title: "Agriculture Funding: Sector-Specific Solutions",
          lists: [
            "Crop loans, warehouse receipt financing, and value chain financing",
            "Seasonal repayment cycles & government interest subsidies",
            "Weather insurance coverage for risk management",
          ],
          description:
            "Focused on agri-businesses and food processing units with specialized funding benefits.",
        },
        {
          title: "Private Funding: Venture Capital & Private Equity",
          lists: [
            "Investment range: ₹50 lakhs – ₹100+ crores",
            "Best for scalable businesses with clear exit plans",
            "Includes mentorship and strategic partnerships",
          ],
          description:
            "Private funding empowers high-growth MSMEs with both financial support and strategic direction.",
        },
        {
          title: "The Hidden Challenge: Navigating the Funding Maze",
          lists: [
            "Complex application processes and documentation",
            "Multiple rejections due to incomplete submissions",
            "Lack of awareness about suitable funding options",
          ],
          description:
            "Many MSMEs struggle not due to lack of eligibility, but due to process complexity and poor guidance.",
        },
        {
          title: "The Solution: Professional Back-Office Support",
          lists: [
            "Identify right funding schemes based on business profile",
            "Assist in preparing complete documentation",
            "Navigate portals and ensure timely submissions",
            "Follow-up and compliance monitoring",
          ],
          description:
            "Professional service providers simplify the application journey, improving approval chances.",
        },
        {
          title: "Success Story: How Proper Support Made the Difference",
          lists: [
            "Textile unit in Gujarat received ₹25 lakhs subsidy in 4 months",
            "Consultants identified correct scheme and ensured smooth approval",
          ],
          description:
            "Expert guidance transformed a year-long struggle into a successful funding achievement.",
        },
        {
          title: "Take Action: Your Funding Journey Starts Now",
          lists: [
            "Step 1: Assess funding requirements and business stage",
            "Step 2: Research schemes relevant to your industry",
            "Step 3: Prepare business documents and financials",
            "Step 4: Seek professional help if needed",
            "Step 5: Apply strategically and track status",
          ],
          description:
            "Adopt a structured approach to turn funding into a predictable success, not guesswork.",
        },
        {
          title: "The Bottom Line",
          lists: [
            "Funding is the catalyst for MSME growth and innovation",
            "Professional support simplifies access to multiple opportunities",
            "Smart strategy converts funding from a challenge into an advantage",
          ],
          description:
            "With the right funding and execution, MSMEs can achieve sustainable, scalable success.",
        },
      ],
    },

    {
      title:
        "Business Registration Made Simple: Choose the Right Structure to Maximize Growth & Minimize Risk",
      description:
        "Your business structure decision will impact every aspect of your venture for years to come – yet 70% of entrepreneurs choose without proper guidance. The difference between choosing the right and wrong business structure can mean: ₹5-10 lakhs in tax savings annually, personal asset protection worth crores, easier access to funding and investors, and simplified expansion and exit strategies.",
      img: Image5, // Replace with a unique image if available
      slug: "Business-Registration-Made-Simple",
      date: "September 03, 2025",
      readTime: "10 min read",
      category: "Business",
      list: [
        {
          title: "The Hidden Cost of Wrong Business Structure Choice",
          lists: [
            "Priya’s consulting restructuring cost ₹3 lakhs & 6 months lost",
            "Rohit’s partnership dissolution lost ₹50 lakhs in value",
          ],
          description:
            "Most entrepreneurs focus on convenience instead of strategy – leading to costly mistakes in tax, funding, and compliance. Priya started her consulting business as a sole proprietorship for simplicity. Three years later, investors insisted on a company structure, costing her ₹3 lakhs and 6 months. Rohit’s partnership lacked proper documentation, leading to a ₹50 lakh loss when disputes arose.",
        },
        {
          title: "Why Business Structure Choice is Your Most Critical Decision",
          lists: [
            "Tax Implications: Different structures have vastly different tax treatments",
            "Liability Protection: Personal assets at risk vs. protected",
            "Funding Access: Some structures attract investors better",
            "Operational Flexibility: Ease of operations, compliance, and decision-making",
            "Exit Strategy: How easy is it to sell or transfer the business",
            "Credibility Factor: Market perception and customer trust",
          ],
          description:
            "Choosing the right business structure impacts tax savings, liability protection, funding opportunities, credibility, and long-term growth. This guide helps you choose the best incorporation for your business.",
        },
        {
          title: " Sole Proprietorship - The Individual Entrepreneur's Choice",
          lists: [
            "Simplest to start: Minimal paperwork and compliance",
            "Complete control: All decisions yours alone",
            "Tax efficiency: Business income taxed as personal income",
            "Low cost: Minimal registration and maintenance costs",
            "Quick setup: Can start immediately",
            "Limitations: Unlimited liability, funding challenges, limited credibility, succession issues, growth constraints",
            "Compliance: Shop & Establishment, Professional Tax, GST (if turnover >₹40 lakhs), Income Tax",
            "Investment: ₹5,000 - ₹15,000",
            "Timeline: 1-2 weeks",
          ],
          description:
            "Perfect for individual consultants, freelancers, small retail, or low-risk businesses testing ideas. Personal assets are at risk, and scaling is difficult.",
        },
        {
          title:
            " Limited Liability Partnership (LLP) - The Professional Partnership Structure",
          lists: [
            "Limited liability: Partners' personal assets protected",
            "Flexibility: Less compliance than companies",
            "Professional credibility: Better market perception",
            "Tax efficiency: No dividend distribution tax",
            "Perpetual succession: Continues beyond partner changes",
            "Limitations: Partner restrictions, funding challenges, transferability issues, more compliance than proprietorship",
            "Compliance: Annual ROC filing, Income Tax, LLP agreement, Designated Partner",
            "Investment: ₹15,000 - ₹25,000",
            "Timeline: 2-3 weeks",
          ],
          description:
            "Ideal for professional services, family businesses, or service-based businesses with moderate risk. Combines partnership flexibility with liability protection.",
        },
        {
          title: " Private Limited Company - The Growth-Oriented Structure",
          lists: [
            "Complete liability protection: Shareholders' assets fully protected",
            "Easy funding: Attractive to investors and lenders",
            "Credibility: Highest market perception and trust",
            "Transferability: Easy to sell shares and ownership",
            "Perpetual succession: Company continues indefinitely",
            "Tax benefits: Various deductions and exemptions",
            "Compliance: Board meetings, ROC filings, audits, director appointments",
            "Investment: ₹25,000 - ₹40,000",
            "Timeline: 3-4 weeks",
          ],
          description:
            "Best for businesses planning to raise funding, manufacturing, tech startups, or rapid scaling. Offers maximum protection and growth flexibility.",
        },
        {
          title: " Partnership Firm - The Traditional Collaboration Structure",
          lists: [
            "Simple setup: Easy to establish and operate",
            "Resource pooling: Combined expertise and capital",
            "Tax pass-through: Profits taxed at partner level",
            "Flexibility: Informal decision-making process",
            "Limitations: Unlimited liability, partner disputes, limited life, funding restrictions",
            "Investment: ₹8,000 - ₹15,000",
            "Timeline: 1-2 weeks",
          ],
          description:
            "Suitable for family businesses, professional practices, or local trading with clear partner roles. Partners face unlimited liability.",
        },
        {
          title: " Section 8 Company - The Social Impact Structure",
          lists: [
            "Tax exemptions: Multiple tax benefits",
            "Credibility: Government recognition and trust",
            "Grant access: Eligible for government and international grants",
            "Limited liability: Founders' personal assets protected",
            "Limitations: Profit restrictions, object limitations, compliance-intensive",
            "Investment: ₹20,000 - ₹30,000",
            "Timeline: 4-6 weeks",
          ],
          description:
            "Designed for NGOs, educational institutions, or charitable organizations with social objectives. Profit distribution is restricted.",
        },
        {
          title: " Producer Company - The Agricultural Cooperation Structure",
          lists: [
            "Agricultural focus: Designed for farming businesses",
            "Government support: Access to schemes and subsidies",
            "Cooperative structure: Democratic governance",
            "Limited liability: Member protection",
            "Requirements: Minimum 10 members, agricultural focus",
            "Investment: ₹25,000 - ₹35,000",
            "Timeline: 4-6 weeks",
          ],
          description:
            "Tailored for farmer producer organizations, agricultural cooperatives, or rural enterprises. Offers cooperative governance and liability protection.",
        },
        {
          title: "The Structure Selection Framework",
          lists: [
            "High Risk Businesses: Manufacturing, trading, technology → Private Limited Company",
            "Medium Risk Businesses: Professional services, consulting → LLP or Private Limited",
            "Low Risk Businesses: Freelancing, small retail → Sole Proprietorship or Partnership",
            "Planning to Raise Funding: Private Limited Company",
            "Organic Growth Focus: Any structure based on other factors",
            "Family Business: Partnership or Private Limited",
            "Tax Optimization: Proprietorship/Partnership (individual rates up to 30%), LLP (flat 30%), Private Limited (25-30% + dividend tax)",
          ],
          description:
            "Use this framework to align your business goals with the right structure, considering risk, growth, funding, tax, and compliance factors.",
        },
        {
          title: "The Registration Process: Step-by-Step Guide",
          lists: [
            "Phase 1: Pre-Registration - Check name availability, gather documents, prepare bank account, arrange address proof",
            "Phase 2: Core Registration - Submit PAN, Aadhaar, address proofs, photos, bank statements, rent agreement",
            "Phase 3: Post-Registration - Open bank account, GST registration, professional tax, shop & establishment license",
          ],
          description:
            "A streamlined process ensures smooth registration and compliance setup for your business.",
        },
        {
          title: "Common Registration Mistakes That Cost Dearly",
          lists: [
            "Choosing structure based on immediate convenience: ₹2-5 lakh restructuring costs",
            "Not considering future funding needs: Missed investment opportunities",
            "Ignoring compliance requirements: Penalties and legal issues",
            "Poor documentation and agreements: Partnership disputes and dissolution",
            "Not planning for succession and exit: Difficulty in business transfer/sale",
          ],
          description:
            "Avoid these mistakes to prevent costly setbacks and ensure long-term success.",
        },
        {
          title: "Success Stories: Right Structure, Right Results",
          lists: [
            "Tech Startup: Chose Private Limited, raised ₹2 crore in 18 months, valued at ₹10 crores",
            "Consulting Excellence: LLP structure, attracted high-value clients, scaled to 50+ employees",
            "Manufacturing Growth: Converted from partnership to Private Limited, raised ₹5 crore loan",
          ],
          description:
            "Real-world examples show how structure decisions drive growth and protect assets.",
        },
        {
          title: "The Professional Registration Advantage",
          lists: [
            "DIY Challenges: Complex procedures, risk of rejection, missed optimization, compliance confusion",
            "Professional Benefits: Strategic consultation, error-free filing, faster processing, ongoing support",
            "Investment: ₹10,000 - ₹25,000",
            "ROI: Time savings (20-30 hours), penalty avoidance (₹50,000+), strategic advantage",
          ],
          description:
            "Professional help ensures optimal structure choice and compliance, saving time and money.",
        },
        {
          title: "Your Registration Action Plan",
          lists: [
            "Step 1: Structure Decision Matrix (Week 1) - Evaluate risk, growth, funding, compliance, tax",
            "Step 2: Documentation & Planning (Week 2) - Gather documents, plan name, office, banking",
            "Step 3: Registration Process (Week 3-4) - File applications, complete verifications, obtain certificates",
            "Step 4: Post-Registration Setup (Week 5-6) - Statutory registrations, accounting, legal documentation",
          ],
          description:
            "Follow this action plan to build a strong business foundation efficiently.",
        },
        {
          title: "Investment Comparison: Structure-wise Costs",
          lists: [
            "Sole Proprietorship: ₹20,000-35,000 (Year 1)",
            "Partnership Firm: ₹30,000-45,000 (Year 1)",
            "LLP: ₹40,000-65,000 (Year 1)",
            "Private Limited: ₹75,000-1,15,000 (Year 1)",
            "ROI Perspective: Robust structures yield 5-10x returns through opportunities and protection",
          ],
          description:
            "Higher initial investments in robust structures offer significant long-term returns.",
        },
        {
          title: "Red Flags: When to Reconsider Your Current Structure",
          lists: [
            "Planning to raise external funding",
            "Personal assets at risk due to liabilities",
            "Losing business due to credibility issues",
            "Unsustainable tax burden",
            "Frequent partner disputes",
            "Need to bring in new partners/investors",
            "Succession planning required",
          ],
          description:
            "These signs indicate it’s time to restructure for better growth and protection.",
        },
        {
          title: "The Bottom Line: Your Structure is Your Foundation",
          lists: [
            "Think long-term: Choose for future goals, not just current state",
            "Plan for growth: Start with the right structure to avoid changes",
            "Get professional advice: Expert help outweighs DIY risks",
            "Document everything: Prevent disputes with proper agreements",
            "Stay compliant: Build credibility and maintain options",
          ],
          description:
            "Your business structure is the foundation for success. Choose wisely to unlock your venture’s full potential.",
        },
      ],
    },

    {
      title: "Budget 2025: A Strategic Shift for MSMEs",
      description: `India’s Union Budget 2025 has set a bold tone...`,
      img: Image1,
      slug: "Budget-2025-A-Strategic-Shift-for-MSMEs",
      date: "July 20, 2024",
      readTime: "5 min read",
      category: "Marketing",
      list: [
        {
          title: "Focused Financial Allocation: ₹23,100 Crore for MSMEs",
          lists: [
            "Long term vision for scalability and global competitiveness",
            "₹23,100 crore allocation for MSME support",
            "Structural approach rather than one time relief packages",
          ],
          description:
            "For years, MSMEs have demanded more than just recognition...",
        },
        {
          title: "Major Reforms Driving the Shift",
          lists: [
            "Expansion of the Credit Guarantee Fund Scheme",
            "Introduction of MSME Credit Cards",
            "Reduction of Import Duties on Essential Raw Materials",
          ],
          description: "Several key announcements in Budget 2025 highlight...",
        },
      ],
    },
    {
      title: "India’s Startups Get a Boost: Budget 2025 Unlocks New Pathways",
      description:
        "Startups are no longer fringe players they are now central...",
      img: Image2,
      slug: "Indias-Startups-Get-a-Boost-Budget-2025-Unlocks-New-Pathways",
      date: "July 18, 2024",
      readTime: "7 min read",
      category: "Technology",
      list: [
        {
          title: "Key Budget Highlights for Startups",
          lists: [
            "Extended tax benefits for eligible startups",
            "Simplified capital gains tax structure",
            "Launch of a ₹1,000 Cr Innovation Fund focused on AI, Biotech & Sustainability",
          ],
          description:
            "For years, MSMEs have demanded more than just recognition...",
        },
        {
          title: "Expanding Innovation Beyond Metro Cities",
          lists: [
            "More incubation programs in Tier 2 & Tier 3 cities",
            "Push for geographic diversity in startup growth",
            "Eased regulatory environment for new founders",
            "Greater access to institutional funding",
          ],
          description: "",
        },
      ],
    },
    {
      title: "Budget 2025 Simplifies the Journey for New Founders",
      description:
        "First time entrepreneurs are front and center in Budget 2025...",
      img: Image3,
      slug: "Budget-2025-Simplifies-the-Journey-for-New-Founders",
      date: "July 15, 2024",
      readTime: "6 min read",
      category: "Legal",
      list: [],
    },
    {
      title:
        "A Budget That Strengthens Local Industries and Women Led Enterprises",
      description:
        "Beyond big cities and large companies, Budget 2025 has acknowledged...",
      img: Image4,
      slug: "A-Budget-That-Strengthens-Local-Industries-and-Women-Led-Enterprises",
      date: "July 15, 2024",
      readTime: "6 min read",
      category: "Legal",
      list: [
        {
          title: "New initiatives for solar powered equipment",
          lists: [],
          description:
            "New initiatives for solar powered equipment, cold storage...",
        },
        {
          title: "By turning local industries into competitive,",
          lists: [],
          description:
            "By turning local industries into competitive, high quality suppliers...",
        },
      ],
    },
  ];

  const { slug } = useParams<{ slug: string }>();
  const [selectedBlogData, setSelectedBlogData] = useState<BlogData | null>(
    null
  );

  useEffect(() => {
    const data = blogsData?.find((blog) => blog?.slug === slug);
    setSelectedBlogData(data || null);
  }, [slug]);

  if (selectedBlogData === null) {
    return (
      <Mainlayout>
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center space-y-6 max-w-md px-6">
            <div className="w-20 h-20 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] flex items-center justify-center">
                <span className="text-2xl text-white font-bold">404</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Blog Not Found
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The blog post you&apos;re looking for doesn&apos;t exist or has
              been moved. Please check the URL or browse our other articles.
            </p>
            <Link
              to="/blogs"
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Back to All Blogs
            </Link>
          </div>
        </div>
      </Mainlayout>
    );
  }

  return (
    <Mainlayout>
      {/* Hero Section - Your Original Design */}
      <section
        className="flex justify-center items-center h-[70vh] sm:h-[80vh] lg:h-[85vh] xl:h-screen 
                     lg:justify-end lg:items-center bg-center bg-cover 
                     px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14
                     relative overflow-hidden"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability on tablets */}
        <div className="absolute inset-0 bg-black/20 lg:bg-transparent"></div>

        <div
          className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none lg:w-1/2 
                         space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8
                         text-center lg:text-left"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                          text-white tracking-wide
                          main-heading font-1"
          >
            Your One Stop{" "}
            <span className="text-[#3CA2E2] font-extrabold block sm:inline">
              Solution
            </span>{" "}
            for all Business Needs
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white
                         paragraph
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0 font-2"
          >
            Empowering Businesses through Comprehensive Solutions From Fund
            Management to Legal Compliance, We've Got You Covered at Abtik
            Startup Advisor Private Limited
          </p>
          <div className="pt-2 sm:pt-4">
            <button
              onClick={handleOpenDialog}
              className="custom-btn 
                               text-sm sm:text-base md:text-lg
                               px-6 sm:px-8 md:px-10 lg:px-12
                               py-3 sm:py-3.5 md:py-4
                                transition-transform duration-300
                               shadow-lg hover:shadow-xl"
            >
              Schedule a call
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Blog Section - Enhanced */}
      <section className="px-4 sm:px-7 md:px-14 py-6 md:py-12 bg-[#f7f7f7] min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
          {/* Left Part - Main Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            {/* Blog Image with Overlay Info */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg group">
              <img
                loading="lazy"
                src={selectedBlogData.img}
                className="w-full h-48 md:h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                alt={selectedBlogData.title}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-3 md:p-6">
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-white text-xs md:text-sm mb-3">
                  <span className="px-2 md:px-3 py-1 bg-[#3CA2E2] rounded-full font-medium">
                    {selectedBlogData.category || "Article"}
                  </span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {selectedBlogData.date || "July 23, 2024"}
                  </span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {selectedBlogData.readTime || "5 min read"}
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Content Card */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8">
              {/* Blog Title */}
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] bg-clip-text text-transparent mb-4 md:mb-6 leading-tight font-1">
                {selectedBlogData.title}
              </h2>

              {/* Blog Description */}
              <div className="prose max-w-none mb-6 md:mb-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed border-l-4 border-[#3CA2E2] pl-4 md:pl-6 bg-blue-50 p-3 md:p-4 rounded-r-lg font-2">
                  {selectedBlogData.description}
                </p>
              </div>

              {/* Blog Content Lists */}
              <div className="space-y-6 md:space-y-8">
                {selectedBlogData.list?.map((listItem, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border-l-4 border-[#3CA2E2]"
                  >
                    {listItem?.title && (
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 font-2">
                        <div className="min-w-8 min-h-8 md:min-w-10 md:min-h-10 bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                          {index + 1}
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                          {listItem.title}
                        </h3>
                      </div>
                    )}

                    {listItem?.lists && listItem.lists.length > 0 && (
                      <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6 ml-4 md:ml-6 font-3">
                        {listItem.lists.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3 md:gap-4 text-gray-700"
                          >
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-[#3CA2E2] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed text-sm md:text-base">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {listItem?.description && (
                      <div className="bg-white font-3 rounded-lg p-3 md:p-4 border-l-4 border-[#3CA2E2] ml-4 md:ml-6">
                        <p className="text-gray-600 leading-relaxed italic text-sm md:text-base">
                          {listItem.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Part - Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4 md:space-y-6">
              {/* Latest Blogs Card */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] p-4 md:p-6">
                  <h2 className="text-lg md:text-xl font-bold text-white font-2">
                    Latest Blogs
                  </h2>
                </div>
                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  {blogsData?.slice(0, 5).map((blog, index) => (
                    <Link
                      key={index}
                      to={blog.slug ? `/expandedBlog/${blog.slug}` : "/"}
                      className="group block hover:bg-gray-50 p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 border border-transparent hover:border-gray-200"
                    >
                      <div className="grid grid-cols-4 gap-2 md:gap-3">
                        <div className="overflow-hidden rounded-md md:rounded-lg">
                          <img
                            loading="lazy"
                            src={blog.img}
                            alt={blog.title}
                            className="w-full h-10 md:h-12 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="col-span-3 space-y-1 md:space-y-2">
                          <h3 className="font-semibold text-xs md:text-sm font-2 text-gray-800 line-clamp-2 group-hover:text-[#3CA2E2] transition-colors leading-tight">
                            {blog.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {blog.date || "Recent"}
                            </span>
                            <span className="text-xs font-3 text-[#3CA2E2] font-medium group-hover:translate-x-1 transition-transform">
                              Read →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Call to Action Card */}
              <div className="bg-gradient-to-br from-[#3CA2E2] via-[#2691d9] to-[#052EAA] rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-lg">
                <div className="text-center space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-[#2691D9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-lg font-bold font-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-xs md:text-sm text-blue-100 leading-relaxed font-3">
                    Schedule a consultation with our experts today and transform
                    your business.
                  </p>
                  <button className="custom-btn " onClick={handleOpenDialog}>
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Mainlayout>
  );
};

export default memo(ExpandedBlog);
