import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminAuditLog extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_audit_logs';
  info: {
    displayName: 'Audit Log';
    pluralName: 'audit-logs';
    singularName: 'audit-log';
  };
  options: {
    draftAndPublish: false;
    timestamps: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date: Schema.Attribute.DateTime & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::audit-log'> &
      Schema.Attribute.Private;
    payload: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    user: Schema.Attribute.Relation<'oneToOne', 'admin::user'>;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutPageAboutPage extends Struct.SingleTypeSchema {
  collectionName: 'about_pages';
  info: {
    displayName: 'about page';
    pluralName: 'about-pages';
    singularName: 'about-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    by_the_numbers: Schema.Attribute.Component<
      'about-page.by-the-numbers',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta_section: Schema.Attribute.Component<'shared.cta', false>;
    faq: Schema.Attribute.Component<'shared.faq', false>;
    hero: Schema.Attribute.Component<'about.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-page.about-page'
    > &
      Schema.Attribute.Private;
    our_mission: Schema.Attribute.Component<'about-page.our-mission', false>;
    our_values: Schema.Attribute.Component<'about-page.our-value', false>;
    publishedAt: Schema.Attribute.DateTime;
    stats_band: Schema.Attribute.Component<'about-page.stats-band', false>;
    technology_partners: Schema.Attribute.Component<
      'about-page.technology-partners',
      false
    >;
    the_team: Schema.Attribute.Component<'about-page.the-team', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    where_we_are: Schema.Attribute.Component<'about-page.where-we-are', false>;
  };
}

export interface ApiAwsPageAwsPage extends Struct.SingleTypeSchema {
  collectionName: 'aws_pages';
  info: {
    displayName: 'aws page';
    pluralName: 'aws-pages';
    singularName: 'aws-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aws_services: Schema.Attribute.Component<
      'managed-services-page.service-catalogue',
      false
    >;
    by_the_numbers: Schema.Attribute.Component<'shared.stat', true>;
    certified_expertise: Schema.Attribute.Component<
      'aws-page.certified-expertise',
      false
    >;
    client_outcomes: Schema.Attribute.Component<
      'aws-page.client-outcomes',
      false
    >;
    common_questions: Schema.Attribute.Component<'shared.faq', false>;
    comparison: Schema.Attribute.Component<'aws-page.comparison', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    faq: Schema.Attribute.Component<'shared.faq', false>;
    hero: Schema.Attribute.Component<'aws-page.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aws-page.aws-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    real_world_aws: Schema.Attribute.Component<
      'aws-page.real-world-aws',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    why_thynkwise: Schema.Attribute.Component<
      'managed-services-page.why-thynkwise',
      false
    >;
  };
}

export interface ApiAzurePageAzurePage extends Struct.SingleTypeSchema {
  collectionName: 'azure_pages';
  info: {
    displayName: 'azure page';
    pluralName: 'azure-pages';
    singularName: 'azure-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    azure_for_bfsi_india: Schema.Attribute.Component<
      'azure-page.azure-for-bfsi-india',
      false
    >;
    azure_services: Schema.Attribute.Component<
      'managed-services-page.service-catalogue',
      false
    >;
    azure_success_stories: Schema.Attribute.Component<
      'aws-page.client-outcomes',
      false
    >;
    common_questions: Schema.Attribute.Component<'shared.faq', false>;
    comparison: Schema.Attribute.Component<'aws-page.comparison', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta: Schema.Attribute.Component<'shared.cta', false>;
    faq: Schema.Attribute.Component<'shared.faq', false>;
    hero: Schema.Attribute.Component<'aws-page.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::azure-page.azure-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    team_credentials: Schema.Attribute.Component<
      'aws-page.certified-expertise',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    why_azure: Schema.Attribute.Component<
      'managed-services-page.why-thynkwise',
      false
    >;
  };
}

export interface ApiBookDemoPageBookDemoPage extends Struct.SingleTypeSchema {
  collectionName: 'book_demo_pages';
  info: {
    displayName: 'Book Demo Page';
    pluralName: 'book-demo-pages';
    singularName: 'book-demo-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    faq: Schema.Attribute.Component<'faq.faq-item', true>;
    feedback: Schema.Attribute.Component<'demo-book-page.feedback', false>;
    list_point: Schema.Attribute.Component<'demo-book-page.list-points', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::book-demo-page.book-demo-page'
    > &
      Schema.Attribute.Private;
    points: Schema.Attribute.Component<'shared.points', true>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBookDemoSubmissionBookDemoSubmission
  extends Struct.CollectionTypeSchema {
  collectionName: 'book_demo_submissions';
  info: {
    description: 'Stores submissions received from the Book Demo page form';
    displayName: 'Book Demo Submission';
    pluralName: 'book-demo-submissions';
    singularName: 'book-demo-submission';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    bookingStatus: Schema.Attribute.Enumeration<
      ['new', 'contacted', 'scheduled', 'completed', 'cancelled']
    > &
      Schema.Attribute.DefaultTo<'new'>;
    businessEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    companyName: Schema.Attribute.String & Schema.Attribute.Required;
    companySize: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    currentCloudProvider: Schema.Attribute.String;
    designation: Schema.Attribute.String & Schema.Attribute.Required;
    discussionNotes: Schema.Attribute.Text;
    fullName: Schema.Attribute.String & Schema.Attribute.Required;
    industry: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::book-demo-submission.book-demo-submission'
    > &
      Schema.Attribute.Private;
    meetingFormat: Schema.Attribute.String;
    metadata: Schema.Attribute.JSON;
    monthlyCloudSpend: Schema.Attribute.String;
    preferredDate: Schema.Attribute.Date;
    preferredTimeSlot: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    sourcePage: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'book-demo'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatsappPhone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiCloudMigrationPageCloudMigrationPage
  extends Struct.SingleTypeSchema {
  collectionName: 'cloud_migration_pages';
  info: {
    displayName: 'cloud-migration-page';
    pluralName: 'cloud-migration-pages';
    singularName: 'cloud-migration-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    case_study: Schema.Attribute.Component<
      'managed-services-page.case-studies',
      false
    >;
    cloud_migration_hero: Schema.Attribute.Component<
      'cloud-migration-page.cloud-migration-hero',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta_section: Schema.Attribute.Component<
      'managed-services-page.final-cta',
      false
    >;
    faq: Schema.Attribute.Component<'managed-services-page.faq', false>;
    industry_migration: Schema.Attribute.Component<
      'cloud-migration-page.industry-migration',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cloud-migration-page.cloud-migration-page'
    > &
      Schema.Attribute.Private;
    migration_process: Schema.Attribute.Component<
      'cloud-migration-page.migration-process',
      false
    >;
    migration_risk_management: Schema.Attribute.Component<
      'cloud-migration-page.migration-risk-management',
      false
    >;
    migration_service_types: Schema.Attribute.Component<
      'cloud-migration-page.migration-service-types',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    quick_answer: Schema.Attribute.Component<
      'cloud-migration-page.quick-answer',
      true
    >;
    six_r_framework: Schema.Attribute.Component<
      'cloud-migration-page.six-r-framework',
      false
    >;
    trust_stats: Schema.Attribute.Component<
      'cloud-migration-page.trust-stats',
      true
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiContactPageContactPage extends Struct.SingleTypeSchema {
  collectionName: 'contact_pages';
  info: {
    displayName: 'Contact Page';
    pluralName: 'contact-pages';
    singularName: 'contact-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contact_channels: Schema.Attribute.Component<
      'contact-page.contact-channels-section',
      false
    >;
    contact_form: Schema.Attribute.Component<
      'contact-page.contact-form-section',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'contact-page.faq-section', false>;
    faq_strip: Schema.Attribute.Component<
      'contact-page.faq-strip-section',
      false
    >;
    hero: Schema.Attribute.Component<'contact-page.hero-section', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-page.contact-page'
    > &
      Schema.Attribute.Private;
    offices: Schema.Attribute.Component<'contact-page.offices-section', false>;
    publishedAt: Schema.Attribute.DateTime;
    trust_band: Schema.Attribute.Component<
      'contact-page.trust-band-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCybersecurityPageCybersecurityPage
  extends Struct.SingleTypeSchema {
  collectionName: 'cybersecurity_pages';
  info: {
    displayName: 'cybersecurity-page';
    pluralName: 'cybersecurity-pages';
    singularName: 'cybersecurity-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta: Schema.Attribute.Component<'managed-services-page.final-cta', false>;
    cybersecurity_hero: Schema.Attribute.Component<
      'cybersecurity-page.cybersecurity-hero',
      false
    >;
    faq: Schema.Attribute.Component<'managed-services-page.faq', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cybersecurity-page.cybersecurity-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    security_case_studies: Schema.Attribute.Component<
      'managed-services-page.case-studies',
      false
    >;
    security_compliance_frameworks: Schema.Attribute.Component<
      'cybersecurity-page.security-compliance-frameworks',
      false
    >;
    security_domains: Schema.Attribute.Component<
      'cloud-migration-page.migration-service-types',
      false
    >;
    security_event: Schema.Attribute.Component<
      'cybersecurity-page.security-event',
      true
    >;
    security_partner: Schema.Attribute.Component<
      'cybersecurity-page.security-partners',
      false
    >;
    security_service_catalogue: Schema.Attribute.Component<
      'cybersecurity-page.security-service-catalogue',
      false
    >;
    security_stats_band: Schema.Attribute.Component<
      'managed-services-page.stats-band',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    why_thynkwise_security: Schema.Attribute.Component<
      'managed-services-page.why-thynkwise',
      false
    >;
  };
}

export interface ApiGcpPageGcpPage extends Struct.SingleTypeSchema {
  collectionName: 'gcp_pages';
  info: {
    displayName: 'gcp page';
    pluralName: 'gcp-pages';
    singularName: 'gcp-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    by_the_numbers: Schema.Attribute.Component<
      'gcp-page.by-the-numbers-section',
      false
    >;
    client_outcomes: Schema.Attribute.Component<
      'gcp-page.case-study-section',
      false
    >;
    common_questions: Schema.Attribute.Component<
      'gcp-page.common-questions-section',
      false
    >;
    comparison: Schema.Attribute.Component<
      'gcp-page.comparison-section',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'gcp-page.faq-section', false>;
    final_cta: Schema.Attribute.Component<'gcp-page.final-cta-section', false>;
    gcp_certifications: Schema.Attribute.Component<
      'gcp-page.certifications-section',
      false
    >;
    gcp_services_portfolio: Schema.Attribute.Component<
      'gcp-page.services-portfolio',
      false
    >;
    hero: Schema.Attribute.Component<'gcp-page.hero-section', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::gcp-page.gcp-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    real_world_gcp_in_india: Schema.Attribute.Component<
      'gcp-page.use-cases-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    why_thynkwise_gcp: Schema.Attribute.Component<
      'gcp-page.why-thynkwise-gcp',
      false
    >;
  };
}

export interface ApiGetAssessmentPageGetAssessmentPage
  extends Struct.SingleTypeSchema {
  collectionName: 'get_assessment_pages';
  info: {
    displayName: 'Get Assessment Page';
    pluralName: 'get-assessment-pages';
    singularName: 'get-assessment-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    assessment_quiz: Schema.Attribute.Component<
      'get-assessment-page.assessment-quiz-section',
      false
    >;
    contact_form: Schema.Attribute.Component<
      'get-assessment-page.contact-form-section',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'get-assessment-page.faq-section', false>;
    hero: Schema.Attribute.Component<'get-assessment-page.hero-section', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::get-assessment-page.get-assessment-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    results_section: Schema.Attribute.Component<
      'get-assessment-page.results-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGetAssessmentSubmissionGetAssessmentSubmission
  extends Struct.CollectionTypeSchema {
  collectionName: 'get_assessment_submissions';
  info: {
    description: 'Stores submissions received from the Get Assessment page';
    displayName: 'Get Assessment Submission';
    pluralName: 'get-assessment-submissions';
    singularName: 'get-assessment-submission';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    applicableRegulations: Schema.Attribute.JSON;
    biggestCloudPainPoint: Schema.Attribute.String;
    businessEmail: Schema.Attribute.Email & Schema.Attribute.Required;
    cloudOperationsModel: Schema.Attribute.String;
    companyName: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    currentCloudProviders: Schema.Attribute.JSON;
    currentCloudSituation: Schema.Attribute.String;
    firstName: Schema.Attribute.String & Schema.Attribute.Required;
    investmentHorizon: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::get-assessment-submission.get-assessment-submission'
    > &
      Schema.Attribute.Private;
    metadata: Schema.Attribute.JSON;
    monthlyCloudSpend: Schema.Attribute.String;
    priorityOutcome: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    readinessGrade: Schema.Attribute.String;
    readinessScore: Schema.Attribute.Integer;
    recommendedActions: Schema.Attribute.JSON;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    scoreDescription: Schema.Attribute.Text;
    sourcePage: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'get-assessment'>;
    submissionStatus: Schema.Attribute.Enumeration<
      ['new', 'reviewed', 'contacted', 'qualified', 'closed']
    > &
      Schema.Attribute.DefaultTo<'new'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whatsappPhone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiGpuaasPageGpuaasPage extends Struct.SingleTypeSchema {
  collectionName: 'gpuaas_pages';
  info: {
    displayName: 'gpuaas-page';
    pluralName: 'gpuaas-pages';
    singularName: 'gpuaas-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    common_questions: Schema.Attribute.Component<'shared.faq', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta_section: Schema.Attribute.Component<'shared.cta', false>;
    faq: Schema.Attribute.Component<'gpuaas-page.faq', false>;
    framework_stack: Schema.Attribute.Component<
      'gpuaas-page.framework-stack',
      false
    >;
    gpu_architecture: Schema.Attribute.Component<
      'gpuaas-page.gpu-architecture',
      false
    >;
    gpuaas_delivery_models: Schema.Attribute.Component<
      'gpuaas-page.gpuaas-delivery-models',
      false
    >;
    gpuaas_who_deploys: Schema.Attribute.Component<
      'gpuaas-page.gpuaas-who-deploys',
      false
    >;
    hero: Schema.Attribute.Component<'gpuaas-page.hero', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::gpuaas-page.gpuaas-page'
    > &
      Schema.Attribute.Private;
    outcomes: Schema.Attribute.Component<'gpuaas-page.outcomes', false>;
    partner_ecosystem: Schema.Attribute.Component<
      'gpuaas-page.partner-ecosystem',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    turnkey_systems: Schema.Attribute.Component<
      'gpuaas-page.turnkey-systems',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    why_thynkwise: Schema.Attribute.Component<
      'managed-services-page.why-thynkwise',
      false
    >;
    workload_library: Schema.Attribute.Component<
      'gpuaas-page.workload-library',
      false
    >;
  };
}

export interface ApiHomePageHomePage extends Struct.SingleTypeSchema {
  collectionName: 'home_pages';
  info: {
    displayName: 'Home Page';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ClientOutcomes: Schema.Attribute.Component<
      'home-page.client-outcomes',
      false
    >;
    cloudProvider: Schema.Attribute.Component<
      'home-page.cloud-provider',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta: Schema.Attribute.Component<'home-page.cta', false>;
    faq: Schema.Attribute.Component<'home-page.faq', true>;
    hero: Schema.Attribute.Component<'home-page.hero', false>;
    industry: Schema.Attribute.Component<'home-page.industry', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page.home-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    service: Schema.Attribute.Component<'home-page.service', false>;
    stat: Schema.Attribute.Component<'home-page.stat', true>;
    testimonial: Schema.Attribute.Component<'home-page.testimonial', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    valueItem: Schema.Attribute.Component<'home-page.value-item', true>;
    WhyThynkwise: Schema.Attribute.Component<'home-page.why-thynkwise', false>;
  };
}

export interface ApiIndianSovereignCloudPageIndianSovereignCloudPage
  extends Struct.SingleTypeSchema {
  collectionName: 'indian_sovereign_cloud_pages';
  info: {
    displayName: 'Indian Sovereign Cloud Page';
    pluralName: 'indian-sovereign-cloud-pages';
    singularName: 'indian-sovereign-cloud-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    case_studies: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.case-studies-section',
      false
    >;
    common_questions: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.common-questions-section',
      false
    >;
    comparison: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.comparison-section',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.faq-section',
      false
    >;
    final_cta: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.final-cta-section',
      false
    >;
    hero: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.hero-section',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::indian-sovereign-cloud-page.indian-sovereign-cloud-page'
    > &
      Schema.Attribute.Private;
    partner_ecosystem: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.partner-ecosystem-section',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    services: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.services-section',
      false
    >;
    stats_band: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.stat-band-section',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    use_cases: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.use-cases-section',
      false
    >;
    why_thynkwise: Schema.Attribute.Component<
      'indian-sovereign-cloud-page.why-partner-section',
      false
    >;
  };
}

export interface ApiManagedServicesPageManagedServicesPage
  extends Struct.SingleTypeSchema {
  collectionName: 'managed_services_pages';
  info: {
    displayName: 'managed-services-page';
    pluralName: 'managed-services-pages';
    singularName: 'managed-services-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    case_studies: Schema.Attribute.Component<
      'managed-services-page.case-studies',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'managed-services-page.faq', false>;
    final_cta: Schema.Attribute.Component<
      'managed-services-page.final-cta',
      false
    >;
    hero: Schema.Attribute.Component<'managed-services-page.hero', false>;
    industry_usecases: Schema.Attribute.Component<
      'managed-services-page.industry-usecases',
      false
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::managed-services-page.managed-services-page'
    > &
      Schema.Attribute.Private;
    managed_service_pillars: Schema.Attribute.Component<
      'managed-services-page.managed-service-pillars',
      false
    >;
    process_steps: Schema.Attribute.Component<
      'managed-services-page.process-steps',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    service_catalogue: Schema.Attribute.Component<
      'managed-services-page.service-catalogue',
      false
    >;
    stats_band: Schema.Attribute.Component<
      'managed-services-page.stats-band',
      false
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    why_thynkwise: Schema.Attribute.Component<
      'managed-services-page.why-thynkwise',
      false
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::audit-log': AdminAuditLog;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-page.about-page': ApiAboutPageAboutPage;
      'api::aws-page.aws-page': ApiAwsPageAwsPage;
      'api::azure-page.azure-page': ApiAzurePageAzurePage;
      'api::book-demo-page.book-demo-page': ApiBookDemoPageBookDemoPage;
      'api::book-demo-submission.book-demo-submission': ApiBookDemoSubmissionBookDemoSubmission;
      'api::cloud-migration-page.cloud-migration-page': ApiCloudMigrationPageCloudMigrationPage;
      'api::contact-page.contact-page': ApiContactPageContactPage;
      'api::cybersecurity-page.cybersecurity-page': ApiCybersecurityPageCybersecurityPage;
      'api::gcp-page.gcp-page': ApiGcpPageGcpPage;
      'api::get-assessment-page.get-assessment-page': ApiGetAssessmentPageGetAssessmentPage;
      'api::get-assessment-submission.get-assessment-submission': ApiGetAssessmentSubmissionGetAssessmentSubmission;
      'api::gpuaas-page.gpuaas-page': ApiGpuaasPageGpuaasPage;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::indian-sovereign-cloud-page.indian-sovereign-cloud-page': ApiIndianSovereignCloudPageIndianSovereignCloudPage;
      'api::managed-services-page.managed-services-page': ApiManagedServicesPageManagedServicesPage;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
