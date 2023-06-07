const feedback_release_html = {
    pt: `<div class="wrap-feedback-release">
            <span>Isso foi útil?</span>
            <div class="button-group-feedback-release" id="button-group-feedback-release">
                <button class="release-feedback-button" type="button" id="release-feedback-button-yes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                        <path
                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                </button>
                <button class="release-feedback-button" type="button" id="release-feedback-button-no">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                        <path
                            d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z" />
                    </svg>
                </button>
            </div>
        </div>`,
    en: `<div class="wrap-feedback-release">
            <span>Was this helpful?</span>
            <div class="button-group-feedback-release" id="button-group-feedback-release">
                <button class="release-feedback-button" type="button" id="release-feedback-button-yes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                        <path
                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                </button>
                <button class="release-feedback-button" type="button" id="release-feedback-button-no">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                        <path
                            d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z" />
                    </svg>
                </button>
            </div>
        </div>`,
    es: `<div class="wrap-feedback-release">
            <span>¿Te resultó útil?</span>
            <div class="button-group-feedback-release" id="button-group-feedback-release">
                <button class="release-feedback-button" type="button" id="release-feedback-button-yes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                        <path
                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                </button>
                <button class="release-feedback-button" type="button" id="release-feedback-button-no">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                        <path
                            d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z" />
                    </svg>
                </button>
            </div>
        </div>`
}

const html_headers_release = document.querySelectorAll("h2");
const html_headers_release_array = [...html_headers_release];


html_headers_release_array.forEach(header => {
    header.insertAdjacentHTML('beforeend', '<div class="container-feedback-release"></div>');
});


const container_feedback_release = document.querySelectorAll(".container-feedback-release");

const rf_site_url = document.URL;
const array_rf_site_url = rf_site_url.split("/");
const rf_language = array_rf_site_url[3];

//MUDAR CONFORME O IDIOMA
container_feedback_release.forEach(container => {
    switch (rf_language) {
        case "pt":
            container.innerHTML = feedback_release_html.pt;
            break;
        case "en":
            container.innerHTML = feedback_release_html.en;
            break;
        case "es":
            container.innerHTML = feedback_release_html.es;
            break;
        default:
            container.innerHTML = feedback_release_html.pt;
            break;
    }

});


const buttons_positive_feedback = document.querySelectorAll("#release-feedback-button-yes");
const buttons_negative_feedback = document.querySelectorAll("#release-feedback-button-no");

(function add_button_details() {
    for (let i = 0; i < buttons_positive_feedback.length; i++) {
        buttons_positive_feedback[i].setAttribute("aria-details", buttons_positive_feedback[i].closest("h2").id)
        buttons_negative_feedback[i].setAttribute("aria-details", buttons_negative_feedback[i].closest("h2").id)
    }
})();

(function get_feedbacks_storage() {
    let feedbacks_storage = JSON.parse(localStorage.getItem("feedbacks"));

    if (feedbacks_storage) {

        for (const feedback of feedbacks_storage) {

            buttons_negative_feedback.forEach(button => {
                if (feedback.id_title_release === button.getAttribute("aria-details") && feedback.feedback_type == "negative")
                    button.classList.add("button-selected")
            });

            buttons_positive_feedback.forEach(button => {
                if (feedback.id_title_release === button.getAttribute("aria-details") && feedback.feedback_type == "positive")
                    button.classList.add("button-selected")
            });
        }


    }
})();


function send_positive_feedback_release(e) {
    e.preventDefault;

    let title_release = e.target.closest("h2");
    let id_title_release = title_release.id;

    let button_clicked = e.target.closest("button");
    button_clicked.classList.add("button-selected")

    let button_negative_feedback = button_clicked.nextElementSibling;
    button_negative_feedback.classList.remove("button-selected")

    save_user_feedback({ id_title_release: id_title_release, feedback_type: "positive" });
}

function send_negative_feedback_release(e) {
    e.preventDefault;

    let title_release = e.target.closest("h2");
    let id_title_release = title_release.id

    let button_clicked = e.target.closest("button");
    button_clicked.classList.add("button-selected")

    let button_positive_feedback = button_clicked.previousElementSibling;
    button_positive_feedback.classList.remove("button-selected")

    save_user_feedback({ id_title_release: id_title_release, feedback_type: "negative" });
}

function save_user_feedback(feedback_to_add) {

    let feedbacks_storage = JSON.parse(localStorage.getItem("feedbacks"));

    if (!feedbacks_storage) {

        localStorage.setItem("feedbacks", JSON.stringify([feedback_to_add]))

    } else {

        let all_feedbacks = JSON.parse(localStorage.getItem("feedbacks"))

        all_feedbacks.forEach(feedback => {
            if (feedback.id_title_release === feedback_to_add.id_title_release) {
                all_feedbacks.splice(all_feedbacks.indexOf(feedback), 1);
            }
        })

        all_feedbacks.push(feedback_to_add);

        localStorage.setItem("feedbacks", JSON.stringify(all_feedbacks));
    }

}





buttons_positive_feedback.forEach((button) => {
    button.addEventListener("click", send_positive_feedback_release)
})

buttons_negative_feedback.forEach((button) => {
    button.addEventListener("click", send_negative_feedback_release)
})