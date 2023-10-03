/*
SCRIPT DESTINADO A ADICIONAR O SWAGGER NAS PÁGINAS DE API


NOVO OBJETO - PARÂMETROS DA API
{
	"product": "NOME DO PRODUTO QUE A API PERTENCE",
	"pageUrl": "NOME DA PÁGINA NA URL QUE A API SERÁ INSERIDA",
	"swaggerUrl": "URL DA API NO SWAGGER"
}

*/

const apiSettings =
{
	"apis": [
		{
			product: "NDD Orbix", //Apenas para idenrificar o produto que a API pertence
			pageUrl: "api-impressoras", //Nome da página presente no final da URL, neste caso "api-impressoras" (https://helpcenter-nddorbix.ndd.tech/pt/documentacao-api/Current/api-impressoras)
			swaggerUrl: "https://developer.nddorbix.com/printer-external-integration-api/index.html", //URL do Swagger para incluir no Iframe
		},
		{
			product: "NDD Orbix",
			pageUrl: "api-estruturacao-organizacional-do-provedor",
			swaggerUrl: "https://developer.nddorbix.com/core-external-integration-api/index.html"
		},
		{
			product: "NDD Orbix",
			pageUrl: "api-de-produtos",
			swaggerUrl: "https://developer.nddorbix.com/stock-external-integration-api/index.html"
		},
		{
			product: "NDD Move",
			pageUrl: "apis-de-integracao-nddmove",
			swaggerUrl: "https://icomprova.nddcargo.com.br:9003/index.html"
		}
		,
		{
			product: "NDD Averba",
			pageUrl: "manual-nddaverba-apis-de-integracao",
			swaggerUrl: "https://reader.nddaverba.com.br/documentation/api.html"
		}
		//O NOVO OBJETO DEVE SER INSERIDO LOGO ACIMA DESTE COMENTÁRIO
	]
}


createSwagger(apiSettings);


function createSwagger(apiSettings) {

	const pageUrlAddApi = document.URL.split("/");

	for (let apis of apiSettings.apis) {

		if (apis.pageUrl == pageUrlAddApi[5]) {
			createIframe(apis.swaggerUrl)
		}else if (apis.pageUrl == pageUrlAddApi[6]) {
			createIframe(apis.swaggerUrl)
		}
	}
}

function createIframe(swaggerUrl) {

	let mainContent = document.querySelector("#main-content");
	let divSwagger = document.createElement("div");
	let ifrm = document.createElement("iframe");

	ifrm.style.border = "1px solid #CCC";
	ifrm.style.width = "100%";
	ifrm.style.height = "700px";

	ifrm.setAttribute("src", swaggerUrl);

	mainContent.appendChild(divSwagger);
	divSwagger.appendChild(ifrm);

}