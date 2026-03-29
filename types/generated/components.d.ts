import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageByTheNumbers extends Struct.ComponentSchema {
  collectionName: 'components_about_page_by_the_numbers';
  info: {
    displayName: 'By the Numbers';
  };
  attributes: {
    card: Schema.Attribute.Component<'about-page.card', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface AboutPageCard extends Struct.ComponentSchema {
  collectionName: 'components_about_page_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    stat: Schema.Attribute.Component<'shared.stat', false>;
    sub_text: Schema.Attribute.String;
  };
}

export interface AboutPageLeft extends Struct.ComponentSchema {
  collectionName: 'components_about_page_lefts';
  info: {
    displayName: 'Left';
  };
  attributes: {
    button_Link: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.Text;
  };
}

export interface AboutPageOurMission extends Struct.ComponentSchema {
  collectionName: 'components_about_page_our_missions';
  info: {
    displayName: 'Our Mission';
  };
  attributes: {
    left: Schema.Attribute.Component<'about-page.left', false>;
    right: Schema.Attribute.Component<'about-page.right', false>;
  };
}

export interface AboutPageOurValue extends Struct.ComponentSchema {
  collectionName: 'components_about_page_our_values';
  info: {
    displayName: 'Our Value';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card-1', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface AboutPagePartnerCard extends Struct.ComponentSchema {
  collectionName: 'components_about_page_partner_cards';
  info: {
    displayName: 'partner_card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageRight extends Struct.ComponentSchema {
  collectionName: 'components_about_page_rights';
  info: {
    displayName: 'Right';
  };
  attributes: {
    quote: Schema.Attribute.Text;
    stat: Schema.Attribute.Component<'shared.stat', true>;
    text: Schema.Attribute.String;
  };
}

export interface AboutPageStatsBand extends Struct.ComponentSchema {
  collectionName: 'components_about_page_stats_bands';
  info: {
    displayName: 'stats_band';
  };
  attributes: {
    stat: Schema.Attribute.Component<'shared.stat', true>;
  };
}

export interface AboutPageTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_page_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
    skills: Schema.Attribute.Component<'shared.points', true>;
  };
}

export interface AboutPageTechnologyPartners extends Struct.ComponentSchema {
  collectionName: 'components_about_page_technology_partners';
  info: {
    displayName: 'Technology Partners';
  };
  attributes: {
    heading: Schema.Attribute.Component<'shared.heading', false>;
    partner_card: Schema.Attribute.Component<'about-page.partner-card', true>;
  };
}

export interface AboutPageTheTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_page_the_teams';
  info: {
    displayName: 'The Team';
  };
  attributes: {
    heading: Schema.Attribute.Component<'shared.heading', false>;
    team_card: Schema.Attribute.Component<'about-page.team', true>;
  };
}

export interface AboutPageWhereWeAre extends Struct.ComponentSchema {
  collectionName: 'components_about_page_where_we_ares';
  info: {
    displayName: 'Where We Are';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', true>;
    heading: Schema.Attribute.Component<'shared.heading', true>;
  };
}

export interface AboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
  };
}

export interface AwsPageAwsDirect extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_aws_directs';
  info: {
    displayName: 'AWS Direct';
  };
  attributes: {
    points: Schema.Attribute.Component<'aws-page.points', true>;
  };
}

export interface AwsPageAwsViaThynkwise extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_aws_via_thynkwises';
  info: {
    displayName: 'AWS via Thynkwise';
  };
  attributes: {
    points: Schema.Attribute.Component<'aws-page.points', true>;
  };
}

export interface AwsPageCard extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface AwsPageCard1 extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_card1s';
  info: {
    displayName: 'card1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    point: Schema.Attribute.String;
    sub_points: Schema.Attribute.Component<'shared.points', true>;
    title: Schema.Attribute.String;
  };
}

export interface AwsPageCard2 extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_card2s';
  info: {
    displayName: 'card2';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    message: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface AwsPageCertifiedExpertise extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_certified_expertises';
  info: {
    displayName: 'Certified Expertise';
  };
  attributes: {
    card: Schema.Attribute.Component<'aws-page.card', true>;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    sub_text: Schema.Attribute.Text;
  };
}

export interface AwsPageClientOutcomes extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_client_outcomes';
  info: {
    displayName: 'client_outcomes';
  };
  attributes: {
    card_2: Schema.Attribute.Component<'aws-page.card2', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface AwsPageComparison extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_comparisons';
  info: {
    displayName: 'Comparison';
  };
  attributes: {
    description: Schema.Attribute.Text;
    direct: Schema.Attribute.Component<'aws-page.aws-direct', false>;
    heading: Schema.Attribute.Text;
    via_thynkwise: Schema.Attribute.Component<
      'aws-page.aws-via-thynkwise',
      false
    >;
  };
}

export interface AwsPageHero extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    left_container: Schema.Attribute.Component<
      'aws-page.left-container',
      false
    >;
    right_container: Schema.Attribute.Component<
      'aws-page.right-container',
      false
    >;
  };
}

export interface AwsPageLeftContainer extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_left_containers';
  info: {
    displayName: 'left container';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    points: Schema.Attribute.Component<'shared.points', true>;
    primary_btn_link: Schema.Attribute.String;
    primary_btn_text: Schema.Attribute.String;
    secondary_btn_link: Schema.Attribute.String;
    secondary_btn_text: Schema.Attribute.String;
  };
}

export interface AwsPageList extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface AwsPagePoints extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    included: Schema.Attribute.Boolean;
    point: Schema.Attribute.String;
  };
}

export interface AwsPageRealWorldAws extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_real_world_aws';
  info: {
    displayName: 'Real-World AWS';
  };
  attributes: {
    card1: Schema.Attribute.Component<'aws-page.card1', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface AwsPageRightContainer extends Struct.ComponentSchema {
  collectionName: 'components_aws_page_right_containers';
  info: {
    displayName: 'right_container';
  };
  attributes: {
    button_Link: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    list: Schema.Attribute.Component<'aws-page.list', true>;
    sub_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AzurePageAzureForBfsiIndia extends Struct.ComponentSchema {
  collectionName: 'components_azure_page_azure_for_bfsi_indias';
  info: {
    displayName: 'Azure for BFSI India';
  };
  attributes: {
    left_container: Schema.Attribute.Component<
      'azure-page.left-container',
      false
    >;
    right_container: Schema.Attribute.Component<
      'azure-page.right-container',
      false
    >;
  };
}

export interface AzurePageCards extends Struct.ComponentSchema {
  collectionName: 'components_azure_page_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface AzurePageLeftContainer extends Struct.ComponentSchema {
  collectionName: 'components_azure_page_left_containers';
  info: {
    displayName: 'left container';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    points: Schema.Attribute.Component<'azure-page.points', true>;
  };
}

export interface AzurePagePoints extends Struct.ComponentSchema {
  collectionName: 'components_azure_page_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AzurePageRightContainer extends Struct.ComponentSchema {
  collectionName: 'components_azure_page_right_containers';
  info: {
    displayName: 'right container';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    by: Schema.Attribute.String;
    card: Schema.Attribute.Component<'azure-page.cards', true>;
    message: Schema.Attribute.Text;
    sub_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CaseStudiesCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_case_studies_case_studies';
  info: {
    displayName: 'case_study';
  };
  attributes: {
    company: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    industry: Schema.Attribute.String;
    key_outcome: Schema.Attribute.String;
    kpi_1_label: Schema.Attribute.String;
    kpi_1_value: Schema.Attribute.String;
    kpi_2_label: Schema.Attribute.String;
    kpi_2_value: Schema.Attribute.String;
    outcome: Schema.Attribute.Text;
    points: Schema.Attribute.Component<'cybersecurity-page.points', true>;
    quote: Schema.Attribute.Text;
  };
}

export interface CloudMigrationPageCloudMigrationHero
  extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_cloud_migration_heroes';
  info: {
    displayName: 'cloud_migration_hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    kicker_text: Schema.Attribute.String;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    process_step: Schema.Attribute.Component<
      'cloud-migration-page.process-step',
      true
    >;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'cloud-migration-page.stats', true>;
    title: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageDeliverables extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_deliverables';
  info: {
    displayName: 'deliverables';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageIndustryCard extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_industry_cards';
  info: {
    displayName: 'industry_card';
  };
  attributes: {
    compliance: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    industry: Schema.Attribute.String;
    primary_cloud: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    timeline: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageIndustryMigration
  extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_industry_migrations';
  info: {
    displayName: 'industry_migration';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    industry_card: Schema.Attribute.Component<
      'cloud-migration-page.industry-card',
      true
    >;
  };
}

export interface CloudMigrationPageMigrationProcess
  extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_migration_processes';
  info: {
    displayName: 'migration_process';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    process_step_detailed: Schema.Attribute.Component<
      'cloud-migration-page.process-step-detailed',
      true
    >;
  };
}

export interface CloudMigrationPageMigrationRiskManagement
  extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_migration_risk_managements';
  info: {
    displayName: 'migration_risk_management';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    risk_item: Schema.Attribute.Component<
      'cloud-migration-page.risk-item',
      true
    >;
    solution_item: Schema.Attribute.Component<
      'cloud-migration-page.solution-item',
      true
    >;
  };
}

export interface CloudMigrationPageMigrationService
  extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_migration_services';
  info: {
    displayName: 'migration_service';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    tag: Schema.Attribute.Component<'cloud-migration-page.tag', true>;
    title: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageMigrationServiceTypes
  extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_migration_service_types';
  info: {
    displayName: 'migration_service_types';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    migration_service: Schema.Attribute.Component<
      'cloud-migration-page.migration-service',
      true
    >;
  };
}

export interface CloudMigrationPageProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_process_steps';
  info: {
    displayName: 'process_step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    step_number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageProcessStepDetailed
  extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_process_step_detaileds';
  info: {
    displayName: 'process_step_detailed';
  };
  attributes: {
    deliverables: Schema.Attribute.Component<
      'cloud-migration-page.deliverables',
      true
    >;
    description: Schema.Attribute.Text;
    timeline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageQuickAnswer extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_quick_answers';
  info: {
    displayName: 'quick_answer';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface CloudMigrationPageRiskItem extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_risk_items';
  info: {
    displayName: 'risk_item';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageSixRFramework
  extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_six_r_frameworks';
  info: {
    displayName: 'six_r_framework';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    six_r_strategy: Schema.Attribute.Component<
      'cloud-migration-page.six-r-strategy',
      true
    >;
  };
}

export interface CloudMigrationPageSixRStrategy extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_six_r_strategies';
  info: {
    displayName: 'six_r_strategy';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    number: Schema.Attribute.Integer;
    timeline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageSolutionItem extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_solution_items';
  info: {
    displayName: 'solution_item';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageStats extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageTag extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface CloudMigrationPageTrustStats extends Struct.ComponentSchema {
  collectionName: 'components_cloud_migration_page_trust_stats';
  info: {
    displayName: 'trust_stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface CybersecurityPageCybersecurityHero
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_cybersecurity_heroes';
  info: {
    displayName: 'cybersecurity_hero';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    trust_point: Schema.Attribute.Component<
      'cybersecurity-page.trust-points',
      true
    >;
  };
}

export interface CybersecurityPageDescriptionPoints
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_description_points';
  info: {
    displayName: 'description_points';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface CybersecurityPageFramework extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_frameworks';
  info: {
    displayName: 'framework';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface CybersecurityPageMeta extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface CybersecurityPagePartnerCategory
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_partner_categories';
  info: {
    displayName: 'partner_category';
  };
  attributes: {
    category_name: Schema.Attribute.String;
    partners: Schema.Attribute.Component<'cybersecurity-page.partners', true>;
  };
}

export interface CybersecurityPagePartners extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface CybersecurityPagePoints extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface CybersecurityPageSecurityComplianceFrameworks
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_security_compliance_frameworks';
  info: {
    displayName: 'security_compliance_frameworks';
  };
  attributes: {
    description: Schema.Attribute.String;
    framework: Schema.Attribute.Component<'cybersecurity-page.framework', true>;
    heading: Schema.Attribute.String;
  };
}

export interface CybersecurityPageSecurityEvent extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_security_events';
  info: {
    displayName: 'security_event';
  };
  attributes: {
    meta_tag: Schema.Attribute.Component<'cybersecurity-page.meta', true>;
    severity: Schema.Attribute.Enumeration<['severity', 'high', 'medium']>;
    status_cb: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CybersecurityPageSecurityPartners
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_security_partners';
  info: {
    displayName: 'security_partners';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    partner_category: Schema.Attribute.Component<
      'cybersecurity-page.partner-category',
      true
    >;
  };
}

export interface CybersecurityPageSecurityServiceCatalogue
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_security_service_catalogues';
  info: {
    displayName: 'security_service_catalogue';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    service_category: Schema.Attribute.Component<
      'cybersecurity-page.service-category',
      true
    >;
  };
}

export interface CybersecurityPageServiceCategory
  extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_service_categories';
  info: {
    displayName: 'service_category';
  };
  attributes: {
    category_icon: Schema.Attribute.Media<'images'>;
    category_name: Schema.Attribute.String;
    services: Schema.Attribute.Component<'cybersecurity-page.services', true>;
  };
}

export interface CybersecurityPageServices extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    description_points: Schema.Attribute.Component<
      'cybersecurity-page.description-points',
      true
    >;
    icon: Schema.Attribute.Media<'images'>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CybersecurityPageTrustPoints extends Struct.ComponentSchema {
  collectionName: 'components_cybersecurity_page_trust_points';
  info: {
    displayName: 'trust_points';
  };
  attributes: {
    trust_point: Schema.Attribute.String;
  };
}

export interface DemoBookPageFeedback extends Struct.ComponentSchema {
  collectionName: 'components_demo_book_page_feedbacks';
  info: {
    displayName: 'feedback';
  };
  attributes: {
    company: Schema.Attribute.String;
    location: Schema.Attribute.String;
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface DemoBookPageListPoints extends Struct.ComponentSchema {
  collectionName: 'components_demo_book_page_list_points';
  info: {
    displayName: 'list points';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FaqFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'faq_item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface GcpPageBenefitCard extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_benefit_cards';
  info: {
    displayName: 'Benefit Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GcpPageByTheNumbersSection extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_by_the_numbers_sections';
  info: {
    displayName: 'By the Numbers Section';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.stat', true>;
    title: Schema.Attribute.Text;
  };
}

export interface GcpPageCaseStudyCard extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_case_study_cards';
  info: {
    displayName: 'Case Study Card';
  };
  attributes: {
    challenge_quote: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    industry: Schema.Attribute.String;
    metric_label: Schema.Attribute.String;
    metric_value: Schema.Attribute.String;
    organization_name: Schema.Attribute.String;
  };
}

export interface GcpPageCaseStudySection extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_case_study_sections';
  info: {
    displayName: 'Case Study Section';
  };
  attributes: {
    case_study_cards: Schema.Attribute.Component<
      'gcp-page.case-study-card',
      true
    >;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface GcpPageCertificationCard extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_certification_cards';
  info: {
    displayName: 'Certification Card';
  };
  attributes: {
    count: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    level: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface GcpPageCertificationsSection extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_certifications_sections';
  info: {
    displayName: 'Certifications Section';
  };
  attributes: {
    certification_cards: Schema.Attribute.Component<
      'gcp-page.certification-card',
      true
    >;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface GcpPageCommonQuestionsSection extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_common_questions_sections';
  info: {
    displayName: 'Common Questions Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'shared.question-and-answer', true>;
    title: Schema.Attribute.Text;
  };
}

export interface GcpPageComparisonColumn extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_comparison_columns';
  info: {
    displayName: 'Comparison Column';
  };
  attributes: {
    highlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    points: Schema.Attribute.Component<'gcp-page.comparison-point', true>;
    title: Schema.Attribute.String;
  };
}

export interface GcpPageComparisonPoint extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_comparison_points';
  info: {
    displayName: 'Comparison Point';
  };
  attributes: {
    included: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    text: Schema.Attribute.Text;
  };
}

export interface GcpPageComparisonSection extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_comparison_sections';
  info: {
    displayName: 'Comparison Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    direct_option: Schema.Attribute.Component<
      'gcp-page.comparison-column',
      false
    >;
    eyebrow: Schema.Attribute.String;
    thynkwise_option: Schema.Attribute.Component<
      'gcp-page.comparison-column',
      false
    >;
    title: Schema.Attribute.Text;
  };
}

export interface GcpPageDashboardStat extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_dashboard_stats';
  info: {
    displayName: 'Dashboard Stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    tone: Schema.Attribute.Enumeration<
      ['default', 'white', 'yellow', 'green']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    value: Schema.Attribute.String;
  };
}

export interface GcpPageFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'shared.question-and-answer', true>;
    title: Schema.Attribute.Text;
  };
}

export interface GcpPageFinalCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_final_cta_sections';
  info: {
    displayName: 'Final CTA Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    support_note: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
    whatsapp_link: Schema.Attribute.String;
    whatsapp_text: Schema.Attribute.String;
  };
}

export interface GcpPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    certification_badge_text: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    partner_badge_text: Schema.Attribute.String;
    partner_dashboard_card: Schema.Attribute.Component<
      'gcp-page.partner-dashboard-card',
      false
    >;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    trust_points: Schema.Attribute.Component<'gcp-page.hero-trust-point', true>;
  };
}

export interface GcpPageHeroTrustPoint extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_hero_trust_points';
  info: {
    displayName: 'Hero Trust Point';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface GcpPagePartnerDashboardCard extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_partner_dashboard_cards';
  info: {
    displayName: 'Partner Dashboard Card';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'gcp-page.dashboard-stat', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GcpPageServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'gcp-page.tag', true>;
    title: Schema.Attribute.String;
  };
}

export interface GcpPageServicesPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_services_portfolios';
  info: {
    displayName: 'Services Portfolio';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    service_cards: Schema.Attribute.Component<'gcp-page.service-card', true>;
    title: Schema.Attribute.Text;
  };
}

export interface GcpPageTag extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface GcpPageUseCaseCard extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_use_case_cards';
  info: {
    displayName: 'Use Case Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    result: Schema.Attribute.Text;
    tags: Schema.Attribute.Component<'gcp-page.tag', true>;
    title: Schema.Attribute.Text;
  };
}

export interface GcpPageUseCasesSection extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_use_cases_sections';
  info: {
    displayName: 'Use Cases Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
    use_case_cards: Schema.Attribute.Component<'gcp-page.use-case-card', true>;
  };
}

export interface GcpPageWhyThynkwiseGcp extends Struct.ComponentSchema {
  collectionName: 'components_gcp_page_why_thynkwise_gcps';
  info: {
    displayName: 'Why Thynkwise for GCP';
  };
  attributes: {
    benefit_cards: Schema.Attribute.Component<'gcp-page.benefit-card', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface GetAssessmentPageAssessmentQuizSection
  extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_assessment_quiz_sections';
  info: {
    displayName: 'Assessment Quiz Section';
  };
  attributes: {
    final_button_text: Schema.Attribute.String;
    next_button_text: Schema.Attribute.String;
    previous_button_text: Schema.Attribute.String;
    questions: Schema.Attribute.Component<
      'get-assessment-page.quiz-question',
      true
    >;
  };
}

export interface GetAssessmentPageContactFormSection
  extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_contact_form_sections';
  info: {
    displayName: 'Contact Form Section';
  };
  attributes: {
    back_button_text: Schema.Attribute.String;
    business_email_placeholder: Schema.Attribute.String;
    company_name_placeholder: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    first_name_placeholder: Schema.Attribute.String;
    phone_placeholder: Schema.Attribute.String;
    privacy_note: Schema.Attribute.Text;
    role_options: Schema.Attribute.Component<
      'get-assessment-page.role-option',
      true
    >;
    role_placeholder: Schema.Attribute.String;
    step_label: Schema.Attribute.String;
    submit_button_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GetAssessmentPageDeliveryBox extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_delivery_boxes';
  info: {
    displayName: 'Delivery Box';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GetAssessmentPageFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'shared.question-and-answer', true>;
    title: Schema.Attribute.String;
  };
}

export interface GetAssessmentPageFindingCard extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_finding_cards';
  info: {
    displayName: 'Finding Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    severity_label: Schema.Attribute.String;
    severity_tone: Schema.Attribute.Enumeration<['high', 'medium', 'low']>;
    title: Schema.Attribute.String;
  };
}

export interface GetAssessmentPageHeroBadge extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_hero_badges';
  info: {
    displayName: 'Hero Badge';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface GetAssessmentPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    badge_items: Schema.Attribute.Component<
      'get-assessment-page.hero-badge',
      true
    >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface GetAssessmentPageQuizOption extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_quiz_options';
  info: {
    displayName: 'Quiz Option';
  };
  attributes: {
    display_style: Schema.Attribute.Enumeration<['card', 'text']>;
    icon: Schema.Attribute.String;
    is_default_selected: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    subtext: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface GetAssessmentPageQuizQuestion extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_quiz_questions';
  info: {
    displayName: 'Quiz Question';
  };
  attributes: {
    description: Schema.Attribute.Text;
    options: Schema.Attribute.Component<
      'get-assessment-page.quiz-option',
      true
    >;
    question_label: Schema.Attribute.String;
    selection_type: Schema.Attribute.Enumeration<
      ['single_card', 'single_text', 'multi_card']
    >;
    step_number: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface GetAssessmentPageRecommendationCard
  extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_recommendation_cards';
  info: {
    displayName: 'Recommendation Card';
  };
  attributes: {
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GetAssessmentPageResultsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_results_sections';
  info: {
    displayName: 'Results Section';
  };
  attributes: {
    delivery_box: Schema.Attribute.Component<
      'get-assessment-page.delivery-box',
      false
    >;
    findings: Schema.Attribute.Component<
      'get-assessment-page.finding-card',
      true
    >;
    findings_heading: Schema.Attribute.String;
    recommendation_cards: Schema.Attribute.Component<
      'get-assessment-page.recommendation-card',
      true
    >;
    recommendations_heading: Schema.Attribute.String;
    score_card: Schema.Attribute.Component<
      'get-assessment-page.score-card',
      false
    >;
  };
}

export interface GetAssessmentPageRoleOption extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_role_options';
  info: {
    displayName: 'Role Option';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface GetAssessmentPageScoreCard extends Struct.ComponentSchema {
  collectionName: 'components_get_assessment_page_score_cards';
  info: {
    displayName: 'Score Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    grade_text: Schema.Attribute.String;
    label: Schema.Attribute.String;
    score_suffix: Schema.Attribute.String;
    score_value: Schema.Attribute.Integer;
  };
}

export interface GpuaasPageCard extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    point: Schema.Attribute.Component<'shared.points', true>;
    title: Schema.Attribute.String;
  };
}

export interface GpuaasPageFaq extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    faq: Schema.Attribute.Component<'shared.question-and-answer', true>;
  };
}

export interface GpuaasPageFrameworkStack extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_framework_stacks';
  info: {
    displayName: 'framework_stack';
  };
  attributes: {
    card: Schema.Attribute.Component<'gpuaas-page.card', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface GpuaasPageGpuArchitecture extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_gpu_architectures';
  info: {
    displayName: 'gpu-architecture';
  };
  attributes: {
    gpu_architecture_types: Schema.Attribute.Component<
      'gpuaas-page.gpu-architecture-types',
      true
    >;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface GpuaasPageGpuArchitectureTypes extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_gpu_architecture_types';
  info: {
    displayName: 'gpu-architecture-types';
  };
  attributes: {
    gpu_card: Schema.Attribute.Component<'gpuaas-page.gpu-card', true>;
    section_1: Schema.Attribute.Component<'gpuaas-page.section-1', false>;
    title: Schema.Attribute.String;
  };
}

export interface GpuaasPageGpuArchitectureVendors
  extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_gpu_architecture_vendors';
  info: {
    displayName: 'GPU Architecture Vendors';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card-1', true>;
    title: Schema.Attribute.String;
  };
}

export interface GpuaasPageGpuCard extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_gpu_cards';
  info: {
    displayName: 'gpu_card';
  };
  attributes: {
    list_point: Schema.Attribute.Component<'shared.stat', true>;
    model: Schema.Attribute.String;
    name: Schema.Attribute.String;
    tag: Schema.Attribute.Component<'shared.points', true>;
    variant: Schema.Attribute.Component<'shared.points', true>;
  };
}

export interface GpuaasPageGpuServerOemPartners extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_gpu_server_oem_partners';
  info: {
    displayName: 'GPU Server OEM Partners';
  };
  attributes: {};
}

export interface GpuaasPageGpuaasDeliveryModels extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_gpuaas_delivery_models';
  info: {
    displayName: 'gpuaas_delivery_models';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface GpuaasPageGpuaasWhoDeploys extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_gpuaas_who_deploys';
  info: {
    displayName: 'gpuaas_who_deploys';
  };
  attributes: {
    gpuaas_deploy_user: Schema.Attribute.Component<'shared.card', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface GpuaasPageHero extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    gpu_availability: Schema.Attribute.Component<
      'shared.gpu-availability',
      true
    >;
    text: Schema.Attribute.Component<'shared.hero', false>;
  };
}

export interface GpuaasPageOutcomes extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_outcomes';
  info: {
    displayName: 'Outcomes';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card-3', true>;
    heading: Schema.Attribute.String;
  };
}

export interface GpuaasPagePartnerEcosystem extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_partner_ecosystems';
  info: {
    displayName: 'Partner Ecosystem';
  };
  attributes: {
    card_4: Schema.Attribute.Component<'shared.card-4', false>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
    section_1: Schema.Attribute.Component<
      'gpuaas-page.gpu-architecture-vendors',
      true
    >;
  };
}

export interface GpuaasPageSection1 extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_section_1s';
  info: {
    displayName: 'section-1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    points: Schema.Attribute.Component<'shared.points', true>;
    short_code: Schema.Attribute.String;
  };
}

export interface GpuaasPageTurnkeySystems extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_turnkey_systems';
  info: {
    displayName: 'turnkey_systems';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card-2', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface GpuaasPageTypes extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_types';
  info: {
    displayName: 'types';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface GpuaasPageWorkloadLibrary extends Struct.ComponentSchema {
  collectionName: 'components_gpuaas_page_workload_libraries';
  info: {
    displayName: 'Workload Library';
  };
  attributes: {
    heading: Schema.Attribute.Component<'shared.heading', true>;
    types: Schema.Attribute.Component<'gpuaas-page.types', true>;
  };
}

export interface HomePageCards extends Struct.ComponentSchema {
  collectionName: 'components_home_page_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    link: Schema.Attribute.String;
    link_text: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    services: Schema.Attribute.Component<'shared.points', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageClientOutcomes extends Struct.ComponentSchema {
  collectionName: 'components_home_page_client_outcomes';
  info: {
    displayName: 'Client Outcomes';
  };
  attributes: {
    heading: Schema.Attribute.String;
    outcomesCard: Schema.Attribute.Component<'home-page.outcomes-card', true>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface HomePageCloudProvider extends Struct.ComponentSchema {
  collectionName: 'components_home_page_cloud_providers';
  info: {
    displayName: 'cloud-provider';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home-page.cards', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface HomePageCta extends Struct.ComponentSchema {
  collectionName: 'components_home_page_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    description: Schema.Attribute.String;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_page_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface HomePageHero extends Struct.ComponentSchema {
  collectionName: 'components_home_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    subtitle: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface HomePageIndustry extends Struct.ComponentSchema {
  collectionName: 'components_home_page_industries';
  info: {
    displayName: 'industry';
  };
  attributes: {
    heading: Schema.Attribute.String;
    industryCard: Schema.Attribute.Component<'home-page.industry-card', true>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface HomePageIndustryCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_industry_cards';
  info: {
    displayName: 'industryCard';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageOutcomesCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_outcomes_cards';
  info: {
    displayName: 'Outcomes Card';
  };
  attributes: {
    challenge: Schema.Attribute.Text;
    company: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    industry: Schema.Attribute.String;
    kpi_1_label: Schema.Attribute.String;
    kpi_1_value: Schema.Attribute.String;
    kpi_2_label: Schema.Attribute.String;
    kpi_2_value: Schema.Attribute.String;
    service: Schema.Attribute.String;
  };
}

export interface HomePageService extends Struct.ComponentSchema {
  collectionName: 'components_home_page_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    serviceCard: Schema.Attribute.Component<'home-page.service-card', true>;
  };
}

export interface HomePageServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_service_cards';
  info: {
    displayName: 'service card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    link_text: Schema.Attribute.String;
    points: Schema.Attribute.Component<'shared.points', true>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageStat extends Struct.ComponentSchema {
  collectionName: 'components_home_page_stats';
  info: {
    displayName: 'stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface HomePageTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_page_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface HomePageValueItem extends Struct.ComponentSchema {
  collectionName: 'components_home_page_value_items';
  info: {
    displayName: 'value-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageWhyCard extends Struct.ComponentSchema {
  collectionName: 'components_home_page_why_cards';
  info: {
    displayName: 'why_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomePageWhyThynkwise extends Struct.ComponentSchema {
  collectionName: 'components_home_page_why_thynkwises';
  info: {
    displayName: 'Why Thynkwise';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    why_card: Schema.Attribute.Component<'home-page.why-card', true>;
  };
}

export interface IndianSovereignCloudPageBenefitCard
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_benefit_cards';
  info: {
    displayName: 'Benefit Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageCaseStudiesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_case_studies_sections';
  info: {
    displayName: 'Case Studies Section';
  };
  attributes: {
    case_study_cards: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.case-study-card',
      true
    >;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface IndianSovereignCloudPageCaseStudyCard
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_case_study_cards';
  info: {
    displayName: 'Case Study Card';
  };
  attributes: {
    challenge: Schema.Attribute.Text;
    company: Schema.Attribute.String;
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    header_theme: Schema.Attribute.Enumeration<['navy', 'green', 'purple']> &
      Schema.Attribute.DefaultTo<'navy'>;
    icon: Schema.Attribute.String;
    industry: Schema.Attribute.String;
    key_outcome: Schema.Attribute.Text;
    metrics: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.case-study-metric',
      true
    >;
    outcome: Schema.Attribute.Text;
    provider_text: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageCaseStudyMetric
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_case_study_metrics';
  info: {
    displayName: 'Case Study Metric';
  };
  attributes: {
    background_tone: Schema.Attribute.Enumeration<
      ['teal', 'orange', 'green', 'blue', 'purple']
    > &
      Schema.Attribute.DefaultTo<'teal'>;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
    value_tone: Schema.Attribute.Enumeration<
      ['teal', 'orange', 'green', 'blue', 'purple']
    > &
      Schema.Attribute.DefaultTo<'teal'>;
  };
}

export interface IndianSovereignCloudPageCommonQuestionsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_common_questions_sections';
  info: {
    displayName: 'Common Questions Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'shared.question-and-answer', true>;
    title: Schema.Attribute.Text;
  };
}

export interface IndianSovereignCloudPageComparisonColumn
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_comparison_columns';
  info: {
    displayName: 'Comparison Column';
  };
  attributes: {
    highlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.String;
    points: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.comparison-item',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageComparisonItem
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_comparison_items';
  info: {
    displayName: 'Comparison Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    included: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageComparisonSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_comparison_sections';
  info: {
    displayName: 'Comparison Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    foreign_hyperscaler_column: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.comparison-column',
      false
    >;
    indian_csp_column: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.comparison-column',
      false
    >;
    title: Schema.Attribute.Text;
  };
}

export interface IndianSovereignCloudPageComplianceCredentialCard
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_compliance_credential_cards';
  info: {
    displayName: 'Compliance Credential Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageDashboardCard
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_dashboard_cards';
  info: {
    displayName: 'Dashboard Card';
  };
  attributes: {
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    rows: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.dashboard-row',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageDashboardRow
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_dashboard_rows';
  info: {
    displayName: 'Dashboard Row';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
    value_tone: Schema.Attribute.Enumeration<
      ['teal', 'green', 'white', 'saffron']
    > &
      Schema.Attribute.DefaultTo<'teal'>;
  };
}

export interface IndianSovereignCloudPageFaqSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_faq_sections';
  info: {
    displayName: 'FAQ Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'shared.question-and-answer', true>;
    title: Schema.Attribute.Text;
  };
}

export interface IndianSovereignCloudPageFinalCtaSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_final_cta_sections';
  info: {
    displayName: 'Final CTA Section';
  };
  attributes: {
    badge_text: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    support_note: Schema.Attribute.Text;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    whatsapp_link: Schema.Attribute.String;
    whatsapp_text: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageHeroSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    compliance_badge_text: Schema.Attribute.String;
    dashboard_card: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.dashboard-card',
      false
    >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    sovereign_badge_text: Schema.Attribute.String;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    trust_stats: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.hero-trust-stat',
      true
    >;
  };
}

export interface IndianSovereignCloudPageHeroTrustStat
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_hero_trust_stats';
  info: {
    displayName: 'Hero Trust Stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPagePartnerBadge
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_partner_badges';
  info: {
    displayName: 'Partner Badge';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPagePartnerCard
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_partner_cards';
  info: {
    displayName: 'Partner Card';
  };
  attributes: {
    badges: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.partner-badge',
      true
    >;
    brand_theme: Schema.Attribute.Enumeration<
      ['esds', 'yotta', 'ctrls', 'sify', 'e2e', 'ntt', 'custom']
    > &
      Schema.Attribute.DefaultTo<'custom'>;
    logo: Schema.Attribute.Media<'images'>;
    partner_name: Schema.Attribute.String;
    tagline: Schema.Attribute.Text;
  };
}

export interface IndianSovereignCloudPagePartnerEcosystemSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_partner_ecosystem_sections';
  info: {
    displayName: 'Partner Ecosystem Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    partner_cards: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.partner-card',
      true
    >;
    selection_note_description: Schema.Attribute.Text;
    selection_note_title: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface IndianSovereignCloudPageServiceCard
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    tags: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.text-tag',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageServicesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_services_sections';
  info: {
    displayName: 'Services Section';
  };
  attributes: {
    credential_cards: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.compliance-credential-card',
      true
    >;
    credentials_eyebrow: Schema.Attribute.String;
    credentials_title: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    service_cards: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.service-card',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface IndianSovereignCloudPageStatBandSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_stat_band_sections';
  info: {
    displayName: 'Stat Band Section';
  };
  attributes: {
    stats: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.stat-item',
      true
    >;
  };
}

export interface IndianSovereignCloudPageStatItem
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_stat_items';
  info: {
    displayName: 'Stat Item';
  };
  attributes: {
    label: Schema.Attribute.Text;
    value: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageTextTag
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_text_tags';
  info: {
    displayName: 'Text Tag';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageUseCaseCard
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_use_case_cards';
  info: {
    displayName: 'Use Case Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    result_text: Schema.Attribute.Text;
    tags: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.text-tag',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface IndianSovereignCloudPageUseCasesSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_use_cases_sections';
  info: {
    displayName: 'Use Cases Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
    use_case_cards: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.use-case-card',
      true
    >;
  };
}

export interface IndianSovereignCloudPageWhyPartnerSection
  extends Struct.ComponentSchema {
  collectionName: 'components_indian_sovereign_cloud_page_why_partner_sections';
  info: {
    displayName: 'Why Partner Section';
  };
  attributes: {
    benefit_cards: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.benefit-card',
      true
    >;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface IndustryUsecasesTags extends Struct.ComponentSchema {
  collectionName: 'components_industry_usecases_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface IndustryUsecasesUsecase extends Struct.ComponentSchema {
  collectionName: 'components_industry_usecases_usecases';
  info: {
    displayName: 'usecase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    industry: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'industry-usecases.tags', true>;
  };
}

export interface ManagedServicesPageCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_case_studies';
  info: {
    displayName: 'case_studies';
  };
  attributes: {
    case_study: Schema.Attribute.Component<'case-studies.case-study', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface ManagedServicesPageFaq extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    faq_item: Schema.Attribute.Component<'faq.faq-item', true>;
  };
}

export interface ManagedServicesPageFinalCta extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_final_ctas';
  info: {
    displayName: 'final_cta';
  };
  attributes: {
    description: Schema.Attribute.Text;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ManagedServicesPageHero extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    badge_1: Schema.Attribute.String;
    badge_2: Schema.Attribute.String;
    badge_3: Schema.Attribute.String;
    cta_primary_link: Schema.Attribute.String;
    cta_primary_text: Schema.Attribute.String;
    cta_secondary_link: Schema.Attribute.String;
    cta_secondary_text: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface ManagedServicesPageIndustryUsecases
  extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_industry_usecases';
  info: {
    displayName: 'industry_usecases';
  };
  attributes: {
    heading: Schema.Attribute.String;
    usecase: Schema.Attribute.Component<'industry-usecases.usecase', true>;
  };
}

export interface ManagedServicesPageItems extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    items: Schema.Attribute.String;
  };
}

export interface ManagedServicesPageManagedServicePillars
  extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_managed_service_pillars';
  info: {
    displayName: 'managed_service_pillars';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    pillar: Schema.Attribute.Component<'managed-services-page.pillar', true>;
  };
}

export interface ManagedServicesPagePillar extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_pillars';
  info: {
    displayName: 'pillar';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'managed-services-page.items', true>;
    label: Schema.Attribute.String;
  };
}

export interface ManagedServicesPageProcessSteps
  extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_process_steps';
  info: {
    displayName: 'process_steps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    process_step: Schema.Attribute.Component<
      'managed-services.process-step',
      true
    >;
  };
}

export interface ManagedServicesPageServiceCatalogue
  extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_service_catalogues';
  info: {
    displayName: 'service_catalogue';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    service_category: Schema.Attribute.Component<
      'managed-services-page.service-category',
      true
    >;
  };
}

export interface ManagedServicesPageServiceCategory
  extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_service_categories';
  info: {
    displayName: 'service_category';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    services: Schema.Attribute.Component<
      'managed-services-page.services',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ManagedServicesPageServices extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    services: Schema.Attribute.String;
  };
}

export interface ManagedServicesPageStats extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ManagedServicesPageStatsBand extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_stats_bands';
  info: {
    displayName: 'stats_band';
  };
  attributes: {
    stats: Schema.Attribute.Component<'stats-band.stats', true>;
  };
}

export interface ManagedServicesPageWhyCard extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_why_cards';
  info: {
    displayName: 'why_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ManagedServicesPageWhyThynkwise
  extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_page_why_thynkwises';
  info: {
    displayName: 'why_thynkwise';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card-1', true>;
    heading: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface ManagedServicesProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_managed_services_process_steps';
  info: {
    displayName: 'process_step';
  };
  attributes: {
    description: Schema.Attribute.Text;
    step_number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    points: Schema.Attribute.Component<'shared.points', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard1 extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_1s';
  info: {
    displayName: 'card-1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_2s';
  info: {
    displayName: 'card-2';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    point: Schema.Attribute.Component<'shared.points', true>;
    stat: Schema.Attribute.Component<'shared.stat', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard3 extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_3s';
  info: {
    displayName: 'card-3';
  };
  attributes: {
    container_1: Schema.Attribute.Component<'shared.stat', false>;
    container_2: Schema.Attribute.Component<'shared.stat', false>;
    description_1: Schema.Attribute.RichText;
    description_2: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images'>;
    points: Schema.Attribute.Component<'shared.points', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard4 extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_4s';
  info: {
    displayName: 'card-4';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedCard5 extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_5s';
  info: {
    displayName: 'card_5';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    description: Schema.Attribute.Text;
    points: Schema.Attribute.Component<'shared.points', true>;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    q_a: Schema.Attribute.Component<'shared.question-and-answer', true>;
  };
}

export interface SharedGpuAvailability extends Struct.ComponentSchema {
  collectionName: 'components_shared_gpu_availabilities';
  info: {
    displayName: 'gpu_availability';
  };
  attributes: {
    arch: Schema.Attribute.String;
    gpu_status: Schema.Attribute.String;
    name: Schema.Attribute.String;
    spec: Schema.Attribute.Component<'shared.spec', true>;
  };
}

export interface SharedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    secondary_cta_link: Schema.Attribute.String;
    secondary_cta_text: Schema.Attribute.String;
    stat: Schema.Attribute.Component<'shared.stat', true>;
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SharedPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    point: Schema.Attribute.Text;
  };
}

export interface SharedQuestionAndAnswer extends Struct.ComponentSchema {
  collectionName: 'components_shared_question_and_answers';
  info: {
    displayName: 'question & answer';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface SharedSpec extends Struct.ComponentSchema {
  collectionName: 'components_shared_specs';
  info: {
    displayName: 'spec';
  };
  attributes: {
    spec: Schema.Attribute.String;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'stat';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface StatsBandStats extends Struct.ComponentSchema {
  collectionName: 'components_stats_band_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.by-the-numbers': AboutPageByTheNumbers;
      'about-page.card': AboutPageCard;
      'about-page.left': AboutPageLeft;
      'about-page.our-mission': AboutPageOurMission;
      'about-page.our-value': AboutPageOurValue;
      'about-page.partner-card': AboutPagePartnerCard;
      'about-page.right': AboutPageRight;
      'about-page.stats-band': AboutPageStatsBand;
      'about-page.team': AboutPageTeam;
      'about-page.technology-partners': AboutPageTechnologyPartners;
      'about-page.the-team': AboutPageTheTeam;
      'about-page.where-we-are': AboutPageWhereWeAre;
      'about.hero': AboutHero;
      'aws-page.aws-direct': AwsPageAwsDirect;
      'aws-page.aws-via-thynkwise': AwsPageAwsViaThynkwise;
      'aws-page.card': AwsPageCard;
      'aws-page.card1': AwsPageCard1;
      'aws-page.card2': AwsPageCard2;
      'aws-page.certified-expertise': AwsPageCertifiedExpertise;
      'aws-page.client-outcomes': AwsPageClientOutcomes;
      'aws-page.comparison': AwsPageComparison;
      'aws-page.hero': AwsPageHero;
      'aws-page.left-container': AwsPageLeftContainer;
      'aws-page.list': AwsPageList;
      'aws-page.points': AwsPagePoints;
      'aws-page.real-world-aws': AwsPageRealWorldAws;
      'aws-page.right-container': AwsPageRightContainer;
      'azure-page.azure-for-bfsi-india': AzurePageAzureForBfsiIndia;
      'azure-page.cards': AzurePageCards;
      'azure-page.left-container': AzurePageLeftContainer;
      'azure-page.points': AzurePagePoints;
      'azure-page.right-container': AzurePageRightContainer;
      'case-studies.case-study': CaseStudiesCaseStudy;
      'cloud-migration-page.cloud-migration-hero': CloudMigrationPageCloudMigrationHero;
      'cloud-migration-page.deliverables': CloudMigrationPageDeliverables;
      'cloud-migration-page.industry-card': CloudMigrationPageIndustryCard;
      'cloud-migration-page.industry-migration': CloudMigrationPageIndustryMigration;
      'cloud-migration-page.migration-process': CloudMigrationPageMigrationProcess;
      'cloud-migration-page.migration-risk-management': CloudMigrationPageMigrationRiskManagement;
      'cloud-migration-page.migration-service': CloudMigrationPageMigrationService;
      'cloud-migration-page.migration-service-types': CloudMigrationPageMigrationServiceTypes;
      'cloud-migration-page.process-step': CloudMigrationPageProcessStep;
      'cloud-migration-page.process-step-detailed': CloudMigrationPageProcessStepDetailed;
      'cloud-migration-page.quick-answer': CloudMigrationPageQuickAnswer;
      'cloud-migration-page.risk-item': CloudMigrationPageRiskItem;
      'cloud-migration-page.six-r-framework': CloudMigrationPageSixRFramework;
      'cloud-migration-page.six-r-strategy': CloudMigrationPageSixRStrategy;
      'cloud-migration-page.solution-item': CloudMigrationPageSolutionItem;
      'cloud-migration-page.stats': CloudMigrationPageStats;
      'cloud-migration-page.tag': CloudMigrationPageTag;
      'cloud-migration-page.trust-stats': CloudMigrationPageTrustStats;
      'cybersecurity-page.cybersecurity-hero': CybersecurityPageCybersecurityHero;
      'cybersecurity-page.description-points': CybersecurityPageDescriptionPoints;
      'cybersecurity-page.framework': CybersecurityPageFramework;
      'cybersecurity-page.meta': CybersecurityPageMeta;
      'cybersecurity-page.partner-category': CybersecurityPagePartnerCategory;
      'cybersecurity-page.partners': CybersecurityPagePartners;
      'cybersecurity-page.points': CybersecurityPagePoints;
      'cybersecurity-page.security-compliance-frameworks': CybersecurityPageSecurityComplianceFrameworks;
      'cybersecurity-page.security-event': CybersecurityPageSecurityEvent;
      'cybersecurity-page.security-partners': CybersecurityPageSecurityPartners;
      'cybersecurity-page.security-service-catalogue': CybersecurityPageSecurityServiceCatalogue;
      'cybersecurity-page.service-category': CybersecurityPageServiceCategory;
      'cybersecurity-page.services': CybersecurityPageServices;
      'cybersecurity-page.trust-points': CybersecurityPageTrustPoints;
      'demo-book-page.feedback': DemoBookPageFeedback;
      'demo-book-page.list-points': DemoBookPageListPoints;
      'faq.faq-item': FaqFaqItem;
      'gcp-page.benefit-card': GcpPageBenefitCard;
      'gcp-page.by-the-numbers-section': GcpPageByTheNumbersSection;
      'gcp-page.case-study-card': GcpPageCaseStudyCard;
      'gcp-page.case-study-section': GcpPageCaseStudySection;
      'gcp-page.certification-card': GcpPageCertificationCard;
      'gcp-page.certifications-section': GcpPageCertificationsSection;
      'gcp-page.common-questions-section': GcpPageCommonQuestionsSection;
      'gcp-page.comparison-column': GcpPageComparisonColumn;
      'gcp-page.comparison-point': GcpPageComparisonPoint;
      'gcp-page.comparison-section': GcpPageComparisonSection;
      'gcp-page.dashboard-stat': GcpPageDashboardStat;
      'gcp-page.faq-section': GcpPageFaqSection;
      'gcp-page.final-cta-section': GcpPageFinalCtaSection;
      'gcp-page.hero-section': GcpPageHeroSection;
      'gcp-page.hero-trust-point': GcpPageHeroTrustPoint;
      'gcp-page.partner-dashboard-card': GcpPagePartnerDashboardCard;
      'gcp-page.service-card': GcpPageServiceCard;
      'gcp-page.services-portfolio': GcpPageServicesPortfolio;
      'gcp-page.tag': GcpPageTag;
      'gcp-page.use-case-card': GcpPageUseCaseCard;
      'gcp-page.use-cases-section': GcpPageUseCasesSection;
      'gcp-page.why-thynkwise-gcp': GcpPageWhyThynkwiseGcp;
      'get-assessment-page.assessment-quiz-section': GetAssessmentPageAssessmentQuizSection;
      'get-assessment-page.contact-form-section': GetAssessmentPageContactFormSection;
      'get-assessment-page.delivery-box': GetAssessmentPageDeliveryBox;
      'get-assessment-page.faq-section': GetAssessmentPageFaqSection;
      'get-assessment-page.finding-card': GetAssessmentPageFindingCard;
      'get-assessment-page.hero-badge': GetAssessmentPageHeroBadge;
      'get-assessment-page.hero-section': GetAssessmentPageHeroSection;
      'get-assessment-page.quiz-option': GetAssessmentPageQuizOption;
      'get-assessment-page.quiz-question': GetAssessmentPageQuizQuestion;
      'get-assessment-page.recommendation-card': GetAssessmentPageRecommendationCard;
      'get-assessment-page.results-section': GetAssessmentPageResultsSection;
      'get-assessment-page.role-option': GetAssessmentPageRoleOption;
      'get-assessment-page.score-card': GetAssessmentPageScoreCard;
      'gpuaas-page.card': GpuaasPageCard;
      'gpuaas-page.faq': GpuaasPageFaq;
      'gpuaas-page.framework-stack': GpuaasPageFrameworkStack;
      'gpuaas-page.gpu-architecture': GpuaasPageGpuArchitecture;
      'gpuaas-page.gpu-architecture-types': GpuaasPageGpuArchitectureTypes;
      'gpuaas-page.gpu-architecture-vendors': GpuaasPageGpuArchitectureVendors;
      'gpuaas-page.gpu-card': GpuaasPageGpuCard;
      'gpuaas-page.gpu-server-oem-partners': GpuaasPageGpuServerOemPartners;
      'gpuaas-page.gpuaas-delivery-models': GpuaasPageGpuaasDeliveryModels;
      'gpuaas-page.gpuaas-who-deploys': GpuaasPageGpuaasWhoDeploys;
      'gpuaas-page.hero': GpuaasPageHero;
      'gpuaas-page.outcomes': GpuaasPageOutcomes;
      'gpuaas-page.partner-ecosystem': GpuaasPagePartnerEcosystem;
      'gpuaas-page.section-1': GpuaasPageSection1;
      'gpuaas-page.turnkey-systems': GpuaasPageTurnkeySystems;
      'gpuaas-page.types': GpuaasPageTypes;
      'gpuaas-page.workload-library': GpuaasPageWorkloadLibrary;
      'home-page.cards': HomePageCards;
      'home-page.client-outcomes': HomePageClientOutcomes;
      'home-page.cloud-provider': HomePageCloudProvider;
      'home-page.cta': HomePageCta;
      'home-page.faq': HomePageFaq;
      'home-page.hero': HomePageHero;
      'home-page.industry': HomePageIndustry;
      'home-page.industry-card': HomePageIndustryCard;
      'home-page.outcomes-card': HomePageOutcomesCard;
      'home-page.service': HomePageService;
      'home-page.service-card': HomePageServiceCard;
      'home-page.stat': HomePageStat;
      'home-page.testimonial': HomePageTestimonial;
      'home-page.value-item': HomePageValueItem;
      'home-page.why-card': HomePageWhyCard;
      'home-page.why-thynkwise': HomePageWhyThynkwise;
      'indian-sovereign-cloud-page.benefit-card': IndianSovereignCloudPageBenefitCard;
      'indian-sovereign-cloud-page.case-studies-section': IndianSovereignCloudPageCaseStudiesSection;
      'indian-sovereign-cloud-page.case-study-card': IndianSovereignCloudPageCaseStudyCard;
      'indian-sovereign-cloud-page.case-study-metric': IndianSovereignCloudPageCaseStudyMetric;
      'indian-sovereign-cloud-page.common-questions-section': IndianSovereignCloudPageCommonQuestionsSection;
      'indian-sovereign-cloud-page.comparison-column': IndianSovereignCloudPageComparisonColumn;
      'indian-sovereign-cloud-page.comparison-item': IndianSovereignCloudPageComparisonItem;
      'indian-sovereign-cloud-page.comparison-section': IndianSovereignCloudPageComparisonSection;
      'indian-sovereign-cloud-page.compliance-credential-card': IndianSovereignCloudPageComplianceCredentialCard;
      'indian-sovereign-cloud-page.dashboard-card': IndianSovereignCloudPageDashboardCard;
      'indian-sovereign-cloud-page.dashboard-row': IndianSovereignCloudPageDashboardRow;
      'indian-sovereign-cloud-page.faq-section': IndianSovereignCloudPageFaqSection;
      'indian-sovereign-cloud-page.final-cta-section': IndianSovereignCloudPageFinalCtaSection;
      'indian-sovereign-cloud-page.hero-section': IndianSovereignCloudPageHeroSection;
      'indian-sovereign-cloud-page.hero-trust-stat': IndianSovereignCloudPageHeroTrustStat;
      'indian-sovereign-cloud-page.partner-badge': IndianSovereignCloudPagePartnerBadge;
      'indian-sovereign-cloud-page.partner-card': IndianSovereignCloudPagePartnerCard;
      'indian-sovereign-cloud-page.partner-ecosystem-section': IndianSovereignCloudPagePartnerEcosystemSection;
      'indian-sovereign-cloud-page.service-card': IndianSovereignCloudPageServiceCard;
      'indian-sovereign-cloud-page.services-section': IndianSovereignCloudPageServicesSection;
      'indian-sovereign-cloud-page.stat-band-section': IndianSovereignCloudPageStatBandSection;
      'indian-sovereign-cloud-page.stat-item': IndianSovereignCloudPageStatItem;
      'indian-sovereign-cloud-page.text-tag': IndianSovereignCloudPageTextTag;
      'indian-sovereign-cloud-page.use-case-card': IndianSovereignCloudPageUseCaseCard;
      'indian-sovereign-cloud-page.use-cases-section': IndianSovereignCloudPageUseCasesSection;
      'indian-sovereign-cloud-page.why-partner-section': IndianSovereignCloudPageWhyPartnerSection;
      'industry-usecases.tags': IndustryUsecasesTags;
      'industry-usecases.usecase': IndustryUsecasesUsecase;
      'managed-services-page.case-studies': ManagedServicesPageCaseStudies;
      'managed-services-page.faq': ManagedServicesPageFaq;
      'managed-services-page.final-cta': ManagedServicesPageFinalCta;
      'managed-services-page.hero': ManagedServicesPageHero;
      'managed-services-page.industry-usecases': ManagedServicesPageIndustryUsecases;
      'managed-services-page.items': ManagedServicesPageItems;
      'managed-services-page.managed-service-pillars': ManagedServicesPageManagedServicePillars;
      'managed-services-page.pillar': ManagedServicesPagePillar;
      'managed-services-page.process-steps': ManagedServicesPageProcessSteps;
      'managed-services-page.service-catalogue': ManagedServicesPageServiceCatalogue;
      'managed-services-page.service-category': ManagedServicesPageServiceCategory;
      'managed-services-page.services': ManagedServicesPageServices;
      'managed-services-page.stats': ManagedServicesPageStats;
      'managed-services-page.stats-band': ManagedServicesPageStatsBand;
      'managed-services-page.why-card': ManagedServicesPageWhyCard;
      'managed-services-page.why-thynkwise': ManagedServicesPageWhyThynkwise;
      'managed-services.process-step': ManagedServicesProcessStep;
      'shared.card': SharedCard;
      'shared.card-1': SharedCard1;
      'shared.card-2': SharedCard2;
      'shared.card-3': SharedCard3;
      'shared.card-4': SharedCard4;
      'shared.card-5': SharedCard5;
      'shared.cta': SharedCta;
      'shared.faq': SharedFaq;
      'shared.gpu-availability': SharedGpuAvailability;
      'shared.heading': SharedHeading;
      'shared.hero': SharedHero;
      'shared.points': SharedPoints;
      'shared.question-and-answer': SharedQuestionAndAnswer;
      'shared.spec': SharedSpec;
      'shared.stat': SharedStat;
      'stats-band.stats': StatsBandStats;
    }
  }
}
