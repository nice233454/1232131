import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9b5ed7a7"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/home/project/src/App.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9b5ed7a7"; const useState = __vite__cjsImport3_react["useState"]; const useEffect = __vite__cjsImport3_react["useEffect"]; const useCallback = __vite__cjsImport3_react["useCallback"];
import {
  CheckCircle,
  Truck,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Leaf,
  Clock,
  Users,
  Heart,
  Dumbbell,
  Sparkles,
  Moon,
  Bone,
  Zap,
  Pill,
  Award,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Fingerprint
} from "/node_modules/lucide-react/dist/esm/lucide-react.js?v=02323958";
const LOGO_URL = "https://i.postimg.cc/pdsXwN9D/a-bold-geometric-wordmark-with-now-in-he-j-Hs-Tax-JOVy-CWrn-Fm-Ixbkhw-8Po-ZMBHSj-WAXb-Ucw8Aa-XA-cove.png";
const heroSlides = [
  {
    image: "https://images.pexels.com/photos/3683103/pexels-photo-3683103.jpeg?auto=compress&cs=tinysrgb&w=1920"
  },
  {
    image: "https://images.pexels.com/photos/17820735/pexels-photo-17820735.jpeg?auto=compress&cs=tinysrgb&w=1920"
  },
  {
    image: "https://images.pexels.com/photos/7615570/pexels-photo-7615570.jpeg?auto=compress&cs=tinysrgb&w=1920"
  },
  {
    image: "https://images.pexels.com/photos/13013778/pexels-photo-13013778.jpeg?auto=compress&cs=tinysrgb&w=1920"
  }
];
const brandLogos = [
  { name: "NOW Foods", url: "https://nowfoodsegypt.com/wp-content/uploads/2023/04/now-foods-egypt.svg" },
  { name: "Sambucol", url: "https://sambucol.co.uk/wp-content/uploads/2019/03/Sambucol-Logo-200px.svg" },
  { name: "Life Extension", url: "https://www.lifeextension.com/-/media/project/lifeextension/images/logo/le-logo-svg.svg?rev=87127ddb108648aa9bf71c9ed237f8ef&h=75&w=200&la=en&hash=D8E7AC0CF5E35466F65C3FE531322CD8" },
  { name: "Doctor's Best", url: "https://www.doctorsbest.com/cdn/shop/files/Dr_Best_Logo-01.png?v=1717125120&width=600" }
];
const brandDetails = [
  {
    name: "NOW Foods",
    description: "Один из самых известных мировых производителей витаминов и добавок. Широкий ассортимент: омега-3, магний, витамин D3, коллаген, аминокислоты, спортивное питание и многое другое.",
    gradient: "from-sky-500/20 to-sky-600/5",
    accent: "text-sky-600",
    iconBg: "bg-sky-500"
  },
  {
    name: "Sambucol",
    description: "Известный бренд на основе черной бузины для поддержки иммунитета взрослых и детей. Особенно популярен в сезон простуд и вирусных нагрузок.",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    accent: "text-emerald-600",
    iconBg: "bg-emerald-500"
  },
  {
    name: "Life Extension",
    description: "Премиальные формулы для поддержки долголетия, здоровья сердца, мозга, сосудов и общего качества жизни. Высокие стандарты исследований и состава.",
    gradient: "from-amber-500/20 to-amber-600/5",
    accent: "text-amber-600",
    iconBg: "bg-amber-500"
  },
  {
    name: "Doctor's Best",
    description: "Научный подход и эффективные формулы для суставов, нервной системы, сна, энергии и восстановления организма.",
    gradient: "from-rose-500/20 to-rose-600/5",
    accent: "text-rose-600",
    iconBg: "bg-rose-500"
  }
];
const categories = [
  { icon: Pill, name: "Витамин D3 и K2", color: "bg-stone-100", iconColor: "text-stone-500" },
  { icon: Zap, name: "Магний и цинк", color: "bg-stone-100", iconColor: "text-stone-500" },
  { icon: Heart, name: "Омега-3", color: "bg-stone-100", iconColor: "text-stone-500" },
  { icon: Sparkles, name: "Коллаген", color: "bg-stone-100", iconColor: "text-stone-500" },
  { icon: Shield, name: "Иммунитет", color: "bg-stone-100", iconColor: "text-stone-500" },
  { icon: Bone, name: "Суставы", color: "bg-stone-100", iconColor: "text-stone-500" },
  { icon: Moon, name: "Сон и нервы", color: "bg-stone-100", iconColor: "text-stone-500" },
  { icon: Dumbbell, name: "Энергия", color: "bg-stone-100", iconColor: "text-stone-500" }
];
const audiences = [
  {
    icon: Leaf,
    title: "Здоровье и энергия",
    desc: "Для тех, кто хочет чувствовать себя бодрым и полным сил каждый день",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Dumbbell,
    title: "Спорт и активность",
    desc: "Для спортсменов и людей, ведущих активный образ жизни",
    gradient: "from-sky-500 to-blue-500"
  },
  {
    icon: Users,
    title: "Иммунитет семьи",
    desc: "Для поддержки здоровья всех членов семьи — от детей до старшего поколения",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Clock,
    title: "Восстановление",
    desc: "Для организма после нагрузок, стрессов и перенесённых заболеваний",
    gradient: "from-rose-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "Красота",
    desc: "Для кожи, волос и ногтей — поддерживайте красоту изнутри",
    gradient: "from-fuchsia-500 to-purple-500"
  }
];
const advantages = [
  {
    icon: Shield,
    title: "Оригинальная продукция",
    desc: "Только настоящие БАДы из США, без подделок и копий"
  },
  {
    icon: Star,
    title: "Мировые бренды",
    desc: "NOW, Sambucol, Life Extension, Doctor's Best"
  },
  {
    icon: FlaskConical,
    title: "Сертификаты качества",
    desc: "Каждая партия проходит лабораторный контроль"
  },
  {
    icon: Truck,
    title: "Быстрая доставка",
    desc: "Оперативная отправка по всему Казахстану"
  },
  {
    icon: Clock,
    title: "Свежие сроки",
    desc: "Актуальные сроки годности на всю продукцию"
  },
  {
    icon: Fingerprint,
    title: "Индивидуальный подбор",
    desc: "Консультация по выбору витаминов под ваши цели"
  }
];
const qualityFeatures = [
  {
    icon: Shield,
    title: "Проверенные поставщики",
    desc: "Работаем только с официальными дистрибьюторами в США"
  },
  {
    icon: FlaskConical,
    title: "Лабораторный контроль",
    desc: "Каждая партия проходит проверку на подлинность и качество"
  },
  {
    icon: Award,
    title: "Международные стандарты",
    desc: "GMP, NSF, FDA — продукция соответствует высшим стандартам"
  },
  {
    icon: CheckCircle,
    title: "Оригинальность гарантирована",
    desc: "Защищаем наших клиентов от контрафакта и подделок"
  }
];
function ContactForm() {
  _s();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };
  if (submitted) {
    return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center justify-center py-12 text-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-8 h-8 text-emerald-600" }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 207,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 206,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Заявка отправлена!" }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 209,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500", children: "Наш менеджер свяжется с вами в ближайшее время." }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 205,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Ваше имя" }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "text",
          required: true,
          value: form.name,
          onChange: (e) => setForm({ ...form, name: e.target.value }),
          className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-gray-900 placeholder-gray-400",
          placeholder: "Иван Иванов"
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 219,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Телефон или WhatsApp" }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 229,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "tel",
          required: true,
          value: form.phone,
          onChange: (e) => setForm({ ...form, phone: e.target.value }),
          className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-gray-900 placeholder-gray-400",
          placeholder: "+7 777 000 00 00"
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 230,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 228,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Ваш вопрос (необязательно)" }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 240,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        "textarea",
        {
          rows: 3,
          value: form.message,
          onChange: (e) => setForm({ ...form, message: e.target.value }),
          className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition text-gray-900 placeholder-gray-400 resize-none",
          placeholder: "Подбор витаминов для..."
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 241,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        type: "submit",
        disabled: loading,
        className: "w-full bg-sky-600 hover:bg-sky-700 disabled:opacity-60 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg",
        children: loading ? /* @__PURE__ */ jsxDEV("span", { className: "inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 255,
          columnNumber: 9
        }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
          "Отправить заявку ",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 258,
            columnNumber: 30
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 257,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 249,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "/home/project/src/App.tsx",
    lineNumber: 216,
    columnNumber: 5
  }, this);
}
_s(ContactForm, "ng5SY01icCpssSusqEBot8ta5i8=");
_c = ContactForm;
function HeroSlider() {
  _s2();
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((i) => (i + 1) % heroSlides.length), []);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + heroSlides.length) % heroSlides.length), []);
  useEffect(() => {
    const timer = setInterval(next, 5e3);
    return () => clearInterval(timer);
  }, [next]);
  return /* @__PURE__ */ jsxDEV("div", { className: "relative w-full", style: { height: "min(800px, 100vh)" }, children: [
    heroSlides.map(
      (slide, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "absolute inset-0 transition-opacity duration-1000",
          style: { opacity: i === current ? 1 : 0 },
          children: /* @__PURE__ */ jsxDEV("img", { src: slide.image, alt: "", className: "w-full h-full object-cover" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 285,
            columnNumber: 11
          }, this)
        },
        i,
        false,
        {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 280,
          columnNumber: 7
        },
        this
      )
    ),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: prev,
        className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-20",
        children: /* @__PURE__ */ jsxDEV(ChevronLeft, { className: "w-5 h-5" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 292,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 288,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: next,
        className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition z-20",
        children: /* @__PURE__ */ jsxDEV(ChevronRight, { className: "w-5 h-5" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 298,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 294,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20", children: heroSlides.map(
      (_, i) => /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setCurrent(i),
          className: `h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-white w-8" : "bg-white/40 hover:bg-white/60 w-2.5"}`
        },
        i,
        false,
        {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 302,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 300,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/App.tsx",
    lineNumber: 278,
    columnNumber: 5
  }, this);
}
_s2(HeroSlider, "nHlvZZW/4jT3jI0j9iv9PTsmxxM=");
_c2 = HeroSlider;
function Marquee() {
  const doubled = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];
  return /* @__PURE__ */ jsxDEV("div", { className: "overflow-hidden relative", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 319,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 320,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-20 animate-marquee", children: doubled.map(
      (brand, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex-shrink-0 flex items-center justify-center h-20 min-w-[220px]", children: /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: brand.url,
          alt: brand.name,
          className: "max-h-14 max-w-[200px] w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300",
          onError: (e) => {
            e.target.style.display = "none";
          }
        },
        void 0,
        false,
        {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 324,
          columnNumber: 13
        },
        this
      ) }, i, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 323,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 321,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/App.tsx",
    lineNumber: 318,
    columnNumber: 5
  }, this);
}
_c3 = Marquee;
export default function App() {
  _s3();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-gray-50 text-gray-900 font-sans", children: [
    /* @__PURE__ */ jsxDEV("header", { className: "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxDEV("img", { src: LOGO_URL, alt: "NOW KZ", className: "h-9 w-auto object-contain" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 354,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-xl font-extrabold tracking-tight text-gray-900 hidden sm:block", children: [
            "NOW ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-sky-600", children: "KZ" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 356,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 355,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 353,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("nav", { className: "hidden md:flex items-center gap-6 text-sm font-medium text-gray-600", children: [
          /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("brands"), className: "hover:text-sky-600 transition", children: "Бренды" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 360,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("categories"), className: "hover:text-sky-600 transition", children: "Каталог" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 361,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("delivery"), className: "hover:text-sky-600 transition", children: "Доставка" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 362,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollTo("contact"),
              className: "bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl transition shadow-sm font-semibold",
              children: "Оставить заявку"
            },
            void 0,
            false,
            {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 363,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 359,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            className: "md:hidden p-2 rounded-lg hover:bg-gray-100 transition",
            onClick: () => setMenuOpen(!menuOpen),
            children: menuOpen ? /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 374,
              columnNumber: 27
            }, this) : /* @__PURE__ */ jsxDEV(Menu, { className: "w-5 h-5" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 374,
              columnNumber: 55
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 370,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 352,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 351,
        columnNumber: 9
      }, this),
      menuOpen && /* @__PURE__ */ jsxDEV("div", { className: "md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-gray-700", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("brands"), className: "text-left py-2 hover:text-sky-600 transition", children: "Бренды" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 380,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("categories"), className: "text-left py-2 hover:text-sky-600 transition", children: "Каталог" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 381,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("delivery"), className: "text-left py-2 hover:text-sky-600 transition", children: "Доставка" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 382,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: () => scrollTo("contact"), className: "bg-sky-600 text-white px-4 py-2.5 rounded-xl text-center font-semibold", children: "Оставить заявку" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 383,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 379,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 350,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV(HeroSlider, {}, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 392,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 z-10" }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 393,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 flex items-center z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl py-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-1.5 text-sky-300 text-sm font-medium mb-8", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 bg-sky-400 rounded-full animate-pulse" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 398,
            columnNumber: 17
          }, this),
          "Официальные поставки из США"
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 397,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8 tracking-tight text-white", children: [
          "Оригинальные",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 402,
            columnNumber: 29
          }, this),
          "БАДы из США",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 403,
            columnNumber: 28
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "text-sky-400", children: "в Казахстане" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 404,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 401,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl sm:text-2xl text-slate-300 leading-relaxed mb-10 font-light", children: "NOW, Sambucol, Life Extension, Doctor's Best — проверенные бренды для иммунитета, энергии, сердца, суставов, сна и красоты." }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 406,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollTo("contact"),
              className: "bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-sky-500/30 flex items-center justify-center gap-2 text-lg",
              children: [
                "Получить консультацию ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "/home/project/src/App.tsx",
                  lineNumber: 414,
                  columnNumber: 41
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 410,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: () => scrollTo("categories"),
              className: "bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-lg",
              children: "Смотреть каталог"
            },
            void 0,
            false,
            {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 416,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 409,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 396,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 395,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 394,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10" }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 426,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 391,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4", children: [
          /* @__PURE__ */ jsxDEV(Star, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 434,
            columnNumber: 15
          }, this),
          " Наши преимущества"
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 433,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4", children: "Почему выбирают нас?" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 436,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 max-w-xl mx-auto text-lg", children: "Качество, надёжность и забота о каждом клиенте" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 437,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 432,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: advantages.map(
        ({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxDEV("div", { className: "group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-sky-100 transition-colors duration-300", children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-6 h-6 text-slate-400 group-hover:text-sky-600 transition-colors duration-300" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 443,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 442,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: title }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 445,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 text-sm leading-relaxed", children: desc }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 446,
            columnNumber: 17
          }, this)
        ] }, title, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 441,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 439,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 431,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 430,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "brands", className: "py-20 bg-gray-50", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4", children: [
          /* @__PURE__ */ jsxDEV(Award, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 458,
            columnNumber: 15
          }, this),
          " Мировые бренды"
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 457,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4", children: "Бренды, которым доверяют" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 460,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 max-w-xl mx-auto text-lg", children: "Ведущие американские производители с мировым признанием" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 461,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 456,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 455,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Marquee, {}, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 464,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: brandDetails.map(
        (brand) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: `relative p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group`,
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: `absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${brand.iconBg}` }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 472,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: `absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-bl ${brand.gradient} rounded-bl-full group-hover:scale-150 transition-transform duration-500` }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 473,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { className: `text-xl font-bold ${brand.accent} mb-3 relative z-10`, children: brand.name }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 474,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 leading-relaxed text-sm relative z-10", children: brand.description }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 475,
                columnNumber: 17
              }, this)
            ]
          },
          brand.name,
          true,
          {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 468,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 466,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 465,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 454,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "categories", className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4", children: [
          /* @__PURE__ */ jsxDEV(Pill, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 487,
            columnNumber: 15
          }, this),
          " Каталог"
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 486,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4", children: "Популярные категории" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 489,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 max-w-xl mx-auto text-lg", children: "Подберите добавки под вашу цель" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 490,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 485,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5", children: categories.map(
        ({ icon: Icon, name, color, iconColor }) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-default",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: `w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`, children: /* @__PURE__ */ jsxDEV(Icon, { className: `w-7 h-7 ${iconColor} group-hover:text-sky-600 transition-colors duration-300` }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 499,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 498,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-bold text-gray-800 leading-snug", children: name }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 501,
                columnNumber: 17
              }, this)
            ]
          },
          name,
          true,
          {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 494,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 492,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 484,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 483,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4", children: [
          /* @__PURE__ */ jsxDEV(Users, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 513,
            columnNumber: 15
          }, this),
          " Целевая аудитория"
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 512,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4", children: "Для кого наши БАДы?" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 515,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 max-w-xl mx-auto text-lg", children: "Подходят людям с разными целями и образом жизни" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 516,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 511,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: audiences.map(
        ({ icon: Icon, title, desc, gradient }) => /* @__PURE__ */ jsxDEV("div", { className: "group relative bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV("div", { className: `absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300` }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 521,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: `w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-sm`, children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-6 h-6 text-white" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 523,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 522,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900 mb-2 relative z-10", children: title }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 525,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 text-sm leading-relaxed relative z-10", children: desc }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 526,
            columnNumber: 17
          }, this)
        ] }, title, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 520,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 518,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 510,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 509,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4", children: [
          /* @__PURE__ */ jsxDEV(Shield, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 538,
            columnNumber: 15
          }, this),
          " Надёжность"
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 537,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4", children: "Гарантия качества" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 540,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 max-w-xl mx-auto text-lg", children: "Мы тщательно контролируем каждую партию, чтобы вы получали только лучшее" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 541,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 536,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: qualityFeatures.map(
        ({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxDEV("div", { className: "group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 546,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-5", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm", children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-6 h-6 text-white" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 549,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 548,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: title }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 552,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-gray-500 text-sm leading-relaxed", children: desc }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 553,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 551,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 547,
            columnNumber: 17
          }, this)
        ] }, title, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 545,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 543,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 535,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 534,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "delivery", className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4", children: [
          /* @__PURE__ */ jsxDEV(Truck, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 568,
            columnNumber: 17
          }, this),
          " Логистика"
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 567,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4", children: "Доставка по Казахстану" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 570,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-lg leading-relaxed mb-6", children: "Оперативная доставка в Алматы, Астану, Шымкент и другие города Казахстана. Удобная оплата и помощь в подборе продукции под ваши цели." }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 571,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: ["Алматы", "Астана", "Шымкент", "Другие города Казахстана"].map(
          (city) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "w-4 h-4 text-sky-500 flex-shrink-0" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 577,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-gray-700 font-medium", children: city }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 578,
              columnNumber: 21
            }, this)
          ] }, city, true, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 576,
            columnNumber: 17
          }, this)
        ) }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 574,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 566,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
        { icon: Truck, title: "Быстрая доставка", desc: "Оперативная отправка после оформления заказа", gradient: "from-sky-500 to-blue-600" },
        { icon: Shield, title: "Оригинальность", desc: "Каждая партия проходит контроль качества", gradient: "from-emerald-500 to-teal-600" },
        { icon: CheckCircle, title: "Сертификаты", desc: "Вся продукция сертифицирована", gradient: "from-amber-500 to-orange-600" },
        { icon: Phone, title: "Поддержка", desc: "Консультируем по подбору витаминов", gradient: "from-rose-500 to-pink-600" }
      ].map(
        ({ icon: Icon, title, desc, gradient }) => /* @__PURE__ */ jsxDEV("div", { className: "group relative bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV("div", { className: `absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300` }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 591,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: `w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-3 shadow-sm`, children: /* @__PURE__ */ jsxDEV(Icon, { className: "w-5 h-5 text-white" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 593,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 592,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-gray-900 mb-1", children: title }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 595,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-gray-500 leading-snug", children: desc }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 596,
            columnNumber: 19
          }, this)
        ] }, title, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 590,
          columnNumber: 15
        }, this)
      ) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 583,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 565,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 564,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 563,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { id: "contact", className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4", children: [
          /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 610,
            columnNumber: 17
          }, this),
          " Свяжитесь с нами"
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 609,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4", children: "Оставьте заявку прямо сейчас" }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 612,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 text-lg leading-relaxed mb-8", children: "Наш менеджер поможет подобрать подходящие витамины и ответит на все вопросы. Заботьтесь о здоровье с качественными витаминами от мировых брендов." }, void 0, false, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 613,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 text-gray-600", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 text-white" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 619,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 618,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Консультация по телефону или WhatsApp" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 621,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 617,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 text-gray-600", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5 text-white" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 625,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 624,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Ответим в течение нескольких часов" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 627,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 623,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 text-gray-600", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-5 h-5 text-white" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 631,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 630,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "Доставка по всему Казахстану" }, void 0, false, {
              fileName: "/home/project/src/App.tsx",
              lineNumber: 633,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 629,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 616,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 608,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-2xl p-8 border border-gray-100 shadow-sm", children: /* @__PURE__ */ jsxDEV(ContactForm, {}, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 638,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 637,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 607,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 606,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 605,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "bg-slate-900 text-slate-400 py-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-center", children: "Оригинальные БАДы из США в Казахстане — NOW, Sambucol, Life Extension, Doctor's Best" }, void 0, false, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 648,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: async () => {
              const JSZip = (await import('/node_modules/.vite/deps/jszip.js?v=59292895').then(m => ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(m.default))).default;
              const zip = new JSZip();
              const files = [
                "package.json",
                "package-lock.json",
                "tsconfig.json",
                "tsconfig.app.json",
                "tsconfig.node.json",
                "vite.config.ts",
                "index.html",
                "postcss.config.js",
                "tailwind.config.js",
                "eslint.config.js",
                ".gitignore"
              ];
              for (const f of files) {
                try {
                  const res = await fetch("/" + f);
                  if (res.ok) zip.file(f, await res.text());
                } catch {
                }
              }
              const srcFiles = ["src/App.tsx", "src/main.tsx", "src/index.css", "src/vite-env.d.ts"];
              for (const f of srcFiles) {
                try {
                  const res = await fetch("/" + f);
                  if (res.ok) zip.file(f, await res.text());
                } catch {
                }
              }
              const blob = await zip.generateAsync({ type: "blob" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "now-kz-project.zip";
              a.click();
              URL.revokeObjectURL(url);
            },
            className: "text-xs bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ jsxDEV("svg", { className: "w-3.5 h-3.5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 684,
                columnNumber: 100
              }, this) }, void 0, false, {
                fileName: "/home/project/src/App.tsx",
                lineNumber: 684,
                columnNumber: 17
              }, this),
              "Скачать проект"
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/project/src/App.tsx",
            lineNumber: 652,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " NOW KZ"
        ] }, void 0, true, {
          fileName: "/home/project/src/App.tsx",
          lineNumber: 687,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/project/src/App.tsx",
        lineNumber: 651,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 647,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 646,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/project/src/App.tsx",
      lineNumber: 645,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/project/src/App.tsx",
    lineNumber: 348,
    columnNumber: 5
  }, this);
}
_s3(App, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c4 = App;
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "ContactForm");
$RefreshReg$(_c2, "HeroSlider");
$RefreshReg$(_c3, "Marquee");
$RefreshReg$(_c4, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/project/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/project/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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OEYsS0FBSyxHQUFFQyxZQUFZO0FBQUEsVUFBRTtBQUFBLGFBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBK0Q7QUFBQSxXQXBDakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXFDQTtBQUFBLFNBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EwQ0EsS0EzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQTRDQSxLQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBOENBO0FBQUEsT0F2VkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXdWQTtBQUVKO0FBQUNsQyxJQW5XdUJELEtBQUc7QUFBQW9DLE1BQUhwQztBQUFHLElBQUExQixJQUFBbUIsS0FBQU0sS0FBQXFDO0FBQUFDLGFBQUEvRCxJQUFBO0FBQUErRCxhQUFBNUMsS0FBQTtBQUFBNEMsYUFBQXRDLEtBQUE7QUFBQXNDLGFBQUFELEtBQUEiLCJuYW1lcyI6WyJDaGVja0NpcmNsZSIsIlRydWNrIiwiU2hpZWxkIiwiU3RhciIsIlBob25lIiwiTWFpbCIsIk1hcFBpbiIsIk1lbnUiLCJYIiwiQXJyb3dSaWdodCIsIkxlYWYiLCJDbG9jayIsIlVzZXJzIiwiSGVhcnQiLCJEdW1iYmVsbCIsIlNwYXJrbGVzIiwiTW9vbiIsIkJvbmUiLCJaYXAiLCJQaWxsIiwiQXdhcmQiLCJDaGV2cm9uTGVmdCIsIkNoZXZyb25SaWdodCIsIkZsYXNrQ29uaWNhbCIsIkZpbmdlcnByaW50IiwiTE9HT19VUkwiLCJoZXJvU2xpZGVzIiwiaW1hZ2UiLCJicmFuZExvZ29zIiwibmFtZSIsInVybCIsImJyYW5kRGV0YWlscyIsImRlc2NyaXB0aW9uIiwiZ3JhZGllbnQiLCJhY2NlbnQiLCJpY29uQmciLCJjYXRlZ29yaWVzIiwiaWNvbiIsImNvbG9yIiwiaWNvbkNvbG9yIiwiYXVkaWVuY2VzIiwidGl0bGUiLCJkZXNjIiwiYWR2YW50YWdlcyIsInF1YWxpdHlGZWF0dXJlcyIsIkNvbnRhY3RGb3JtIiwiX3MiLCJmb3JtIiwic2V0Rm9ybSIsInVzZVN0YXRlIiwicGhvbmUiLCJtZXNzYWdlIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJQcm9taXNlIiwiciIsInNldFRpbWVvdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9jIiwiSGVyb1NsaWRlciIsIl9zMiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwibmV4dCIsInVzZUNhbGxiYWNrIiwiaSIsImxlbmd0aCIsInByZXYiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImhlaWdodCIsIm1hcCIsInNsaWRlIiwib3BhY2l0eSIsIl8iLCJfYzIiLCJNYXJxdWVlIiwiZG91YmxlZCIsImJyYW5kIiwic3R5bGUiLCJkaXNwbGF5IiwiX2MzIiwiQXBwIiwiX3MzIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInNjcm9sbFRvIiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIkljb24iLCJjaXR5IiwiSlNaaXAiLCJkZWZhdWx0IiwiemlwIiwiZmlsZXMiLCJmIiwicmVzIiwiZmV0Y2giLCJvayIsImZpbGUiLCJ0ZXh0Iiwic3JjRmlsZXMiLCJibG9iIiwiZ2VuZXJhdGVBc3luYyIsInR5cGUiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhIiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwicmV2b2tlT2JqZWN0VVJMIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiX2M0IiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBDaGVja0NpcmNsZSxcbiAgVHJ1Y2ssXG4gIFNoaWVsZCxcbiAgU3RhcixcbiAgUGhvbmUsXG4gIE1haWwsXG4gIE1hcFBpbixcbiAgTWVudSxcbiAgWCxcbiAgQXJyb3dSaWdodCxcbiAgTGVhZixcbiAgQ2xvY2ssXG4gIFVzZXJzLFxuICBIZWFydCxcbiAgRHVtYmJlbGwsXG4gIFNwYXJrbGVzLFxuICBNb29uLFxuICBCb25lLFxuICBaYXAsXG4gIFBpbGwsXG4gIEF3YXJkLFxuICBDaGV2cm9uTGVmdCxcbiAgQ2hldnJvblJpZ2h0LFxuICBGbGFza0NvbmljYWwsXG4gIEZpbmdlcnByaW50LFxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5jb25zdCBMT0dPX1VSTCA9XG4gICdodHRwczovL2kucG9zdGltZy5jYy9wZHNYd045RC9hLWJvbGQtZ2VvbWV0cmljLXdvcmRtYXJrLXdpdGgtbm93LWluLWhlLWotSHMtVGF4LUpPVnktQ1dybi1GbS1JeGJraHctOFBvLVpNQkhTai1XQVhiLVVjdzhBYS1YQS1jb3ZlLnBuZyc7XG5cbmNvbnN0IGhlcm9TbGlkZXMgPSBbXG4gIHtcbiAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM2ODMxMDMvcGV4ZWxzLXBob3RvLTM2ODMxMDMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTkyMCcsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE3ODIwNzM1L3BleGVscy1waG90by0xNzgyMDczNS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xOTIwJyxcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNzYxNTU3MC9wZXhlbHMtcGhvdG8tNzYxNTU3MC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xOTIwJyxcbiAgfSxcbiAge1xuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTMwMTM3NzgvcGV4ZWxzLXBob3RvLTEzMDEzNzc4LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTE5MjAnLFxuICB9LFxuXTtcblxuY29uc3QgYnJhbmRMb2dvcyA9IFtcbiAgeyBuYW1lOiAnTk9XIEZvb2RzJywgdXJsOiAnaHR0cHM6Ly9ub3dmb29kc2VneXB0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wNC9ub3ctZm9vZHMtZWd5cHQuc3ZnJyB9LFxuICB7IG5hbWU6ICdTYW1idWNvbCcsIHVybDogJ2h0dHBzOi8vc2FtYnVjb2wuY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDMvU2FtYnVjb2wtTG9nby0yMDBweC5zdmcnIH0sXG4gIHsgbmFtZTogJ0xpZmUgRXh0ZW5zaW9uJywgdXJsOiAnaHR0cHM6Ly93d3cubGlmZWV4dGVuc2lvbi5jb20vLS9tZWRpYS9wcm9qZWN0L2xpZmVleHRlbnNpb24vaW1hZ2VzL2xvZ28vbGUtbG9nby1zdmcuc3ZnP3Jldj04NzEyN2RkYjEwODY0OGFhOWJmNzFjOWVkMjM3ZjhlZiZoPTc1Jnc9MjAwJmxhPWVuJmhhc2g9RDhFN0FDMENGNUUzNTQ2NkY2NUMzRkU1MzEzMjJDRDgnIH0sXG4gIHsgbmFtZTogXCJEb2N0b3IncyBCZXN0XCIsIHVybDogJ2h0dHBzOi8vd3d3LmRvY3RvcnNiZXN0LmNvbS9jZG4vc2hvcC9maWxlcy9Ecl9CZXN0X0xvZ28tMDEucG5nP3Y9MTcxNzEyNTEyMCZ3aWR0aD02MDAnIH0sXG5dO1xuXG5jb25zdCBicmFuZERldGFpbHMgPSBbXG4gIHtcbiAgICBuYW1lOiAnTk9XIEZvb2RzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICfQntC00LjQvSDQuNC3INGB0LDQvNGL0YUg0LjQt9Cy0LXRgdGC0L3Ri9GFINC80LjRgNC+0LLRi9GFINC/0YDQvtC40LfQstC+0LTQuNGC0LXQu9C10Lkg0LLQuNGC0LDQvNC40L3QvtCyINC4INC00L7QsdCw0LLQvtC6LiDQqNC40YDQvtC60LjQuSDQsNGB0YHQvtGA0YLQuNC80LXQvdGCOiDQvtC80LXQs9CwLTMsINC80LDQs9C90LjQuSwg0LLQuNGC0LDQvNC40L0gRDMsINC60L7Qu9C70LDQs9C10L0sINCw0LzQuNC90L7QutC40YHQu9C+0YLRiywg0YHQv9C+0YDRgtC40LLQvdC+0LUg0L/QuNGC0LDQvdC40LUg0Lgg0LzQvdC+0LPQvtC1INC00YDRg9Cz0L7QtS4nLFxuICAgIGdyYWRpZW50OiAnZnJvbS1za3ktNTAwLzIwIHRvLXNreS02MDAvNScsXG4gICAgYWNjZW50OiAndGV4dC1za3ktNjAwJyxcbiAgICBpY29uQmc6ICdiZy1za3ktNTAwJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTYW1idWNvbCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAn0JjQt9Cy0LXRgdGC0L3Ri9C5INCx0YDQtdC90LQg0L3QsCDQvtGB0L3QvtCy0LUg0YfQtdGA0L3QvtC5INCx0YPQt9C40L3RiyDQtNC70Y8g0L/QvtC00LTQtdGA0LbQutC4INC40LzQvNGD0L3QuNGC0LXRgtCwINCy0LfRgNC+0YHQu9GL0YUg0Lgg0LTQtdGC0LXQuS4g0J7RgdC+0LHQtdC90L3QviDQv9C+0L/Rg9C70Y/RgNC10L0g0LIg0YHQtdC30L7QvSDQv9GA0L7RgdGC0YPQtCDQuCDQstC40YDRg9GB0L3Ri9GFINC90LDQs9GA0YPQt9C+0LouJyxcbiAgICBncmFkaWVudDogJ2Zyb20tZW1lcmFsZC01MDAvMjAgdG8tZW1lcmFsZC02MDAvNScsXG4gICAgYWNjZW50OiAndGV4dC1lbWVyYWxkLTYwMCcsXG4gICAgaWNvbkJnOiAnYmctZW1lcmFsZC01MDAnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0xpZmUgRXh0ZW5zaW9uJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICfQn9GA0LXQvNC40LDQu9GM0L3Ri9C1INGE0L7RgNC80YPQu9GLINC00LvRjyDQv9C+0LTQtNC10YDQttC60Lgg0LTQvtC70LPQvtC70LXRgtC40Y8sINC30LTQvtGA0L7QstGM0Y8g0YHQtdGA0LTRhtCwLCDQvNC+0LfQs9CwLCDRgdC+0YHRg9C00L7QsiDQuCDQvtCx0YnQtdCz0L4g0LrQsNGH0LXRgdGC0LLQsCDQttC40LfQvdC4LiDQktGL0YHQvtC60LjQtSDRgdGC0LDQvdC00LDRgNGC0Ysg0LjRgdGB0LvQtdC00L7QstCw0L3QuNC5INC4INGB0L7RgdGC0LDQstCwLicsXG4gICAgZ3JhZGllbnQ6ICdmcm9tLWFtYmVyLTUwMC8yMCB0by1hbWJlci02MDAvNScsXG4gICAgYWNjZW50OiAndGV4dC1hbWJlci02MDAnLFxuICAgIGljb25CZzogJ2JnLWFtYmVyLTUwMCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRvY3RvcidzIEJlc3RcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICfQndCw0YPRh9C90YvQuSDQv9C+0LTRhdC+0LQg0Lgg0Y3RhNGE0LXQutGC0LjQstC90YvQtSDRhNC+0YDQvNGD0LvRiyDQtNC70Y8g0YHRg9GB0YLQsNCy0L7Qsiwg0L3QtdGA0LLQvdC+0Lkg0YHQuNGB0YLQtdC80YssINGB0L3QsCwg0Y3QvdC10YDQs9C40Lgg0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjyDQvtGA0LPQsNC90LjQt9C80LAuJyxcbiAgICBncmFkaWVudDogJ2Zyb20tcm9zZS01MDAvMjAgdG8tcm9zZS02MDAvNScsXG4gICAgYWNjZW50OiAndGV4dC1yb3NlLTYwMCcsXG4gICAgaWNvbkJnOiAnYmctcm9zZS01MDAnLFxuICB9LFxuXTtcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgeyBpY29uOiBQaWxsLCBuYW1lOiAn0JLQuNGC0LDQvNC40L0gRDMg0LggSzInLCBjb2xvcjogJ2JnLXN0b25lLTEwMCcsIGljb25Db2xvcjogJ3RleHQtc3RvbmUtNTAwJyB9LFxuICB7IGljb246IFphcCwgbmFtZTogJ9Cc0LDQs9C90LjQuSDQuCDRhtC40L3QuicsIGNvbG9yOiAnYmctc3RvbmUtMTAwJywgaWNvbkNvbG9yOiAndGV4dC1zdG9uZS01MDAnIH0sXG4gIHsgaWNvbjogSGVhcnQsIG5hbWU6ICfQntC80LXQs9CwLTMnLCBjb2xvcjogJ2JnLXN0b25lLTEwMCcsIGljb25Db2xvcjogJ3RleHQtc3RvbmUtNTAwJyB9LFxuICB7IGljb246IFNwYXJrbGVzLCBuYW1lOiAn0JrQvtC70LvQsNCz0LXQvScsIGNvbG9yOiAnYmctc3RvbmUtMTAwJywgaWNvbkNvbG9yOiAndGV4dC1zdG9uZS01MDAnIH0sXG4gIHsgaWNvbjogU2hpZWxkLCBuYW1lOiAn0JjQvNC80YPQvdC40YLQtdGCJywgY29sb3I6ICdiZy1zdG9uZS0xMDAnLCBpY29uQ29sb3I6ICd0ZXh0LXN0b25lLTUwMCcgfSxcbiAgeyBpY29uOiBCb25lLCBuYW1lOiAn0KHRg9GB0YLQsNCy0YsnLCBjb2xvcjogJ2JnLXN0b25lLTEwMCcsIGljb25Db2xvcjogJ3RleHQtc3RvbmUtNTAwJyB9LFxuICB7IGljb246IE1vb24sIG5hbWU6ICfQodC+0L0g0Lgg0L3QtdGA0LLRiycsIGNvbG9yOiAnYmctc3RvbmUtMTAwJywgaWNvbkNvbG9yOiAndGV4dC1zdG9uZS01MDAnIH0sXG4gIHsgaWNvbjogRHVtYmJlbGwsIG5hbWU6ICfQrdC90LXRgNCz0LjRjycsIGNvbG9yOiAnYmctc3RvbmUtMTAwJywgaWNvbkNvbG9yOiAndGV4dC1zdG9uZS01MDAnIH0sXG5dO1xuXG5jb25zdCBhdWRpZW5jZXMgPSBbXG4gIHtcbiAgICBpY29uOiBMZWFmLFxuICAgIHRpdGxlOiAn0JfQtNC+0YDQvtCy0YzQtSDQuCDRjdC90LXRgNCz0LjRjycsXG4gICAgZGVzYzogJ9CU0LvRjyDRgtC10YUsINC60YLQviDRhdC+0YfQtdGCINGH0YPQstGB0YLQstC+0LLQsNGC0Ywg0YHQtdCx0Y8g0LHQvtC00YDRi9C8INC4INC/0L7Qu9C90YvQvCDRgdC40Lsg0LrQsNC20LTRi9C5INC00LXQvdGMJyxcbiAgICBncmFkaWVudDogJ2Zyb20tZW1lcmFsZC01MDAgdG8tdGVhbC01MDAnLFxuICB9LFxuICB7XG4gICAgaWNvbjogRHVtYmJlbGwsXG4gICAgdGl0bGU6ICfQodC/0L7RgNGCINC4INCw0LrRgtC40LLQvdC+0YHRgtGMJyxcbiAgICBkZXNjOiAn0JTQu9GPINGB0L/QvtGA0YLRgdC80LXQvdC+0LIg0Lgg0LvRjtC00LXQuSwg0LLQtdC00YPRidC40YUg0LDQutGC0LjQstC90YvQuSDQvtCx0YDQsNC3INC20LjQt9C90LgnLFxuICAgIGdyYWRpZW50OiAnZnJvbS1za3ktNTAwIHRvLWJsdWUtNTAwJyxcbiAgfSxcbiAge1xuICAgIGljb246IFVzZXJzLFxuICAgIHRpdGxlOiAn0JjQvNC80YPQvdC40YLQtdGCINGB0LXQvNGM0LgnLFxuICAgIGRlc2M6ICfQlNC70Y8g0L/QvtC00LTQtdGA0LbQutC4INC30LTQvtGA0L7QstGM0Y8g0LLRgdC10YUg0YfQu9C10L3QvtCyINGB0LXQvNGM0Lgg4oCUINC+0YIg0LTQtdGC0LXQuSDQtNC+INGB0YLQsNGA0YjQtdCz0L4g0L/QvtC60L7Qu9C10L3QuNGPJyxcbiAgICBncmFkaWVudDogJ2Zyb20tYW1iZXItNTAwIHRvLW9yYW5nZS01MDAnLFxuICB9LFxuICB7XG4gICAgaWNvbjogQ2xvY2ssXG4gICAgdGl0bGU6ICfQktC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNC1JyxcbiAgICBkZXNjOiAn0JTQu9GPINC+0YDQs9Cw0L3QuNC30LzQsCDQv9C+0YHQu9C1INC90LDQs9GA0YPQt9C+0LosINGB0YLRgNC10YHRgdC+0LIg0Lgg0L/QtdGA0LXQvdC10YHRkdC90L3Ri9GFINC30LDQsdC+0LvQtdCy0LDQvdC40LknLFxuICAgIGdyYWRpZW50OiAnZnJvbS1yb3NlLTUwMCB0by1waW5rLTUwMCcsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBTcGFya2xlcyxcbiAgICB0aXRsZTogJ9Ca0YDQsNGB0L7RgtCwJyxcbiAgICBkZXNjOiAn0JTQu9GPINC60L7QttC4LCDQstC+0LvQvtGBINC4INC90L7Qs9GC0LXQuSDigJQg0L/QvtC00LTQtdGA0LbQuNCy0LDQudGC0LUg0LrRgNCw0YHQvtGC0YMg0LjQt9C90YPRgtGA0LgnLFxuICAgIGdyYWRpZW50OiAnZnJvbS1mdWNoc2lhLTUwMCB0by1wdXJwbGUtNTAwJyxcbiAgfSxcbl07XG5cbmNvbnN0IGFkdmFudGFnZXMgPSBbXG4gIHtcbiAgICBpY29uOiBTaGllbGQsXG4gICAgdGl0bGU6ICfQntGA0LjQs9C40L3QsNC70YzQvdCw0Y8g0L/RgNC+0LTRg9C60YbQuNGPJyxcbiAgICBkZXNjOiAn0KLQvtC70YzQutC+INC90LDRgdGC0L7Rj9GJ0LjQtSDQkdCQ0JTRiyDQuNC3INCh0KjQkCwg0LHQtdC3INC/0L7QtNC00LXQu9C+0Log0Lgg0LrQvtC/0LjQuScsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBTdGFyLFxuICAgIHRpdGxlOiAn0JzQuNGA0L7QstGL0LUg0LHRgNC10L3QtNGLJyxcbiAgICBkZXNjOiAnTk9XLCBTYW1idWNvbCwgTGlmZSBFeHRlbnNpb24sIERvY3RvclxcJ3MgQmVzdCcsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBGbGFza0NvbmljYWwsXG4gICAgdGl0bGU6ICfQodC10YDRgtC40YTQuNC60LDRgtGLINC60LDRh9C10YHRgtCy0LAnLFxuICAgIGRlc2M6ICfQmtCw0LbQtNCw0Y8g0L/QsNGA0YLQuNGPINC/0YDQvtGF0L7QtNC40YIg0LvQsNCx0L7RgNCw0YLQvtGA0L3Ri9C5INC60L7QvdGC0YDQvtC70YwnLFxuICB9LFxuICB7XG4gICAgaWNvbjogVHJ1Y2ssXG4gICAgdGl0bGU6ICfQkdGL0YHRgtGA0LDRjyDQtNC+0YHRgtCw0LLQutCwJyxcbiAgICBkZXNjOiAn0J7Qv9C10YDQsNGC0LjQstC90LDRjyDQvtGC0L/RgNCw0LLQutCwINC/0L4g0LLRgdC10LzRgyDQmtCw0LfQsNGF0YHRgtCw0L3RgycsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBDbG9jayxcbiAgICB0aXRsZTogJ9Ch0LLQtdC20LjQtSDRgdGA0L7QutC4JyxcbiAgICBkZXNjOiAn0JDQutGC0YPQsNC70YzQvdGL0LUg0YHRgNC+0LrQuCDQs9C+0LTQvdC+0YHRgtC4INC90LAg0LLRgdGOINC/0YDQvtC00YPQutGG0LjRjicsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBGaW5nZXJwcmludCxcbiAgICB0aXRsZTogJ9CY0L3QtNC40LLQuNC00YPQsNC70YzQvdGL0Lkg0L/QvtC00LHQvtGAJyxcbiAgICBkZXNjOiAn0JrQvtC90YHRg9C70YzRgtCw0YbQuNGPINC/0L4g0LLRi9Cx0L7RgNGDINCy0LjRgtCw0LzQuNC90L7QsiDQv9C+0LQg0LLQsNGI0Lgg0YbQtdC70LgnLFxuICB9LFxuXTtcblxuY29uc3QgcXVhbGl0eUZlYXR1cmVzID0gW1xuICB7XG4gICAgaWNvbjogU2hpZWxkLFxuICAgIHRpdGxlOiAn0J/RgNC+0LLQtdGA0LXQvdC90YvQtSDQv9C+0YHRgtCw0LLRidC40LrQuCcsXG4gICAgZGVzYzogJ9Cg0LDQsdC+0YLQsNC10Lwg0YLQvtC70YzQutC+INGBINC+0YTQuNGG0LjQsNC70YzQvdGL0LzQuCDQtNC40YHRgtGA0LjQsdGM0Y7RgtC+0YDQsNC80Lgg0LIg0KHQqNCQJyxcbiAgfSxcbiAge1xuICAgIGljb246IEZsYXNrQ29uaWNhbCxcbiAgICB0aXRsZTogJ9Cb0LDQsdC+0YDQsNGC0L7RgNC90YvQuSDQutC+0L3RgtGA0L7Qu9GMJyxcbiAgICBkZXNjOiAn0JrQsNC20LTQsNGPINC/0LDRgNGC0LjRjyDQv9GA0L7RhdC+0LTQuNGCINC/0YDQvtCy0LXRgNC60YMg0L3QsCDQv9C+0LTQu9C40L3QvdC+0YHRgtGMINC4INC60LDRh9C10YHRgtCy0L4nLFxuICB9LFxuICB7XG4gICAgaWNvbjogQXdhcmQsXG4gICAgdGl0bGU6ICfQnNC10LbQtNGD0L3QsNGA0L7QtNC90YvQtSDRgdGC0LDQvdC00LDRgNGC0YsnLFxuICAgIGRlc2M6ICdHTVAsIE5TRiwgRkRBIOKAlCDQv9GA0L7QtNGD0LrRhtC40Y8g0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0LLRi9GB0YjQuNC8INGB0YLQsNC90LTQsNGA0YLQsNC8JyxcbiAgfSxcbiAge1xuICAgIGljb246IENoZWNrQ2lyY2xlLFxuICAgIHRpdGxlOiAn0J7RgNC40LPQuNC90LDQu9GM0L3QvtGB0YLRjCDQs9Cw0YDQsNC90YLQuNGA0L7QstCw0L3QsCcsXG4gICAgZGVzYzogJ9CX0LDRidC40YnQsNC10Lwg0L3QsNGI0LjRhSDQutC70LjQtdC90YLQvtCyINC+0YIg0LrQvtC90YLRgNCw0YTQsNC60YLQsCDQuCDQv9C+0LTQtNC10LvQvtC6JyxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7IG5hbWU6ICcnLCBwaG9uZTogJycsIG1lc3NhZ2U6ICcnIH0pO1xuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIDgwMCkpO1xuICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBpZiAoc3VibWl0dGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgYmctZW1lcmFsZC0xMDAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICA8Q2hlY2tDaXJjbGUgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LWVtZXJhbGQtNjAwXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0yXCI+0JfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwITwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj7QndCw0Ygg0LzQtdC90LXQtNC20LXRgCDRgdCy0Y/QttC10YLRgdGPINGBINCy0LDQvNC4INCyINCx0LvQuNC20LDQudGI0LXQtSDQstGA0LXQvNGPLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCBtYi0xXCI+0JLQsNGI0LUg0LjQvNGPPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFsdWU9e2Zvcm0ubmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0zIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC14bCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctc2t5LTUwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQgdHJhbnNpdGlvbiB0ZXh0LWdyYXktOTAwIHBsYWNlaG9sZGVyLWdyYXktNDAwXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LLQsNC9INCY0LLQsNC90L7QslwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMVwiPtCi0LXQu9C10YTQvtC9INC40LvQuCBXaGF0c0FwcDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFsdWU9e2Zvcm0ucGhvbmV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgcGhvbmU6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLXhsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1za3ktNTAwIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCB0cmFuc2l0aW9uIHRleHQtZ3JheS05MDAgcGxhY2Vob2xkZXItZ3JheS00MDBcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzcgNzc3IDAwMCAwMCAwMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgbWItMVwiPtCS0LDRiCDQstC+0L/RgNC+0YEgKNC90LXQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+KTwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgdmFsdWU9e2Zvcm0ubWVzc2FnZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBtZXNzYWdlOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0zIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC14bCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctc2t5LTUwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQgdHJhbnNpdGlvbiB0ZXh0LWdyYXktOTAwIHBsYWNlaG9sZGVyLWdyYXktNDAwIHJlc2l6ZS1ub25lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QtNCx0L7RgCDQstC40YLQsNC80LjQvdC+0LIg0LTQu9GPLi4uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1za3ktNjAwIGhvdmVyOmJnLXNreS03MDAgZGlzYWJsZWQ6b3BhY2l0eS02MCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMy41IHB4LTYgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy1sZ1wiXG4gICAgICA+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTUgaC01IGJvcmRlci0yIGJvcmRlci13aGl0ZSBib3JkZXItdC10cmFuc3BhcmVudCByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LjRgtGMINC30LDRj9Cy0LrRgyA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVyb1NsaWRlcigpIHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgbmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEN1cnJlbnQoKGkpID0+IChpICsgMSkgJSBoZXJvU2xpZGVzLmxlbmd0aCksIFtdKTtcbiAgY29uc3QgcHJldiA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEN1cnJlbnQoKGkpID0+IChpIC0gMSArIGhlcm9TbGlkZXMubGVuZ3RoKSAlIGhlcm9TbGlkZXMubGVuZ3RoKSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChuZXh0LCA1MDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0sIFtuZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbFwiIHN0eWxlPXt7IGhlaWdodDogJ21pbig4MDBweCwgMTAwdmgpJyB9fT5cbiAgICAgIHtoZXJvU2xpZGVzLm1hcCgoc2xpZGUsIGkpID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0xMDAwXCJcbiAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBpID09PSBjdXJyZW50ID8gMSA6IDAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWcgc3JjPXtzbGlkZS5pbWFnZX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtwcmV2fVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTQgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctMTAgaC0xMCBiZy13aGl0ZS8xMCBiYWNrZHJvcC1ibHVyLXNtIGJvcmRlciBib3JkZXItd2hpdGUvMjAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvMjAgdHJhbnNpdGlvbiB6LTIwXCJcbiAgICAgID5cbiAgICAgICAgPENoZXZyb25MZWZ0IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e25leHR9XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTQgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHctMTAgaC0xMCBiZy13aGl0ZS8xMCBiYWNrZHJvcC1ibHVyLXNtIGJvcmRlciBib3JkZXItd2hpdGUvMjAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvMjAgdHJhbnNpdGlvbiB6LTIwXCJcbiAgICAgID5cbiAgICAgICAgPENoZXZyb25SaWdodCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tOCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHotMjBcIj5cbiAgICAgICAge2hlcm9TbGlkZXMubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudChpKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtMi41IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgaSA9PT0gY3VycmVudCA/ICdiZy13aGl0ZSB3LTgnIDogJ2JnLXdoaXRlLzQwIGhvdmVyOmJnLXdoaXRlLzYwIHctMi41J1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTWFycXVlZSgpIHtcbiAgY29uc3QgZG91YmxlZCA9IFsuLi5icmFuZExvZ29zLCAuLi5icmFuZExvZ29zLCAuLi5icmFuZExvZ29zLCAuLi5icmFuZExvZ29zXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgYm90dG9tLTAgdy0yNCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS01MCB0by10cmFuc3BhcmVudCB6LTEwXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBib3R0b20tMCB3LTI0IGJnLWdyYWRpZW50LXRvLWwgZnJvbS1ncmF5LTUwIHRvLXRyYW5zcGFyZW50IHotMTBcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMjAgYW5pbWF0ZS1tYXJxdWVlXCI+XG4gICAgICAgIHtkb3VibGVkLm1hcCgoYnJhbmQsIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTIwIG1pbi13LVsyMjBweF1cIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXticmFuZC51cmx9XG4gICAgICAgICAgICAgIGFsdD17YnJhbmQubmFtZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LWgtMTQgbWF4LXctWzIwMHB4XSB3LWF1dG8gb2JqZWN0LWNvbnRhaW4gb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIChlLnRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzY3JvbGxUbyA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpPy5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICBzZXRNZW51T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwIHRleHQtZ3JheS05MDAgZm9udC1zYW5zXCI+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTUwIGJnLXdoaXRlLzk1IGJhY2tkcm9wLWJsdXItc20gYm9yZGVyLWIgYm9yZGVyLWdyYXktMTAwIHNoYWRvdy1zbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17TE9HT19VUkx9IGFsdD1cIk5PVyBLWlwiIGNsYXNzTmFtZT1cImgtOSB3LWF1dG8gb2JqZWN0LWNvbnRhaW5cIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgaGlkZGVuIHNtOmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgTk9XIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2t5LTYwMFwiPktaPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIGdhcC02IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdicmFuZHMnKX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1za3ktNjAwIHRyYW5zaXRpb25cIj7QkdGA0LXQvdC00Ys8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbygnY2F0ZWdvcmllcycpfSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXNreS02MDAgdHJhbnNpdGlvblwiPtCa0LDRgtCw0LvQvtCzPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ2RlbGl2ZXJ5Jyl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2t5LTYwMCB0cmFuc2l0aW9uXCI+0JTQvtGB0YLQsNCy0LrQsDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ2NvbnRhY3QnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1za3ktNjAwIGhvdmVyOmJnLXNreS03MDAgdGV4dC13aGl0ZSBweC01IHB5LTIuNSByb3VuZGVkLXhsIHRyYW5zaXRpb24gc2hhZG93LXNtIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg0J7RgdGC0LDQstC40YLRjCDQt9Cw0Y/QstC60YNcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIHAtMiByb3VuZGVkLWxnIGhvdmVyOmJnLWdyYXktMTAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bWVudU9wZW4gPyA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gOiA8TWVudSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHttZW51T3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW4gYmctd2hpdGUgYm9yZGVyLXQgYm9yZGVyLWdyYXktMTAwIHB4LTQgcHktNCBmbGV4IGZsZXgtY29sIGdhcC0zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbygnYnJhbmRzJyl9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBweS0yIGhvdmVyOnRleHQtc2t5LTYwMCB0cmFuc2l0aW9uXCI+0JHRgNC10L3QtNGLPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdjYXRlZ29yaWVzJyl9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBweS0yIGhvdmVyOnRleHQtc2t5LTYwMCB0cmFuc2l0aW9uXCI+0JrQsNGC0LDQu9C+0LM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ2RlbGl2ZXJ5Jyl9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBweS0yIGhvdmVyOnRleHQtc2t5LTYwMCB0cmFuc2l0aW9uXCI+0JTQvtGB0YLQsNCy0LrQsDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbygnY29udGFjdCcpfSBjbGFzc05hbWU9XCJiZy1za3ktNjAwIHRleHQtd2hpdGUgcHgtNCBweS0yLjUgcm91bmRlZC14bCB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgINCe0YHRgtCw0LLQuNGC0Ywg0LfQsNGP0LLQutGDXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICB7LyogSGVybyB3aXRoIHNsaWRlciAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8SGVyb1NsaWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXNsYXRlLTkwMC85MCB2aWEtc2xhdGUtOTAwLzcwIHRvLXNsYXRlLTkwMC80MCB6LTEwXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIHotMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04IHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgcHktMTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctc2t5LTUwMC8yMCBib3JkZXIgYm9yZGVyLXNreS00MDAvMzAgcm91bmRlZC1mdWxsIHB4LTQgcHktMS41IHRleHQtc2t5LTMwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLThcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTIgaC0yIGJnLXNreS00MDAgcm91bmRlZC1mdWxsIGFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgICAgICAgINCe0YTQuNGG0LjQsNC70YzQvdGL0LUg0L/QvtGB0YLQsNCy0LrQuCDQuNC3INCh0KjQkFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHNtOnRleHQtNnhsIGxnOnRleHQtN3hsIGZvbnQtZXh0cmFib2xkIGxlYWRpbmctWzEuMDVdIG1iLTggdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgINCe0YDQuNCz0LjQvdCw0LvRjNC90YvQtTxiciAvPlxuICAgICAgICAgICAgICAgINCR0JDQlNGLINC40Lcg0KHQqNCQPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1za3ktNDAwXCI+0LIg0JrQsNC30LDRhdGB0YLQsNC90LU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgc206dGV4dC0yeGwgdGV4dC1zbGF0ZS0zMDAgbGVhZGluZy1yZWxheGVkIG1iLTEwIGZvbnQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICBOT1csIFNhbWJ1Y29sLCBMaWZlIEV4dGVuc2lvbiwgRG9jdG9yJ3MgQmVzdCDigJQg0L/RgNC+0LLQtdGA0LXQvdC90YvQtSDQsdGA0LXQvdC00Ysg0LTQu9GPINC40LzQvNGD0L3QuNGC0LXRgtCwLCDRjdC90LXRgNCz0LjQuCwg0YHQtdGA0LTRhtCwLCDRgdGD0YHRgtCw0LLQvtCyLCDRgdC90LAg0Lgg0LrRgNCw0YHQvtGC0YsuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ2NvbnRhY3QnKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNreS01MDAgaG92ZXI6Ymctc2t5LTQwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweC04IHB5LTQgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy1za3ktNTAwLzMwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHRleHQtbGdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgINCf0L7Qu9GD0YfQuNGC0Ywg0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdjYXRlZ29yaWVzJyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZS8xMCBob3ZlcjpiZy13aGl0ZS8yMCBib3JkZXIgYm9yZGVyLXdoaXRlLzIwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB4LTggcHktNCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDQodC80L7RgtGA0LXRgtGMINC60LDRgtCw0LvQvtCzXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGgtMjQgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWdyYXktNTAgdG8tdHJhbnNwYXJlbnQgei0xMFwiIC8+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBXaHkgVXMg4oCUIFByZW1pdW0gY2FyZHMgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yMCBiZy1ncmF5LTUwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTE2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1za3ktMTAwIHRleHQtc2t5LTcwMCByb3VuZGVkLWZ1bGwgcHgtNCBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIG1iLTRcIj5cbiAgICAgICAgICAgICAgPFN0YXIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+INCd0LDRiNC4INC/0YDQtdC40LzRg9GJ0LXRgdGC0LLQsFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgc206dGV4dC00eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtYi00XCI+0J/QvtGH0LXQvNGDINCy0YvQsdC40YDQsNGO0YIg0L3QsNGBPzwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG1heC13LXhsIG14LWF1dG8gdGV4dC1sZ1wiPtCa0LDRh9C10YHRgtCy0L4sINC90LDQtNGR0LbQvdC+0YHRgtGMINC4INC30LDQsdC+0YLQsCDQviDQutCw0LbQtNC+0Lwg0LrQu9C40LXQvdGC0LU8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICB7YWR2YW50YWdlcy5tYXAoKHsgaWNvbjogSWNvbiwgdGl0bGUsIGRlc2MgfSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17dGl0bGV9IGNsYXNzTmFtZT1cImdyb3VwIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHAtNyBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLXhsIGJnLXNsYXRlLTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi01IGdyb3VwLWhvdmVyOmJnLXNreS0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtc2xhdGUtNDAwIGdyb3VwLWhvdmVyOnRleHQtc2t5LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTJcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtc20gbGVhZGluZy1yZWxheGVkXCI+e2Rlc2N9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEJyYW5kcyDigJQgTWFycXVlZSArIENhcmRzICovfVxuICAgICAgPHNlY3Rpb24gaWQ9XCJicmFuZHNcIiBjbGFzc05hbWU9XCJweS0yMCBiZy1ncmF5LTUwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1za3ktMTAwIHRleHQtc2t5LTcwMCByb3VuZGVkLWZ1bGwgcHgtNCBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIG1iLTRcIj5cbiAgICAgICAgICAgICAgPEF3YXJkIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPiDQnNC40YDQvtCy0YvQtSDQsdGA0LXQvdC00YtcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgbWItNFwiPtCR0YDQtdC90LTRiywg0LrQvtGC0L7RgNGL0Lwg0LTQvtCy0LXRgNGP0Y7RgjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG1heC13LXhsIG14LWF1dG8gdGV4dC1sZ1wiPtCS0LXQtNGD0YnQuNC1INCw0LzQtdGA0LjQutCw0L3RgdC60LjQtSDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvQuCDRgSDQvNC40YDQvtCy0YvQvCDQv9GA0LjQt9C90LDQvdC40LXQvDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNYXJxdWVlIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggbXQtMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgIHticmFuZERldGFpbHMubWFwKChicmFuZCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXticmFuZC5uYW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHAtOCByb3VuZGVkLTJ4bCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgaC0xIGJnLWdyYWRpZW50LXRvLXIgJHticmFuZC5pY29uQmd9YH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIC10b3AtMTIgLXJpZ2h0LTEyIHctMzIgaC0zMiBiZy1ncmFkaWVudC10by1ibCAke2JyYW5kLmdyYWRpZW50fSByb3VuZGVkLWJsLWZ1bGwgZ3JvdXAtaG92ZXI6c2NhbGUtMTUwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMGB9IC8+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17YHRleHQteGwgZm9udC1ib2xkICR7YnJhbmQuYWNjZW50fSBtYi0zIHJlbGF0aXZlIHotMTBgfT57YnJhbmQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgbGVhZGluZy1yZWxheGVkIHRleHQtc20gcmVsYXRpdmUgei0xMFwiPnticmFuZC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogQ2F0ZWdvcmllcyDigJQgUmljaCBjYXJkcyAqL31cbiAgICAgIDxzZWN0aW9uIGlkPVwiY2F0ZWdvcmllc1wiIGNsYXNzTmFtZT1cInB5LTIwIGJnLWdyYXktNTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJnLXNreS0xMDAgdGV4dC1za3ktNzAwIHJvdW5kZWQtZnVsbCBweC00IHB5LTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbWItNFwiPlxuICAgICAgICAgICAgICA8UGlsbCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz4g0JrQsNGC0LDQu9C+0LNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgbWItNFwiPtCf0L7Qv9GD0LvRj9GA0L3Ri9C1INC60LDRgtC10LPQvtGA0LjQuDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG1heC13LXhsIG14LWF1dG8gdGV4dC1sZ1wiPtCf0L7QtNCx0LXRgNC40YLQtSDQtNC+0LHQsNCy0LrQuCDQv9C+0LQg0LLQsNGI0YMg0YbQtdC70Yw8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC01XCI+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKHsgaWNvbjogSWNvbiwgbmFtZSwgY29sb3IsIGljb25Db2xvciB9KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e25hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgYmctd2hpdGUgcm91bmRlZC0yeGwgcC02IGJvcmRlciBib3JkZXItZ3JheS0xMDAgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBjdXJzb3ItZGVmYXVsdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMTQgaC0xNCByb3VuZGVkLTJ4bCAke2NvbG9yfSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi00IGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBgfT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17YHctNyBoLTcgJHtpY29uQ29sb3J9IGdyb3VwLWhvdmVyOnRleHQtc2t5LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBgfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS04MDAgbGVhZGluZy1zbnVnXCI+e25hbWV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEZvciBXaG9tIOKAlCBSaWNoIGF1ZGllbmNlIGNhcmRzICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGJnLXNreS0xMDAgdGV4dC1za3ktNzAwIHJvdW5kZWQtZnVsbCBweC00IHB5LTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbWItNFwiPlxuICAgICAgICAgICAgICA8VXNlcnMgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+INCm0LXQu9C10LLQsNGPINCw0YPQtNC40YLQvtGA0LjRj1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgc206dGV4dC00eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtYi00XCI+0JTQu9GPINC60L7Qs9C+INC90LDRiNC4INCR0JDQlNGLPzwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIG1heC13LXhsIG14LWF1dG8gdGV4dC1sZ1wiPtCf0L7QtNGF0L7QtNGP0YIg0LvRjtC00Y/QvCDRgSDRgNCw0LfQvdGL0LzQuCDRhtC10LvRj9C80Lgg0Lgg0L7QsdGA0LDQt9C+0Lwg0LbQuNC30L3QuDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICAgIHthdWRpZW5jZXMubWFwKCh7IGljb246IEljb24sIHRpdGxlLCBkZXNjLCBncmFkaWVudCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXt0aXRsZX0gY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgYmctZ3JheS01MCByb3VuZGVkLTJ4bCBwLTcgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudH0gb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktWzAuMDZdIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBgfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0xMiBoLTEyIHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tYnIgJHtncmFkaWVudH0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNCBzaGFkb3ctc21gfT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgbWItMiByZWxhdGl2ZSB6LTEwXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZCByZWxhdGl2ZSB6LTEwXCI+e2Rlc2N9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIFF1YWxpdHkg4oCUIDQgZmVhdHVyZSBjYXJkcyBpbiB1bmlmaWVkIHN0eWxlICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjAgYmctZ3JheS01MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctc2t5LTEwMCB0ZXh0LXNreS03MDAgcm91bmRlZC1mdWxsIHB4LTQgcHktMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCBtYi00XCI+XG4gICAgICAgICAgICAgIDxTaGllbGQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+INCd0LDQtNGR0LbQvdC+0YHRgtGMXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTRcIj7Qk9Cw0YDQsNC90YLQuNGPINC60LDRh9C10YHRgtCy0LA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBtYXgtdy14bCBteC1hdXRvIHRleHQtbGdcIj7QnNGLINGC0YnQsNGC0LXQu9GM0L3QviDQutC+0L3RgtGA0L7Qu9C40YDRg9C10Lwg0LrQsNC20LTRg9GOINC/0LDRgNGC0LjRjiwg0YfRgtC+0LHRiyDQstGLINC/0L7Qu9GD0YfQsNC70Lgg0YLQvtC70YzQutC+INC70YPRh9GI0LXQtTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtxdWFsaXR5RmVhdHVyZXMubWFwKCh7IGljb246IEljb24sIHRpdGxlLCBkZXNjIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3RpdGxlfSBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBiZy13aGl0ZSByb3VuZGVkLTJ4bCBwLTggYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1za3ktNTAwIHRvLWJsdWUtNjAwIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LVswLjA0XSB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1za3ktNTAwIHRvLWJsdWUtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTAgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTJcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZFwiPntkZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIERlbGl2ZXJ5ICovfVxuICAgICAgPHNlY3Rpb24gaWQ9XCJkZWxpdmVyeVwiIGNsYXNzTmFtZT1cInB5LTIwIGJnLXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTEyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctc2t5LTEwMCB0ZXh0LXNreS03MDAgcm91bmRlZC1mdWxsIHB4LTQgcHktMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgPFRydWNrIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPiDQm9C+0LPQuNGB0YLQuNC60LBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIG1iLTRcIj7QlNC+0YHRgtCw0LLQutCwINC/0L4g0JrQsNC30LDRhdGB0YLQsNC90YM8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTZcIj5cbiAgICAgICAgICAgICAgICDQntC/0LXRgNCw0YLQuNCy0L3QsNGPINC00L7RgdGC0LDQstC60LAg0LIg0JDQu9C80LDRgtGLLCDQkNGB0YLQsNC90YMsINCo0YvQvNC60LXQvdGCINC4INC00YDRg9Cz0LjQtSDQs9C+0YDQvtC00LAg0JrQsNC30LDRhdGB0YLQsNC90LAuINCj0LTQvtCx0L3QsNGPINC+0L/Qu9Cw0YLQsCDQuCDQv9C+0LzQvtGJ0Ywg0LIg0L/QvtC00LHQvtGA0LUg0L/RgNC+0LTRg9C60YbQuNC4INC/0L7QtCDQstCw0YjQuCDRhtC10LvQuC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgIHtbJ9CQ0LvQvNCw0YLRiycsICfQkNGB0YLQsNC90LAnLCAn0KjRi9C80LrQtdC90YInLCAn0JTRgNGD0LPQuNC1INCz0L7RgNC+0LTQsCDQmtCw0LfQsNGF0YHRgtCw0L3QsCddLm1hcCgoY2l0eSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NpdHl9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXNreS01MDAgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgZm9udC1tZWRpdW1cIj57Y2l0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgIHsgaWNvbjogVHJ1Y2ssIHRpdGxlOiAn0JHRi9GB0YLRgNCw0Y8g0LTQvtGB0YLQsNCy0LrQsCcsIGRlc2M6ICfQntC/0LXRgNCw0YLQuNCy0L3QsNGPINC+0YLQv9GA0LDQstC60LAg0L/QvtGB0LvQtSDQvtGE0L7RgNC80LvQtdC90LjRjyDQt9Cw0LrQsNC30LAnLCBncmFkaWVudDogJ2Zyb20tc2t5LTUwMCB0by1ibHVlLTYwMCcgfSxcbiAgICAgICAgICAgICAgICB7IGljb246IFNoaWVsZCwgdGl0bGU6ICfQntGA0LjQs9C40L3QsNC70YzQvdC+0YHRgtGMJywgZGVzYzogJ9Ca0LDQttC00LDRjyDQv9Cw0YDRgtC40Y8g0L/RgNC+0YXQvtC00LjRgiDQutC+0L3RgtGA0L7Qu9GMINC60LDRh9C10YHRgtCy0LAnLCBncmFkaWVudDogJ2Zyb20tZW1lcmFsZC01MDAgdG8tdGVhbC02MDAnIH0sXG4gICAgICAgICAgICAgICAgeyBpY29uOiBDaGVja0NpcmNsZSwgdGl0bGU6ICfQodC10YDRgtC40YTQuNC60LDRgtGLJywgZGVzYzogJ9CS0YHRjyDQv9GA0L7QtNGD0LrRhtC40Y8g0YHQtdGA0YLQuNGE0LjRhtC40YDQvtCy0LDQvdCwJywgZ3JhZGllbnQ6ICdmcm9tLWFtYmVyLTUwMCB0by1vcmFuZ2UtNjAwJyB9LFxuICAgICAgICAgICAgICAgIHsgaWNvbjogUGhvbmUsIHRpdGxlOiAn0J/QvtC00LTQtdGA0LbQutCwJywgZGVzYzogJ9Ca0L7QvdGB0YPQu9GM0YLQuNGA0YPQtdC8INC/0L4g0L/QvtC00LHQvtGA0YMg0LLQuNGC0LDQvNC40L3QvtCyJywgZ3JhZGllbnQ6ICdmcm9tLXJvc2UtNTAwIHRvLXBpbmstNjAwJyB9LFxuICAgICAgICAgICAgICBdLm1hcCgoeyBpY29uOiBJY29uLCB0aXRsZSwgZGVzYywgZ3JhZGllbnQgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0aXRsZX0gY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgYmctZ3JheS01MCBwLTYgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1iciAke2dyYWRpZW50fSBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS1bMC4wNF0gdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMGB9IC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMTAgaC0xMCByb3VuZGVkLWxnIGJnLWdyYWRpZW50LXRvLWJyICR7Z3JhZGllbnR9IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTMgc2hhZG93LXNtYH0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi0xXCI+e3RpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbGVhZGluZy1zbnVnXCI+e2Rlc2N9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIENvbnRhY3QgKi99XG4gICAgICA8c2VjdGlvbiBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9XCJweS0yMCBiZy1ncmF5LTUwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTEyIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy1za3ktMTAwIHRleHQtc2t5LTcwMCByb3VuZGVkLWZ1bGwgcHgtNCBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8TWFpbCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz4g0KHQstGP0LbQuNGC0LXRgdGMINGBINC90LDQvNC4XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgc206dGV4dC00eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBtYi00XCI+0J7RgdGC0LDQstGM0YLQtSDQt9Cw0Y/QstC60YMg0L/RgNGP0LzQviDRgdC10LnRh9Cw0YE8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLThcIj5cbiAgICAgICAgICAgICAgICDQndCw0Ygg0LzQtdC90LXQtNC20LXRgCDQv9C+0LzQvtC20LXRgiDQv9C+0LTQvtCx0YDQsNGC0Ywg0L/QvtC00YXQvtC00Y/RidC40LUg0LLQuNGC0LDQvNC40L3RiyDQuCDQvtGC0LLQtdGC0LjRgiDQvdCwINCy0YHQtSDQstC+0L/RgNC+0YHRiy4g0JfQsNCx0L7RgtGM0YLQtdGB0Ywg0L4g0LfQtNC+0YDQvtCy0YzQtSDRgSDQutCw0YfQtdGB0YLQstC10L3QvdGL0LzQuCDQstC40YLQsNC80LjQvdCw0LzQuCDQvtGCINC80LjRgNC+0LLRi9GFINCx0YDQtdC90LTQvtCyLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tc2t5LTUwMCB0by1ibHVlLTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPtCa0L7QvdGB0YPQu9GM0YLQsNGG0LjRjyDQv9C+INGC0LXQu9C10YTQvtC90YMg0LjQu9C4IFdoYXRzQXBwPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1iciBmcm9tLWVtZXJhbGQtNTAwIHRvLXRlYWwtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8TWFpbCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7QntGC0LLQtdGC0LjQvCDQsiDRgtC10YfQtdC90LjQtSDQvdC10YHQutC+0LvRjNC60LjRhSDRh9Cw0YHQvtCyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by1iciBmcm9tLWFtYmVyLTUwMCB0by1vcmFuZ2UtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPtCU0L7RgdGC0LDQstC60LAg0L/QviDQstGB0LXQvNGDINCa0LDQt9Cw0YXRgdGC0LDQvdGDPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBwLTggYm9yZGVyIGJvcmRlci1ncmF5LTEwMCBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXNsYXRlLTkwMCB0ZXh0LXNsYXRlLTQwMCBweS0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAg0J7RgNC40LPQuNC90LDQu9GM0L3Ri9C1INCR0JDQlNGLINC40Lcg0KHQqNCQINCyINCa0LDQt9Cw0YXRgdGC0LDQvdC1IOKAlCBOT1csIFNhbWJ1Y29sLCBMaWZlIEV4dGVuc2lvbiwgRG9jdG9yJ3MgQmVzdFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgSlNaaXAgPSAoYXdhaXQgaW1wb3J0KCdqc3ppcCcpKS5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgY29uc3QgemlwID0gbmV3IEpTWmlwKCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBmaWxlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ3BhY2thZ2UuanNvbicsICdwYWNrYWdlLWxvY2suanNvbicsICd0c2NvbmZpZy5qc29uJywgJ3RzY29uZmlnLmFwcC5qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RzY29uZmlnLm5vZGUuanNvbicsICd2aXRlLmNvbmZpZy50cycsICdpbmRleC5odG1sJywgJ3Bvc3Rjc3MuY29uZmlnLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RhaWx3aW5kLmNvbmZpZy5qcycsICdlc2xpbnQuY29uZmlnLmpzJywgJy5naXRpZ25vcmUnLFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBmaWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvJyArIGYpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHppcC5maWxlKGYsIGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCBzcmNGaWxlcyA9IFsnc3JjL0FwcC50c3gnLCAnc3JjL21haW4udHN4JywgJ3NyYy9pbmRleC5jc3MnLCAnc3JjL3ZpdGUtZW52LmQudHMnXTtcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBzcmNGaWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvJyArIGYpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHppcC5maWxlKGYsIGF3YWl0IHJlcy50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHt9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicgfSk7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgICAgICAgICAgICAgIGEuZG93bmxvYWQgPSAnbm93LWt6LXByb2plY3QuemlwJztcbiAgICAgICAgICAgICAgICAgIGEuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgYmctc2xhdGUtODAwIGhvdmVyOmJnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHB4LTMgcHktMS41IHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk0xMiAxMHY2bTAgMGwtMy0zbTMgM2wzLTNtMiA4SDdhMiAyIDAgMDEtMi0yVjVhMiAyIDAgMDEyLTJoNS41ODZhMSAxIDAgMDEuNzA3LjI5M2w1LjQxNCA1LjQxNGExIDEgMCAwMS4yOTMuNzA3VjE5YTIgMiAwIDAxLTIgMnpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgICAgINCh0LrQsNGH0LDRgtGMINC/0YDQvtC10LrRglxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPiZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBOT1cgS1o8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcHJvamVjdC9zcmMvQXBwLnRzeCJ9