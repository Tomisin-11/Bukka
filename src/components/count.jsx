import { useEffect, useState } from "react";

function CountUp({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation time (ms)
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const stats = [
    { value: 995, suffix: "K", label: "Happy People" },
    { value: 48, suffix: "K", label: "Chef Recipe" },
    { value: 25, suffix: "", label: "Cup of Coffee" },
    { value: 10, suffix: "K", label: "Best Awards" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-orange-500 text-4xl md:text-5xl font-bold">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
