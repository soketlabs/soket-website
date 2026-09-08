const pillars = [
  {
    title: "Deep Tech R&D",
    statement: "We train at the model layer. Research first, not wrappers.",
    // Add the longer description for this pillar here.
    description: "",
  },
  {
    title: "Sovereignty and Control",
    statement:
      "Your data, your intelligence, systems you can run and audit.",
    description: "",
  },
  {
    title: "Trust for Critical Work",
    statement: "Built for work where a wrong answer has a cost.",
    description: "",
  },
  {
    title: "Building with and for Humanity",
    statement:
      "Inclusive languages, open technical work, built with the people who use it.",
    description: "",
  },
];

const OurPillars = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 text-left lg:mb-16">
          <p className="text-sm font-geist-mono text-gray-600 mb-4">
            // OUR PILLARS
          </p>
          <h2 className="text-4xl md:text-6xl font-space-grotesk max-w-3xl">
            The four pillars our vision stands on
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-soket-gray rounded-lg p-6 lg:p-8 flex flex-col text-left"
            >
              <p className="text-sm font-geist-mono text-soket-blue mb-6">
                0{index + 1}
              </p>
              <h3 className="text-2xl font-space-grotesk mb-4">
                {pillar.title}
              </h3>
              <p className="text-base text-black opacity-70">
                {pillar.statement}
              </p>
              {pillar.description && (
                <p className="text-base text-black opacity-60 mt-4">
                  {pillar.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPillars;
