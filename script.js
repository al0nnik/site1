const CONFIG = {
  storeName: "У Мадины",
  whatsappNumber: "79044159021",

  /*
    ПОДСКАЗКИ АДРЕСА

    По умолчанию работают бесплатно через OpenStreetMap (Nominatim), ключ не нужен.

    Для точных российских адресов (до дома и квартиры) используйте DaData
    через свой серверный прокси: разверните api/suggest.js, задайте там
    переменную окружения DADATA_TOKEN и укажите путь в dadataProxy (например "/api/suggest").
    Токен во фронтенде НЕ указывайте — он утечёт.
  */
  dadataProxy: "",
  dadataToken: "",
  addressCountry: "RU"
};

/*
  ФОТОГРАФИИ ТОВАРОВ
*/
const productImages = {
  1: "images/products/1.png",
  2: "images/products/7.png",
  3: "images/products/37.png",
  4: "images/products/35.png",
  5: "images/products/20.png",
  6: "images/products/52.png",
  7: "images/products/11.png",
  8: "images/products/49.png",
  9: "images/products/16.png",
  10: "images/products/45.png",
  11: "images/products/26.png",
  12: "images/products/39.png",
  13: "images/products/32.png",
  14: "images/products/19.png",
  15: "images/products/43.png",
  16: "images/products/31.1.png",
  17: "images/products/36.png",
  18: "images/products/50.png",
  19: "images/products/23.png",
  20: "images/products/22.png",
  21: "images/products/25.png",
  22: "images/products/29.png",
};

/*
  ОТДЕЛЬНЫЕ ФОТОГРАФИИ АРОМАТОВ
*/
const scentImages = {
  1: {
    "Rose-Pink": "images/scents/1.png",
    "Dahlia-Red": "images/scents/2.png",
    "Orchid-White": "images/scents/3.png",
    "Lotus-Purple": "images/scents/4.png",
    "Jasmine-Blue": "images/scents/5.png",
    "Sensitive": "images/scents/6.png",
    "Botanics": "images/scents/30.png",
  },
  2: {
    "Apple": "images/scents/7.png",
    "Lemon": "images/scents/8.png",
    "Power": "images/scents/9.png",
    "Orange": "images/scents/10.png"
  },
  3: {
    "Шампунь-Шелк":"images/scents/37.png", 
    "Шампунь-Кондиционер":"images/scents/38.png"
  },
  5: {
    "Mountain Freshness":"images/scents/20.png", 
    "Lavander Freshness":"images/scents/21.png"
  },
  6:{
    "Passion of Rose":"images/scents/52.png" ,
    "Mountain Freshness":"images/scents/53.png", 
    "Lavander Freshness":"images/scents/54.png", 
    "Lemon Freshness":"images/scents/55.png"
  },
  7:{
    "Purple Flower": "images/scents/11.png",
    "Pink Bouquet": "images/scents/12.png",
    "Magic Garden": "images/scents/13.png",
    "Spring Passion": "images/scents/14.png",
    "White Pearl": "images/scents/15.png"
  },
  10: {
    "White Pearl":"images/scents/45.png", 
    "Black Pearl":"images/scents/46.png", 
    "Eden's Pearl":"images/scents/47.png", 
    "Baroque Pearl":"images/scents/48.png"
  },
  11: {
    "Fruit Festival":"images/scents/26.png", 
    "Spring Breeze":"images/scents/27.png", 
    "Bergamot & Lavender":"images/scents/28.png"
  },
  12: {
    "Amore (Rose & Iris)":"images/scents/39.png", 
    "Men (Vetiver & Black Amber)":"images/scents/40.png", 
    "Morning (Jasmine & Sandalwood)":"images/scents/41.png", 
    "Night (Patchouli & Vanillia)":"images/scents/42.png"
  },
  13: {
    "Magical Touch":"images/scents/32.png", 
    "Soft Touch":"images/scents/33.png"
  },
  14: {
    "Rose Passion":"images/scents/19.png", 
    "Ocean Glamour":"images/scents/18.png", 
    "Garden Breeze":"images/scents/17.png"
  },
  15: {
    "Fresh":"images/scents/43.png", 
    "Harmony":"images/scents/44.png"
  },
  16: {
    "Антижир для кухни":"images/scents/31.1.png", 
    "Универсальный очиститель 50в1":"images/scents/31.2.png", 
    "Для удаления ржавчины и известкового налета":"images/scents/31.png"
  },
  18: {
    "Отбеливатель":"images/scents/50.png", 
    "Пятновыводитель":"images/scents/51.png"
  },
  19: {
    "Easy iron":"images/scents/23.png",
    "Color":"images/scents/24.png"
  },
};

const products = [
  {
    id: 1, name: "Кондиционер для белья",
    category: "Стирка", price: 400, tag: "Хит",
    blurb: "Бережная чистота на каждый день.",
    description: "Помогает сделать бельё мягче и добавить ему лёгкий аромат. Соблюдайте дозировку, указанную на этикетке. \nОбъём: 1440мл.",
    popular: 99, scent: ["Rose-Pink", "Dahlia-Red", "Orchid-White", "Lotus-Purple", "Jasmine-Blue", "Sensitive", "Botanics"]
  },
  {
    id: 2, name: "Средство для мытья посуды",
    category: "Для посуды", price: 200, tag: "Мягкость",
    blurb: "Мягкость ткани и приятный аромат.",
    description: " Густая пена и простая в ополаскивании формула обеспечивают идеальную чистоту. Тщательно ополаскивайте посуду питьевой водой.",
    popular: 94, scent: ["Apple", "Lemon", "Power", "Orange"]
  },
  {
    id: 3, name: "Шампунь Витэкс",
    category: "Для ухода", price: 350, tag: "Топ",
    blurb: "Скорая помощь для ослабленных волос.",
    description: "Шампунь с протеинами шелка для восстановления структуры волос. Нанесите на влажные волосы, вспеньте массажными движениями и тщательно смойте водой. Объём: 500мл.",
    popular: 91, scent: ["Шампунь-Шелк", "Шампунь-Кондиционер"]
  },
  {
    id: 4, name: "Гель-мыло хозяйственное «Лавандовое» Vesta 12в1",
    category: "Уборка", price: 250, tag: "ГОСТ 88%",
    blurb: "Мой безопасный дом с антибактериальным действием.",
    description: "Универсальное концентрированное средство для стирки белья, мытья посуды и очистки любых поверхностей. Эффективно удаляет даже масляные загрязнения и мазут. \nОбъём: 500мл.",
    popular: 85,
    },
  {
    id: 5, name: "Стиральный порошок ABC 3кг",
    category: "Стирка", price: 580,
    blurb: "Удаляет пятна при первой стирке даже в холодной воде.",
    description: "Новая улучшенная формула ABC Automat обеспечивает максимальную эффективность даже при низких температурах, эффективно удаляя пятна с самой первой стирки, не оставляя следов на белье. \nОбъём: 3кг.",
    popular: 96, scent: ["Mountain Freshness", "Lavander Freshness"]
  },
  {
    id: 6, name: "Стиральный порошок ABC 9кг",
    category: "Стирка", price: 1350, tag: "Выгодно",
   blurb: "Удаляет пятна при первой стирке даже в холодной воде.",
    description: "Новая улучшенная формула ABC Automat обеспечивает максимальную эффективность даже при низких температурах, эффективно удаляя пятна с самой первой стирки, не оставляя следов на белье. \nОбъём: 9кг.",
    popular: 94, scent: ["Passion of Rose", "Mountain Freshness", "Lavander Freshness", "Lemon Freshness"]
  },
  {
    id: 7, name: "Средство для пола и других поверхностей",
    category: "Уборка", price: 290, tag: "Хит",
    blurb: "Для повседневной уборки поверхностей.",
    description: "Средство для уборки, которое оставляет длительный свежий цветочный аромат после очистки. Специальная формула задерживает накопление пыли и придает поверхности блеск без разводов. \nОбъём: 900мл.",
    popular: 88, scent: ["Purple Flower", "Pink Bouquet", "Magic Garden", "Spring Passion", "White Pearl"]
  },
  {
    id: 8, name: "Стиральный порошок Puffy Multicolor",
    category: "Уборка", price: 1350, tag: "Выгодно",
    blurb: "Безупречная чистота и забота о цветных тканях.",
    description: "Концентрированный стиральный порошок для автоматической стирки цветного белья. Эффективно удаляет загрязнения, сохраняя первоначальный цвет и структуру волокон ткани. \nОбъём: 9кг.",
    popular: 76
  },
  {
    id: 9, name: "Средство против накипи и ржавчины «Дюден»",
    category: "Уборка", price: 190,
    blurb: "Быстрое удаление сложных известковых отложений.",
    description: "Эффективное средство для очистки чайников, кофеварок и других водонагревательных приборов от накипи и ржавчины. Продлевает срок службы техники. \nОбъём: 500мл.",
    popular: 77
  },
  {
    id: 10, name: "Жидкое мыло для рук Savon De Royal",
    category: "Уборка", price: 320, tag: "Luxury",
    blurb: "Изысканный уход и премиальный аромат для ваших рук.",
    description: "Жидкое крем-мыло в стильном дизайнерском флаконе деликатно очищает и увлажняет кожу. Обладает утонченной парфюмерной композицией. \nОбъём: 500мл.",
    popular: 89, scent: ["White Pearl", "Black Pearl", "Eden's Pearl", "Baroque Pearl"]
  },
  {
    id: 11, name: "Освежитель воздуха Kalyon",
    category: "Уборка", price: 290, tag: "Свежесть",
    blurb: "Эффективная нейтрализация запахов и длительный аромат.",
    description: "Жидкий освежитель воздуха с удобным курковым распылителем. Эффективная формула быстро очищает воздух, наполняя помещение утонченной парфюмерной композицией. Объём: 400мл.",
    popular: 80, scent: ["Fruit Festival", "Spring Breeze", "Bergamot & Lavender"]
  },
  {
    id: 12, name: "Парфюмированный гель для душа D'EXCLUSIVE",
    category: "Для себя", price: 590,
    blurb: "Роскошное очищение с утонченным шлейфом дорогого парфюма.",
    description: "Деликатно очищает кожу, окутывая её стойким изысканным ароматом и оставляя ощущение мягкости и свежести на весь день. \nОбъём: 500мл.",
    popular: 86, scent: ["Amore (Rose & Iris)", "Men (Vetiver & Black Amber)", "Morning (Jasmine & Sandalwood)", "Night (Patchouli & Vanillia)"]
  },
  {
    id: 13, name: "Кондиционер-Смягчитель для белья Puffy",
    category: "Стирка", price: 500,
    blurb: "Невероятная мягкость тканей и длительная свежесть вещей.",
    description: "Концентрированное средство облегчает глажку, снимает статическое напряжение и дарит белью приятный аромат. Рассчитан на 30 стирок. \nОбъём: 3л.",
    popular: 82, scent: ["Magical Touch", "Soft Touch"]
  },
  {
    id: 14, name: "Кондиционер для белья",
    category: "Стирка", price: 250,
    blurb: "Бережная чистота на каждый день.",
    description: "Помогает сделать бельё мягче и добавить ему лёгкий аромат. Соблюдайте дозировку, указанную на этикетке. \nОбъём: 1л.",
    popular: 93, scent: ["Rose Passion", "Ocean Glamour", "Garden Breeze"]
  },
  {
    id: 15, name: "Жидкий освежитель воздуха GRASS",
    category: "Уборка", price: 290,
    blurb: "Стойкий премиальный аромат на водной основе.",
    description: "Ароматизатор воздуха с курковым распылителем эффективно нейтрализует неприятные запахи, оставляя длительную свежесть без капель и разводов. \nОбъём: 400мл.",
    popular: 78, scent: ["Fresh", "Harmony"]
  },
  {
    id: 16, name: "Чистящее средство Maxidez Pinky Clean",
    category: "Уборка", price: 430, tag: "Без хлора",
    blurb: "Мощная чистота вашего дома без едкого запаха.",
    description: "Эффективные чистящие средства с триггерным распылителем для быстрого удаления стойких загрязнений, жира, известкового налета и ржавчины. \nОбъём: 500мл.",
    popular: 84, scent: ["Антижир для кухни", "Универсальный очиститель 50в1", "Для удаления ржавчины и известкового налета"]
  },
  {
    id: 17, name: "Хозяйственное мыло Grand Canal",
    category: "Уборка", price: 150,
    blurb: "Традиционное китайское мыло для удаления стойких пятен.",
    description: "Натуральное мыло на растительной основе для стирки и удаления сложных загрязнений. Бережно относится к тканям, легко выполаскивается и обладает легким свежим ароматом. \nВес: 200г.",
    popular: 83
  },
  {
    id: 18, name: "Кислородсодержащее средство Mr. Tony",
    category: "Стирка", price: 200,
    blurb: "Бережное удаление пятен и поддержание белизны тканей.",
    description: "Концентрированное порошкообразное средство с активным кислородом для эффективной стирки. Безопасно очищает волокна, сохраняет структуру ткани и нейтрализует неприятные запахи. \nВес: 500г.",
    popular: 81, scent: ["Отбеливатель", "Пятновыводитель"]
  },
  {
    id: 19, name: "Гель Для Стирки",
    category: "Стирка", price: 650,
    blurb: "Защита цвета и легкая глажка любимых вещей.",
    description: "Концентрированный жидкий гель эффективно справляется с загрязнениями, полностью вымывается из волокон ткани и сохраняет первоначальный вид одежды. Рассчитан на 50 стирок. \nОбъём: 3000мл.",
    popular: 87, scent: ["Easy iron", "Color"]
  },
  {
    id: 20, name: "Чистящее средство — Power of Hygiene",
    category: "Уборка", price: 390,
    blurb: "Густая формула и экстра гигиена для всего дома.",
    description: "ABC Ultra Concentrated Bleach обеспечивает дополнительную гигиену и очистку в течение более длительного периода на поверхностях благодаря своей концентрированной вязкости с помощью эффективной системы защиты. Объём: 750мл.",
    popular: 79
  },
  {
    id: 21, name: "Чистящий крем ABC Cream Аммиак",
    category: "Уборка", price: 190,
    blurb: "Мощная очистка с микрогранулами для всех поверхностей.",
    description: "Эффективный чистящий крем с добавлением аммиака легко удаляет жир, налет и стойкие загрязнения, не оставляя царапин и пятен. Подходит для кухонных плит, сантехники и ванн. \nОбъём: 500мл.",
    popular: 75
  },
  {
    id: 22, name: "Чистящий крем Kalyon Cream Cleaner Ammonia",
    category: "Уборка", price: 210,
    blurb: "Глубокое очищение сложных загрязнений без царапин.",
    description: "Концентрированный чистящий крем с аммиаком быстро удаляет застывший жир, нагар и въевшиеся пятна. Обладает быстрым эффектом и бережно очищает твердые поверхности. \nОбъём: 500мл.",
    popular: 74
  },
  {
    id: 23, name: "Скоро...", soon: true,
    category: "Скоро", price: 0, tag: "Скоро",
    blurb: "Новинка скоро появится в каталоге.",
    description: "", popular: 0
  },
  {
    id: 24, name: "Скоро...", soon: true,
    category: "Скоро", price: 0, tag: "Скоро",
    blurb: "Новинка скоро появится в каталоге.",
    description: "", popular: 0
  }
];

const money = n =>
  new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
  }).format(n);

const $ = id => document.getElementById(id);

const state = {
  category: "Все товары",
  search: "",
  sort: "popular",
  cart: [],
  detailId: null,
  detailScent: "",
  detailQty: 1,
  payment: "Наличными при получении"
};

const grid = $("productGrid");
const overlay = $("overlay");
const drawer = $("cartDrawer");

function esc(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function productById(id) {
  return products.find(p => p.id === Number(id));
}

function getProductImage(product, scent = "") {
  return scentImages[product.id]?.[scent]
    || productImages[product.id]
    || "";
}

function imageFallback(img) {
  img.onerror = null;
  img.style.display = "none";
}

function renderProducts() {
  let list = products.filter(p => {
    const matchesCategory =
      state.category === "Все товары" ||
      p.category === state.category;

    const searchable = [
      p.name,
      p.category,
      p.blurb,
      ...(p.scent || [])
    ].join(" ").toLowerCase();

    return matchesCategory &&
      searchable.includes(state.search.toLowerCase());
  });

  if (state.sort === "cheap") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sort === "expensive") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name, "ru"));
  } else {
    list.sort((a, b) => b.popular - a.popular || a.id - b.id);
  }

  list = [...list.filter(p => !p.soon), ...list.filter(p => p.soon)];

  grid.innerHTML = list.map(p => p.soon ? `
    <article class="product-card soon-card" aria-label="Скоро в каталоге">
      <div class="product-visual soon-visual">
        <span class="product-tag">Скоро</span>
        <span class="soon-mark">✦</span>
      </div>
      <div class="product-info">
        <div class="product-category">Скоро</div>
        <h3>Скоро...</h3>
        <p class="product-blurb">${esc(p.blurb)}</p>
        <div class="product-bottom">
          <strong class="product-price soon-price">Скоро...</strong>
        </div>
      </div>
    </article>
  ` : `
    <article class="product-card"
      tabindex="0"
      role="button"
      aria-label="Подробнее: ${esc(p.name)}"
      data-open-product="${p.id}">

      <div class="product-visual">
        <span class="product-tag">${esc(p.tag || p.category)}</span>
        <img
          class="product-photo"
          src="${esc(getProductImage(p))}"
          alt="${esc(p.name)}"
          loading="lazy"
          onerror="imageFallback(this)"
        >
        <button
          class="quick-open"
          type="button"
          data-quick="${p.id}"
          aria-label="Подробнее о товаре">
          ↗
        </button>
      </div>

      <div class="product-info">
        <div class="product-category">${esc(p.category)}</div>
        <h3>${esc(p.name)}</h3>
        <p class="product-blurb">${esc(p.blurb)}</p>
        <div class="product-bottom">
          <strong class="product-price">${money(p.price)}</strong>
          <button
            class="add-button"
            type="button"
            data-add="${p.id}"
            aria-label="Добавить ${esc(p.name)} в корзину">+</button>
        </div>
      </div>
    </article>
  `).join("");

  $("emptyState").hidden = list.length !== 0;
  observeReveal(grid.querySelectorAll(".product-card"));
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function renderCart() {
  $("cartCount").textContent = cartCount();
  $("drawerCount").textContent = `(${cartCount()})`;
  $("cartTotal").textContent = money(cartTotal());
  $("checkoutTotal").textContent = money(cartTotal());
  $("clearCart").hidden = !state.cart.length;

  if (!state.cart.length) {
    $("cartItems").innerHTML = `
      <div class="cart-empty">
        Корзина пока пуста.<br>
        Добавьте что-нибудь для уюта ✦
      </div>`;
    return;
  }

  $("cartItems").innerHTML = state.cart.map(item => {
    const product = productById(item.id);
    const image = product
      ? getProductImage(product, item.scent)
      : "";

    return `
      <div class="cart-row">
        <div class="cart-thumb">
          ${image ? `
            <img
              src="${esc(image)}"
              alt=""
              loading="lazy"
              onerror="imageFallback(this)">
          ` : "✦"}
        </div>

        <div>
          <h3>${esc(item.name)}</h3>
          <small>${esc(item.scent || item.category)}</small>
          <div class="qty-control">
            <button type="button"
              data-cart-minus="${esc(item.key)}"
              aria-label="Уменьшить количество">−</button>
            <span>${item.qty}</span>
            <button type="button"
              data-cart-plus="${esc(item.key)}"
              aria-label="Увеличить количество">+</button>
          </div>
        </div>

        <strong class="cart-row-price">${money(item.price * item.qty)}</strong>
      </div>`;
  }).join("");
}

function getVariant(product, scent) {
  return `${product.id}::${scent || ""}`;
}

function addToCart(product, scent = "", qty = 1, button = null) {
  if (!product) return;

  const key = getVariant(product, scent);
  const existing = state.cart.find(item => item.key === key);

  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      key,
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      scent,
      qty
    });
  }

  renderCart();

  const trigger = $("cartOpen");
  trigger.classList.remove("cart-bounce");
  void trigger.offsetWidth;
  trigger.classList.add("cart-bounce");

  if (button) {
    button.classList.remove("bump");
    void button.offsetWidth;
    button.classList.add("bump");
  }

  showToast(`Добавлено в корзину · ${product.name}`);
}

function openCart() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");

  if (!$("productModal").hidden || !$("checkoutModal").hidden) return;

  overlay.classList.remove("visible");
  document.body.style.overflow = "";
}

function showModal(id) {
  closeCart();
  overlay.classList.add("visible");
  $(id).hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  $(id).hidden = true;

  if (
    $("productModal").hidden &&
    $("checkoutModal").hidden &&
    !drawer.classList.contains("open")
  ) {
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }
}

function updateDetailImage(product, scent = "") {
  const img = $("detailImage");
  const image = getProductImage(product, scent);

  img.style.display = "";
  img.onerror = function () {
    imageFallback(this);
  };

  img.src = image;
  img.alt = product.name + (scent ? ` — ${scent}` : "");
}

function openProduct(id) {
  const product = productById(id);
  if (!product) return;

  state.detailId = product.id;
  state.detailScent = product.scent?.[0] || "";
  state.detailQty = 1;

  $("detailCategory").textContent = product.category.toUpperCase();
  $("detailTitle").textContent = product.name;
  $("detailPrice").textContent = money(product.price);
  $("detailDescription").textContent = product.description;
  $("detailQty").textContent = "1";

  updateDetailImage(product, state.detailScent);

  $("scentSection").hidden = !product.scent?.length;

  $("scentOptions").innerHTML = (product.scent || []).map((scent, index) => `
    <button
      type="button"
      class="scent-option ${index === 0 ? "active" : ""}"
      data-scent="${esc(scent)}">
      ${esc(scent)}
    </button>
  `).join("");

  $("scentNote").textContent = product.scent?.length
    ? `Выбран аромат: ${state.detailScent}`
    : "Для этого товара варианты аромата не предусмотрены.";

  $("detailArt").style.background = "var(--card-bg)";

  showModal("productModal");
}

let toastTimer;

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function setSort(sort) {
  state.sort = sort;

  const labels = {
    popular: "Популярные",
    cheap: "Сначала дешевле",
    expensive: "Сначала дороже",
    name: "По названию"
  };

  $("sortCurrent").textContent = labels[sort];

  $("sortMenu").querySelectorAll("[data-sort]").forEach(button => {
    button.setAttribute(
      "aria-selected",
      String(button.dataset.sort === sort)
    );
  });

  $("sortMenu").hidden = true;
  $("sortButton").setAttribute("aria-expanded", "false");

  renderProducts();
}

/* Категории */

$("categoryRow").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  state.category = button.dataset.category;

  $("categoryRow").querySelectorAll(".category-chip").forEach(chip => {
    chip.classList.toggle("active", chip === button);
  });

  renderProducts();
});

/* Поиск */

$("searchInput").addEventListener("input", event => {
  state.search = event.target.value.trim().toLowerCase();
  renderProducts();
});

/* Сортировка */

$("sortButton").addEventListener("click", () => {
  const open = $("sortMenu").hidden;

  $("sortMenu").hidden = !open;
  $("sortButton").setAttribute("aria-expanded", String(open));
});

$("sortMenu").addEventListener("click", event => {
  const button = event.target.closest("[data-sort]");
  if (button) setSort(button.dataset.sort);
});

document.addEventListener("click", event => {
  if (!event.target.closest(".sort-control")) {
    $("sortMenu").hidden = true;
    $("sortButton").setAttribute("aria-expanded", "false");
  }
});

/* Карточки каталога */

grid.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");

  if (addButton) {
    event.stopPropagation();
    const product = productById(addButton.dataset.add);
    addToCart(product, "", 1, addButton);
    return;
  }

  const quickButton = event.target.closest("[data-quick]");

  if (quickButton) {
    event.stopPropagation();
    openProduct(quickButton.dataset.quick);
    return;
  }

  const card = event.target.closest("[data-open-product]");

  if (card) openProduct(card.dataset.openProduct);
});

grid.addEventListener("keydown", event => {
  if (
    (event.key === "Enter" || event.key === " ") &&
    event.target.matches("[data-open-product]")
  ) {
    event.preventDefault();
    openProduct(event.target.dataset.openProduct);
  }
});

/* Выбор аромата и смена фотографии */

$("scentOptions").addEventListener("click", event => {
  const button = event.target.closest("[data-scent]");
  if (!button) return;

  state.detailScent = button.dataset.scent;

  $("scentOptions").querySelectorAll(".scent-option").forEach(option => {
    option.classList.toggle("active", option === button);
  });

  $("scentNote").textContent = `Выбран аромат: ${state.detailScent}`;

  const product = productById(state.detailId);
  if (product) updateDetailImage(product, state.detailScent);
});

/* Количество товара */

$("detailMinus").addEventListener("click", () => {
  state.detailQty = Math.max(1, state.detailQty - 1);
  $("detailQty").textContent = state.detailQty;
});

$("detailPlus").addEventListener("click", () => {
  state.detailQty = Math.min(99, state.detailQty + 1);
  $("detailQty").textContent = state.detailQty;
});

$("detailAdd").addEventListener("click", () => {
  const product = productById(state.detailId);
  if (!product) return;

  addToCart(product, state.detailScent, state.detailQty);
  closeModal("productModal");
});

/* Корзина */

$("cartOpen").addEventListener("click", openCart);
$("cartClose").addEventListener("click", closeCart);

$("cartItems").addEventListener("click", event => {
  const minus = event.target.closest("[data-cart-minus]");
  const plus = event.target.closest("[data-cart-plus]");

  const key = minus?.dataset.cartMinus || plus?.dataset.cartPlus;
  if (!key) return;

  const item = state.cart.find(entry => entry.key === key);
  if (!item) return;

  if (minus) {
    item.qty--;
  } else {
    item.qty = Math.min(99, item.qty + 1);
  }

  if (item.qty <= 0) {
    state.cart = state.cart.filter(entry => entry.key !== key);
  }

  renderCart();
});

$("clearCart").addEventListener("click", () => {
  if (!state.cart.length) return;

  if (confirm("Удалить все товары из корзины?")) {
    state.cart = [];
    renderCart();
    showToast("Корзина очищена");
  }
});

/* Выбор способа оплаты */

$("payOptions").addEventListener("click", event => {
  const button = event.target.closest("[data-pay]");
  if (!button) return;

  state.payment = button.dataset.pay;

  $("payOptions").querySelectorAll(".pay-option").forEach(option => {
    const active = option === button;
    option.classList.toggle("active", active);
    option.setAttribute("aria-checked", String(active));
  });
});

/* Анимация при прокрутке */

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("in", entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" })
  : null;

function observeReveal(nodes) {
  nodes.forEach((node, index) => {
    node.classList.add("reveal");
    node.style.transitionDelay = `${(index % 4) * 70}ms`;

    if (revealObserver) {
      revealObserver.observe(node);
    } else {
      node.classList.add("in");
    }
  });
}

observeReveal(document.querySelectorAll(".reveal"));

/* Параллакс первого экрана */

const heroArt = document.querySelector(".hero-art");
let scrollTicking = false;

window.addEventListener("scroll", () => {
  if (scrollTicking || !heroArt) return;
  scrollTicking = true;

  requestAnimationFrame(() => {
    const y = Math.min(window.scrollY, 600);
    heroArt.style.transform = `translateY(${y * 0.12}px)`;
    scrollTicking = false;
  });
}, { passive: true });

/* Оформление заказа */

$("checkoutOpen").addEventListener("click", () => {
  if (!state.cart.length) {
    showToast("Сначала добавьте товар в корзину");
    return;
  }

  $("formError").textContent = "";
  showModal("checkoutModal");
});

document.querySelectorAll("[data-close-modal]").forEach(button => {
  button.addEventListener("click", () => {
    closeModal(button.closest(".modal-wrap").id);
  });
});

overlay.addEventListener("click", () => {
  if (!$("productModal").hidden) closeModal("productModal");
  if (!$("checkoutModal").hidden) closeModal("checkoutModal");
  closeCart();
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  // сначала закрываем подсказки адреса, если они открыты
  if (typeof addressBox !== "undefined" && addressBox && !addressBox.hidden) {
    hideAddressSuggest();
    return;
  }

  if (!$("productModal").hidden) closeModal("productModal");
  if (!$("checkoutModal").hidden) closeModal("checkoutModal");
  closeCart();
});

$("checkoutForm").addEventListener("submit", event => {
  event.preventDefault();

  $("formError").textContent = "";

  if (!state.cart.length) {
    $("formError").textContent = "Корзина пуста. Добавьте товары перед оформлением.";
    return;
  }

  const name = $("customerName").value.trim();
  const phone = $("phone").value.trim();
  const address = $("address").value.trim();
  const payment = state.payment;
  const digits = phone.replace(/\D/g, "");

  if (name.length < 2) {
    $("formError").textContent = "Укажите имя получателя.";
    return;
  }

  if (digits.length < 10 || digits.length > 15) {
    $("formError").textContent = "Проверьте номер телефона: нужно от 10 до 15 цифр.";
    return;
  }

  if (address.length < 8) {
    $("formError").textContent = "Укажите полный адрес доставки.";
    return;
  }

  if (!$("consent").checked) {
    $("formError").textContent = "Подтвердите согласие на передачу данных для заказа.";
    return;
  }

  const lines = state.cart.map(item =>
    `• ${item.name}` +
    (item.scent ? ` — аромат: ${item.scent}` : "") +
    ` × ${item.qty} — ${money(item.price * item.qty)}`
  ).join("\n");

  const message =
    `Заказ из магазина «${CONFIG.storeName}»\n\n` +
    `${lines}\n\n` +
    `Итого: ${money(cartTotal())}\n\n` +
    `Получатель: ${name}\n` +
    `Телефон: ${phone}\n` +
    `Адрес доставки: ${address}\n` +
    `Оплата: ${payment}\n` +
    `Доставка: уточняется при подтверждении заказа.`;

  const whatsappNumber = CONFIG.whatsappNumber.replace(/\D/g, "");

  if (!/^\d{10,15}$/.test(whatsappNumber)) {
    $("formError").textContent =
      "Проверьте номер WhatsApp в настройках магазина.";
    return;
  }

  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const whatsappWindow = window.open(url, "_blank", "noopener,noreferrer");

  if (!whatsappWindow) {
    $("formError").textContent =
      "Браузер заблокировал новое окно. Разрешите открытие WhatsApp и попробуйте снова.";
    return;
  }

  showToast("Заказ подготовлен для WhatsApp");
});

/* Подсказки адреса */

const addressInput = $("address");
const addressBox = $("addressSuggest");

let addressTimer = null;
let addressAbort = null;
let addressItems = [];
let addressActive = -1;

function hideAddressSuggest() {
  addressBox.hidden = true;
  addressBox.innerHTML = "";
  addressItems = [];
  addressActive = -1;
}

function renderAddressSuggest() {
  if (!addressItems.length) {
    hideAddressSuggest();
    return;
  }

  addressBox.innerHTML = addressItems.map((item, index) => `
    <button type="button" role="option"
      class="address-option${index === addressActive ? " active" : ""}"
      data-address-index="${index}">
      <span class="address-pin" aria-hidden="true">⌖</span>
      <span class="address-text">${esc(item.value)}</span>
      ${item.label ? `<span class="address-type">${esc(item.label)}</span>` : ""}
    </button>
  `).join("");

  addressBox.hidden = false;
}

function chooseAddress(index) {
  const value = addressItems[index]?.value;
  if (!value) return;

  addressInput.value = value;
  hideAddressSuggest();
  addressInput.focus();
  addressInput.setSelectionRange(addressInput.value.length, addressInput.value.length);
}

/* порядок частей адреса: от мелкого к крупному */
function buildNominatimValue(item) {
  const a = item.address || {};
  const parts = [];
  const push = v => { if (v && !parts.includes(v)) parts.push(v); };

  push(a.house_number);
  push(a.road);
  push(a.suburb || a.city_district || a.neighbourhood);
  push(a.city || a.town || a.village || a.hamlet || a.municipality);
  push(a.county || a.state_district);
  push(a.state || a.region);

  if (!parts.length) push(item.name);

  return parts.join(", ");
}

async function fetchAddressSuggestionsDaData(query, signal) {
  const url = CONFIG.dadataProxy || "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };

  if (!CONFIG.dadataProxy && CONFIG.dadataToken) {
    headers["Authorization"] = "Token " + CONFIG.dadataToken;
  }

  const response = await fetch(url, {
    method: "POST",
    signal,
    headers,
    body: JSON.stringify({ query, count: 6 })
  });

  if (!response.ok) return [];

  const data = await response.json();
  return (data.suggestions || []).map(s => ({
    value: s.value || s.unrestricted_value || "",
    label: s.data?.house ? "дом" : (s.data?.street ? "улица" : "")
  })).filter(x => x.value);
}

async function fetchAddressSuggestionsNominatim(query, signal) {
  const cleaned = query
    .replace(/(^|[\s,])(г|п|пгт|пос|с|ст|х|ул|пер|пр|обл|р-н)\.?(?=[\s,]|$)/gi, "$1")
    .replace(/\s{2,}/g, " ")
    .trim() || query;

  const typeLabels = {
    city: "город", town: "город", village: "село", hamlet: "деревня",
    isolated_dwelling: "двор", locality: "местность", suburb: "район",
    city_district: "район", neighbourhood: "микрорайон", quarter: "квартал",
    road: "улица", residential: "улица", pedestrian: "улица", living_street: "улица",
    house: "дом", building: "дом", state: "регион", region: "регион",
    county: "район", state_district: "район", municipality: "округ"
  };

  const search = extra => {
    const params = new URLSearchParams({
      format: "jsonv2",
      addressdetails: "1",
      "accept-language": "ru",
      q: cleaned,
      ...extra
    });

    if (CONFIG.addressCountry) {
      params.set("countrycodes", CONFIG.addressCountry.toLowerCase());
    }

    return fetch(
      "https://nominatim.openstreetmap.org/search?" + params.toString(),
      { signal, headers: { "Accept-Language": "ru" } }
    )
      .then(r => (r.ok ? r.json() : []))
      .catch(error => {
        if (error.name === "AbortError") throw error;
        return [];
      });
  };

  const [places, others] = await Promise.all([
    search({ featureType: "settlement", limit: "6" }),
    search({ limit: "10" })
  ]);

  const seen = new Set();

  return [...(Array.isArray(places) ? places : []), ...(Array.isArray(others) ? others : [])]
    .map(item => ({
      value: buildNominatimValue(item),
      label: typeLabels[item.addresstype] || typeLabels[item.type] || ""
    }))
    .filter(item => {
      if (!item.value || seen.has(item.value)) return false;
      seen.add(item.value);
      return true;
    })
    .slice(0, 8);
}

async function fetchAddressSuggestions(query, signal) {
  if (CONFIG.dadataProxy || CONFIG.dadataToken) {
    return fetchAddressSuggestionsDaData(query, signal);
  }
  return fetchAddressSuggestionsNominatim(query, signal);
}

addressInput.addEventListener("input", () => {
  clearTimeout(addressTimer);

  const query = addressInput.value.trim().replace(/[,\s]+$/, "");

  if (query.length < 3) {
    if (addressAbort) addressAbort.abort();
    hideAddressSuggest();
    return;
  }

  addressTimer = setTimeout(async () => {
    if (addressAbort) addressAbort.abort();
    addressAbort = new AbortController();
    const { signal } = addressAbort;

    try {
      const items = await fetchAddressSuggestions(query, signal);
      if (signal.aborted) return;

      addressItems = items;
      addressActive = -1;
      renderAddressSuggest();
    } catch (error) {
      if (error.name !== "AbortError") hideAddressSuggest();
    }
  }, 400);
});

addressInput.addEventListener("keydown", event => {
  if (addressBox.hidden || !addressItems.length) return;

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const step = event.key === "ArrowDown" ? 1 : -1;
    addressActive =
      (addressActive + step + addressItems.length) % addressItems.length;
    renderAddressSuggest();
  } else if (event.key === "Enter" && addressActive >= 0) {
    event.preventDefault();
    chooseAddress(addressActive);
  } else if (event.key === "Escape") {
    event.preventDefault();
    hideAddressSuggest();
  }
});

addressBox.addEventListener("mousedown", event => event.preventDefault());
addressBox.addEventListener("pointerdown", event => event.preventDefault());

addressBox.addEventListener("click", event => {
  event.preventDefault();
  const option = event.target.closest("[data-address-index]");
  if (option) chooseAddress(Number(option.dataset.addressIndex));
});

addressInput.addEventListener("blur", () => {
  setTimeout(hideAddressSuggest, 150);
});

/* Запуск магазина */

renderProducts();
renderCart();
