---
layout: default
---

<br/>
<a href='{{site.baseurl}}/index.html'> &lt;&lt; Simples Música</a>

<div class="row-fluid">
  <div class="span8 offset3">
  
    <header>
      <h1>
        {{ page.title }}
        <span style="font-size:0.4em; color:#ccc">{{ page.date | date: "%d/%m/%Y" }}</span>
      </h1>

    </header>
    
    <p class="lead" style="color:#aaa">{{ page.description }}</p>

    <section class="entry">{{ content }}</section>
        
    {% include bottom_post.md %}  
      
  </div>
</div>

