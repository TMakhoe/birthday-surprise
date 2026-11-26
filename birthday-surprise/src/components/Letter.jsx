function Letter({ onClose }) {
  return (
    <div className="letter-overlay" onClick={onClose}>
      <div className="letter-card" onClick={(e) => e.stopPropagation()}>
        <button className="letter-close" onClick={onClose} aria-label="Close letter">
          ×
        </button>

        <h2 className="letter-card-title">Happy Birthday, my love ❤️🎂🎉</h2>

        <div className="letter-card-body">
          <p>
            My love, today is all about you and I just want to celebrate you
            properly.
          </p>
          <p>
            Thank you for being you. For your beautiful smile that always makes my
            day better, for your laugh that I can never get tired of, and for your
            heart that is just so pure and kind. You have this way of making
            everything feel lighter and happier just by being there.
          </p>
          <p>
            You have always been there for me, my baby. In the good times and the
            bad times, you’ve stood by me. You believe in me even when I don’t
            believe in myself. You are my biggest supporter, my best friend, and my
            favourite person in the whole world. I am so lucky to have you.
          </p>
          <p>
            Naledi, you deserve the whole world. You deserve happiness, peace,
            success, and all the love in the world. I pray this new year of your
            life brings you everything you’ve been dreaming of and more. And I want
            to be right there next to you, cheering you on for all of it.
          </p>
          <p>
            I love you so much, my queen. More than words can even explain. Thank
            you for coming into my life and making it so much better and so much
            funnier 😂❤️
          </p>
          <p>
            Enjoy your day today, my baby. Eat cake, laugh too much, be spoiled,
            and know that you are loved beyond measure.
          </p>
        </div>

        <p className="letter-card-signature">
          Happy Birthday, MaMakhoe.
          <br />
          I love you forever ❤️🎂🎉
        </p>
      </div>
    </div>
  );
}

export default Letter;
