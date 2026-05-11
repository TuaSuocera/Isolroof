# Deploy su GitHub Pages

Esegui il deploy completo del sito Isolroof su GitHub Pages.

## Passi da seguire

1. Esegui `pnpm build` per generare l'export statico (cartella `out/`). Se fallisce, mostra l'errore e fermati.
2. Controlla che la cartella `out/` esista e non sia vuota.
3. Fai `git add -A`, poi un commit con messaggio `chore: build statico per deploy` (o descrivi le ultime modifiche se conosci il contesto).
4. Esegui `git push origin main`.
5. Comunica all'utente che il deploy è avviato e che GitHub Actions pubblicherà il sito all'URL: https://tuasuocera.github.io/Isolroof/

## Note
- Il progetto usa `output: 'export'` e `basePath: '/Isolroof'` in produzione (next.config.mjs).
- Non serve configurazione extra: il push su main attiva GitHub Actions.
- Se `pnpm build` fallisce per errori TypeScript, segnalali e chiedi all'utente come procedere.
