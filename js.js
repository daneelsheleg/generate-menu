document.addEventListener('DOMContentLoaded', function () {
    var input = prompt('меню');

    var ul = document.createElement('ul');
        var one = function()  {
            for(  var i = 1;  i-1 < input; ){
                var li = document.createElement('li');
                var p = document.createElement('p');
                ul.appendChild(li);
                li.appendChild(p);
                p.innerText = i++;
                p.style = 'text-align:center; padding-top:25px;'
                li.style = 'border:1px solid; border-radius:50%; width:100px; height:100px;display:inline-block;margin-bottom:10px; margin-right:10px;';
            }
    }
()
    document.body.appendChild(ul);


})