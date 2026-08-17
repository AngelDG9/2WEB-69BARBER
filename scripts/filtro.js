const products=[
 {id:1,name:"Pomada Matte 69",cat:"Cabello",price:14.90,icon:"🧴",desc:"Acabado mate, fijación firme y textura natural.",badge:"TOP"},
 {id:2,name:"Cera Premium 69",cat:"Cabello",price:12.90,icon:"🥫",desc:"Control y definición para cualquier peinado."},
 {id:3,name:"Aceite para Barba",cat:"Barba",price:15.90,icon:"🧴",desc:"Suaviza, hidrata y aporta brillo ligero.",badge:"BEST SELLER"},
 {id:4,name:"Bálsamo para Barba",cat:"Barba",price:16.90,icon:"🧴",desc:"Cuidado diario y control de la barba."},
 {id:5,name:"Champú Barber",cat:"Cuidado",price:13.90,icon:"🧼",desc:"Limpieza suave para cabello y cuero cabelludo."},
 {id:6,name:"Peine Profesional",cat:"Accesorios",price:8.90,icon:"🪮",desc:"Peine resistente para cortes y styling."},
 {id:7,name:"Cepillo para Barba",cat:"Barba",price:11.90,icon:"🪥",desc:"Fibras firmes para ordenar y peinar la barba."},
 {id:8,name:"Polvo Volumen 69",cat:"Cabello",price:17.90,icon:"✨",desc:"Volumen instantáneo y acabado natural.",badge:"NUEVO"}
];
let cart=JSON.parse(localStorage.getItem("69cart")||"[]");

const money=n=>n.toLocaleString("es-ES",{style:"currency",currency:"EUR"});
function renderProducts(cat="Todos"){
 const box=document.getElementById("products");
 box.innerHTML=products.filter(p=>cat==="Todos"||p.cat===cat).map(p=>`
 <article class="card">
   <div class="product-img">${p.badge?`<span class="badge">${p.badge}</span>`:""}${p.icon}</div>
   <div class="card-body">
    <div class="category">${p.cat}</div><h3>${p.name}</h3><p class="desc">${p.desc}</p>
    <div class="price">${money(p.price)}</div>
    <button class="add" onclick="addToCart(${p.id})">Añadir al carrito</button>
   </div>
 </article>`).join("");
}
function addToCart(id){
 const found=cart.find(x=>x.id===id);
 if(found) found.qty++; else cart.push({id,qty:1});
 save(); renderCart(); toast("Producto añadido al carrito");
}
function save(){localStorage.setItem("69cart",JSON.stringify(cart));updateCount()}
function updateCount(){document.getElementById("cartCount").textContent="( "+ cart.reduce((s,x)=>s+x.qty,0) + " )" }
function renderCart(){
 const box=document.getElementById("cartItems");
 if(!cart.length){box.innerHTML='<div class="empty">Tu carrito está vacío.<br>Elige tus productos favoritos.</div>';document.getElementById("cartTotal").textContent=money(0);return}
 let total=0;
 box.innerHTML=cart.map(item=>{
  const p=products.find(x=>x.id===item.id); const sub=p.price*item.qty; total+=sub;
  return `<div class="cart-row"><div class="thumb">${p.icon}</div><div><strong>${p.name}</strong><br><small>${money(p.price)} · ${p.cat}</small>
  <div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${item.qty}</span><button onclick="changeQty(${p.id},1)">+</button>
  <button class="remove" onclick="removeItem(${p.id})">Eliminar</button></div></div><strong>${money(sub)}</strong></div>`
 }).join("");
 document.getElementById("cartTotal").textContent=money(total);
}
function changeQty(id,d){const x=cart.find(i=>i.id===id);if(!x)return;x.qty+=d;if(x.qty<=0)cart=cart.filter(i=>i.id!==id);save();renderCart()}
function removeItem(id){cart=cart.filter(i=>i.id!==id);save();renderCart()}
function openCart(){renderCart();document.getElementById("overlay").classList.add("open")}
function closeCart(){document.getElementById("overlay").classList.remove("open")}
function checkout(){
 if(!cart.length){toast("Añade algún producto primero");return}
 const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);
 alert("Demo de checkout\\n\\nTotal del pedido: "+money(total)+"\\n\\nAquí puedes conectar Stripe, PayPal, WhatsApp o tu sistema de pedidos.");
}
function toast(text){const n=document.getElementById("notice");n.textContent=text;n.classList.add("show");setTimeout(()=>n.classList.remove("show"),1800)}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(b.dataset.cat)
}));
renderProducts();updateCount();