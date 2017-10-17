import './style/style.scss';
import $ from 'jquery';

$(document).ready(() => {
  $.getJSON('https://baconipsum.com/api/?callback=?', {
      'type': 'meat-and-filler',
      'start-with-lorem': '0',
      'sentences': '1'
    }, (baconGoodness) => {
      // if (baconGoodness && baconGoodness.length > 0) {
        $(".autofill").html(baconGoodness);
        // for (var i = 0; i < baconGoodness.length; i++)
          // $("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
      // }
    });
});
