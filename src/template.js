function template(article, vol, issue) {
	const { title, p, authors, figcaption } = article;
	let figure;

	if (figcaption) {
		figure = `<figure><img src="/images/stories/hl/${vol}${issue}" alt=""/><figcaption>${figcaption}</figcaption></figure>
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
