/*
    SCRIPT DESTINADO A TRADUZIR OS TÍTULOS DOS DOCUMENTOS NAS CAIXAS INICIAIS(TILES) QUANDO O USUÁRIO TROCAR DE IDIOMA
*/

//Títulos em Portugues
const titles_documents_PT = [
    'Analytics',//título para teste
    'Primeiros passos',
    'FAQ, Tutoriais e Treinamentos',
    'Guia Rápido',
    'Manual Conceitual de Negócio',
    'Manual do Usuário',
    'Manual de Instalação dos Agentes',
    'Manual de Integrações'
];

//Títulos em Ingles
const titles_documents_EN = [
    'Ingles',//título para teste
    'Getting started',
    'FAQ, Totorials and Trainings',
    'Quick Guide',
    'Conceptual Business Manual',
    'User Manual',
    'Agents Installation Manual',
    'Integrations Manual'
];

//Títulos em Espanhol
const titles_documents_ES = [
    'Espanhol',//título para teste
    'Empieza aquí',
    'FAQ, Totorials and Trainings',
    'Guía Rápida',
    'Manual Conceptual de Negocio',
    'Manual del Usuario',
    'Manual de Instalación del Agente',
    'Manual de Integraciones'
];


const html_titles = document.querySelectorAll("h3.tile__headline");

function translate_titles(html_element) {

    let title = html_element.innerHTML;

    for (i = 0; i <= titles_documents_PT.length; i++) {

        if (title == titles_documents_PT[i]) {

            switch (document.URL) {
                case 'https://testes.scrollhelp.site/?l=en':
                case 'https://helpcenter-nddprint.ndd.tech/?l=en':
                case 'https://helpcenter-nddorbix.ndd.tech/?l=en':
                    html_element.innerHTML = titles_documents_EN[i];
                    break;
                case 'https://testes.scrollhelp.site/?l=es':
                case 'https://helpcenter-nddprint.ndd.tech/?l=es':
                case 'https://helpcenter-nddorbix.ndd.tech/?l=es':
                    html_element.innerHTML = titles_documents_ES[i];
                    break;
                default:
                    break;
            }

        }
    }

}

html_titles.forEach(translate_titles)