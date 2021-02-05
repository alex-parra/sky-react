import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

import BeerCard from './components/beer-card'
import Footer from './components/shared/footer'
import Header from './components/shared/header'
import Hero from './components/hero'
import Section from './components/layout/section'
import Wrapper from './components/layout/wrapper'

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
  }
`

function App() {
  const [data, setData] = useState({ beers: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.punkapi.com/v2/beers?page=1&per_page=10',
      );

      console.log(result.data);

      setData({beers: result.data});
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <MainWrapper>
        <Header />
        <Section>
          <Hero />
        </Section>
        
        <Section>
          {loading && 
            <div>loading....</div>
          }

          {!loading &&
            <Wrapper>
              <div className="grid">
                {data.beers.map((item, index) => (
                  <BeerCard key={index.toString()} image={item.image_url} title={item.name} description={item.brewers_tips}/>
                ))}
              </div>
            </Wrapper>
          }
        </Section>

        <Footer/>
      </MainWrapper>
    </div>
  );
}

export default App;
