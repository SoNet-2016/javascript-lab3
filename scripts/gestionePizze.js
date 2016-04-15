/*
 Created on Apr 15, 2016
 Copyright (c) 2015-2016 Teodoro Montanaro
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License
 @author: tmontanaro
 */
"use strict";

var elenco_pizze = new Array();
elenco_pizze = [
    {
        "nome_pizza" : "Diavola",
        "nome_pizzeria" : "Amici Nostri",
        "img_url" : "images/amici-nostri-diavola.jpg",
        "img_alt" : "Diavola di Amici Nostri"
    },
    {
        "nome_pizza" : "Margherita",
        "nome_pizzeria" : "Amici Nostri",
        "img_url" : "images/amici-nostri-margherita.jpg",
        "img_alt" : "Margherita di Amici Nostri"
    },
    {
        "nome_pizza" : "Margherita (integrale)",
        "nome_pizzeria" : "Amici Nostri",
        "img_url" : "images/amici-nostri-margherita-integrale.jpg",
        "img_alt" : "Margherita (integrale) di Amici Nostri"
    },
    {
        "nome_pizza" : "Margherita",
        "nome_pizzeria" : "Occupy",
        "img_url" : "images/occupy-margherita.jpg",
        "img_alt" : "Margherita di Occupy"
    },
    {
        "nome_pizza" : "Salame piccante",
        "nome_pizzeria" : "Occupy",
        "img_url" : "images/occupy-salame-piccante.jpg",
        "img_alt" : "Salame piccante di Occupy"
    }
]

function stampa_elenco_pizze()
{
    for (variable of elenco_pizze) {
        aggiungi_elemento_pizza(variable["nome_pizza"],variable["nome_pizzeria"],variable["img_alt"],variable["img_url"]);
    }
    return true ;
}

function aggiungi_elemento_pizza(nomePizza, nomePizzeria, imgAlt, imgUrl)
{
    var media_list = document.getElementsByClassName("media-list");
    if (typeof imgUrl == 'undefined' || imgUrl =='') {
        // randomly choose an image from the existing one

        var numero_random = Math.floor(Math.random() * elenco_pizze.length);
        var random_pizza = elenco_pizze[numero_random];
        imgUrl = random_pizza["img_url"];
        imgAlt = 'random image - ' + random_pizza["img_alt"];
    }
    var new_li_item = document.createElement("li");
    new_li_item.className = "media";

    var new_media_left_item = document.createElement("div");
    new_media_left_item.className = "media-left";
    var new_img_item = document.createElement("img");
    new_img_item.className = "media-object";
    new_img_item.setAttribute("src", imgUrl);
    new_img_item.setAttribute("alt", imgAlt);
    new_media_left_item.appendChild(new_img_item);

    new_li_item.appendChild(new_media_left_item);


    var new_media_body_item = document.createElement("div");
    new_media_body_item.className = "media-body";

    var new_h4_item = document.createElement("h4");
    new_h4_item.className = "media-heading";
    var strong = document.createElement('strong');
    strong.innerHTML = nomePizza;
    new_h4_item.appendChild(strong);
    var new_p_item = document.createElement("p");
    new_p_item.innerHTML = nomePizzeria;

    new_media_body_item.appendChild(new_h4_item);
    new_media_body_item.appendChild(new_p_item);

    new_li_item.appendChild(new_media_body_item);

    var new_hr_item = document.createElement("hr");
    new_li_item.appendChild(new_hr_item);
    media_list[0].appendChild(new_li_item);
}

function aggiungi_pizza()
{
    var pizza = document.getElementById("pizza");

    var pizzeria = document.getElementById("pizzeria");
    var nome_nuova_pizza = pizza.value;
    var nome_nuova_pizzeria = pizzeria.value;
    if (nome_nuova_pizza!=='' && nome_nuova_pizzeria!=='') {
        aggiungi_elemento_pizza(nome_nuova_pizza, nome_nuova_pizzeria);
    }
    else
    {
        alert("Uno dei campi richiesti è vuoto!");
    }
}

window.onload = function()
{
    stampa_elenco_pizze();
}