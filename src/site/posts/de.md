---
layout: layouts/base.njk
title: Blog
locale: de
---
<div id="teaser">
  <div class="cover">
    <h1>Blog</h1>
    <h2>Der Weg zu einer einheitlichen Infrastruktur für offene Daten in Deutschland</h2>
  </div>
</div>

<ul class="listing">
{%- for page in collections.post -%}
{% if page.data.locale == locale and page.url != '/posts/de/' and page.url != '/posts/en/' %}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | date("YYYY-MM-DD") }}</time>
  </li>
{% endif %}
{%- endfor -%}
</ul>