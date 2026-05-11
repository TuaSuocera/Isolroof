# Commit e Push

Esegui commit delle modifiche correnti e push su GitHub.

## Passi da seguire

1. Esegui `git status` per vedere i file modificati.
2. Esegui `git diff --stat` per capire la natura delle modifiche.
3. Scegli un messaggio di commit appropriato in italiano, seguendo il formato `tipo: descrizione breve`. Tipi comuni:
   - `feat:` nuova funzionalità
   - `fix:` correzione bug
   - `style:` cambiamenti visivi / CSS
   - `chore:` manutenzione, build, config
   - `content:` modifica testi/contenuti
4. Esegui `git add` sui file rilevanti (evita `.env.local`, file binari pesanti non necessari).
5. Esegui il commit con il messaggio scelto, aggiungendo in coda: `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
6. Esegui `git push origin main`.
7. Conferma all'utente con: hash commit + URL GitHub Pages = https://tuasuocera.github.io/Isolroof/

## Note
- Non committare mai `.env.local` o file con chiavi API.
- Se ci sono file non tracciati nella cartella `public/` (video, immagini nuove), aggiungili se fanno parte delle modifiche richieste.
- Se l'utente ha fornito un messaggio di commit specifico come argomento al comando, usalo quello esatto.
