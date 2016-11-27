---
layout: default
---

{% include base.html %}

<br/>
<a href='{{base}}/index.html'> &lt;&lt; Simples Música</a>

<div class="row-fluid">
  <div class="span6 offset4">

    <header>
      <h1>
        {{ page.title }}
        <span style="font-size:0.4em; color:#ccc">{{ page.date | date: "%d/%m/%Y" }}</span>
      </h1>

    </header>

    <p class="lead" style="color:#aaa">{{ page.description }}</p>

    {% include share.md %}

    <section class="entry" style='margin-top:20px'>{{ content }}</section>

    {% include share.md %}
    <div class='not_members'>
      {% include form_assinar_horizontal.md %}
    </div>

  </div>
</div>

<br/><br/><br/>

<script type="text/javascript" charset="utf-8">
  {% include scripts.js %}
</script>