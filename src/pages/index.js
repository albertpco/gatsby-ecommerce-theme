import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
//import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
//import ProductCollectionGrid from '../components/ProductCollectionGrid';
//import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';


import * as styles from './index.module.css';
import { navigate } from 'gatsby';
import Highlight2 from '../components/Highlight/highlight2';

const IndexPage = () => {
  
  const goToShop = () => {
    navigate('/services');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Essentials for a Digital Footprint'}
        subtitle={'Climb Everest in your own digital way'}
        ctaText={'work with us'}
        ctaAction={goToShop}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          We are THE digital marketing agency to take you to {' '}
          <span className={styles.gold}>the summit.</span>
        </p>
        <p>
          Engage more <span className={styles.gold}>customers</span> and{' '}
          <span className={styles.gold}>grow your business</span>
        </p>
      </div>

      {/* Collection Container 
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'New Collection'} />
          <ProductCollectionGrid />
        </Container>
      </div>*/}

      {/* New Arrivals 
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/services'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div> */}

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight1.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin1.png'}
            miniImageAlt={'mini highlight image'}
            title={'Website Design and Development'}
            description={`Our website design and development services provide physical therapists with a customized website that is optimized for search engines, secure, and provides an excellent user experience. Our services include custom designs, responsive design, and mobile optimization, with pricing ranging from $2000-$5000 based on the scope and complexity of the website.`}
            textLink={'Get Ahead of the Competition'}
            link={'/services'}
          />
        </Container>
      </div>


      {/* Highlight 2  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight2
            image={'/highlightmin2.jpg'}
            altImage={'highlight image'}
            miniImage={'/highlight.png'}
            miniImageAlt={'mini highlight image'}
            title={'Search Engine Optimization (SEO)'}
            description={`Our SEO services help physical therapists rank higher in search engine results, increasing visibility and driving more traffic to their site. We optimize website content and structure, improving ranking for relevant keywords, with pricing ranging from $1000-$2500 per month based on the scope of work and competition for the targeted keywords.`}
            textLink={'Help your customers find YOU'}
            link={'/services'}
            
          />
        </Container>
      </div>

      {/* Promotion 
      <div className={styles.promotionContainer}>
        <Hero image={'/banner2.png'} title={`-50% off \n All Essentials`} />
        <div className={styles.linkContainers}>
          <Link to={'/services'}>WOMAN</Link>
          <Link to={'/services'}>MAN</Link>
        </div>
      </div> */}

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about Digital Everest'}
        quote={
          '“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”'
        }
      />

      {/* Blog Grid 
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Journal'} subtitle={'Notes on life and style'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Promotion 
      <div className={styles.sustainableContainer}>
        <Hero
          image={'/banner3.png'}
          title={'We are Sustainable'}
          subtitle={
            'From caring for our land to supporting our people, discover the steps we’re taking to do more for the world around us.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>*/}

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Styled by You'}
          subtitle={'Tag @digieverest to be featured.'}
        />
        {/*
        <div className={styles.socialContentGrid}>
          <img src={`/social/socialMedia1.png`} alt={'social media 1'} />
          <img src={`/social/socialMedia2.png`} alt={'social media 2'} />
          <img src={`/social/socialMedia3.png`} alt={'social media 3'} />
          <img src={`/social/socialMedia4.png`} alt={'social media 4'} />
        </div> */}
      </div> 

      
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
