const code = [{
        id: 1,
        description: "Return an array of all values in ages[] that are 18 or over:",
        codeExample: "<p>const ages = [32, 33, 16, 40];</p> <br/> <p>const result = ages.filter(checkAdult);</p>" +
            "<br/> <p>function checkAdult(age) {</p> <br/> <p>function checkAdult(age) {</p> <br/> <p>}</p>",
        tipId: 1
    },
    {
        id: 2,
        description: "We map an array of objects and return only one property of each item:",
        codeExample: '<pre><code>let vencedores <span>=</span><span>[</span>' +
            '<br/>' +
            ' <span>{</span>' +
            '<br/>' +
            ' nome <span>:</span><span>"Equipe Super"</span><span>,</span>' +
            '<br/>' +
            ' pais <span>:</span><span>"Brasil"</span>' +
            '<br/>' +
            ' <span>}</span><span>,</span>' +
            '<br/>' +
            ' <span>{</span>' +
            '<br/>' +
            ' nome <span>:</span><span>"Time Maximo"</span><span>,</span>' +
            '<br/>' +
            ' pais <span>:</span><span>"EUA"</span>' +
            '<br/>' +
            ' <span>}</span><span>,</span>' +
            '<br/>' +
            ' <span>{</span>' +
            '<br/>' +
            ' nome <span>:</span><span>"Mega Grupo"</span><span>,</span>' +
            '<br/>' +
            ' pais <span>:</span><span>"Canad&aacute;"</span>' +
            '<br/>' +
            ' <span>}</span>' +
            '<br/>' +
            '<span>]</span><span>;</span>' +
            '<br/>' +
            '<span>let</span> podioPorPais <span>=</span> vencedores<span>.</span><span>map</span><span>(</span><span>function</span><span>(</span><span>item<span>,</span> indice</span><span>)</span><span>{</span>' +
            '<br/>' +
            ' <span>return</span> item<span>.</span><span>pais</span><span>;</span>' +
            '<br/>' +
            '<span>}</span><span>)</span><span>;</span>' +
            '<br/>' +
            '<span>document</span><span>.</span><span>write</span><span>(</span>podioPorPais<span>)</span><span>;</span></code></pre',
        tipId: 2
    },
]

export default code;