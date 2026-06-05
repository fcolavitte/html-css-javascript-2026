# REFLEXION — Ejercicio 1.1: Estructura Semántica HTML

> **Instrucciones:** Completá este archivo DESPUÉS de terminar tu solución. Escribí con tus propias palabras. Respuestas copiadas de internet o generadas por IA sin elaboración propia no son válidas.
>
> Tiempo esperado para completar esta reflexión: 20–30 minutos.

---

## Sección 1 — Explicación de mi solución

*Describí en 150–250 palabras qué hace tu archivo HTML y cuáles fueron las decisiones de estructura que tomaste. No copies el código, explicá el razonamiento.*

> ✏️ **Tu respuesta aquí:**
>
> El archivo HTML posee la estructura base de un blog tecnológico basado en "El impacto de la IA en el desarrollo de software". Para la confección del mismo me guié por los requerimientos obligatorios paso a paso y adicioné el primer requerimiento electivo.
> El archivo posee la estructura base de un código HTML, y en el body se cuenta con header, main y footer. Para el logo agregué una carpeta resources para colocar la imagen propia del logo del blog, para el resto de imagenes tome el link de imagenes web.
> Para el texto del placeholder me basé en el copilot de google y lo modifiqué para cumplir con ciertos requerimientos de SPEC.md.

---

## Sección 2 — Preguntas conceptuales

Respondé cada pregunta. Las respuestas deben ser tuyas. Podés investigar, pero explicá con tus palabras.

### 2.1 — ¿Cuál es la diferencia entre `<section>` y `<article>`? ¿Cuándo usarías cada uno?

> ✏️ **Tu respuesta:**
>
> article se usa para definir los límites de un texto temático en general que puede tener coherencia por sí solo.
> section se usa para una idea o subtema de una idea más general (artículo).
---

### 2.2 — ¿Por qué es importante el atributo `datetime` en la etiqueta `<time>`? ¿Quién lo usa?

> ✏️ **Tu respuesta:**
>
> El contenido dentro de la etiqueta de inicio y de cierre muestra un texto legible por usuario, pero el atributo datetime tiene un formato estandar y es legible directamente por un sistema informático.
> El datetime es utilizado por motores de busqueda.
---

### 2.3 — Tu página tiene `<header>` en dos lugares: uno para la página y uno dentro del `<article>`. ¿Eso es válido? ¿Por qué?

> ✏️ **Tu respuesta:**
>
> Sí, es válido. el header principal de la página es una parte general de la estructura de la página en sí, pudiendo albergar menú, iconos u otras funcionalidades genericas de la página.
> Por otro lado, el header de un article está más orientado a un encabezado informativo del articulo, donde se puede incluir título, autor, fecha, entre otros.
---

### 2.4 — Un motor de búsqueda como Google lee tu HTML. ¿Qué ventaja le da usar etiquetas semánticas versus usar solo `<div>` con clases?

> ✏️ **Tu respuesta:**
>
> Visualmente se pueden conseguir los mismos resultados, pero para un motor de búsqueda le es complejo interpretar qué se quiere transmitir solo con un conjunto de divs.
> Si se usa etiquetas semánticas el motor de búsqueda puede asociar mejor el contenido de la página (al "entenderlo") y relacionarlo con lo buscado, mejorando el SEO de la página.
---

### 2.5 — Encontrá **un error semántico** en el siguiente fragmento y explicá cómo lo corregirías:

```html
<div class="navigation">
  <div class="nav-item"><a href="/home">Inicio</a></div>
  <div class="nav-item"><a href="/about">Nosotros</a></div>
</div>

<div class="main-content">
  <div class="post-title">Mi primer artículo</div>
  <div class="post-body">
    <p>Contenido del artículo...</p>
  </div>
</div>
```

> ✏️ **Tu respuesta:**
>
> El fragmento previo consta de etiquetas div con clases el cual no es fácilmente clasificable su contenido por un motor de búsqueda.
> El div de clase navigation lo reemplazaría por un nav, y los clase nav-item por il en un ul.
> El div de clase main-content lo reemplazaría por la etiqueta main.
> El div de clase post-title lo pondría en un h1, en un header.
> El div de clase post-body lo reemplazaría por la etiqueta body.
> Entiendo que es solo un fragmento de código pero seguramente estaría faltando en la parte superior la etiqueta doctype y head con los meta correspondientes.
---

## Sección 3 — Decisiones técnicas

### 3.1 — ¿Qué etiqueta usaste para el logo y por qué? ¿Hay alternativas?

> ✏️ **Tu respuesta:**
>
> Para el logo usé la etiqueta img ya que es la habitual para incluir imágenes, pero podría haber usado un div (poco recomendable) con un CSS que le de medidas fijas y una imagen background del logo.

---

### 3.2 — ¿Elegiste `<ul>` u `<ol>` para tu lista? ¿Por qué esa y no la otra?

> ✏️ **Tu respuesta:**
>
> Usé ul (Unordered List) ya que no me interesaba darle un orden numérico a la lista y que tenga igual peso cada opción/item.
---

### 3.3 — Si alguien accede a tu página solo con un lector de pantalla (sin ver el HTML), ¿podría navegar y entender el contenido? ¿Qué cambiarías para mejorar la experiencia?

> ✏️ **Tu respuesta:**
>
> La página se puede leer, pero como primer dificultad el tamaño de las imagenes complican la interpretación/lectura adecuada del contenido.
> Le agregaría formato CSS para hacerla más llamativa y que no quede todo vertical, o al menos eligiría imágenes más chicas si no puedo agregar CSS(como en esta parte del TP).
---

## Sección 4 — Declaración de uso de IA

Marcá con una `x` lo que corresponda:

```
[ ] Resolví el ejercicio completamente sin ayuda de IA
[x] Usé IA para entender algún concepto, pero escribí el código yo
[ ] Usé IA para generar un borrador que luego modifiqué y entendí
[ ] Usé IA extensamente y completé la reflexión para entender lo que hice
```

*Si usaste IA, describí brevemente cómo:*

> ✏️ **Tu respuesta (opcional si no usaste IA):**
> Usé IA para redactar la base del placeholder sobre la temática elegida, pero lo fuí modificando según pedían los requisitos.
> Particularmente en este documento REFLEXION lo usé para buscar la diferencia de uso entre section y article pero solo para entenderla, sin "copiar y pegar".
---

## Sección 5 — Autoevaluación

En una escala del 1 al 5, ¿cuánto entendés ahora el concepto de HTML semántico?

```
[ ] 1 — Muy poco, necesito repasar
[ ] 2 — Entiendo lo básico
[x] 3 — Lo entiendo bien
[ ] 4 — Lo entiendo bien y puedo explicárselo a otro
[ ] 5 — Podría dar una clase sobre esto
```

*¿Qué parte te resultó más difícil?*

> ✏️ **Tu respuesta:**
> Manejar el git, tube que borrar y clonar de nuevo el repo porque no sabía cómo volver para atras, por ejemplo empecé llamando al archivo main.html, y cuando lo terminé con todos los commits me dí cuenta que el nombre no era index.html y ya me habían quedado todos los commits así.