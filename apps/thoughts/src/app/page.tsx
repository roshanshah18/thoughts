import 'nes.css/css/nes.min.css';

export default function Index() {
  const thoughts = [
    {
      id: 1,
      title: 'Nothing is truly Ours',
      link: '/thoughts/the-illusion-of-self',
    },
    // {
    //   id: 2,
    //   title: 'Flow State & Creativity',
    //   link: '/thoughts/flow-state-creativity',
    // },
    // {
    //   id: 3,
    //   title: 'Silence Between Notes',
    //   link: '/thoughts/silence-between-notes',
    // },
  ];

  //   <div className="lists">
  //   <ul className="nes-list is-disc">
  //     <li>Good morning.</li>
  //     <li>Thou hast had a good night's sleep, I hope.</li>
  //     <li>Thou hast had a good afternoon</li>
  //     <li>Good night.</li>
  //   </ul>
  // </div>

  {
    /* <img className="nes-avatar" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">

<img className="nes-avatar is-small" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">
<img className="nes-avatar is-medium" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">
<img className="nes-avatar is-large" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">


<img class="nes-avatar is-rounded" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">

<img class="nes-avatar is-rounded is-small" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">
<img class="nes-avatar is-rounded is-medium" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;">
<img class="nes-avatar is-rounded is-large" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15" style="image-rendering: pixelated;"> */
  }
  return (
    <div>
      <header>
        <section className="message -left ">
          <div className="nes-balloon from-left">
            <p>Namaste, I observe them, yet I do not own them.</p>
          </div>
        </section>
        <i className="nes-octocat animate "></i>
        <h1 className="nes-text is-primary">Thoughts</h1>
      </header>
      <main>
        <section>
          {/* <img
            className="nes-avatar is-round is-large"
            alt="Gravatar image example"
            src="https://www.gravatar.com/avatar?s=15"
            style={{ imageRendering: 'pixelated' }}
          /> */}

          <h2 className="nes-text is-primary">Ready to Explore?</h2>
          {/* <progress className="nes-progress" value="90" max="100"></progress> */}
          <ul className="nes-list is-disc">
            {thoughts.map((thought) => (
              <li key={thought.id}>
                <a href={thought.link} className="nes-text is-primary">
                  {thought.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
        {/* <a href="#" className="nes-badge is-splited">
          <span className="is-dark">npm</span>
          <span className="is-primary">1.1.0</span>
        </a>

        <a href="#" className="nes-badge is-icon">
          <span className="is-warning">
            <i className="nes-icon star is-small"></i>
          </span>
          <span className="is-primary">Icons</span>
        </a> */}

        {/* <section className="nes-container is-dark">
          <section className="message-list">
            <section className="message -left">
              <i className="nes-bcrikko"></i>
              <div className="nes-balloon from-left is-dark">
                <p>Hello NES.css</p>
              </div>
            </section>

            <section className="message -right">
              <div className="nes-balloon from-right is-dark">
                <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
              </div>
              <i className="nes-bcrikko"></i>
            </section>
          </section>
        </section> */}

        {/* <section className="icon-list">
          <a
            href="https://github.com/roshanshah18"
            className="nes-icon github is-medium"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://x.com/"
            className="nes-icon twitter is-medium"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            href="https://x.com/"
            className="nes-icon twitter is-medium"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          </section> */}
        {/* <i className="snes-jp-logo"></i> */}
        {/* <section className="nes-container">
          <section className="message-list">
            <section className="message -left">
              <i className="nes-bcrikko"></i>
              <div className="nes-balloon from-left">
                <p>Hello NES.css</p>
              </div>
            </section>

            <section className="message -right">
              <div className="nes-balloon from-right">
                <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
              </div>
              <i className="nes-bcrikko"></i>
            </section>
          </section>
        </section> */}

        <i
          className="nes-squirtle"
          style={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            zIndex: 50,
          }}
        ></i>
      </main>
    </div>
  );
}
