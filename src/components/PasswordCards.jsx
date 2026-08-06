import { useState } from 'react';

export default function PasswordCards({ bookMarks }) {
  const [revealedId, setRevealedId] = useState([]);

  function websiteInfo(webUrl) {
    const urlObj = new URL(webUrl);
    const researvedIcon = {
      'github.com': 'GH',
      'linkedin.com': 'LI',
      'twitter.com': 'TW',
      'facebook.com': 'FB',
      'instagram.com': 'IG',
      'youtube.com': 'YT',
      'reddit.com': 'RD',
      'pinterest.com': 'PT',
      'tumblr.com': 'TB',
      'flickr.com': 'FL',
      'dribbble.com': 'DB',
      'behance.net': 'BH',
      'medium.com': 'MD',
      'slack.com': 'SL',
      'whatsapp.com': 'WA'
    };

    const url = urlObj.host.replace('www.', '');

    const companyName = url.split('.')[0];

    console.log(researvedIcon[urlObj.host]);

    let icon = Object.keys(researvedIcon).includes(url) ? researvedIcon[url] : companyName.slice(0, 2);
    return {
      url,
      icon,
      title: companyName.charAt(0).toUpperCase() + companyName.slice(1)
    };
  }

  function handleReveal(id) {
    setRevealedId((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  }

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
      {bookMarks.map((bookMark) => {
        const { url, icon, title } = websiteInfo(bookMark.web_url);
        console.log('👀 ~ PasswordCards ~ url:', { url, icon, title });
        return (
          <article
            key={bookMark.id}
            className='rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20'>
            <div className='flex items-start justify-between'>
              <div className='flex items-center gap-4'>
                <div
                  style={{ '--favicon-color': bookMark.favicon_color }}
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-[var(--favicon-color)]/10 text-sm font-semibold uppercase text-[var(--favicon-color)]`}>
                  {icon}
                </div>
                <div>
                  <h3 className='text-lg font-semibold'>{title}</h3>
                  <p className='text-xs uppercase tracking-wide text-neutral-500'>{bookMark.category}</p>
                </div>
              </div>
            </div>
            <p className='mt-4 text-sm text-neutral-400'>{url}</p>
            <dl className='mt-5 space-y-3 text-sm'>
              <div className='flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3'>
                <dt className='text-xs uppercase tracking-wide text-neutral-500'>Username</dt>
                <dd className='text-neutral-50'>{bookMark.user_name}</dd>
              </div>
              <div className='flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3'>
                <dt className='text-xs uppercase tracking-wide text-neutral-500'>Password</dt>
                <dd className='flex items-center gap-2 text-neutral-50'>
                  {revealedId.includes(bookMark.id) ? <span>{bookMark.password}</span> : <span>••••••••</span>}

                  <button onClick={() => handleReveal(bookMark.id)} className='text-xs font-semibold text-blue-400'>
                    Reveal
                  </button>
                </dd>
              </div>
            </dl>
          </article>
        );
      })}

      {/* <!-- Card 8 - Spotify --> */}
      <article className='rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20'>
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-green-500/10 text-sm font-semibold uppercase text-green-400'>
              Sp
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Spotify</h3>
              <p className='text-xs uppercase tracking-wide text-neutral-500'>Music</p>
            </div>
          </div>
        </div>
        <p className='mt-4 text-sm text-neutral-400'>spotify.com</p>
        <dl className='mt-5 space-y-3 text-sm'>
          <div className='flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3'>
            <dt className='text-xs uppercase tracking-wide text-neutral-500'>Username</dt>
            <dd className='text-neutral-50'>musiclover</dd>
          </div>
          <div className='flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3'>
            <dt className='text-xs uppercase tracking-wide text-neutral-500'>Password</dt>
            <dd className='flex items-center gap-2 text-neutral-50'>
              <span>••••••••</span>
              <button className='text-xs font-semibold text-blue-400'>Reveal</button>
            </dd>
          </div>
        </dl>
      </article>
    </div>
  );
}
