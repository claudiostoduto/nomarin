---
layout: post
title: "Raspberry PI 5: NAS domestico con CasaOS"
date: "2024-10-28 08:31:01 +0100"
excerpt: Come ho creato un NAS domestico personale con CasaOS e Raspberry PI 5.
categories:
categories: []
tags:
tags: []
image: "https://substack-post-media.s3.amazonaws.com/public/images/55eda14e-c6f1-4409-a6eb-a87e5992db1d_800x300.png"
---
![casaos_banner_twilight_blue_800x300.png](https://substack-post-media.s3.amazonaws.com/public/images/55eda14e-c6f1-4409-a6eb-a87e5992db1d_800x300.png)Torniamo ancora una volta a parlare di NAS e **Raspberry PI**, un connubio che ormai è presente nella mia vita e che devo dire, dopo tanto tempo, ha finalmente trovato una sua quadra nella mia casa. Vi ho già parlato di [Homebridge](https://open.substack.com/pub/mrclaus/p/raspberry-pi-zero-2-w-con-homebridge?r=2n10f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true) e del suo progetto che sta funzionando in casa mia, ma sono voluto andare oltre.

Siccome su Amazon ciclicamente viene proposto a 50 euro circa il Raspberry PI 5 con 4GB di RAM, mi son detto che forse era il caso di prenderlo e provare a farci qualcosa. Faccio però una precisazione, non ho acquistato solamente la piastra madre, ma anche degli accessori che mi permettessero di espandere il Raspberry. Già perché con il modello 5 sono arrivate tutta una serie di novità interessanti come la possibilità di installare delle piastre aggiuntive per inserire ad esempio degli SSD M2 e creare dei “mostri”. Non scherzo, guardate [qui](https://youtu.be/l30sADfDiM8?si=8tjEN0RGcc_I-Gdk). Carico a molla e gasato, mi sono detto che era anche il mio turno e via. Ecco la lista della spesa:

* [Raspberry PI 5 4 GB di RAM, sono più che sufficienti;](https://amzn.to/48bc35e)

* [SSD M2;](https://amzn.to/4eN6Gfa)

* [Piastra per SSD;](https://amzn.to/48awYFG)

* [Case con alloggiamento per SSD.](https://amzn.to/3Udncgj)

Il tempo di ricevere tutto e sono andato avanti con l’assemblaggio. Chiaramente fate molta attenzione ai componenti ed alle relative vite. Ad esempio usate qui in combo sia quelle fornite dal case per avere i rialzi nella zona inferiore del pc e poi i distanziometri per mettere in corretta posizione la piastra superiore dell’SSD.

Chiuso il case, è tempo di passare al software.

Scaricando [Raspberry PI Manager](https://www.raspberrypi.com/software/) potrete selezionare direttamente il SO da scrivere sulla microSD. Ho scelto il sistema operativo ufficiale, ma nella versione Lite, quella accessibile solamente tramite terminale. Anche qui ho impostato che arrivasse già con il collegamento Wi-Fi attivo mettendo le informazioni della mia rete e via di scrittura.

Una volta preparata ed inserita la microSD, ho aspettato un paio di minuti per far lanciare il sistema operativo e poi tramite il router ho identificato l’indirizzo IP assegnato alla macchina. A quel punto ci possiamo collegare via SSH e terminale, nel caso di macOS, al nostro Raspberry PI mettendo le credenziali di amministratore.

A questo punto, dopo aver verificato gli eventuali aggiornamenti da fare e via dicendo, date questo comando:

*wget -qO- https://get.casaos.io | sudo bash*

In pratica daremo il via all’installazione del sistema operativo **CasaOS**. Perché proprio questo e non Open Media Vault, FreeNAS ecc ecc? Perché volevo un qualcosa di vicino al vecchio Synology che utilizzavo fino a poco fa, con un suo App Store per terzi servizi, cosa che poi vedremo più avanti.

Ok installato il tutto, sempre tramite IP del nostro Raspberry, ci colleghiamo da browser e creiamo il nostro utente primario. A quel punto avremo il nostro ambiente dedicato per gestire un po’ tutto ciò che vogliamo.

Una cosa che ho fatto sin da subito, non avendo voglia di installare il sistema operativo del Raspberry sull’SSD direttamente e non avendo nemmeno un adattatore a disposizione, ho usato la funzione di merge dello spazio presente in CasaOS. In pratica ad installazione finita, tramite web browser dalla console di amministrazione c’è la possibilità di unire lo spazio della microSD (da 64 GB nel mio caso) con quello del nostro disco esterno da mezzo tera. Un unico drive e via. Sì perché non ho voglia di andare ad impostare i parametri dei permessi sulle varie partizioni e via dicendo. Con un click ho risolto tutto.

Bene a questo punto non vi resta che divertirvi.

Il risultato? Sono tre settimane che qui è tutto attivo e devo dire che non mi sta mancando per nulla il mio vecchio NAS. Le temperature, nonostante stiamo comunque parlando di un Raspberry PI 5, sono nella norma e la CPU + RAM presente sono più che sufficienti per questa configurazione.

Contento? Moltissimo, specie avendo messo in piedi tutto quanto io a seconda delle mie esigenze.

*Questo post è stato interamente scritto dal mio [iPad Air M1.](https://amzn.to/48ar3jI)*

> *Iscrivetevi al **[canale Telegram](https://t.me/mrclaus_xyz) per non perdervi nulla.***
> 
> 

> Se volete supportare gratuitamente questa newsletter ricordatevi sempre di acquistare su Amazon partendo da [questo link](https://amzn.to/44C4aE5) o dal canale [Telegram In Offerta](https://t.me/inoffertapromo).
> 
> 

> Vuoi fare dei [soldi gratis?](http://soldigratis.mrclaus.xyz/)
> 
>
