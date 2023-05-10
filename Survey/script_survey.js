/*
    SCRIPT DESTINADO A CRIAR O COMPONENTE DE FEEDBACK DE ARTIGOS/PÁGINAS
*/

const survey_text = {
    pt: [
        "O artigo foi útil?",
        "Sim",
        "Não",
        "Desculpe por isso. Por que o artigo não foi útil?",
        "Difícil de entender",
        "Informações incorretas",
        "Não contém as informações que eu preciso",
        "Agradecemos o seu feedback."
    ],
    en: [
        "Was this article helpful?",
        "Yes",
        "No",
        "Sorry about that! Why wasn't the article helpful?",
        "Hard to understand",
        "Incorrect information",
        "Missing the information I need",
        "Translation is wrong",
        "Thank you for your feedback."
    ],
    es: [
        "¿Este artículo ha sido útil?",
        "Sí",
        "No",
        "¡Lo lamentamos! ¿Por qué no te resultó útil el artículo?",
        "Difícil de entender",
        "Información incorrecta",
        "Falta la información que necesito",
        "Problema de traducción",
        "¡Gracias por su respuesta!"
    ],
}

const survey_html = {
    pt: `<div class="wrap-survey">
            <div class="article-survey">
                <div class="button-group" id="button-group">
                    <p>${survey_text.pt[0]}</p>
                    <button class="article-survey-button" data-value="1" type="button" id="article-survey-button-yes">
                    ${survey_text.pt[1]}
                    </button>
                    <button class="article-survey-button" data-value="0" type="button" id="article-survey-button-no">
                    ${survey_text.pt[2]}
                    </button>
                </div>

                <div class="feedback-survey-dropdown" id="feedback-survey-dropdown">
                    <div class="header-feedback-survey-dropdown">
                        <p>${survey_text.pt[3]}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x"
                            viewBox="0 0 16 16" id="close-feedback-survey-dropdown">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback"
                            id="Difícil de entender">
                        <label for="Difícil de entender" class="reason-negative-feedback">${survey_text.pt[4]}</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Impreciso">
                        <label for="Impreciso" class="reason-negative-feedback">${survey_text.pt[5]}</label>
                    </div>

                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback"
                            id="Irrelevante">
                        <label for="Irrelevante" class="reason-negative-feedback">${survey_text.pt[6]}</label>
                    </div>
                </div>
                <div class="feedback-finish" id="feedback-finish">
                    <p>${survey_text.pt[7]}</p>
                </div>

            </div>
        </div>`,
    en: `<div class="wrap-survey">
            <div class="article-survey">
                <div class="button-group" id="button-group">
                    <p>${survey_text.en[0]}</p>
                    <button class="article-survey-button" data-value="1" type="button" id="article-survey-button-yes">
                        ${survey_text.en[1]}
                    </button>
                    <button class="article-survey-button" data-value="0" type="button" id="article-survey-button-no">
                        ${survey_text.en[2]}
                    </button>
                </div>
                
                <div class="feedback-survey-dropdown" id="feedback-survey-dropdown">
                    <div class="header-feedback-survey-dropdown">
                        <p>${survey_text.en[3]}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="close-feedback-survey-dropdown">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Difícil de entender">
                        <label for="Difícil de entender" class="reason-negative-feedback">${survey_text.en[4]}</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Impreciso">
                        <label for="Impreciso" class="reason-negative-feedback">${survey_text.en[5]}</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Irrelevante">
                        <label for="Irrelevante" class="reason-negative-feedback">${survey_text.en[6]}</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Problema na Tradução">
                        <label for="Problema na Tradução" class="reason-negative-feedback">${survey_text.en[7]}</label>
                    </div>
                </div>
                <div class="feedback-finish" id="feedback-finish">
                    <p>${survey_text.en[8]}</p>
                </div>
            </div>
        </div>`,
    es: `<div class="wrap-survey">
            <div class="article-survey">
                <div class="button-group" id="button-group">
                    <p>${survey_text.es[0]}</p>
                    <button class="article-survey-button" data-value="1" type="button" id="article-survey-button-yes">
                        ${survey_text.es[1]}
                    </button>
                    <button class="article-survey-button" data-value="0" type="button" id="article-survey-button-no">
                        ${survey_text.es[2]}
                    </button>
                </div>
                
                <div class="feedback-survey-dropdown" id="feedback-survey-dropdown">
                    <div class="header-feedback-survey-dropdown">
                        <p>${survey_text.es[3]}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="close-feedback-survey-dropdown">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Difícil de entender">
                        <label for="Difícil de entender" class="reason-negative-feedback">${survey_text.es[4]}</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Impreciso">
                        <label for="Impreciso" class="reason-negative-feedback">${survey_text.es[5]}</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Irrelevante">
                        <label for="Irrelevante" class="reason-negative-feedback">${survey_text.es[6]}</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Problema na Tradução">
                        <label for="Problema na Tradução" class="reason-negative-feedback">${survey_text.es[7]}</label>
                    </div>
                </div>
                <div class="feedback-finish" id="feedback-finish">
                    <p>${survey_text.es[8]}</p>
                </div>
            </div>
        </div>`
}

const site_url = document.URL;
const array_site_url = site_url.split("/");
const language = array_site_url[3];

const html_paragraphs = document.querySelectorAll("p");
const html_paragraphs_array = [...html_paragraphs];

const component_feedback_article = html_paragraphs_array.filter(text => text.innerText == '{{component-feedback-article}}');
component_feedback_article[0].insertAdjacentHTML('beforebegin', '<div class="container_survey"></div>');
component_feedback_article[0].remove();

const container_survey = document.querySelector(".container_survey")

switch (language) {
    case "pt":
        container_survey.innerHTML = survey_html.pt;
        break;
    case "en":
        container_survey.innerHTML = survey_html.en;
        break;
    case "es":
        container_survey.innerHTML = survey_html.es;
        break;
    default:
        container_survey.innerHTML = survey_html.pt;
        break;
}

const button_no = document.getElementById("article-survey-button-no");
const button_yes = document.getElementById("article-survey-button-yes");
const feedback_dropdown = document.getElementById("feedback-survey-dropdown");
const reason_negative_feeback = document.querySelectorAll(".reason-negative-feedback");
const button_group = document.getElementById("button-group");
const feedback_finish = document.getElementById("feedback-finish");
const close_feedback_survey_dropdown = document.getElementById("close-feedback-survey-dropdown");

function send_positive_feedback(e) {
    e.preventDefault;

    feedback_dropdown.classList.add("feedback-survey-dropdown-is-closed");

    button_group.classList.add("feedback-survey-dropdown-is-closed");
    feedback_finish.classList.add("feedback-survey-dropdown-is-open");
}

function send_negative_feedback(e) {
    e.preventDefault;

    feedback_dropdown.classList.toggle("feedback-survey-dropdown-is-open");

    button_no.classList.add("article-survey-button-selected");
    button_yes.classList.add("article-survey-button-disabled");

    button_no.disabled = true;
    button_yes.disabled = true;
}


function send_reason_feedback(element) {

    element.addEventListener('click', (e) => {

        e.preventDefault;

        feedback_dropdown.classList.add("feedback-survey-dropdown-is-closed");
        button_group.classList.add("feedback-survey-dropdown-is-closed");
        feedback_finish.classList.add("feedback-survey-dropdown-is-open");
    });

}

function close_feedback_dropdown(e) {
    e.preventDefault;

    feedback_dropdown.classList.add("feedback-survey-dropdown-is-closed");
    button_group.classList.add("feedback-survey-dropdown-is-closed");
    feedback_finish.classList.add("feedback-survey-dropdown-is-open");
}

button_yes.addEventListener("click", send_positive_feedback);
button_no.addEventListener("click", send_negative_feedback);
reason_negative_feeback.forEach(send_reason_feedback);
close_feedback_survey_dropdown.addEventListener("click", close_feedback_dropdown);