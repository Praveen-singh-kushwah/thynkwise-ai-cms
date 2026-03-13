import type { Schema, Struct } from '@strapi/strapi';

export interface HomePageCards extends Struct.ComponentSchema {
  collectionName: 'components_home_page_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    link: Schema.Attribute.String;
    link_text: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    services: Schema.Attribute.JSON;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
    }
  }
}
