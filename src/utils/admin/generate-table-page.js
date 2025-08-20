export function generateTable(data) {
  const rows = data
    ?.map(
      (item) => `
      <tr>
        <td>${item.id || "N/A"}</td>
        <td>${new Date(item.timestamp).toLocaleString("pt-BR") || "N/A"}</td>
        <td>${item.ip || "N/A"}</td>
        <td class="user-agent">${item.user_agent || "N/A"}</td>
        <td class="user-agent">${item.accept_language || "N/A"}</td>
        <td>${item.platform || "N/A"}</td>
        <td>${item.country || "N/A"}</td>
        <td>${item.region}</td>
        <td>${item.city}</td>
        <td>${item.isp}</td>
        <td>${item.colo}</td>
      </tr>
    `
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Painel de Acessos</title>
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
          --accent: #4a90e2;
        }
        body { 
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
          margin: 0; 
          background-color: var(--background); 
          color: var(--text-primary); 
          line-height: 1.6;
        }
        .container { 
          max-width: 1400px; 
          margin: 40px auto; 
          padding: 30px; 
          background-color: var(--surface); 
          border-radius: 12px; 
          border: 1px solid var(--border);
          box-shadow: 0 8px 30px rgba(0,0,0,0.2); 
          overflow-x: auto; 
        }
        h1 { 
          color: #ffffff;
          border-bottom: 2px solid var(--accent); 
          padding-bottom: 15px; 
          margin-bottom: 30px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        h1 svg {
          width: 32px;
          height: 32px;
        }
        table { 
          width: 100%; 
          border-collapse: collapse; 
        }
        th, td { 
          padding: 16px 20px; 
          text-align: left; 
          border-bottom: 1px solid var(--border); 
          white-space: nowrap; 
          font-size: 0.95rem;
        }
        th { 
          background-color: #31353a;
          color: #ffffff;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        tr {
          transition: background-color 0.2s ease-in-out;
        }
        tr:hover { 
          background-color: #2c3034; 
        }
        td {
          color: var(--text-secondary);
        }
        tr td:first-child {
          color: var(--text-primary);
          font-weight: 500;
        }
        .user-agent { 
          max-width: 350px; 
          white-space: normal; 
          word-break: break-all; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z"></path></svg>
          Registros de Acesso
        </h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Timestamp</th>
              <th>IP</th>
              <th>User Agent</th>
              <th>Lingua</th>
              <th>Plataforma</th>
              <th>País</th>
              <th>Região</th>
              <th>Cidade</th>
              <th>ISP</th>
              <th>Colo</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </body>
    </html>
  `;
}
