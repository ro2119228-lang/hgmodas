
const produtos=[
{nome:'Produto 1',preco:99.90},
{nome:'Produto 2',preco:129.90},
{nome:'Produto 3',preco:149.90},
{nome:'Produto 4',preco:89.90},
{nome:'Produto 5',preco:199.90},
{nome:'Produto 6',preco:79.90}
];

let total=0;
const area=document.getElementById('produtos');

produtos.forEach(p=>{
 const d=document.createElement('div');
 d.className='card';
 d.innerHTML=`<div class="img">Adicionar Foto</div><h3>${p.nome}</h3><p>R$ ${p.preco}</p><button onclick="add('${p.nome}',${p.preco})">Adicionar ao Carrinho</button>`;
 area.appendChild(d);
});

window.add=function(nome,preco){
 const li=document.createElement('li');
 li.textContent=`${nome} - R$ ${preco}`;
 document.getElementById('carrinho').appendChild(li);
 total+=preco;
 document.getElementById('total').textContent=total.toFixed(2);
}
