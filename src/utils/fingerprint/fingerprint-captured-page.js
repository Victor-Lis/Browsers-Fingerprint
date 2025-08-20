export function fingerprintCapturedPage() {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Captura Realizada</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
      <style>
        :root {
          --background: #1a1c20;
          --surface: #25282c;
          --text-primary: #e0e0e0;
          --text-secondary: #a0a0a0;
          --border: #3a3d42;
          --accent: #50fa7b;
        }
        body { 
          font-family: 'Inter', sans-serif; 
          margin: 0; 
          background-color: var(--background); 
          color: var(--text-primary); 
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
        }
        .card { 
          max-width: 500px; 
          padding: 40px; 
          background-color: var(--surface); 
          border-radius: 12px; 
          border: 1px solid var(--border);
          box-shadow: 0 8px 30px rgba(0,0,0,0.2); 
        }
        h1 { 
          color: #ffffff;
          font-weight: 700;
          margin-top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 1.8rem;
        }
        h1 svg {
          width: 32px;
          height: 32px;
          color: var(--accent);
        }
        p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
          Capturado com Sucesso
        </h1>
        <p>Seu fingerprint de navegador foi registrado. Um administrador poderá visualizar os dados no painel de controle.</p>
      </div>
    </body>
    </html>
  `;
}
