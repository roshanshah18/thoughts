export default function Index() {
  const thoughts = [
    {
      id: 1,
      title: 'Human Desires',
      link: '/thoughts/human-desires',
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

  return (
    <div>
      <header>
        <h1>Thoughts</h1>
      </header>

      <main>
        <section>
          <h2>Ready to Explore?</h2>
          <ul>
            {thoughts.map((thought) => (
              <li key={thought.id}>
                <a href={thought.link}>{thought.title}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
