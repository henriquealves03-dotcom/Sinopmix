import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, ShoppingCart, MapPin, Heart, Store, Plus, Minus, X, Truck, ShieldCheck } from 'lucide-react';
import './style.css';

const categories = [
  ['Todos','✨'],['Supermercado','🛒'],['Farmácia','💊'],['Restaurante','🍔'],
  ['Moda','👕'],['Casa e decoração','🏠'],['Eletrônicos','📱'],['Automotivo','🚗'],['Pet shop','🐾']
];
const products = [
  {id:1,name:'Banana nanica (kg)',store:'Supermercado Aurora',category:'Supermercado',price:5.99,old:7.49,emoji:'🍌'},
  {id:2,name:'Tomate (kg)',store:'Supermercado Aurora',category:'Supermercado',price:6.49,emoji:'🍅'},
  {id:3,name:'Arroz tipo 1 — 5 kg',store:'Supermercado Aurora',category:'Supermercado',price:24.90,old:28.90,emoji:'🍚'},
  {id:4,name:'Tênis casual',store:'Vitrine Urbana',category:'Moda',price:159.90,emoji:'👟'},
  {id:5,name:'Fone Bluetooth',store:'EletroSinop',category:'Eletrônicos',price:89.90,old:119.90,emoji:'🎧'},
  {id:6,name:'Kit de ferramentas',store:'Casa Aurora',category:'Casa e decoração',price:79.90,emoji:'🧰'},
  {id:7,name:'Pizza grande',store:'Forno da Praça',category:'Restaurante',price:49.90,emoji:'🍕'},
  {id:8,name:'Shampoo 350 ml',store:'Farmácia Sinop',category:'Farmácia',price:18.50,emoji:'🧴'},
];
const stores = [
  {name:'Supermercado Aurora',kind:'Supermercado',rating:'4,8',units:'2 unidades',emoji:'🛒'},
  {name:'Farmácia Sinop',kind:'Farmácia',rating:'4,9',units:'3 unidades',emoji:'💊'},
  {name:'Casa Aurora',kind:'Casa e materiais',rating:'4,7',units:'2 unidades',emoji:'🏠'},
  {name:'EletroSinop',kind:'Eletrônicos',rating:'4,8',units:'1 unidade',emoji:'📱'}
];
const money = n => n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

function App(){
  const [category,setCategory] = useState('Todos');
  const [search,setSearch] = useState('');
  const [cart,setCart] = useState({});
  const [showCart,setShowCart] = useState(false);
  const [tab,setTab] = useState('Início');
  const [notice,setNotice] = useState('');
  const visible = useMemo(()=>products.filter(p=>(category==='Todos'||p.category===category) && (p.name+' '+p.store).toLowerCase().includes(search.toLowerCase())),[category,search]);
  const count = Object.values(cart).reduce((a,b)=>a+b,0);
  const total = products.reduce((s,p)=>s+p.price*(cart[p.id]||0),0);
  function add(p){setCart(c=>({...c,[p.id]:(c[p.id]||0)+1}));setNotice(p.name+' adicionado ao carrinho');setTimeout(()=>setNotice(''),2200)}
  function change(id,delta){setCart(c=>{const n=(c[id]||0)+delta;const next={...c};if(n<=0)delete next[id];else next[id]=n;return next})}
  return <div className="app">
    <header className="top"><div className="brand"><div className="brand-icon">S</div><span>Sinop<span className="mix">Mix</span></span></div>
      <div className="location"><MapPin size={16}/> Entregar em: <b>Sinop – MT</b></div>
      <button className="cart-top" onClick={()=>setShowCart(true)} aria-label="Abrir carrinho"><ShoppingCart/><span>{count}</span></button>
    </header>
    <main>
      <section className="hero">
        <div className="hero-copy"><span className="eyebrow">O comércio da nossa cidade</span><h1>Sinop compra.<br/><em>SinopMix entrega.</em></h1><p>Encontre lojas, produtos e ofertas de Sinop em um só lugar.</p></div>
        <div className="hero-art"><div className="sun"></div><div className="shop-bag">🛍️</div><div className="city-label">SINOP · MT</div></div>
      </section>
      <div className="searchbar"><Search size={20}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="O que você procura em Sinop?"/></div>
      <section className="section">
        <div className="section-head"><div><span className="eyebrow">Explore</span><h2>Categorias</h2></div></div>
        <div className="categories">{categories.map(([name,emoji])=><button key={name} className={'category '+(category===name?'selected':'')} onClick={()=>{setCategory(name);setTab('Início')}}><span>{emoji}</span>{name}</button>)}</div>
      </section>
      <section className="section">
        <div className="section-head"><div><span className="eyebrow">Selecionados para você</span><h2>{category==='Todos'?'Ofertas em Sinop':category}</h2></div><button className="text-button" onClick={()=>setCategory('Todos')}>Ver tudo →</button></div>
        <div className="products">{visible.map(p=><article className="product" key={p.id}><div className="product-image"><span>{p.emoji}</span>{p.old&&<small>OFERTA</small>}<button className="heart" aria-label="Favoritar"><Heart size={17}/></button></div><div className="product-info"><small>{p.store}</small><b>{p.name}</b><div className="price">{money(p.price)} {p.old&&<del>{money(p.old)}</del>}</div><button className="add" onClick={()=>add(p)}><Plus size={17}/> Adicionar</button></div></article>)}</div>
        {visible.length===0&&<div className="empty">Não encontramos produtos com essa busca. Tente outra palavra ou categoria.</div>}
      </section>
      <section className="section">
        <div className="section-head"><div><span className="eyebrow">Compre perto de você</span><h2>Lojas em destaque</h2></div><button className="text-button" onClick={()=>setNotice('O catálogo de lojas será ampliado na próxima etapa.')}>Ver todas →</button></div>
        <div className="stores">{stores.map(s=><article className="store" key={s.name}><div className="store-icon">{s.emoji}</div><div><b>{s.name}</b><small>{s.kind} · ⭐ {s.rating}</small><small>{s.units}</small></div><button aria-label={'Ver '+s.name} onClick={()=>setNotice('Página de '+s.name+' será ativada na próxima etapa.')}>Ver loja</button></article>)}</div>
      </section>
      <section className="trust"><div><Truck/><b>Entrega local</b><small>Consulte as opções da loja</small></div><div><ShieldCheck/><b>Compra acompanhada</b><small>Pedidos em um só lugar</small></div><div><Store/><b>Valorize Sinop</b><small>Apoie o comércio local</small></div></section>
    </main>
    <nav className="bottom">{[['Início','⌂'],['Categorias','▦'],['Ofertas','%'],['Pedidos','□'],['Perfil','♙']].map(([n,i])=><button key={n} className={tab===n?'active':''} onClick={()=>{setTab(n);if(n==='Pedidos'||n==='Perfil')setNotice(n+': esta área será conectada na próxima etapa.');if(n==='Categorias')document.querySelector('.categories')?.scrollIntoView({behavior:'smooth'});if(n==='Ofertas'){setCategory('Todos');document.querySelector('.products')?.scrollIntoView({behavior:'smooth'})}}}><span>{i}</span>{n}</button>)}</nav>
    {showCart&&<div className="overlay" onClick={()=>setShowCart(false)}><aside className="drawer" onClick={e=>e.stopPropagation()}><div className="drawer-head"><h2>Meu carrinho</h2><button onClick={()=>setShowCart(false)}><X/></button></div>{count===0?<p className="empty">Seu carrinho está vazio.</p>:<>{products.filter(p=>cart[p.id]).map(p=><div className="cart-line" key={p.id}><span className="cart-emoji">{p.emoji}</span><div className="cart-desc"><b>{p.name}</b><small>{money(p.price)}</small></div><div className="qty"><button onClick={()=>change(p.id,-1)}><Minus size={14}/></button>{cart[p.id]}<button onClick={()=>change(p.id,1)}><Plus size={14}/></button></div></div>)}<div className="total"><span>Subtotal demonstrativo</span><b>{money(total)}</b></div><button className="checkout" onClick={()=>{setShowCart(false);setNotice('Checkout demonstrativo. Pagamentos ainda não estão ativados.')}}>Continuar compra</button><small className="disclaimer">Protótipo: nenhum pagamento será processado.</small></>}</aside></div>}
    {notice&&<div className="toast">{notice}</div>}
    <footer>SinopMix · Marketplace Local de Sinop – MT <span>Versão inicial demonstrativa</span></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);