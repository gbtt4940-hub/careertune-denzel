export const metadata = {
  title: 'CareerTune by Denzel',
  description: 'Tune Your Résumé. Unlock Your Career.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#fff', color: '#0f172a', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial' }}>
        {children}
      </body>
    </html>
  );
        }
