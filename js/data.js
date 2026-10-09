// Loads CMS content (content/*.json) into window.CS_DATA, then loads the page templates in order.
(function () {
  var JPG = ['union-chapel-2', 'grants-pool-v2', 'chris-letterbox', 'chris-standard', 'founders-real', 'founders-why'];
  function img(n) {
    if (!n) return '';
    if (/^(https?:)?\//.test(n) || n.indexOf('/') > 0) return n;
    if (/\.(png|jpe?g|webp|gif)$/i.test(n)) return 'assets/imagery/' + n;
    return 'assets/imagery/' + n + (JPG.indexOf(n) >= 0 ? '.jpg' : '.png');
  }
  function person(p) { return { name: p.name, role: p.role, bio: p.bio || null, img: p.image || null }; }
  window.openStory = function (s, go) { try { localStorage.setItem('cs-kit-story', (s && s.id) || ''); } catch (e) {} go('Story'); };
  var files = ['events', 'stories', 'people', 'partners', 'donation', 'settings', 'pages'];
  Promise.all(files.map(function (f) { return fetch('content/' + f + '.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }); }))
    .then(function (j) {
      var c = {}; files.forEach(function (f, i) { c[f] = j[i]; });
      var impact = {}; (c.donation.impact || []).forEach(function (x) { impact[x.amount] = x.line; });
      var s = c.settings || {};
      window.CS_DATA = {
        img: img,
        launch: c.events.launch, route: c.events.route || [],
        stories: (c.stories.items || []).map(function (x) {
          var o = Object.assign({}, x);
          if (o.dialogue && o.dialogue.length) o.dialogue = o.dialogue.map(function (d) { return [d.speaker, d.text]; }); else delete o.dialogue;
          o.pull = o.pull && o.pull.quote ? [o.pull.name, o.pull.quote] : null;
          o.bios = o.bios && o.bios.length ? o.bios.map(function (b) { return [b.name, b.role, b.image, b.bio]; }) : null;
          return o;
        }),
        partners: c.partners.items || [], friends: c.partners.friends || [],
        people: c.people.founders || [], trustees: (c.people.trustees || []).map(person), advisors: (c.people.advisors || []).map(person),
        impact: impact, donation: c.donation, settings: s, pages: c.pages,
        justGiving: c.donation.donateUrl || 'https://www.justgiving.com/charity/thecancerstagedfoundation',
        contactEmail: s.contactEmail,
        partnershipEmail: s.partnershipEmail || s.contactEmail,
        social: { instagram: s.instagram || '', youtube: s.youtube || '', linkedin: s.linkedin || '', facebook: s.facebook || '' }
      };
      var order = ['kit', 'home-screen', 'events-screens', 'stories-screens', 'donate-screen', 'page-screens', 'policy-screens', 'app'];
      return order.reduce(function (p, n) { return p.then(function () { return new Promise(function (res, rej) { var el = document.createElement('script'); el.src = 'js/' + n + '.js'; el.onload = res; el.onerror = function () { rej(new Error('Failed to load js/' + n + '.js')); }; document.body.appendChild(el); }); }); }, Promise.resolve());
    })
    .catch(function (e) { console.error(e); document.getElementById('root').innerHTML = '<p style="font:16px sans-serif;padding:40px">The site could not load its content. If you opened this file directly from your computer, run it from a web server instead (see README).</p>'; });
})();
