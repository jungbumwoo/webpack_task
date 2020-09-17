import '../css/base.css'
console.log('Webpack 번들링 실행');

import $ from 'jQuery';

(function() {
    $(document).ready(function(){
        $('p').text('jQuery 를 불러와 사용하고 있습니다.')
    });
})();