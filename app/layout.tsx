import { db } from '~/src/store/store';
import { BackButton } from './BackButton';
import './globals.css';

const generateSecretCode = (length = 10) => {
  var caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var codeSecret = '';
  for (var i = 0; i < length; i++) {
    codeSecret += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  return codeSecret;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 🦁 Remplace ceci par la function créer dans `store-requests.ts`
  const secretCode = generateSecretCode();

  // 🦁 Utilise le server context ici et définit la variable "secretCode"

  return (
    <html lang="en">
      <head />
      <body>
        <header className="bg-slate-300 p-1 flex items-center gap-4">
          Le code secret est : {secretCode}
        </header>
        {children}
      </body>
    </html>
  );
}
