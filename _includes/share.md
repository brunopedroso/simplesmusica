<style type="text/css" media="screen">
  
  .facebutton {
    font-family: 'lucida grande',tahoma,verdana,arial,sans-serif;
    font-size: 11px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: #3b5998;
    line-height: 1.28;
    float:left;
    margin-right: 10px;
  }

  .facebutton div {
    background: #eceef5;
    border: 1px solid #cad4e7;
    padding: 0 5px 2px 5px;
    width: 92px;
    height: 18px;
  }

  .facebutton:hover {
    text-decoration: none;
  }
  
  .facebuttontext {
    display: block;
    margin-top:3px;
  }
  
  .faceicon {
    background-image: url(/img/face_sprite.png);
    background-position: 0 0;
    background-size: auto;
    background-repeat: no-repeat;
    display: block;
    float:left;
    margin-top:3px;
    height: 14px;
    width: 14px;
  }
  
</style>

<div style='margin: 20px 0 0 0'>
  
  <a href="https://www.facebook.com/sharer/sharer.php?u=http://simplesmusica.com.br{{ page.url }}" class="facebutton" target="_blank" onclick="_gaq.push(['_trackEvent', 'face', 'share'])">
    <div>
      <span class="faceicon"></span>
      <span class='facebuttontext'> Compartilhar </span>
    </div>
  </a>

  <a href="https://twitter.com/share" class="twitter-share-button" data-count="none">Tuitar</a>
  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
  
</div>
