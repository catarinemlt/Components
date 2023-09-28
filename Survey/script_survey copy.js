/*
    SCRIPT DESTINADO A CRIAR O COMPONENTE DE FEEDBACK DE ARTIGOS/PÁGINAS
*/

const survey_text = {
    pt: [
        "O artigo foi útil?",
        "Sim",
        "Não",
        "Por que o artigo não foi útil?",
        "Difícil de entender",
        "Informações incorretas",
        "Não contém as informações que eu preciso",
        "Outro",
        "Deixe um comentário (opcional)",
        "Limite de 200 caracteres",
        "Enviar",
        "Cancelar",
        "Agradecemos o seu comentário",
    ],
    en: [
        "Was this article helpful?",
        "Yes",
        "No",
        "Why wasn't the article helpful?",
        "Hard to understand",
        "Incorrect information",
        "Missing the information I need",
        "Translation is wrong",
        "Thank you for your feedback"
    ],
    es: [
        "¿Este artículo ha sido útil?",
        "Sí",
        "No",
        "¿Por qué no te resultó útil el artículo?",
        "Difícil de entender",
        "Información incorrecta",
        "Falta la información que necesito",
        "Problema de traducción",
        "Gracias por su respuesta"
    ],
}

const survey_html = {
    pt: `<div class="wrap-survey">
            <div class="article-survey" id="article-survey">
                <span>${survey_text.pt[0]}</span>
                <div class="button-group" id="button-group">
                    <button class="article-survey-button" data-value="1" type="button" id="article-survey-button-yes">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg>
                    ${survey_text.pt[1]}
                    </button>
                    <button class="article-survey-button" data-value="0" type="button" id="article-survey-button-no">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M240-840h440v520L400-40l-50-50q-7-7-11.5-19t-4.5-23v-14l44-174H120q-32 0-56-24t-24-56v-80q0-7 2-15t4-15l120-282q9-20 30-34t44-14Zm360 80H240L120-480v80h360l-54 220 174-174v-406Zm0 406v-406 406Zm80 34v-80h120v-360H680v-80h200v520H680Z"/></svg>
                    ${survey_text.pt[2]}
                    </button>
                </div>
            </div>

            <div class="negative-feedback-dropdown" id="negative-feedback-dropdown">
                <span class="header-negative-feedback-dropdown">${survey_text.pt[3]}</span>

                <div id="container-reason-negative-feedback" class="container-reason-negative-feedback">
                    <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Difícil de entender">
                    <label for="Difícil de entender">${survey_text.pt[4]}</label>
                </div>
                <div id="container-reason-negative-feedback" class="container-reason-negative-feedback">
                    <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Impreciso">
                    <label for="Impreciso">${survey_text.pt[5]}</label>
                </div>

                <div id="container-reason-negative-feedback" class="container-reason-negative-feedback">
                    <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Irrelevante">
                    <label for="Irrelevante">${survey_text.pt[6]}</label>
                </div>

                <div id="container-reason-negative-feedback" class="container-reason-negative-feedback">
                    <input type="radio" class="reason-negative-feedback" name="reason-negative-feedback" id="Outro">
                    <label for="Outro">${survey_text.pt[7]}</label>
                </div>
                
                <div class="container-negative-feedback-comment">
                    <label for="negative-feedback-comment">${survey_text.pt[8]}</label>
                    <textarea id="negative-feedback-comment" name="negative-feedback-comment"></textarea>
                    <span>${survey_text.pt[9]}</span>
                </div>

                <button class="button_send_negative_feedback" id="button_send_negative_feedback">${survey_text.pt[10]}</button>
                <button class="button_cancel_negative_feedback" id="button_cancel_negative_feedback">${survey_text.pt[11]}</button>
            </div>

            <div class="feedback-finish" id="feedback-finish">
                <span>${survey_text.pt[12]}</span>
            </div>

        </div>`,

    en: `<div class="wrap-survey">
            <div class="article-survey">
                <div class="button-group" id="button-group">
                    <span>${survey_text.en[0]}</span>
                    <button class="article-survey-button" data-value="1" type="button" id="article-survey-button-yes">
                        ${survey_text.en[1]}
                    </button>
                    <button class="article-survey-button" data-value="0" type="button" id="article-survey-button-no">
                        ${survey_text.en[2]}
                    </button>
                </div>
                
                <div class="negative-feedback-dropdown" id="negative-feedback-dropdown">
                    <div class="header-negative-feedback-dropdown">
                        <span>${survey_text.en[3]}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="close-negative-feedback-dropdown">
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
                    <span>${survey_text.en[8]}</span>
                </div>
            </div>
        </div>`,
    es: `<div class="wrap-survey">
            <div class="article-survey">
                <div class="button-group" id="button-group">
                    <span>${survey_text.es[0]}</span>
                    <button class="article-survey-button" data-value="1" type="button" id="article-survey-button-yes">
                        ${survey_text.es[1]}
                    </button>
                    <button class="article-survey-button" data-value="0" type="button" id="article-survey-button-no">
                        ${survey_text.es[2]}
                    </button>
                </div>
                
                <div class="negative-feedback-dropdown" id="negative-feedback-dropdown">
                    <div class="header-negative-feedback-dropdown">
                        <span>${survey_text.es[3]}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" id="close-negative-feedback-dropdown">
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
                    <span>${survey_text.es[8]}</span>
                </div>
            </div>
        </div>`
}

const url_include_survey = document.URL;
const array_url_include_survey = url_include_survey.split("/");
const language_include_survey = array_url_include_survey[3];

const html_paragraphs = [...document.querySelectorAll("p")];
const component_feedback_article = html_paragraphs.filter(text => text.innerText == '{{component-feedback-article}}');

if (component_feedback_article.length !== 0) {

    component_feedback_article[0].insertAdjacentHTML('beforebegin', '<div class="container_survey"></div>');
    component_feedback_article[0].remove();

    const container_survey = document.querySelector(".container_survey")

    switch (language_include_survey) {
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

    const article_survey = document.getElementById("article-survey");
    const button_no = document.getElementById("article-survey-button-no");
    const button_yes = document.getElementById("article-survey-button-yes");
    const feedback_dropdown = document.getElementById("negative-feedback-dropdown");
    const button_send_negative_feedback = document.getElementById("button_send_negative_feedback");
    const button_cancel_negative_feedback = document.getElementById("button_cancel_negative_feedback");
    const button_group = document.getElementById("button-group");
    const feedback_finish = document.getElementById("feedback-finish");
    const radios_reason_negative_feedback = document.querySelectorAll(".container-reason-negative-feedback input[type='radio']")
    const negative_feedback_comment = document.getElementById("negative-feedback-comment");


    button_send_negative_feedback.classList.add("article-survey-button-disabled");
    button_send_negative_feedback.disabled = true;

    function send_positive_feedback(e) {
        e.preventDefault;

        article_survey.classList.add("is-closed")

        button_group.classList.add("is-closed");
        feedback_finish.classList.add("is-open");
    }

    function send_negative_feedback(e) {
        e.preventDefault;

        feedback_dropdown.classList.add("is-closed");
        article_survey.classList.add("is-closed")
        feedback_finish.classList.add("is-open");

    }

    function open_dropdown_feedback(e) {
        e.preventDefault;

        feedback_dropdown.classList.add("is-open");

        button_no.classList.add("article-survey-button-selected");
        button_yes.classList.add("article-survey-button-disabled");

        button_no.disabled = true;
        button_yes.disabled = true;
    }

    function close_dropdown_feedback(e) {
        e.preventDefault;

        feedback_dropdown.classList.remove("is-open");

        button_no.classList.remove("article-survey-button-selected");
        button_yes.classList.remove("article-survey-button-disabled");

        button_no.disabled = false;
        button_yes.disabled = false;
    }

    function reason_is_selected(element) {

        element.addEventListener('click', (e) => {

            e.preventDefault;

            button_send_negative_feedback.classList.remove("article-survey-button-disabled");
            button_send_negative_feedback.disabled = false;

        });
    }

    function limit_comment_negative_feedback() {

        const max_characters = 200;

        negative_feedback_comment.addEventListener("input", () => {
            const comment = negative_feedback_comment.value;

            if (comment.length > max_characters)
                negative_feedback_comment.value = comment.substring(0, max_characters);
        });
    }


    button_yes.addEventListener("click", send_positive_feedback);
    button_no.addEventListener("click", open_dropdown_feedback);
    radios_reason_negative_feedback.forEach(reason_is_selected);
    button_send_negative_feedback.addEventListener("click", send_negative_feedback);
    button_cancel_negative_feedback.addEventListener("click", close_dropdown_feedback);
    limit_comment_negative_feedback();

} else {
    console.log("Componente de feedback não está incluído nesta página");
}



