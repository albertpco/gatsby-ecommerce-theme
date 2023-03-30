import React from 'react';
import * as styles from './services.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ServiceCard from '../components/ProductCard/ServiceCard';
import { generateMockServiceData } from '../helpers/mock';
import Button from '../components/Button';
import Config from '../config.json';

const ServicesPage = () => {
  const [showFilter, setShowFilter] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { label: 'Services' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Our Services`}
          subtitle={
            'We offer a range of digital marketing services that help businesses grow and achieve their goals. From SEO and PPC to social media and content marketing, we have you covered.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>15 services</span>
            <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div
                className={`${styles.iconContainer} ${styles.sortContainer}`}
              >
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div>
            </div>
          </div>
          <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
          />
          <div className={styles.chipsContainer}>
            <Chip name={'SEO'} />
            <Chip name={'PPC'} />
            <Chip name={'Social Media'} />
            <Chip name={'Content Marketing'} />
          </div>
          {/*<div className={styles.serviceContainer}>
            {data.map((service) => (
              <ServiceCard key={service.id} data={service} />
            ))}
          </div> */}
          <div className={styles.loadMoreContainer}>
            <span>6 of 15</span>
            <Button fullWidth level={'secondary'}>
              LOAD MORE
            </Button>
          </div>
          <div className={styles.contentContainer}>
            <h2>Why Choose Our Digital Marketing Services?</h2>
            <p>
              Our digital marketing services are designed to help businesses grow and achieve their goals. We use the latest tools and techniques to deliver results-driven campaigns that increase traffic, improve engagement, and boost conversions. Here are some reasons why you should choose us:
            </p>
            <ul>
              <li>Experienced team of digital marketing professionals</li>
              <li>Comprehensive range of services to suit your business needs</li>
              <li>Proven track record of delivering results for clients</li>
              <li>Customized strategies tailored to your specific goals</li>
              <li>Transparent reporting and regular communication</li>
              <li>Flexible packages to fit your budget</li>
              </ul>
              <h2>Our Digital Marketing Services</h2>
              <p>
              We offer a range of digital marketing services to help businesses of all sizes achieve their goals. Our services include:
              </p>
              <ul>
              <li><strong>Search Engine Optimization (SEO):</strong> Increase your website's visibility in search engine results pages (SERPs) and drive more organic traffic to your site with our SEO services.</li>
              <li><strong>Pay-Per-Click (PPC) Advertising:</strong> Boost your online presence and drive targeted traffic to your site with our PPC advertising services.</li>
              <li><strong>Social Media Marketing:</strong> Engage with your audience and build brand awareness with our social media marketing services.</li>
              <li><strong>Email Marketing:</strong> Reach your customers directly and increase customer loyalty with our email marketing services.</li>
              <li><strong>Content Marketing:</strong> Create valuable content that resonates with your audience and drives traffic to your site with our content marketing services.</li>
              </ul>
              <p>
              Contact us today to learn more about how our digital marketing services can help your business grow and achieve its goals.
              </p>
              </div>
              </Container>
              </div>
            <LayoutOption />
          </Layout>
  );
};

export default ServicesPage;