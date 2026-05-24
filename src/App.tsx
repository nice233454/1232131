import { useState } from 'react';
import {
  Shield,
  Truck,
  Award,
  Phone,
  ChevronRight,
  Check,
  Star,
  Menu,
  X,
  FlaskConical,
  Users,
  Zap,
  Heart,
  Moon,
  Dumbbell,
  Sparkles,
  Leaf,
} from 'lucide-react';

const LOGO_URL =
  'https://i.postimg.cc/pTW144Nh/a-bold-geometric-wordmark-with-now-in-he-j-Hs-Tax-JOVy-CWrn-Fm-Ixbkhw-8Po-ZMBHSj-WAXb-Ucw8Aa-XA-cove.png';

const brands = [
  {
    name: 'NOW Foods',
    description:
      'Один из самых известных мировых производителей витаминов и добавок. Широкий ассортимент: омега-3, магний, витамин D3, коллаген, аминокислоты, спортивное питание и многое другое.',
    tag: 'Лидер рынка',
  },
  {
    name: 'Sambucol',
    description:
      'Известный бренд на основе черной бузины для поддержки иммунитета взрослых и детей. Особенно популярен в сезон простуд и вирусных нагрузок.',
    tag: 'Иммунитет',
  },
  {
    name: 'Life Extension',
    description:
      'Премиальные формулы для поддержки долголетия, здоровья сердца, мозга, сосудов и общего качества жизни. Высокие стандарты исследований и состава.',
    tag: 'Премиум',
  },
  {
    name: "Doctor's Best",
    description:
      'Научный подход и эффективные формулы для суставов, нервной системы, сна, энергии и восстановления организма.',
    tag: 'Научный подход',
  },
];

const categories = [
  { name: 'Витамин D3 и K2', icon: <Zap className="w-5 h-5" /> },
  { name: 'Магний и цинк', icon: <Sparkles className="w-5 h-5" /> },
  { name: 'Омега-3', icon: <Heart className="w-5 h-5" /> },
  { name: 'Коллаген', icon: <Leaf className="w-5 h-5" /> },
  { name: 'Иммунитет', icon: <Shield className="w-5 h-5" /> },
  { name: 'БАДы для суставов', icon: <FlaskConical className="w-5 h-5" /> },
  { name: 'Сон и нервная система', icon: <Moon className="w-5 h-5" /> },
  { name: 'Энергия и антиоксиданты', icon: <Dumbbell className="w-5 h-5" /> },
];

const audiences = [
  { text: 'Для тех, кто заботится о здоровье и энергии' },
  { text: 'Для спортсменов и активных людей' },
  { text: 'Для поддержки иммунитета всей семьи' },
  { text: 'Для восстановления после нагрузок и стресса' },
  { text: 'Для поддержания красоты кожи, волос и ногтей' },
];

const advantages = [
  { icon: <Shield className="w-6 h-6" />, text: 'Только оригинальные БАДы из США' },
  { icon: <Star className="w-6 h-6" />, text: 'Популярные бренды: NOW, Sambucol, Life Extension, Doctor\'s Best' },
  { icon: <Award className="w-6 h-6" />, text: 'Сертификаты качества и контроль поставок' },
  { icon: <Truck className="w-6 h-6" />, text: 'Быстрая доставка по Казахстану' },
  { icon: <Check className="w-6 h-6" />, text: 'Актуальные сроки годности' },
  { icon: <Phone className="w-6 h-6" />, text: 'Консультация по подбору витаминов' },
];

function Header({ onCtaClick }: { onCtaClick: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="NOW KZ" className="h-9 w-auto object-contain" />
            <span className="text-lg font-semibold text-gray-900 tracking-tight">NOW KZ</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#brands" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">Бренды</a>
            <a href="#categories" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">Категории</a>
            <a href="#delivery" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">Доставка</a>
            <button
              onClick={onCtaClick}
              className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
            >
              Оставить заявку
            </button>
          </nav>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <a href="#brands" className="text-sm text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Бренды</a>
          <a href="#categories" className="text-sm text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Категории</a>
          <a href="#delivery" className="text-sm text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Доставка</a>
          <button
            onClick={() => { setMenuOpen(false); onCtaClick(); }}
            className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-left"
          >
            Оставить заявку
          </button>
        </div>
      )}
    </header>
  );
}

function Hero({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
            Официальные поставки из США
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance">
            Оригинальные БАДы из США —<br className="hidden sm:block" />
            <span className="text-blue-600">NOW, Sambucol, Life Extension, Doctor's Best</span>
            <span className="text-gray-700"> в Казахстане</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl">
            Поддержка здоровья каждый день. Только оригинальная продукция мировых брендов — для иммунитета, энергии, сердца, суставов, сна и красоты.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all shadow-lg shadow-blue-100 text-base"
            >
              Оставить заявку
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="#brands"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-base"
            >
              Узнать о брендах
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {advantages.map((adv, i) => (
            <div key={i} className="flex items-start gap-2.5 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <div className="text-blue-600 shrink-0 mt-0.5">{adv.icon}</div>
              <span className="text-xs text-gray-600 leading-snug font-medium">{adv.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="brands" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Бренды, которым доверяют</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Мировые лидеры в производстве витаминов и добавок</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div key={brand.name} className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{brand.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{brand.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Популярные категории</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Широкий ассортимент для любых целей здоровья</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all cursor-default flex flex-col items-start gap-3"
            >
              <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">{cat.icon}</div>
              <span className="text-sm font-semibold text-gray-800 leading-tight">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Для кого наши БАДы?</h2>
            <p className="text-gray-500 text-lg mb-8">Продукция подходит для всех, кто стремится к здоровью и активной жизни.</p>
            <ul className="space-y-4">
              {audiences.map((a) => (
                <li key={a.text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{a.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white">
            <Users className="w-10 h-10 mb-5 opacity-80" />
            <h3 className="text-2xl font-bold mb-3">Персональная консультация</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              Наш менеджер поможет подобрать подходящие витамины под ваши цели и образ жизни — бесплатно.
            </p>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-300" /> Индивидуальный подбор</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-300" /> Ответы на все вопросы</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-300" /> Советы по применению</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Award className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">Гарантия качества</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Мы понимаем, насколько важно получать безопасную и оригинальную продукцию. Поэтому работаем только с проверенными поставщиками и тщательно контролируем качество каждой партии товара.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Оригинальная продукция', desc: 'Прямые поставки от авторизованных дистрибьюторов' },
            { title: 'Сертификаты качества', desc: 'Каждая партия сопровождается документами' },
            { title: 'Актуальные сроки', desc: 'Гарантируем свежую продукцию с запасом срока годности' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
              <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section id="delivery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-900 rounded-3xl p-10 text-white">
            <Truck className="w-10 h-10 mb-5 text-blue-400" />
            <h2 className="text-3xl font-bold mb-4">Доставка по Казахстану</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Оперативная доставка в Алматы, Астану, Шымкент и другие города Казахстана. Удобная оплата и помощь в подборе продукции под ваши цели.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {['Алматы', 'Астана', 'Шымкент', 'Актобе', 'Павлодар', 'и другие'].map((city) => (
                <div key={city} className="bg-slate-800 rounded-lg px-3 py-2 text-sm text-slate-300 text-center font-medium">{city}</div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Удобный заказ</h3>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Оставьте заявку', desc: 'Заполните форму или напишите нам — менеджер свяжется с вами' },
                { step: '02', title: 'Подбор продукции', desc: 'Поможем выбрать оптимальный набор витаминов под ваши цели' },
                { step: '03', title: 'Быстрая доставка', desc: 'Отправим заказ в удобные сроки по всему Казахстану' },
              ].map((s) => (
                <div key={s.step} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">{s.step}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section ref={formRef} id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Оставьте заявку прямо сейчас</h2>
            <p className="text-blue-100 text-lg">Наш менеджер поможет подобрать подходящие витамины и ответит на все вопросы.</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Заявка получена!</h3>
              <p className="text-gray-500">Наш менеджер свяжется с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ваше имя</label>
                <input
                  type="text"
                  required
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Номер телефона</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Сообщение (необязательно)</label>
                <textarea
                  rows={3}
                  placeholder="Опишите, что вас интересует..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400 transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-lg shadow-blue-100"
              >
                {loading ? 'Отправка...' : 'Отправить заявку'}
              </button>
              <p className="text-xs text-gray-400 text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="NOW KZ" className="h-8 w-auto object-contain brightness-0 invert opacity-80" />
            <span className="text-slate-400 font-medium">NOW KZ</span>
          </div>
          <p className="text-slate-500 text-sm text-center">
            Оригинальные БАДы из США в Казахстане
          </p>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} NOW KZ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header onCtaClick={scrollToForm} />
      <Hero onCtaClick={scrollToForm} />
      <Brands />
      <Categories />
      <Audience />
      <Quality />
      <Delivery />
      <ContactForm />
      <Footer />
    </div>
  );
}
