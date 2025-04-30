├── Dermatologia.jpg
├── Doctor3.jpg
├── Hospital 1.jpg
├── INTEGRANTES.txt
├── Ilustration3.png
├── Pediatria.jpg
├── Psicologia.jpg
├── biblioteca-laudos.html
├── boy2.jpg
├── cardiologia.jpg
├── gerenciamento-documentos.html
├── index.html
├── login.html
├── logo-sabara - Copia.png
├── logo-sabara.png
├── script-bibliotecaa.js
├── script-gerenciamento.js
├── script-index.js
├── script-login.js
├── script-telemedicina.js
├── styles-index.css
├── styles-login.css
├── styles-telemedicina.css
├── stylesbiblioteca.css
├── stylesgerenciamento2.css
└── telemedicina.html


/Dermatologia.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/LuisCrivellaro/Sprint3-Front/cd13c8f507e385e1e4c30afa5efb82676f694230/Dermatologia.jpg


--------------------------------------------------------------------------------
/Doctor3.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/LuisCrivellaro/Sprint3-Front/cd13c8f507e385e1e4c30afa5efb82676f694230/Doctor3.jpg


--------------------------------------------------------------------------------
/Hospital 1.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/LuisCrivellaro/Sprint3-Front/cd13c8f507e385e1e4c30afa5efb82676f694230/Hospital 1.jpg


--------------------------------------------------------------------------------
/INTEGRANTES.txt:
--------------------------------------------------------------------------------
1 | Luis Filipe Crivellaro RM560877
2 | Rafael Mandel RM560333
3 | Felipe Silva do Prado Lima RM559848


--------------------------------------------------------------------------------
/Ilustration3.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/LuisCrivellaro/Sprint3-Front/cd13c8f507e385e1e4c30afa5efb82676f694230/Ilustration3.png


--------------------------------------------------------------------------------
/Pediatria.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/LuisCrivellaro/Sprint3-Front/cd13c8f507e385e1e4c30afa5efb82676f694230/Pediatria.jpg


--------------------------------------------------------------------------------
/Psicologia.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/LuisCrivellaro/Sprint3-Front/cd13c8f507e385e1e4c30afa5efb82676f694230/Psicologia.jpg


--------------------------------------------------------------------------------
/biblioteca-laudos.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="pt-br">
  3 | <head>
  4 |     <meta charset="UTF-8">
  5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  6 |     <title>Biblioteca de Laudos - Hospital Sabará</title>
  7 |     <link rel="icon" href="logo-sabara - Copia.png" type="image/png">
  8 |     <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
  9 |     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
 10 |     <link rel="stylesheet" href="stylesbiblioteca.css">
 11 | </head>
 12 | <body>
 13 |     <header class="cabecalho">
 14 |         <nav class="navbar navbar-expand-lg navbar-light fixed-top">
 15 |             <div class="container">
 16 |                 <a class="navbar-brand" href="index.html">
 17 |                     <img src="./logo-sabara.png" alt="Logo Hospital Sabará" class="logo-hospital">
 18 |                 </a>
 19 |                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacao" aria-controls="menuNavegacao" aria-expanded="false" aria-label="Toggle navigation">
 20 |                     <span class="navbar-toggler-icon"></span>
 21 |                 </button>
 22 |                 
 23 |                 <div class="collapse navbar-collapse" id="menuNavegacao">
 24 |                     <ul class="navbar-nav ms-auto">
 25 |                         <li class="nav-item">
 26 |                             <a class="nav-link active" href="index.html">Início</a>
 27 |                         </li>
 28 |                         <li class="nav-item">
 29 |                             <a class="nav-link" href="biblioteca-laudos.html">Biblioteca de Laudos</a>
 30 |                         </li>
 31 |                         <li class="nav-item">
 32 |                             <a class="nav-link" href="gerenciamento-documentos.html">Documentos</a>
 33 |                         </li>
 34 |                         <li class="nav-item">
 35 |                             <a class="nav-link" href="telemedicina.html">Telemedicina</a>
 36 |                         </li>
 37 |                         <li class="nav-item botao-login">
 38 |                             <a class="btn btn-primary" href="login.html">Login</a>
 39 |                         </li>
 40 |                     </ul>
 41 |                 </div>
 42 |             </div>
 43 |         </nav>
 44 |     </header>
 45 | 
 46 |     <script>
 47 |         let lastScrollTop = 0;
 48 |         const navbar = document.querySelector('.navbar');
 49 |       
 50 |         window.addEventListener('scroll', function () {
 51 |           let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 52 |       
 53 |           if (scrollTop > lastScrollTop) {
 54 |             // rolando para baixo
 55 |             navbar.style.top = "-80px"; // ajuste conforme a altura real da sua navbar
 56 |           } else {
 57 |             // rolando para cima
 58 |             navbar.style.top = "0";
 59 |           }
 60 |       
 61 |           lastScrollTop = scrollTop;
 62 |         });
 63 |       </script>
 64 |     
 65 | 
 66 |     <section class="secao-biblioteca">
 67 |         <div class="container">
 68 |             <div class="row">
 69 |                 <div class="col-12">
 70 |                     <h1 class="titulo-secao">Biblioteca de Laudos</h1>
 71 |                     <p class="subtitulo-secao">Visualize e gerencie todos os seus documentos médicos em um só lugar</p>
 72 |                 </div>
 73 |             </div>
 74 | 
 75 |             <div class="row mt-4">
 76 |                 <div class="col-lg-3">
 77 |                     <div class="card card-filtros">
 78 |                         <div class="card-header">
 79 |                             <h4><i class="fas fa-filter me-2"></i>Filtros</h4>
 80 |                         </div>
 81 |                         <div class="card-body">
 82 |                             <div class="mb-3">
 83 |                                 <label class="form-label">Tipo de Documento</label>
 84 |                                 <div class="form-check">
 85 |                                     <input class="form-check-input" type="checkbox" id="checkLaudos" checked>
 86 |                                     <label class="form-check-label" for="checkLaudos">Laudos</label>
 87 |                                 </div>
 88 |                                 <div class="form-check">
 89 |                                     <input class="form-check-input" type="checkbox" id="checkReceitas" checked>
 90 |                                     <label class="form-check-label" for="checkReceitas">Receitas</label>
 91 |                                 </div>
 92 |                                 <div class="form-check">
 93 |                                     <input class="form-check-input" type="checkbox" id="checkAtestados" checked>
 94 |                                     <label class="form-check-label" for="checkAtestados">Atestados</label>
 95 |                                 </div>
 96 |                                 <div class="form-check">
 97 |                                     <input class="form-check-input" type="checkbox" id="checkExames" checked>
 98 |                                     <label class="form-check-label" for="checkExames">Exames</label>
 99 |                                 </div>
100 |                             </div>
101 | 
102 |                             <div class="mb-3">
103 |                                 <label class="form-label">Período</label>
104 |                                 <select class="form-select" id="filtroPeriodo">
105 |                                     <option value="todos">Todos</option>
106 |                                     <option value="30dias">Últimos 30 dias</option>
107 |                                     <option value="6meses">Últimos 6 meses</option>
108 |                                     <option value="1ano">Último ano</option>
109 |                                 </select>
110 |                             </div>
111 | 
112 |                             <div class="mb-3">
113 |                                 <label for="filtroEspecialidade" class="form-label">Especialidade</label>
114 |                                 <select class="form-select" id="filtroEspecialidade">
115 |                                     <option value="todas">Todas</option>
116 |                                     <option value="pediatria">Pediatria</option>
117 |                                     <option value="cardiologia">Cardiologia</option>
118 |                                     <option value="dermatologia">Dermatologia</option>
119 |                                     <option value="psicologia">Psicologia</option>
120 |                                 </select>
121 |                             </div>
122 | 
123 |                             <div class="mb-3">
124 |                                 <label for="filtroPaciente" class="form-label">Paciente</label>
125 |                                 <input type="text" class="form-control" id="filtroPaciente" placeholder="Nome do paciente">
126 |                             </div>
127 | 
128 |                             <div class="d-grid">
129 |                                 <button class="btn btn-primary" id="btnAplicarFiltros">Aplicar Filtros</button>
130 |                             </div>
131 |                         </div>
132 |                     </div>
133 | 
134 |                     <div class="card card-estatisticas mt-4">
135 |                         <div class="card-header">
136 |                             <h4><i class="fas fa-chart-pie me-2"></i>Estatísticas</h4>
137 |                         </div>
138 |                         <div class="card-body">
139 |                             <div class="estatistica-item">
140 |                                 <div class="estatistica-valor">42</div>
141 |                                 <div class="estatistica-label">Total de Documentos</div>
142 |                             </div>
143 |                             <div class="estatistica-item">
144 |                                 <div class="estatistica-valor">12</div>
145 |                                 <div class="estatistica-label">Laudos</div>
146 |                             </div>
147 |                             <div class="estatistica-item">
148 |                                 <div class="estatistica-valor">18</div>
149 |                                 <div class="estatistica-label">Receitas</div>
150 |                             </div>
151 |                             <div class="estatistica-item">
152 |                                 <div class="estatistica-valor">8</div>
153 |                                 <div class="estatistica-label">Atestados</div>
154 |                             </div>
155 |                             <div class="estatistica-item">
156 |                                 <div class="estatistica-valor">4</div>
157 |                                 <div class="estatistica-label">Exames</div>
158 |                             </div>
159 |                         </div>
160 |                     </div>
161 |                 </div>
162 | 
163 |                 <div class="col-lg-9">
164 |                     <div class="card card-busca">
165 |                         <div class="card-body">
166 |                             <div class="row g-2">
167 |                                 <div class="col-md-6">
168 |                                     <div class="input-group">
169 |                                         <input type="text" class="form-control" placeholder="Buscar documento..." id="buscaDocumento">
170 |                                         <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
171 |                                     </div>
172 |                                 </div>
173 |                                 <div class="col-md-4">
174 |                                     <select class="form-select" id="ordenarPor">
175 |                                         <option value="data-recente">Data (Mais recente)</option>
176 |                                         <option value="data-antiga">Data (Mais antiga)</option>
177 |                                         <option value="nome-az">Nome (A-Z)</option>
178 |                                         <option value="nome-za">Nome (Z-A)</option>
179 |                                     </select>
180 |                                 </div>
181 |                                 <div class="col-md-2">
182 |                                     <div class="btn-group w-100" role="group">
183 |                                         <button type="button" class="btn btn-outline-secondary active" id="btnViewGrid"><i class="fas fa-th-large"></i></button>
184 |                                         <button type="button" class="btn btn-outline-secondary" id="btnViewList"><i class="fas fa-list"></i></button>
185 |                                     </div>
186 |                                 </div>
187 |                             </div>
188 |                         </div>
189 |                     </div>
190 | 
191 |                     <div class="documentos-grid mt-4" id="visualizacaoGrid">
192 |                         <div class="row g-4">
193 |                             <div class="col-md-4">
194 |                                 <div class="card documento">
195 |                                     <div class="tipo-documento laudo">
196 |                                         <i class="fas fa-file-medical"></i>
197 |                                     </div>
198 |                                     <div class="card-body">
199 |                                         <h5 class="titulo-documento">Laudo de Consulta Cardiológica</h5>
200 |                                         <div class="meta-documento">
201 |                                             <div class="meta-item"><i class="fas fa-calendar"></i> 20/04/2025</div>
202 |                                             <div class="meta-item"><i class="fas fa-user-md"></i> Dr. Ricardo Almeida</div>
203 |                                         </div>
204 |                                         <p class="descricao-documento">Avaliação cardiológica completa com análise de exames e recomendações.</p>
205 |                                         <div class="d-flex justify-content-between">
206 |                                             <span class="badge bg-info">Cardiologia</span>
207 |                                             <div class="acoes-documento">
208 |                                                 <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
209 |                                                 <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
210 |                                                 <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
211 |                                             </div>
212 |                                         </div>
213 |                                     </div>
214 |                                 </div>
215 |                             </div>
216 | 
217 |                             <div class="col-md-4">
218 |                                 <div class="card documento">
219 |                                     <div class="tipo-documento receita">
220 |                                         <i class="fas fa-prescription"></i>
221 |                                     </div>
222 |                                     <div class="card-body">
223 |                                         <h5 class="titulo-documento">Receita Médica</h5>
224 |                                         <div class="meta-documento">
225 |                                             <div class="meta-item"><i class="fas fa-calendar"></i> 18/04/2025</div>
226 |                                             <div class="meta-item"><i class="fas fa-user-md"></i> Dra. Carolina Silva</div>
227 |                                         </div>
228 |                                         <p class="descricao-documento">Prescrição de medicamentos para tratamento de alergia.</p>
229 |                                         <div class="d-flex justify-content-between">
230 |                                             <span class="badge bg-success">Dermatologia</span>
231 |                                             <div class="acoes-documento">
232 |                                                 <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
233 |                                                 <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
234 |                                                 <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
235 |                                             </div>
236 |                                         </div>
237 |                                     </div>
238 |                                 </div>
239 |                             </div>
240 | 
241 |                             <div class="col-md-4">
242 |                                 <div class="card documento">
243 |                                     <div class="tipo-documento atestado">
244 |                                         <i class="fas fa-clipboard-check"></i>
245 |                                     </div>
246 |                                     <div class="card-body">
247 |                                         <h5 class="titulo-documento">Atestado Médico</h5>
248 |                                         <div class="meta-documento">
249 |                                             <div class="meta-item"><i class="fas fa-calendar"></i> 15/04/2025</div>
250 |                                             <div class="meta-item"><i class="fas fa-user-md"></i> Dr. Fernando Costa</div>
251 |                                         </div>
252 |                                         <p class="descricao-documento">Atestado de 3 dias para recuperação pós-tratamento.</p>
253 |                                         <div class="d-flex justify-content-between">
254 |                                             <span class="badge bg-warning">Pediatria</span>
255 |                                             <div class="acoes-documento">
256 |                                                 <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
257 |                                                 <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
258 |                                                 <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
259 |                                             </div>
260 |                                         </div>
261 |                                     </div>
262 |                                 </div>
263 |                             </div>
264 | 
265 |                             <div class="col-md-4">
266 |                                 <div class="card documento">
267 |                                     <div class="tipo-documento exame">
268 |                                         <i class="fas fa-microscope"></i>
269 |                                     </div>
270 |                                     <div class="card-body">
271 |                                         <h5 class="titulo-documento">Exame de Sangue</h5>
272 |                                         <div class="meta-documento">
273 |                                             <div class="meta-item"><i class="fas fa-calendar"></i> 12/04/2025</div>
274 |                                             <div class="meta-item"><i class="fas fa-hospital"></i> Lab. Central</div>
275 |                                         </div>
276 |                                         <p class="descricao-documento">Hemograma completo com análise detalhada.</p>
277 |                                         <div class="d-flex justify-content-between">
278 |                                             <span class="badge bg-danger">Laboratório</span>
279 |                                             <div class="acoes-documento">
280 |                                                 <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
281 |                                                 <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
282 |                                                 <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
283 |                                             </div>
284 |                                         </div>
285 |                                     </div>
286 |                                 </div>
287 |                             </div>
288 | 
289 |                             <div class="col-md-4">
290 |                                 <div class="card documento">
291 |                                     <div class="tipo-documento laudo">
292 |                                         <i class="fas fa-file-medical"></i>
293 |                                     </div>
294 |                                     <div class="card-body">
295 |                                         <h5 class="titulo-documento">Laudo Psicológico</h5>
296 |                                         <div class="meta-documento">
297 |                                             <div class="meta-item"><i class="fas fa-calendar"></i> 10/04/2025</div>
298 |                                             <div class="meta-item"><i class="fas fa-user-md"></i> Dra. Maria Santos</div>
299 |                                         </div>
300 |                                         <p class="descricao-documento">Avaliação psicológica com análise comportamental.</p>
301 |                                         <div class="d-flex justify-content-between">
302 |                                             <span class="badge bg-primary">Psicologia</span>
303 |                                             <div class="acoes-documento">
304 |                                                 <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
305 |                                                 <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
306 |                                                 <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
307 |                                             </div>
308 |                                         </div>
309 |                                     </div>
310 |                                 </div>
311 |                             </div>
312 | 
313 |                             <div class="col-md-4">
314 |                                 <div class="card documento">
315 |                                     <div class="tipo-documento receita">
316 |                                         <i class="fas fa-prescription"></i>
317 |                                     </div>
318 |                                     <div class="card-body">
319 |                                         <h5 class="titulo-documento">Receita de Antibiótico</h5>
320 |                                         <div class="meta-documento">
321 |                                             <div class="meta-item"><i class="fas fa-calendar"></i> 08/04/2025</div>
322 |                                             <div class="meta-item"><i class="fas fa-user-md"></i> Dr. Paulo Ribeiro</div>
323 |                                         </div>
324 |                                         <p class="descricao-documento">Prescrição de antibiótico para infecção respiratória.</p>
325 |                                         <div class="d-flex justify-content-between">
326 |                                             <span class="badge bg-warning">Pediatria</span>
327 |                                             <div class="acoes-documento">
328 |                                                 <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
329 |                                                 <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
330 |                                                 <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
331 |                                             </div>
332 |                                         </div>
333 |                                     </div>
334 |                                 </div>
335 |                             </div>
336 |                         </div>
337 |                     </div>
338 | 
339 |                     <div class="documentos-lista mt-4 d-none" id="visualizacaoLista">
340 |                         <div class="table-responsive">
341 |                             <table class="table table-hover">
342 |                                 <thead class="table-light">
343 |                                     <tr>
344 |                                         <th>Tipo</th>
345 |                                         <th>Nome</th>
346 |                                         <th>Data</th>
347 |                                         <th>Especialidade</th>
348 |                                         <th>Médico</th>
349 |                                         <th>Ações</th>
350 |                                     </tr>
351 |                                 </thead>
352 |                                 <tbody>
353 |                                     <tr>
354 |                                         <td><span class="badge bg-info"><i class="fas fa-file-medical me-1"></i> Laudo</span></td>
355 |                                         <td>Laudo de Consulta Cardiológica</td>
356 |                                         <td>20/04/2025</td>
357 |                                         <td>Cardiologia</td>
358 |                                         <td>Dr. Ricardo Almeida</td>
359 |                                         <td>
360 |                                             <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
361 |                                             <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
362 |                                             <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
363 |                                         </td>
364 |                                     </tr>
365 |                                     <tr>
366 |                                         <td><span class="badge bg-success"><i class="fas fa-prescription me-1"></i> Receita</span></td>
367 |                                         <td>Receita Médica</td>
368 |                                         <td>18/04/2025</td>
369 |                                         <td>Dermatologia</td>
370 |                                         <td>Dra. Carolina Silva</td>
371 |                                         <td>
372 |                                             <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
373 |                                             <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
374 |                                             <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
375 |                                         </td>
376 |                                     </tr>
377 |                                     <tr>
378 |                                         <td><span class="badge bg-warning"><i class="fas fa-clipboard-check me-1"></i> Atestado</span></td>
379 |                                         <td>Atestado Médico</td>
380 |                                         <td>15/04/2025</td>
381 |                                         <td>Pediatria</td>
382 |                                         <td>Dr. Fernando Costa</td>
383 |                                         <td>
384 |                                             <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
385 |                                             <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
386 |                                             <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
387 |                                         </td>
388 |                                     </tr>
389 |                                     <tr>
390 |                                         <td><span class="badge bg-danger"><i class="fas fa-microscope me-1"></i> Exame</span></td>
391 |                                         <td>Exame de Sangue</td>
392 |                                         <td>12/04/2025</td>
393 |                                         <td>Laboratório</td>
394 |                                         <td>Lab. Central</td>
395 |                                         <td>
396 |                                             <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
397 |                                             <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
398 |                                             <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
399 |                                         </td>
400 |                                     </tr>
401 |                                     <tr>
402 |                                         <td><span class="badge bg-info"><i class="fas fa-file-medical me-1"></i> Laudo</span></td>
403 |                                         <td>Laudo Psicológico</td>
404 |                                         <td>10/04/2025</td>
405 |                                         <td>Psicologia</td>
406 |                                         <td>Dra. Maria Santos</td>
407 |                                         <td>
408 |                                             <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
409 |                                             <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
410 |                                             <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
411 |                                         </td>
412 |                                     </tr>
413 |                                     <tr>
414 |                                         <td><span class="badge bg-success"><i class="fas fa-prescription me-1"></i> Receita</span></td>
415 |                                         <td>Receita de Antibiótico</td>
416 |                                         <td>08/04/2025</td>
417 |                                         <td>Pediatria</td>
418 |                                         <td>Dr. Paulo Ribeiro</td>
419 |                                         <td>
420 |                                             <button class="btn btn-sm btn-light" title="Visualizar"><i class="fas fa-eye"></i></button>
421 |                                             <button class="btn btn-sm btn-light" title="Baixar"><i class="fas fa-download"></i></button>
422 |                                             <button class="btn btn-sm btn-light" title="Compartilhar"><i class="fas fa-share-alt"></i></button>
423 |                                         </td>
424 |                                     </tr>
425 |                                 </tbody>
426 |                             </table>
427 |                         </div>
428 |                     </div>
429 | 
430 |                     <nav class="mt-4">
431 |                         <ul class="pagination justify-content-center">
432 |                             <li class="page-item disabled">
433 |                                 <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
434 |                             </li>
435 |                             <li class="page-item active"><a class="page-link" href="#">1</a></li>
436 |                             <li class="page-item"><a class="page-link" href="#">2</a></li>
437 |                             <li class="page-item"><a class="page-link" href="#">3</a></li>
438 |                             <li class="page-item">
439 |                                 <a class="page-link" href="#">Próximo</a>
440 |                             </li>
441 |                         </ul>
442 |                     </nav>
443 |                 </div>
444 |             </div>
445 |         </div>
446 |     </section>
447 | 
448 |     <div class="modal fade" id="modalDocumento" tabindex="-1" aria-labelledby="tituloModal" aria-hidden="true">
449 |         <div class="modal-dialog modal-lg">
450 |             <div class="modal-content">
451 |                 <div class="modal-header">
452 |                     <h5 class="modal-title" id="tituloModal">Laudo de Consulta Cardiológica</h5>
453 |                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
454 |                 </div>
455 |                 <div class="modal-body">
456 |                     <div class="informacoes-documento mb-4">
457 |                         <div class="row">
458 |                             <div class="col-md-6">
459 |                                 <p><strong>Data:</strong> 20/04/2025</p>
460 |                                 <p><strong>Médico:</strong> Dr. Ricardo Almeida</p>
461 |                                 <p><strong>Especialidade:</strong> Cardiologia</p>
462 |                             </div>
463 |                             <div class="col-md-6">
464 |                                 <p><strong>Paciente:</strong> João Silva</p>
465 |                                 <p><strong>Convênio:</strong> Sabará Saúde</p>
466 |                                 <p><strong>ID do Documento:</strong> LAU-2025-04567</p>
467 |                             </div>
468 |                         </div>
469 |                     </div>
470 | 
471 |     <div class="assistente-ia" id="assistenteIA">
472 |         <div class="cabecalho-assistente">
473 |             <div class="info-assistente">
474 |                 <div class="avatar-assistente">
475 |                     <i class="fas fa-robot"></i>
476 |                 </div>
477 |                 <div class="nome-assistente">GuardianPro - Assistente Virtual</div>
478 |             </div>
479 |             <div class="acoes-assistente">
480 |                 <button class="btn-minimizar" id="minimizarAssistente"><i class="fas fa-minus"></i></button>
481 |                 <button class="btn-fechar" id="fecharAssistente"><i class="fas fa-times"></i></button>
482 |             </div>
483 |         </div>
484 |         <div class="corpo-assistente">
485 |             <div class="mensagens" id="mensagensAssistente">
486 |                 <div class="mensagem mensagem-assistente">
487 |                     <div class="conteudo-mensagem">
488 |                         Olá! Sou GuardianPro, o assistente virtual do Hospital Sabará. Como posso ajudar você hoje?
489 |                     </div>
490 |                     <div class="timestamp">Agora</div>
491 |                 </div>
492 |             </div>
493 |             <div class="entrada-mensagem">
494 |                 <input type="text" placeholder="Digite sua pergunta..." id="mensagemUsuario">
495 |                 <button class="btn-enviar" id="enviarMensagem"><i class="fas fa-paper-plane"></i></button>
496 |             </div>
497 |         </div>
498 |     </div>
499 | 
500 |     <div class="botao-assistente" id="botaoAssistente">
501 |         <i class="fas fa-robot"></i>
502 |     </div>
503 | 
504 |     <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
505 |     <script src="script-bibliotecaa.js"></script>
506 | </body>
507 | </html>


--------------------------------------------------------------------------------
/boy2.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/LuisCrivellaro/Sprint3-Front/cd13c8f507e385e1e4c30afa5efb82676f694230/boy2.jpg


--------------------------------------------------------------------------------
/cardiologia.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/LuisCrivellaro/Sprint3-Front/cd13c8f507e385e1e4c30afa5efb82676f694230/cardiologia.jpg


--------------------------------------------------------------------------------
/gerenciamento-documentos.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="pt-br">
  3 | <head>
  4 |     <meta charset="UTF-8">
  5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  6 |     <title>Gerenciamento de Documentos</title>
  7 |     <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
  8 |     <link rel="icon" href="logo-sabara - Copia.png" type="image/png">
  9 |     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
 10 |     <link rel="stylesheet" href="stylesgerenciamento2.css">
 11 | </head>
 12 |     <header class="cabecalho">
 13 |         <nav class="navbar navbar-expand-lg navbar-light fixed-top">
 14 |             <div class="container">
 15 |                 <a class="navbar-brand" href="index.html">
 16 |                     <img src="./logo-sabara.png" alt="Logo Hospital Sabará" class="logo-hospital">
 17 |                 </a>
 18 |                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacao" aria-controls="menuNavegacao" aria-expanded="false" aria-label="Toggle navigation">
 19 |                     <span class="navbar-toggler-icon"></span>
 20 |                 </button>
 21 |                 
 22 |                 <div class="collapse navbar-collapse" id="menuNavegacao">
 23 |                     <ul class="navbar-nav ms-auto">
 24 |                         <li class="nav-item">
 25 |                             <a class="nav-link active" href="index.html">Início</a>
 26 |                         </li>
 27 |                         <li class="nav-item">
 28 |                             <a class="nav-link" href="biblioteca-laudos.html">Biblioteca de Laudos</a>
 29 |                         </li>
 30 |                         <li class="nav-item">
 31 |                             <a class="nav-link" href="gerenciamento-documentos.html">Documentos</a>
 32 |                         </li>
 33 |                         <li class="nav-item">
 34 |                             <a class="nav-link" href="telemedicina.html">Telemedicina</a>
 35 |                         </li>
 36 |                         <li class="nav-item botao-login">
 37 |                             <a class="btn btn-primary" href="login.html">Login</a>
 38 |                         </li>
 39 |                     </ul>
 40 |                 </div>
 41 |             </div>
 42 |         </nav>
 43 |     </header>
 44 | 
 45 |     <script>
 46 |         let lastScrollTop = 0;
 47 |         const navbar = document.querySelector('.navbar');
 48 |       
 49 |         window.addEventListener('scroll', function () {
 50 |           let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 51 |       
 52 |           if (scrollTop > lastScrollTop) {
 53 |             navbar.style.top = "-80px"; 
 54 |           } else {
 55 |             navbar.style.top = "0";
 56 |           }
 57 |       
 58 |           lastScrollTop = scrollTop;
 59 |         });
 60 |       </script>      
 61 | 
 62 | <body class="bg-light">
 63 |     <div class="container-fluid">
 64 |         <div class="row">
 65 |             <div class="col-lg-3 col-xl-2 d-md-block bg-white shadow-sm p-0" style="min-height: 100vh;">
 66 |                 <div class="p-3 border-bottom">
 67 |                     <h4 class="text-primary"><i class="fas fa-stethoscope me-2"></i>Documentos</h4>
 68 |                 </div>
 69 |                 
 70 |                 <div class="list-group list-group-flush">
 71 |                     <a href="#" class="list-group-item list-group-item-action active py-3">
 72 |                         <i class="fas fa-file-medical me-2"></i>Laudos
 73 |                     </a>
 74 |                     <a href="#" class="list-group-item list-group-item-action py-3">
 75 |                         <i class="fas fa-prescription me-2"></i>Receitas
 76 |                     </a>
 77 |                     <a href="#" class="list-group-item list-group-item-action py-3">
 78 |                         <i class="fas fa-notes-medical me-2"></i>Atestados
 79 |                     </a>
 80 |                     <a href="#" class="list-group-item list-group-item-action py-3">
 81 |                         <i class="fas fa-history me-2"></i>Histórico
 82 |                     </a>
 83 |                     <a href="#" class="list-group-item list-group-item-action py-3">
 84 |                         <i class="fas fa-cog me-2"></i>Configurações
 85 |                     </a>
 86 |                 </div>
 87 |                 
 88 |                 <div class="p-3 mt-4">
 89 |                     <div class="card border-0 bg-light">
 90 |                         <div class="card-body">
 91 |                             <h6 class="text-muted mb-3">Documentos recentes</h6>
 92 |                             <div class="d-flex align-items-center mb-2">
 93 |                                 <i class="fas fa-file-alt text-primary me-2"></i>
 94 |                                 <small>Laudo - Maria Silva</small>
 95 |                             </div>
 96 |                             <div class="d-flex align-items-center mb-2">
 97 |                                 <i class="fas fa-file-prescription text-primary me-2"></i>
 98 |                                 <small>Receita - João Santos</small>
 99 |                             </div>
100 |                             <div class="d-flex align-items-center">
101 |                                 <i class="fas fa-file-medical text-primary me-2"></i>
102 |                                 <small>Atestado - Pedro Alves</small>
103 |                             </div>
104 |                         </div>
105 |                     </div>
106 |                 </div>
107 |             </div>
108 |             
109 |             <div class="col-lg-9 col-xl-10 p-4">
110 |                 <div class="d-flex justify-content-between align-items-center mb-4">
111 |                     <h3>Gerenciamento de Laudos</h3>
112 |                     <button class="btn btn-primary">
113 |                         <i class="fas fa-plus me-2"></i>Novo Laudo
114 |                     </button>
115 |                 </div>
116 |                 
117 |                 <div class="card mb-4 border-0 shadow-sm">
118 |                     <div class="card-body">
119 |                         <div class="row g-3">
120 |                             <div class="col-md-6">
121 |                                 <div class="input-group">
122 |                                     <input type="text" class="form-control" placeholder="Buscar por paciente ou tipo de laudo...">
123 |                                     <button class="btn btn-outline-primary" type="button">
124 |                                         <i class="fas fa-search"></i>
125 |                                     </button>
126 |                                 </div>
127 |                             </div>
128 |                             <div class="col-md-3">
129 |                                 <select class="form-select">
130 |                                     <option selected>Todos os tipos</option>
131 |                                     <option>Cardiologia</option>
132 |                                     <option>Neurologia</option>
133 |                                     <option>Ortopedia</option>
134 |                                     <option>Pediatria</option>
135 |                                 </select>
136 |                             </div>
137 |                             <div class="col-md-3">
138 |                                 <select class="form-select">
139 |                                     <option selected>Status</option>
140 |                                     <option>Pendentes</option>
141 |                                     <option>Finalizados</option>
142 |                                     <option>Rascunhos</option>
143 |                                 </select>
144 |                             </div>
145 |                         </div>
146 |                     </div>
147 |                 </div>
148 |                 
149 |                 <div class="card border-0 shadow-sm">
150 |                     <div class="card-body p-0">
151 |                         <div class="table-responsive">
152 |                             <table class="table table-hover mb-0">
153 |                                 <thead class="bg-light">
154 |                                     <tr>
155 |                                         <th scope="col" class="ps-4">Paciente</th>
156 |                                         <th scope="col">Data</th>
157 |                                         <th scope="col">Tipo</th>
158 |                                         <th scope="col">Status</th>
159 |                                         <th scope="col" class="text-end pe-4">Ações</th>
160 |                                     </tr>
161 |                                 </thead>
162 |                                 <tbody>
163 |                                     <tr>
164 |                                         <td class="ps-4">
165 |                                             <div class="d-flex align-items-center">
166 |                                                 <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 40px; height: 40px;">MS</div>
167 |                                                 <div>
168 |                                                     <h6 class="mb-0">Maria Silva</h6>
169 |                                                     <small class="text-muted">ID: #12345</small>
170 |                                                 </div>
171 |                                             </div>
172 |                                         </td>
173 |                                         <td>24/04/2025</td>
174 |                                         <td>Cardiologia</td>
175 |                                         <td><span class="badge bg-success">Finalizado</span></td>
176 |                                         <td class="text-end pe-4">
177 |                                             <button class="btn btn-sm btn-outline-primary me-2"><i class="fas fa-eye"></i></button>
178 |                                             <button class="btn btn-sm btn-outline-secondary me-2"><i class="fas fa-edit"></i></button>
179 |                                             <button class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></button>
180 |                                         </td>
181 |                                     </tr>
182 |                                     <tr>
183 |                                         <td class="ps-4">
184 |                                             <div class="d-flex align-items-center">
185 |                                                 <div class="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 40px; height: 40px;">JS</div>
186 |                                                 <div>
187 |                                                     <h6 class="mb-0">João Santos</h6>
188 |                                                     <small class="text-muted">ID: #12346</small>
189 |                                                 </div>
190 |                                             </div>
191 |                                         </td>
192 |                                         <td>23/04/2025</td>
193 |                                         <td>Ortopedia</td>
194 |                                         <td><span class="badge bg-warning text-dark">Rascunho</span></td>
195 |                                         <td class="text-end pe-4">
196 |                                             <button class="btn btn-sm btn-outline-primary me-2"><i class="fas fa-eye"></i></button>
197 |                                             <button class="btn btn-sm btn-outline-secondary me-2"><i class="fas fa-edit"></i></button>
198 |                                             <button class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></button>
199 |                                         </td>
200 |                                     </tr>
201 |                                     <tr>
202 |                                         <td class="ps-4">
203 |                                             <div class="d-flex align-items-center">
204 |                                                 <div class="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 40px; height: 40px;">PA</div>
205 |                                                 <div>
206 |                                                     <h6 class="mb-0">Pedro Alves</h6>
207 |                                                     <small class="text-muted">ID: #12347</small>
208 |                                                 </div>
209 |                                             </div>
210 |                                         </td>
211 |                                         <td>20/04/2025</td>
212 |                                         <td>Neurologia</td>
213 |                                         <td><span class="badge bg-success">Finalizado</span></td>
214 |                                         <td class="text-end pe-4">
215 |                                             <button class="btn btn-sm btn-outline-primary me-2"><i class="fas fa-eye"></i></button>
216 |                                             <button class="btn btn-sm btn-outline-secondary me-2"><i class="fas fa-edit"></i></button>
217 |                                             <button class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></button>
218 |                                         </td>
219 |                                     </tr>
220 |                                     <tr>
221 |                                         <td class="ps-4">
222 |                                             <div class="d-flex align-items-center">
223 |                                                 <div class="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 40px; height: 40px;">AC</div>
224 |                                                 <div>
225 |                                                     <h6 class="mb-0">Ana Costa</h6>
226 |                                                     <small class="text-muted">ID: #12348</small>
227 |                                                 </div>
228 |                                             </div>
229 |                                         </td>
230 |                                         <td>19/04/2025</td>
231 |                                         <td>Pediatria</td>
232 |                                         <td><span class="badge bg-secondary">Pendente</span></td>
233 |                                         <td class="text-end pe-4">
234 |                                             <button class="btn btn-sm btn-outline-primary me-2"><i class="fas fa-eye"></i></button>
235 |                                             <button class="btn btn-sm btn-outline-secondary me-2"><i class="fas fa-edit"></i></button>
236 |                                             <button class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></button>
237 |                                         </td>
238 |                                     </tr>
239 |                                 </tbody>
240 |                             </table>
241 |                         </div>
242 |                     </div>
243 |                     <div class="card-footer bg-white">
244 |                         <nav aria-label="Page navigation">
245 |                             <ul class="pagination justify-content-end mb-0">
246 |                                 <li class="page-item disabled">
247 |                                     <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
248 |                                 </li>
249 |                                 <li class="page-item active"><a class="page-link" href="#">1</a></li>
250 |                                 <li class="page-item"><a class="page-link" href="#">2</a></li>
251 |                                 <li class="page-item"><a class="page-link" href="#">3</a></li>
252 |                                 <li class="page-item">
253 |                                     <a class="page-link" href="#">Próximo</a>
254 |                                 </li>
255 |                             </ul>
256 |                         </nav>
257 |                     </div>
258 |                 </div>
259 |             </div>
260 |         </div>
261 |     </div>
262 |     <div class="assistente-ia" id="assistenteIA">
263 |         <div class="cabecalho-assistente">
264 |             <div class="info-assistente">
265 |                 <div class="avatar-assistente">
266 |                     <i class="fas fa-robot"></i>
267 |                 </div>
268 |                 <div class="nome-assistente">GuardianPro - Assistente Virtual</div>
269 |             </div>
270 |             <div class="acoes-assistente">
271 |                 <button class="btn-minimizar" id="minimizarAssistente"><i class="fas fa-minus"></i></button>
272 |                 <button class="btn-fechar" id="fecharAssistente"><i class="fas fa-times"></i></button>
273 |             </div>
274 |         </div>
275 |         <div class="corpo-assistente">
276 |             <div class="mensagens" id="mensagensAssistente">
277 |                 <div class="mensagem mensagem-assistente">
278 |                     <div class="conteudo-mensagem">
279 |                         Olá! Sou GuardianPro, o assistente virtual do Hospital Sabará. Como posso ajudar você hoje?
280 |                     </div>
281 |                     <div class="timestamp">Agora</div>
282 |                 </div>
283 |             </div>
284 |             <div class="entrada-mensagem">
285 |                 <input type="text" placeholder="Digite sua pergunta..." id="mensagemUsuario">
286 |                 <button class="btn-enviar" id="enviarMensagem"><i class="fas fa-paper-plane"></i></button>
287 |             </div>
288 |         </div>
289 |     </div>
290 | 
291 |     <div class="botao-assistente" id="botaoAssistente">
292 |         <i class="fas fa-robot"></i>
293 |     </div>
294 | 
295 |     <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
296 |     <script src="script-gerenciamento.js"></script>
297 | </body>
298 | </html>


--------------------------------------------------------------------------------
/index.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="pt-br">
  3 | <head>
  4 |     <meta charset="UTF-8">
  5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  6 |     <title>Hospital Sabará - Telemedicina com IA</title>
  7 |     <link rel="icon" href="logo-sabara - Copia.png" type="image/png">
  8 |     <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
  9 |     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
 10 |     <link rel="stylesheet" href="styles-index.css">
 11 | </head>
 12 | <body>
 13 |     <header class="cabecalho">
 14 |         <nav class="navbar navbar-expand-lg navbar-light fixed-top">
 15 |             <div class="container">
 16 |                 <a class="navbar-brand" href="index.html">
 17 |                     <img src="./logo-sabara.png" alt="Logo Hospital Sabará" class="logo-hospital">
 18 |                 </a>
 19 |                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacao" aria-controls="menuNavegacao" aria-expanded="false" aria-label="Toggle navigation">
 20 |                     <span class="navbar-toggler-icon"></span>
 21 |                 </button>
 22 |                 
 23 |                 <div class="collapse navbar-collapse" id="menuNavegacao">
 24 |                     <ul class="navbar-nav ms-auto">
 25 |                         <li class="nav-item">
 26 |                             <a class="nav-link active" href="index.html">Início</a>
 27 |                         </li>
 28 |                         <li class="nav-item">
 29 |                             <a class="nav-link" href="biblioteca-laudos.html">Biblioteca de Laudos</a>
 30 |                         </li>
 31 |                         <li class="nav-item">
 32 |                             <a class="nav-link" href="gerenciamento-documentos.html">Documentos</a>
 33 |                         </li>
 34 |                         <li class="nav-item">
 35 |                             <a class="nav-link" href="telemedicina.html">Telemedicina</a>
 36 |                         </li>
 37 |                         <li class="nav-item botao-login">
 38 |                             <a class="btn btn-primary" href="login.html">Login</a>
 39 |                         </li>
 40 |                     </ul>
 41 |                 </div>
 42 |             </div>
 43 |         </nav>
 44 |     </header>
 45 | 
 46 |     <section class="banner-principal">
 47 |         <div class="container">
 48 |             <div class="row align-items-center">
 49 |                 <div class="col-lg-6 info-banner">
 50 |                     <h1>Telemedicina Avançada com Inteligência Artificial</h1>
 51 |                     <p>O Hospital Sabará revoluciona o atendimento médico à distância com tecnologia de ponta e IA para diagnósticos mais precisos e atendimento personalizado.</p>
 52 |                     <div class="botoes-banner">
 53 |                         <a href="telemedicina.html" class="btn btn-primary btn-lg">Agendar Consulta</a>
 54 |                         <a href="#como-funciona" class="btn btn-outline-secondary btn-lg">Saiba Mais</a>
 55 |                     </div>
 56 |                 </div>
 57 |                 <div class="col-lg-6 imagem-banner">
 58 |                     <img src="./Ilustration3.png" alt="Telemedicina com IA" class="img-fluid rounded-lg">
 59 |                 </div>
 60 |             </div>
 61 |         </div>
 62 |     </section>
 63 | 
 64 |     <section id="como-funciona" class="como-funciona">
 65 |         <div class="container">
 66 |             <h2 class="titulo-secao text-center">Como Funciona a Telemedicina com IA</h2>
 67 |             
 68 |             <div class="row etapas">
 69 |                 <div class="col-md-4">
 70 |                     <div class="card etapa">
 71 |                         <div class="card-body">
 72 |                             <div class="icone-etapa">
 73 |                                 <i class="fas fa-calendar-check"></i>
 74 |                             </div>
 75 |                             <h3>Agendamento</h3>
 76 |                             <p>Marque sua consulta online escolhendo a especialidade e o médico disponível.</p>
 77 |                         </div>
 78 |                     </div>
 79 |                 </div>
 80 |                 
 81 |                 <div class="col-md-4">
 82 |                     <div class="card etapa">
 83 |                         <div class="card-body">
 84 |                             <div class="icone-etapa">
 85 |                                 <i class="fas fa-video"></i>
 86 |                             </div>
 87 |                             <h3>Consulta Virtual</h3>
 88 |                             <p>Realize sua consulta por videochamada com suporte inteligente da nossa IA.</p>
 89 |                         </div>
 90 |                     </div>
 91 |                 </div>
 92 |                 
 93 |                 <div class="col-md-4">
 94 |                     <div class="card etapa">
 95 |                         <div class="card-body">
 96 |                             <div class="icone-etapa">
 97 |                                 <i class="fas fa-file-medical"></i>
 98 |                             </div>
 99 |                             <h3>Documentação</h3>
100 |                             <p>Receba laudos, receitas e orientações digitais gerados com auxílio da IA.</p>
101 |                         </div>
102 |                     </div>
103 |                 </div>
104 |             </div>
105 |         </div>
106 |     </section>
107 | 
108 |     <section class="vantagens-ia">
109 |         <div class="container">
110 |             <div class="row align-items-center">
111 |                 <div class="col-lg-6">
112 |                     <img src="./Hospital 1.jpg" alt="Vantagens da IA na medicina" class="img-fluid">
113 |                 </div>
114 |                 <div class="col-lg-6">
115 |                     <h2>Vantagens da IA na Telemedicina</h2>
116 |                     <ul class="lista-vantagens">
117 |                         <li>
118 |                             <i class="fas fa-check-circle"></i>
119 |                             <div>
120 |                                 <h4>Diagnósticos Mais Precisos</h4>
121 |                                 <p>Nossa IA analisa uma vasta base de dados médicos para auxiliar os especialistas.</p>
122 |                             </div>
123 |                         </li>
124 |                         <li>
125 |                             <i class="fas fa-check-circle"></i>
126 |                             <div>
127 |                                 <h4>Documentação Automatizada</h4>
128 |                                 <p>Geração inteligente de relatórios e documentos médicos com alta precisão.</p>
129 |                             </div>
130 |                         </li>
131 |                         <li>
132 |                             <i class="fas fa-check-circle"></i>
133 |                             <div>
134 |                                 <h4>Monitoramento Contínuo</h4>
135 |                                 <p>Acompanhamento inteligente de parâmetros de saúde e evolução do tratamento.</p>
136 |                             </div>
137 |                         </li>
138 |                     </ul>
139 |                 </div>
140 |             </div>
141 |         </div>
142 |     </section>
143 | 
144 |     <section class="especialidades">
145 |         <div class="container">
146 |             <h2 class="titulo-secao text-center">Especialidades Disponíveis</h2>
147 |             
148 |             <div class="row">
149 |                 <div class="col-md-3 col-sm-6">
150 |                     <div class="card especialidade">
151 |                         <img src="./Pediatria.jpg" class="card-img-top" alt="Pediatria">
152 |                         <div class="card-body">
153 |                             <h3>Pediatria</h3>
154 |                             <p>Atendimento especializado para crianças com diagnóstico auxiliado por IA.</p>
155 |                         </div>
156 |                     </div>
157 |                 </div>
158 |                 
159 |                 <div class="col-md-3 col-sm-6">
160 |                     <div class="card especialidade">
161 |                         <img src="./cardiologia.jpg" class="card-img-top" alt="Cardiologia">
162 |                         <div class="card-body">
163 |                             <h3>Cardiologia</h3>
164 |                             <p>Análise avançada de exames cardíacos com tecnologia de ponta.</p>
165 |                         </div>
166 |                     </div>
167 |                 </div>
168 |                 
169 |                 <div class="col-md-3 col-sm-6">
170 |                     <div class="card especialidade">
171 |                         <img src="./Dermatologia.jpg" class="card-img-top" alt="Dermatologia">
172 |                         <div class="card-body">
173 |                             <h3>Dermatologia</h3>
174 |                             <p>Diagnóstico visual auxiliado por reconhecimento de imagem por IA.</p>
175 |                         </div>
176 |                     </div>
177 |                 </div>
178 |                 
179 |                 <div class="col-md-3 col-sm-6">
180 |                     <div class="card especialidade">
181 |                         <img src="./Psicologia.jpg" class="card-img-top" alt="Psicologia">
182 |                         <div class="card-body">
183 |                             <h3>Psicologia</h3>
184 |                             <p>Suporte psicológico com monitoramento inteligente de padrões emocionais.</p>
185 |                         </div>
186 |                     </div>
187 |                 </div>
188 |             </div>
189 |         </div>
190 |     </section>
191 | 
192 |     <section class="preview-videochamada">
193 |         <div class="container">
194 |             <h2 class="titulo-secao text-center">Experimente Nossa Plataforma de Telemedicina</h2>
195 |             
196 |             <div class="demo-telemedicina">
197 |                 <div class="row align-items-center">
198 |                     <div class="col-lg-6">
199 |                         <div class="video-container">
200 |                             <div class="tela-video">
201 |                                 <div class="video-principal">
202 |                                     <img src="./Doctor3.jpg" alt="Médico" class="img-fluid">
203 |                                     <div class="nome-usuario">Dr. Paulo Mendes</div>
204 |                                 </div>
205 |                                 <div class="video-paciente">
206 |                                     <img src="./boy2.jpg" alt="Paciente" class="img-fluid">
207 |                                     <div class="nome-usuario">Você</div>
208 |                                 </div>
209 |                                 <div class="controles-video">
210 |                                     <button class="btn-controle"><i class="fas fa-microphone-slash"></i></button>
211 |                                     <button class="btn-controle"><i class="fas fa-video"></i></button>
212 |                                     <button class="btn-controle btn-encerrar"><i class="fas fa-phone-slash"></i></button>
213 |                                 </div>
214 |                             </div>
215 |                         </div>
216 |                     </div>
217 |                     <div class="col-lg-6">
218 |                         <div class="recursos-telemedicina">
219 |                             <h3>Recursos Avançados</h3>
220 |                             <ul class="lista-recursos">
221 |                                 <li><i class="fas fa-robot"></i> Assistente de IA durante toda a consulta</li>
222 |                                 <li><i class="fas fa-language"></i> Transcrição em tempo real da consulta</li>
223 |                                 <li><i class="fas fa-file-alt"></i> Geração automática de documentos médicos</li>
224 |                                 <li><i class="fas fa-share-alt"></i> Compartilhamento seguro de exames e imagens</li>
225 |                                 <li><i class="fas fa-lock"></i> Padrão de segurança hospitalar para seus dados</li>
226 |                             </ul>
227 |                             <a href="telemedicina.html" class="btn btn-primary">Experimentar Agora</a>
228 |                         </div>
229 |                     </div>
230 |                 </div>
231 |             </div>
232 |         </div>
233 |     </section>
234 | 
235 |     <footer class="rodape">
236 |         <div class="container">
237 |             <div class="row">
238 |                 <div class="col-md-4">
239 |                     <img src="./logo-sabara.png" alt="Logo Hospital Sabará" class="logo-rodape">
240 |                     <p class="sobre-rodape">O Hospital Sabará é referência em inovação tecnológica aplicada à saúde, integrando IA e telemedicina para um atendimento humanizado e eficiente.</p>
241 |                 </div>
242 |                 <div class="col-md-4">
243 |                     <h4>Links Rápidos</h4>
244 |                     <ul class="links-rodape">
245 |                         <li><a href="index.html">Início</a></li>
246 |                         <li><a href="login.html">Área do Paciente</a></li>
247 |                         <li><a href="login.html">Área do Médico</a></li>
248 |                         <li><a href="biblioteca-laudos.html">Laudos e Documentos</a></li>
249 |                         <li><a href="telemedicina.html">Agendar Consulta</a></li>
250 |                     </ul>
251 |                 </div>
252 |                 <div class="col-md-4">
253 |                     <h4>Contato</h4>
254 |                     <ul class="contato-rodape">
255 |                         <li><i class="fas fa-map-marker-alt"></i> Av. Angélica, 1987 - São Paulo, SP</li>
256 |                         <li><i class="fas fa-phone"></i> (11) 3155-2800 | (11) 3235-2800</li>
257 |                         <li><i class="fas fa-envelope"></i> CEP 01228-200</li>
258 |                     </ul>
259 |                     <div class="redes-sociais">
260 |                         <a href="https://www.facebook.com/HospitalSabara" class="rede-social"><i class="fab fa-facebook-f"></i></a>
261 |                         <a href="https://www.instagram.com/hospitalsabara/" class="rede-social"><i class="fab fa-instagram"></i></a>
262 |                         <a href="https://www.linkedin.com/company/hospital-infantil-sabara/" class="rede-social"><i class="fab fa-linkedin-in"></i></a>
263 |                         <a href="https://www.youtube.com/saudedainfancia" class="rede-social"><i class="fab fa-youtube"></i></a>
264 |                     </div>
265 |                 </div>
266 |             </div>
267 |             <div class="direitos">
268 |                 <p>© 2025 Hospital Sabará. Todos os direitos reservados.</p>
269 |             </div>
270 |         </div>
271 |     </footer>
272 | 
273 |     <div class="assistente-ia" id="assistenteIA">
274 |         <div class="cabecalho-assistente">
275 |             <div class="info-assistente">
276 |                 <div class="avatar-assistente">
277 |                     <i class="fas fa-robot"></i>
278 |                 </div>
279 |                 <div class="nome-assistente">GuardianPro - Assistente Virtual</div>
280 |             </div>
281 |             <div class="acoes-assistente">
282 |                 <button class="btn-minimizar" id="minimizarAssistente"><i class="fas fa-minus"></i></button>
283 |                 <button class="btn-fechar" id="fecharAssistente"><i class="fas fa-times"></i></button>
284 |             </div>
285 |         </div>
286 |         <div class="corpo-assistente">
287 |             <div class="mensagens" id="mensagensAssistente">
288 |                 <div class="mensagem mensagem-assistente">
289 |                     <div class="conteudo-mensagem">
290 |                         Olá! Sou GuardianPro, o assistente virtual do Hospital Sabará. Como posso ajudar você hoje?
291 |                     </div>
292 |                     <div class="timestamp">Agora</div>
293 |                 </div>
294 |             </div>
295 |             <div class="entrada-mensagem">
296 |                 <input type="text" placeholder="Digite sua pergunta..." id="mensagemUsuario">
297 |                 <button class="btn-enviar" id="enviarMensagem"><i class="fas fa-paper-plane"></i></button>
298 |             </div>
299 |         </div>
300 |     </div>
301 | 
302 |     <div class="botao-assistente" id="botaoAssistente">
303 |         <i class="fas fa-robot"></i>
304 |     </div>
305 | 
306 |     <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
307 |     <script src="script-index.js"></script>
308 | </body>
309 | </html>
310 | 
311 | 
312 | 
313 | 


--------------------------------------------------------------------------------
/login.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="pt-br">
  3 | <head>
  4 |     <meta charset="UTF-8">
  5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  6 |     <title>Login - Hospital Sabará</title>
  7 |     <link rel="icon" href="logo-sabara - Copia.png" type="image/png">
  8 |     <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
  9 |     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
 10 |     <link rel="stylesheet" href="styles-login.css">
 11 | </head>
 12 | <body>
 13 |     <header class="cabecalho">
 14 |         <nav class="navbar navbar-expand-lg navbar-light fixed-top">
 15 |             <div class="container">
 16 |                 <a class="navbar-brand" href="index.html">
 17 |                     <img src="./logo-sabara.png" alt="Logo Hospital Sabará" class="logo-hospital">
 18 |                 </a>
 19 |                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacao" aria-controls="menuNavegacao" aria-expanded="false" aria-label="Toggle navigation">
 20 |                     <span class="navbar-toggler-icon"></span>
 21 |                 </button>
 22 |                 
 23 |                 <div class="collapse navbar-collapse" id="menuNavegacao">
 24 |                     <ul class="navbar-nav ms-auto">
 25 |                         <li class="nav-item">
 26 |                             <a class="nav-link active" href="index.html">Início</a>
 27 |                         </li>
 28 |                         <li class="nav-item">
 29 |                             <a class="nav-link" href="biblioteca-laudos.html">Biblioteca de Laudos</a>
 30 |                         </li>
 31 |                         <li class="nav-item">
 32 |                             <a class="nav-link" href="gerenciamento-documentos.html">Documentos</a>
 33 |                         </li>
 34 |                         <li class="nav-item">
 35 |                             <a class="nav-link" href="telemedicina.html">Telemedicina</a>
 36 |                         </li>
 37 |                         <li class="nav-item botao-login">
 38 |                             <a class="btn btn-primary" href="login.html">Login</a>
 39 |                         </li>
 40 |                     </ul>
 41 |                 </div>
 42 |             </div>
 43 |         </nav>
 44 |     </header>
 45 | 
 46 |     <script>
 47 |         let lastScrollTop = 0;
 48 |         const navbar = document.querySelector('.navbar');
 49 |       
 50 |         window.addEventListener('scroll', function () {
 51 |           let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 52 |       
 53 |           if (scrollTop > lastScrollTop) {
 54 |             navbar.style.top = "-80px"; 
 55 |           } else {
 56 |             navbar.style.top = "0";
 57 |           }
 58 |       
 59 |           lastScrollTop = scrollTop;
 60 |         });
 61 |       </script>      
 62 | 
 63 |     <section class="secao-login">
 64 |         <div class="container">
 65 |             <div class="row justify-content-center">
 66 |                 <div class="col-lg-12 text-center">
 67 |                     <h1 class="titulo-login">Acesso ao Sistema</h1>
 68 |                     <p class="subtitulo-login">Faça login para acessar sua conta no Hospital Sabará</p>
 69 |                 </div>
 70 |             </div>
 71 |             
 72 |             <div class="row justify-content-center mt-4">
 73 |                 <div class="col-lg-8">
 74 |                     <div class="abas-login">
 75 |                         <ul class="nav nav-tabs nav-fill" id="tipoLogin" role="tablist">
 76 |                             <li class="nav-item" role="presentation">
 77 |                                 <button class="nav-link active" id="paciente-tab" data-bs-toggle="tab" data-bs-target="#paciente" type="button" role="tab" aria-controls="paciente" aria-selected="true">
 78 |                                     <i class="fas fa-user-injured me-2"></i>Sou Paciente
 79 |                                 </button>
 80 |                             </li>
 81 |                             <li class="nav-item" role="presentation">
 82 |                                 <button class="nav-link" id="medico-tab" data-bs-toggle="tab" data-bs-target="#medico" type="button" role="tab" aria-controls="medico" aria-selected="false">
 83 |                                     <i class="fas fa-user-md me-2"></i>Sou Médico
 84 |                                 </button>
 85 |                             </li>
 86 |                         </ul>
 87 |                         
 88 |                         <div class="tab-content" id="loginTabContent">
 89 |                             <div class="tab-pane fade show active" id="paciente" role="tabpanel" aria-labelledby="paciente-tab">
 90 |                                 <div class="card card-login">
 91 |                                     <div class="card-body">
 92 |                                         <form id="formLoginPaciente">
 93 |                                             <div class="mb-4">
 94 |                                                 <label for="cpfPaciente" class="form-label">CPF</label>
 95 |                                                 <div class="input-group">
 96 |                                                     <span class="input-group-text"><i class="fas fa-id-card"></i></span>
 97 |                                                     <input type="text" class="form-control" id="cpfPaciente" placeholder="000.000.000-00" required>
 98 |                                                 </div>
 99 |                                             </div>
100 |                                             
101 |                                             <div class="mb-4">
102 |                                                 <label for="senhaPaciente" class="form-label">Senha</label>
103 |                                                 <div class="input-group">
104 |                                                     <span class="input-group-text"><i class="fas fa-lock"></i></span>
105 |                                                     <input type="password" class="form-control" id="senhaPaciente" placeholder="Digite sua senha" required>
106 |                                                     <button class="btn btn-outline-secondary toggleSenha" type="button">
107 |                                                         <i class="fas fa-eye"></i>
108 |                                                     </button>
109 |                                                 </div>
110 |                                             </div>
111 |                                             
112 |                                             <div class="form-check mb-4">
113 |                                                 <input class="form-check-input" type="checkbox" id="lembrarPaciente">
114 |                                                 <label class="form-check-label" for="lembrarPaciente">
115 |                                                     Lembrar meus dados
116 |                                                 </label>
117 |                                             </div>
118 |                                             
119 |                                             <div class="d-grid">
120 |                                                 <button type="submit" class="btn btn-primary btn-lg">Entrar</button>
121 |                                             </div>
122 |                                             
123 |                                             <div class="text-center mt-4">
124 |                                                 <a href="#" class="link-secondary">Esqueci minha senha</a>
125 |                                                 <p class="mt-3 mb-0">Ainda não tem cadastro? <a href="#" class="fw-bold">Cadastre-se</a></p>
126 |                                             </div>
127 |                                         </form>
128 |                                     </div>
129 |                                 </div>
130 |                             </div>
131 |                             
132 |                             <div class="tab-pane fade" id="medico" role="tabpanel" aria-labelledby="medico-tab">
133 |                                 <div class="card card-login">
134 |                                     <div class="card-body">
135 |                                         <form id="formLoginMedico">
136 |                                             <div class="mb-4">
137 |                                                 <label for="crmMedico" class="form-label">CRM</label>
138 |                                                 <div class="input-group">
139 |                                                     <span class="input-group-text"><i class="fas fa-id-badge"></i></span>
140 |                                                     <input type="text" class="form-control" id="crmMedico" placeholder="CRM/UF" required>
141 |                                                 </div>
142 |                                             </div>
143 |                                             
144 |                                             <div class="mb-4">
145 |                                                 <label for="senhaMedico" class="form-label">Senha</label>
146 |                                                 <div class="input-group">
147 |                                                     <span class="input-group-text"><i class="fas fa-lock"></i></span>
148 |                                                     <input type="password" class="form-control" id="senhaMedico" placeholder="Digite sua senha" required>
149 |                                                     <button class="btn btn-outline-secondary toggleSenha" type="button">
150 |                                                         <i class="fas fa-eye"></i>
151 |                                                     </button>
152 |                                                 </div>
153 |                                             </div>
154 |                                             
155 |                                             <div class="form-check mb-4">
156 |                                                 <input class="form-check-input" type="checkbox" id="lembrarMedico">
157 |                                                 <label class="form-check-label" for="lembrarMedico">
158 |                                                     Lembrar meus dados
159 |                                                 </label>
160 |                                             </div>
161 |                                             
162 |                                             <div class="d-grid">
163 |                                                 <button type="submit" class="btn btn-primary btn-lg">Entrar</button>
164 |                                             </div>
165 |                                             
166 |                                             <div class="text-center mt-4">
167 |                                                 <a href="#" class="link-secondary">Esqueci minha senha</a>
168 |                                                 <p class="mt-3 mb-0">É a primeira vez? <a href="#" class="fw-bold">Solicite acesso</a></p>
169 |                                             </div>
170 |                                         </form>
171 |                                     </div>
172 |                                 </div>
173 |                             </div>
174 |                         </div>
175 |                     </div>
176 |                 </div>
177 |             </div>
178 |         </div>
179 |     </section>
180 | 
181 |     <footer class="rodape">
182 |         <div class="container">
183 |             <div class="row">
184 |                 <div class="col-md-4">
185 |                     <img src="./logo-sabara.png" alt="Logo Hospital Sabará" class="logo-rodape">
186 |                     <p class="sobre-rodape">O Hospital Sabará é referência em inovação tecnológica aplicada à saúde, integrando IA e telemedicina para um atendimento humanizado e eficiente.</p>
187 |                 </div>
188 |                 <div class="col-md-4">
189 |                     <h4>Links Rápidos</h4>
190 |                     <ul class="links-rodape">
191 |                         <li><a href="index.html">Início</a></li>
192 |                         <li><a href="login.html">Área do Paciente</a></li>
193 |                         <li><a href="login.html">Área do Médico</a></li>
194 |                         <li><a href="biblioteca-laudos.html">Laudos e Documentos</a></li>
195 |                         <li><a href="telemedicina.html">Agendar Consulta</a></li>
196 |                     </ul>
197 |                 </div>
198 |                 <div class="col-md-4">
199 |                     <h4>Contato</h4>
200 |                     <ul class="contato-rodape">
201 |                         <li><i class="fas fa-map-marker-alt"></i>  Av. Angélica, 1987 - São Paulo, SP</li>
202 |                         <li><i class="fas fa-phone"></i> (11) 3155-2800 | (11) 3235-2800</li>
203 |                         <li><i class="fas fa-envelope"></i> CEP 01228-200</li>
204 |                     </ul>
205 |                     <div class="redes-sociais">
206 |                         <a href="https://www.facebook.com/HospitalSabara" class="rede-social"><i class="fab fa-facebook-f"></i></a>
207 |                         <a href="https://www.instagram.com/hospitalsabara/" class="rede-social"><i class="fab fa-instagram"></i></a>
208 |                         <a href="https://www.linkedin.com/company/hospital-infantil-sabara/" class="rede-social"><i class="fab fa-linkedin-in"></i></a>
209 |                         <a href="https://www.youtube.com/saudedainfancia" class="rede-social"><i class="fab fa-youtube"></i></a>
210 |                     </div>
211 |                 </div>
212 |             </div>
213 |             <div class="direitos">
214 |                 <p>© 2025 Hospital Sabará. Todos os direitos reservados.</p>
215 |             </div>
216 |         </div>
217 |     </footer>
218 | 
219 |     <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
220 |     <script src="script-login.js"></script>
221 | </body>
222 | </html>


--------------------------------------------------------------------------------
/logo-sabara - Copia.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/LuisCrivellaro/Sprint3-Front/cd13c8f507e385e1e4c30afa5efb82676f694230/logo-sabara - Copia.png


--------------------------------------------------------------------------------
/logo-sabara.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/LuisCrivellaro/Sprint3-Front/cd13c8f507e385e1e4c30afa5efb82676f694230/logo-sabara.png


--------------------------------------------------------------------------------
/script-bibliotecaa.js:
--------------------------------------------------------------------------------
 1 | 
 2 |     
 3 |     document.getElementById('gerarAnamnese').addEventListener('click', gerarTextoComIA);
 4 |     document.getElementById('gerarExame').addEventListener('click', gerarTextoComIA);
 5 |     document.getElementById('gerarDiagnostico').addEventListener('click', gerarTextoComIA);
 6 |     document.getElementById('gerarConduta').addEventListener('click', gerarTextoComIA);
 7 |     document.getElementById('gerarRecomendacoes').addEventListener('click', gerarTextoComIA);
 8 |     document.getElementById('gerarMotivoAtestado').addEventListener('click', gerarTextoComIA);
 9 |     document.getElementById('atualizarIA').addEventListener('click', atualizarSugestoesIA);
10 |     document.getElementById('sugerirMedicamentosIA').addEventListener('click', sugerirMedicamentos);
11 |     
12 | 
13 | 
14 | 
15 | document.addEventListener('DOMContentLoaded', function () {
16 |     const botaoAssistente = document.getElementById('botaoAssistente');
17 |     const assistenteIA = document.getElementById('assistenteIA');
18 |     const minimizarAssistente = document.getElementById('minimizarAssistente');
19 |     const fecharAssistente = document.getElementById('fecharAssistente');
20 |     const mensagemUsuario = document.getElementById('mensagemUsuario');
21 |     const enviarMensagem = document.getElementById('enviarMensagem');
22 |     const mensagensAssistente = document.getElementById('mensagensAssistente');
23 |   
24 |     assistenteIA.style.opacity = '0';
25 |     assistenteIA.style.transform = 'translateY(20px)';
26 |     assistenteIA.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
27 |   
28 |     function abrirAssistente() {
29 |       assistenteIA.style.display = 'flex';
30 |       setTimeout(() => {
31 |         assistenteIA.style.opacity = '1';
32 |         assistenteIA.style.transform = 'translateY(0)';
33 |       }, 10);
34 |     }
35 |   
36 |     function fecharAssistenteAnimado() {
37 |       assistenteIA.style.opacity = '0';
38 |       assistenteIA.style.transform = 'translateY(20px)';
39 |       setTimeout(() => {
40 |         assistenteIA.style.display = 'none';
41 |       }, 300);
42 |     }
43 |   
44 |     botaoAssistente.addEventListener('click', () => {
45 |       const isHidden = assistenteIA.style.display === 'none' || assistenteIA.style.display === '';
46 |       if (isHidden) abrirAssistente();
47 |       else fecharAssistenteAnimado();
48 |     });
49 |   
50 |     minimizarAssistente.addEventListener('click', fecharAssistenteAnimado);
51 |     fecharAssistente.addEventListener('click', fecharAssistenteAnimado);
52 |   
53 |     function enviarMensagemAssistente() {
54 |       const texto = mensagemUsuario.value.trim();
55 |       if (texto) {
56 |         adicionarMensagem(texto, 'usuario');
57 |         mensagemUsuario.value = '';
58 |   
59 |         setTimeout(() => {
60 |           const respostas = [
61 |             'Pode mandar sua pergunta, estou à disposição!',
62 |             'Você pode me perguntar sobre qualquer serviço médico.',
63 |             'No que posso te ajudar hoje?',
64 |             'Precisa de alguma orientação? É só falar!',
65 |             'Vamos começar? Me diga o que você precisa.'
66 |           ];
67 |           const resposta = respostas[Math.floor(Math.random() * respostas.length)];
68 |           adicionarMensagem(resposta, 'assistente');
69 |         }, 800);
70 |       }
71 |     }
72 |   
73 |     function adicionarMensagem(texto, tipo) {
74 |       const mensagemDiv = document.createElement('div');
75 |       mensagemDiv.className = `mensagem mensagem-${tipo}`;
76 |   
77 |       const conteudoDiv = document.createElement('div');
78 |       conteudoDiv.className = 'conteudo-mensagem';
79 |       conteudoDiv.textContent = texto;
80 |   
81 |       const timestampDiv = document.createElement('div');
82 |       timestampDiv.className = 'timestamp';
83 |       timestampDiv.textContent = 'Agora';
84 |   
85 |       mensagemDiv.appendChild(conteudoDiv);
86 |       mensagemDiv.appendChild(timestampDiv);
87 |   
88 |       mensagensAssistente.appendChild(mensagemDiv);
89 |       mensagensAssistente.scrollTop = mensagensAssistente.scrollHeight;
90 |     }
91 |   
92 |     enviarMensagem.addEventListener('click', enviarMensagemAssistente);
93 |     mensagemUsuario.addEventListener('keypress', function (e) {
94 |       if (e.key === 'Enter') enviarMensagemAssistente();
95 |     });
96 |   });
97 |   
98 | 


--------------------------------------------------------------------------------
/script-gerenciamento.js:
--------------------------------------------------------------------------------
  1 | document.addEventListener('DOMContentLoaded', function() {
  2 |     const botaoAssistente = document.getElementById('botaoAssistente');
  3 |     const assistenteIA = document.getElementById('assistenteIA');
  4 |     const minimizarAssistente = document.getElementById('minimizarAssistente');
  5 |     const fecharAssistente = document.getElementById('fecharAssistente');
  6 |     const mensagemUsuario = document.getElementById('mensagemUsuario');
  7 |     const enviarMensagem = document.getElementById('enviarMensagem');
  8 |     const mensagensAssistente = document.getElementById('mensagensAssistente');
  9 |     
 10 |     const navbarToggler = document.querySelector('.navbar-toggler');
 11 |     const navbarCollapse = document.querySelector('.navbar-collapse');
 12 |     
 13 |     let prevScrollpos = window.pageYOffset;
 14 |     
 15 |     function toggleAssistente() {
 16 |         if (assistenteIA.style.display === 'none' || assistenteIA.style.display === '') {
 17 |             assistenteIA.style.display = 'flex';
 18 |             setTimeout(() => {
 19 |                 assistenteIA.style.opacity = '1';
 20 |                 assistenteIA.style.transform = 'translateY(0)';
 21 |             }, 10);
 22 |         } else {
 23 |             assistenteIA.style.opacity = '0';
 24 |             assistenteIA.style.transform = 'translateY(20px)';
 25 |             setTimeout(() => {
 26 |                 assistenteIA.style.display = 'none';
 27 |             }, 300);
 28 |         }
 29 |     }
 30 |     
 31 |     botaoAssistente.addEventListener('click', toggleAssistente);
 32 |     
 33 |     minimizarAssistente.addEventListener('click', toggleAssistente);
 34 |     
 35 |     fecharAssistente.addEventListener('click', () => {
 36 |         assistenteIA.style.opacity = '0';
 37 |         assistenteIA.style.transform = 'translateY(20px)';
 38 |         setTimeout(() => {
 39 |             assistenteIA.style.display = 'none';
 40 |         }, 300);
 41 |     });
 42 |     
 43 |     function enviarMensagemAssistente() {
 44 |         const texto = mensagemUsuario.value.trim();
 45 |         if (texto) {
 46 |             adicionarMensagem(texto, 'usuario');
 47 |             mensagemUsuario.value = '';
 48 |             
 49 |             setTimeout(() => {
 50 |                 const respostas = [
 51 |                     'Entendi! Vou verificar isso para você.',
 52 |                     'Posso ajudar com informações sobre nossos serviços de telemedicina.',
 53 |                     'Nossos especialistas estão disponíveis para consultas online. Deseja agendar um horário?',
 54 |                     'Para marcar uma consulta, você pode acessar a seção "Agendar Consulta" em nosso site.',
 55 |                     'Temos várias especialidades médicas disponíveis. Qual você está procurando?'
 56 |                 ];
 57 |                 const resposta = respostas[Math.floor(Math.random() * respostas.length)];
 58 |                 adicionarMensagem(resposta, 'assistente');
 59 |             }, 1000);
 60 |         }
 61 |     }
 62 |     
 63 |     function adicionarMensagem(texto, tipo) {
 64 |         const mensagemDiv = document.createElement('div');
 65 |         mensagemDiv.className = `mensagem mensagem-${tipo}`;
 66 |         
 67 |         const conteudoDiv = document.createElement('div');
 68 |         conteudoDiv.className = 'conteudo-mensagem';
 69 |         conteudoDiv.textContent = texto;
 70 |         
 71 |         const timestampDiv = document.createElement('div');
 72 |         timestampDiv.className = 'timestamp';
 73 |         timestampDiv.textContent = 'Agora';
 74 |         
 75 |         mensagemDiv.appendChild(conteudoDiv);
 76 |         mensagemDiv.appendChild(timestampDiv);
 77 |         
 78 |         mensagensAssistente.appendChild(mensagemDiv);
 79 |         
 80 |         mensagensAssistente.scrollTop = mensagensAssistente.scrollHeight;
 81 |     }
 82 |     
 83 |     enviarMensagem.addEventListener('click', enviarMensagemAssistente);
 84 |     
 85 |     mensagemUsuario.addEventListener('keypress', function(e) {
 86 |         if (e.key === 'Enter') {
 87 |             enviarMensagemAssistente();
 88 |         }
 89 |     });
 90 |     
 91 |     window.onscroll = function() {
 92 |         const currentScrollPos = window.pageYOffset;
 93 |         const navbar = document.querySelector('.navbar');
 94 |         
 95 |         if (prevScrollpos > currentScrollPos) {
 96 |             navbar.style.top = '0';
 97 |         } else {
 98 |             navbar.style.top = '-80px';
 99 |         }
100 |         
101 |         if (currentScrollPos > 100) {
102 |             navbar.style.backgroundColor = '#fff';
103 |             navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
104 |             navbar.style.padding = '10px 0';
105 |         } else {
106 |             navbar.style.backgroundColor = '#fff';
107 |             navbar.style.boxShadow = 'none';
108 |             navbar.style.padding = '15px 0';
109 |         }
110 |         
111 |         prevScrollpos = currentScrollPos;
112 |     };
113 |     
114 |     function animateOnScroll() {
115 |         const elements = document.querySelectorAll('.etapa, .especialidade, .lista-vantagens li');
116 |         
117 |         elements.forEach(element => {
118 |             const position = element.getBoundingClientRect().top;
119 |             const screenHeight = window.innerHeight;
120 |             
121 |             if (position < screenHeight - 100) {
122 |                 element.classList.add('animate__animated', 'animate__fadeInUp');
123 |                 element.style.opacity = '1';
124 |             }
125 |         });
126 |     }
127 |     
128 |     document.querySelectorAll('.etapa, .especialidade, .lista-vantagens li').forEach(element => {
129 |         element.style.opacity = '0';
130 |     });
131 |     
132 |     window.addEventListener('load', animateOnScroll);
133 |     window.addEventListener('scroll', animateOnScroll);
134 |     
135 |     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
136 |         anchor.addEventListener('click', function(e) {
137 |             e.preventDefault();
138 |             
139 |             const targetId = this.getAttribute('href');
140 |             const targetElement = document.querySelector(targetId);
141 |             
142 |             if (targetElement) {
143 |                 const headerOffset = 80;
144 |                 const elementPosition = targetElement.getBoundingClientRect().top;
145 |                 const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
146 |                 
147 |                 window.scrollTo({
148 |                     top: offsetPosition,
149 |                     behavior: 'smooth'
150 |                 });
151 |                 
152 |                 if (navbarCollapse.classList.contains('show')) {
153 |                     navbarToggler.click();
154 |                 }
155 |             }
156 |         });
157 |     });
158 |     
159 |     const controlesVideo = document.querySelectorAll('.btn-controle');
160 |     
161 |     controlesVideo.forEach(controle => {
162 |         controle.addEventListener('click', function() {
163 |             if (this.querySelector('.fa-microphone-slash')) {
164 |                 this.innerHTML = '<i class="fas fa-microphone"></i>';
165 |             } else if (this.querySelector('.fa-microphone')) {
166 |                 this.innerHTML = '<i class="fas fa-microphone-slash"></i>';
167 |             } else if (this.querySelector('.fa-video-slash')) {
168 |                 this.innerHTML = '<i class="fas fa-video"></i>';
169 |             } else if (this.querySelector('.fa-video')) {
170 |                 this.innerHTML = '<i class="fas fa-video-slash"></i>';
171 |             }
172 |         });
173 |     });
174 |     
175 |     assistenteIA.style.opacity = '0';
176 |     assistenteIA.style.transform = 'translateY(20px)';
177 |     assistenteIA.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
178 |   });


--------------------------------------------------------------------------------
/script-index.js:
--------------------------------------------------------------------------------
  1 | document.addEventListener('DOMContentLoaded', function() {
  2 |   const botaoAssistente = document.getElementById('botaoAssistente');
  3 |   const assistenteIA = document.getElementById('assistenteIA');
  4 |   const minimizarAssistente = document.getElementById('minimizarAssistente');
  5 |   const fecharAssistente = document.getElementById('fecharAssistente');
  6 |   const mensagemUsuario = document.getElementById('mensagemUsuario');
  7 |   const enviarMensagem = document.getElementById('enviarMensagem');
  8 |   const mensagensAssistente = document.getElementById('mensagensAssistente');
  9 |   
 10 |   const navbarToggler = document.querySelector('.navbar-toggler');
 11 |   const navbarCollapse = document.querySelector('.navbar-collapse');
 12 |   
 13 |   let prevScrollpos = window.pageYOffset;
 14 |   
 15 |   function toggleAssistente() {
 16 |       if (assistenteIA.style.display === 'none' || assistenteIA.style.display === '') {
 17 |           assistenteIA.style.display = 'flex';
 18 |           setTimeout(() => {
 19 |               assistenteIA.style.opacity = '1';
 20 |               assistenteIA.style.transform = 'translateY(0)';
 21 |           }, 10);
 22 |       } else {
 23 |           assistenteIA.style.opacity = '0';
 24 |           assistenteIA.style.transform = 'translateY(20px)';
 25 |           setTimeout(() => {
 26 |               assistenteIA.style.display = 'none';
 27 |           }, 300);
 28 |       }
 29 |   }
 30 |   
 31 |   botaoAssistente.addEventListener('click', toggleAssistente);
 32 |   
 33 |   minimizarAssistente.addEventListener('click', toggleAssistente);
 34 |   
 35 |   fecharAssistente.addEventListener('click', () => {
 36 |       assistenteIA.style.opacity = '0';
 37 |       assistenteIA.style.transform = 'translateY(20px)';
 38 |       setTimeout(() => {
 39 |           assistenteIA.style.display = 'none';
 40 |       }, 300);
 41 |   });
 42 |   
 43 |   function enviarMensagemAssistente() {
 44 |       const texto = mensagemUsuario.value.trim();
 45 |       if (texto) {
 46 |           adicionarMensagem(texto, 'usuario');
 47 |           mensagemUsuario.value = '';
 48 |           
 49 |           setTimeout(() => {
 50 |               const respostas = [
 51 |                   'Entendi! Vou verificar isso para você.',
 52 |                   'Posso ajudar com informações sobre nossos serviços de telemedicina.',
 53 |                   'Nossos especialistas estão disponíveis para consultas online. Deseja agendar um horário?',
 54 |                   'Para marcar uma consulta, você pode acessar a seção "Agendar Consulta" em nosso site.',
 55 |                   'Temos várias especialidades médicas disponíveis. Qual você está procurando?'
 56 |               ];
 57 |               const resposta = respostas[Math.floor(Math.random() * respostas.length)];
 58 |               adicionarMensagem(resposta, 'assistente');
 59 |           }, 1000);
 60 |       }
 61 |   }
 62 |   
 63 |   function adicionarMensagem(texto, tipo) {
 64 |       const mensagemDiv = document.createElement('div');
 65 |       mensagemDiv.className = `mensagem mensagem-${tipo}`;
 66 |       
 67 |       const conteudoDiv = document.createElement('div');
 68 |       conteudoDiv.className = 'conteudo-mensagem';
 69 |       conteudoDiv.textContent = texto;
 70 |       
 71 |       const timestampDiv = document.createElement('div');
 72 |       timestampDiv.className = 'timestamp';
 73 |       timestampDiv.textContent = 'Agora';
 74 |       
 75 |       mensagemDiv.appendChild(conteudoDiv);
 76 |       mensagemDiv.appendChild(timestampDiv);
 77 |       
 78 |       mensagensAssistente.appendChild(mensagemDiv);
 79 |       
 80 |       mensagensAssistente.scrollTop = mensagensAssistente.scrollHeight;
 81 |   }
 82 |   
 83 |   enviarMensagem.addEventListener('click', enviarMensagemAssistente);
 84 |   
 85 |   mensagemUsuario.addEventListener('keypress', function(e) {
 86 |       if (e.key === 'Enter') {
 87 |           enviarMensagemAssistente();
 88 |       }
 89 |   });
 90 |   
 91 |   window.onscroll = function() {
 92 |       const currentScrollPos = window.pageYOffset;
 93 |       const navbar = document.querySelector('.navbar');
 94 |       
 95 |       if (prevScrollpos > currentScrollPos) {
 96 |           navbar.style.top = '0';
 97 |       } else {
 98 |           navbar.style.top = '-80px';
 99 |       }
100 |       
101 |       if (currentScrollPos > 100) {
102 |           navbar.style.backgroundColor = '#fff';
103 |           navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
104 |           navbar.style.padding = '10px 0';
105 |       } else {
106 |           navbar.style.backgroundColor = '#fff';
107 |           navbar.style.boxShadow = 'none';
108 |           navbar.style.padding = '15px 0';
109 |       }
110 |       
111 |       prevScrollpos = currentScrollPos;
112 |   };
113 |   
114 |   function animateOnScroll() {
115 |       const elements = document.querySelectorAll('.etapa, .especialidade, .lista-vantagens li');
116 |       
117 |       elements.forEach(element => {
118 |           const position = element.getBoundingClientRect().top;
119 |           const screenHeight = window.innerHeight;
120 |           
121 |           if (position < screenHeight - 100) {
122 |               element.classList.add('animate__animated', 'animate__fadeInUp');
123 |               element.style.opacity = '1';
124 |           }
125 |       });
126 |   }
127 |   
128 |   document.querySelectorAll('.etapa, .especialidade, .lista-vantagens li').forEach(element => {
129 |       element.style.opacity = '0';
130 |   });
131 |   
132 |   window.addEventListener('load', animateOnScroll);
133 |   window.addEventListener('scroll', animateOnScroll);
134 |   
135 |   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
136 |       anchor.addEventListener('click', function(e) {
137 |           e.preventDefault();
138 |           
139 |           const targetId = this.getAttribute('href');
140 |           const targetElement = document.querySelector(targetId);
141 |           
142 |           if (targetElement) {
143 |               const headerOffset = 80;
144 |               const elementPosition = targetElement.getBoundingClientRect().top;
145 |               const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
146 |               
147 |               window.scrollTo({
148 |                   top: offsetPosition,
149 |                   behavior: 'smooth'
150 |               });
151 |               
152 |               if (navbarCollapse.classList.contains('show')) {
153 |                   navbarToggler.click();
154 |               }
155 |           }
156 |       });
157 |   });
158 |   
159 |   const controlesVideo = document.querySelectorAll('.btn-controle');
160 |   
161 |   controlesVideo.forEach(controle => {
162 |       controle.addEventListener('click', function() {
163 |           if (this.querySelector('.fa-microphone-slash')) {
164 |               this.innerHTML = '<i class="fas fa-microphone"></i>';
165 |           } else if (this.querySelector('.fa-microphone')) {
166 |               this.innerHTML = '<i class="fas fa-microphone-slash"></i>';
167 |           } else if (this.querySelector('.fa-video-slash')) {
168 |               this.innerHTML = '<i class="fas fa-video"></i>';
169 |           } else if (this.querySelector('.fa-video')) {
170 |               this.innerHTML = '<i class="fas fa-video-slash"></i>';
171 |           }
172 |       });
173 |   });
174 |   
175 |   assistenteIA.style.opacity = '0';
176 |   assistenteIA.style.transform = 'translateY(20px)';
177 |   assistenteIA.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
178 | });


--------------------------------------------------------------------------------
/script-login.js:
--------------------------------------------------------------------------------
  1 | document.addEventListener('DOMContentLoaded', function() {
  2 |     const formPaciente = document.getElementById('formLoginPaciente');
  3 |     const cpfPaciente = document.getElementById('cpfPaciente');
  4 |     const senhaPaciente = document.getElementById('senhaPaciente');
  5 |     
  6 |     const formMedico = document.getElementById('formLoginMedico');
  7 |     const crmMedico = document.getElementById('crmMedico');
  8 |     const senhaMedico = document.getElementById('senhaMedico');
  9 |     
 10 |     const toggleButtons = document.querySelectorAll('.toggleSenha');
 11 |     
 12 |     cpfPaciente.addEventListener('input', function(e) {
 13 |         let valor = e.target.value;
 14 |         
 15 |         valor = valor.replace(/\D/g, '');
 16 |         
 17 |         if (valor.length > 0) {
 18 |             valor = valor.replace(/^(\d{3})(\d)/, '$1.$2');
 19 |             valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
 20 |             valor = valor.replace(/\.(\d{3})(\d)/, '.$1-$2');
 21 |         }
 22 |         
 23 |         if (valor.length > 14) {
 24 |             valor = valor.substring(0, 14);
 25 |         }
 26 |         
 27 |         e.target.value = valor;
 28 |     });
 29 |     
 30 |     crmMedico.addEventListener('input', function(e) {
 31 |         let valor = e.target.value.toUpperCase();
 32 |         e.target.value = valor;
 33 |     });
 34 |     
 35 |     toggleButtons.forEach(button => {
 36 |         button.addEventListener('click', function() {
 37 |             const senhaInput = this.previousElementSibling;
 38 |             const icone = this.querySelector('i');
 39 |             
 40 |             if (senhaInput.type === 'password') {
 41 |                 senhaInput.type = 'text';
 42 |                 icone.className = 'fas fa-eye-slash';
 43 |             } else {
 44 |                 senhaInput.type = 'password';
 45 |                 icone.className = 'fas fa-eye';
 46 |             }
 47 |         });
 48 |     });
 49 |     
 50 |     formPaciente.addEventListener('submit', function(e) {
 51 |         e.preventDefault();
 52 |         
 53 |         const cpf = cpfPaciente.value.replace(/\D/g, '');
 54 |         if (cpf.length !== 11 || !validarCPF(cpf)) {
 55 |             exibirErro(cpfPaciente, 'CPF inválido. Por favor, verifique.');
 56 |             return;
 57 |         }
 58 |         
 59 |         if (senhaPaciente.value.length < 6) {
 60 |             exibirErro(senhaPaciente, 'A senha deve ter pelo menos 6 caracteres.');
 61 |             return;
 62 |         }
 63 |         
 64 |         const lembrar = document.getElementById('lembrarPaciente').checked;
 65 |         if (lembrar) {
 66 |             localStorage.setItem('lembrarCPF', cpfPaciente.value);
 67 |         } else {
 68 |             localStorage.removeItem('lembrarCPF');
 69 |         }
 70 |         
 71 |         notificarSucesso('Paciente', 'Login realizado com sucesso!');
 72 |         
 73 |     });
 74 |     
 75 |     formMedico.addEventListener('submit', function(e) {
 76 |         e.preventDefault();
 77 |         
 78 |         if (crmMedico.value.trim().length < 4) {
 79 |             exibirErro(crmMedico, 'CRM inválido. Por favor, verifique.');
 80 |             return;
 81 |         }
 82 |         
 83 |         if (senhaMedico.value.length < 6) {
 84 |             exibirErro(senhaMedico, 'A senha deve ter pelo menos 6 caracteres.');
 85 |             return;
 86 |         }
 87 |         
 88 |         const lembrar = document.getElementById('lembrarMedico').checked;
 89 |         if (lembrar) {
 90 |             localStorage.setItem('lembrarCRM', crmMedico.value);
 91 |         } else {
 92 |             localStorage.removeItem('lembrarCRM');
 93 |         }
 94 |         
 95 |         notificarSucesso('Médico', 'Login realizado com sucesso!');
 96 |         
 97 |     });
 98 |     
 99 |     if (localStorage.getItem('lembrarCPF')) {
100 |         cpfPaciente.value = localStorage.getItem('lembrarCPF');
101 |         document.getElementById('lembrarPaciente').checked = true;
102 |     }
103 |     
104 |     if (localStorage.getItem('lembrarCRM')) {
105 |         crmMedico.value = localStorage.getItem('lembrarCRM');
106 |         document.getElementById('lembrarMedico').checked = true;
107 |     }
108 |     
109 |     function exibirErro(input, mensagem) {
110 |         removerErro(input);
111 |         
112 |         const erro = document.createElement('div');
113 |         erro.className = 'erro-validacao';
114 |         erro.textContent = mensagem;
115 |         erro.style.color = '#dc3545';
116 |         erro.style.fontSize = '0.85rem';
117 |         erro.style.marginTop = '-0.5rem';
118 |         erro.style.marginBottom = '1rem';
119 |         
120 |         input.classList.add('is-invalid');
121 |         input.style.borderColor = '#dc3545';
122 |         
123 |         input.closest('.input-group').after(erro);
124 |         
125 |         setTimeout(() => {
126 |             removerErro(input);
127 |         }, 5000);
128 |     }
129 |     
130 |     function removerErro(input) {
131 |         const mensagemErro = input.closest('.mb-4').querySelector('.erro-validacao');
132 |         if (mensagemErro) {
133 |             mensagemErro.remove();
134 |         }
135 |         input.classList.remove('is-invalid');
136 |         input.style.borderColor = '';
137 |     }
138 |     
139 |     function notificarSucesso(tipo, mensagem) {
140 |         const notificacao = document.createElement('div');
141 |         notificacao.className = 'notificacao-sucesso';
142 |         notificacao.innerHTML = `
143 |             <div style="background-color: #28a745; color: white; padding: 15px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); position: fixed; top: 20px; right: 20px; z-index: 1000;">
144 |                 <div style="display: flex; align-items: center;">
145 |                     <i class="fas fa-check-circle" style="margin-right: 10px; font-size: 1.2rem;"></i>
146 |                     <div>
147 |                         <strong>${tipo}</strong>
148 |                         <p style="margin: 0;">${mensagem}</p>
149 |                     </div>
150 |                 </div>
151 |             </div>
152 |         `;
153 |         
154 |         document.body.appendChild(notificacao);
155 |         
156 |         setTimeout(() => {
157 |             notificacao.remove();
158 |         }, 3000);
159 |     }
160 |     
161 |     function validarCPF(cpf) {
162 |         if (
163 |             cpf === '00000000000' || 
164 |             cpf === '11111111111' || 
165 |             cpf === '22222222222' || 
166 |             cpf === '33333333333' || 
167 |             cpf === '44444444444' || 
168 |             cpf === '55555555555' || 
169 |             cpf === '66666666666' || 
170 |             cpf === '77777777777' || 
171 |             cpf === '88888888888' || 
172 |             cpf === '99999999999'
173 |         ) {
174 |             return false;
175 |         }
176 |         
177 |         let soma = 0;
178 |         for (let i = 0; i < 9; i++) {
179 |             soma += parseInt(cpf.charAt(i)) * (10 - i);
180 |         }
181 |         let resto = 11 - (soma % 11);
182 |         let dv1 = resto > 9 ? 0 : resto;
183 |         
184 |         if (dv1 !== parseInt(cpf.charAt(9))) {
185 |             return false;
186 |         }
187 |         
188 |         soma = 0;
189 |         for (let i = 0; i < 10; i++) {
190 |             soma += parseInt(cpf.charAt(i)) * (11 - i);
191 |         }
192 |         resto = 11 - (soma % 11);
193 |         let dv2 = resto > 9 ? 0 : resto;
194 |         
195 |         if (dv2 !== parseInt(cpf.charAt(10))) {
196 |             return false;
197 |         }
198 |         
199 |         return true;
200 |     }
201 |     
202 |     cpfPaciente.addEventListener('input', function() {
203 |         removerErro(this);
204 |     });
205 |     
206 |     senhaPaciente.addEventListener('input', function() {
207 |         removerErro(this);
208 |     });
209 |     
210 |     crmMedico.addEventListener('input', function() {
211 |         removerErro(this);
212 |     });
213 |     
214 |     senhaMedico.addEventListener('input', function() {
215 |         removerErro(this);
216 |     });
217 | });


--------------------------------------------------------------------------------
/script-telemedicina.js:
--------------------------------------------------------------------------------
  1 | document.addEventListener('DOMContentLoaded', function() {
  2 |     const videoContainer = document.querySelector('.video-container');
  3 |     const videoPrincipal = document.querySelector('.video-principal');
  4 |     const botaoMicrofone = document.querySelector('.fas.fa-microphone-slash').parentElement;
  5 |     const botaoCamera = document.querySelector('.fas.fa-video').parentElement;
  6 |     const botaoEncerrar = document.querySelector('.btn-danger');
  7 |     
  8 |     adicionarElementosInterface();
  9 |     
 10 |     iniciarTimerConsulta();
 11 |     
 12 |     botaoMicrofone.addEventListener('click', toggleMicrofone);
 13 |     botaoCamera.addEventListener('click', toggleCamera);
 14 |     botaoEncerrar.addEventListener('click', encerrarConsulta);
 15 |     
 16 |     function adicionarElementosInterface() {
 17 |       const statusElement = document.createElement('div');
 18 |       statusElement.className = 'status-conexao';
 19 |       statusElement.innerHTML = '<i class="fas fa-signal"></i> Conexão estável';
 20 |       videoContainer.appendChild(statusElement);
 21 |       
 22 |       const timerElement = document.createElement('div');
 23 |       timerElement.className = 'timer-consulta';
 24 |       timerElement.id = 'timer-consulta';
 25 |       timerElement.textContent = '00:00';
 26 |       videoContainer.appendChild(timerElement);
 27 |       
 28 |       setInterval(verificarConexao, 10000);
 29 |     }
 30 |     
 31 |     function iniciarTimerConsulta() {
 32 |       let segundos = 0;
 33 |       const timerElement = document.getElementById('timer-consulta');
 34 |       
 35 |       setInterval(() => {
 36 |         segundos++;
 37 |         const minutos = Math.floor(segundos / 60);
 38 |         const segundosRestantes = segundos % 60;
 39 |         
 40 |         timerElement.textContent = `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
 41 |       }, 1000);
 42 |     }
 43 |     
 44 |     function verificarConexao() {
 45 |       const statusElement = document.querySelector('.status-conexao');
 46 |       const qualidades = [
 47 |         { texto: 'Conexão excelente', icone: 'fa-signal', cor: '#2ecc71' },
 48 |         { texto: 'Conexão boa', icone: 'fa-signal', cor: '#3498db' },
 49 |         { texto: 'Conexão instável', icone: 'fa-exclamation-triangle', cor: '#f39c12' }
 50 |       ];
 51 |       
 52 |       const randomIndex = Math.floor(Math.random() * 10) < 8 ? 0 : (Math.random() > 0.5 ? 1 : 2);
 53 |       const qualidade = qualidades[randomIndex];
 54 |       
 55 |       statusElement.innerHTML = `<i class="fas ${qualidade.icone}"></i> ${qualidade.texto}`;
 56 |       statusElement.style.color = qualidade.cor;
 57 |     }
 58 |     
 59 |     function toggleMicrofone() {
 60 |       const icone = botaoMicrofone.querySelector('i');
 61 |       
 62 |       if (icone.classList.contains('fa-microphone-slash')) {
 63 |         icone.classList.remove('fa-microphone-slash');
 64 |         icone.classList.add('fa-microphone');
 65 |         botaoMicrofone.classList.add('active');
 66 |         mostrarMensagem('Microfone ativado');
 67 |       } else {
 68 |         icone.classList.remove('fa-microphone');
 69 |         icone.classList.add('fa-microphone-slash');
 70 |         botaoMicrofone.classList.remove('active');
 71 |         mostrarMensagem('Microfone desativado');
 72 |       }
 73 |     }
 74 |     
 75 |     function toggleCamera() {
 76 |       const icone = botaoCamera.querySelector('i');
 77 |       
 78 |       if (icone.classList.contains('fa-video')) {
 79 |         icone.classList.remove('fa-video');
 80 |         icone.classList.add('fa-video-slash');
 81 |         botaoCamera.classList.remove('active');
 82 |         document.querySelector('.video-paciente').style.opacity = '0.5';
 83 |         mostrarMensagem('Câmera desativada');
 84 |       } else {
 85 |         icone.classList.remove('fa-video-slash');
 86 |         icone.classList.add('fa-video');
 87 |         botaoCamera.classList.add('active');
 88 |         document.querySelector('.video-paciente').style.opacity = '1';
 89 |         mostrarMensagem('Câmera ativada');
 90 |       }
 91 |     }
 92 |     
 93 |     function encerrarConsulta() {
 94 |       if (confirm('Deseja realmente encerrar a consulta?')) {
 95 |         document.querySelector('.video-container').innerHTML = `
 96 |           <div class="p-5 text-center">
 97 |             <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
 98 |             <h2 class="mt-4">Consulta Finalizada</h2>
 99 |             <p>Obrigado por utilizar nosso serviço de telemedicina.</p>
100 |             <p>Você receberá um resumo da consulta por e-mail em breve.</p>
101 |             <div class="mt-4">
102 |               <button class="btn btn-primary" onclick="window.location.href='index.html'">Voltar para Home</button>
103 |               <button class="btn btn-outline-primary ms-2" onclick="window.location.href='index.html'">Agendar Nova Consulta</button>
104 |             </div>
105 |           </div>
106 |         `;
107 |       }
108 |     }
109 |     
110 |     function mostrarMensagem(texto) {
111 |       const mensagem = document.createElement('div');
112 |       mensagem.className = 'alert alert-info alert-dismissible fade show position-fixed';
113 |       mensagem.style.bottom = '20px';
114 |       mensagem.style.right = '20px';
115 |       mensagem.style.maxWidth = '300px';
116 |       mensagem.style.zIndex = '9999';
117 |       
118 |       mensagem.innerHTML = `
119 |         ${texto}
120 |         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
121 |       `;
122 |       
123 |       document.body.appendChild(mensagem);
124 |       
125 |       setTimeout(() => {
126 |         mensagem.classList.remove('show');
127 |         setTimeout(() => mensagem.remove(), 150);
128 |       }, 3000);
129 |     }
130 |   });
131 |   document.addEventListener('DOMContentLoaded', function () {
132 |     const botaoAssistente = document.getElementById('botaoAssistente');
133 |     const assistenteIA = document.getElementById('assistenteIA');
134 |     const minimizarAssistente = document.getElementById('minimizarAssistente');
135 |     const fecharAssistente = document.getElementById('fecharAssistente');
136 |     const mensagemUsuario = document.getElementById('mensagemUsuario');
137 |     const enviarMensagem = document.getElementById('enviarMensagem');
138 |     const mensagensAssistente = document.getElementById('mensagensAssistente');
139 |   
140 |     assistenteIA.style.opacity = '0';
141 |     assistenteIA.style.transform = 'translateY(20px)';
142 |     assistenteIA.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
143 |   
144 |     function abrirAssistente() {
145 |       assistenteIA.style.display = 'flex';
146 |       setTimeout(() => {
147 |         assistenteIA.style.opacity = '1';
148 |         assistenteIA.style.transform = 'translateY(0)';
149 |       }, 10);
150 |     }
151 |   
152 |     function fecharAssistenteAnimado() {
153 |       assistenteIA.style.opacity = '0';
154 |       assistenteIA.style.transform = 'translateY(20px)';
155 |       setTimeout(() => {
156 |         assistenteIA.style.display = 'none';
157 |       }, 300);
158 |     }
159 |   
160 |     botaoAssistente.addEventListener('click', () => {
161 |       const isHidden = assistenteIA.style.display === 'none' || assistenteIA.style.display === '';
162 |       if (isHidden) abrirAssistente();
163 |       else fecharAssistenteAnimado();
164 |     });
165 |   
166 |     minimizarAssistente.addEventListener('click', fecharAssistenteAnimado);
167 |     fecharAssistente.addEventListener('click', fecharAssistenteAnimado);
168 |   
169 |     function enviarMensagemAssistente() {
170 |       const texto = mensagemUsuario.value.trim();
171 |       if (texto) {
172 |         adicionarMensagem(texto, 'usuario');
173 |         mensagemUsuario.value = '';
174 |   
175 |         setTimeout(() => {
176 |           const respostas = [
177 |             'Pode mandar sua pergunta, estou à disposição!',
178 |             'Você pode me perguntar sobre qualquer serviço médico.',
179 |             'No que posso te ajudar hoje?',
180 |             'Precisa de alguma orientação? É só falar!',
181 |             'Vamos começar? Me diga o que você precisa.'
182 |           ];
183 |           const resposta = respostas[Math.floor(Math.random() * respostas.length)];
184 |           adicionarMensagem(resposta, 'assistente');
185 |         }, 800);
186 |       }
187 |     }
188 |   
189 |     function adicionarMensagem(texto, tipo) {
190 |       const mensagemDiv = document.createElement('div');
191 |       mensagemDiv.className = `mensagem mensagem-${tipo}`;
192 |   
193 |       const conteudoDiv = document.createElement('div');
194 |       conteudoDiv.className = 'conteudo-mensagem';
195 |       conteudoDiv.textContent = texto;
196 |   
197 |       const timestampDiv = document.createElement('div');
198 |       timestampDiv.className = 'timestamp';
199 |       timestampDiv.textContent = 'Agora';
200 |   
201 |       mensagemDiv.appendChild(conteudoDiv);
202 |       mensagemDiv.appendChild(timestampDiv);
203 |   
204 |       mensagensAssistente.appendChild(mensagemDiv);
205 |       mensagensAssistente.scrollTop = mensagensAssistente.scrollHeight;
206 |     }
207 |   
208 |     enviarMensagem.addEventListener('click', enviarMensagemAssistente);
209 |     mensagemUsuario.addEventListener('keypress', function (e) {
210 |       if (e.key === 'Enter') enviarMensagemAssistente();
211 |     });
212 |   });
213 |   


--------------------------------------------------------------------------------
/styles-index.css:
--------------------------------------------------------------------------------
  1 | :root {
  2 |   --cor-primaria: #3498db;
  3 |   --cor-secundaria: #2980b9;
  4 |   --cor-terciaria: #e8f4f8;
  5 |   --cor-texto: #ffffff;
  6 |   --cor-texto-claro: #f8f9fa;
  7 |   --cor-fundo: #1c1c1c;
  8 |   --cor-borda: #e1e1e1;
  9 |   --sombra-padrao: 0 4px 12px rgba(0, 0, 0, 0.1);
 10 |   --raio-borda: 8px;
 11 |   --espacamento: 100px;
 12 | }
 13 | 
 14 | body {
 15 |   font-family: 'Roboto', sans-serif;
 16 |   color: #ffffff;
 17 |   background-color:#07172d;
 18 |   line-height: 1.6;
 19 |   overflow-x: hidden;
 20 |   padding-top: 80px;
 21 | }
 22 | 
 23 | section {
 24 |   padding: 80px 0;
 25 | }
 26 | 
 27 | .titulo-secao {
 28 |   margin-bottom: 48px;
 29 |   color: #0b1f33;
 30 |   font-weight: 700;
 31 |   position: relative;
 32 | }
 33 | 
 34 | .titulo-secao::after {
 35 |   content: '';
 36 |   display: block;
 37 |   width: 60px;
 38 |   height: 3px;
 39 |   background-color: var(--cor-primaria);
 40 |   margin: 15px auto 0;
 41 | }
 42 | 
 43 | .btn-primary {
 44 |   background-color: var(--cor-primaria);
 45 |   border-color: var(--cor-primaria);
 46 |   font-weight: 600;
 47 |   padding: 10px 24px;
 48 |   border-radius: 30px;
 49 |   transition: all 0.3s ease;
 50 | }
 51 | 
 52 | .btn-primary:hover {
 53 |   background-color: var(--cor-secundaria);
 54 |   border-color: var(--cor-secundaria);
 55 |   transform: translateY(-2px);
 56 |   box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
 57 | }
 58 | 
 59 | .btn-outline-secondary {
 60 |   color: var(--cor-texto);
 61 |   border-color: var(--cor-borda);
 62 |   font-weight: 600;
 63 |   padding: 10px 24px;
 64 |   border-radius: 30px;
 65 |   transition: all 0.3s ease;
 66 | }
 67 | 
 68 | .btn-outline-secondary:hover {
 69 |   background-color: var(--cor-texto);
 70 |   color: var(--cor-texto-claro);
 71 |   transform: translateY(-2px);
 72 |   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
 73 | }
 74 | 
 75 | .cabecalho {
 76 |   background-color: #121212; 
 77 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
 78 | }
 79 | 
 80 | .navbar {
 81 |   padding: 15px 0;
 82 |   display: flex;
 83 |   align-items: center;
 84 |   justify-content: space-between;
 85 |   background-color: #121212; 
 86 |   transition: all 0.3s ease;
 87 | }
 88 | 
 89 | .navbar-brand {
 90 |   font-weight: 700;
 91 |   font-size: 24px;
 92 |   gap: 20px;
 93 | }
 94 | 
 95 | .logo-hospital {
 96 |   height: 50px;
 97 |   width: auto;
 98 | }
 99 | 
100 | .navbar-nav {
101 |   display: flex;
102 |   align-items: center;
103 |   gap: 20px;
104 | }
105 | 
106 | .navbar-nav .nav-item {
107 |   margin: 0;
108 | }
109 | 
110 | .navbar-nav .nav-link {
111 |   color: #ffffff; 
112 |   font-weight: 500;
113 |   transition: color 0.3s ease;
114 | }
115 | 
116 | .navbar-nav .nav-link:hover,
117 | .navbar-nav .nav-link.active {
118 |   color: #00aaff; 
119 | }
120 | 
121 | .botao-login .btn {
122 |   margin-left: 20px;
123 |   background-color: #007bff;
124 |   color: white;
125 |   width: 100px;
126 |   height: 35px;
127 |   border: none;
128 |   border-radius: 20px;
129 |   padding: 6px 16px;
130 |   font-weight: bold;
131 |   transition: background-color 0.3s ease, transform 0.3s ease;
132 | }
133 | 
134 | .botao-login .btn:hover {
135 |   background-color: #0056b3;
136 |   transform: translateY(-2px);
137 |   gap: 20px;
138 | }
139 | 
140 | .banner-principal {
141 |   background-color: #0b1f33;
142 |   padding: 120px 0;
143 |   position: relative;
144 |   overflow: hidden;
145 | }
146 | 
147 | .info-banner h1 {
148 |   font-size: 3em;
149 |   font-weight: 700;
150 |   margin-bottom: 25px;
151 |   color: var(--cor-texto);
152 | }
153 | 
154 | .info-banner p {
155 |   font-size: 1.1em;
156 |   margin-bottom: 30px;
157 |   color: var(--cor-texto);
158 |   max-width: 90%;
159 | }
160 | 
161 | .botoes-banner {
162 |   display: flex;
163 |   gap: 15px;
164 |   flex-wrap: wrap;
165 | }
166 | 
167 | .imagem-banner img {
168 |   border-radius: var(--raio-borda);
169 |   box-shadow: var(--sombra-padrao);
170 | }
171 | 
172 | .como-funciona {
173 |   background-color: #0b1f33;
174 |   color: #ffffff;
175 | }
176 | 
177 | .titulo-secao {
178 |   color: white; 
179 | }
180 | 
181 | 
182 | .etapas {
183 |   margin-top: 30px;
184 |   color: #cfcfcf;
185 | }
186 | 
187 | .etapa {
188 |   text-align: center;
189 |   border-radius: var(--raio-borda);
190 |   border: none;
191 |   box-shadow: var(--sombra-padrao);
192 |   padding: 30px 15px;
193 |   height: 100%;
194 |   transition: transform 0.3s ease, box-shadow 0.3s ease;
195 | }
196 | 
197 | .etapa:hover {
198 |   transform: translateY(-5px);
199 |   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
200 | }
201 | 
202 | .icone-etapa {
203 |   font-size: 2.5em;
204 |   margin-bottom: 20px;
205 |   color: var(--cor-primaria);
206 | }
207 | 
208 | .etapa h3 {
209 |   font-size: 1.3em;
210 |   font-weight: 600;
211 |   margin-bottom: 15px;
212 | }
213 | 
214 | .etapa p {
215 |   color: #585858;
216 |   font-size: 0.95em;
217 | }
218 | 
219 | .vantagens-ia {
220 |   background-color: #0b1f33;
221 |   padding: 100px 0;
222 | }
223 | 
224 | .vantagens-ia h2 {
225 |   font-size: 2.3em;
226 |   font-weight: 700;
227 |   margin-bottom: 30px;
228 | }
229 | 
230 | .vantagens-ia img {
231 |   border-radius: var(--raio-borda);
232 |   box-shadow: var(--sombra-padrao);
233 | }
234 | 
235 | .lista-vantagens {
236 |   list-style: none;
237 |   padding: 0;
238 |   margin: 0;
239 | }
240 | 
241 | .lista-vantagens li {
242 |   display: flex;
243 |   align-items: flex-start;
244 |   margin-bottom: 25px;
245 | }
246 | 
247 | .lista-vantagens li i {
248 |   color: var(--cor-primaria);
249 |   font-size: 1.5em;
250 |   margin-right: 15px;
251 |   margin-top: 5px;
252 | }
253 | 
254 | .lista-vantagens h4 {
255 |   font-size: 1.2em;
256 |   font-weight: 600;
257 |   margin-bottom: 8px;
258 | }
259 | 
260 | .lista-vantagens p {
261 |   margin: 0;
262 |   color: #666;
263 | }
264 | 
265 | .especialidades {
266 |   background-color: #0b1f33;
267 |   color: var(--cor-texto);
268 | }
269 | 
270 | .especialidade {
271 |   margin-bottom: 30px;
272 |   border: none;
273 |   border-radius: var(--raio-borda);
274 |   overflow: hidden;
275 |   color: var(--cor-texto);
276 |   box-shadow: var(--sombra-padrao);
277 |   transition: transform 0.3s ease, box-shadow 0.3s ease;
278 | }
279 | 
280 | .especialidade:hover {
281 |   transform: translateY(-5px);
282 |   color: #ffffff;
283 |   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
284 | }
285 | 
286 | .especialidade img {
287 |   transition: transform 0.3s ease;
288 | }
289 | 
290 | .especialidade:hover img {
291 |   transform: scale(1.05);
292 | }
293 | 
294 | .especialidade h3 {
295 |   color: #474747;
296 |   font-size: 1.3em;
297 |   font-weight: 600;
298 |   margin-bottom: 10px;
299 | }
300 | 
301 | .especialidade p {
302 |   color: #5a5a5a;
303 |   font-size: 0.9em;
304 | }
305 | 
306 | .preview-videochamada {
307 |   background-color:  #0b1f33; 
308 |   padding: 100px 0;
309 |   color: var(--cor-texto-claro);
310 | }
311 | 
312 | .preview-videochamada .titulo-secao {
313 |   color: var(--cor-texto-claro);
314 |   margin-bottom: 40px;
315 | }
316 | 
317 | .video-container {
318 |   background-color:  #0b1f33;
319 |   border-radius: var(--raio-borda);
320 |   padding: 20px;
321 |   box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
322 | }
323 | 
324 | .tela-video {
325 |   position: relative;
326 |   width: 100%;
327 |   background-color: #091e2f;
328 |   border-radius: var(--raio-borda);
329 |   overflow: hidden;
330 |   padding-bottom: 20px;
331 | }
332 | 
333 | .video-principal {
334 |   width: 100%;
335 |   height: 350px;
336 |   background-color: #121212;
337 |   display: flex;
338 |   justify-content: center;
339 |   align-items: center;
340 |   border-radius: var(--raio-borda);
341 |   position: relative;
342 | }
343 | 
344 | .video-principal img {
345 |   max-height: 100%;
346 |   width: auto;
347 |   object-fit: cover;
348 | }
349 | 
350 | .video-paciente {
351 |   position: absolute;
352 |   top: 20px;
353 |   right: 20px;
354 |   width: 160px;
355 |   height: 100px;
356 |   border: 2px solid var(--cor-primaria);
357 |   border-radius: 6px;
358 |   overflow: hidden;
359 |   background-color: #1e1e1e;
360 | }
361 | 
362 | .video-paciente img {
363 |   width: 100%;
364 |   height: 100%;
365 |   object-fit: cover;
366 | }
367 | 
368 | .nome-usuario {
369 |   position: absolute;
370 |   bottom: 0;
371 |   left: 0;
372 |   width: 100%;
373 |   background-color: rgba(0, 0, 0, 0.6);
374 |   color: #fff;
375 |   text-align: center;
376 |   padding: 5px 10px;
377 |   font-size: 0.85rem;
378 | }
379 | 
380 | .controles-video {
381 |   display: flex;
382 |   justify-content: center;
383 |   gap: 15px;
384 |   margin-top: 20px;
385 |   padding-top: 20px;
386 |   border-top: 1px solid #0a2a3f;
387 | }
388 | 
389 | .btn-controle {
390 |   width: 50px;
391 |   height: 50px;
392 |   background-color: #132e42;
393 |   color: #fff;
394 |   border: none;
395 |   border-radius: 50%;
396 |   transition: background-color 0.3s ease, transform 0.2s;
397 |   font-size: 1.2rem;
398 | }
399 | 
400 | .btn-controle:hover {
401 |   background-color: var(--cor-primaria);
402 |   transform: scale(1.1);
403 | }
404 | 
405 | .btn-encerrar {
406 |   background-color: var(--cor-erro);
407 | }
408 | 
409 | .btn-encerrar:hover {
410 |   background-color: #c0392b;
411 | }
412 | 
413 | .btn-ia {
414 |   background-color: var(--cor-primaria);
415 | }
416 | 
417 | .btn-ia:hover {
418 |   background-color: var(--cor-secundaria);
419 | }
420 | 
421 | .recursos-telemedicina {
422 |   padding-left: 30px;
423 | }
424 | 
425 | .recursos-telemedicina h3 {
426 |   font-size: 1.8em;
427 |   font-weight: 700;
428 |   margin-bottom: 20px;
429 |   color: var(--cor-texto-claro);
430 | }
431 | 
432 | .lista-recursos {
433 |   list-style: none;
434 |   padding: 0;
435 |   margin-bottom: 30px;
436 | }
437 | 
438 | .lista-recursos li {
439 |   margin-bottom: 12px;
440 |   display: flex;
441 |   align-items: center;
442 |   font-size: 1em;
443 |   color: #dfe6e9;
444 | }
445 | 
446 | .lista-recursos li i {
447 |   color: var(--cor-primaria);
448 |   margin-right: 10px;
449 |   font-size: 1.1rem;
450 | }
451 | 
452 | .preview-videochamada .btn-primary {
453 |   padding: 10px 24px;
454 |   border-radius: 30px;
455 |   font-weight: 600;
456 |   background-color: var(--cor-primaria);
457 |   border: none;
458 | }
459 | 
460 | .preview-videochamada .btn-primary:hover {
461 |   background-color: var(--cor-secundaria);
462 | }
463 | 
464 | .rodape {
465 |   background-color: var(--cor-fundo);
466 |   color: #ecf0f1;
467 |   padding: 60px 0 30px;
468 | }
469 | 
470 | .logo-rodape {
471 |   margin-bottom: 20px;
472 |   height: 60px;
473 | }
474 | 
475 | .sobre-rodape {
476 |   margin-bottom: 20px;
477 |   font-size: 0.9em;
478 |   opacity: 0.8;
479 | }
480 | 
481 | .rodape h4 {
482 |   color: #fff;
483 |   font-size: 1.2em;
484 |   margin-bottom: 20px;
485 |   font-weight: 600;
486 | }
487 | 
488 | .links-rodape {
489 |   list-style: none;
490 |   padding: 0;
491 | }
492 | 
493 | .links-rodape li {
494 |   margin-bottom: 10px;
495 | }
496 | 
497 | .links-rodape a {
498 |   color: #ecf0f1;
499 |   text-decoration: none;
500 |   transition: color 0.3s ease;
501 | }
502 | 
503 | .links-rodape a:hover {
504 |   color: var(--cor-primaria);
505 | }
506 | 
507 | .contato-rodape {
508 |   list-style: none;
509 |   padding: 0;
510 | }
511 | 
512 | .contato-rodape li {
513 |   margin-bottom: 15px;
514 |   display: flex;
515 |   align-items: flex-start;
516 | }
517 | 
518 | .contato-rodape li i {
519 |   margin-right: 10px;
520 |   color: var(--cor-primaria);
521 | }
522 | 
523 | .redes-sociais {
524 |   display: flex;
525 |   gap: 15px;
526 |   margin-top: 20px;
527 | }
528 | 
529 | .rede-social {
530 |   width: 40px;
531 |   height: 40px;
532 |   background-color: rgba(255, 255, 255, 0.1);
533 |   border-radius: 50%;
534 |   display: flex;
535 |   align-items: center;
536 |   justify-content: center;
537 |   color: #ecf0f1;
538 |   transition: all 0.3s ease;
539 | }
540 | 
541 | .rede-social:hover {
542 |   background-color: var(--cor-primaria);
543 |   color: #fff;
544 | }
545 | 
546 | .direitos {
547 |   margin-top: 30px;
548 |   background-color: var(--cor-fundo);
549 |   padding-top: 20px;
550 |   border-top: 1px solid rgba(255, 255, 255, 0.1);
551 |   text-align: center;
552 |   font-size: 0.9em;
553 |   opacity: 0.7;
554 | }
555 | 
556 | .assistente-ia {
557 |   position: fixed;
558 |   bottom: 90px;
559 |   right: 20px;
560 |   width: 350px;
561 |   height: 450px;
562 |   background-color: #ffffff;
563 |   border-radius: var(--raio-borda);
564 |   box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
565 |   display: flex;
566 |   flex-direction: column;
567 |   z-index: 1000;
568 |   overflow: hidden;
569 |   display: none;
570 | }
571 | 
572 | .cabecalho-assistente {
573 |   background-color: var(--cor-primaria);
574 |   color: #fff;
575 |   padding: 15px;
576 |   display: flex;
577 |   justify-content: space-between;
578 |   align-items: center;
579 | }
580 | 
581 | .info-assistente {
582 |   display: flex;
583 |   align-items: center;
584 | }
585 | 
586 | .avatar-assistente {
587 |   width: 30px;
588 |   height: 30px;
589 |   background-color: #fff;
590 |   border-radius: 50%;
591 |   display: flex;
592 |   align-items: center;
593 |   justify-content: center;
594 |   margin-right: 10px;
595 | }
596 | 
597 | .avatar-assistente i {
598 |   color: var(--cor-primaria);
599 | }
600 | 
601 | .nome-assistente {
602 |   font-weight: 600;
603 | }
604 | 
605 | .acoes-assistente {
606 |   display: flex;
607 |   gap: 10px;
608 | }
609 | 
610 | .btn-minimizar, .btn-fechar {
611 |   background: none;
612 |   border: none;
613 |   color: #fff;
614 |   cursor: pointer;
615 |   font-size: 1em;
616 |   display: flex;
617 |   align-items: center;
618 |   justify-content: center;
619 |   width: 24px;
620 |   height: 24px;
621 |   border-radius: 50%;
622 |   transition: background-color 0.3s ease;
623 | }
624 | 
625 | .btn-minimizar:hover, .btn-fechar:hover {
626 |   background-color: rgba(255, 255, 255, 0.1);
627 | }
628 | 
629 | .corpo-assistente {
630 |   flex: 1;
631 |   display: flex;
632 |   flex-direction: column;
633 |   overflow: hidden;
634 | }
635 | 
636 | .mensagens {
637 |   flex: 1;
638 |   padding: 15px;
639 |   overflow-y: auto;
640 | }
641 | 
642 | .mensagem {
643 |   margin-bottom: 15px;
644 |   display: flex;
645 |   flex-direction: column;
646 | }
647 | 
648 | .mensagem-assistente .conteudo-mensagem {
649 |   background-color: #d3d3d3;
650 |   color: #1c1c1c;
651 |   border-radius: 18px 18px 18px 0;
652 |   padding: 12px 15px;
653 |   max-width: 80%;
654 |   align-self: flex-start;
655 | }
656 | 
657 | .mensagem-usuario .conteudo-mensagem {
658 |   background-color: var(--cor-primaria);
659 |   color: #fff;
660 |   border-radius: 18px 18px 0 18px;
661 |   padding: 12px 15px;
662 |   max-width: 80%;
663 |   align-self: flex-end;
664 |   margin-left: auto;
665 | }
666 | 
667 | .timestamp {
668 |   font-size: 0.7em;
669 |   color: #888;
670 |   margin-top: 5px;
671 |   margin-left: 5px;
672 | }
673 | 
674 | .entrada-mensagem {
675 |   padding: 10px 15px;
676 |   display: flex;
677 |   align-items: center;
678 |   border-top: 1px solid var(--cor-borda);
679 | }
680 | 
681 | .entrada-mensagem input {
682 |   flex: 1;
683 |   padding: 10px 15px;
684 |   border: 1px solid var(--cor-borda);
685 |   border-radius: 20px;
686 |   outline: none;
687 |   font-size: 0.9em;
688 | }
689 | 
690 | .entrada-mensagem input:focus {
691 |   border-color: var(--cor-primaria);
692 | }
693 | 
694 | .btn-enviar {
695 |   background-color: var(--cor-primaria);
696 |   color: #fff;
697 |   border: none;
698 |   width: 36px;
699 |   height: 36px;
700 |   border-radius: 50%;
701 |   margin-left: 10px;
702 |   display: flex;
703 |   align-items: center;
704 |   justify-content: center;
705 |   cursor: pointer;
706 |   transition: background-color 0.3s ease;
707 | }
708 | 
709 | .btn-enviar:hover {
710 |   background-color: var(--cor-secundaria);
711 | }
712 | 
713 | .botao-assistente {
714 |   position: fixed;
715 |   bottom: 20px;
716 |   right: 20px;
717 |   width: 60px;
718 |   height: 60px;
719 |   background-color: var(--cor-primaria);
720 |   color: #fff;
721 |   border-radius: 50%;
722 |   display: flex;
723 |   align-items: center;
724 |   justify-content: center;
725 |   cursor: pointer;
726 |   box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
727 |   z-index: 999;
728 |   font-size: 1.5em;
729 |   transition: transform 0.3s ease, background-color 0.3s ease;
730 | }
731 | 
732 | .botao-assistente:hover {
733 |   background-color: var(--cor-secundaria);
734 |   transform: scale(1.05);
735 | }
736 | 
737 | @media (max-width: 991px) {
738 |   .banner-principal {
739 |       padding: 80px 0;
740 |   }
741 |   
742 |   .info-banner h1 {
743 |       font-size: 2.5em;
744 |   }
745 |   
746 |   .imagem-banner {
747 |       margin-top: 40px;
748 |   }
749 |   
750 |   .video-container {
751 |       margin-bottom: 40px;
752 |   }
753 | }
754 | 
755 | @media (max-width: 767px) {
756 |   .info-banner h1 {
757 |       font-size: 2em;
758 |   }
759 |   
760 |   .botoes-banner {
761 |       flex-direction: column;
762 |       gap: 10px;
763 |   }
764 |   
765 |   .botoes-banner .btn {
766 |       width: 100%;
767 |   }
768 |   
769 |   .recursos-telemedicina {
770 |       padding-left: 0;
771 |       margin-top: 40px;
772 |   }
773 |   
774 |   .assistente-ia {
775 |       width: 300px;
776 |       height: 400px;
777 |       bottom: 80px;
778 |   }
779 | }
780 | 
781 | @media (max-width: 575px) {
782 |   section {
783 |       padding: 60px 0;
784 |   }
785 |   
786 |   .info-banner h1 {
787 |       font-size: 1.8em;
788 |   }
789 |   
790 |   .titulo-secao {
791 |       font-size: 1.8em;
792 |       background-color: #0b1f33;
793 |   }
794 |   
795 |   .assistente-ia {
796 |       width: calc(100% - 40px);
797 |       height: 50vh;
798 |       bottom: 80px;
799 |   }
800 | }


--------------------------------------------------------------------------------
/styles-login.css:
--------------------------------------------------------------------------------
  1 | :root {
  2 |     --cor-primaria: #0056b3;
  3 |     --cor-secundaria: #17a2b8;
  4 |     --cor-destaque: #f8f9fa;
  5 |     --cor-texto: #343a40;
  6 |     --cor-texto-claro: #6c757d;
  7 |     --fonte-principal: 'Montserrat', sans-serif;
  8 |     --sombra-suave: 0 5px 15px rgba(0, 0, 0, 0.1);
  9 |   }
 10 |   
 11 |   body {
 12 |     font-family: 'Roboto', sans-serif;
 13 |     color: var(--cor-texto);
 14 |     background-color:#07172d;
 15 |     line-height: 1.6;
 16 |     overflow-x: hidden;
 17 |     padding-top: 80px;
 18 |   }
 19 |   
 20 | .cabecalho {
 21 |   background-color: #121212;
 22 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
 23 | }
 24 | 
 25 | .navbar {
 26 |   padding: 15px 0;
 27 |   display: flex;
 28 |   align-items: center;
 29 |   justify-content: space-between;
 30 |   background-color: #121212; 
 31 |   transition: all 0.3s ease;
 32 | }
 33 | 
 34 | .navbar-brand {
 35 |   font-weight: 700;
 36 |   font-size: 24px;
 37 |   gap: 20px;
 38 | }
 39 | 
 40 | .logo-hospital {
 41 |   height: 50px;
 42 |   width: auto;
 43 | }
 44 | 
 45 | .navbar-nav {
 46 |   display: flex;
 47 |   align-items: center;
 48 |   gap: 20px;
 49 | }
 50 | 
 51 | .navbar-nav .nav-item {
 52 |   margin: 0;
 53 | }
 54 | 
 55 | .navbar-nav .nav-link {
 56 |   color: #ffffff; 
 57 |   font-weight: 500;
 58 |   transition: color 0.3s ease;
 59 | }
 60 | 
 61 | .navbar-nav .nav-link:hover,
 62 | .navbar-nav .nav-link.active {
 63 |   color: #00aaff; 
 64 | }
 65 | 
 66 | .botao-login .btn {
 67 |   margin-left: 20px;
 68 |   background-color: #007bff;
 69 |   color: white;
 70 |   width: 100px;
 71 |   height: 35px;
 72 |   border: none;
 73 |   border-radius: 20px;
 74 |   padding: 6px 16px;
 75 |   font-weight: bold;
 76 |   transition: background-color 0.3s ease, transform 0.3s ease;
 77 | }
 78 | 
 79 | .botao-login .btn:hover {
 80 |   background-color: #0056b3;
 81 |   transform: translateY(-2px);
 82 |   gap: 20px;
 83 | }
 84 | 
 85 | .secao-login {
 86 |   padding: 60px 0;
 87 |   color: var(--cor-texto);
 88 |   min-height: calc(100vh - 80px - 350px);
 89 |   display: flex;
 90 |   align-items: center;
 91 |   }
 92 |   
 93 |   .titulo-login {
 94 |   color: var(--cor-primaria);
 95 |   font-weight: 700;
 96 |   margin-bottom: 0.5rem;
 97 |   font-size: 2.5rem;
 98 |   }
 99 |   
100 |   .subtitulo-login {
101 |   color: var(--cor-texto-claro);
102 |   font-size: 1.1rem;
103 |   margin-bottom: 2rem;
104 |   }
105 |   
106 |   .abas-login {
107 |   margin-top: 20px;
108 |   }
109 |   
110 |   .nav-tabs {
111 |   border-bottom: none;
112 |   margin-bottom: -1px;
113 |   }
114 |   
115 |   .nav-tabs .nav-link {
116 |   border: none;
117 |   color: var(--cor-texto-claro);
118 |   font-weight: 600;
119 |   padding: 15px 30px;
120 |   background-color: #e9ecef;
121 |   border-radius: 10px 10px 0 0;
122 |   transition: all 0.3s ease;
123 |   }
124 |   
125 |   .nav-tabs .nav-link.active {
126 |   background-color: white;
127 |   color: var(--cor-primaria);
128 |   border-bottom: none;
129 |   box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.05);
130 |   }
131 |   
132 |   .card-login {
133 |   border: none;
134 |   border-radius: 0 15px 15px 15px;
135 |   box-shadow: var(--sombra-suave);
136 |   padding: 10px;
137 |   }
138 |   
139 |   .card-body {
140 |   padding: 30px;
141 |   }
142 |   
143 |   .form-label {
144 |   font-weight: 600;
145 |   color: var(--cor-texto);
146 |   margin-bottom: 0.5rem;
147 |   }
148 |   
149 |   .input-group {
150 |   margin-bottom: 1rem;
151 |   }
152 |   
153 |   .input-group-text {
154 |   background-color: #f8f9fa;
155 |   border-right: none;
156 |   color: var(--cor-texto-claro);
157 |   }
158 |   
159 |   .form-control {
160 |   border-left: none;
161 |   padding: 12px 15px;
162 |   font-size: 1rem;
163 |   }
164 |   
165 |   .form-control:focus {
166 |   box-shadow: none;
167 |   border-color: #ced4da;
168 |   }
169 |   
170 |   .input-group:focus-within .input-group-text,
171 |   .input-group:focus-within .form-control {
172 |   border-color: var(--cor-primaria);
173 |   }
174 |   
175 |   .toggleSenha {
176 |   border-left: none;
177 |   background-color: #f8f9fa;
178 |   color: var(--cor-texto-claro);
179 |   }
180 |   
181 |   .toggleSenha:hover {
182 |   background-color: #e9ecef;
183 |   color: var(--cor-primaria);
184 |   }
185 |   
186 |   .form-check-input:checked {
187 |   background-color: var(--cor-primaria);
188 |   border-color: var(--cor-primaria);
189 |   }
190 |   
191 |   .btn-primary {
192 |   background-color: var(--cor-primaria);
193 |   border-color: var(--cor-primaria);
194 |   padding: 12px 30px;
195 |   font-weight: 600;
196 |   transition: all 0.3s ease;
197 |   }
198 |   
199 |   .btn-primary:hover {
200 |   background-color: #004494;
201 |   border-color: #004494;
202 |   transform: translateY(-2px);
203 |   box-shadow: 0 4px 8px rgba(0, 86, 179, 0.3);
204 |   }
205 |   
206 |   .link-secondary {
207 |   color: var(--cor-texto-claro);
208 |   text-decoration: none;
209 |   transition: color 0.3s ease;
210 |   }
211 |   
212 |   .link-secondary:hover {
213 |   color: var(--cor-primaria);
214 |   text-decoration: underline;
215 |   }
216 |   
217 |   .rodape {
218 |   background-color: #1c1c1c;
219 |   color: #ecf0f1;
220 |   padding: 60px 0 30px;
221 |   }
222 |   
223 |   .logo-rodape {
224 |   height: 60px;
225 |   margin-bottom: 20px;
226 |   }
227 |   
228 |   .sobre-rodape {
229 |   color: #d4d4d4;
230 |   font-size: 0.9rem;
231 |   line-height: 1.6;
232 |   margin-top: 15px;
233 |   }
234 |   
235 |   .rodape h4 {
236 |   color: #fff;
237 |   font-weight: 600;
238 |   margin-bottom: 25px;
239 |   font-size: 1.2rem;
240 |   }
241 |   
242 |   .links-rodape,
243 |   .contato-rodape {
244 |   list-style: none;
245 |   padding: 0;
246 |   margin: 0;
247 |   }
248 |   
249 |   .links-rodape li,
250 |   .contato-rodape li {
251 |   margin-bottom: 15px;
252 |   }
253 |   
254 |   .links-rodape a,
255 |   .contato-rodape a {
256 |   color: #bdc3c7;
257 |   text-decoration: none;
258 |   transition: color 0.3s ease;
259 |   font-size: 0.95rem;
260 |   }
261 |   
262 |   .links-rodape a:hover {
263 |   color: #fff;
264 |   }
265 |   
266 |   .contato-rodape i {
267 |   margin-right: 10px;
268 |   color: var(--cor-secundaria);
269 |   }
270 |   
271 |   .redes-sociais {
272 |   margin-top: 25px;
273 |   display: flex;
274 |   gap: 15px;
275 |   }
276 |   
277 |   .rede-social {
278 |   display: inline-flex;
279 |   align-items: center;
280 |   justify-content: center;
281 |   width: 40px;
282 |   height: 40px;
283 |   background-color: rgba(255, 255, 255, 0.1);
284 |   color: #ecf0f1;
285 |   border-radius: 50%;
286 |   transition: all 0.3s ease;
287 |   }
288 |   
289 |   .rede-social:hover {
290 |   background-color: var(--cor-secundaria);
291 |   color: #fff;
292 |   transform: translateY(-3px);
293 |   }
294 |   
295 |   .direitos {
296 |   margin-top: 40px;
297 |   padding-top: 20px;
298 |   border-top: 1px solid rgba(255, 255, 255, 0.1);
299 |   text-align: center;
300 |   color: #95a5a6;
301 |   font-size: 0.9rem;
302 |   }
303 |   
304 |   @media (max-width: 992px) {
305 |   .botao-login {
306 |   margin-top: 10px;
307 |   }
308 |   .secao-login {
309 |   padding: 40px 0;
310 |   }
311 |   .titulo-login {
312 |   font-size: 2rem;
313 |   }
314 |   }
315 |   
316 |   @media (max-width: 768px) {
317 |   .navbar {
318 |   padding: 10px 0;
319 |   }
320 |   .secao-login {
321 |   padding: 30px 0;
322 |   }
323 |   .card-login {
324 |   border-radius: 15px;
325 |   }
326 |   .nav-tabs .nav-link {
327 |   padding: 10px 15px;
328 |   font-size: 0.9rem;
329 |   }
330 |   .assistente-ia {
331 |   width: 300px;
332 |   height: 400px;
333 |   bottom: 70px;
334 |   }
335 |   }
336 |   
337 |   @media (max-width: 576px) {
338 |   .titulo-login {
339 |   font-size: 1.8rem;
340 |   }
341 |   .subtitulo-login {
342 |   font-size: 1rem;
343 |   }
344 |   .card-body {
345 |   padding: 20px;
346 |   }
347 |   .assistente-ia {
348 |   width: calc(100% - 40px);
349 |   height: 400px;
350 |   right: 20px;
351 |   left: 20px;
352 |   }
353 |   }
354 |   


--------------------------------------------------------------------------------
/styles-telemedicina.css:
--------------------------------------------------------------------------------
  1 | :root {
  2 |   --cor-primaria: #3498db;
  3 |   --cor-secundaria: #2980b9;
  4 |   --cor-terciaria: #e8f4f8;
  5 |   --cor-texto: #333;
  6 |   --cor-texto-claro: #f8f9fa;
  7 |   --cor-fundo: #121212;
  8 |   --cor-borda: #e1e1e1;
  9 |   --sombra-padrao: 0 4px 12px rgba(0, 0, 0, 0.1);
 10 |   --raio-borda: 8px;
 11 |   --espacamento: 100px;
 12 |   --cor-erro: #e74c3c;
 13 |   --cor-sucesso: #2ecc71;
 14 | }
 15 | 
 16 | body {
 17 |   font-family: 'Roboto', sans-serif;
 18 |   color: var(--cor-texto);
 19 |   background-color: #07172d;
 20 |   line-height: 1.6;
 21 |   overflow-x: hidden;
 22 |   padding-top: 80px;
 23 | }
 24 | 
 25 | main {
 26 |   flex: 1;
 27 |   padding: 2rem 0;
 28 | }
 29 | 
 30 | h1 {
 31 |   color: whitesmoke;
 32 |   font-weight: 700;
 33 |   margin-bottom: 1.5rem;
 34 | }
 35 | 
 36 | .cabecalho {
 37 |   background-color: #121212;
 38 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
 39 | }
 40 | 
 41 | .navbar {
 42 |   padding: 15px 0;
 43 |   display: flex;
 44 |   align-items: center;
 45 |   justify-content: space-between;
 46 |   background-color: #121212;
 47 |   transition: all 0.3s ease;
 48 | }
 49 | 
 50 | .navbar-brand {
 51 |   font-weight: 700;
 52 |   font-size: 24px;
 53 |   gap: 20px;
 54 | }
 55 | 
 56 | .logo-hospital {
 57 |   height: 50px;
 58 |   width: auto;
 59 | }
 60 | 
 61 | .navbar-nav {
 62 |   display: flex;
 63 |   align-items: center;
 64 |   gap: 20px;
 65 | }
 66 | 
 67 | .navbar-nav .nav-item {
 68 |   margin: 0;
 69 | }
 70 | 
 71 | .navbar-nav .nav-link {
 72 |   color: #ffffff; 
 73 |   font-weight: 500;
 74 |   transition: color 0.3s ease;
 75 | }
 76 | 
 77 | .navbar-nav .nav-link:hover,
 78 | .navbar-nav .nav-link.active {
 79 |   color: #00aaff;
 80 | }
 81 | 
 82 | .botao-login .btn {
 83 |   margin-left: 20px;
 84 |   background-color: #007bff;
 85 |   color: white;
 86 |   width: 100px;
 87 |   height: 35px;
 88 |   border: none;
 89 |   border-radius: 20px;
 90 |   padding: 6px 16px;
 91 |   font-weight: bold;
 92 |   transition: background-color 0.3s ease, transform 0.3s ease;
 93 | }
 94 | 
 95 | .botao-login .btn:hover {
 96 |   background-color: #0056b3;
 97 |   transform: translateY(-2px);
 98 |   gap: 20px;
 99 | }
100 | 
101 | .video-container {
102 |   background-color: rgba(0, 0, 0, 0.5);
103 |   border-radius: var(--raio-borda);
104 |   box-shadow: var(--sombra-padrao);
105 |   padding: 1.5rem;
106 |   position: relative;
107 |   max-width: 900px;
108 |   margin: 0 auto;
109 |   overflow: hidden;
110 | }
111 | 
112 | .video-principal {
113 |   position: relative;
114 |   border-radius: var(--raio-borda);
115 |   overflow: hidden;
116 |   margin-bottom: 1rem;
117 |   background-color: var(--cor-fundo);
118 |   height: 400px;
119 |   display: flex;
120 |   align-items: center;
121 |   justify-content: center;
122 |   border: 1px solid var(--cor-borda);
123 | }
124 | 
125 | .video-principal img,
126 | .video-paciente img {
127 |   max-height: 100%;
128 |   width: auto;
129 |   object-fit: cover;
130 | }
131 | 
132 | .video-paciente {
133 |   position: absolute;
134 |   top: 2rem;
135 |   right: 2rem;
136 |   width: 180px;
137 |   height: 120px;
138 |   border-radius: var(--raio-borda);
139 |   overflow: hidden;
140 |   border: 3px solid var(--cor-primaria);
141 |   box-shadow: var(--sombra-padrao);
142 |   z-index: 10;
143 |   background-color: var(--cor-fundo);
144 |   display: flex;
145 |   align-items: center;
146 |   justify-content: center;
147 | }
148 | 
149 | .nome-usuario {
150 |   position: absolute;
151 |   bottom: 0;
152 |   left: 0;
153 |   right: 0;
154 |   background-color: rgba(0, 0, 0, 0.5);
155 |   color: var(--cor-texto-claro);
156 |   margin: 0;
157 |   padding: 0.5rem;
158 |   font-size: 0.9rem;
159 |   text-align: center;
160 | }
161 | 
162 | .controles-video {
163 |   margin-top: 1.5rem;
164 |   padding: 1rem 0;
165 |   border-top: 1px solid var(--cor-borda);
166 | }
167 | 
168 | .controles-video button {
169 |   margin: 0 0.5rem;
170 |   border-radius: 50%;
171 |   width: 50px;
172 |   height: 50px;
173 |   display: inline-flex;
174 |   align-items: center;
175 |   justify-content: center;
176 |   transition: all 0.3s ease;
177 | }
178 | 
179 | .controles-video .btn-outline-dark {
180 |   border: 2px solid #296cb9;
181 |   color: #296cb9;
182 | }
183 | 
184 | .controles-video .btn-outline-dark:hover {
185 |   background-color: var(--cor-primaria);
186 |   color: var(--cor-texto-claro);
187 | }
188 | 
189 | .controles-video .btn-danger {
190 |   width: auto;
191 |   border-radius: 25px;
192 |   padding: 0.5rem 1.5rem;
193 |   background-color: var(--cor-erro);
194 |   border-color: var(--cor-erro);
195 | }
196 | 
197 | .controles-video .btn-danger:hover {
198 |   background-color: #c0392b;
199 |   border-color: #c0392b;
200 | }
201 | 
202 | .status-conexao {
203 |   font-size: 0.8rem;
204 |   color: var(--cor-sucesso);
205 |   position: absolute;
206 |   top: 1rem;
207 |   left: 1rem;
208 |   background-color: rgba(255, 255, 255, 0.8);
209 |   padding: 0.3rem 0.6rem;
210 |   border-radius: 20px;
211 |   display: flex;
212 |   align-items: center;
213 | }
214 | 
215 | .status-conexao i {
216 |   margin-right: 5px;
217 | }
218 | 
219 | .timer-consulta {
220 |   font-size: 0.9rem;
221 |   position: absolute;
222 |   top: 1rem;
223 |   left: 50%;
224 |   transform: translateX(-50%);
225 |   background-color: rgba(0, 0, 0, 0.6);
226 |   color: white;
227 |   padding: 0.3rem 0.8rem;
228 |   border-radius: 20px;
229 | }
230 | 
231 | .rodape {
232 |   background-color: var(--cor-fundo);
233 |   color: var(--cor-texto-claro);
234 |   padding: 1.5rem 0;
235 |   margin-top: 2rem;
236 | }
237 | 
238 | @media (max-width: 768px) {
239 |   .video-paciente {
240 |     width: 120px;
241 |     height: 90px;
242 |     top: 1rem;
243 |     right: 1rem;
244 |   }
245 | 
246 |   .video-principal {
247 |     height: 300px;
248 |   }
249 | 
250 |   .controles-video button {
251 |     width: 45px;
252 |     height: 45px;
253 |     margin: 0 0.3rem;
254 |   }
255 | }
256 | 
257 | @media (max-width: 576px) {
258 |   .video-container {
259 |     padding: 1rem;
260 |   }
261 | 
262 |   .video-paciente {
263 |     width: 100px;
264 |     height: 75px;
265 |   }
266 | 
267 |   .video-principal {
268 |     height: 250px;
269 |   }
270 | 
271 |   .controles-video {
272 |     display: flex;
273 |     justify-content: center;
274 |   }
275 | 
276 |   .controles-video button {
277 |     width: 40px;
278 |     height: 40px;
279 |     margin: 0 0.2rem;
280 |   }
281 | 
282 |   .controles-video .btn-danger {
283 |     padding: 0.4rem 1rem;
284 |   }
285 | }
286 | 
287 | .assistente-ia {
288 |   position: fixed;
289 |   bottom: 90px;
290 |   right: 20px;
291 |   width: 350px;
292 |   height: 450px;
293 |   background-color: var(--cor-fundo);
294 |   border-radius: var(--raio-borda);
295 |   box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
296 |   display: flex;
297 |   flex-direction: column;
298 |   z-index: 1000;
299 |   overflow: hidden;
300 |   display: none;
301 | }
302 | 
303 | .cabecalho-assistente {
304 |   background-color: var(--cor-primaria);
305 |   color: #fff;
306 |   padding: 15px;
307 |   display: flex;
308 |   justify-content: space-between;
309 |   align-items: center;
310 | }
311 | 
312 | .info-assistente {
313 |   display: flex;
314 |   align-items: center;
315 | }
316 | 
317 | .avatar-assistente {
318 |   width: 30px;
319 |   height: 30px;
320 |   background-color: #fff;
321 |   border-radius: 50%;
322 |   display: flex;
323 |   align-items: center;
324 |   justify-content: center;
325 |   margin-right: 10px;
326 | }
327 | 
328 | .avatar-assistente i {
329 |   color: var(--cor-primaria);
330 | }
331 | 
332 | .nome-assistente {
333 |   font-weight: 600;
334 | }
335 | 
336 | .acoes-assistente {
337 |   display: flex;
338 |   gap: 10px;
339 | }
340 | 
341 | .btn-minimizar, .btn-fechar {
342 |   background: none;
343 |   border: none;
344 |   color: #fff;
345 |   cursor: pointer;
346 |   font-size: 1em;
347 |   display: flex;
348 |   align-items: center;
349 |   justify-content: center;
350 |   width: 24px;
351 |   height: 24px;
352 |   border-radius: 50%;
353 |   transition: background-color 0.3s ease;
354 | }
355 | 
356 | .btn-minimizar:hover, .btn-fechar:hover {
357 |   background-color: rgba(255, 255, 255, 0.1);
358 | }
359 | 
360 | .corpo-assistente {
361 |   flex: 1;
362 |   display: flex;
363 |   flex-direction: column;
364 |   overflow: hidden;
365 | }
366 | 
367 | .mensagens {
368 |   flex: 1;
369 |   padding: 15px;
370 |   overflow-y: auto;
371 | }
372 | 
373 | .mensagem {
374 |   margin-bottom: 15px;
375 |   display: flex;
376 |   flex-direction: column;
377 | }
378 | 
379 | .mensagem-assistente .conteudo-mensagem {
380 |   background-color: #ffffff;
381 |   color: #636363;
382 |   border-radius: 18px 18px 18px 0;
383 |   padding: 12px 15px;
384 |   max-width: 80%;
385 |   align-self: flex-start;
386 | }
387 | 
388 | .mensagem-usuario .conteudo-mensagem {
389 |   background-color: #d3d3d3;
390 |   color: #1c1c1c;
391 |   border-radius: 18px 18px 0 18px;
392 |   padding: 12px 15px;
393 |   max-width: 80%;
394 |   align-self: flex-end;
395 |   margin-left: auto;
396 | }
397 | 
398 | .timestamp {
399 |   font-size: 0.7em;
400 |   color: #888;
401 |   margin-top: 5px;
402 |   margin-left: 5px;
403 | }
404 | 
405 | .entrada-mensagem {
406 |   padding: 10px 15px;
407 |   display: flex;
408 |   align-items: center;
409 |   border-top: 1px solid var(--cor-borda);
410 | }
411 | 
412 | .entrada-mensagem input {
413 |   flex: 1;
414 |   padding: 10px 15px;
415 |   border: 1px solid var(--cor-borda);
416 |   border-radius: 20px;
417 |   outline: none;
418 |   font-size: 0.9em;
419 | }
420 | 
421 | .entrada-mensagem input:focus {
422 |   border-color: var(--cor-primaria);
423 | }
424 | 
425 | .btn-enviar {
426 |   background-color: var(--cor-primaria);
427 |   color: #fff;
428 |   border: none;
429 |   width: 36px;
430 |   height: 36px;
431 |   border-radius: 50%;
432 |   margin-left: 10px;
433 |   display: flex;
434 |   align-items: center;
435 |   justify-content: center;
436 |   cursor: pointer;
437 |   transition: background-color 0.3s ease;
438 | }
439 | 
440 | .btn-enviar:hover {
441 |   background-color: var(--cor-secundaria);
442 | }
443 | 
444 | .botao-assistente {
445 |   position: fixed;
446 |   bottom: 20px;
447 |   right: 20px;
448 |   width: 60px;
449 |   height: 60px;
450 |   background-color: var(--cor-primaria);
451 |   color: #fff;
452 |   border-radius: 50%;
453 |   display: flex;
454 |   align-items: center;
455 |   justify-content: center;
456 |   cursor: pointer;
457 |   box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
458 |   z-index: 999;
459 |   font-size: 1.5em;
460 |   transition: transform 0.3s ease, background-color 0.3s ease;
461 | }
462 | 
463 | .botao-assistente:hover {
464 |   background-color: var(--cor-secundaria);
465 |   transform: scale(1.05);
466 | }
467 | 


--------------------------------------------------------------------------------
/stylesbiblioteca.css:
--------------------------------------------------------------------------------
  1 | :root {
  2 |     --cor-primaria: #3498db;
  3 |     --cor-secundaria: #2980b9;
  4 |     --cor-terciaria: #e8f4f8;
  5 |     --cor-texto: #333;
  6 |     --cor-texto-claro: #f8f9fa;
  7 |     --cor-fundo: white;
  8 |     --cor-borda: #e1e1e1;
  9 |     --sombra-padrao: 0 4px 12px rgba(0, 0, 0, 0.1);
 10 |     --raio-borda: 8px;
 11 |     --espacamento: 100px;
 12 |     
 13 |     --cor-laudo: #17a2b8;
 14 |     --cor-receita: #28a745;
 15 |     --cor-atestado: #ffc107;
 16 |     --cor-exame: #dc3545;
 17 |   
 18 |     --cor-cardiologia: #17a2b8;
 19 |     --cor-dermatologia: #28a745;
 20 |     --cor-pediatria: #ffc107;
 21 |     --cor-psicologia: #6f42c1;
 22 |   }
 23 |   
 24 |   * {
 25 |     margin: 0;
 26 |     padding: 0;
 27 |     box-sizing: border-box;
 28 |   }
 29 |   
 30 |   body {
 31 |     font-family: 'Roboto', sans-serif;
 32 |     color: var(--cor-texto);
 33 |     background-color: #f9fbfd;
 34 |     line-height: 1.6;
 35 |     padding-top: 80px;
 36 |   }
 37 |   
 38 |   .cabecalho {
 39 |     background-color: #1c1c1c;
 40 |     box-shadow: var(--sombra-padrao);
 41 |     color: white;
 42 |   }
 43 |   
 44 |   .navbar {
 45 |     background-color: #1c1c1c;
 46 |     transition: top 0.3s ease-in-out;
 47 |     padding: 16px 0;
 48 |   }
 49 |   
 50 |   .navbar-brand img.logo-hospital {
 51 |     height: 40px;
 52 |   }
 53 |   
 54 |   .navbar-nav .nav-link {
 55 |     color: white;
 56 |     font-weight: 500;
 57 |     padding: 10px 15px;
 58 |     transition: color 0.3s;
 59 |   }
 60 |   
 61 |   .navbar-nav .nav-link:hover,
 62 |   .navbar-nav .nav-link.active {
 63 |     color: var(--cor-primaria);
 64 |   }
 65 |   
 66 |   .nav-item.botao-login .btn {
 67 |     background-color: var(--cor-primaria);
 68 |     border-color: var(--cor-primaria);
 69 |     color: var(--cor-texto-claro);
 70 |     padding: 8px 16px;
 71 |     border-radius: var(--raio-borda);
 72 |     transition: all 0.3s;
 73 |   }
 74 |   
 75 |   .nav-item.botao-login .btn:hover {
 76 |     background-color: var(--cor-secundaria);
 77 |     border-color: var(--cor-secundaria);
 78 |     transform: translateY(-2px);
 79 |   }
 80 |   
 81 |   .secao-biblioteca {
 82 |     padding: var(--espacamento) 0;
 83 |   }
 84 |   
 85 |   .titulo-secao {
 86 |     color: var(--cor-secundaria);
 87 |     font-weight: 700;
 88 |     margin-bottom: 12px;
 89 |     position: relative;
 90 |     display: inline-block;
 91 |   }
 92 |   
 93 |   .titulo-secao::after {
 94 |     content: '';
 95 |     position: absolute;
 96 |     width: 50px;
 97 |     height: 4px;
 98 |     background-color: var(--cor-primaria);
 99 |     bottom: -10px;
100 |     left: 0;
101 |     border-radius: var(--raio-borda);
102 |   }
103 |   
104 |   .subtitulo-secao {
105 |     color: #6c757d;
106 |     margin-bottom: 40px;
107 |   }
108 |   
109 |   .card {
110 |     border: none;
111 |     border-radius: var(--raio-borda);
112 |     box-shadow: var(--sombra-padrao);
113 |     transition: all 0.3s ease;
114 |     overflow: hidden;
115 |   }
116 |   
117 |   .card:hover {
118 |     transform: translateY(-5px);
119 |     box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
120 |   }
121 |   
122 |   .card-header {
123 |     background-color: #f8f9fa;
124 |     border-bottom: 1px solid var(--cor-borda);
125 |     padding: 15px 20px;
126 |   }
127 |   
128 |   .card-header h4 {
129 |     color: var(--cor-secundaria);
130 |     font-size: 18px;
131 |     font-weight: 600;
132 |     margin: 0;
133 |   }
134 |   
135 |   .card-body {
136 |     padding: 20px;
137 |   }
138 |   
139 |   .card-filtros, 
140 |   .card-estatisticas {
141 |     margin-bottom: 24px;
142 |   }
143 |   
144 |   .form-label {
145 |     font-weight: 500;
146 |     color: var(--cor-secundaria);
147 |     margin-bottom: 8px;
148 |   }
149 |   
150 |   .form-check-label {
151 |     color: var(--cor-texto);
152 |     font-weight: 400;
153 |   }
154 |   
155 |   .form-control, 
156 |   .form-select {
157 |     border-radius: var(--raio-borda);
158 |     border: 1px solid var(--cor-borda);
159 |     padding: 10px 15px;
160 |     transition: all 0.3s;
161 |   }
162 |   
163 |   .form-control:focus, 
164 |   .form-select:focus {
165 |     border-color: var(--cor-primaria);
166 |     box-shadow: 0 0 0 0.25rem rgba(52, 152, 219, 0.25);
167 |   }
168 |   
169 |   .btn-primary {
170 |     background-color: var(--cor-primaria);
171 |     border-color: var(--cor-primaria);
172 |     border-radius: var(--raio-borda);
173 |     padding: 10px 20px;
174 |     font-weight: 500;
175 |     transition: all 0.3s;
176 |   }
177 |   
178 |   .btn-primary:hover {
179 |     background-color: var(--cor-secundaria);
180 |     border-color: var(--cor-secundaria);
181 |     transform: translateY(-2px);
182 |   }
183 |   
184 |   .estatistica-item {
185 |     text-align: center;
186 |     margin-bottom: 15px;
187 |     padding: 10px;
188 |     border-radius: var(--raio-borda);
189 |     background-color: #f8f9fa;
190 |     transition: all 0.3s;
191 |   }
192 |   
193 |   .estatistica-item:hover {
194 |     background-color: var(--cor-terciaria);
195 |   }
196 |   
197 |   .estatistica-valor {
198 |     font-size: 24px;
199 |     font-weight: 700;
200 |     color: var(--cor-primaria);
201 |   }
202 |   
203 |   .estatistica-label {
204 |     font-size: 14px;
205 |     color: #6c757d;
206 |   }
207 |   
208 |   .card-busca {
209 |     margin-bottom: 24px;
210 |   }
211 |   
212 |   .input-group .form-control {
213 |     border-top-right-radius: 0;
214 |     border-bottom-right-radius: 0;
215 |   }
216 |   
217 |   .input-group .btn {
218 |     border-top-left-radius: 0;
219 |     border-bottom-left-radius: 0;
220 |   }
221 |   
222 |   .btn-outline-secondary {
223 |     border-color: var(--cor-borda);
224 |     color: var(--cor-texto);
225 |   }
226 |   
227 |   .btn-outline-secondary:hover,
228 |   .btn-outline-secondary.active {
229 |     background-color: var(--cor-terciaria);
230 |     color: var(--cor-primaria);
231 |     border-color: var(--cor-primaria);
232 |   }
233 |   
234 |   .documentos-grid {
235 |     margin-bottom: 30px;
236 |   }
237 |   
238 |   .documento {
239 |     position: relative;
240 |     height: 100%;
241 |   }
242 |   
243 |   .tipo-documento {
244 |     position: absolute;
245 |     top: 15px;
246 |     right: 15px;
247 |     width: 40px;
248 |     height: 40px;
249 |     border-radius: 50%;
250 |     display: flex;
251 |     align-items: center;
252 |     justify-content: center;
253 |     color: white;
254 |     font-size: 18px;
255 |   }
256 |   
257 |   .tipo-documento.laudo {
258 |     background-color: var(--cor-laudo);
259 |   }
260 |   
261 |   .tipo-documento.receita {
262 |     background-color: var(--cor-receita);
263 |   }
264 |   
265 |   .tipo-documento.atestado {
266 |     background-color: var(--cor-atestado);
267 |   }
268 |   
269 |   .tipo-documento.exame {
270 |     background-color: var(--cor-exame);
271 |   }
272 |   
273 |   .titulo-documento {
274 |     font-size: 18px;
275 |     font-weight: 600;
276 |     margin-bottom: 10px;
277 |     color: var(--cor-secundaria);
278 |     padding-right: 40px;
279 |   }
280 |   
281 |   .meta-documento {
282 |     display: flex;
283 |     flex-wrap: wrap;
284 |     gap: 15px;
285 |     margin-bottom: 12px;
286 |     font-size: 14px;
287 |     color: #6c757d;
288 |   }
289 |   
290 |   .meta-item {
291 |     display: flex;
292 |     align-items: center;
293 |   }
294 |   
295 |   .meta-item i {
296 |     margin-right: 5px;
297 |     color: var(--cor-primaria);
298 |   }
299 |   
300 |   .descricao-documento {
301 |     font-size: 14px;
302 |     color: #6c757d;
303 |     margin-bottom: 15px;
304 |     min-height: 45px;
305 |   }
306 |   
307 |   .badge {
308 |     padding: 6px 10px;
309 |     font-weight: 500;
310 |     font-size: 12px;
311 |     border-radius: 20px;
312 |   }
313 |   
314 |   .acoes-documento .btn {
315 |     width: 30px;
316 |     height: 30px;
317 |     padding: 0;
318 |     display: inline-flex;
319 |     align-items: center;
320 |     justify-content: center;
321 |     color: #6c757d;
322 |     background-color: #f8f9fa;
323 |     border: 1px solid var(--cor-borda);
324 |     border-radius: 50%;
325 |     margin-left: 5px;
326 |     transition: all 0.3s;
327 |   }
328 |   
329 |   .acoes-documento .btn:hover {
330 |     background-color: var(--cor-primaria);
331 |     color: white;
332 |     border-color: var(--cor-primaria);
333 |   }
334 |   
335 |   .table {
336 |     border-collapse: separate;
337 |     border-spacing: 0;
338 |     width: 100%;
339 |     margin-bottom: 1rem;
340 |     color: var(--cor-texto);
341 |     border-radius: var(--raio-borda);
342 |     overflow: hidden;
343 |   }
344 |   
345 |   .table thead th {
346 |     background-color: #f8f9fa;
347 |     border-bottom: 2px solid var(--cor-borda);
348 |     text-transform: uppercase;
349 |     font-size: 14px;
350 |     font-weight: 600;
351 |     letter-spacing: 0.5px;
352 |     padding: 15px;
353 |     color: var(--cor-secundaria);
354 |   }
355 |   
356 |   .table tbody tr {
357 |     transition: all 0.3s;
358 |   }
359 |   
360 |   .table tbody tr:hover {
361 |     background-color: var(--cor-terciaria);
362 |   }
363 |   
364 |   .table td {
365 |     padding: 15px;
366 |     vertical-align: middle;
367 |   }
368 |   
369 |   .pagination {
370 |     margin-top: 30px;
371 |   }
372 |   
373 |   .pagination .page-link {
374 |     color: var(--cor-primaria);
375 |     border-color: var(--cor-borda);
376 |     padding: 10px 20px;
377 |     margin: 0 3px;
378 |     border-radius: var(--raio-borda);
379 |     transition: all 0.3s;
380 |   }
381 |   
382 |   .pagination .page-link:hover {
383 |     background-color: var(--cor-terciaria);
384 |     color: var(--cor-secundaria);
385 |     border-color: var(--cor-secundaria);
386 |   }
387 |   
388 |   .pagination .page-item.active .page-link {
389 |     background-color: var(--cor-primaria);
390 |     border-color: var(--cor-primaria);
391 |   }
392 |   
393 |   .modal-content {
394 |     border-radius: var(--raio-borda);
395 |     border: none;
396 |     box-shadow: var(--sombra-padrao);
397 |   }
398 |   
399 |   .modal-header {
400 |     border-bottom: 1px solid var(--cor-borda);
401 |     background-color: var(--cor-terciaria);
402 |     padding: 20px;
403 |   }
404 |   
405 |   .modal-header .modal-title {
406 |     color: var(--cor-secundaria);
407 |     font-weight: 600;
408 |   }
409 |   
410 |   .modal-body {
411 |     padding: 30px;
412 |   }
413 |   
414 |   .informacoes-documento {
415 |     background-color: #f8f9fa;
416 |     padding: 20px;
417 |     border-radius: var(--raio-borda);
418 |     margin-bottom: 20px;
419 |   }
420 |   
421 |   .informacoes-documento p {
422 |     margin-bottom: 10px;
423 |   }
424 |   
425 |   .conteudo-documento h6 {
426 |     color: var(--cor-secundaria);
427 |     font-weight: 600;
428 |     margin-top: 20px;
429 |     margin-bottom: 10px;
430 |   }
431 |   
432 |   .conteudo-documento p {
433 |     margin-bottom: 15px;
434 |   }
435 |   
436 |   .analise-ia .card-header {
437 |     background-color: var(--cor-terciaria);
438 |   }
439 |   
440 |   .analise-ia .card-header h6 {
441 |     color: var(--cor-secundaria);
442 |   }
443 |   
444 |   .analise-ia ul {
445 |     margin-bottom: 20px;
446 |   }
447 |   
448 |   .analise-ia li {
449 |     margin-bottom: 8px;
450 |   }
451 |   
452 |   .modal-footer {
453 |     border-top: 1px solid var(--cor-borda);
454 |     padding: 20px;
455 |   }
456 |   
457 |   .modal-footer .btn {
458 |     padding: 10px 20px;
459 |     font-weight: 500;
460 |     border-radius: var(--raio-borda);
461 |   }
462 |   
463 |   .modal-footer .btn-secondary {
464 |     background-color: #6c757d;
465 |     border-color: #6c757d;
466 |   }
467 |   
468 |   .modal-footer .btn-info {
469 |     background-color: #17a2b8;
470 |     border-color: #17a2b8;
471 |     color: white;
472 |   }
473 |   
474 | .assistente-ia {
475 |     position: fixed;
476 |     bottom: 90px;
477 |     right: 20px;
478 |     width: 350px;
479 |     height: 450px;
480 |     background-color: var(--cor-fundo);
481 |     border-radius: var(--raio-borda);
482 |     box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
483 |     display: flex;
484 |     flex-direction: column;
485 |     z-index: 1000;
486 |     overflow: hidden;
487 |     display: none;
488 |   }
489 |   
490 |   .cabecalho-assistente {
491 |     background-color: var(--cor-primaria);
492 |     color: #fff;
493 |     padding: 15px;
494 |     display: flex;
495 |     justify-content: space-between;
496 |     align-items: center;
497 |   }
498 |   
499 |   .info-assistente {
500 |     display: flex;
501 |     align-items: center;
502 |   }
503 |   
504 |   .avatar-assistente {
505 |     width: 30px;
506 |     height: 30px;
507 |     background-color: #fff;
508 |     border-radius: 50%;
509 |     display: flex;
510 |     align-items: center;
511 |     justify-content: center;
512 |     margin-right: 10px;
513 |   }
514 |   
515 |   .avatar-assistente i {
516 |     color: var(--cor-primaria);
517 |   }
518 |   
519 |   .nome-assistente {
520 |     font-weight: 600;
521 |   }
522 |   
523 |   .acoes-assistente {
524 |     display: flex;
525 |     gap: 10px;
526 |   }
527 |   
528 |   .btn-minimizar, .btn-fechar {
529 |     background: none;
530 |     border: none;
531 |     color: #fff;
532 |     cursor: pointer;
533 |     font-size: 1em;
534 |     display: flex;
535 |     align-items: center;
536 |     justify-content: center;
537 |     width: 24px;
538 |     height: 24px;
539 |     border-radius: 50%;
540 |     transition: background-color 0.3s ease;
541 |   }
542 |   
543 |   .btn-minimizar:hover, .btn-fechar:hover {
544 |     background-color: rgba(255, 255, 255, 0.1);
545 |   }
546 |   
547 |   .corpo-assistente {
548 |     flex: 1;
549 |     display: flex;
550 |     flex-direction: column;
551 |     overflow: hidden;
552 |   }
553 |   
554 |   .mensagens {
555 |     flex: 1;
556 |     padding: 15px;
557 |     overflow-y: auto;
558 |   }
559 |   
560 |   .mensagem {
561 |     margin-bottom: 15px;
562 |     display: flex;
563 |     flex-direction: column;
564 |   }
565 |   
566 |   .mensagem-assistente .conteudo-mensagem {
567 |     background-color: #f1f0f0;
568 |     color: var(--cor-texto);
569 |     border-radius: 18px 18px 18px 0;
570 |     padding: 12px 15px;
571 |     max-width: 80%;
572 |     align-self: flex-start;
573 |   }
574 |   
575 |   .mensagem-usuario .conteudo-mensagem {
576 |     background-color: var(--cor-primaria);
577 |     color: #fff;
578 |     border-radius: 18px 18px 0 18px;
579 |     padding: 12px 15px;
580 |     max-width: 80%;
581 |     align-self: flex-end;
582 |     margin-left: auto;
583 |   }
584 |   
585 |   .timestamp {
586 |     font-size: 0.7em;
587 |     color: #888;
588 |     margin-top: 5px;
589 |     margin-left: 5px;
590 |   }
591 |   
592 |   .entrada-mensagem {
593 |     padding: 10px 15px;
594 |     display: flex;
595 |     align-items: center;
596 |     border-top: 1px solid var(--cor-borda);
597 |   }
598 |   
599 |   .entrada-mensagem input {
600 |     flex: 1;
601 |     padding: 10px 15px;
602 |     border: 1px solid var(--cor-borda);
603 |     border-radius: 20px;
604 |     outline: none;
605 |     font-size: 0.9em;
606 |   }
607 |   
608 |   .entrada-mensagem input:focus {
609 |     border-color: var(--cor-primaria);
610 |   }
611 |   
612 |   .btn-enviar {
613 |     background-color: var(--cor-primaria);
614 |     color: #fff;
615 |     border: none;
616 |     width: 36px;
617 |     height: 36px;
618 |     border-radius: 50%;
619 |     margin-left: 10px;
620 |     display: flex;
621 |     align-items: center;
622 |     justify-content: center;
623 |     cursor: pointer;
624 |     transition: background-color 0.3s ease;
625 |   }
626 |   
627 |   .btn-enviar:hover {
628 |     background-color: var(--cor-secundaria);
629 |   }
630 |   
631 |   .botao-assistente {
632 |     position: fixed;
633 |     bottom: 20px;
634 |     right: 20px;
635 |     width: 60px;
636 |     height: 60px;
637 |     background-color: var(--cor-primaria);
638 |     color: #fff;
639 |     border-radius: 50%;
640 |     display: flex;
641 |     align-items: center;
642 |     justify-content: center;
643 |     cursor: pointer;
644 |     box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
645 |     z-index: 999;
646 |     font-size: 1.5em;
647 |     transition: transform 0.3s ease, background-color 0.3s ease;
648 |   }
649 |   
650 |   .botao-assistente:hover {
651 |     background-color: var(--cor-secundaria);
652 |     transform: scale(1.05);
653 |   }
654 |   
655 |   
656 |   @media (max-width: 992px) {
657 |     .card-filtros {
658 |       margin-bottom: 30px;
659 |     }
660 |     
661 |     .estatistica-item {
662 |       margin-bottom: 10px;
663 |     }
664 |     
665 |     .documento {
666 |       margin-bottom: 20px;
667 |     }
668 |   }
669 |   
670 |   @media (max-width: 768px) {
671 |     body {
672 |       padding-top: 70px;
673 |     }
674 |     
675 |     .navbar-brand img.logo-hospital {
676 |       height: 32px;
677 |     }
678 |     
679 |     .secao-biblioteca {
680 |       padding: 50px 0;
681 |     }
682 |     
683 |     .titulo-secao {
684 |       font-size: 24px;
685 |     }
686 |     
687 |     .subtitulo-secao {
688 |       font-size: 16px;
689 |     }
690 |     
691 |     .assistente-ia {
692 |       width: 300px;
693 |     }
694 |     
695 |     .corpo-assistente {
696 |       height: 350px;
697 |     }
698 |   }
699 |   
700 |   @media (max-width: 576px) {
701 |     .card-busca .row {
702 |       row-gap: 10px;
703 |     }
704 |     
705 |     .assistente-ia {
706 |       width: calc(100% - 40px);
707 |       right: 20px;
708 |       bottom: 80px;
709 |     }
710 |     
711 |     .botao-assistente {
712 |       right: 20px;
713 |       bottom: 20px;
714 |     }
715 |     
716 |     .modal-dialog {
717 |       margin: 10px;
718 |     }
719 |   }


--------------------------------------------------------------------------------
/stylesgerenciamento2.css:
--------------------------------------------------------------------------------
  1 | :root {
  2 |     --cor-primaria: #3498db;
  3 |     --cor-secundaria: #2980b9;
  4 |     --cor-terciaria: #e8f4f8;
  5 |     --cor-texto: #ffffff;
  6 |     --cor-texto-claro: #f8f9fa;
  7 |     --cor-fundo: #1c1c1c;
  8 |     --cor-borda: #e1e1e1;
  9 |     --sombra-padrao: 0 4px 12px rgba(0, 0, 0, 0.1);
 10 |     --raio-borda: 8px;
 11 |     --espacamento: 100px;
 12 |     --cor-sucesso: #28a745;
 13 |     --cor-alerta: #ffc107;
 14 |     --cor-perigo: #dc3545;
 15 |     --cor-info: #17a2b8;
 16 |     --cor-cinza-claro: #f8f9fa;
 17 |     --cor-cinza-medio: #e9ecef;
 18 |     --cor-cinza-escuro: #6c757d;
 19 | }
 20 | 
 21 | * {
 22 |     margin: 0;
 23 |     padding: 0;
 24 |     box-sizing: border-box;
 25 | }
 26 | 
 27 | body {
 28 |     font-family: 'Roboto', 'Segoe UI', sans-serif;
 29 |     color: #ffffff;
 30 |     background-color: #1c1c1c;
 31 |     padding-top: 80px;
 32 |     overflow-x: hidden;
 33 | }
 34 | 
 35 | .cabecalho {
 36 |     width: 100%;
 37 | }
 38 | 
 39 | .navbar {
 40 |     background-color: #1c1c1c;
 41 |     box-shadow: var(--sombra-padrao);
 42 |     transition: top 0.3s ease;
 43 | }
 44 | 
 45 | .navbar-brand {
 46 |     padding: 0;
 47 | }
 48 | 
 49 | .logo-hospital {
 50 |     height: 50px;
 51 | }
 52 | 
 53 | .navbar-nav .nav-link {
 54 |     color: white;
 55 |     font-weight: 500;
 56 |     padding: 1rem 1.2rem;
 57 |     transition: color 0.3s;
 58 | }
 59 | 
 60 | .navbar-nav .nav-link:hover,
 61 | .navbar-nav .nav-link.active {
 62 |     color: var(--cor-primaria);
 63 | }
 64 | 
 65 | .navbar-nav .botao-login {
 66 |     margin-left: 10px;
 67 | }
 68 | 
 69 | .navbar-nav .btn-primary {
 70 |     background-color: var(--cor-primaria);
 71 |     border-color: var(--cor-primaria);
 72 |     color: var(--cor-texto);
 73 |     padding: 0.5rem 1.5rem;
 74 |     font-weight: 600;
 75 |     border-radius: var(--raio-borda);
 76 |     transition: all 0.3s;
 77 | }
 78 | 
 79 | .navbar-nav .btn-primary:hover {
 80 |     background-color: var(--cor-secundaria);
 81 |     border-color: var(--cor-secundaria);
 82 |     box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
 83 | }
 84 | 
 85 | .sidebar {
 86 |     background-color: #2c2c2c;
 87 |     box-shadow: var(--sombra-padrao);
 88 |     border-right: 1px solid var(--cor-borda);
 89 | }
 90 | 
 91 | .list-group-item {
 92 |     border: none;
 93 |     border-radius: 0;
 94 |     padding: 1rem 1.5rem;
 95 |     color: #555;
 96 |     font-weight: 500;
 97 |     transition: all 0.2s;
 98 | }
 99 | 
100 | .list-group-item:hover {
101 |     background-color: var(--cor-terciaria);
102 |     color: var(--cor-primaria);
103 | }
104 | 
105 | .list-group-item.active {
106 |     background-color: var(--cor-terciaria);
107 |     color: var(--cor-primaria);
108 |     border-left: 4px solid var(--cor-primaria);
109 | }
110 | 
111 | .list-group-item i {
112 |     width: 20px;
113 | }
114 | 
115 | .card {
116 |     border-radius: var(--raio-borda);
117 |     overflow: hidden;
118 |     box-shadow: var(--sombra-padrao);
119 |     transition: transform 0.3s;
120 | }
121 | 
122 | .card:hover {
123 |     transform: translateY(-2px);
124 | }
125 | 
126 | .btn-primary {
127 |     background-color: var(--cor-primaria);
128 |     border-color: var(--cor-primaria);
129 |     border-radius: var(--raio-borda);
130 |     padding: 0.5rem 1.5rem;
131 |     font-weight: 500;
132 |     transition: all 0.3s;
133 | }
134 | 
135 | .btn-primary:hover {
136 |     background-color: var(--cor-secundaria);
137 |     border-color: var(--cor-secundaria);
138 |     box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);
139 | }
140 | 
141 | .input-group .form-control {
142 |     border-radius: var(--raio-borda) 0 0 var(--raio-borda);
143 |     border: 1px solid var(--cor-borda);
144 | }
145 | 
146 | .input-group .btn-outline-primary {
147 |     border-radius: 0 var(--raio-borda) var(--raio-borda) 0;
148 |     border: 1px solid var(--cor-borda);
149 |     color: var(--cor-primaria);
150 | }
151 | 
152 | .input-group .btn-outline-primary:hover {
153 |     background-color: var(--cor-primaria);
154 |     color: white;
155 | }
156 | 
157 | .form-select {
158 |     border-radius: var(--raio-borda);
159 |     padding: 0.6rem 1rem;
160 |     border: 1px solid var(--cor-borda);
161 | }
162 | 
163 | .table {
164 |     margin-bottom: 0;
165 | }
166 | 
167 | .table thead {
168 |     background-color: var(--cor-terciaria);
169 | }
170 | 
171 | .table thead th {
172 |     font-weight: 600;
173 |     color: #555;
174 |     border-bottom: none;
175 |     padding: 1rem;
176 | }
177 | 
178 | .table tbody td {
179 |     padding: 1rem;
180 |     vertical-align: middle;
181 |     border-color: var(--cor-borda);
182 | }
183 | 
184 | .table tbody tr:hover {
185 |     background-color: rgba(232, 244, 248, 0.3);
186 | }
187 | 
188 | .badge {
189 |     padding: 0.5rem 0.8rem;
190 |     border-radius: 30px;
191 |     font-weight: 500;
192 |     font-size: 0.75rem;
193 | }
194 | 
195 | .bg-success {
196 |     background-color: var(--cor-sucesso) !important;
197 | }
198 | 
199 | .bg-warning {
200 |     background-color: var(--cor-alerta) !important;
201 | }
202 | 
203 | .bg-secondary {
204 |     background-color: var(--cor-cinza-escuro) !important;
205 | }
206 | 
207 | .btn-sm {
208 |     padding: 0.25rem 0.5rem;
209 |     font-size: 0.8rem;
210 |     border-radius: 4px;
211 | }
212 | 
213 | .btn-outline-primary {
214 |     color: var(--cor-primaria);
215 |     border-color: var(--cor-primaria);
216 | }
217 | 
218 | .btn-outline-primary:hover {
219 |     background-color: var(--cor-primaria);
220 |     color: white;
221 | }
222 | 
223 | .btn-outline-secondary {
224 |     color: var(--cor-cinza-escuro);
225 |     border-color: var(--cor-cinza-escuro);
226 | }
227 | 
228 | .btn-outline-secondary:hover {
229 |     background-color: var(--cor-cinza-escuro);
230 |     color: white;
231 | }
232 | 
233 | .btn-outline-danger {
234 |     color: var(--cor-perigo);
235 |     border-color: var(--cor-perigo);
236 | }
237 | 
238 | .btn-outline-danger:hover {
239 |     background-color: var(--cor-perigo);
240 |     color: white;
241 | }
242 | 
243 | .pagination {
244 |     margin-bottom: 0;
245 | }
246 | 
247 | .page-link {
248 |     color: var(--cor-primaria);
249 |     border-color: var(--cor-borda);
250 |     border-radius: 4px;
251 |     margin: 0 2px;
252 |     transition: all 0.2s;
253 | }
254 | 
255 | .page-link:hover {
256 |     background-color: var(--cor-terciaria);
257 |     color: var(--cor-primaria);
258 |     border-color: var(--cor-primaria);
259 | }
260 | 
261 | .page-item.active .page-link {
262 |     background-color: var(--cor-primaria);
263 |     border-color: var(--cor-primaria);
264 | }
265 | 
266 | .rounded-circle {
267 |     display: flex;
268 |     align-items: center;
269 |     justify-content: center;
270 |     font-weight: 600;
271 |     width: 40px;
272 |     height: 40px;
273 |     font-size: 1rem;
274 | }
275 | 
276 | .assistente-ia {
277 |     position: fixed;
278 |     bottom: 80px;
279 |     right: 20px;
280 |     width: 350px;
281 |     height: 450px;
282 |     background-color: white;
283 |     border-radius: var(--raio-borda);
284 |     box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
285 |     display: flex;
286 |     flex-direction: column;
287 |     overflow: hidden;
288 |     z-index: 1000;
289 |     opacity: 0;
290 |     transform: translateY(20px);
291 |     pointer-events: none;
292 |     transition: all 0.3s ease;
293 | }
294 | 
295 | .assistente-ia.ativo {
296 |     opacity: 1;
297 |     transform: translateY(0);
298 |     pointer-events: all;
299 | }
300 | 
301 | .cabecalho-assistente {
302 |     background-color: var(--cor-primaria);
303 |     color: white;
304 |     padding: 15px;
305 |     display: flex;
306 |     justify-content: space-between;
307 |     align-items: center;
308 | }
309 | 
310 | .info-assistente {
311 |     display: flex;
312 |     align-items: center;
313 | }
314 | 
315 | .avatar-assistente {
316 |     width: 35px;
317 |     height: 35px;
318 |     background-color: rgba(255, 255, 255, 0.2);
319 |     border-radius: 50%;
320 |     display: flex;
321 |     align-items: center;
322 |     justify-content: center;
323 |     margin-right: 10px;
324 | }
325 | 
326 | .nome-assistente {
327 |     font-weight: 600;
328 | }
329 | 
330 | .acoes-assistente button {
331 |     background: none;
332 |     border: none;
333 |     color: white;
334 |     font-size: 0.9rem;
335 |     cursor: pointer;
336 |     margin-left: 10px;
337 |     opacity: 0.8;
338 |     transition: opacity 0.2s;
339 | }
340 | 
341 | .acoes-assistente button:hover {
342 |     opacity: 1;
343 | }
344 | 
345 | .corpo-assistente {
346 |     flex: 1;
347 |     display: flex;
348 |     flex-direction: column;
349 |     padding: 15px;
350 |     overflow: hidden;
351 | }
352 | 
353 | .mensagens {
354 |     flex: 1;
355 |     overflow-y: auto;
356 |     padding-right: 5px;
357 | }
358 | 
359 | .mensagem {
360 |     margin-bottom: 15px;
361 |     display: flex;
362 |     flex-direction: column;
363 | }
364 | 
365 | .mensagem-assistente .conteudo-mensagem {
366 |     background-color: #d3d3d3;
367 |     color: #1c1c1c;
368 |     border-radius: 15px 15px 15px 0;
369 |     padding: 10px 15px;
370 |     max-width: 80%;
371 |     align-self: flex-start;
372 | }
373 | 
374 | .mensagem-usuario .conteudo-mensagem {
375 |     background-color: var(--cor-primaria);
376 |     color: white;
377 |     border-radius: 15px 15px 0 15px;
378 |     padding: 10px 15px;
379 |     max-width: 80%;
380 |     align-self: flex-end;
381 |     margin-left: auto;
382 | }
383 | 
384 | .timestamp {
385 |     font-size: 0.7rem;
386 |     color: #aaa;
387 |     margin-top: 5px;
388 | }
389 | 
390 | .entrada-mensagem {
391 |     margin-top: 15px;
392 |     display: flex;
393 |     border-top: 1px solid var(--cor-borda);
394 |     padding-top: 15px;
395 | }
396 | 
397 | .entrada-mensagem input {
398 |     flex: 1;
399 |     padding: 10px;
400 |     border: 1px solid var(--cor-borda);
401 |     border-radius: var(--raio-borda) 0 0 var(--raio-borda);
402 |     outline: none;
403 | }
404 | 
405 | .entrada-mensagem input:focus {
406 |     border-color: var(--cor-primaria);
407 | }
408 | 
409 | .btn-enviar {
410 |     background-color: var(--cor-primaria);
411 |     color: white;
412 |     border: none;
413 |     border-radius: 0 var(--raio-borda) var(--raio-borda) 0;
414 |     padding: 0 15px;
415 |     cursor: pointer;
416 |     transition: background-color 0.2s;
417 | }
418 | 
419 | .btn-enviar:hover {
420 |     background-color: var(--cor-secundaria);
421 | }
422 | 
423 | .botao-assistente {
424 |     position: fixed;
425 |     bottom: 20px;
426 |     right: 20px;
427 |     width: 60px;
428 |     height: 60px;
429 |     background-color: var(--cor-primaria);
430 |     color: white;
431 |     border-radius: 50%;
432 |     display: flex;
433 |     align-items: center;
434 |     justify-content: center;
435 |     cursor: pointer;
436 |     box-shadow: 0 3px 15px rgba(52, 152, 219, 0.4);
437 |     z-index: 999;
438 |     transition: all 0.3s;
439 | }
440 | 
441 | .botao-assistente:hover {
442 |     background-color: var(--cor-secundaria);
443 |     transform: scale(1.05);
444 | }
445 | 
446 | .botao-assistente i {
447 |     font-size: 1.5rem;
448 | }
449 | 
450 | @media (max-width: 991.98px) {
451 |     body {
452 |         padding-top: 60px;
453 |     }
454 |     
455 |     .navbar-brand img {
456 |         height: 40px;
457 |     }
458 |     
459 |     .assistente-ia {
460 |         width: 300px;
461 |         height: 400px;
462 |     }
463 | }
464 | 
465 | @media (max-width: 767.98px) {
466 |     .assistente-ia {
467 |         width: calc(100% - 40px);
468 |         height: 400px;
469 |         bottom: 90px;
470 |     }
471 |     
472 |     .botao-assistente {
473 |         width: 50px;
474 |         height: 50px;
475 |     }
476 |     
477 |     .table {
478 |         min-width: 650px;
479 |     }
480 |     
481 |     .card-body {
482 |         padding: 1rem;
483 |     }
484 | }
485 | 
486 | @keyframes fadeIn {
487 |     from {
488 |         opacity: 0;
489 |         transform: translateY(20px);
490 |     }
491 |     to {
492 |         opacity: 1;
493 |         transform: translateY(0);
494 |     }
495 | }
496 | 
497 | .fade-in {
498 |     animation: fadeIn 0.5s ease forwards;
499 | }
500 | 
501 | ::-webkit-scrollbar {
502 |     width: 8px;
503 | }
504 | 
505 | ::-webkit-scrollbar-track {
506 |     background: #f1f1f1;
507 |     border-radius: 10px;
508 | }
509 | 
510 | ::-webkit-scrollbar-thumb {
511 |     background: #bbb;
512 |     border-radius: 10px;
513 | }
514 | 
515 | ::-webkit-scrollbar-thumb:hover {
516 |     background: #999;
517 | }
518 | 
519 | .transition-effect {
520 |     transition: all 0.3s ease;
521 | }
522 | 
523 | 


--------------------------------------------------------------------------------
/telemedicina.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="pt-br">
  3 | <head>
  4 |   <meta charset="UTF-8">
  5 |   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  6 |   <title>Telemedicina - Hospital Sabará</title>
  7 |   <link rel="icon" href="logo-sabara - Copia.png" type="image/png">
  8 |   <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
  9 |   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
 10 |   <link rel="stylesheet" href="styles-telemedicina.css">
 11 | </head>
 12 | <body>
 13 |     <header class="cabecalho">
 14 |       <nav class="navbar navbar-expand-lg navbar-light fixed-top">
 15 |           <div class="container">
 16 |               <a class="navbar-brand" href="index.html">
 17 |                   <img src="./logo-sabara.png" alt="Logo Hospital Sabará" class="logo-hospital">
 18 |               </a>
 19 |               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacao" aria-controls="menuNavegacao" aria-expanded="false" aria-label="Toggle navigation">
 20 |                   <span class="navbar-toggler-icon"></span>
 21 |               </button>
 22 |               
 23 |               <div class="collapse navbar-collapse" id="menuNavegacao">
 24 |                   <ul class="navbar-nav ms-auto">
 25 |                       <li class="nav-item">
 26 |                           <a class="nav-link active" href="index.html">Início</a>
 27 |                       </li>
 28 |                       <li class="nav-item">
 29 |                           <a class="nav-link" href="biblioteca-laudos.html">Biblioteca de Laudos</a>
 30 |                       </li>
 31 |                       <li class="nav-item">
 32 |                           <a class="nav-link" href="gerenciamento-documentos.html">Documentos</a>
 33 |                       </li>
 34 |                       <li class="nav-item">
 35 |                           <a class="nav-link" href="telemedicina.html">Telemedicina</a>
 36 |                       </li>
 37 |                       <li class="nav-item botao-login">
 38 |                           <a class="btn btn-primary" href="login.html">Login</a>
 39 |                       </li>
 40 |                   </ul>
 41 |               </div>
 42 |           </div>
 43 |       </nav>
 44 |   </header>
 45 |     <div class="assistente-ia" id="assistenteIA">
 46 |       <div class="cabecalho-assistente">
 47 |           <div class="info-assistente">
 48 |               <div class="avatar-assistente">
 49 |                   <i class="fas fa-robot"></i>
 50 |               </div>
 51 |               <div class="nome-assistente">GuardianPro - Assistente Virtual</div>
 52 |           </div>
 53 |           <div class="acoes-assistente">
 54 |               <button class="btn-minimizar" id="minimizarAssistente"><i class="fas fa-minus"></i></button>
 55 |               <button class="btn-fechar" id="fecharAssistente"><i class="fas fa-times"></i></button>
 56 |           </div>
 57 |       </div>
 58 |       <div class="corpo-assistente">
 59 |           <div class="mensagens" id="mensagensAssistente">
 60 |               <div class="mensagem mensagem-assistente">
 61 |                   <div class="conteudo-mensagem">
 62 |                       Olá! Sou GuardianPro, o assistente virtual do Hospital Sabará. Como posso ajudar você hoje?
 63 |                   </div>
 64 |                   <div class="timestamp">Agora</div>
 65 |               </div>
 66 |           </div>
 67 |           <div class="entrada-mensagem">
 68 |               <input type="text" placeholder="Digite sua pergunta..." id="mensagemUsuario">
 69 |               <button class="btn-enviar" id="enviarMensagem"><i class="fas fa-paper-plane"></i></button>
 70 |           </div>
 71 |       </div>
 72 |   </div>
 73 | 
 74 |   <div class="botao-assistente" id="botaoAssistente">
 75 |       <i class="fas fa-robot"></i>
 76 |   </div>
 77 | 
 78 |   <main class="videochamada">
 79 |     <div class="container mt-5">
 80 |       <h1 class="text-center mb-4">Consulta por Telemedicina</h1>
 81 |       <div class="video-container">
 82 |         <div class="video-principal">
 83 |           <img src="/api/placeholder/500/300" class="img-fluid" alt="Médico">
 84 |           <p class="nome-usuario">Dr. João Mendes</p>
 85 |         </div>
 86 |         <div class="video-paciente">
 87 |           <img src="/api/placeholder/150/100" class="img-fluid" alt="Paciente">
 88 |           <p class="nome-usuario">Você</p>
 89 |         </div>
 90 |         <div class="controles-video text-center">
 91 |           <button class="btn btn-outline-dark"><i class="fas fa-microphone-slash"></i></button>
 92 |           <button class="btn btn-outline-dark"><i class="fas fa-video"></i></button>
 93 |           <button class="btn btn-danger"><i class="fas fa-phone-slash"></i> Encerrar</button>
 94 |         </div>
 95 |       </div>
 96 |     </div>
 97 |   </main>
 98 |   <footer class="rodape">
 99 |     <div class="container text-center">
100 |       <p>© 2025 Hospital Sabará. Atendimento digital com segurança e inteligência.</p>
101 |     </div>
102 |   </footer>
103 |   <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
104 |   <script src="script-telemedicina.js"></script>
105 | </body>
106 | </html>


--------------------------------------------------------------------------------