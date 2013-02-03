<div>
  
  <a href="http://feeds.feedburner.com/simplesmusica" style="font-size: 1.3em;">
    Assine o feed!
    <img src="/img/feed.png" style="width:16px; margin-left: 5px">
  </a>

  <br/>
  
  <div style='margin-top:10px;font-size:0.9em'>
    (Ou <a id="link_assinar_email" style="cursor:pointer">receba atualizações por email</a>)
    <script type="text/javascript" charset="utf-8">
      $(function(){
        $('#link_assinar_email').click(function(e){
          $('#assinar_email').slideDown();
        });
      })
    </script>    
  </div>
  
  <div id="assinar_email" style="display:none">
    <form action="http://Notyet.us2.list-manage.com/subscribe/post?u=1add2b0d2d8fac83d25d4a1fe&amp;id=1df4229c10" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate style="margin:0">
      <input type="email" placeholder='Digite seu email' value="" name="EMAIL" id="mce-EMAIL" style='margin:5px 0 0 0; width:150px'>
      <input type="submit" value="Assinar!" name="subscribe" id="mc-embedded-subscribe" class="btn" style='margin-top:5px'>
      <br/>
      <span style='font-size:0.8em; margin-left:3px'>
        <a id='fique_tranquilo' style='cursor:pointer; text-decoration:underline'> fique tranquilo</a>
      </span>
      <script type="text/javascript" charset="utf-8">
        $(function(){
          $('#fique_tranquilo').click(function(e){
            $('#popup_fique_tranquilo').fadeIn();
            e.stopPropagation();
          });
          $('body').click(function(){
            $('#popup_fique_tranquilo').fadeOut();
          });
        })
      </script>
    </form>

    <div id="popup_fique_tranquilo">
      <ul>
        <li>Nada de spam</li>
        <li>Não vou passar seu email pra ninguém</li>
        <li>Você pode desistir sempre que quiser (as instruções vão no final de cada email)</li>
      </ul>
    </div>    
  </div>
  
</div>

