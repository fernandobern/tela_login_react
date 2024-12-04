// src/app/layout.jsx
import '../styles/globals.css'; // Importando o CSS global

export const metadata = {
    title: 'Minha Aplicação',
    description: 'Bem-vindo à minha aplicação Next.js',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="pt-BR">
        <head>
          <link rel="stylesheet" href="/global.css" />
        </head>
        <body className='container'>
          <header>
            <nav>
              <h1>Minha Aplicação</h1>
              <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>© 2024 Minha Empresa</p>
          </footer>
        </body>
      </html>
    );
  }
  