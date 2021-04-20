import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products';
import initialState from '../initialState';


const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@TU_USER"/>
        <meta name="twitter:creator" content="@TU_USER"/>
        <meta name="twitter:title" content="EC Merch Store"/>
        <meta name="twitter:description" content="EC Merch Store"/>
        <meta
          name="twitter:image"
          content=""
        />
        <meta property="og:title" content="EC Merch Store"/>
        <meta property="og:description" content="EC Merch Store"/>
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:url" content="platzistore.xyz" />
        <meta property="og:site_name" content="EC Merch Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
}

export default Home; 
