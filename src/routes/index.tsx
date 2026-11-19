
const HERO_WORDS = [
  {
    word: "visibilité",
    color: "from-yellow-300 via-amber-400 to-yellow-500",
  },
  {
    word: "notoriété",
    color: "from-pink-400 via-rose-500 to-fuchsia-500",
  },
  {
    word: "potentiel",
    color: "from-emerald-300 via-green-500 to-teal-500",
  },
  {
    word: "business",
    color: "from-red-400 via-rose-500 to-red-600",
  },
  {
    word: "marketing",
    color: "from-sky-400 via-blue-500 to-indigo-600",
  },
];

function DynamicHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_WORDS.length);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const currentWord = HERO_WORDS[index];

  return (
    <div className="mx-auto max-w-5xl px-2">
      <h1 className="font-display text-[clamp(2.2rem,5.5vw,4.7rem)] font-light leading-[1.18] tracking-[-0.055em] text-ink">
        Faites de votre{" "}
        <span className="relative inline-grid align-baseline">
          <AnimatePresence mode="sync">
            <motion.span
              key={currentWord.word}
              initial={{
                opacity: 0,
                y: 8,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -8,
                filter: "blur(8px)",
              }}
              transition={{
                opacity: { duration: 0.65, ease: "easeInOut" },
                y: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                filter: { duration: 0.65, ease: "easeInOut" },
              }}
              className={`col-start-1 row-start-1 inline-block bg-gradient-to-r ${currentWord.color} bg-clip-text font-semibold text-transparent`}
            >
              {currentWord.word}
            </motion.span>
          </AnimatePresence>
        </span>{" "}
        un accélérateur
        <span className="block">de croissance.</span>
      </h1>
    </div>
  );
}
