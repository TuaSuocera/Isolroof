# Riavvia il server di sviluppo

Riavvia il server Next.js locale pulito su http://localhost:3000.

## Passi da seguire

1. Termina eventuali processi su porta 3000 con: `npx kill-port 3000`
2. Elimina la cache: `Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue`
3. Avvia il server in background con: `pnpm dev`
4. Attendi ~5 secondi e comunica all'utente che il server è disponibile su http://localhost:3000

## Note
- Usa il Bash tool per i comandi shell.
- Se la porta 3000 è già libera, il kill-port non darà errore (è normale).
- Il server dev mostra le modifiche al volo senza rebuild manuale.
- Per verificare che il server sia partito, cerca "Ready" nell'output.
