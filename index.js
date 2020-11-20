// var list = document.getElementsByClassName('items-list')

// for(var i=0;i<list.length;i++)
// {
//     list[i].textContent = 0;
// }

// var submit = document.querySelector('button');
// submit.value ="SEND"


// var item = document.querySelectorAll('.items-list:nth-child(odd)');
// var items = document.querySelectorAll('.items-list:nth-child(even)');

// for(i=0;i<item.length;i++)
// {
//    item[i].style.backgroundColor ="#f4f4f4";
//    items[i].style.backgroundColor ="#ccc";
// }

// // var li = document.querySelector('.items-list:nth-child(odd)')
// // li.style.backgroundColor = 'blue'

// var list = document.querySelector('.items');
// list.parentNode.style.backgroundColor = "lightblue"
//console.log(list.parentNode);

// var newDiv = document.createElement("div");
// //console.log(newDiv)

// newDiv.setAttribute("text","Hello");
// var text = document.createTextNode("Hello");
// newDiv.appendChild(text)

// var header = document.querySelector('header');
// //console.log(header)

// var h1= document.querySelector('#header-title');
// //console.log(h1)

// header.insertBefore(newDiv,h1)

// var ite = document.getElementsByClassName('items-list');
// console.log(ite[0])
// for(i=0;i<ite.length;i++)
// {
// ite[i].addEventListener('click',function()
// {
// //    document.querySelector('.items-list').textContent =0;
// console.log(ite[i])
// })
// }

var button = document.getElementById('Submit');

button.addEventListener('click',additem);
var deleteB = document.getElementById('items');

deleteB.addEventListener('click',deleteitem)

var fliter = document.getElementById("search");
fliter.addEventListener('keyup',filteritem)

function additem(e)
{
    e.preventDefault();
    var newitem = document.getElementById('item').value;
    // console.log(newitem);
    var li = document.createElement('li');
    li.className ='items-list';
    li.appendChild(document.createTextNode(newitem));
     var deletB = document.createElement('button');
     deletB.className = 'items-list item-button';
     deletB.appendChild(document.createTextNode('X'));
     li.appendChild(deletB);
 
     var items = document.getElementById("items")

     items.appendChild(li);    
    }



function deleteitem(e)
{

    //console.log(1)
    //console.log(e.target.classList.contains('item-button'))
    if(e.target.classList.contains('item-button'))
    {
        var li = e.target.parentElement;
        deleteB.removeChild(li)
    }
}

function filteritem(e)
{
    var text = e.target.value.toLowerCase();
    var item = items.getElementsByTagName('li');
   Array.from(item).forEach(function(ite)
       {
         var itemname = ite.firstChild.textContent;
         if(itemname.toLowerCase().indexOf(text) != -1)
         {
             ite.style.display ="block";
         } else {
            ite.style.display = 'none';
         }
       })
}