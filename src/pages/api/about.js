const blurbs = [
  "being angry at the Windows Registry",
  "breaking my homelab",
  "making Docker containers",
  "obsessing over monospace typography",
  "reading a man page in Terminal.app",
  "reinstalling Windows",
  "writing a shell script",
];

const facts = [
  "being sad I will never play Half-Life 3",
  "being a Neon Genesis Evangelion evangelist",
  "not doing cardio",
  "recommending horror fiction that will ruin your sleep cycle",
  "telling you to watch Cowboy Bebop",
  '"precise gameplay" in Valorant',
  "unprompted praise of The Legend of Zelda: Breath of the Wild's interconnected systems and choseive world design",
];

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

export async function get() {
  const blurb = blurbs.sample();
  const fact = facts.sample();

  return new Response(JSON.stringify({ blurb, fact }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
