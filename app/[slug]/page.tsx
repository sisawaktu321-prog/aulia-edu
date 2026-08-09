import { supabase } from '@/lib/supabase';

export default async function GuestPage({ params }: { params: { slug: string } }) {
  const { data: guest } = await supabase
    .from('guests')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!guest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e8e1d7] font-sans text-center p-6">
        <div className="bg-[#fffaf2] p-8 rounded-2xl shadow-xl max-w-md w-full border border-[#ded2c0]">
          <h2 className="text-2xl font-serif font-bold text-[#3f3932] mb-2">Undangan Tidak Ditemukan</h2>
          <p className="text-[#81776c] text-sm">Maaf, tautan undangan yang Anda buka tidak terdaftar.</p>
        </div>
      </div>
    );
  }

  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aulia & Edu — Undangan Pernikahan</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');
          *{box-sizing:border-box;margin:0;padding:0}
          :root{--cream:#f7f1e7;--paper:#fffaf2;--ink:#3f3932;--muted:#81776c;--gold:#b79a69;--line:#ded2c0}
          body{background:#e8e1d7;color:var(--ink);font-family:'DM Sans',sans-serif}
          .page{max-width:520px;margin:auto;background:var(--paper);min-height:100vh;overflow:hidden;box-shadow:0 0 40px #0002}
          .hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:50px 28px;position:relative;background:linear-gradient(#3d332b66,#3d332b88),url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85') center/cover}
          .hero:after{content:"";position:absolute;inset:18px;border:1px solid #fff8;border-radius:220px 220px 18px 18px}
          .hero-content{position:relative;z-index:2;color:white}
          .kicker{font-size:12px;letter-spacing:4px;text-transform:uppercase;margin-bottom:22px}
          h1{font:600 72px/0.82 'Cormorant Garamond',serif;letter-spacing:-2px}
          .amp{font:400 34px 'Cormorant Garamond',serif;margin:12px 0}
          .date{margin-top:28px;font-size:13px;letter-spacing:2px}
          .open{margin-top:24px;display:inline-block;border:1px solid #fff;padding:12px 24px;border-radius:999px;background:#ffffff16;color:white;font-weight:600;text-decoration:none;font-size:13px}
          section{padding:70px 28px;text-align:center}
          .eyebrow{font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:14px}
          h2{font:600 42px/1 'Cormorant Garamond',serif;margin-bottom:18px}
          p{font-size:14px;line-height:1.9;color:var(--muted)}
          .names{font:600 48px/0.9 'Cormorant Garamond',serif}
          .parents{margin-top:28px;font-size:13px;line-height:2;color:var(--muted)}
          .divider{width:70px;height:1px;background:var(--gold);margin:28px auto}
          .card{background:var(--cream);border:1px solid var(--line);border-radius:22px;padding:30px 22px;margin-top:18px}
          .card h3{font:600 29px 'Cormorant Garamond',serif;margin-bottom:12px}
          .time{font-weight:600;margin:12px 0;color:var(--ink)}
          .map{display:inline-block;margin-top:22px;text-decoration:none;color:white;background:var(--ink);padding:12px 22px;border-radius:999px;font-size:13px}
          .guest-box{background:var(--cream);border:1px solid var(--line);border-radius:16px;padding:18px;margin-top:20px;text-align:left}
          footer{background:#3f3932;color:#fff;text-align:center;padding:50px 25px}
          .small{font-size:11px;color:#d8cec0}
        `}</style>
      </head>
      <body>
        <div className="page">
          <section className="hero">
            <div className="hero-content">
              <div className="kicker">The Wedding Of</div>
              <h1>Aulia</h1><div className="amp">&amp;</div><h1>Edu</h1>
              <div className="date">MINGGU · 16 AGUSTUS 2026</div>
              
              <div className="guest-box">
                <p style={{fontSize:'10px', textTransform:'uppercase', letterSpacing:'2px', color:'#81776c', marginBottom:'4px'}}>Kepada Yth.</p>
                <div style={{fontFamily:'Cormorant Garamond, serif', fontSize:'22px', fontWeight:'700', color:'#3f3932'}}>{guest.name}</div>
              </div>

              <a href="#content" className="open">Buka Undangan</a>
            </div>
          </section>

          <div id="content">
            <section>
              <div className="eyebrow">Assalamu'alaikum Warahmatullahi Wabarakatuh</div>
              <p>Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di hari bahagia kami.</p>
              <div className="divider"></div>
              <div className="names">AULIA<br/><span style={{fontSize:'30px'}}>&amp;</span><br/>EDU</div>
              <div className="parents">
                Putri dari Bapak <b>Selamat</b> &amp; Ibu <b>Suriah</b><br/><br/>
                Putra dari Bapak <b>Edy Sofyan</b> &amp; Ibu <b>Yeni</b>
              </div>
            </section>

            <section style={{background:'var(--cream)'}}>
              <div className="eyebrow">Akad Nikah</div>
              <h2>Dengan Bahagia</h2>
              <div className="card" style={{background:'#fff', textAlign:'left'}}>
                <h3>Minggu, 16 Agustus 2026</h3>
                <div className="time">11.00 WIB — selesai</div>
                <p style={{marginTop:'8px'}}>Jalan Ileng, Gg Nangka, Rengas Pulau<br/>Kode Pos 20255, Medan, Sumatera Utara</p>
                <a className="map" target="_blank" href="https://www.google.com/maps/search/?api=1&query=Jalan%20Ileng,%20Gg%20Nangka,%20Rengas%20Pulau,%2020255,%20Medan,%20Sumatera%20Utara">Buka Google Maps</a>
              </div>
            </section>
          </div>

          <footer>
            <div className="eyebrow" style={{color:'#cbb185'}}>Thank You</div>
            <h2 style={{fontFamily:'Cormorant Garamond, serif', fontSize:'32px', marginBottom:'8px'}}>Aulia &amp; Edu</h2>
            <p className="small">Terima kasih atas doa dan kehadiran Anda di hari bahagia kami.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
