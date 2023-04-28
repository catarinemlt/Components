/*
    SCRIPT DESTINADO A CRIAR O COMPONENTE DE FEEDBACK DE ARTIGOS/PÁGINAS
*/

const survey_parameters = {
    pt: `<div class="wrap-survey">
            <div class="article-survey">
                <div class="button-group" id="button-group">
                    <p>O artigo foi útil?</p>
                    <button class="article-survey-button" data-value="1" type="button" id="article-survey-button-yes">
                        Sim, obrigado
                    </button>
                    <button class="article-survey-button" data-value="0" type="button" id="article-survey-button-no">
                        Realmente não
                    </button>
                </div>

                <div class="feedback-survey-dropdown" id="feedback-survey-dropdown">
                    <div class="header-feedback-survey-dropdown">
                        <p>Desculpe por isso. Por que o artigo não foi útil?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x"
                            viewBox="0 0 16 16" id="close-feedback-survey-dropdown">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback"
                            id="Difícil de entender">
                        <label for="Difícil de entender" class="reason-negative-feedback">Difícil de entender</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Impreciso">
                        <label for="Impreciso" class="reason-negative-feedback">Informações incorretas</label>
                    </div>

                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback"
                            id="Irrelevante">
                        <label for="Irrelevante" class="reason-negative-feedback">Não contém as informações que eu preciso</label>
                    </div>
                </div>
                <div class="feedback-finish" id="feedback-finish">
                    <p>Agradecemos o seu feedback.</p>
                </div>

            </div>
        </div>`,
    en: `<div class="wrap-survey">
            <div class="article-survey">
                <div class="button-group" id="button-group">
                    <p>Was this article helpful?</p>
                    <button class="article-survey-button" data-value="1" type="button" id="article-survey-button-yes">
                        Yes, thanks
                    </button>
                    <button class="article-survey-button" data-value="0" type="button" id="article-survey-button-no">
                        Not really
                    </button>
                </div>
                
                <div class="feedback-survey-dropdown" id="feedback-survey-dropdown">
                    <div class="header-feedback-survey-dropdown">
                        <p>Sorry about that! Why wasn't the article helpful?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="close-feedback-survey-dropdown">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Difícil de entender">
                        <label for="Difícil de entender" class="reason-negative-feedback">Hard to understand</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Impreciso">
                        <label for="Impreciso" class="reason-negative-feedback">Incorrect information</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Problema na Tradução">
                        <label for="Problema na Tradução" class="reason-negative-feedback">Translation is wrong</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Irrelevante">
                        <label for="Irrelevante" class="reason-negative-feedback">Missing the information I need</label>
                    </div>
                </div>
                <div class="feedback-finish" id="feedback-finish">
                    <p>Thank you for your feedback.</p>
                </div>
            </div>
        </div>`,
    es: `<div class="wrap-survey">
            <div class="article-survey">
                <div class="button-group" id="button-group">
                    <p>¿Este artículo ha sido útil?</p>
                    <button class="article-survey-button" data-value="1" type="button" id="article-survey-button-yes">
                        Sí, gracias
                    </button>
                    <button class="article-survey-button" data-value="0" type="button" id="article-survey-button-no">
                        No realmente
                    </button>
                </div>
                
                <div class="feedback-survey-dropdown" id="feedback-survey-dropdown">
                    <div class="header-feedback-survey-dropdown">
                        <p>¡Lo lamentamos! ¿Por qué no te resultó útil el artículo?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="close-feedback-survey-dropdown">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Difícil de entender">
                        <label for="Difícil de entender" class="reason-negative-feedback">Difícil de entender</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Impreciso">
                        <label for="Impreciso" class="reason-negative-feedback">Información incorrecta</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Problema na Tradução">
                        <label for="Problema na Tradução" class="reason-negative-feedback">Problema de traducción</label>
                    </div>
                    <div id="container-radio-reason-negative-feedback" class="reason-negative-feedback">
                        <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Irrelevante">
                        <label for="Irrelevante" class="reason-negative-feedback">Falta la información que necesito</label>
                    </div>
                </div>
                <div class="feedback-finish" id="feedback-finish">
                    <p>¡Gracias por su respuesta!</p>
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
        container_survey.innerHTML = survey_parameters.pt;
        break;
    case "en":
        container_survey.innerHTML = survey_parameters.en;
        break;
    case "es":
        container_survey.innerHTML = survey_parameters.es;
        break;
    default:
        container_survey.innerHTML = survey_parameters.pt;
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