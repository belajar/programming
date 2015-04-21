---
layout: post
title: '4 Cara Define Function'
date: 2015-03-31
author: kamalmustafa
permalink: /4-cara-define-function.html
level: 1
summary: >
            4 cara atau pattern yang biasa digunakan untuk define function dalam JavaScript.
---

Semua bahasa pengaturcaraan mempunyai komponen yang dinamakan *function* yang fungsi utamanya
adalah untuk merangkumkan beberapa arahan ke dalam satu unit yang boleh digunakan berulang-kali.
Ia dapat mengelakkan pengulangan kod yang sama dalam aturcara kita.

Dalam JavaScript, *function* boleh dikatakan salah satu daripada sumber kekuatannya kerana ia dapat
digunakan untuk tujuan berikut:-

* *Code reuse* - Mengelakkan pengulangan kod yang sama.
* *Information hiding* - Menghadkan akses kepada sesuatu *variable* daripada bahagian lain aturcara.
Dalam bahasa *object-oriented* lain seperti Java, ia dipanggil private variable.
* Composition - Beberapa *function* digabungkan bersama bagi membentuk satu set *functionality* bagi
sesuatu objek.

Untuk tulisan ini bagaimana pun saya cuma ingin menyenaraikan 4 cara atau *pattern* yang biasa digunakan
untuk define *function* dalam JavaScript. Berkaitan kegunaan-kegunaan *function* itu sendiri, saya akan
cuba sentuh dalam tulisan akan datang, Insya Allah.

<!--more-->

## Cara 1 - Function statement
Ini adalah cara yang paling biasa:-

```javascript
function add(num1, num2) {
    return num1 + num2;
}
```
Dalam kaedah ini, kita gunakan *keyword* `function` dan diikuti dengan nama bagi *function* tersebut.
Satu perkara yang perlu kita ingati di sini ialah cara menulis *function* seperti ini tertakhluk kepada
satu *behavior* JavaScript yang dipanggil 'hoisting'. Contohnya code dibawah adalah betul:-

```javascript
add(1, 2);

function add(num1, num2) {
    return num1 + num2;
}

```
Ya, anda boleh memanggil *function* sebelum ia diisytiharkan. Ini kerana apabila dijalankan, JavaScript akan
menjalakannya seperti berikut:-

```javascript
function add(num1, num2) {
    return num1 + num2;
}

add(1, 2);

```
Kesemua definisi *function* akan sentiasa dipindahkan ke atas oleh JavaScript.

## Cara 2 - Function expression
Cara ini menggunakan *anonymous* function yang dirujuk kepada *variable*:-

```javascript
var add = function(num1, num2) {
    return num1 + num2;
}
```

Cara ini tidak tertakhluk kepada *hoisting* seperti sebelum ini jadi jika anda cuba define
function anda seperti berikut:-

```javascript
console.log(add(1, 2));
var add = function (num1, num2) {
    return num1 + num2;
}
```

Anda akan mendapat `TypeError: undefined is not a function`. *Variable* `add` bagaimana pun masih tertakhluk kepada
hoisting, jadi code sebenar yang dijalankan oleh JavaScript adalah seperti berikut:-

```javascript
var add = undefined;
console.log(add(1, 2));
add = function (num1, num2) {
    return num1 + num2;
}
```

*Function expression* memang digunakan secara meluas namun satu keburukkannya adalah ia menyusahkan proses
debugging kerana function tersebut adalah *anonymous* - tidak mempunyai sebarang nama.

## Rujukan
- http://davidbcalhoun.com/2011/different-ways-of-defining-functions-in-javascript-this-is-madness/
- http://www.bryanbraun.com/2014/11/27/every-possible-way-to-define-a-javascript-function
