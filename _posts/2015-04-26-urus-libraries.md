---
layout: post
title: 'Menguruskan Libraries/Dependencies'
date: 2015-03-29
author: kamalmustafa
permalink: /urus-libraries.html
level: 1
summary: >
            Bagaimana menguruskan libraries/dependencies secara sistematik dalam projek
            programming.
---

Setiap projek *programming* sama ada besar atau kecil biasanya tidak hanya mengandungi kod-kod
aturcara yang ditulis oleh *programmer* itu sahaja. Ia juga akan turut mengandungi kod aturcara
yang ditulis oleh pihak ketiga.

Ini kerana kebanyakkan masalah umum dalam *programming* biasanya sudah ada penyelesaianya. Dalam
erti kata lain, sudah wujud kod yang ditulis oleh *programmer* lain yang dapat menyelesaikan
masalah tersebut. Apa yang perlu dilakukan adalah mencari kod-kod tersebut dan seterusnya memasukkan
kod tersebut bersama-sama aturcara yang kita sedang tulis ini.

<!--more-->

Setiap bahasa pengaturcaraan mempunyai mekanisma tersendiri untuk memasukkan kod pihak ketiga ini ke dalam
aturcara kita. Ia biasanya dapat dikenali melalui fungsi seperti `import`, `require`, `include`, `load`,
`use` dan sebagainya.
