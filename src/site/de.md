---
layout: layouts/home.njk
title: Home
locale: de
---
<div id="teaser">
  <div>
    <h1>Offene Daten finden und nutzen</h1>
    <h2>Der Weg zu einer einheitlichen Infrastruktur für offene Daten in Deutschland</h2>
  </div>
</div>

<section class="feature">
  <div>
    <h3>Die wahrscheinlich beste Suchmaschine für offene Daten in Deutschland</h3>
    <p>Optimierte Metadaten erlauben das schnelle und zielsichere Finden von offenen Daten aus ganz Deutschland.</p>
    <div class="link-container">
      <a href="https://auth.opendataservices.de" class="button"><span>Jetzt ausprobieren</span>&nbsp;{% include "svg/arrow.njk" %}</a>
    </div>
  </div>
  <div>
    <img src="/images/feature.png" alt="" />
  </div>
</section>

<section class="feature">
  <div>
    <h3>Mit Data Science und Künstlicher Intelligenz zu neuem Mehrwert</h3>
    <p>Mithilfe modernster Anlyse&shy;verfahren und KI werden Daten vereinheitlicht und strukturiert.</p>
    <div class="link-container">
      <a href="https://auth.opendataservices.de" class="button"><span>Jetzt mehr erfahren</span>&nbsp;{% include "svg/arrow.njk" %}</a>
    </div>
  </div>
  <div>
    <img src="/images/KI_ML@2x.png" alt="" />
  </div>
</section>

<section class="feature">
  <div>
    <h3>10.790 Gemeinden. Eine&nbsp;Schnittstelle. Anwendungen der nächsten Generation.</h3>
    <p>Die wichtigsten Daten Deutschlands über standar&shy;disierte Schnittstellen abrufen.</p>
    <div class="link-container">
      <a href="https://auth.opendataservices.de" class="button"><span>Unsere Open Data Roadmap</span>&nbsp;{% include "svg/arrow.njk" %}</a>
    </div>
  </div>
  <div>
    <img src="/images/Standortanalyse@2x.png" alt="" />
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