// Dynamic product data (price included for display)
const produtos = [
    {
        id: 1,
        nome: 'Quadro Absolute Brutus Pro',
        descricao: 'O quadro de bicicleta Absolute Brutus Pro 26 é projetado para bicicletas de montanha com rodas de 26 polegadas. É feito de alumínio 6061, um material resistente e leve, adequado para trilhas, terrenos acidentados, dirtjump e pumptrack.',
        categoria: 'quadros',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_619413-MLA99370904372_112025-F.webp',
        link: 'https://mercadolivre.com/sec/2jun4aN',
        preco: 539.90
    },
    {
        id: 2,
        nome: 'Manopla Gios 165mm',
        descricao: 'A manopla Gios GI-058A com comprimento de 165mm é ideal para ciclistas do Downhill, Dirt ou Freeride que desejam diferenciar o design da bike, sem abrir mão da firmeza e do conforto na hora de realizar manobras.',
        categoria: 'pecas',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_743043-MLA100111454829_122025-F.webp',
        link: 'https://mercadolivre.com/sec/2DLYp7T',
        preco: 27.99
    },
    {
        id: 3,
        nome: 'Pedal Bike Plataforma Alumínio Eixo Cromoly Rolamento Selado',
        descricao: 'Este pedal de plataforma de alumínio da marca GTA é um produto de alta qualidade, projetado para oferecer o máximo de desempenho e durabilidade.',
        categoria: 'pecas',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_857770-MLA99932607433_112025-F.webp',
        link: 'https://mercadolivre.com/sec/2vnFA9h',
        preco: 65.80
    },
    {
        id: 4,
        nome: 'Camisa Bike Mtb Fox Racing Ranger Drirelease Manga Longa',
        descricao: 'Camiseta Fox Ranger Drirelease Tred Mid  Manga Longa Estilo casual, desempenho profissional.\nA Ranger Drirelease Tred Mid combina o visual descontraído da sua camiseta favorita com tecnologias avançadas de absorção de umidade, mantendo você seco, confortável e com total liberdade durante seus treinos e pedais.',
        categoria: 'quadros',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_690532-MLB98648257691_112025-F-camisa-bike-mtb-fox-racing-ranger-drirelease-manga-longa.webp',
        link: 'https://mercadolivre.com/sec/1gpWhPv',
        preco: 389.02
    },
       {
        id: 5,
        nome: 'Oculos  Downhill  Similar 100% Racecrafte',
        descricao: 'O óculos vai mudar sua percepção de um óculos de proteção para trilha e motocross. Qualidade, elevado desempenho e conforto.',
        categoria: 'vestuario',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_619497-MLB90054316116_082025-F-oculos-motocross-downhill-ski-similar-100-racecrafte.webp',
        link: 'https://mercadolivre.com/sec/13EvVyQ',
        preco: 69.99
    },
       {
        id: 6,
        nome: 'Calça Asw Ride Bike Enduro Downhill Ciclismo Masculina',
        descricao: 'A nova CALÇA Ride da ASW tem tecido com hidro repelência dificultando a entrada de água durante os treinos e competições.',
        categoria: 'vestuario',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_881831-MLB94384315563_102025-F-calca-asw-ride-bike-enduro-downhill-ciclismo-masculina.webp',
        link: 'https://mercadolivre.com/sec/1vruD22',
        preco: 398.49
    },
       {
        id: 7,
        nome: 'Paralama Bike Dianteiro Rsd Mud Ivertido Compativel Manitou',
        descricao: 'Pedalar na lama é sempre uma missão complicada. A Boa notícia é que temos a linha completa de paralamas RSD para sua MTB ou Downhill!',
        categoria: 'pecas',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_602204-MLA100112235211_122025-F.webp',
        link: 'https://mercadolivre.com/sec/1dTJAFG',
        preco: 27.18
    },
       {
        id: 8,
        nome: 'Number Plate Downhill Hupi Cor Preto',
        descricao: 'A placa Number Plate Downhill Hupi - Preto é perfeita para os amantes de downhill que buscam qualidade e durabilidade em seus equipamentos. ',
        categoria: 'pecas',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_641995-MLA99623500444_122025-F.webp',
        link: 'https://mercadolivre.com/sec/2S2dBVs',
        preco: 29.90
    },
       {
        id: 9,
        nome: 'Luva Ciclismo Touch Screen Longa Mtb Bike Down Hill',
        descricao: 'Luva de ciclismo com tecnologia touch screen, ideal para praticantes de mountain bike, downhill e outras modalidades off-road. Proporciona conforto, proteção e controle total durante suas pedaladas, mesmo em condições adversas.',
        categoria: 'vestuario',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_877070-MLB104704279964_012026-F-luva-ciclismo-touch-screen-longa-mtb-bike-down-hill.webp',
        link: 'https://mercadolivre.com/sec/2ftdjQb',
        preco: 145.49
    },
       {
        id: 10,
        nome: 'Guidao Aluminio Moutain Bike 31,8 X 680mm Curvo Rise 30mm',
        descricao: 'Guidão de mountain bike em alumínio com design curvo e rise de 30mm, ideal para downhill e trilhas difíceis.',
        categoria: 'pecas',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_970626-MLB92382656160_092025-F-guidao-aluminio-moutain-bike-318-x-680mm-curvo-rise-30mm.webp',
        link: 'https://mercadolivre.com/sec/1nRYPdZ',
        preco: 51.22
    },
    {
        id: 11,
        nome: 'Capacete Bike Fechado Fullface Fox Proframe Protecao Mips',
        descricao: 'Capacete fechado fullface com proteção MIPS, ideal para ciclistas que buscam segurança e conforto em suas pedaladas.',
        categoria: 'vestuario',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_717022-MLB77570601457_072024-F-capacete-bike-fechado-fullface-fox-proframe-protecao-mips.webp',
        link: 'https://mercadolivre.com/sec/1Z5Y4wU',
        preco: 1899.00
    }
];

const container = document.getElementById('produtosContainer');
const searchBar = document.getElementById('searchBar');

function renderProdutos(list) {
    container.innerHTML = '';
    if (list.length === 0) {
        container.innerHTML = '<p class="no-results">Nenhum produto encontrado.</p>';
        return;
    }
    list.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'produto ' + prod.categoria;
        card.innerHTML = `
            <img src="${prod.imagem}" alt="${prod.nome}">
            <h3>${prod.nome}</h3>
            <p class="price">R$ ${prod.preco.toFixed(2)}</p>
            <p>${prod.descricao}</p>
            <div class="actions">
                <a href="#" onclick="openModal(${prod.id}); return false;">Ver detalhes</a>
            </div>
        `;
        container.appendChild(card);
    });
}

function mostraCategoria(cat) {
    let filtered = produtos;
    if (cat !== 'todos') {
        filtered = produtos.filter(p => p.categoria === cat);
    }
    renderProdutos(filtered);
    // hide banner welcome text when filtering
    toggleBannerText(cat !== 'todos' || searchBar.value.trim() !== '');
    // ensure user sees the results immediately
    const dest = document.getElementById('produtosContainer');
    if (dest) dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function pesquisaProduto() {
    const term = searchBar.value.toLowerCase();
    const filtered = produtos.filter(p => p.nome.toLowerCase().includes(term) || p.descricao.toLowerCase().includes(term));
    renderProdutos(filtered);
    // hide banner welcome text when there is a search term
    toggleBannerText(term !== '');
    // scroll to products area so results are visible
    const dest = document.getElementById('produtosContainer');
    if (dest) dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal logic
const modal = document.getElementById('produtoModal');

function openModal(id) {
    const prod = produtos.find(p => p.id === id);
    if (!prod) return;
    document.getElementById('modalImage').src = prod.imagem;
    document.getElementById('modalTitle').innerText = prod.nome;
    document.getElementById('modalDescription').innerText = prod.descricao;
    document.getElementById('modalLink').href = prod.link;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

// Responsive menu
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// Contact form (optional element)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Obrigado pelo contato, ' + document.getElementById('nome').value + '!');
        contactForm.reset();
    });
}

// show/hide scroll-to-top button & header/interactive effects
const toTopBtn = document.getElementById('toTopBtn');
const headerEl = document.querySelector('header');
const bannerEl = document.querySelector('.banner');

window.addEventListener('scroll', () => {
    const y = window.pageYOffset;

    if (y > 300) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }

    // fade header slightly when scrolling
    if (headerEl) {
        headerEl.style.opacity = y > 50 ? '0.9' : '1';
    }

    // no parallax: keep banner image fixed in place by CSS
    // (background-position set in stylesheet)

    // reveal products as they enter viewport
    revealOnScroll();
});

function revealOnScroll() {
    const items = document.querySelectorAll('.produto');
    const triggerBottom = window.innerHeight * 0.9;
    items.forEach(item => {
        const box = item.getBoundingClientRect();
        if (box.top < triggerBottom) {
            item.classList.add('visible');
        }
    });
}

// helper to show/hide banner text when searching/filtering
function toggleBannerText(hide) {
    const bc = document.querySelector('.banner-content');
    const banner = document.querySelector('.banner');
    if (!bc) return;
    if (hide) {
        bc.classList.add('hidden');
        if (banner) banner.classList.add('hidden');
    } else {
        bc.classList.remove('hidden');
        if (banner) banner.classList.remove('hidden');
    }
}

// Initialize page as soon as DOM is ready
// this will still run even if earlier parts of the script fail
// (guarded above), and ensures products appear on first access.
// also trigger initial reveal so cards animate in immediately.
document.addEventListener('DOMContentLoaded', () => {
    renderProdutos(produtos);
    revealOnScroll();
    // ensure banner text visible initially
    toggleBannerText(false);
});
