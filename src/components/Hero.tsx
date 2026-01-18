import React from 'react';
import { ArrowRight, Truck, Bike, Footprints, Motorbike, Smartphone, Percent, Wallet, Zap, Gift, Banknote, MessageCircle, UserCheck, Users, ShieldCheck, Headphones, CheckCircle2, Send, MessageSquarePlus, Target, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 max-w-[1400px] mx-auto p-4 md:p-8">
      {/* ... previous sections ... */}
      <section>
        {/* Header Section - Each part centered over its respective block */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-black uppercase tracking-tighter">
            <div className="lg:col-span-7 text-center">
              <span className="text-3xl md:text-5xl text-zinc-900 leading-none inline-block">РАБОТА В ЯНДЕКС ДОСТАВКЕ</span>
            </div>
            <div className="lg:col-span-5 text-center">
              <span className="text-2xl md:text-3xl text-zinc-400 leading-none inline-block">ЧЕСТНО. УДОБНО. БЕЗ СЮРПРИЗОВ</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Block: About Park */}
          <div className="lg:col-span-7 bg-yandex-yellow rounded-[3.5rem] flex flex-col justify-between p-12 lg:p-14 min-h-[650px] relative overflow-hidden shadow-2xl shadow-yandex-yellow/20">
            <div className="relative z-20">
              <div className="flex justify-center mb-8">
                <span className="bg-[#18181b] text-zinc-400 px-8 py-2.5 rounded-full text-sm font-black uppercase tracking-[0.3em] shadow-xl border border-white/5">
                  Официальный партнер
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-black mb-10 leading-[0.9] tracking-tighter text-center md:text-left">
                Ищешь надёжный <br />
                парк в Яндекс <br />
                Доставке? <br />
                <span className="bg-white px-5 py-2 mt-5 inline-block transform -rotate-2 shadow-lg text-4xl md:text-6xl uppercase leading-none">Ты по адресу</span>
              </h2>

              <div className="space-y-12 mt-12 flex-grow flex flex-col justify-center items-center md:items-start">
                <p className="text-2xl font-medium text-black/90 leading-tight max-w-xl text-center md:text-left">
                  Мы — парк, созданный <span className="font-bold underline decoration-4 underline-offset-8 text-black">водителями для водителей</span> со всей России.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {["Без скрытых комиссий", "Живая поддержка", "Моментальные выплаты"].map((tag) => (
                    <span key={tag} className="bg-black text-white px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-20 mt-12">
              <button className="bg-black hover:scale-105 active:scale-95 transition-all duration-300 text-white font-black py-7 px-14 rounded-[2rem] flex items-center gap-6 text-xl shadow-2xl group w-full md:w-auto justify-center uppercase tracking-tighter text-left">
                Начать зарабатывать
                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Tariffs & CTA */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Tariffs Block (Redesigned with Sharper Typography) */}
            <div className="bg-[#18181b] rounded-[3.5rem] p-8 lg:p-10 flex-1 flex flex-col shadow-2xl relative overflow-hidden min-h-[550px] border border-white/5 group/tariffs">
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-2 w-8 bg-yandex-yellow rounded-full" />
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    ТАРИФЫ <span className="text-zinc-500">ПАРКА</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3 flex-grow">
                  {[
                    { t: "Экспресс", s: "Легковой автомобиль", i: <Truck size={22} />, c: "text-blue-500", bg: "bg-blue-500/10" },
                    { t: "Грузовой", s: "S / M / L / XL / XXL", i: <Truck size={22} />, c: "text-emerald-500", bg: "bg-emerald-500/10", e: "Отключаем наличку" },
                    { t: "Пеший курьер", s: "Доставка пешком", i: <Footprints size={22} />, c: "text-orange-500", bg: "bg-orange-500/10" },
                    { t: "Велосипед", s: "Обычный / Электро", i: <Bike size={22} />, c: "text-purple-500", bg: "bg-purple-500/10" },
                    { t: "Мото-курьер", s: "Доставка на мото", i: <Motorbike size={22} />, c: "text-rose-500", bg: "bg-rose-500/10" }
                  ].map((item) => (
                    <div key={item.t} className="bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.08] p-4 lg:p-5 rounded-[2.2rem] transition-all duration-300 group/item flex items-center justify-between cursor-default">
                      <div className="flex items-center gap-5">
                        <div className={`${item.bg} ${item.c} p-4 rounded-2xl group-hover/item:scale-105 transition-all duration-300 shadow-lg border border-white/5`}>
                          {item.i}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="text-xl font-black text-white uppercase tracking-tight leading-none">{item.t}</h4>
                            {item.e && (
                              <span className="text-[9px] font-black bg-yandex-yellow text-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                {item.e}
                              </span>
                            )}
                          </div>
                          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.15em] mt-2 leading-none">{item.s}</p>
                        </div>
                      </div>
                      <div className="bg-white/5 p-2 rounded-full opacity-0 group-hover/item:opacity-100 transition-all">
                        <ArrowRight size={18} className="text-yandex-yellow" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative background elements */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-yandex-yellow/5 rounded-full blur-[100px] pointer-events-none" />
              <Smartphone size={300} className="absolute right-[-100px] bottom-[-50px] text-white/[0.02] -rotate-12 group-hover/tariffs:rotate-0 transition-transform duration-1000 pointer-events-none" />
            </div>

            {/* Bottom CTA Block */}
            <div className="bg-zinc-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden group min-h-[180px] flex flex-col justify-center shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Начни зарабатывать</h3>
                <p className="text-zinc-500 font-bold text-lg">Подключаем за 15 минут в любой точке РФ</p>
              </div>
              <div className="absolute right-0 bottom-[-20px] opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">
                <Smartphone size={160} className="rotate-12 text-zinc-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rebranded Section: Commissions and Bonuses */}
      <section className="bg-[#4d5b8c] rounded-[3.5rem] p-8 lg:p-14 text-white shadow-2xl relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2 -z-0" />

        <div className="relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-2 w-12 bg-yandex-yellow rounded-full" />
              <span className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px]">Честные условия</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-[0.9] text-white">
              ПРОЗРАЧНЫЕ <br /> УСЛОВИЯ РАБОТЫ
            </h3>
            <p className="text-lg md:text-xl text-white/60 font-bold leading-tight tracking-tight">
              Никаких скрытых платежей. Мы за честное сотрудничество и моментальный доступ к деньгам.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {/* Card 1: Park Commission */}
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-500 shadow-xl min-h-[300px] border border-white/10">
              <div>
                <div className="bg-yandex-yellow w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-yandex-yellow/20">
                  <Percent size={28} className="text-black" strokeWidth={3} />
                </div>
                <h4 className="text-zinc-400 font-black uppercase tracking-[0.2em] text-[10px] mb-3">Комиссия парка</h4>
                <p className="text-black text-6xl font-black leading-none mb-4 tracking-tighter">
                  3%
                </p>
              </div>
              <p className="text-zinc-500 font-bold text-[13px] leading-snug uppercase tracking-tight">
                Фиксированная ставка. <br /> <span className="text-zinc-900 font-black">Не берём % с бонусов и чаевых.</span>
              </p>
            </div>

            {/* Card 2: Withdrawal Commission */}
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-500 shadow-xl min-h-[300px] border border-white/10">
              <div>
                <div className="bg-emerald-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20">
                  <Wallet size={28} className="text-white" strokeWidth={2.5} />
                </div>
                <h4 className="text-zinc-400 font-black uppercase tracking-[0.2em] text-[10px] mb-3">Комиссия на вывод</h4>
                <p className="text-black text-6xl font-black leading-none mb-4 tracking-tighter">
                  1%
                </p>
              </div>
              <p className="text-zinc-500 font-bold text-[13px] leading-snug uppercase tracking-tight">
                Самый низкий процент <br /> <span className="text-zinc-900 font-black">за перевод на любую карту.</span>
              </p>
            </div>

            {/* Card 3: Payouts */}
            <div className="bg-[#18181b] rounded-[3rem] p-8 lg:p-10 lg:col-span-1 md:col-span-2 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] transition-all duration-500 shadow-2xl min-h-[300px] border border-white/5">
              <div className="relative z-10">
                <div className="bg-yandex-yellow w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-yandex-yellow/10">
                  <Zap size={28} className="text-black fill-black" />
                </div>
                <h4 className="text-white/30 font-black uppercase tracking-[0.2em] text-[10px] mb-3">Выплаты 24/7</h4>
                <p className="text-white text-3xl font-black leading-tight mb-6 tracking-tight uppercase">
                  Моментально <br /> <span className="text-yandex-yellow">через Яндекс Про</span>
                </p>
                <div className="space-y-3">
                  {["Без сторонних приложений", "Без задержек", "В любое время"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-yandex-yellow rounded-full" />
                      <span className="text-white/40 font-black uppercase text-[9px] tracking-[0.2em]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Smartphone size={160} className="absolute right-[-40px] bottom-[-40px] text-white/[0.03] -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </div>
          </div>

          {/* Bottom highlight: Cash orders & Transparency */}
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-8 bg-yandex-yellow rounded-[2.5rem] p-6 md:p-8 lg:px-12 flex flex-col md:flex-row items-center justify-between group cursor-default shadow-xl border border-black/5 overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6 md:mb-0 text-center md:text-left">
                <div className="bg-black p-5 md:p-6 rounded-[2rem] shadow-2xl group-hover:rotate-6 transition-transform flex-shrink-0 border border-white/10">
                  <Banknote size={36} className="text-yandex-yellow md:size-[44px]" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-black text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter">
                    Настройка налички
                  </h4>
                  <p className="text-black/40 font-black text-xs md:text-sm leading-none mt-2 uppercase tracking-[0.1em]">Специально для Грузового тарифа</p>
                </div>
              </div>
              <div className="w-full md:w-auto text-center md:text-right">
                <div className="inline-block bg-black text-white px-6 py-3 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl w-full md:w-auto">
                  Можно отключить
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex items-center justify-center text-center">
              <p className="text-white font-black text-xl uppercase tracking-tight leading-[1.1]">
                ВСЁ МАКСИМАЛЬНО <br /> <span className="text-yandex-yellow">ПРОЗРАЧНО</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section: Support & Community */}
      <section>
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-10">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Почему <br className="md:hidden" /> выбирают нас
          </h2>
          <div className="h-2 w-24 bg-yandex-yellow rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Support (Screenshot "Поддержка сервиса" Style) */}
          <div className="lg:col-span-8 bg-[#dfe2ee] rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden group shadow-xl border border-white/20">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 h-full">
              <div className="md:w-1/2 flex justify-center">
                <div className="relative group-hover:scale-110 transition-transform duration-700">
                  <div className="bg-white w-40 h-28 rounded-[2.5rem] shadow-2xl flex items-center justify-center gap-2 relative z-10">
                    <div className="w-3 h-3 bg-zinc-200 rounded-full" />
                    <div className="w-3 h-3 bg-zinc-200 rounded-full" />
                    <div className="w-3 h-3 bg-zinc-200 rounded-full" />
                  </div>
                  <div className="absolute -bottom-3 left-12 w-8 h-8 bg-white rotate-45 rounded-sm shadow-xl" />
                  <div className="absolute -inset-4 bg-white/30 blur-2xl -z-10 rounded-full" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-6 text-zinc-900">
                  Поддержка <br /> сервиса
                </h3>
                <p className="text-lg md:text-xl font-bold text-zinc-600 leading-tight">
                  Помогаем на этапах подключения и в дальнейшем — при решении различных задач. <span className="text-zinc-400">Живая поддержка, не боты.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Community (Liked) */}
          <div className="lg:col-span-4 bg-[#18181b] rounded-[3.5rem] p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <div className="bg-[#229ED9]/10 w-16 h-16 rounded-3xl flex items-center justify-center mb-8 border border-[#229ED9]/20">
                <MessageCircle size={32} className="text-[#229ED9]" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter leading-none text-white mb-6">
                TELEGRAM <br /> КОМЬЮНИТИ
              </h3>
              <p className="text-zinc-400 font-bold leading-tight">
                Дружный чат водителей. <br /> Обмен опытом, лайфхаки <br /> и живое общение.
              </p>
            </div>
            <div className="mt-10 relative z-10">
              <button className="w-full bg-[#229ED9] hover:bg-[#1c8ec4] text-white font-black py-5 rounded-[2rem] flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#229ED9]/20 uppercase text-xs tracking-widest">
                Вступить в чат
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="absolute right-[-20px] top-[-20px] opacity-10 blur-sm group-hover:opacity-20 transition-opacity">
              <Users size={200} className="text-white" />
            </div>
          </div>

          {/* Card 3: Registration (Liked) */}
          <div className="lg:col-span-5 bg-yandex-yellow rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden group shadow-xl flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10">
              <div className="bg-black w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Zap size={28} className="text-yandex-yellow fill-yandex-yellow" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none mb-4">
                Быстрая <br /> регистрация
              </h3>
              <p className="text-black font-bold text-lg leading-tight">
                Выход на работу — в день обращения. Поддержка на каждом этапе.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-4 mt-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-yandex-yellow bg-zinc-200" />
                ))}
              </div>
              <p className="text-xs font-black uppercase tracking-wider text-black/60">Уже с нами <br /> +500 водителей</p>
            </div>
            <ArrowRight size={150} className="absolute right-[-40px] bottom-[-20px] text-black/5 rotate-[-15deg] group-hover:rotate-0 transition-all duration-700" />
          </div>

          {/* Card 4: Insider Management (Screenshot "Отчётность" Style) */}
          <div className="lg:col-span-7 bg-[#1c1c1e] rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden group shadow-2xl border border-white/5">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full gap-8">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-6 text-white">
                  Руководство <br /> <span className="text-zinc-500">в теме</span>
                </h3>
                <p className="text-lg font-bold text-zinc-400 max-w-sm mb-8 leading-tight">
                  Сами работаем в доставке. Знаем все тонкости, подводные камни и реальные лайфхаки изнутри.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["тонкости", "камни", "лайфхаки"].map(t => (
                    <span key={t} className="bg-white/5 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative group-hover:translate-x-2 transition-transform duration-700">
                  <div className="w-32 h-40 bg-zinc-800 rounded-2xl border border-white/10 shadow-2xl relative z-30 flex flex-col p-4 gap-2">
                    <div className="w-full h-1 bg-white/10 rounded-full" />
                    <div className="w-2/3 h-1 bg-white/10 rounded-full" />
                  </div>
                  <div className="w-32 h-40 bg-zinc-800/80 rounded-2xl border border-white/10 absolute top-2 -right-2 z-20" />
                  <div className="w-32 h-40 bg-zinc-800/60 rounded-2xl border border-white/10 absolute top-4 -right-4 z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION (Integrated & Uniform) */}
      <div className="space-y-8">
        {/* Quote bridge */}
        <div className="text-center py-8">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 leading-[1.1] tracking-tighter uppercase italic px-4">
            "Мы с водителями на одной волне, <br className="hidden md:block" /> а не <span className="text-zinc-400 font-normal">«начальство где-то сверху»</span>."
          </h2>
        </div>

        {/* Why Us Block (Preserved & Enhanced) */}
        <div className="bg-[#18181b] rounded-[3.5rem] p-10 lg:p-16 text-white relative overflow-hidden group shadow-2xl">
          <div className="relative z-10 space-y-12">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6">
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-left">
                ПОЧЕМУ С НАМИ <br /> <span className="text-yandex-yellow">ВЫГОДНО</span>
              </h3>
              <p className="text-zinc-500 font-bold text-lg max-w-xs leading-tight uppercase tracking-widest text-left md:text-right">
                Честные условия <br /> для тех, кто ценит <br /> свой труд.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                { t: "Низкие комиссии", d: "Фиксированный и прозрачный процент.", i: <Percent size={24} /> },
                { t: "Моментальные выплаты", d: "Деньги на карте за 2 секунды 24/7.", i: <Zap size={24} /> },
                { t: "0% на бонусы", d: "Все бонусы и чаевые только ваши.", i: <Gift size={24} /> },
                { t: "Настройка налички", d: "Работай только по безналу, если хочешь.", i: <Wallet size={24} /> },
                { t: "Живая поддержка", d: "Реальные люди, а не боты на связи.", i: <Headphones size={24} /> },
                { t: "Опытные админы", d: "Сами работаем в доставке и знаем всё.", i: <ShieldCheck size={24} /> }
              ].map((item) => (
                <div key={item.t} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all group/item flex flex-col justify-between min-h-[200px]">
                  <div className="bg-yandex-yellow w-12 h-12 rounded-2xl flex items-center justify-center text-black mb-6 shadow-lg shadow-yandex-yellow/10 group-hover/item:scale-110 transition-transform">
                    {item.i}
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-2 italic leading-none">{item.t}</h4>
                    <p className="text-zinc-500 font-medium text-sm leading-tight">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yandex-yellow/5 rounded-full blur-[120px] -z-0" />
        </div>

        {/* How to Connect (Mobile Optimized) */}
        <div className="bg-[#dfe2ee] rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-10 lg:p-20 relative overflow-hidden group shadow-2xl border border-white/20">
          <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
            <div className="flex-1 text-left space-y-6 md:space-y-10">
              <h3 className="text-4xl md:text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-zinc-900">
                КАК <br className="md:hidden" /> <span className="text-blue-600">ПОДКЛЮЧИТЬСЯ</span>
              </h3>
              <p className="text-lg md:text-2xl font-bold text-zinc-600 leading-tight max-w-xl">
                Напиши нам -
                и мы <span className="text-black underline decoration-blue-600 decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">выведем тебя на заказы</span>.
              </p>

              <div className="flex flex-col gap-2.5 md:flex-row md:flex-wrap md:gap-4">
                {[
                  { text: "подскажем", icon: <MessageCircle size={18} /> },
                  { text: "зарегистрируем", icon: <UserCheck size={18} /> },
                  { text: "Выведем на заказы", icon: <Zap size={18} /> }
                ].map((item) => (
                  <div key={item.text} className="bg-white px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-3.5 border border-zinc-100 md:hover:border-zinc-300 transition-all duration-300 w-full md:w-auto group/tag">
                    <div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center text-zinc-900 group-hover/tag:bg-yandex-yellow transition-colors duration-500">
                      {item.icon}
                    </div>
                    <span className="font-bold uppercase text-[10px] tracking-[0.25em] text-zinc-500 group-hover:text-zinc-900 transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 w-full">
              <a
                href="https://t.me/PolnyyGazSupport"
                target="_blank"
                className="group/btn bg-[#229ED9] hover:bg-[#1c8ec4] text-white p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl transition-all hover:scale-[1.03] active:scale-[0.97] flex flex-col items-center text-center gap-4 md:gap-6 border-2 md:border-4 border-white/20"
              >
                <div className="bg-white/20 p-4 md:p-6 rounded-full group-hover/btn:rotate-12 transition-transform duration-500">
                  <Send size={32} className="md:size-[48px] text-white fill-white" />
                </div>
                <div>
                  <span className="text-xl md:text-3xl font-black uppercase tracking-tighter block mb-1">Написать в Telegram</span>
                  <span className="text-[10px] md:text-xs font-bold opacity-60 uppercase tracking-widest">@PolnyyGazSupport</span>
                </div>
              </a>
            </div>
          </div>
          <div className="absolute right-[-100px] top-[-100px] opacity-[0.03] pointer-events-none text-black">
            <MessageSquarePlus size={400} className="md:size-[600px]" />
          </div>
        </div>
      </div>

      {/* 5. FOOTER (Legal & Contacts) - Unified with block style */}
      <footer className="mt-4 bg-zinc-50 border border-zinc-200/50 rounded-[3.5rem] p-10 lg:p-16 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
          {/* Column 1: Contacts */}
          <div className="flex flex-col gap-6 items-center md:items-start w-full md:w-auto">
            <h4 className="text-zinc-400 font-black uppercase tracking-[0.2em] text-[10px]">Связь с нами</h4>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <a href="tel:+79160560617" className="flex items-center gap-4 group">
                <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all border border-zinc-100 flex-shrink-0">
                  <Smartphone size={20} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tight">WhatsApp / Тел.</span>
                  <span className="text-base font-black text-zinc-900">+7 (916) 056-06-17</span>
                </div>
              </a>
              <a href="mailto:polniy-gaz@yandex.ru" className="flex items-center gap-4 group">
                <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all border border-zinc-100 flex-shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tight">Почта</span>
                  <span className="text-base font-black text-zinc-900">polniy-gaz@yandex.ru</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Legal Basic */}
          <div className="flex flex-col gap-6 items-center md:items-start w-full md:w-auto md:ml-auto md:mr-auto">
            <h4 className="text-zinc-400 font-black uppercase tracking-[0.2em] text-[10px]">Организация</h4>
            <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
              <div>
                <p className="text-xl font-black text-zinc-900 uppercase leading-none mb-4 tracking-tighter">ООО "ПОЛНЫЙ ГАЗ"</p>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">ИНН / КПП</span>
                    <span className="text-[13px] font-black text-zinc-600">9727119598 / 772701001</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">ОГРН</span>
                    <span className="text-[13px] font-black text-zinc-600">1257700523244</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Address */}
          <div className="flex flex-col gap-6 items-center md:items-end w-full md:w-auto">
            <h4 className="text-zinc-400 font-black uppercase tracking-[0.2em] text-[10px]">Юридический адрес</h4>
            <div className="text-center md:text-right">
              <p className="text-sm font-black text-zinc-600 uppercase leading-relaxed tracking-tight">
                117041, РОССИЯ, <br />
                Г. МОСКВА, <br />
                УЛ. АДМИРАЛА РУДНЕВА, <br />
                ДОМ 4, ПОМ. 30Н/6
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">
              © 2026 ПАРК ПОЛНЫЙ ГАЗ
            </p>
            <div className="hidden md:block w-1.5 h-1.5 bg-yandex-yellow rounded-full" />
            <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.1em]">
              Официальный партнер Яндекс Доставки
            </p>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-1.5 w-6 rounded-full ${i === 1 ? 'bg-yandex-yellow' : 'bg-zinc-200'}`} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function TariffRow({ icon, title, subtitle, extra }: { icon: React.ReactNode, title: string, subtitle?: string, extra?: string }) {
  return (
    <div className="flex items-center gap-5 bg-white/40 backdrop-blur-md p-4 rounded-[1.8rem] hover:bg-white transition-all duration-500 border border-white/20 group cursor-default shadow-sm hover:shadow-xl">
      <div className="bg-white p-3 rounded-xl shadow-md group-hover:scale-105 transition-transform flex-shrink-0">{icon}</div>
      <div className="flex flex-col">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-black text-xl text-zinc-900 leading-none uppercase tracking-tighter">{title}</span>
          {subtitle && <span className="text-zinc-500 text-[10px] font-black uppercase tracking-tight">{subtitle}</span>}
        </div>
        {extra && (
          <div className="mt-1.5 inline-flex items-center gap-1 bg-green-500/10 text-green-600 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-green-500/20 w-fit">
            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
            {extra}
          </div>
        )}
      </div>
    </div>
  );
}
