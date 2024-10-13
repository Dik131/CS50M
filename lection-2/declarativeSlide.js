const SLIDE = {
  title: 'React is Declarative',
  bullets: [
    'Imperative vs Declarative',
    "The browser APIs are't fun to work with",
    'React allows us to write what we want, and the library will take care of the DOM manipulation',
  ],
}

createSlide = (slide) => {
  return (
    <Slide>
      <h1>{SLIDE.title}</h1>
      <ul>
        {SLIDE.bullets.map((bullets) => (
          <li>{bullets}</li>
        ))}
      </ul>
    </Slide>
  )
}
