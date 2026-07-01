import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

const HERO_BG =
  'https://cdn.poehali.dev/projects/da09e928-cde6-453b-964c-455fe7a6b729/files/976ecb43-4916-4549-aa59-36380589e4d3.jpg';

const nav = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'О брокере', href: '#about' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

const services = [
  {
    icon: 'Car',
    title: 'ОСАГО и КАСКО',
    text: 'Подберём выгодный полис для авто за 10 минут. Сравним цены 30+ компаний.',
  },
  {
    icon: 'Home',
    title: 'Страхование имущества',
    text: 'Защита квартиры, дома и дачи от пожара, затопления и кражи.',
  },
  {
    icon: 'HeartPulse',
    title: 'ДМС и жизнь',
    text: 'Медицинская страховка и страхование жизни для вас и вашей семьи.',
  },
  {
    icon: 'Plane',
    title: 'Путешествия',
    text: 'Туристическая страховка для поездок по России и за границу.',
  },
  {
    icon: 'Building2',
    title: 'Бизнес и ответственность',
    text: 'Страхование бизнеса, грузов и профессиональной ответственности.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Ипотечное страхование',
    text: 'Оформим полис для ипотеки со скидкой до 40% от банковских тарифов.',
  },
];

const stats = [
  { value: '12', suffix: ' лет', label: 'на рынке страхования' },
  { value: '30+', suffix: '', label: 'страховых компаний' },
  { value: '8 500', suffix: '', label: 'довольных клиентов' },
  { value: '4.9', suffix: '/5', label: 'средняя оценка' },
];

const reviews = [
  {
    name: 'Анна Ковалёва',
    role: 'Владелец авто',
    text: 'Оформила КАСКО в два раза дешевле, чем предлагали в салоне. Всё быстро, онлайн, без беготни.',
    initials: 'АК',
  },
  {
    name: 'Дмитрий Соколов',
    role: 'Предприниматель',
    text: 'Застраховал бизнес и грузоперевозки. Эксперт подсказал нюансы, о которых я даже не думал. Спасибо!',
    initials: 'ДС',
  },
  {
    name: 'Мария Петрова',
    role: 'Ипотека',
    text: 'Помогли со страховкой по ипотеке — экономия почти 15 тысяч в год. Консультация была бесплатной.',
    initials: 'МП',
  },
];

const faq = [
  {
    q: 'Сколько стоят ваши услуги?',
    a: 'Консультация и подбор полиса для вас бесплатны. Мы получаем комиссию от страховых компаний, при этом цена полиса для вас не выше, а часто ниже прямой.',
  },
  {
    q: 'Как проходит онлайн-консультация?',
    a: 'Вы оставляете заявку, эксперт связывается в удобное время по видеосвязи или телефону, разбирает вашу ситуацию и подбирает лучшие варианты.',
  },
  {
    q: 'С какими компаниями вы работаете?',
    a: 'Мы сотрудничаем с более чем 30 ведущими страховщиками России, что позволяет сравнить условия и выбрать оптимальный вариант.',
  },
  {
    q: 'Могу ли я оформить полис полностью онлайн?',
    a: 'Да. Большинство полисов оформляется удалённо — вы получаете электронный документ на почту с полной юридической силой.',
  },
];

export default function Index() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', type: '', comment: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Эксперт свяжется с вами в ближайшее время.',
    });
    setForm({ name: '', phone: '', type: '', comment: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 px-4">
        <nav className="glass mx-auto mt-4 max-w-6xl rounded-2xl px-5 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-display font-extrabold text-lg">
            <span className="grid place-items-center w-9 h-9 rounded-xl gradient-brand glow">
              <Icon name="Shield" size={18} className="text-white" />
            </span>
            <span>ПОЛИС<span className="text-gradient">ПРО</span></span>
          </a>
          <div className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </div>
          <Button
            asChild
            className="gradient-brand animate-gradient-shift text-white border-0 rounded-xl font-semibold"
          >
            <a href="#consult">Консультация</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background" />

        <div className="container relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-secondary mb-6 animate-fade-in">
              <Icon name="MapPin" size={14} /> Страховой брокер в Санкт-Петербурге
            </span>
            <h1
              className="font-display font-black leading-[1.05] text-5xl md:text-7xl mb-6 animate-fade-in"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              Выгодная страховка <br />
              <span className="text-gradient">без переплат</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-9 animate-fade-in"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Сравним предложения 30+ страховых компаний и подберём лучший полис под ваши задачи. Честно, быстро и бесплатно.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-in"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <Button
                asChild
                size="lg"
                className="gradient-brand animate-gradient-shift text-white border-0 rounded-xl h-14 px-8 text-base font-semibold glow hover-lift"
              >
                <a href="#consult">
                  <Icon name="Video" size={20} className="mr-2" />
                  Записаться на консультацию
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl h-14 px-8 text-base border-primary/30 text-primary bg-transparent hover:bg-primary/10"
              >
                <a href="#services">Наши услуги</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.4 + i * 0.1}s`, opacity: 0 }}
                >
                  <div className="font-display font-extrabold text-3xl md:text-4xl text-gradient">
                    {s.value}
                    <span className="text-2xl">{s.suffix}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Услуги</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3">
              Страхуем всё, что важно
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass rounded-3xl p-8 hover-lift group">
                <div className="grid place-items-center w-14 h-14 rounded-2xl gradient-brand mb-6 group-hover:animate-float">
                  <Icon name={s.icon} size={26} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">О брокере</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3 mb-6">
              Ваш независимый <span className="text-gradient">страховой эксперт</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Мы не привязаны к одной страховой компании — поэтому подбираем именно то, что выгодно вам, а не страховщику. За 12 лет мы помогли тысячам петербуржцев сэкономить и получить надёжную защиту.
            </p>
            <div className="space-y-4">
              {[
                'Работаем с 30+ проверенными страховщиками',
                'Экономим ваше время — всё оформляем онлайн',
                'Сопровождаем при страховых случаях и выплатах',
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="grid place-items-center w-7 h-7 rounded-lg gradient-brand shrink-0">
                    <Icon name="Check" size={16} className="text-white" />
                  </span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass rounded-3xl p-10 glow">
              <Icon name="Award" size={48} className="text-secondary mb-6" />
              <blockquote className="font-display font-semibold text-2xl leading-snug mb-6">
                «Наша задача — чтобы вы были защищены и не переплатили ни рубля.»
              </blockquote>
              <div className="flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-full gradient-brand font-display font-bold">
                  ЕВ
                </span>
                <div>
                  <div className="font-semibold">Елена Волкова</div>
                  <div className="text-sm text-muted-foreground">Ведущий страховой брокер</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full gradient-brand blur-2xl opacity-50 animate-float" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Отзывы</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3">
              Нам доверяют
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="glass rounded-3xl p-8 hover-lift">
                <div className="flex gap-1 mb-5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">«{r.text}»</p>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-11 h-11 rounded-full gradient-brand font-display font-bold text-sm">
                    {r.initials}
                  </span>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULT FORM */}
      <section id="consult" className="py-24 relative">
        <div className="container">
          <div className="glass rounded-[2rem] overflow-hidden grid lg:grid-cols-2">
            <div className="p-10 md:p-14 gradient-brand animate-gradient-shift text-white flex flex-col justify-center">
              <Icon name="Video" size={40} className="mb-6" />
              <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
                Онлайн-консультация со страховым экспертом
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Оставьте заявку — и мы бесплатно подберём для вас лучшие условия страхования в удобное время.
              </p>
              <div className="space-y-3 text-white/90">
                {['Бесплатно и без обязательств', 'Ответ в течение 15 минут', 'Онлайн из любой точки'].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <Icon name="CheckCircle2" size={20} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={submit} className="p-10 md:p-14 flex flex-col gap-5">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Ваше имя</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                  className="bg-white/5 border-white/10 h-12 rounded-xl placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Телефон</label>
                <Input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="bg-white/5 border-white/10 h-12 rounded-xl placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Что нужно застраховать?</label>
                <Input
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  placeholder="Авто, квартира, здоровье…"
                  className="bg-white/5 border-white/10 h-12 rounded-xl placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Комментарий</label>
                <Textarea
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Опишите вашу задачу"
                  className="bg-white/5 border-white/10 rounded-xl min-h-24 placeholder:text-muted-foreground"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="gradient-brand animate-gradient-shift text-white border-0 rounded-xl h-14 text-base font-semibold glow hover-lift"
              >
                Записаться на консультацию
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 relative">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3">
              Частые вопросы
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="relative border-t border-border bg-black/30 pt-20 pb-10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-10 mb-14">
            <div>
              <a href="#hero" className="flex items-center gap-2 font-display font-extrabold text-lg mb-4">
                <span className="grid place-items-center w-9 h-9 rounded-xl gradient-brand">
                  <Icon name="Shield" size={18} className="text-white" />
                </span>
                ПОЛИС<span className="text-gradient">ПРО</span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Независимый страховой брокер в Санкт-Петербурге. Подбираем выгодные полисы с 2014 года.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-center gap-2"><Icon name="Phone" size={16} /> +7 (812) 000-00-00</li>
                <li className="flex items-center gap-2"><Icon name="Mail" size={16} /> hello@polispro.ru</li>
                <li className="flex items-center gap-2"><Icon name="MapPin" size={16} /> СПб, Невский пр., 1</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {nav.slice(1, 5).map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                {['Send', 'MessageCircle', 'Instagram'].map((ic) => (
                  <a
                    key={ic}
                    href="#"
                    className="grid place-items-center w-10 h-10 rounded-xl glass hover-lift"
                  >
                    <Icon name={ic} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            © 2026 ПОЛИСПРО. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}