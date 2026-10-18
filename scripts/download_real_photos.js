const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'products');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const downloads = [
  {
    name: 'batu_split_10_10.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Sunlit_Crushed_Stones.jpg'
  },
  {
    name: 'batu_split_10_20.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/20mm-aggregate.jpg'
  },
  {
    name: 'batu_split_20_30.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Crushed_Granite_Texture.jpg'
  },
  {
    name: 'batu_split_30_50.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Angular_Rock_%284322803808%29.jpg'
  },
  {
    name: 'abu_batu.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Gray_Gravel_Rock_Texture_by_Photos_Public_Domain.jpg'
  },
  {
    name: 'pasir_konstruksi.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Bournemouth%2C_sand_pile_at_Boscombe_-_geograph.org.uk_-_4330387.jpg'
  }
];

function fetchWithRedirect(url, dest, resolve, reject, maxRedirects = 5) {
  if (maxRedirects <= 0) return reject(new Error('Too many redirects'));

  const client = url.startsWith('https') ? https : http;
  const options = {
    headers: {
      'User-Agent': 'TomarioConstructionApp/1.0 (info@tomario.co.id; id-contact)'
    }
  };

  client.get(url, options, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      let nextUrl = res.headers.location;
      if (!nextUrl.startsWith('http')) {
        const u = new URL(url);
        nextUrl = `${u.protocol}//${u.host}${nextUrl}`;
      }
      return fetchWithRedirect(nextUrl, dest, resolve, reject, maxRedirects - 1);
    }

    if (res.statusCode !== 200) {
      return reject(new Error(`Status ${res.statusCode} for ${url}`));
    }

    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        const size = fs.statSync(dest).size;
        console.log(`Success: ${path.basename(dest)} (${size} bytes)`);
        resolve();
      });
    });
  }).on('error', reject);
}

function download(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(targetDir, item.name);
    fetchWithRedirect(item.url, dest, resolve, reject);
  });
}

(async () => {
  for (const item of downloads) {
    try {
      await download(item);
    } catch (err) {
      console.error(`Failed ${item.name}:`, err.message);
    }
  }
})();
