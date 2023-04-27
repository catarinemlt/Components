/*
    SCRIPT DESTINADO A TRADUZIR OS CATEGORIAS DOS DOCUMENTOS NAS CAIXAS INICIAIS(TILES) QUANDO O USUÁRIO TROCAR DE IDIOMA
*/

//Categorias em Portugues
const categories_PT = [
    'Manuais',//categoria para teste
    'Guias',
    'Ferramentas',
];

//Categorias em Ingles
const categories_EN = [
    'Manuals',//categoria para teste
    'Guides',
    'Tools',
];

//Categorias em Espanhol
const categories_ES = [
    'Manuales',//categoria para teste
    'Guías',
    'Herramientas',
];


const html_categories = document.querySelectorAll("h2.portal__content__heading");

function translate_categories(html_element) {

    let title = html_element.innerHTML;

    for (i = 0; i <= categories_PT.length; i++) {

        if (title == categories_PT[i]) {

            switch (document.URL) {
                case 'https://testes.scrollhelp.site/?l=en':
                case 'https://helpcenter-nddprint.ndd.tech/?l=en':
                case 'https://helpcenter-nddorbix.ndd.tech/?l=en':
                    html_element.innerHTML = categories_EN[i];
                    break;
                case 'https://testes.scrollhelp.site/?l=es':
                case 'https://helpcenter-nddprint.ndd.tech/?l=es':
                case 'https://helpcenter-nddorbix.ndd.tech/?l=es':
                    html_element.innerHTML = categories_ES[i];
                    break;
                default:
                    break;
            }

        }
    }

}

html_categories.forEach(translate_categories)