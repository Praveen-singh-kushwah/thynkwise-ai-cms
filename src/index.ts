import type { Core } from '@strapi/strapi';

const homePageData = {
  seo: {
    browser_title: 'ThynkWISE | Technology · Sales Consulting · AI Avatars · Cloud',
    meta_description:
      'ThynkWISE is a full-spectrum technology and consulting firm - Sales Consulting, AI Avatar as a Service, Partner-Enabled Digital Services, and Cloud & Hardware.',
    meta_keywords:
      'ThynkWISE, technology consulting India, sales consulting CRM, AI avatar enterprise, cloud managed services, Salesforce implementation, Apollo.io consulting, digital transformation, Pune technology company',
    canonical_url: 'https://www.thynkwise.ai/',
    og_title: 'ThynkWISE | Technology · Sales Consulting · AI · Cloud',
    og_description:
      'Full-spectrum technology and consulting - Sales Consulting, AI Avatar as a Service, Cloud & Hardware, and Partner-Enabled Digital Services.',
    twitter_title: 'ThynkWISE | Technology · Sales Consulting · AI · Cloud',
  },
  hero: {
    eyebrow_text: 'Technology · Consulting · AI · Cloud',
    title:
      'We Inspire<br><em>Sales Experts.</em><br>We Build Systems<br>That Deliver.',
    description:
      'ThynkWISE is a full-spectrum technology and consulting firm. CRM implementation, AI-powered digital humans, cloud infrastructure, and a vetted partner ecosystem - one partner, measurable outcomes.',
    primary_cta: {
      button_text: 'Talk to Us on WhatsApp ->',
      button_link: 'https://wa.me/919763008800',
      variant: 'whatsapp',
    },
    secondary_cta: {
      button_text: 'Explore Our Work',
      button_link: '#verticals',
      variant: 'secondary',
    },
    vertical_cards: [
      {
        order_label: '01',
        title: 'Sales Consulting',
        description: 'CRM · Automation · Fractional CSO · Revenue Systems',
        link_text: 'Explore ->',
        link_url: '/sales-consulting',
      },
      {
        order_label: '02',
        title: 'AI Avatar as a Service',
        description: 'Digital Humans · Arabic · English · 24/7 · Web · Kiosk',
        link_text: 'Explore ->',
        link_url: '/ai-avatar',
      },
      {
        order_label: '03',
        title: 'Partner-Enabled Digital',
        description: 'Web · Software · SEO/AEO via vetted specialist partners',
        link_text: 'Explore ->',
        link_url: '/partner-ecosystem',
      },
      {
        order_label: '04',
        title: 'Cloud & Hardware',
        description: 'AWS · Azure · GCP · ESDS · Managed Services · GPU',
        link_text: 'Explore ->',
        link_url: 'https://beta.thynkwise.ai',
      },
    ],
  },
  stats_band: {
    stats: [
      { metric_value: '50+', metric_label: 'Clients globally' },
      { metric_value: '5x', metric_label: 'Appointment growth' },
      { metric_value: '150%', metric_label: 'Brand awareness lift' },
      { metric_value: '4+', metric_label: 'Years delivering' },
      { metric_value: '7', metric_label: 'Countries served' },
      { metric_value: '100%', metric_label: 'Outcome focused' },
    ],
  },
  capabilities_section: {
    eyebrow_text: 'What we do',
    title: 'One partner. Four capabilities.',
    description:
      'Most technology firms do one thing adequately. ThynkWISE does four things exceptionally - and they compound. Better CRM data feeds better AI. Better AI drives better cloud ROI.',
    capability_cards: [
      {
        order_label: 'Vertical 01',
        accent_tone: 'blue',
        title: 'Sales Consulting',
        description:
          'CRM architecture, sales automation, team enablement, and embedded sales leadership. We build the system that makes your team close at a different level.',
        tags: [
          { label: 'Salesforce' },
          { label: 'Dynamics 365' },
          { label: 'Apollo.io' },
          { label: 'HubSpot' },
          { label: 'Fractional CSO' },
        ],
        result_label: 'Client result - Clarion Technologies',
        result_value: '2 appts/week to 1/day. 5x growth in 90 days via Apollo.io.',
        link_text: 'View Sales Consulting ->',
        link_url: '/sales-consulting',
      },
      {
        order_label: 'Vertical 02',
        accent_tone: 'orange',
        title: 'AI Avatar as a Service',
        description:
          'Hyper-realistic digital humans in Arabic, English, Hindi and more. Web, app, kiosk, WhatsApp, and video. 24/7. Zero downtime. No camera crew.',
        tags: [
          { label: 'Arabic AI' },
          { label: 'English' },
          { label: 'Hindi' },
          { label: 'Kiosk' },
          { label: 'WhatsApp' },
          { label: 'Enterprise' },
        ],
        result_label: 'Live deployment - AGFund',
        result_value:
          'Arabic + English AI guiding donors and applicants 24/7, zero staff intervention.',
        link_text: 'View AI Avatar Platform ->',
        link_url: '/ai-avatar',
      },
      {
        order_label: 'Vertical 03',
        accent_tone: 'purple',
        title: 'Partner-Enabled Digital Services',
        description:
          'We do not do everything - we know who does. Web development, custom software, and digital services delivered by vetted specialist partners end-to-end or white-label.',
        tags: [
          { label: 'Web Development' },
          { label: 'Custom Software' },
          { label: 'SEO / AEO' },
          { label: 'White-Label' },
          { label: 'Lucent Innovation' },
        ],
        result_label: 'Partner delivery - Barcode Gulf (UAE/KSA)',
        result_value: '4x website traffic in 12 months. SEO + GMB across 5 locations.',
        link_text: 'View Partner Ecosystem ->',
        link_url: '/partner-ecosystem',
      },
      {
        order_label: 'Vertical 04',
        accent_tone: 'green',
        title: 'Cloud & Hardware Services',
        description:
          'Authorised reseller and managed services partner for AWS, Azure, GCP, ESDS, Yotta, and Ingram Micro. Cloud migration, 24/7 NOC, FinOps, cybersecurity, datacenter hardware, and GPU cloud.',
        tags: [
          { label: 'AWS' },
          { label: 'Azure' },
          { label: 'GCP' },
          { label: 'ESDS' },
          { label: 'Yotta' },
          { label: 'Ingram Micro' },
        ],
        result_label: 'Platform performance',
        result_value: '28% average cloud cost reduction in 90 days. 99.9% uptime SLA.',
        link_text: 'View Cloud Services ->',
        link_url: 'https://beta.thynkwise.ai',
      },
    ],
  },
  partner_network_section: {
    eyebrow_text: 'Partner & supplier network',
    title: 'Best-in-class partners. Every vertical.',
    description: 'A curated partner and supplier network supporting every ThynkWISE capability.',
    partner_pills: [
      { label: 'AWS - Authorized Reseller' },
      { label: 'Microsoft Azure' },
      { label: 'Google Cloud' },
      { label: 'ESDS - Authorized Partner' },
      { label: 'Yotta Data Services' },
      { label: 'Ingram Micro' },
      { label: 'Salesforce via Nsquare' },
      { label: 'Microsoft D365 via Nsquare' },
      { label: 'Apollo.io' },
      { label: 'HubSpot' },
      { label: 'Trellus.ai' },
      { label: 'Lucent Innovation' },
      { label: 'V2S Tech' },
    ],
  },
  client_portfolio_section: {
    eyebrow_text: 'Client portfolio',
    title: 'Clients across India, USA, UK & Middle East.',
    description: 'Results with names attached - not anonymised metrics.',
    client_cards: [
      {
        category_label: 'Sales Consulting',
        client_name: 'Clarion Technologies',
        geography: 'India · Business Consulting',
        description:
          'Apollo.io implementation, sales system revamp, website content strategy. Replaced FreshSales + SalesIntel with a unified platform.',
        metric_value: '5x',
        metric_label: 'appointment growth in 90 days',
      },
      {
        category_label: 'Sales Consulting',
        client_name: 'Celebal Technologies',
        geography: 'India · Data & AI Consulting',
        description:
          'Apollo.io B2B sales implementation, demand generation tech stack, CRM workflow automation for a leading Data & AI consulting firm.',
        metric_value: 'OK',
        metric_label: 'Full demand gen stack delivered',
      },
      {
        category_label: 'Sales Consulting',
        client_name: 'BizTech Consulting',
        geography: 'India · USA · Saudi Arabia · IT Outsourcing',
        description:
          'Apollo.io CRM setup, scalable outreach foundation, and data-driven sales strategy for a fast-growing IT outsourcing consultancy.',
        metric_value: 'OK',
        metric_label: 'Outreach infrastructure live',
      },
      {
        category_label: 'Digital Marketing · Partner-Delivered',
        client_name: 'Barcode Gulf',
        geography: 'Middle East - UAE / KSA · Mobility Solutions',
        description:
          'SEO strategy, GMB optimisation across 5 locations, LinkedIn and Meta campaigns for the UAE and Saudi Arabia market.',
        metric_value: '4x',
        metric_label: 'website traffic in 12 months',
      },
      {
        category_label: 'Digital Marketing · Partner-Delivered',
        client_name: 'DataFortune',
        geography: 'India · USA · Technology Solutions',
        description:
          '360-degree digital marketing - SEO, Google Ads, content strategy, social. 2-year sustained partnership with compounding returns.',
        metric_value: '150%',
        metric_label: 'brand awareness + 40% lead growth',
      },
      {
        category_label: 'Web & Digital · Partner-Delivered',
        client_name: 'SCISPL',
        geography: 'India · Denmark · Product Engineering',
        description:
          'Website revamp, content strategy, social media management, and email marketing for a product engineering firm across India and Europe.',
        metric_value: '150%',
        metric_label: 'brand awareness lift',
      },
    ],
  },
  testimonials_section: {
    eyebrow_text: 'Client voice',
    title: 'What our clients say.',
    description: '',
    testimonial_cards: [
      {
        quote:
          'Working with the ThynkWISE team on our Apollo.io implementation has been a truly positive experience. Their deep understanding of the platform helped us unlock the full potential of Apollo for our inside sales and demand generation functions - from data structuring and workflow automation to sequence optimisation and reporting setup.',
        avatar_initials: 'SS',
        author_name: 'Sabarinathan Sampath',
        author_role: 'Deputy Vice President · Celebal Technologies',
      },
      {
        quote:
          'Partnering with ThynkWISE was a seamless experience. They did not just implement a tool - they helped us build a stronger foundation for scalable outreach and data-driven growth. ThynkWISE truly operates as an extension of our team, focused on long-term enablement and measurable impact.',
        avatar_initials: 'DS',
        author_name: 'Divyang Sonchhatra',
        author_role: 'Principal · BizTech Consulting & Solutions',
      },
    ],
  },
  faq_section: {
    eyebrow_text: 'Knowledge base',
    title: 'Frequently asked questions',
    description: '',
    faq_items: [
      {
        question: 'What does ThynkWISE do?',
        answer:
          'ThynkWISE is a full-spectrum technology and consulting firm - Sales Consulting, AI Avatar as a Service, Cloud & Hardware Services, and a Partner Ecosystem enabling web development and digital services via vetted specialists.',
        is_open_by_default: true,
      },
      {
        question: 'What is AI Avatar as a Service?',
        answer:
          'ThynkWISE deploys hyper-realistic digital humans in Arabic, English, Hindi and other languages across web, app, kiosk, WhatsApp, and video.',
        is_open_by_default: false,
      },
      {
        question: 'Does ThynkWISE implement Salesforce and Microsoft Dynamics 365?',
        answer:
          'Yes - through the Nsquare certified partnership. Salesforce and Microsoft Dynamics 365 implementations, migration, and support are part of the offering.',
        is_open_by_default: false,
      },
      {
        question: 'What results has ThynkWISE delivered for clients?',
        answer:
          '5x appointment growth for Clarion Technologies, 150% brand awareness for DataFortune and SCISPL, 4x website traffic for Barcode Gulf, and 28% average cloud cost reduction.',
        is_open_by_default: false,
      },
      {
        question: 'Where does ThynkWISE operate?',
        answer:
          'Headquartered in Pune, India, with client delivery across India, USA, UK, Canada, Australia, Netherlands, UAE, and Saudi Arabia.',
        is_open_by_default: false,
      },
    ],
  },
  final_cta_section: {
    title: 'Let us build something that matters.',
    description:
      'Sales system, AI avatar, digital infrastructure, or a partner referral - ThynkWISE delivers the full stack. One conversation. No obligation.',
    primary_cta: {
      button_text: 'WhatsApp: +91 97630 08800',
      button_link: 'https://wa.me/919763008800',
      variant: 'whatsapp',
    },
    secondary_cta: {
      button_text: 'azra@thynkwise.co.in',
      button_link: 'mailto:azra@thynkwise.co.in',
      variant: 'secondary',
    },
  },
};

const HOME_PAGE_SECTIONS = [
  'seo',
  'hero',
  'stats_band',
  'capabilities_section',
  'partner_network_section',
  'client_portfolio_section',
  'testimonials_section',
  'faq_section',
  'final_cta_section',
];

const costOptimizationPageData = {
  seo: {
    browser_title:
      'Cloud Cost Optimisation India | FinOps as a Service | Thynkwise',
    meta_description:
      'Reduce your AWS, Azure, or Google Cloud bill by 20-35% in 90 days. Thynkwise FinOps as a Service covers rightsizing, reserved capacity planning, idle resource cleanup, and ongoing cost governance.',
    meta_keywords:
      'cloud cost optimisation India, AWS cost optimisation India, Azure cost reduction India, FinOps India, cloud cost management India, cloud spend optimisation India, rightsizing cloud India, cloud cost savings India',
    canonical_url: 'https://www.thynkwise.ai/cost-optimization',
    og_title:
      'Cloud Cost Optimisation India | 20-35% Cloud Cost Reduction | Thynkwise',
    og_description:
      'Stop overpaying for cloud. Thynkwise FinOps identifies waste across AWS, Azure, and GCP, then turns it into measurable savings.',
    twitter_title: 'Cloud Cost Optimisation India | Thynkwise FinOps',
  },
  hero: {
    eyebrow_text: 'Cloud Cost Optimisation India',
    title:
      'Your cloud bill has a<br><span>Rs. 3-40 lakh</span> leak.<br>We find it in <em>7 days.</em>',
    description:
      'The average Indian company wastes 32% of its cloud spend - idle instances, over-provisioned VMs, missing Reserved Instances, and unused storage silently burning cash every month. Thynkwise FinOps finds it, fixes it, and targets 20-35% savings in 90 days.',
    primary_cta_text: 'Get Free 7-Day Cost Audit ->',
    primary_cta_link: '/get-assessment',
    secondary_cta_text: 'See How It Works',
    secondary_cta_link: '/book-demo',
    proof_stats: [
      {
        value: '32%',
        label: 'Average cloud waste in Indian enterprises',
        tone: 'green',
      },
      {
        value: '20%',
        label: 'Target minimum savings on managed FinOps plans',
        tone: 'green',
      },
      {
        value: '7 days',
        label: 'Free audit turnaround time',
        tone: 'orange',
      },
      {
        value: 'Rs. 0',
        label: 'Cost for initial cloud waste audit',
        tone: 'green',
      },
    ],
    waste_meter: {
      title: 'Your Cloud Spend - Waste Estimate',
      status_label: 'Live model',
      spend_label: 'Monthly cloud spend example',
      spend_value: 'Rs. 10,00,000',
      spend_subtext: 'AWS / Azure / GCP combined',
      waste_items: [
        {
          label: 'Idle and unused resources',
          value_label: '~12% - Rs. 1.2L/mo',
          bar_percentage: 38,
          tone: 'waste',
        },
        {
          label: 'Over-provisioned instances',
          value_label: '~9% - Rs. 90K/mo',
          bar_percentage: 28,
          tone: 'waste',
        },
        {
          label: 'Unoptimised storage and snapshots',
          value_label: '~6% - Rs. 60K/mo',
          bar_percentage: 19,
          tone: 'waste',
        },
        {
          label: 'Missing Reserved Instances',
          value_label: '~5% - Rs. 50K/mo',
          bar_percentage: 16,
          tone: 'waste',
        },
      ],
      saving_label: 'Estimated monthly recoverable waste',
      saving_context: 'At typical 32% for Rs. 10L/month',
      saving_value: 'Rs. 3,20,000',
      saving_subtext: 'Rs. 38.4L / year',
    },
  },
  answer_box: {
    badge_text: 'Quick answer',
    title: 'How much cloud cost can Thynkwise help reduce?',
    description:
      'Most mid-market cloud environments waste 20-35% of monthly spend through oversized compute, idle resources, old storage, weak tagging, and missing committed-use discounts. Thynkwise starts with a read-only billing audit, then gives you a prioritised action plan with estimated INR savings for every recommendation.',
    primary_cta_text: 'Get Free 7-Day Cost Audit ->',
    primary_cta_link: '/get-assessment',
    secondary_cta_text: 'Calculate My Savings',
    secondary_cta_link: '#calculator',
  },
  cost_leaks_section: {
    badge_text: 'The 4 Cost Leaks',
    title:
      'Where Indian companies are bleeding cloud cash - and why no one notices.',
    description:
      'Cloud billing is designed to be complex. These four categories account for most recoverable waste in Indian mid-market cloud environments.',
    cards: [
      {
        icon: 'money',
        percentage: '12%',
        title: 'Idle & Zombie Resources',
        description:
          'Stopped instances, unattached disks, forgotten dev clusters, old snapshots, and unused IPs continue charging month after month.',
        example: 'Example: Rs. 1.2L/month on Rs. 10L spend',
        tone: 'red',
      },
      {
        icon: 'box',
        percentage: '9%',
        title: 'Over-Provisioned Instances',
        description:
          'VMs and databases sized for peak load run oversized all month even when utilisation stays low.',
        example: 'Example: Rs. 90K/month on Rs. 10L spend',
        tone: 'yellow',
      },
      {
        icon: 'storage',
        percentage: '6%',
        title: 'Storage & Snapshot Bloat',
        description:
          'Old backups, expensive storage tiers, stale logs, and missing lifecycle policies quietly expand cloud bills.',
        example: 'Example: Rs. 60K/month on Rs. 10L spend',
        tone: 'blue',
      },
      {
        icon: 'ticket',
        percentage: '5%',
        title: 'No Committed Use Discounts',
        description:
          'Predictable workloads keep running on on-demand pricing because Reserved Instances, Savings Plans, or committed-use discounts were never modelled.',
        example: 'Example: Rs. 50K/month on Rs. 10L spend',
        tone: 'orange',
      },
    ],
    cta_text: 'Find My Waste ->',
    cta_link: '/get-assessment',
  },
  finops_process_section: {
    badge_text: 'The FinOps Process',
    title: 'From audit to savings in 90 days. No disruption. No downtime.',
    description:
      'Thynkwise FinOps runs alongside your existing operations - read-only access in week 1, recommendations in week 2, and approved optimisation from week 3 onward.',
    steps: [
      {
        step_number: '1',
        title: '7-Day Free Audit',
        description:
          'We analyse 90 days of cloud billing and usage data with read-only access only.',
        time_label: 'Week 1 - Free',
        tone: 'blue',
      },
      {
        step_number: '2',
        title: 'Savings Roadmap',
        description:
          'You receive a prioritised list of actions, INR savings estimates, and implementation effort.',
        time_label: 'Week 2 - Roadmap delivery',
        tone: 'orange',
      },
      {
        step_number: '3',
        title: 'Quick Win Execution',
        description:
          'Approved idle cleanup, storage lifecycle rules, and safe rightsizing changes go live.',
        time_label: 'Weeks 3-4 - Quick wins',
        tone: 'green',
      },
      {
        step_number: '4',
        title: 'Reserved Capacity & Ongoing',
        description:
          'Reserved Instances, Savings Plans, committed-use discounts, alerts, and governance are implemented.',
        time_label: 'Month 2-3 - Full savings achieved',
        tone: 'purple',
      },
    ],
  },
  savings_proof_section: {
    badge_text: 'Real Client Results',
    title: 'Actual savings delivered. Actual numbers.',
    description:
      'Representative Thynkwise FinOps outcomes, anonymised by sector. Every number is structured like a client billing report, not a vague projection.',
    rows: [
      {
        company: 'SaaS Platform - Bengaluru',
        company_detail: '180 employees',
        cloud_provider: 'AWS',
        before_cost: 'Rs. 12.4L',
        after_cost: 'Rs. 8.1L',
        monthly_saving: 'Rs. 4.3L',
        method: 'Rightsizing 48 instances, RI purchase, and idle dev environment cleanup',
        time_to_save: '61 days',
      },
      {
        company: 'NBFC - Mumbai',
        company_detail: 'Rs. 500Cr AUM',
        cloud_provider: 'Azure',
        before_cost: 'Rs. 8.8L',
        after_cost: 'Rs. 5.2L',
        monthly_saving: 'Rs. 3.6L',
        method: 'Azure Hybrid Benefit, Reserved VMs, and storage lifecycle rules',
        time_to_save: '74 days',
      },
      {
        company: 'E-Commerce D2C - Delhi',
        company_detail: 'Rs. 120Cr GMV',
        cloud_provider: 'AWS',
        before_cost: 'Rs. 22.0L',
        after_cost: 'Rs. 14.8L',
        monthly_saving: 'Rs. 7.2L',
        method: 'Savings Plans, auto-scaling policies, CloudFront, and S3 intelligent tiering',
        time_to_save: '88 days',
      },
      {
        company: 'Manufacturing ERP - Pune',
        company_detail: 'Rs. 800Cr revenue',
        cloud_provider: 'Azure',
        before_cost: 'Rs. 5.5L',
        after_cost: 'Rs. 3.8L',
        monthly_saving: 'Rs. 1.7L',
        method: 'VM rightsizing, Azure Reserved Instances, and dev/test pricing license',
        time_to_save: '45 days',
      },
      {
        company: 'AI/ML Startup - Bengaluru',
        company_detail: 'Series A - 40 people',
        cloud_provider: 'GCP',
        before_cost: 'Rs. 9.2L',
        after_cost: 'Rs. 6.1L',
        monthly_saving: 'Rs. 3.1L',
        method: 'Committed Use Discounts, preemptible VMs for training jobs, and storage archival',
        time_to_save: '52 days',
      },
    ],
    footnote:
      'Figures are representative of client billing report formats. Full case studies can be discussed with enterprise prospects.',
  },
  calculator_section: {
    badge_text: 'FinOps Calculator',
    title: 'How much are you wasting right now?',
    description:
      'Move the slider to estimate recoverable cloud waste. The frontend calculator computes the live values from these CMS settings.',
    spend_label: 'Monthly Cloud Spend (INR)',
    provider_label: 'Cloud Provider',
    min_spend: 100000,
    max_spend: 20000000,
    default_spend: 1000000,
    step_amount: 50000,
    provider_options: [
      { label: 'AWS (32% avg waste)', waste_percentage: 32 },
      { label: 'Azure (34% avg waste)', waste_percentage: 34 },
      { label: 'GCP (30% avg waste)', waste_percentage: 30 },
      { label: 'Multi-cloud (36% avg waste)', waste_percentage: 36 },
    ],
    result_items: [
      { value: 'Rs. 3.2L', label: 'Estimated monthly waste', tone: 'green' },
      { value: 'Rs. 38.4L', label: 'Estimated annual waste', tone: 'green' },
      { value: 'Rs. 3.2L', label: 'Achievable monthly saving', tone: 'orange' },
      { value: 'Rs. 29.4L', label: 'Net annual saving after fees', tone: 'green' },
    ],
    disclaimer:
      'Actual savings vary by workload type, current optimisation maturity, and approved implementation scope.',
    primary_cta_text: 'Get Exact Audit - Free ->',
    primary_cta_link: '/get-assessment',
    secondary_cta_text: 'Book a FinOps Discussion',
    secondary_cta_link: '/book-demo',
  },
  optimization_layers_section: {
    badge_text: 'What Thynkwise FinOps Covers',
    title: 'Every lever of cloud cost reduction - across AWS, Azure, and GCP.',
    description:
      'FinOps is not one action. It is a systematic programme across compute, storage, commitments, licensing, tagging, and governance.',
    cards: [
      {
        icon: 'analysis',
        title: 'Instance Rightsizing',
        description:
          'CPU, memory, network, and disk usage are compared against actual workload baselines before recommendations are made.',
        impact_label: '8-15% saving',
        tone: 'blue',
      },
      {
        icon: 'ticket',
        title: 'Reserved Instances & Savings Plans',
        description:
          'Predictable workloads are modelled across one-year and three-year commitment scenarios before finance approval.',
        impact_label: '5-12% saving',
        tone: 'orange',
      },
      {
        icon: 'delete',
        title: 'Idle Resource Cleanup',
        description:
          'Unused infrastructure is tagged, quarantined, and removed only after approval so no production dependency is broken.',
        impact_label: '5-10% saving',
        tone: 'red',
      },
      {
        icon: 'storage',
        title: 'Storage Optimisation',
        description:
          'Lifecycle policies, archival tiers, snapshot cleanup, and log retention rules reduce storage sprawl.',
        impact_label: '3-7% saving',
        tone: 'green',
      },
      {
        icon: 'windows',
        title: 'Azure Hybrid Benefit',
        description:
          'Eligible Microsoft licensing is mapped to Azure savings through Hybrid Benefit and reserved capacity planning.',
        impact_label: 'Rs. 1-4L absolute',
        tone: 'pink',
      },
      {
        icon: 'dashboard',
        title: 'Cost Attribution & Governance',
        description:
          'Tagging, budgets, alerts, anomaly detection, and monthly reviews prevent the same waste from returning.',
        impact_label: 'Prevents future waste',
        tone: 'purple',
      },
    ],
  },
  roi_timeline_section: {
    badge_text: 'ROI Timeline',
    title: 'The money arrives before the second invoice does.',
    description:
      'Unlike consulting engagements that deliver a report and disappear, Thynkwise FinOps delivers measurable cost reduction at every stage.',
    phases: [
      {
        time_label: 'Week 1-2',
        title: 'Audit & Quick Wins',
        items: [
          { text: 'Billing API analysis - 90 days usage' },
          { text: 'Idle resource identification' },
          { text: 'Immediate cleanup candidates' },
          { text: 'Written report delivered' },
        ],
        saving_label: 'Rs. 50K-2L immediate',
        tone: 'orange',
      },
      {
        time_label: 'Week 3-4',
        title: 'Rightsizing & Cleanup',
        items: [
          { text: 'Instance rightsizing approved list' },
          { text: 'Idle resource quarantine' },
          { text: 'Storage lifecycle rules deployed' },
          { text: 'Azure Hybrid Benefit activated' },
        ],
        saving_label: '10-15% reduction live',
        tone: 'yellow',
      },
      {
        time_label: 'Month 2',
        title: 'Reserved Capacity',
        items: [
          { text: 'RI modelling - one-year vs three-year scenarios' },
          { text: 'Savings Plans recommendations' },
          { text: 'GCP Committed Use Discounts' },
          { text: 'Finance sign-off on commitments' },
        ],
        saving_label: '+5-12% additional',
        tone: 'green',
      },
      {
        time_label: 'Month 3+',
        title: 'Governance & Ongoing',
        items: [
          { text: 'Cost tagging and allocation dashboards' },
          { text: 'Budget alerts and anomaly detection' },
          { text: 'Monthly FinOps review reports' },
          { text: 'Quarterly new opportunity scan' },
        ],
        saving_label: '20-35% total sustained',
        tone: 'blue',
      },
    ],
    guarantee_title: 'The guarantee in writing: targeted savings in 90 days.',
    guarantee_description:
      'Savings targets, assumptions, and action plans are documented before implementation starts.',
    cta_text: 'Start with Free Audit ->',
    cta_link: '/get-assessment',
  },
  guarantee_section: {
    badge_text: 'The Thynkwise FinOps Promise',
    title: '20-35% savings in 90 days.<br>With the action plan to prove it.',
    description:
      'Thynkwise turns cloud billing noise into a concrete cost reduction programme. We baseline your spend, identify every waste category, quantify the INR value, and help execute approved changes without risking application performance.',
    primary_cta_text: 'Start Free Audit ->',
    primary_cta_link: '/get-assessment',
    secondary_cta_text: 'Book a Demo',
    secondary_cta_link: '/book-demo',
  },
  testimonials_section: {
    badge_text: 'What CTOs Say',
    title: 'The ROI conversations that actually happened.',
    testimonials: [
      {
        rating_label: '5 stars',
        quote:
          "The free audit found Rs. 2.8L/month in idle resources we had not noticed in 14 months. That audit paid for a year of managed services.",
        avatar_initials: 'SM',
        author_name: 'Head of Engineering',
        author_role: 'D2C E-Commerce - Mumbai - AWS',
        tone: 'green',
      },
      {
        rating_label: '5 stars',
        quote:
          'We were on Azure without Azure Hybrid Benefit, paying for Windows Server licences we already owned. Thynkwise fixed the issue and gave budget back to the business.',
        avatar_initials: 'VP',
        author_name: 'VP Technology',
        author_role: 'Insurance Company - Chennai - Azure',
        tone: 'blue',
      },
      {
        rating_label: '5 stars',
        quote:
          'We thought our AWS bill was optimised because our DevOps team had looked at it. The audit found waste in Reserved Instance gaps and over-provisioned RDS instances.',
        avatar_initials: 'CTO',
        author_name: 'CTO',
        author_role: 'SaaS Platform - Bengaluru - AWS',
        tone: 'orange',
      },
    ],
  },
  trust_band: {
    stats: [
      {
        value: '32%',
        label: 'Average cloud waste in Indian mid-market',
        tone: 'green',
      },
      {
        value: '20%',
        label: 'Target minimum saving on managed FinOps plans',
        tone: 'green',
      },
      {
        value: '7 days',
        label: 'Free audit delivery turnaround',
        tone: 'orange',
      },
      {
        value: 'Rs. 0',
        label: 'Cost for initial audit',
        tone: 'green',
      },
      {
        value: 'Rs. 38L',
        label: 'Annual saving opportunity per Rs. 10L/month spend',
        tone: 'green',
      },
    ],
  },
  faq_section: {
    badge_text: 'FinOps FAQ',
    title: 'Questions from CTOs and Finance Heads before they start',
    faq_items: [
      {
        question: 'How much does the free cloud cost audit actually cover?',
        answer:
          'The free 7-day audit reviews your last 90 days of billing and usage data across compute, storage, databases, networking, and managed services. The output is a written report with prioritised savings opportunities, estimated INR savings, and implementation effort.',
      },
      {
        question: 'Does cloud cost optimisation affect application performance?',
        answer:
          'Done correctly, no. Rightsizing recommendations are validated against workload baselines such as CPU, memory, network I/O, and disk throughput. Cleanup follows an approval and quarantine process before deletion.',
      },
      {
        question: 'How does the savings target work?',
        answer:
          'We establish a baseline using recent cloud spend, then track monthly reduction from approved optimisation actions. Savings targets depend on current waste, workload profile, and how many recommendations are approved.',
      },
      {
        question:
          "We already have AWS Cost Explorer or Azure Cost Management. Isn't that enough?",
        answer:
          'Those tools show spend, but they do not operate your FinOps programme. Thynkwise adds analysis, prioritisation, implementation support, tagging governance, anomaly detection, and monthly review discipline.',
      },
      {
        question:
          'Can Thynkwise do FinOps for multi-cloud environments like AWS, Azure, and GCP?',
        answer:
          'Yes. Multi-cloud environments often have higher waste because cost ownership is split across teams and platforms. Thynkwise can consolidate the cost view and create provider-specific optimisation actions.',
      },
    ],
  },
  final_cta_section: {
    badge_text: 'Free - No Commitment - 7 Days',
    title:
      "Find out exactly what you're wasting.<br><span>Before the next billing cycle.</span>",
    description:
      'Share read-only billing access. Receive a written cloud cost audit in 7 business days - every waste item identified, every saving quantified in INR, and every action prioritised.',
    primary_cta_text: 'Get Free 7-Day Cost Audit ->',
    primary_cta_link: '/get-assessment',
    secondary_cta_text: 'Book a FinOps Discussion',
    secondary_cta_link: '/book-demo',
    trust_notes: [
      { text: '20-35% savings target on suitable environments' },
      { text: 'Read-only access only - no changes without approval' },
      { text: 'WhatsApp: +91 97630 08800', link: 'https://wa.me/919763008800' },
    ],
  },
};

const COST_OPTIMIZATION_PAGE_SECTIONS = [
  'seo',
  'hero',
  'answer_box',
  'cost_leaks_section',
  'finops_process_section',
  'savings_proof_section',
  'calculator_section',
  'optimization_layers_section',
  'roi_timeline_section',
  'guarantee_section',
  'testimonials_section',
  'trust_band',
  'faq_section',
  'final_cta_section',
];

export default {
  register() {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    async function seedSingleType(
      uid: 'api::home-page.home-page' | 'api::cost-optimization-page.cost-optimization-page',
      label: string,
      data: Record<string, unknown>,
      sections: string[],
    ) {
      const service = strapi.documents(uid);
      const existing = (await service.findFirst({
        status: 'draft',
      } as any)) as any;

      if (!existing) {
        await service.create({
          data: data as any,
          status: 'published',
        } as any);
        strapi.log.info(`Created ${label} content.`);
        return;
      }

      const missingSections: string[] = [];
      const patchData: Record<string, unknown> = {};

      for (const key of sections) {
        if (!existing[key]) {
          patchData[key] = data[key];
          missingSections.push(key);
        }
      }

      if (!missingSections.length) {
        strapi.log.info(`${label} content already exists.`);
        return;
      }

      await service.update({
        documentId: existing.documentId,
        data: patchData as any,
        status: 'published',
      } as any);

      strapi.log.info(`Filled missing ${label} sections: ${missingSections.join(', ')}`);
    }

    try {
      await seedSingleType(
        'api::home-page.home-page',
        'Home Page',
        homePageData as Record<string, unknown>,
        HOME_PAGE_SECTIONS,
      );
    } catch (error) {
      strapi.log.error(`Home Page bootstrap failed: ${error}`);
    }

    try {
      await seedSingleType(
        'api::cost-optimization-page.cost-optimization-page',
        'Cost Optimization Page',
        costOptimizationPageData as Record<string, unknown>,
        COST_OPTIMIZATION_PAGE_SECTIONS,
      );
    } catch (error) {
      strapi.log.error(`Cost Optimization Page bootstrap failed: ${error}`);
    }
  },
};

