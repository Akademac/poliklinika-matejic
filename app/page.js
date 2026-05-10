"use client";

import React, { useState } from "react";

const services = [
  {
    title: "Specijalistički pregledi",
    text: "Internista, kardiolog, endokrinolog, gastroenterolog, neurolog i drugi specijalistički pregledi po zakazivanju.",
    icon: "🩺",
  },
  {
    title: "Ultrazvučna dijagnostika",
    text: "Ultrazvuk abdomena, štitaste žlezde, srca, krvnih sudova, mekih tkiva i drugi pregledi savremenom opremom.",
    icon: "🔬",
  },
  {
    title: "Laboratorijske analize",
    text: "Brze laboratorijske analize, preventivni paketi i kontrolni pregledi za pacijente svih uzrasta.",
    icon: "🧪",
  },
  {
    title: "Opšta praksa",
    text: "Pregledi lekara opšte prakse, terapije, kontrole, saveti i upućivanje na dalje specijalističke preglede.",
    icon: "👨‍⚕️",
  },
  {
    title: "Preventivni pregledi",
    text: "Sistemski pregledi i preventivni paketi prilagođeni vašim godinama, navikama i zdravstvenom stanju.",
    icon: "✅",
  },
  {
    title: "Kućne posete",
    text: "Mogućnost organizacije kućnih poseta za pacijente kojima je otežan dolazak u polikliniku.",
    icon: "🏠",
  },
];

const doctors = [
  "Dr Ana Matejić — specijalista interne medicine",
  "Dr Marko Petrović — kardiolog",
  "Dr Jelena Ilić — radiolog",
];

export default function PoliklinikaMatejic() {
  const [questionOpen, setQuestionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
        <div className="bg-teal-700 text-white text-sm">
          <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <p>Kontakt: 034/123-456 • 064/123-4567</p>
            <p>Radno vreme: Pon–Pet 08–20h, Sub 09–14h</p>
          </div>
        </div>

        <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-teal-700 text-white grid place-items-center font-bold text-xl">
              M
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight">Poliklinika Matejić</p>
              <p className="text-xs text-slate-500">Zdravlje na prvom mestu</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a className="hover:text-teal-700" href="#about">O nama</a>
            <a className="hover:text-teal-700" href="#services">Usluge</a>
            <a className="hover:text-teal-700" href="#team">Tim</a>
            <a className="hover:text-teal-700" href="#pricing">Cenovnik</a>
            <a className="hover:text-teal-700" href="#contact">Kontakt</a>
          </div>

          <a
            href="tel:+381641234567"
            className="hidden sm:inline-flex rounded-full bg-teal-700 px-5 py-2.5 text-white text-sm font-semibold shadow hover:bg-teal-800 transition"
          >
            Zakažite pregled
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-700 text-white">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_20%,white,transparent_30%),radial-gradient(circle_at_80%_30%,white,transparent_25%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium ring-1 ring-white/30">
                Privatna zdravstvena ustanova u Kragujevcu
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Dobrodošli u Polikliniku Matejić
              </h1>
              <p className="mt-6 max-w-xl text-lg text-teal-50 leading-8">
                Stručni pregledi, moderna dijagnostika i individualan pristup svakom pacijentu — brzo, jasno i uz potpunu posvećenost vašem zdravlju.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#services" className="rounded-full bg-white px-7 py-3 text-teal-800 font-bold text-center hover:bg-teal-50 transition">
                  Pogledajte usluge
                </a>
                <a href="#contact" className="rounded-full border border-white/60 px-7 py-3 text-white font-bold text-center hover:bg-white/10 transition">
                  Kontaktirajte nas
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/12 p-4 shadow-2xl ring-1 ring-white/25">
              <div className="rounded-[1.5rem] bg-white text-slate-900 p-6 md:p-8">
                <p className="text-sm font-semibold text-teal-700">Brzo zakazivanje</p>
                <h2 className="mt-2 text-2xl font-bold">Pregled po vašoj meri</h2>
                <p className="mt-3 text-slate-600 leading-7">
                  Pozovite nas ili pošaljite pitanje. Naš tim će vam pomoći da odaberete odgovarajući pregled ili specijalistu.
                </p>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <p className="font-semibold">📍 Adresa</p>
                    <p className="text-slate-600">Kragujevac, Srbija</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <p className="font-semibold">📞 Telefon</p>
                    <p className="text-slate-600">034/123-456 • 064/123-4567</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <p className="font-semibold">✉️ Email</p>
                    <p className="text-slate-600">ordinacija@poliklinikamatejic.rs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-700">Naše usluge</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Sve što vam je potrebno na jednom mestu</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Organizovali smo usluge tako da pacijent brzo dobije pregled, dijagnostiku, savet i jasne dalje korake.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{service.text}</p>
                <a href="#contact" className="mt-5 inline-flex font-semibold text-teal-700 hover:text-teal-900">
                  Zakažite pregled →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-4 py-20 grid gap-10 md:grid-cols-2 md:items-center">
            <div className="rounded-[2rem] bg-slate-100 p-8 min-h-[360px] grid place-items-center text-center">
              <div>
                <div className="mx-auto h-28 w-28 rounded-full bg-teal-700 text-white grid place-items-center text-5xl font-bold shadow-lg">M</div>
                <p className="mt-6 text-2xl font-bold">Poliklinika Matejić</p>
                <p className="mt-2 text-slate-500">Savremena medicina • stručan tim • poverenje</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-700">O nama</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Posvećeni pacijentu od prvog kontakta</h2>
              <p className="mt-5 text-slate-600 leading-8">
                Poliklinika Matejić pruža medicinske usluge uz individualan pristup, preciznu dijagnostiku i saradnju više specijalista. Naš cilj je da pacijent dobije razumljivo objašnjenje, kvalitetan pregled i konkretan plan daljeg lečenja.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-3xl font-extrabold text-teal-700">10+</p>
                  <p className="text-sm text-slate-600">oblasti medicine</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-3xl font-extrabold text-teal-700">24h</p>
                  <p className="text-sm text-slate-600">odgovor na upit</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-3xl font-extrabold text-teal-700">100%</p>
                  <p className="text-sm text-slate-600">posvećenost</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-teal-700">Zaposleni</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Naš stručni tim</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {doctors.map((doctor) => (
              <div key={doctor} className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm">
                <div className="h-16 w-16 rounded-2xl bg-teal-100 text-teal-800 grid place-items-center text-3xl">👩‍⚕️</div>
                <p className="mt-5 font-bold text-lg">{doctor}</p>
                <p className="mt-2 text-slate-600">Pregledi se zakazuju telefonom ili putem kontakt forme.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="bg-teal-800 text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-100">Cenovnik i osiguranje</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Transparentne cene i jasne informacije</h2>
              <p className="mt-4 text-teal-50 leading-7">
                Za aktuelni cenovnik pregleda i dijagnostike kontaktirajte nas telefonom. Moguća je saradnja sa privatnim zdravstvenim osiguranjima.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl">
              <p className="font-bold text-xl">Popularni paketi</p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Preventivni internistički pregled</li>
                <li>• Kardiološki pregled + EKG</li>
                <li>• Ultrazvučni pregled abdomena</li>
                <li>• Sistematski pregled za zaposlene</li>
              </ul>
              <a href="#contact" className="mt-6 inline-flex rounded-full bg-teal-700 px-5 py-3 text-white font-bold hover:bg-teal-800 transition">
                Zatražite cenovnik
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-700">Kontakt</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Zakažite pregled ili nam pošaljite pitanje</h2>
              <div className="mt-8 space-y-4 text-slate-700">
                <p><strong>Adresa:</strong> Kragujevac, Srbija</p>
                <p><strong>Telefon:</strong> 034/123-456 • 064/123-4567</p>
                <p><strong>Email:</strong> ordinacija@poliklinikamatejic.rs</p>
                <p><strong>Radno vreme:</strong> Pon–Pet 08–20h, Sub 09–14h</p>
              </div>
            </div>

            <form className="rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-slate-200">
              <div className="grid gap-4">
                <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Ime i prezime" />
                <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Telefon" />
                <input className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Email" />
                <textarea className="min-h-32 rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600" placeholder="Poruka" />
                <button type="button" className="rounded-full bg-teal-700 px-6 py-3 text-white font-bold hover:bg-teal-800 transition">
                  Pošalji upit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-white font-bold text-xl">Poliklinika Matejić</p>
            <p className="mt-3 text-sm leading-6">Privatna zdravstvena ustanova posvećena brzom, profesionalnom i jasnom medicinskom pristupu.</p>
          </div>
          <div>
            <p className="text-white font-bold">Usluge</p>
            <p className="mt-3 text-sm leading-7">Specijalistički pregledi<br />Ultrazvuk<br />Laboratorija<br />Opšta praksa</p>
          </div>
          <div>
            <p className="text-white font-bold">Kontakt</p>
            <p className="mt-3 text-sm leading-7">Kragujevac, Srbija<br />034/123-456<br />ordinacija@poliklinikamatejic.rs</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
          © 2026 Poliklinika Matejić. Sva prava zadržana.
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50">
        {questionOpen && (
          <div className="mb-3 w-[320px] rounded-3xl bg-white p-5 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900">Pitajte vašeg doktora</p>
                <p className="mt-1 text-sm text-slate-600">Pošaljite kratko pitanje, a naš tim će vam odgovoriti u najkraćem roku.</p>
              </div>
              <button onClick={() => setQuestionOpen(false)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>
            <textarea className="mt-4 min-h-28 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-600" placeholder="Unesite pitanje..." />
            <button className="mt-3 w-full rounded-full bg-teal-700 px-5 py-3 text-white font-bold hover:bg-teal-800 transition">
              Pošalji pitanje
            </button>
          </div>
        )}

        <button
          onClick={() => setQuestionOpen((value) => !value)}
          className="rounded-full bg-teal-700 px-5 py-4 text-white font-bold shadow-2xl hover:bg-teal-800 transition flex items-center gap-2"
        >
          💬 Pitajte vašeg doktora
        </button>
      </div>
    </div>
  );
}
