
 // from http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-url-parameter
 function getQueryParams(qs) {
     qs = qs.split("+").join(" ");

     var params = {}, tokens,
         re = /[?&]?([^=]+)=([^&]*)/g;

     while (tokens = re.exec(qs)) {
         params[decodeURIComponent(tokens[1])]
             = decodeURIComponent(tokens[2]);
     }

     return params;
 }
 
 $(function(){
   
   if (getQueryParams(document.location.search)['member']) {
     console.log('member')
     $('.members').show()
     $('.not_members').hide()
   } else {
     $('.members').hide()
     $('.not_members').show()
   }
   
 })
   