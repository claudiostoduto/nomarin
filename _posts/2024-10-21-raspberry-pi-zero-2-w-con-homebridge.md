---
layout: post
title: Raspberry PI Zero 2 W con Homebridge, perché?
date: 2024-10-21 08:31:10 +0200
excerpt: Ho acquistato un Raspberry PI Zero 2 W in cui ho installato Homebridge per
  gestire la mia casa.
categories: []
tags: []
image: https://substack-post-media.s3.amazonaws.com/public/images/6879cf4d-77cc-429e-867c-d4b50af24dde_1921x1081.png
---
![homebridge-on-homekit-raspberry-pi.png](https://substack-post-media.s3.amazonaws.com/public/images/6879cf4d-77cc-429e-867c-d4b50af24dde_1921x1081.png)Tornato dalle vacanze estive e rimesso a regime un po’ tutto il mio mondo in casa, mi sono posto degli obiettivi tecnologici da migliorare e sistemare all’interno delle mie mura domestiche. Vi avevo sempre parlato bene del mio fantastico **NAS di Synology,** un prodotto economico e di fascia bassa ma che sapeva fare il suo. Al suo interno, oltre allo storage di file, foto, video ecc ecc avevo anche installato **Homebridge** per gestire quei prodotti che utilizzo in casa ma che non sono nativi con HomeKit di Apple (qualcuno ha detto per caso Tuya?).

Da malato, purtroppo, volevo però scindere le due cose. In che senso? Da una parte volevo un NAS, dall’altra invece volevo un dispositivo che si occupasse di gestire Homebridge e/o eventualmente Home Assistant. Non mi piace fare un grande minestrone anche perché, come poi ho visto, lo stesso NAS di Synology essendo di fascia bassa spesso aveva ritardi con le lampadine e le loro accensioni a causa di una CPU al 100%. In secondo luogo volevo poi ridurre l’ingombro di quello che è il mio quadrato domestico di rete e quindi sostituire un HD meccanico da 6TB rumoroso, un NAS con ventola di raffreddamento che comunque emanava calare ecc ecc. Insomma avete capito no? Quale soluzione migliore se non un buon ed etimo **Raspberry PI**? E perché non scegliere il prodotto più piccolo e compatto proprio fra tutti quelli proposti?

Primo step quindi [Amazon](https://amzn.to/4f6UyFB). Paghi e via. Il giorno dopo arriva tutto. Nel mentre mi preparo una bellissima microSD con solo ed esclusivamente Homebridge installato. Come? Scaricando [Raspberry PI Manager](https://www.raspberrypi.com/software/) potrete selezionare direttamente il SO da scrivere sulla microSD. C’è anche Homebridge e con due click viene scritto e montato. Mi raccomando: non vi dimenticate di inserire anche i dati della vostra rete Wi-Fi così da permettere al piccolo raspberry di essere già connesso una volta alimentato. Quanto ci va? Dieci minuti scarsi.

Una volta poi configurato il tutto e data l’alimentazione al nostro piccolo mostro appena creato, non dovremmo fare altro che identificare tramite il nostro router l’indirizzo IP del Raspberry e collegarci via Web. Salviamo e creiamo i dati di accesso e via. Se avete un’altra istanza di Homebridge chiaramente potete esportare un backup dal vecchio server ed importarlo, così come ho fatto io. In questo modo non avrete bisogno di dover riconfigurare tutto ed in meno di altri dieci minuti è tutto nuovamente pronto e funzionante.

Perché ho scelto questa opzione?

1. Componente economica: con 28 euro avete un piccolo dispositivo che si occupa solamente di quello e che vi fa risparmiare sugli accessori non compatibili nativamente con HomeKit avendo lo stesso identico risultato;

2. Avere un’istanza dedicata: preferisco avere le cose a compartimenti stagni e non un unico prodotto che mi fa tante cose magari fatte anche male;

3. Volevo smanettare con un Raspberry dopo tanto tempo.

Missione pienamente riuscita e risultato decisamente ottimo nonché migliore del precedente.

*Questo post è stato interamente scritto dal mio [iPad Air M1.](https://amzn.to/48ar3jI)*

> *Iscrivetevi al **[canale Telegram](https://t.me/mrclaus_xyz) per non perdervi nulla.***
> 
> Se volete supportare gratuitamente questa newsletter ricordatevi sempre di acquistare su Amazon partendo da [questo link](https://amzn.to/44C4aE5) o dal canale [Telegram In Offerta](https://t.me/inoffertapromo).
> 
> Vuoi fare dei [soldi gratis?](http://soldigratis.mrclaus.xyz/)
> 
>
