/*
    SCRIPT DESTINADO A TRADUZIR OS TÍTULOS DOS DOCUMENTOS NAS CAIXAS INICIAIS(TILES) QUANDO O USUÁRIO TROCAR DE IDIOMA
*/

//Título em Portugues
const titles_documents_PT = [
    'Analytics',
    'Ajuda',
    'Primeiros passos',
    'FAQ, Tutoriais e Treinamentos',
    'Guia Rápido',
    'Manual Conceitual de Negócio',
    'Manual do Usuário',
    'Manual de Instalação dos Agentes',
    'Manual de Integrações'
];

const titles_documents_EN = [
    'Ingles',
    'Help',
    'Getting started',
    'FAQ, Totorials and Trainings',
    'Quick Guide',
    'Conceptual Business Manual',
    'User Manual',
    'Agents Installation Manual',
    'Integrations Manual'
];

const titles_documents_ES = [
    'Espanhol',
    'Help',
    'Getting started',
    'FAQ, Totorials and Trainings',
    'Quick Guide',
    'Conceptual Business Manual',
    'User Manual',
    'Agents Installation Manual',
    'Integrations Manual'
];



//URL Atual para que possamos trocar o nome do material
let urlAtual = document.URL;

var html_titles = document.querySelectorAll("h3.tile__headline");

function translate_title_to_EN(html_element) {

    var title = html_element.innerHTML;

    for (i = 0; i <= titles_documents_PT.length; i++) {

        if (title == titles_documents_PT[i]) {

            switch (urlAtual) {
                case 'https://testes.scrollhelp.site/?l=en':
                    html_element.innerHTML = titles_documents_EN[i];
                    break;
                case 'https://testes.scrollhelp.site/?l=es':
                    html_element.innerHTML = titles_documents_ES[i];
                    break;
                default:
                    break;
            }

        }
    }

}

html_titles.forEach(translate_title_to_EN)