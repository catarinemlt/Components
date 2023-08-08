/*
    SCRIPT DESTINADO A TRADUZIR OS TÍTULOS DOS DOCUMENTOS NAS CAIXAS INICIAIS(TILES) QUANDO O USUÁRIO TROCAR DE IDIOMA
*/

//Títulos em Portugues
const titles_documents_PT = [
    'Analytics',//título para teste
    'Comece aqui',
    'FAQ, Tutoriais e Treinamentos',
    'Guia rápido',
    'Manual Conceitual de Negócio',
    'Manual do Usuário',
    'Manual de Instalação do Agente',
    'Manual de Integrações',
    'Configurações de treinamento',
    'Trilhas',
    'Criação de treinamento presencial',
    'Aprofundando o conhecimento',
    'Microlearning e podcast',
    'Certificação',
    'Biblioteca',
    'Gameficação',
    'Webinar',
    'Guia de compatibilidade de fabricantes',
];

//Títulos em Ingles
const titles_documents_EN = [
    'Ingles',//título para teste
    'Getting started',
    'FAQ, Totorials and Trainings',
    'Quick guide',
    'Conceptual Business Manual',
    'User Manual',
    'Agent Installation Manual',
    'Integrations Manual',
    'Training settings',
    'Tracks',
    'Creating in person training',
    'Deepening the knowledge',
    'Microlearning and podcast',
    'Certification',
    'Library',
    'Gamification',
    'Webinar',
    'Manufacturer Compatibility Guide'
];

//Títulos em Espanhol
const titles_documents_ES = [
    'Espanhol',//título para teste
    'Empieza aquí',
    'FAQ, Totorials and Trainings',
    'Guía rápida',
    'Manual Conceptual de Negocio',
    'Manual del Usuario',
    'Manual de Instalación del Agente',
    'Manual de Integraciones',
    'Configuraciones de entrenamiento',
    'Trillas',
    'Creando entrenamiento en persona',
    'Profundizando el conocimiento',
    'Microlearning y podcast',
    'Certificación',
    'Biblioteca',
    'Gamificación',
    'Webinar',
    ''
];


const html_titles = document.querySelectorAll("h3.tile__headline > a");

function translate_titles(html_element) {

    let title = html_element.innerText;

    for (i = 0; i <= titles_documents_PT.length; i++) {

        if (title == titles_documents_PT[i]) {

            switch (document.URL) {
                case 'https://testes.scrollhelp.site/?l=en':
                case 'https://helpcenter-nddprint.ndd.tech/?l=en':
                case 'https://helpcenter-nddorbix.ndd.tech/?l=en':
                case 'https://helpcenter-kubo.ndd.tech/?l=en':
                    html_element.innerText = titles_documents_EN[i];
                    break;
                case 'https://testes.scrollhelp.site/?l=es':
                case 'https://helpcenter-nddprint.ndd.tech/?l=es':
                case 'https://helpcenter-nddorbix.ndd.tech/?l=es':
                case 'https://helpcenter-kubo.ndd.tech/?l=es':
                    html_element.innerText = titles_documents_ES[i];
                    break;
                default:
                    break;
            }

        }
    }

}

html_titles.forEach(translate_titles)