const removeAccents = require("remove-accents");

function template(article, vol, issue) {
	const { title, p, authors, figcaption } = article;
	let figure, firstAuthor;

	if (authors) {
		if (authors.split(",")[0] && authors.split(",")[0].split(" ")[1]) {
			firstAuthor = removeAccents(
				authors
					.split(",")[0]
					.split(" ")[1]
					.toLowerCase()
			);
		}
	}

	if (figcaption) {
		figure = `<figure><img src="/images/stories/hl/${vol}${issue}/${firstAuthor}.jpg" alt=""/><figcaption>${figcaption}</figcaption></figure>
        `;
	}

	const articleHtml = `${title} (Vol. ${vol}, No. ${issue})\n
${figure}\n
<p>${p}</p>\n
<p class="ref">${authors}
<br><b>[<a target="_blank" href="https://doi.org/">Abstract</a>]</b>
</p>
   
`;

	return articleHtml;
}

module.exports = template;
