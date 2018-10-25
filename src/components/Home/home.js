import React from 'react';
import NewsSlider from '../Widget/NewsSlider/slider'
const Home = () => {
    return (
        <div>
            <NewsSlider
              type = "featured"
              start = {0}
              stop = {3}
              settings = {{
                  dots:false
              }}
            />
        </div>
    );
};

export default Home;
