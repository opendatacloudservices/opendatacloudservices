---
layout: layouts/home.njk
title: Home
locale: en
---
<div id="teaser">
  <div>
    <h1>Turning Open Data into Accessible Data</h1>
    <h2>Towards a unified infrastructure for Open Data in Germany</h2>
  </div>
</div>

<section class="feature">
  <div>
    <h3>The most complete Search Engine for Open Data in Germany</h3>
    <p>Using optimized meta data for open data across the whole of Germany, to find the data you are looking for.</p>
    <div class="link-container">
      <a href="https://auth.opendataservices.de" class="button"><span>Try it now</span>&nbsp;{% include "svg/arrow.njk" %}</a>
    </div>
  </div>
  <div>
    <img src="/images/feature.png" alt="" />
  </div>
</section>

<section class="feature">
  <div>
    <h3>Powered by data science and artificial intelligence</h3>
    <p>Using cutting edge data analysis and AI, we unify and structure the underlying data.</p>
    <div class="link-container">
      <a href="https://auth.opendataservices.de" class="button"><span>Learn more</span>&nbsp;{% include "svg/arrow.njk" %}</a>
    </div>
  </div>
  <div>
    <img src="/images/feature.png" alt="" />
  </div>
</section>

<section class="feature">
  <div>
    <h3>10.790 Municipalities. One&nbsp;Interfaces. To power your applications.</h3>
    <p>Fundamental data sets are going to be made available through standardised interfaces.</p>
    <div class="link-container">
      <a href="https://auth.opendataservices.de" class="button"><span>Our Open Data Roadmap</span>&nbsp;{% include "svg/arrow.njk" %}</a>
    </div>
  </div>
  <div>
    <img src="/images/feature.png" alt="" />
  </div>
</section>

<section class="content">
  <h3>FAQ</h3>
  <ul>
  {%- for f in faq %}
    <li>
      <h4>{{ f.title[locale] }}</h4>
      <p>{{ f.content[locale] | safe }}</p>
    </li>
  {%- endfor %}
  </ul>
</section>