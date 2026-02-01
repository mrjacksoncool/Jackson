export default function manifest() {
  return {
    name: 'Portfolio V.1',
    short_name: 'Mojela',
    description: 'A Progressive Web App made by Mojela',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#010101',
    theme_color: '#010101',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
